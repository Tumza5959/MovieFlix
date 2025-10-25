import React from 'react';

interface ServiceInfo {
    name: string;
    count: number;
}

interface StreamingSidebarProps {
    streamingServices: ServiceInfo[];
    onSelectStreaming: (service: string) => void;
    selectedStreaming: string | null;
}

const StreamingSidebar: React.FC<StreamingSidebarProps> = ({ streamingServices, onSelectStreaming, selectedStreaming }) => {
    return (
        <div className="bg-brand-gray p-4 rounded-lg border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-4 border-b border-gray-600 pb-2">ผู้ให้บริการ</h3>
            <ul className="space-y-2">
                {streamingServices.map(service => (
                    <li key={service.name}>
                        <button
                            onClick={() => onSelectStreaming(service.name)}
                            className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm flex justify-between items-center ${
                                selectedStreaming === service.name 
                                ? 'bg-brand-red text-white font-semibold' 
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            <span>{service.name}</span>
                            <span className="text-xs opacity-80">{service.count}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StreamingSidebar;
