'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Eye, Code } from 'lucide-react';

interface GitHubStats {
  followers: number;
  following: number;
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  topLanguages: string[];
  profileUrl: string;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/github');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
        <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-center gap-3 mb-8"
    >
      <a
        href={stats.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm dark:bg-white/10 px-4 py-2 rounded-lg border border-black/5 dark:border-white/10 hover:scale-105 transition-all shadow-md hover:shadow-lg"
      >
        <Github size={18} className="text-purple-600 dark:text-purple-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {stats.followers} Followers
        </span>
      </a>
      <a
        href={`${stats.profileUrl}?tab=following`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm dark:bg-white/10 px-4 py-2 rounded-lg border border-black/5 dark:border-white/10 hover:scale-105 transition-all shadow-md hover:shadow-lg"
      >
        <Eye size={18} className="text-purple-600 dark:text-purple-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {stats.following} Following
        </span>
      </a>
      <a
        href={`${stats.profileUrl}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm dark:bg-white/10 px-4 py-2 rounded-lg border border-black/5 dark:border-white/10 hover:scale-105 transition-all shadow-md hover:shadow-lg"
      >
        <Code size={18} className="text-purple-600 dark:text-purple-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {stats.publicRepos} Repos
        </span>
      </a>
      <a
        href={`${stats.profileUrl}?tab=stars`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm dark:bg-white/10 px-4 py-2 rounded-lg border border-black/5 dark:border-white/10 hover:scale-105 transition-all shadow-md hover:shadow-lg"
      >
        <Star size={18} className="text-purple-600 dark:text-purple-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {stats.totalStars} Stars
        </span>
      </a>
    </motion.div>
  );
}

