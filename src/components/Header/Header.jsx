import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Temporary auth state - will be replaced with actual auth state
    const isAuthenticated = true;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleUserIconClick = () => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            setShowUserMenu(!showUserMenu);
        }
    };

    const handleLogout = () => {
        // TODO: Implement logout logic
        console.log('Logging out...');
        setShowUserMenu(false);
        navigate('/login');
    };

    return (
        <header>
            {/* Top Header */}
            <div className="bg-black text-white">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="w-[550px] flex items-center justify-between py-3">
                            <span className="text-sm text-white">
                                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                            </span>
                            <div className="flex items-center">
                                <select className="bg-black text-white text-sm border-none focus:ring-0 cursor-pointer">
                                    <option value="en">English</option>
                                    <option value="vi">Vietnamese</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Logo */}
                        <Link to="/" className="text-2xl font-bold ml-20">
                            Exclusive
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="hover:text-primary ml-60">Home</Link>
                            <Link to="/contact" className="hover:text-primary">Contact</Link>
                            <Link to="/about" className="hover:text-primary">About</Link>
                            <Link to="/signup" className="hover:text-primary whitespace-nowrap">Sign Up</Link>
                        </nav>

                        {/* Search and Icons */}
                        <div className="flex items-center gap-4">
                            {/* Search */}
                            <div className="relative">
                                <input
                                    type="search"
                                    placeholder="What are you looking for?"
                                    className="w-[300px] py-2 px-4 bg-gray-100 rounded-md pr-10"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Icons */}
                            {isAuthenticated && !(location.pathname === '/login' || location.pathname === '/signup') && (
                                <div className="flex items-center gap-4">
                                    <button className="hover:text-primary">
                                        <FaHeart size={24} />
                                    </button>
                                    <button className="relative hover:text-primary">
                                        <FaShoppingCart size={24} />
                                        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            2
                                        </span>
                                    </button>
                                    {/* User Menu */}
                                    <div className="relative" ref={menuRef}>
                                        <button
                                            onClick={handleUserIconClick}
                                            className="hover:text-primary focus:outline-none"
                                        >
                                            <FaUser size={24} />
                                        </button>
                                        {/* Dropdown Menu */}
                                        {showUserMenu && isAuthenticated && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                                <Link to="/account" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                                    Manage My Account
                                                </Link>
                                                <Link to="/orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                                    My Order
                                                </Link>
                                                <Link to="/cancellations" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                                    My Cancellations
                                                </Link>
                                                <Link to="/reviews" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                                    My Reviews
                                                </Link>
                                                <button
                                                    onClick={handleLogout}
                                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 