import { useState, useCallback, useTransition } from 'react';

interface Header {
    key: string;
    value: string;
}

interface LoadTestConfig {
    virtualUsers: number;
    rampUpTime: number;
    duration: number;
    targetUrl: string;
    method: string;
    headers: Header[];
    body: string;
}

export const useLoadTest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<Record<string, string> | null>(null);
    const [isPending, startTransition] = useTransition();

    const startTest = useCallback(async (config: LoadTestConfig) => {
        if (!config.targetUrl) {
            setError('Please enter a target URL');
            return;
        }

        try {
            setIsLoading(true);
            setError(null);
            
            const headers = config.headers.reduce((acc, header) => ({
                ...acc,
                [header.key]: header.value
            }), {});

            const response = await fetch('/api/load-test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...config,
                    headers
                }),
            });
            
            const data = await response.json();
            
            // Use startTransition for non-urgent UI updates
            startTransition(() => {
                setResults(data);
            });
        } catch (err) {
            setError('Failed to start load test');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { 
        isLoading, 
        error, 
        results, 
        startTest,
        isPending // Expose isPending state for UI feedback
    };
}; 