import React from 'react';
import { FaMobileAlt, FaDesktop, FaHeadphones, FaGamepad } from 'react-icons/fa';
import { IoWatchOutline, IoCamera } from 'react-icons/io5';

const categories = [
    { id: 1, name: 'Phones', icon: <FaMobileAlt size={24} /> },
    { id: 2, name: 'Computers', icon: <FaDesktop size={24} /> },
    { id: 3, name: 'SmartWatch', icon: <IoWatchOutline size={24} /> },
    { id: 4, name: 'Camera', icon: <IoCamera size={24} /> },
    { id: 5, name: 'HeadPhones', icon: <FaHeadphones size={24} /> },
    { id: 6, name: 'Gaming', icon: <FaGamepad size={24} /> },
];

const BrowseCategories = () => {
    return (
        <div className="py-8">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-6 bg-red-500"></div>
                    <h2 className="text-2xl font-semibold">Categories</h2>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 border rounded hover:bg-gray-100">
                        <span className="sr-only">Previous</span>
                        ←
                    </button>
                    <button className="p-2 border rounded hover:bg-gray-100">
                        <span className="sr-only">Next</span>
                        →
                    </button>
                </div>
            </div>

            <h1 className="text-3xl font-bold mb-8">Browse By Category</h1>

            <div className="grid grid-cols-6 gap-4">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className="flex flex-col items-center justify-center p-6 border rounded-lg hover:border-red-500 hover:text-red-500 transition-colors"
                    >
                        {category.icon}
                        <span className="mt-2 text-sm">{category.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BrowseCategories; 