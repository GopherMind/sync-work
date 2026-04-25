import { motion } from 'framer-motion';
import { User, Briefcase, FileText } from 'lucide-react';
import type { Profile } from '../../../types/profileTypes';

interface ProfileHeaderProps {
  profile: Profile;
  proposalsCount: number;
  tasksCount: number;
}

const ProfileHeader = ({ profile, proposalsCount, tasksCount }: ProfileHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-[#1a1a1a] to-[#151515] border border-white/5 rounded-2xl p-6 sm:p-8 mb-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="relative flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <div className="relative">
          {profile.url ? (
            <img
              src={profile.url}
              alt={profile.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-orange-500/30"
            />
          ) : (
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center border-2 border-orange-500/30">
              <User className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
            </div>
          )}
          <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {profile.role}
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">{profile.name}</h1>
          {profile.description && (
            <p className="text-gray-400 text-sm sm:text-base mb-4">{profile.description}</p>
          )}

          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Briefcase className="w-4 h-4 text-orange-400" />
              <span>{proposalsCount} Proposals</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FileText className="w-4 h-4 text-orange-400" />
              <span>{tasksCount} Tasks</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;
