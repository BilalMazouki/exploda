'use client';

import { useState } from 'react';

interface country {
    code: string;
    name: string;
    flag: string;
    position: number; // degrees
}

const countrys: country[] = [
    { code: 'de', name: 'German', flag: '🇩🇪', position: 0 },
    { code: 'ca', name: 'Canadian', flag: '🇨🇦', position: 72 },
    { code: 'us', name: 'United States', flag: '🇺🇸', position: 144 },
    { code: 'nl', name: 'Netherlands', flag: '🇳🇱', position: 216 },
    { code: 'fr', name: 'French', flag: '🇫🇷', position: 288 },
];

export default function countrySelector() {
    const [selectedcountry, setSelectedcountry] = useState<string | null>(null);
    const [hoveredcountry, setHoveredcountry] = useState<string | null>(null);

    const handlecountryClick = (code: string) => {
        setSelectedcountry(code);
        console.log(`Selected country: ${code}`);
    };

    return (
        <div className="flex">
            <div className="relative w-[703px] h-[697px] flex items-center justify-center">
                {/* Outer diamond border */}

                {/* Middle diamond background */}
                <div className="absolute flex items-center justify-center">
                    <div className="w-[500px] h-[500px] bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl rotate-45 shadow-lg" />
                </div>

                {/* Inner diamond background */}
                <div className="absolute flex items-center justify-center">
                    <div className="w-[350px] h-[350px] bg-white/40 rounded-2xl rotate-45 backdrop-blur-sm" />
                </div>

                {/* Center icon */}
                <div className="absolute z-10 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-300 rounded-2xl rotate-45 shadow-2xl flex items-center justify-center">
                        <div className="-rotate-45">
                            <svg
                                className="w-16 h-16 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Orbiting flags */}
                <div className="absolute w-full h-full">
                    {countrys.map((country) => {
                        const radius = 180; // Distance from center
                        const angle = (country.position * Math.PI) / 180;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <button
                                key={country.code}
                                onClick={() => handlecountryClick(country.code)}
                                onMouseEnter={() => setHoveredcountry(country.code)}
                                onMouseLeave={() => setHoveredcountry(null)}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out group"
                                style={{
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                }}
                                aria-label={`Select ${country.name}`}
                            >
                                <div
                                    className={`
                    w-16 h-16 rounded-full 
                    bg-white shadow-lg
                    flex items-center justify-center
                    text-3xl
                    transition-all duration-300
                    hover:scale-125 hover:shadow-2xl
                    active:scale-110
                    ${selectedcountry === country.code ? 'ring-4 ring-purple-400 scale-110' : ''}
                    ${hoveredcountry === country.code ? 'shadow-2xl' : ''}
                  `}
                                >
                                    {country.flag}
                                </div>

                                {/* Tooltip */}
                                {hoveredcountry === country.code && (
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                        <span className="px-3 py-1 bg-gray-900 text-white text-sm rounded-lg shadow-lg">
                                            {country.name}
                                        </span>
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Selection indicator */}
                {selectedcountry && (
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center">
                        <p className="text-lg font-medium text-gray-700">
                            Selected:{' '}
                            <span className="font-bold text-purple-600">
                                {countrys.find((l) => l.code === selectedcountry)?.name}
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}