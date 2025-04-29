import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const WishlistPage = () => {
    // Mock data - will be replaced with real data from API/state management
    const wishlistItems = [
        {
            id: 1,
            name: 'Gucci duffle bag',
            price: 960,
            originalPrice: 1160,
            discount: 35,
            image: '/images/products/gucci-bag.png'
        },
        {
            id: 2,
            name: 'RGB liquid CPU Cooler',
            price: 1560,
            image: '/images/products/cpu-cooler.png'
        },
        {
            id: 3,
            name: 'GP11 Shooter USB Gamepad',
            price: 550,
            image: '/images/products/gamepad.png'
        },
        {
            id: 4,
            name: 'Quilted Satin Jacket',
            price: 750,
            image: '/images/products/jacket.png'
        }
    ];

    const handleRemoveFromWishlist = (id) => {
        // TODO: Implement remove from wishlist functionality
        console.log('Remove item:', id);
    };

    const handleAddToCart = (id) => {
        // TODO: Implement add to cart functionality
        console.log('Add to cart:', id);
    };

    const handleMoveAllToBag = () => {
        // TODO: Implement move all to bag functionality
        console.log('Moving all items to bag');
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-medium">
                        Wishlist ({wishlistItems.length})
                    </h1>
                    <button
                        onClick={handleMoveAllToBag}
                        className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
                    >
                        Move All To Bag
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="bg-[#F5F5F5] p-4 relative group">
                            {item.discount && (
                                <span className="absolute top-4 left-4 bg-[#DB4444] text-white px-3 py-1 text-sm">
                                    -{item.discount}%
                                </span>
                            )}
                            <button
                                onClick={() => handleRemoveFromWishlist(item.id)}
                                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="aspect-square mb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-medium text-lg">{item.name}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#DB4444] font-medium">${item.price}</span>
                                    {item.originalPrice && (
                                        <span className="text-gray-500 line-through">${item.originalPrice}</span>
                                    )}
                                </div>

                                <button
                                    onClick={() => handleAddToCart(item.id)}
                                    className="w-full bg-black text-white py-2 hover:bg-gray-800 transition-colors"
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Just For You Section */}
                <div className="mt-16">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-5 h-10 bg-[#DB4444]"></div>
                            <h2 className="text-2xl font-medium">Just For You</h2>
                        </div>
                        <Link to="/products" className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors">
                            See All
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Similar product cards structure as above */}
                        {/* This will be populated with recommended products */}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default WishlistPage; 