import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'LCD Monitor',
            price: 650,
            quantity: 1,
            image: '/images/lcd-monitor.png'
        },
        {
            id: 2,
            name: 'H1 Gamepad',
            price: 550,
            quantity: 2,
            image: '/images/gamepad.png'
        }
    ]);

    const [couponCode, setCouponCode] = useState('');

    const updateQuantity = (id, newQuantity) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    const handleApplyCoupon = () => {
        // Implement coupon logic here
        console.log('Applying coupon:', couponCode);
    };

    const subtotal = calculateSubtotal();
    const shipping = 'Free';
    const total = subtotal;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-4 px-6 text-left">Product</th>
                                    <th className="py-4 px-6 text-left">Price</th>
                                    <th className="py-4 px-6 text-left">Quantity</th>
                                    <th className="py-4 px-6 text-left">Subtotal</th>
                                    <th className="py-4 px-6"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="border-b">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-4">
                                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                                                <span>{item.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">${item.price}</td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center border rounded-md w-24">
                                                <button
                                                    className="px-3 py-1"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                    className="w-12 text-center border-x"
                                                />
                                                <button
                                                    className="px-3 py-1"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">${item.price * item.quantity}</td>
                                        <td className="py-4 px-6">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-500"
                                            >
                                                ×
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between mt-6">
                        <Link
                            to="/"
                            className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
                        >
                            Return To Shop
                        </Link>
                        <button
                            onClick={() => setCartItems(prev => [...prev])}
                            className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
                        >
                            Update Cart
                        </button>
                    </div>

                    <div className="mt-6">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                className="flex-1 px-4 py-2 border rounded-md"
                            />
                            <button
                                onClick={handleApplyCoupon}
                                className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                                Apply Coupon
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between border-b pb-4">
                                <span>Subtotal:</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between border-b pb-4">
                                <span>Shipping:</span>
                                <span>{shipping}</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                                <span>Total:</span>
                                <span>${total}</span>
                            </div>
                            <button
                                className="w-full py-3 bg-red-500 text-white rounded-md hover:bg-red-600 mt-4"
                            >
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart; 