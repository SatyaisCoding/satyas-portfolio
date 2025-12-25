import { NextResponse } from 'next/server';

// Import data - Note: We'll define the data directly here to avoid client component issues
const projectsData = [
  {
    title: "Genius",
    description: "I created a groundbreaking SaaS AI Platform that transforms text into diverse content, revolutionizing content creation with unmatched efficiency.",
    tags: ["React", "Next.js", "Stripe", "Tailwind", "Prisma"],
    links: 'https://github.com/SatyaisCoding/genius',
    demoUrl: 'https://genius-saas.vercel.app',
  },
  {
    title: "StudyNotion",
    description: "Developed StudyNotion, a fully functional ed-tech platform using the MERN Stack, enabling content creation, consumption and rating Educational Content.",
    tags: ["React", "ExpressJS", "NodeJS", "Tailwind", "MongoDB"],
    links: 'https://github.com/SatyaisCoding/StudyNotion_An-Edu-Tech-Platform',
    demoUrl: '',
  },
  {
    title: "Insight-Xplorer",
    description: "Developed a SAAS product with an AI-powered chatbot enabling seamless interaction with PDFs through questions, providing insightful answers.",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "tRPC"],
    links: 'https://github.com/SatyaisCoding/Insight-Xplorer',
    demoUrl: '',
  },
];

const skillsData = [
  // Programming Languages
  { name: "Java", level: 90, category: "Programming" },
  { name: "Rust", level: 65, category: "Programming" },
  { name: "JavaScript", level: 90, category: "Programming" },
  { name: "TypeScript", level: 80, category: "Programming" },
  { name: "SQL", level: 80, category: "Database" },

  // Frontend
  { name: "HTML", level: 85, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "ReactJS", level: 88, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TailwindCSS", level: 90, category: "Frontend" },
  { name: "shadcn/ui", level: 85, category: "Frontend" },
  { name: "Framer Motion", level: 80, category: "Frontend" },

  // Backend & APIs
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express.js", level: 82, category: "Backend" },
  { name: "Spring Boot", level: 80, category: "Backend" },
  { name: "REST API", level: 85, category: "Backend" },
  { name: "tRPC", level: 75, category: "Backend" },
  { name: "WebSockets", level: 75, category: "Backend" },
  { name: "KindeAuth", level: 70, category: "Backend" },
  { name: "Kafka", level: 75, category: "Backend" },

  // Databases
  { name: "MongoDB", level: 80, category: "Database" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "Qdrant (Vector DB)", level: 70, category: "Database" },
  { name: "Redis", level: 75, category: "Database" },
  { name: "Prisma", level: 80, category: "Database" },

  // Tools & Platforms
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 80, category: "Tools" },
  { name: "SonarQube", level: 75, category: "Tools" },
  { name: "Firebase", level: 75, category: "Tools" },
  { name: "Vercel", level: 80, category: "Tools" },
  { name: "Postman", level: 85, category: "Tools" },
  { name: "Stripe", level: 70, category: "Tools" },
  { name: "OpenAI API", level: 70, category: "Tools" },
];

const experienceData = [
  {
    title: "Developer - Java",
    location: "CyberEvolve Technologies Pvt. Ltd, New Delhi",
    description: "Working as a backend Java developer on SIEM and SOAR modules, designing and optimizing microservices using Spring Boot, JPA/Hibernate, SQL and Kafka. Built end-to-end playbooks and FortiGate firewall automations that reduce manual incident handling, integrated SonarQube into CI/CD for better code quality, and implemented multi-database support and rich notification/reporting workflows.",
    date: "Apr 2024 - Present",
  },
  {
    title: "Student",
    location: "Kanpur Institute of Technology",
    description: "Pursuing B.Tech in Computer Science. Focused on Full-Stack Web Development, Data Structures & Algorithms, and modern web technologies.",
    date: "2020 - 2024",
  },
];

const certificationsData = [
  {
    title: "0-100 Full Stack Web Development Course",
    links: "",
    tech: "Full Stack Web Development",
    description: "100xdevs comprehensive Full Stack Web Development course by Harkirat Singh, covering modern web technologies and best practices.",
    date: "Dec 2024",
  },
  {
    title: "Data Structure & Algorithm with Java",
    links: "https://drive.google.com/file/d/1U0tBYKUvJcsgFNPG_xrmJFn_sJW83rc3/view?usp=drive_link",
    tech: "Java",
    description: "Apna College's Data Structures and Algorithms with Java course by Shraddha Khapra.",
    date: "2023",
  },
  {
    title: "WEB Development [MERN Stack]",
    links: "https://github.com/SatyaisCoding/StudyNotion_An-Edu-Tech-Platform",
    tech: "MERN Stack",
    description: "CodeHelp by Love Babbar is a insightful online course that provides a comprehensive guide to mastering Web Development using MERN Stack.",
    date: "2023",
  },
];

// Portfolio context for the AI
const portfolioContext = {
  name: 'Satya Prakash',
  title: 'Full-Stack Developer',
  email: 'satya.sk.prakash@gmail.com',
  location: 'Kanpur, India',
  education: {
    degree: 'B.Tech in Computer Science',
    institution: 'Kanpur Institute of Technology',
    period: '2020 - 2024',
  },
  about: `I am a final year student pursuing B.Tech in Computer Science from Kanpur Institute of Technology. I am deeply engaged in Full MERN stack web development. My favourite aspect of programming lies in problem-solving and the exhilaration of mastering new technologies. My core stack comprises React, Next.js, TailwindCSS, JavaScript, MongoDB, Node.js, Express.js, and Java (Data Structures and Algorithms). Additionally, I have a working knowledge of TypeScript. I have an insatiable appetite for learning and constantly seek to broaden my technological horizons. I am currently looking for a full-time position as a Software Developer. Outside the realm of coding, I find solace in physical activities like working out and jogging, as well as culinary pursuits such as cooking diverse cuisines. I am an avid consumer of Standup Comedy Videos on YouTube.`,
  projects: projectsData.map(p => ({
    title: p.title,
    description: p.description,
    technologies: p.tags.join(', '),
    github: p.links,
    demo: p.demoUrl,
  })),
  skills: skillsData.map(s => ({
    name: s.name,
    level: s.level,
    category: s.category,
  })),
  experience: experienceData.map(e => ({
    title: e.title,
    location: e.location,
    description: e.description,
    period: e.date,
  })),
  certifications: certificationsData.map(c => ({
    title: c.title,
    description: c.description,
    technology: c.tech,
    link: c.links,
    year: c.date,
  })),
  social: {
    github: 'https://github.com/SatyaisCoding',
    linkedin: 'https://www.linkedin.com/in/satyaprakash2913/',
    twitter: 'https://twitter.com/SatyaisCoding',
  },
};

async function generateResponse(userMessage: string, conversationHistory: any[] = []): Promise<string> {
  const message = userMessage.toLowerCase().trim();
  const words = message.split(/\s+/);
  
  // Visitor statistics (hidden feature - check FIRST before other "hiring" matches)
  // Import the readCounts function logic inline to avoid fetch issues
  const getVisitorCounts = async () => {
    try {
      const { readFile } = await import('fs/promises');
      const { existsSync } = await import('fs');
      const path = await import('path');
      
      const COUNTS_FILE = path.join(process.cwd(), 'data', 'visitor-counts.json');
      
      if (!existsSync(COUNTS_FILE)) {
        return { hiring: 0, visiting: 0, total: 0, lastUpdated: new Date().toISOString() };
      }
      
      const data = await readFile(COUNTS_FILE, 'utf-8');
      const counts = JSON.parse(data);
      return {
        hiring: counts.hiring || 0,
        visiting: counts.visiting || 0,
        total: (counts.hiring || 0) + (counts.visiting || 0),
        lastUpdated: counts.lastUpdated || new Date().toISOString(),
      };
    } catch (error) {
      console.error('Error reading visitor counts:', error);
      return { hiring: 0, visiting: 0, total: 0, lastUpdated: new Date().toISOString() };
    }
  };

  // Check for visitor statistics queries FIRST (before other "hiring" matches)
  if (message.includes('hiring count') || message.includes('hiring statistics') || message.includes('how many hiring') || message.includes('hiring visitors') || (message.includes('hiring') && message.includes('count'))) {
    try {
      const counts = await getVisitorCounts();
      return `**Visitor Statistics (Hiring):**\n\n📊 **People looking to hire:** ${counts.hiring}\n👀 **Casual visitors:** ${counts.visiting}\n📈 **Total visitors:** ${counts.total}\n\n*Last updated: ${new Date(counts.lastUpdated).toLocaleString()}*`;
    } catch (error) {
      return "I couldn't retrieve the visitor statistics at the moment. Please try again later.";
    }
  }

  if (message.includes('visiting count') || message.includes('visitor count') || message.includes('visitor statistics') || message.includes('how many visitors') || message.includes('casual visitors') || (message.includes('visitor') && message.includes('count'))) {
    try {
      const counts = await getVisitorCounts();
      return `**Visitor Statistics:**\n\n👔 **People looking to hire:** ${counts.hiring}\n👀 **Casual visitors:** ${counts.visiting}\n📈 **Total visitors:** ${counts.total}\n\n*Last updated: ${new Date(counts.lastUpdated).toLocaleString()}*`;
    } catch (error) {
      return "I couldn't retrieve the visitor statistics at the moment. Please try again later.";
    }
  }

  if (message.includes('statistics') || message.includes('stats') || message.includes('analytics') || message.includes('visitor data')) {
    try {
      const counts = await getVisitorCounts();
      return `**Portfolio Visitor Statistics:**\n\n📊 **Breakdown:**\n• 👔 Hiring: ${counts.hiring} visitors\n• 👀 Casual: ${counts.visiting} visitors\n• 📈 Total: ${counts.total} visitors\n\n*Last updated: ${new Date(counts.lastUpdated).toLocaleString()}*\n\n*Note: These are anonymous statistics tracked when visitors first arrive.*`;
    } catch (error) {
      return "I couldn't retrieve the visitor statistics at the moment. Please try again later.";
    }
  }
  
  // Extract keywords for better understanding
  const hasProjectKeyword = /project|built|created|developed|work|app|application|platform|website/.test(message);
  const hasSkillKeyword = /skill|technology|tech|stack|proficient|expertise|know|learn|language|framework/.test(message);
  const hasExperienceKeyword = /experience|work|job|career|position|role|freelance|employed/.test(message);
  const hasEducationKeyword = /education|degree|university|college|student|graduate|study|academic/.test(message);
  const hasContactKeyword = /contact|email|reach|connect|linkedin|github|social|get in touch/.test(message);
  const hasAvailabilityKeyword = /available|hiring|looking|job|opportunity|open|position|role/.test(message);
  
  // Check for specific project names first (most specific)
  if (message.includes('genius')) {
    const project = portfolioContext.projects.find(p => p.title.toLowerCase() === 'genius');
    const relatedSkills = portfolioContext.skills.filter(s => 
      project?.technologies.toLowerCase().includes(s.name.toLowerCase()) || 
      s.name.toLowerCase().includes('react') || 
      s.name.toLowerCase().includes('next')
    ).map(s => s.name).join(', ');
    
    return `**Genius** is a groundbreaking SaaS AI Platform that transforms text into diverse content, revolutionizing content creation with unmatched efficiency.\n\n**Key Features:**\n• AI-powered content transformation\n• Scalable SaaS architecture\n• Modern tech stack implementation\n\n**Technologies Used:** ${project?.technologies}\n**Related Skills:** ${relatedSkills}\n**GitHub:** ${project?.github}\n${project?.demo ? `**Live Demo:** ${project.demo}` : ''}\n\nThis project showcases Satya's expertise in building scalable SaaS platforms with AI integrations, payment processing (Stripe), and modern full-stack development.`;
  }
  
  if (message.includes('studynotion') || message.includes('study notion')) {
    const project = portfolioContext.projects.find(p => p.title.toLowerCase() === 'studynotion');
    return `**StudyNotion** is a fully functional ed-tech platform using the MERN Stack, enabling content creation, consumption and rating Educational Content.\n\n**Key Features:**\n• Educational content management\n• User rating and review system\n• Full CRUD operations\n• User authentication\n\n**Technologies:** ${project?.technologies}\n**GitHub:** ${project?.github}\n\nThis project demonstrates Satya's full-stack capabilities with React for frontend, Node.js and Express for backend, and MongoDB for database management. It showcases his ability to build complete, production-ready applications.`;
  }
  
  if (message.includes('insight') || message.includes('xplorer')) {
    const project = portfolioContext.projects.find(p => p.title.toLowerCase().includes('insight'));
    return `**Insight-Xplorer** is a SAAS product with an AI-powered chatbot enabling seamless interaction with PDFs through questions, providing insightful answers.\n\n**Key Features:**\n• PDF document processing\n• AI-powered Q&A system\n• Interactive chatbot interface\n• Document analysis\n\n**Technologies:** ${project?.technologies}\n**GitHub:** ${project?.github}\n\nThis project highlights Satya's skills in AI integration, document processing, and building interactive SaaS products. It demonstrates his ability to work with complex AI APIs and create user-friendly interfaces.`;
  }

  // Skills questions with better detection
  if (hasSkillKeyword || message.includes('what can') || message.includes('proficient') || message.includes('expertise') || message.includes('technologies')) {
    const frontend = portfolioContext.skills.filter(s => s.category === 'Frontend');
    const backend = portfolioContext.skills.filter(s => s.category === 'Backend');
    const database = portfolioContext.skills.filter(s => s.category === 'Database');
    const programming = portfolioContext.skills.filter(s => s.category === 'Programming');
    const tools = portfolioContext.skills.filter(s => s.category === 'Tools');
    
    const topSkills = portfolioContext.skills.filter(s => s.level >= 85);
    const intermediateSkills = portfolioContext.skills.filter(s => s.level >= 75 && s.level < 85);
    
    let response = `Satya's technical skills breakdown:\n\n`;
    
    if (frontend.length > 0) {
      response += `**Frontend Technologies:**\n${frontend.map(s => `• ${s.name} (${s.level}%)`).join('\n')}\n\n`;
    }
    if (backend.length > 0) {
      response += `**Backend Technologies:**\n${backend.map(s => `• ${s.name} (${s.level}%)`).join('\n')}\n\n`;
    }
    if (database.length > 0) {
      response += `**Database:**\n${database.map(s => `• ${s.name} (${s.level}%)`).join('\n')}\n\n`;
    }
    if (programming.length > 0) {
      response += `**Programming Languages:**\n${programming.map(s => `• ${s.name} (${s.level}%)`).join('\n')}\n\n`;
    }
    
    response += `**Expertise Level:**\n• **Expert (85%+):** ${topSkills.map(s => s.name).join(', ')}\n• **Advanced (75-84%):** ${intermediateSkills.map(s => s.name).join(', ')}\n\n`;
    response += `He's highly proficient in the **MERN stack** (MongoDB, Express, React, Node.js) and specializes in **Next.js**, **TypeScript**, and modern web development practices.`;
    
    return response;
  }

  // Specific technology questions with better matching
  const techKeywords: { [key: string]: string[] } = {
    'react': ['react'],
    'next.js': ['next', 'nextjs', 'next.js'],
    'node.js': ['node', 'nodejs', 'node.js'],
    'mongodb': ['mongodb', 'mongo'],
    'typescript': ['typescript', 'ts'],
    'javascript': ['javascript', 'js'],
    'tailwind': ['tailwind', 'tailwindcss'],
    'prisma': ['prisma'],
    'express': ['express'],
    'java': ['java'],
  };
  
  for (const [tech, keywords] of Object.entries(techKeywords)) {
    if (keywords.some(keyword => message.includes(keyword))) {
      const skill = portfolioContext.skills.find(s => 
        s.name.toLowerCase().includes(tech.toLowerCase()) || 
        keywords.some(k => s.name.toLowerCase().includes(k))
      );
      
      if (skill) {
        const projectsUsingTech = portfolioContext.projects.filter(p => 
          p.technologies.toLowerCase().includes(tech.toLowerCase()) ||
          keywords.some(k => p.technologies.toLowerCase().includes(k))
        );
        
        let response = `Satya has **${skill.level}% proficiency** in **${skill.name}**. `;
        
        if (skill.level >= 85) {
          response += 'This is one of his strongest skills! ';
        } else if (skill.level >= 75) {
          response += 'He has good, solid experience with this technology. ';
        } else {
          response += 'He has working knowledge and is actively improving. ';
        }
        
        response += `${skill.category === 'Frontend' ? 'He uses it extensively in frontend development.' : skill.category === 'Backend' ? 'He uses it for backend development and API creation.' : skill.category === 'Database' ? 'He uses it for database management and queries.' : ''}\n\n`;
        
        if (projectsUsingTech.length > 0) {
          response += `**Used in projects:** ${projectsUsingTech.map(p => p.title).join(', ')}`;
        }
        
        return response;
      }
    }
  }

  // Projects questions (general) with better context
  if (hasProjectKeyword || message.includes('built') || message.includes('created') || message.includes('work on') || message.includes('portfolio')) {
    const projectList = portfolioContext.projects.map((p, i) => {
      const techCount = p.technologies.split(', ').length;
      return `${i + 1}. **${p.title}**\n   ${p.description}\n   **Tech Stack:** ${p.technologies} (${techCount} technologies)\n   **GitHub:** ${p.github}${p.demo ? `\n   **Live Demo:** ${p.demo}` : ''}`;
    }).join('\n\n');
    
    return `Satya has built **${portfolioContext.projects.length} major projects**, each showcasing different aspects of full-stack development:\n\n${projectList}\n\n**Summary:**\n• All projects use modern React-based frontends\n• Mix of SaaS platforms and educational tools\n• Integration of AI, payments, and modern APIs\n• Production-ready applications\n\nYou can ask about any specific project by name (Genius, StudyNotion, or Insight-Xplorer) for more detailed information!`;
  }

  // Experience questions with more detail
  if (hasExperienceKeyword || message.includes('work history') || message.includes('career') || message.includes('background') || message.includes('professional')) {
    const javaExp = portfolioContext.experience.find(e => e.title.toLowerCase().includes('developer - java'));
    const studentExp = portfolioContext.experience.find(e => e.title.includes('Student'));
    
    let response = `Satya's professional journey:\n\n`;
    
    if (javaExp) {
      response += `**${javaExp.title}** at ${javaExp.location} (${javaExp.period})\n${javaExp.description}\n\n`;
      response += `**Key Highlights:**\n• Designed and optimized microservices across SIEM and SOAR modules\n• Built end-to-end SOAR playbooks integrating Fortinet Firewall, Active Directory and other security platforms\n• Automated FortiGate firewall workflows, significantly reducing manual incident handling\n• Integrated SonarQube into Jenkins CI/CD to continuously monitor code quality\n• Implemented multi-database support (MySQL/PostgreSQL) and rich notification/reporting features\n\n`;
    }
    
    if (studentExp) {
      response += `**${studentExp.title}** - ${studentExp.location} (${studentExp.period})\n${studentExp.description}\n\n`;
      response += `**Focus Areas:**\n• Full-Stack Web Development\n• Data Structures & Algorithms\n• Modern web technologies\n• Building production-ready applications\n`;
    }
    
    return response;
  }

  // Education questions
  if (hasEducationKeyword || message.includes('degree') || message.includes('university') || message.includes('college') || message.includes('student') || message.includes('graduate')) {
    return `**Education:**\n\nSatya is a **final year student** pursuing **B.Tech in Computer Science** from **Kanpur Institute of Technology** (2020-2024).\n\n**Academic Focus:**\n• Full-Stack Web Development\n• Data Structures & Algorithms (Java)\n• Modern web technologies\n• Software Engineering principles\n• Building scalable applications\n\n**Current Status:**\nHe's completing his final year and actively seeking full-time opportunities as a Software Developer. His academic background combined with hands-on project experience makes him well-prepared for professional roles.`;
  }

  // Contact questions
  if (hasContactKeyword || message.includes('email') || message.includes('reach') || message.includes('get in touch') || message.includes('how to contact') || message.includes('linkedin') || message.includes('github')) {
    return `**Ways to connect with Satya:**\n\n📧 **Email:** ${portfolioContext.email}\n🔗 **LinkedIn:** ${portfolioContext.social.linkedin}\n💻 **GitHub:** ${portfolioContext.social.github}\n🐦 **Twitter/X:** ${portfolioContext.social.twitter}\n\n**Best for:**\n• **Email** - Professional inquiries and job opportunities\n• **LinkedIn** - Professional networking and career opportunities\n• **GitHub** - Viewing code and projects\n• **Contact Form** - Quick messages through this portfolio\n\nHe's responsive and always open to discussing opportunities!`;
  }

  // Certifications with more context
  if (message.includes('certification') || message.includes('certificate') || message.includes('course') || message.includes('learned') || message.includes('training')) {
    const certList = portfolioContext.certifications.map((c, i) => 
      `${i + 1}. **${c.title}** (${c.year})\n   ${c.description}\n   **Technology:** ${c.technology}\n   **Link:** ${c.link}`
    ).join('\n\n');
    
    return `**Certifications & Courses:**\n\nSatya has completed ${portfolioContext.certifications.length} major certifications:\n\n${certList}\n\nThese certifications demonstrate his commitment to continuous learning and mastery of core technologies like Java (DSA) and the complete MERN Stack.`;
  }

  // Availability/Hiring with more details
  if (hasAvailabilityKeyword || message.includes('hiring') || message.includes('looking for') || message.includes('job') || message.includes('opportunity') || message.includes('open to') || message.includes('position')) {
    const topSkillsList = portfolioContext.skills.filter(s => s.level >= 85).map(s => s.name).join(', ');
    
    return `**Yes, Satya is actively looking for opportunities!**\n\n**Current Status:**\n• Seeking full-time positions as a Software Developer\n• Open to remote, hybrid, or on-site opportunities\n• Available for immediate start\n• Final year student (graduating 2024)\n\n**Ideal Roles:**\n• Full-Stack Developer\n• MERN Stack Developer\n• Next.js Developer\n• Frontend Developer\n• Backend Developer\n\n**Key Strengths:**\n• ${topSkillsList}\n• Building scalable SaaS platforms\n• AI integration experience\n• Modern web development practices\n\n**Contact:**\n📧 ${portfolioContext.email}\n🔗 ${portfolioContext.social.linkedin}\n\nHe's excited to discuss how he can contribute to your team!`;
  }

  // About Satya (general) with comprehensive info
  if (message.includes('who') || message.includes('about satya') || message.includes('tell me about satya') || message.includes('introduce') || message.includes('summary')) {
    const projectCount = portfolioContext.projects.length;
    const topSkillCount = portfolioContext.skills.filter(s => s.level >= 85).length;
    
    return `**Satya Prakash - Full-Stack Developer**\n\n**Quick Summary:**\nSatya is a passionate Full-Stack Developer and final year B.Tech student specializing in MERN Stack and Next.js development.\n\n**Key Highlights:**\n• Built **${projectCount} major projects** including SaaS platforms\n• **${topSkillCount} expert-level skills** (85%+ proficiency)\n• Experience in AI integration and modern web development\n• Currently seeking full-time opportunities\n\n**About:**\n${portfolioContext.about}\n\n**Location:** ${portfolioContext.location}\n**Email:** ${portfolioContext.email}\n\nHe's passionate about building modern web applications and is ready to contribute to innovative projects!`;
  }

  // Hobbies/Interests
  if (message.includes('hobby') || message.includes('interest') || message.includes('like to do') || message.includes('outside coding') || message.includes('personal') || message.includes('life')) {
    return `**Personal Interests & Hobbies:**\n\nOutside of coding, Satya enjoys:\n\n• **Fitness:** Working out and jogging - maintains physical health alongside mental work\n• **Culinary:** Cooking diverse cuisines - enjoys exploring different flavors and cultures\n• **Entertainment:** Watching Standup Comedy Videos on YouTube - appreciates humor and storytelling\n• **Learning:** Constantly seeking to expand knowledge across various domains\n• **Networking:** Engaging with new people and learning from different perspectives\n\nHe believes in maintaining a healthy work-life balance and finds that these activities help him stay creative and motivated in his development work.`;
  }

  // Comparison questions
  if (message.includes('compare') || message.includes('difference') || message.includes('best') || message.includes('favorite')) {
    if (message.includes('project')) {
      return `Comparing Satya's projects:\n\n**Genius** - Most complex, AI-powered SaaS with payment integration\n**StudyNotion** - Full MERN stack ed-tech platform\n**Insight-Xplorer** - AI chatbot for PDF interaction\n\nEach project showcases different skills:\n• Genius demonstrates SaaS architecture and Stripe integration\n• StudyNotion shows complete CRUD operations and user management\n• Insight-Xplorer highlights AI API integration\n\nAll three demonstrate his versatility in full-stack development!`;
    }
  }

  // Strengths/Weaknesses
  if (message.includes('strength') || message.includes('strong') || message.includes('best at') || message.includes('excel')) {
    const topSkills = portfolioContext.skills.filter(s => s.level >= 85).map(s => s.name).join(', ');
    return `**Satya's Key Strengths:**\n\n**Technical:**\n• Expert in: ${topSkills}\n• Strong full-stack capabilities (MERN)\n• Modern framework expertise (Next.js)\n• AI integration experience\n\n**Professional:**\n• Problem-solving mindset\n• Continuous learner\n• Builds production-ready applications\n• Experience with scalable architectures\n\n**Projects demonstrate:**\n• Ability to work with complex systems\n• Payment integration (Stripe)\n• Database design (MongoDB, Prisma)\n• Modern UI/UX (Tailwind, Framer Motion)`;
  }

  // Default response with intelligent suggestions
  return `I can help you learn about Satya Prakash! Here's what I know:\n\n**Quick Facts:**\n• Full-Stack Developer | Final Year B.Tech Student\n• ${portfolioContext.projects.length} Major Projects | ${portfolioContext.skills.length} Technical Skills\n• MERN Stack Specialist | Next.js Expert\n• Currently Seeking Full-Time Opportunities\n\n**What I can tell you about:**\n• **Projects** - Detailed info about Genius, StudyNotion, Insight-Xplorer\n• **Skills** - Complete technical skill breakdown with proficiency levels\n• **Experience** - Work history and professional background\n• **Education** - Academic qualifications and focus areas\n• **Contact** - All ways to reach Satya\n• **Availability** - Current job search status\n\n**Try asking:**\n• "Tell me about his skills"\n• "What projects has he built?"\n• "Tell me about the Genius project"\n• "Is he available for hire?"\n• "What technologies does he know?"\n• "What are his strengths?"\n• "Compare his projects"`;
}

export async function POST(request: Request) {
  try {
    const { message, conversationHistory } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Clean and process the message
    const cleanedMessage = message.trim();
    
    // Handle greetings
    if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/i.test(cleanedMessage)) {
      return NextResponse.json({ 
        response: "Hello! 👋 I'm Satya's AI assistant. I can tell you all about Satya Prakash - his projects, skills, experience, and more! What would you like to know?" 
      });
    }

    // Handle thanks/goodbye
    if (/^(thanks|thank you|bye|goodbye|see you)/i.test(cleanedMessage)) {
      return NextResponse.json({ 
        response: "You're welcome! Feel free to ask me anything else about Satya. Good luck with your interview! 🚀" 
      });
    }

    const response = await generateResponse(cleanedMessage, conversationHistory || []);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

