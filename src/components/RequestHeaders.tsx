import React from 'react';
import { X, Plus } from 'lucide-react';

interface Header {
    key: string;
    value: string;
}

interface RequestHeadersProps {
    headers: Header[];
    onAdd: () => void;
    onRemove: (index: number) => void;
    onUpdate: (index: number, field: 'key' | 'value', value: string) => void;
}

const RequestHeaders = ({ headers, onAdd, onRemove, onUpdate }: RequestHeadersProps) => {
    return (
        <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Request Headers</label>
            <div className="space-y-2">
                {headers.map((header, index) => (
                    <div key={index} className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="Key"
                            value={header.key}
                            onChange={(e) => onUpdate(index, 'key', e.target.value)}
                            className="flex-1 px-3 py-2 border-2 border-dashed border-zinc-300 focus:border-amber-400 outline-none transition-colors"
                        />
                        <input
                            type="text"
                            placeholder="Value"
                            value={header.value}
                            onChange={(e) => onUpdate(index, 'value', e.target.value)}
                            className="flex-1 px-3 py-2 border-2 border-dashed border-zinc-300 focus:border-amber-400 outline-none transition-colors"
                        />
                        <button
                            onClick={() => onRemove(index)}
                            className="p-2 text-zinc-400 hover:text-red-500 transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                ))}
                <button
                    onClick={onAdd}
                    className="w-full py-2 border-2 border-dashed border-zinc-300 text-zinc-600 hover:border-amber-400 transition-colors flex items-center justify-center"
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Header
                </button>
            </div>
        </div>
    );
};

export default React.memo(RequestHeaders); 