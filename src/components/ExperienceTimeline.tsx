import { motion } from 'framer-motion';

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  industry: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: 'Precis Digital',
    position: 'Senior Software Engineer',
    period: 'Nov 2021 - Present',
    location: 'Sweden',
    industry: 'Digital Marketing',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Material UI',
      'React-Query',
      'Storybook',
      'Testing-Library',
      'Playwright',
      'Python/Flask',
      'GCP',
      'GitHub Actions',
    ],
  },
  {
    company: 'Integrant',
    position: 'Senior Software Engineer',
    period: 'Oct 2020 - Nov 2021',
    location: 'Egypt',
    industry: 'Software Consulting',
    technologies: ['NodeJS', 'NestJS', 'RxJS', 'PostgreSQL', 'WebSockets', 'Redis'],
  },
  {
    company: 'Vodafone',
    position: 'Senior Software Engineer',
    period: 'May 2018 - Sept 2020',
    location: 'Egypt',
    industry: 'Telecommunications',
    technologies: [
      'NodeJS',
      'React',
      'MySQL',
      'SQLite',
      'Enzyme',
      'Jest',
      'Mocha',
      'Docker',
      'Nginx',
      'Jenkins',
      'AWS',
    ],
  },
  {
    company: 'Icloudit',
    position: 'Software Engineer',
    period: 'March 2017 - April 2018',
    location: 'Egypt',
    industry: 'Software Development',
    technologies: ['Laravel', 'jQuery', 'PHP', 'MySQL', 'Git'],
  },
  {
    company: 'Nerds Arena',
    position: 'Software Engineer',
    period: 'July 2014 - Dec 2015',
    location: 'Egypt',
    industry: 'Software Development',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ExperienceTimeline() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className="relative space-y-12"
    >
      {experiences.map((exp, index) => (
        <motion.div key={index} variants={item} className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-blue-600 via-blue-400 to-transparent" />

          {/* Timeline dot */}
          <div className="absolute left-[-4px] top-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-2 w-2 rounded-full bg-blue-500"
            />
          </div>

          {/* Content */}
          <div className="ml-8">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Header */}
              <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {exp.position}
                  </h4>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-1"></i>
                      {exp.location}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-industry ml-2 mr-1"></i>
                      {exp.industry}
                    </span>
                  </div>
                </div>
                <span className="whitespace-nowrap rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {exp.period}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="cursor-default rounded-full border border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm dark:border-gray-600/50 dark:from-gray-700/50 dark:to-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
