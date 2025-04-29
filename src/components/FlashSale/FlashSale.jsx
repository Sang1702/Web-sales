import React, { useState, useEffect } from 'react';
import { FaHeart, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TayCam from '../../assets/images/g92-2-500x500 1.png';
import BanPhim from '../../assets/images/ak-900-01-500x500 1.png';
import ManHinh from '../../assets/images/g27cq4-500x500 1.png';

const FlashSale = () => {
    // State for countdown timer
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });

    // State for products
    const products = [
        {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            image: TayCam,
            price: 120,
            oldPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88
        },
        {
            id: 2,
            name: "AK-900 Wired Keyboard",
            image: BanPhim,
            price: 960,
            oldPrice: 1160,
            discount: 35,
            rating: 4,
            reviews: 75
        },
        {
            id: 3,
            name: "IPS LCD Gaming Monitor",
            image: ManHinh,
            price: 370,
            oldPrice: 400,
            discount: 30,
            rating: 5,
            reviews: 99
        },
        {
            id: 4,
            name: "S-Series Comfort Chair",
            image: ManHinh, // Tạm thời dùng ảnh này, bạn có thể thay bằng ảnh ghế sau
            price: 375,
            oldPrice: 400,
            discount: 25,
            rating: 5,
            reviews: 99
        }
    ];

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                }
                if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                }
                if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                clearInterval(timer);
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Render stars based on rating
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={`text-${index < rating ? 'yellow' : 'gray'}-400`}>★</span>
        ));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-5 h-10 bg-red-500 rounded"></div>
                <h2 className="text-red-500">Today's</h2>
            </div>

            {/* Title and Timer */}
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">Flash Sales</h3>
                <div className="flex gap-4">
                    {/* Timer */}
                    <div className="flex gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                            <div className="text-sm">Days</div>
                        </div>
                        <div className="text-2xl font-bold">:</div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                            <div className="text-sm">Hours</div>
                        </div>
                        <div className="text-2xl font-bold">:</div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                            <div className="text-sm">Minutes</div>
                        </div>
                        <div className="text-2xl font-bold">:</div>
                        <div className="text-center">
                            <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                            <div className="text-sm">Seconds</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-4 gap-8 relative">
                {products.map((product) => (
                    <div key={product.id} className="bg-gray-50 p-4 rounded-lg relative group">
                        {/* Discount Badge */}
                        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded">
                            -{product.discount}%
                        </div>

                        {/* Wishlist & Quick View */}
                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                            <button className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition-colors">
                                <FaHeart />
                            </button>
                            <button className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition-colors">
                                <FaEye />
                            </button>
                        </div>

                        {/* Product Image */}
                        <div className="mb-4">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
                        </div>

                        {/* Add to Cart Button */}
                        <button className="w-full bg-black text-white py-2 rounded mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            Add To Cart
                        </button>

                        {/* Product Info */}
                        <h4 className="font-medium mb-2">{product.name}</h4>
                        <div className="flex gap-2 mb-2">
                            <span className="text-red-500">${product.price}</span>
                            <span className="text-gray-400 line-through">${product.oldPrice}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {renderStars(product.rating)}
                            </div>
                            <span className="text-gray-400">({product.reviews})</span>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                    <FaChevronLeft />
                </button>
                <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
                    <FaChevronRight />
                </button>
            </div>

            {/* View All Button */}
            <div className="text-center mt-8">
                <button className="px-8 py-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors">
                    View All Products
                </button>
            </div>
        </div>
    );
};

export default FlashSale; 