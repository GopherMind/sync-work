import { motion } from 'framer-motion';
import { type LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  required?: boolean;
}

const FormInput = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  icon: Icon,
  required = false,
}: FormInputProps) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div variants={itemVariants}>
      <label className="block text-sm font-medium text-zinc-300 mb-2">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300" />
        <div className="relative flex items-center">
          <Icon
            className="absolute left-4 text-zinc-500 group-focus-within:text-orange-500 transition-colors duration-300"
            size={20}
          />
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-zinc-800/80 border border-zinc-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
            placeholder={placeholder}
            required={required}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FormInput;
