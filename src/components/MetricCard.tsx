import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, ArrowUpRight } from 'lucide-react';

interface MetricCardProps {
    label: string;
    value: string;
    trend?: {
        value: string;
        isPositive: boolean;
    };
}

const MetricCard = ({ label, value, trend = { value: '+2.5%', isPositive: true } }: MetricCardProps) => (
    <motion.div
        className="p-6 border-2 border-dashed border-zinc-200"
        whileHover={{ y: -4, transition: { type: "spring", bounce: 0.4 } }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.3 }}
    >
        <div className="flex justify-between items-start mb-4">
            <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ type: "spring" }}
            >
                <BarChart2 className="h-6 w-6 text-amber-600 rotate-3" />
            </motion.div>
            <motion.span
                className={`text-sm flex items-center ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                <ArrowUpRight className="h-4 w-4" />
                {trend.value}
            </motion.span>
        </div>
        <motion.p
            className="text-zinc-600 text-sm mb-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
        >
            {label}
        </motion.p>
        <motion.p
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            {value}
        </motion.p>
    </motion.div>
);

export default React.memo(MetricCard); 