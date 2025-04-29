import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
    const [selectedColor, setSelectedColor] = useState('white');
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const product = {
        name: 'Havic HV G-92 Gamepad',
        price: 192.00,
        rating: 4,
        reviews: 150,
        stock: true,
        description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
        colors: ['white', 'pink'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        images: [
            '/images/products/gamepad-1.jpg',
            '/images/products/gamepad-2.jpg',
            '/images/products/gamepad-3.jpg',
            '/images/products/gamepad-4.jpg'
        ]
    };

    const relatedProducts = [
        {
            id: 1,
            name: 'HAVIT HV-G92 Gamepad',
            price: 120,
            oldPrice: 160,
            rating: 5,
            reviews: 88,
            discount: 40,
            image: '/images/products/gamepad-red.jpg'
        },
        {
            id: 2,
            name: 'AK-900 Wired Keyboard',
            price: 960,
            oldPrice: 1160,
            rating: 4,
            reviews: 75,
            discount: 35,
            image: '/images/products/keyboard.jpg'
        },
        {
            id: 3,
            name: 'IPS LCD Gaming Monitor',
            price: 370,
            oldPrice: 400,
            rating: 5,
            reviews: 99,
            discount: 30,
            image: '/images/products/monitor.jpg'
        },
        {
            id: 4,
            name: 'RGB liquid CPU Cooler',
            price: 160,
            oldPrice: 170,
            rating: 4,
            reviews: 65,
            image: '/images/products/cooler.jpg'
        }
    ];

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
                <Link to="/" className="hover:text-gray-900">Account</Link>
                <span>/</span>
                <Link to="/gaming" className="hover:text-gray-900">Gaming</Link>
                <span>/</span>
                <span className="text-gray-900">{product.name}</span>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="aspect-w-1 aspect-h-1 w-full">
                        <img
                            src={product.images[selectedImage]}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${selectedImage === index ? 'ring-2 ring-red-500' : ''
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt={`${product.name} ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">{product.name}</h1>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            {renderStars(product.rating)}
                        </div>
                        <span className="text-gray-500">({product.reviews} Reviews)</span>
                        {product.stock && (
                            <span className="text-green-500">In Stock</span>
                        )}
                    </div>

                    <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>

                    <p className="text-gray-600">{product.description}</p>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Colours:</h3>
                            <div className="flex space-x-2">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full ${color === 'white' ? 'bg-white' : 'bg-pink-500'
                                            } ${selectedColor === color
                                                ? 'ring-2 ring-offset-2 ring-red-500'
                                                : ''
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-2">Size:</h3>
                            <div className="flex space-x-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-3 py-1 border rounded ${selectedSize === size
                                                ? 'border-red-500 text-red-500'
                                                : 'border-gray-300'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                    onClick={() => handleQuantityChange(-1)}
                                    className="px-3 py-1 border-r border-gray-300"
                                >
                                    -
                                </button>
                                <span className="px-4">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    className="px-3 py-1 border-l border-gray-300"
                                >
                                    +
                                </button>
                            </div>
                            <button className="px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                                Buy Now
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Delivery & Returns */}
                    <div className="border rounded-lg p-4 space-y-4">
                        <div className="flex items-center space-x-3">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h4 className="font-medium">Free Delivery</h4>
                                <p className="text-sm text-gray-500">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <div>
                                <h4 className="font-medium">Return Delivery</h4>
                                <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Items */}
            <div>
                <h2 className="text-2xl font-bold mb-6">Related Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedProducts.map((item) => (
                        <div key={item.id} className="group relative">
                            <div className="relative">
                                {item.discount && (
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                        -{item.discount}%
                                    </span>
                                )}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-medium">{item.name}</h3>
                                <div className="flex items-center space-x-2">
                                    <span className="text-red-500 font-medium">${item.price}</span>
                                    {item.oldPrice && (
                                        <span className="text-gray-500 line-through">${item.oldPrice}</span>
                                    )}
                                </div>
                                <div className="flex items-center mt-1">
                                    <div className="flex items-center">
                                        {renderStars(item.rating)}
                                    </div>
                                    <span className="ml-2 text-sm text-gray-500">({item.reviews})</span>
                                </div>
                            </div>
                            {item.id === 1 && (
                                <button className="w-full mt-4 px-4 py-2 bg-black text-white rounded">
                                    Add To Cart
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage; 