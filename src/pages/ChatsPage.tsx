import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, AlertCircle } from 'lucide-react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import ChatCard from '../components/ui/chats/ChatCard';
import ChatSkeleton from '../components/ui/chats/ChatSkeleton';
import { getChats } from '../api/chatsApi';
import type { Chat } from '../types/chatTypes';

const ChatsPage = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getChats();
        setChats(data.chats || []);
      } catch (err) {
        console.error('Failed to fetch chats:', err);
        setError('Failed to load chats. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col">
      <Header />

      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">My Chats</h1>
            </div>
            <p className="text-gray-400 ml-13">
              Manage your conversations and project discussions
            </p>
          </motion.div>

          {/* Content */}
          {loading ? (
            <div className="grid gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <ChatSkeleton key={i} />
              ))}
            </div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 px-4"
            >
              <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Error Loading Chats</h3>
              <p className="text-gray-400 text-sm text-center max-w-md mb-6">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-lg hover:bg-orange-500/20 transition-colors font-medium"
              >
                Try Again
              </button>
            </motion.div>
          ) : chats.length > 0 ? (
            <div className="grid gap-4">
              {chats.map((chat, index) => (
                <ChatCard key={chat.chat_id} chat={chat} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 px-4"
            >
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="w-10 h-10 text-orange-400/50" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">No Chats Yet</h3>
              <p className="text-gray-400 text-sm text-center max-w-md mb-6">
                You don't have any active conversations. Start by creating a proposal on a task to begin chatting.
              </p>
              <a
                href="/works"
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all font-medium"
              >
                Browse Tasks
              </a>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChatsPage;
