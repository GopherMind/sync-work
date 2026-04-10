import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

const BackgroundEffects = () => {
  return (
    <>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-orange-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-orange-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <motion.div
        className="absolute top-20 left-10 text-orange-500/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Sparkles size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-orange-500/20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Zap size={50} />
      </motion.div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default BackgroundEffects;
