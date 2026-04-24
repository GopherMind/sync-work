import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Award, Send, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import axiosInstance from '../../../api/api'

interface ProposalFormProps {
  orderId: string
  onSuccess?: () => void
}

const ProposalForm = ({ orderId, onSuccess }: ProposalFormProps) => {
  const [coverLetter, setCoverLetter] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [focusedInput, setFocusedInput] = useState(false)

  const charCount = coverLetter.length
  const isValid = charCount >= 40 && charCount <= 500

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (charCount < 40) {
      toast.error('Cover letter must be at least 40 characters')
      return
    }
    if (charCount > 500) {
      toast.error('Cover letter must not exceed 500 characters')
      return
    }

    setSubmitting(true)
    try {
      const tokenCookie = document.cookie.split('; ').find(row => row.startsWith('token='))
      const token = tokenCookie ? tokenCookie.split('=')[1] : null

      if (!token) {
        toast.error('Please sign in to apply')
        return
      }

      await axiosInstance.post(
        `/proposal/create/${orderId}`,
        { cover_letter: coverLetter },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      toast.success('Proposal submitted successfully!')
      setCoverLetter('')
      onSuccess?.()
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to submit proposal')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative bg-gradient-to-br from-[#1a1a1a] to-[#151515] border border-white/10 rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent" />
      <div className="relative p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center justify-center">
            <Target className="text-orange-400" size={20} />
          </div>
          <h3 className="text-white text-xl font-bold">Submit Your Proposal</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="text-gray-300 text-sm font-semibold mb-3 flex items-center gap-2">
              <Award size={16} className="text-orange-400" />
              Cover Letter
            </label>
            <div className="relative">
              <textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                onFocus={() => setFocusedInput(true)}
                onBlur={() => setFocusedInput(false)}
                placeholder="Tell the client why you're the perfect match for this project. Highlight your relevant experience, skills, and what makes you stand out..."
                className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none backdrop-blur-sm"
                rows={8}
                maxLength={500}
              />
              <AnimatePresence>
                {focusedInput && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-xl blur-xl -z-10"
                  />
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-3 px-1">
              <div className="flex items-center gap-2">
                <div className="relative w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${Math.min((charCount / 500) * 100, 100)}%`,
                    }}
                    className={`h-full rounded-full transition-colors ${
                      charCount < 40
                        ? 'bg-red-400'
                        : charCount > 450
                        ? 'bg-orange-400'
                        : 'bg-green-400'
                    }`}
                  />
                </div>
                <p
                  className={`text-sm font-medium ${
                    charCount < 40
                      ? 'text-red-400'
                      : charCount > 450
                      ? 'text-orange-400'
                      : 'text-green-400'
                  }`}
                >
                  {charCount < 40 ? `${40 - charCount} more needed` : `${charCount}/500`}
                </p>
              </div>
              <AnimatePresence>
                {isValid && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex items-center gap-1 text-green-400 text-sm font-medium"
                  >
                    <Sparkles size={14} />
                    Ready to submit
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={!isValid || submitting}
            whileHover={isValid && !submitting ? { y: -2 } : {}}
            whileTap={isValid && !submitting ? { scale: 0.98 } : {}}
            className="relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all border border-orange-500/50 hover:border-orange-400 disabled:border-gray-600 hover:shadow-lg hover:shadow-orange-500/30"
          >
            {submitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Submit Proposal</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}

export default ProposalForm
