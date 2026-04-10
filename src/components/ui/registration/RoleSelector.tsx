import { motion } from 'framer-motion';

type UserRole = 'freelancer' | 'client';

interface RoleSelectorProps {
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
}

const RoleSelector = ({ role, onRoleChange }: RoleSelectorProps) => {
  return (
    <div className="mb-8">
      <div className="relative bg-zinc-800/50 rounded-2xl p-1.5 flex gap-1">
        <motion.div
          className="absolute inset-y-1.5 w-[calc(50%-0.25rem)] bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg shadow-orange-500/50"
          animate={{
            x: role === 'freelancer' ? 0 : 'calc(100% + 0.25rem)',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />

        <button
          type="button"
          onClick={() => onRoleChange('freelancer')}
          className={`relative z-10 flex-1 py-3 px-4 rounded-xl font-semibold transition-colors duration-200 ${
            role === 'freelancer'
              ? 'text-white'
              : 'text-zinc-400 hover:text-zinc-300'
          }`}
        >
          Freelancer
        </button>
        <button
          type="button"
          onClick={() => onRoleChange('client')}
          className={`relative z-10 flex-1 py-3 px-4 rounded-xl font-semibold transition-colors duration-200 ${
            role === 'client'
              ? 'text-white'
              : 'text-zinc-400 hover:text-zinc-300'
          }`}
        >
          Client
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;
