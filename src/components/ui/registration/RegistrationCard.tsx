import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RegistrationCardProps {
  children: ReactNode;
}

const RegistrationCard = ({ children }: RegistrationCardProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full max-w-md"
    >
      {/* Glassmorphism Card with Asymmetric Border */}
      <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-zinc-800/50">
        {/* Orange Accent Border - Asymmetric */}
        <div className="absolute -top-1 -left-1 w-32 h-32 border-t-4 border-l-4 border-orange-500 rounded-tl-3xl" />
        <div className="absolute -bottom-1 -right-1 w-32 h-32 border-b-4 border-r-4 border-orange-500 rounded-br-3xl" />

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-orange-600/10 pointer-events-none" />

        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
  );
};

export default RegistrationCard;
