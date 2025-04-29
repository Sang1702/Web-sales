import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountPage = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [profileData, setProfileData] = useState({
        firstName: 'Md',
        lastName: 'Rimel',
        email: 'rimel1111@gmail.com',
        address: 'Kingston, 5236, United State',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Profile updated:', profileData);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
                <Link to="/" className="hover:text-gray-900">Home</Link>
                <span>/</span>
                <span className="text-gray-900">My Account</span>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-1/4">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold mb-4">Manage My Account</h2>
                        <div className="space-y-2">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`w-full text-left px-4 py-2 rounded ${activeTab === 'profile' ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
                            >
                                My Profile
                            </button>
                            <button
                                onClick={() => setActiveTab('address')}
                                className={`w-full text-left px-4 py-2 rounded ${activeTab === 'address' ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
                            >
                                Address Book
                            </button>
                            <button
                                onClick={() => setActiveTab('payment')}
                                className={`w-full text-left px-4 py-2 rounded ${activeTab === 'payment' ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
                            >
                                My Payment Options
                            </button>
                        </div>

                        <h2 className="text-lg font-semibold mt-8 mb-4">My Orders</h2>
                        <div className="space-y-2">
                            <button
                                onClick={() => setActiveTab('returns')}
                                className={`w-full text-left px-4 py-2 rounded ${activeTab === 'returns' ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
                            >
                                My Returns
                            </button>
                            <button
                                onClick={() => setActiveTab('cancellations')}
                                className={`w-full text-left px-4 py-2 rounded ${activeTab === 'cancellations' ? 'bg-red-500 text-white' : 'hover:bg-gray-100'}`}
                            >
                                My Cancellations
                            </button>
                        </div>

                        <h2 className="text-lg font-semibold mt-8 mb-4">My Wishlist</h2>
                        <div className="space-y-2">
                            <Link
                                to="/wishlist"
                                className="block px-4 py-2 rounded hover:bg-gray-100"
                            >
                                View Wishlist
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full md:w-3/4">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h1 className="text-2xl font-bold text-red-500 mb-6">Edit Your Profile</h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        First Name
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={profileData.firstName}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Last Name
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={profileData.lastName}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email
                                        <input
                                            type="email"
                                            name="email"
                                            value={profileData.email}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Address
                                        <input
                                            type="text"
                                            name="address"
                                            value={profileData.address}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <h2 className="text-lg font-semibold mb-4">Password Changes</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Current Password
                                            <input
                                                type="password"
                                                name="currentPassword"
                                                value={profileData.currentPassword}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            New Password
                                            <input
                                                type="password"
                                                name="newPassword"
                                                value={profileData.newPassword}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Confirm New Password
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                value={profileData.confirmPassword}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage; 