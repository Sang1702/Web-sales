import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import signupImage from '../assets/images/signup-image.png';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="flex min-h-[calc(100vh-200px)]">
                {/* Left Side - Image */}
                <div className="w-1/2 bg-[#C1DBE3] p-12 flex items-center justify-center">
                    <div className="relative w-full max-w-[500px] aspect-square">
                        <img
                            src={signupImage}
                            alt="Shopping cart with smartphone"
                            className="w-full h-full object-contain"
                        />
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#D9D9D9] rounded-full opacity-30"></div>
                        <div className="absolute -bottom-4 right-12 w-8 h-8 bg-[#D9D9D9] rounded-full opacity-30"></div>
                        <div className="absolute top-1/4 -right-4 w-6 h-6 bg-[#D9D9D9] rounded-full opacity-30"></div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-1/2 flex items-center justify-center p-12">
                    <div className="w-full max-w-[370px]">
                        <h1 className="text-4xl font-medium mb-6">Log in to Exclusive</h1>
                        <p className="text-base text-gray-600 mb-8">Enter your details below</p>

                        <form className="space-y-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Email or Phone Number"
                                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black placeholder-gray-500"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black placeholder-gray-500"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-[#DB4444] text-white px-8 py-4 rounded hover:bg-red-600 transition-colors"
                                >
                                    Log in
                                </button>
                                <Link to="/forgot-password" className="text-[#DB4444] hover:underline">
                                    Forget Password?
                                </Link>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                Don't have an account?{' '}
                                <Link to="/signup" className="text-black hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LoginPage; 