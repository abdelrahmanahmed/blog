import { motion } from 'framer-motion';

interface Position {
  title: string;
  period: string;
}

interface Experience {
  company: string;
  position?: string;
  positions?: Position[];
  period?: string;
  location: string;
  industry: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: 'Precis Digital',
    positions: [
      {
        title: 'Lead Software Engineer',
        period: 'March 2025 - Present',
      },
      {
        title: 'Senior Software Engineer',
        period: 'Nov 2021 - March 2025',
      },
    ],
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
      className="space-y-4 sm:space-y-6"
    >
      {experiences.map((exp, index) => (
        <motion.div key={index} variants={item}>
          <div className="rounded-lg bg-white p-4 shadow-md transition-colors dark:bg-[#1f2937] sm:p-6">
            <div className="mb-3 sm:mb-4">
              <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 sm:text-xl">{exp.company}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                    <span className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-1"></i>
                      {exp.location}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-industry ml-0 mr-1 sm:ml-2"></i>
                      {exp.industry}
                    </span>
                  </div>
                </div>
              </div>

              {exp.positions ? (
                <div className="mt-3 space-y-2">
                  {exp.positions.map((pos, i) => (
                    <div key={i} className="relative pl-6">
                      <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                      </div>
                      {i < exp.positions!.length - 1 && (
                        <div className="absolute left-[7px] top-6 h-full w-0.5 bg-blue-300 dark:bg-blue-600"></div>
                      )}
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-base font-semibold text-gray-900 dark:text-gray-200 sm:text-lg">
                          {pos.title}
                        </h4>
                        <span className="whitespace-nowrap rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600 transition-colors dark:bg-blue-500/20 dark:text-blue-400 sm:px-3 sm:text-sm">
                          {pos.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-base font-semibold text-gray-900 dark:text-gray-200 sm:text-lg">{exp.position}</h4>
                  <span className="whitespace-nowrap rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600 transition-colors dark:bg-blue-500/20 dark:text-blue-400 sm:px-3 sm:text-sm">
                    {exp.period}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 transition-colors dark:bg-[#161b22] dark:text-gray-300 sm:px-3 sm:py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}