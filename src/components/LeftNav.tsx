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

const LeftNav = () => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', badge: '3' },
        { icon: Terminal, label: 'API Client', badge: null },
        { icon: Zap, label: 'Stress Test', badge: null },
        { icon: Gauge, label: 'Load Test', badge: 'New' },
        { icon: Settings, label: 'Settings', badge: null },
    ];

    return (
        <div
            className={`h-screen border-r-2 border-dashed border-zinc-300 bg-[#FFFDF9] pt-6 transition-all duration-300 ${
                isCollapsed ? 'w-20' : 'w-64'
            }`}
        >
            {/* Logo */}
            <div className="px-6 mb-8">
                <div className="flex items-center space-x-2">
                    <Code2 className="h-6 w-6 text-amber-600 rotate-3 shrink-0" />
                    {!isCollapsed && (
                        <span className=" text-xl -rotate-2">APITest</span>
                    )}
                </div>
            </div>

            {/* Navigation Items */}
            <div className="space-y-2 px-4">
                {navItems.map((item, index) => (
                    <button
                        key={item.label}
                        className={`
              group w-full flex items-center px-2 py-3 
              hover:-translate-y-0.5 transition-all
              ${index === 0 ? 'bg-amber-50 text-amber-600 font-medium' : 'text-zinc-600'}
            `}
                    >
                        <div className="relative">
                            <item.icon className={`h-5 w-5 ${
                                index === 0 ? 'text-amber-600' : 'text-zinc-500'
                            } group-hover:rotate-3 transition-transform`} />

                            {/* Pseudo hand-drawn selection indicator */}
                            {index === 0 && (
                                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-amber-400 -rotate-12"></div>
                            )}
                        </div>

                        {!isCollapsed && (
                            <>
                                <span className="ml-3 ">{item.label}</span>
                                {item.badge && (
                                    <span className={`
                    ml-auto  text-xs px-2 py-1 
                    ${item.badge === 'New'
                                        ? 'border-2 border-dashed border-amber-400 text-amber-600'
                                        : 'bg-zinc-100 text-zinc-600'}
                    `}>
                    {item.badge}
                  </span>
                                )}
                            </>
                        )}
                    </button>
                ))}
            </div>

            {/* Collapse Button */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute bottom-8 -right-4 w-8 h-8 bg-white border-2 border-zinc-300 rounded-full flex items-center justify-center hover:border-amber-400 transition-colors"
            >
                <ChevronLeft className={`h-4 w-4 text-zinc-400 transition-transform ${
                    isCollapsed ? 'rotate-180' : ''
                }`} />
            </button>
        </div>
    );
};

export default LeftNav;