import {
    AlertCircle,
    CheckCircle2,
    Clock,
    XCircle,
    TrendingUp,
    Users,
    Zap,
    BarChart3,
    ArrowUpRight,
    ArrowDownRight,
    MoreVertical
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Dashboard = () => {
    // Dummy data for the performance chart
    const performanceData = [
        { time: '12:00', responseTime: 250 },
        { time: '13:00', responseTime: 300 },
        { time: '14:00', responseTime: 280 },
        { time: '15:00', responseTime: 450 },
        { time: '16:00', responseTime: 320 },
        { time: '17:00', responseTime: 280 },
        { time: '18:00', responseTime: 300 }
    ];

    const recentTests = [
        {
            id: 'test-123',
            name: 'User API Load Test',
            status: 'success',
            duration: '5m 23s',
            requests: 15000,
            successRate: 99.8
        },
        {
            id: 'test-122',
            name: 'Payment API Stress Test',
            status: 'failed',
            duration: '2m 45s',
            requests: 8000,
            successRate: 82.5
        },
        {
            id: 'test-121',
            name: 'Auth API Performance',
            status: 'running',
            duration: '1m 12s',
            requests: 3000,
            successRate: 100
        }
    ];

    const getStatusIcon = (status: string) => {
        switch(status) {
            case 'success':
                return <CheckCircle2 className="h-5 w-5 text-green-500" />;
            case 'failed':
                return <XCircle className="h-5 w-5 text-red-500" />;
            case 'running':
                return <Clock className="h-5 w-5 text-amber-500" />;
            default:
                return <AlertCircle className="h-5 w-5 text-zinc-500" />;
        }
    };

    return (
        <div className="p-8 bg-[#FFFDF9] min-h-screen">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
                <p className="text-zinc-600">Welcome back, let's check your API performance</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    {
                        label: 'Total Tests Run',
                        value: '1,234',
                        icon: Zap,
                        change: '+12.5%',
                        positive: true
                    },
                    {
                        label: 'Avg Response Time',
                        value: '285ms',
                        icon: TrendingUp,
                        change: '-8.3%',
                        positive: true
                    },
                    {
                        label: 'Active Users',
                        value: '892',
                        icon: Users,
                        change: '+5.2%',
                        positive: true
                    },
                    {
                        label: 'Error Rate',
                        value: '0.8%',
                        icon: AlertCircle,
                        change: '+0.2%',
                        positive: false
                    }
                ].map((metric) => (
                    <div key={metric.label} className="p-6 border-2 border-dashed border-zinc-200 hover:-translate-y-1 transition-transform">
                        <div className="flex justify-between items-start mb-4">
                            <metric.icon className="h-6 w-6 text-amber-600 rotate-3" />
                            <span className={`text-sm flex items-center ${
                                metric.positive ? 'text-green-600' : 'text-red-600'
                            }`}>
                {metric.positive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                                {metric.change}
              </span>
                        </div>
                        <p className="text-zinc-600 text-sm mb-1">{metric.label}</p>
                        <p className="text-2xl font-bold">{metric.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Response Time Chart */}
                <div className="p-6 border-2 border-zinc-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold flex items-center">
                            <BarChart3 className="h-5 w-5 text-amber-600 mr-2" />
                            Response Time Trend
                        </h3>
                        <button className="text-zinc-400 hover:text-zinc-600">
                            <MoreVertical className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={performanceData}>
                                <XAxis dataKey="time" stroke="#71717a" />
                                <YAxis stroke="#71717a" />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="responseTime"
                                    stroke="#f59e0b"
                                    strokeWidth={2}
                                    dot={{ stroke: '#f59e0b', strokeWidth: 2, fill: '#fff' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Tests */}
                <div className="p-6 border-2 border-zinc-200">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold">Recent Tests</h3>
                        <button className="text-sm text-amber-600 hover:-translate-y-0.5 transition-transform">
                            View All
                        </button>
                    </div>
                    <div className="space-y-4">
                        {recentTests.map(test => (
                            <div key={test.id} className="p-4 border border-dashed border-zinc-200 hover:-translate-x-1 transition-transform">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center">
                                        {getStatusIcon(test.status)}
                                        <span className="ml-2 text-sm">{test.name}</span>
                                    </div>
                                    <span className="text-sm text-zinc-500">{test.duration}</span>
                                </div>
                                <div className="flex justify-between text-sm text-zinc-600">
                                    <span>{test.requests.toLocaleString()} requests</span>
                                    <span>{test.successRate}% success</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Success Rate Bar */}
            <div className="p-6 border-2 border-zinc-200">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Overall Success Rate</h3>
                    <span className="text-green-600">98.5%</span>
                </div>
                <div className="h-4 bg-zinc-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500"
                        style={{ width: '98.5%' }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;