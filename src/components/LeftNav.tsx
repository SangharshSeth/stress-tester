import React from 'react';
import {
    LayoutDashboard,
    Settings,
    Terminal,
    Zap,
    Gauge,
    ChevronLeft,
    Code2
} from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

const LeftNav = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const location = useLocation();

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', to: "/app", badge: '3' },
        { icon: Terminal, label: 'API Client', to: "/app/api-client", badge: null },
        { icon: Zap, label: 'Stress Test', to: "/app/stress-test", badge: null },
        { icon: Gauge, label: 'Load Test',to: "/app/load-test", badge: 'New' },
        { icon: Settings, label: 'Settings', to: "/app/settings", badge: null },
    ];

    return (
        <motion.div
            className={`fixed top-0 left-0 h-screen border-r-2 border-dashed border-zinc-300 bg-[#FFFDF9] pt-6`}
            animate={{ width: isCollapsed ? 80 : 256 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        >
            {/* Logo */}
            <div className="px-6 mb-8">
                <div className="flex items-center space-x-2">
                    <motion.div whileHover={{ rotate: 12 }} transition={{ type: "spring" }}>
                        <Code2 className="h-6 w-6 text-amber-600 rotate-3 shrink-0" />
                    </motion.div>
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.span
                                className="text-xl -rotate-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                APITest
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Items */}
            <div className="space-y-2 px-4">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.to;
                    
                    return (
                        <motion.button
                            key={item.label}
                            className={`
                                group w-full flex items-center px-2 py-3 
                                ${isActive ? 'text-amber-600 font-medium' : 'text-zinc-600'}
                            `}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="relative flex-shrink-0">
                                <motion.div
                                    whileHover={{ rotate: 12 }}
                                    transition={{ type: "spring" }}
                                >
                                    <item.icon className={`h-5 w-5 ${
                                        isActive ? 'text-amber-600' : 'text-zinc-500'
                                    }`} />
                                </motion.div>

                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav"
                                        className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-amber-400 -rotate-12"
                                        transition={{ type: "spring", bounce: 0.2 }}
                                    />
                                )}
                            </div>

                            <AnimatePresence>
                                {!isCollapsed && (
                                    <motion.div
                                        className="flex flex-1 items-center ml-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link to={item.to} className="truncate">{item.label}</Link>
                                        {item.badge && (
                                            <motion.span
                                                className={`
                                                    ml-auto text-xs px-2 py-1 whitespace-nowrap
                                                    ${item.badge === 'New'
                                                        ? 'border-2 border-dashed border-amber-400 text-amber-600'
                                                        : 'bg-zinc-100 text-zinc-600'}
                                                `}
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ type: "spring", bounce: 0.4 }}
                                            >
                                                {item.badge}
                                            </motion.span>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    );
                })}
            </div>

            {/* Collapse Button */}
            <motion.button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute bottom-8 -right-4 w-8 h-8 bg-white border-2 border-zinc-300 rounded-full flex items-center justify-center hover:border-amber-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div
                    animate={{ rotate: isCollapsed ? 180 : 0 }}
                    transition={{ type: "spring", bounce: 0.3 }}
                >
                    <ChevronLeft className="h-4 w-4 text-zinc-400" />
                </motion.div>
            </motion.button>
        </motion.div>
    );
};

export default LeftNav;