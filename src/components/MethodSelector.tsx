import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MethodSelectorProps {
    methods: string[];
    selectedMethod: string;
    onChange: (method: string) => void;
}

const MethodSelector = ({ methods, selectedMethod, onChange }: MethodSelectorProps) => {
    return (
        <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">HTTP Method</label>
            <div className="flex space-x-2 relative">
                {methods.map(method => (
                    <motion.button
                        key={method}
                        onClick={() => onChange(method)}
                        className={`px-4 py-2 text-sm border-2 transition-colors relative ${
                            selectedMethod === method
                                ? 'text-amber-600'
                                : 'border-dashed border-zinc-300 text-zinc-600 hover:border-amber-400'
                        }`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {method}
                        {selectedMethod === method && (
                            <motion.div
                                layoutId="active-method"
                                className="absolute inset-0 bg-amber-50 border-2 border-amber-400 -z-10"
                                initial={false}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default React.memo(MethodSelector); 