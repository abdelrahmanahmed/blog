import { motion } from 'framer-motion';

export function HireMe() {
  return (
    <motion.a
      href="mailto:abdelrahman.wahdan@gmail.com?subject=Job%20Opportunity"
      className="group relative inline-block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="relative flex items-center rounded-lg bg-white px-4 py-2 leading-none dark:bg-gray-800"
        whileHover={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <span className="flex items-center space-x-2">
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
            Contact Me
          </span>
          <i className="fas fa-envelope text-emerald-600 dark:text-emerald-400"></i>
        </span>
      </motion.div>
    </motion.a>
  );
}
