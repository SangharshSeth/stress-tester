import React, { useState, useCallback, useMemo, useTransition } from 'react';
import { 
    Play, Users, Timer, TrendingUp, ChevronRight, BarChart2, 
    Loader2, AlertCircle, Plus, X, Code, ArrowUpRight
} from 'lucide-react';
import MetricCard from './MetricCard';
import RequestHeaders from './RequestHeaders';
import MethodSelector from './MethodSelector';

interface Header {
    key: string;
    value: string;
}

const LoadTest = () => {
    const [testConfig, setTestConfig] = useState({
        virtualUsers: 100,
        rampUpTime: 30,
        duration: 300,
        targetUrl: '',
        method: 'GET',
        headers: [] as Header[],
        body: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showJsonEditor, setShowJsonEditor] = useState(false);
    const [isPending, startTransition] = useTransition();

    // Memoize HTTP methods to prevent recreating array on each render
    const HTTP_METHODS = useMemo(() => ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], []);

    // Memoize metrics
    const mockMetrics = useMemo(() => ({
        avgResponseTime: '245ms',
        errorRate: '0.12%',
        requestsPerSec: '1,234',
        totalRequests: '45,678',
    }), []);

    // Memoize handlers
    const handleStartTest = useCallback(async () => {
        if (!testConfig.targetUrl) {
            setError('Please enter a target URL');
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (err) {
            setError('Failed to start load test');
        } finally {
            setIsLoading(false);
        }
    }, [testConfig.targetUrl]);

    const addHeader = useCallback(() => {
        setTestConfig(prev => ({
            ...prev,
            headers: [...prev.headers, { key: '', value: '' }]
        }));
    }, []);

    const removeHeader = useCallback((index: number) => {
        setTestConfig(prev => ({
            ...prev,
            headers: prev.headers.filter((_, i) => i !== index)
        }));
    }, []);

    const updateHeader = useCallback((index: number, field: 'key' | 'value', value: string) => {
        startTransition(() => {
            setTestConfig(prev => ({
                ...prev,
                headers: prev.headers.map((header, i) => 
                    i === index ? { ...header, [field]: value } : header
                )
            }));
        });
    }, []);

    // Use automatic batching for state updates (React 18 feature)
    const handleMethodChange = useCallback((method: string) => {
        setTestConfig(prev => ({ ...prev, method }));
        if (method === 'GET') {
            setTestConfig(prev => ({ ...prev, body: '' }));
            setShowJsonEditor(false);
        }
    }, []);

    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-12">
                <div className="w-16 h-1 bg-amber-400 mb-6 -rotate-3"></div>
                <h2 className="text-3xl font-bold mb-4">Load Test Configuration</h2>
                <p className="text-zinc-600">Configure your test parameters and watch the magic happen</p>
            </div>

            {error && (
                <div className="mb-6 p-4 border-2 border-red-200 bg-red-50 text-red-600 flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5" />
                    <span>{error}</span>
                </div>
            )}

            {/* Configuration Form */}
            <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                    <MethodSelector 
                        methods={HTTP_METHODS}
                        selectedMethod={testConfig.method}
                        onChange={handleMethodChange}
                    />

                    {/* Target URL Input */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2">Target URL</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border-2 border-dashed border-zinc-300 focus:border-amber-400 bg-white outline-none transition-colors"
                            placeholder="https://api.example.com/endpoint"
                            value={testConfig.targetUrl}
                            onChange={(e) => setTestConfig({ ...testConfig, targetUrl: e.target.value })}
                        />
                    </div>

                    <RequestHeaders 
                        headers={testConfig.headers}
                        onAdd={addHeader}
                        onRemove={removeHeader}
                        onUpdate={updateHeader}
                    />

                    {/* Request Body */}
                    {testConfig.method !== 'GET' && (
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 mb-2">Request Body</label>
                            <div className="relative">
                                <button
                                    onClick={() => setShowJsonEditor(!showJsonEditor)}
                                    className="absolute right-2 top-2 p-1 text-zinc-400 hover:text-amber-600 transition-colors"
                                >
                                    <Code className="h-4 w-4" />
                                </button>
                                <textarea
                                    value={testConfig.body}
                                    onChange={(e) => setTestConfig(prev => ({ ...prev, body: e.target.value }))}
                                    placeholder={showJsonEditor ? '{\n  "key": "value"\n}' : 'Request body...'}
                                    className={`w-full h-32 px-3 py-2 border-2 border-dashed border-zinc-300 focus:border-amber-400 outline-none transition-colors font-mono ${
                                        showJsonEditor ? 'text-sm' : ''
                                    }`}
                                />
                            </div>
                        </div>
                    )}

                    {/* Virtual Users */}
                    <div>
                        <label className="text-sm font-medium text-zinc-700 mb-2 flex items-center">
                            <Users className="h-4 w-4 mr-2 text-amber-600" />
                            Virtual Users
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="1000"
                            value={testConfig.virtualUsers}
                            onChange={(e) => setTestConfig({ ...testConfig, virtualUsers: parseInt(e.target.value) })}
                            className="w-full accent-amber-400"
                        />
                        <span className="text-sm text-zinc-600">{testConfig.virtualUsers} users</span>
                    </div>

                    {/* Ramp-up Time */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2 flex items-center">
                            <TrendingUp className="h-4 w-4 mr-2 text-amber-600" />
                            Ramp-up Period
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="300"
                            value={testConfig.rampUpTime}
                            onChange={(e) => setTestConfig({ ...testConfig, rampUpTime: parseInt(e.target.value) })}
                            className="w-full accent-amber-400"
                        />
                        <span className="text-sm text-zinc-600">{testConfig.rampUpTime} seconds</span>
                    </div>

                    {/* Test Duration */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-2 flex items-center">
                            <Timer className="h-4 w-4 mr-2 text-amber-600" />
                            Test Duration
                        </label>
                        <input
                            type="range"
                            min="60"
                            max="3600"
                            value={testConfig.duration}
                            onChange={(e) => setTestConfig({ ...testConfig, duration: parseInt(e.target.value) })}
                            className="w-full accent-amber-400"
                        />
                        <span className="text-sm text-zinc-600">{testConfig.duration} seconds</span>
                    </div>
                </div>

                {/* Results Preview with loading state */}
                <div className="border-2 border-dashed border-zinc-300 p-6 relative">
                    <div className="absolute -top-3 left-4 bg-[#FFFDF9] px-2 text-sm text-zinc-500">
                        Live Metrics
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {isLoading ? (
                            <div className="col-span-2 flex items-center justify-center py-12">
                                <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
                            </div>
                        ) : (
                            Object.entries(mockMetrics).map(([key, value]) => (
                                <MetricCard 
                                    key={key} 
                                    label={key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                    value={value}
                                    trend={{ value: '+2.5%', isPositive: true }}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
                <button 
                    onClick={handleStartTest}
                    disabled={isLoading}
                    className={`
                        group px-8 py-4 bg-zinc-800 text-white 
                        hover:translate-x-1 hover:-translate-y-1 
                        transition-transform relative
                        disabled:opacity-50 disabled:cursor-not-allowed
                        disabled:hover:translate-x-0 disabled:hover:translate-y-0
                    `}
                >
                    <span className="relative z-10 flex items-center">
                        {isLoading ? (
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        ) : (
                            <Play className="h-4 w-4 mr-2" />
                        )}
                        {isLoading ? 'Starting Test...' : 'Start Load Test'}
                    </span>
                    <div className="absolute inset-0 border-2 border-zinc-800 -translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></div>
                </button>

                <button 
                    disabled={isLoading}
                    className="px-8 py-4 bg-transparent text-zinc-600 border-2 border-dashed border-zinc-300 hover:border-amber-400 hover:-translate-y-1 transition-all flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:border-zinc-300"
                >
                    <BarChart2 className="h-4 w-4 mr-2" />
                    View Detailed Analysis
                    <ChevronRight className="ml-2 h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default React.memo(LoadTest); 