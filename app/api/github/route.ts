import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'SatyaisCoding';

export async function GET() {
  try {
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const userData = await userResponse.json();

    // Fetch repositories
    const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
      next: { revalidate: 3600 },
    });

    const repos = reposResponse.ok ? await reposResponse.json() : [];

    // Calculate stats
    const totalStars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
    const totalForks = repos.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);
    const publicRepos = repos.length;

    // Get language stats
    const languagePromises = repos.slice(0, 10).map(async (repo: any) => {
      const langResponse = await fetch(repo.languages_url, {
        next: { revalidate: 3600 },
      });
      return langResponse.ok ? await langResponse.json() : {};
    });

    const languagesData = await Promise.all(languagePromises);
    const languageCounts: Record<string, number> = {};

    languagesData.forEach((langs: Record<string, number>) => {
      Object.entries(langs).forEach(([lang, bytes]) => {
        languageCounts[lang] = (languageCounts[lang] || 0) + bytes;
      });
    });

    const topLanguages = Object.entries(languageCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([lang]) => lang);

    return NextResponse.json({
      followers: userData.followers || 0,
      following: userData.following || 0,
      publicRepos,
      totalStars,
      totalForks,
      topLanguages,
      avatar: userData.avatar_url,
      profileUrl: userData.html_url,
    });
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}

