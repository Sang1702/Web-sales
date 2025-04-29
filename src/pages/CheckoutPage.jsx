import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        companyName: '',
        streetAddress: '',
        apartment: '',
        townCity: '',
        phoneNumber: '',
        emailAddress: '',
        saveInfo: false
    });

    const [paymentMethod, setPaymentMethod] = useState('cash');

    const cartItems = [
        {
            id: 1,
            name: 'LCD Monitor',
            price: 650,
            image: '/images/lcd-monitor.jpg'
        },
        {
            id: 2,
            name: 'H1 Gamepad',
            price: 1100,
            image: '/images/gamepad.jpg'
        }
    ];

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-sm breadcrumbs mb-8">
                <ul className="flex items-center space-x-2 text-gray-500">
                    <li>Account</li>
                    <li>My Account</li>
                    <li>Product</li>
                    <li>View Cart</li>
                    <li className="text-black">Checkout</li>
                </ul>
            </div>

            <h1 className="text-2xl font-bold mb-8">Billing Details</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="billing-form">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                First Name*
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Company Name
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Street Address*
                                <input
                                    type="text"
                                    name="streetAddress"
                                    value={formData.streetAddress}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Apartment, floor, etc. (optional)
                                <input
                                    type="text"
                                    name="apartment"
                                    value={formData.apartment}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Town/City*
                                <input
                                    type="text"
                                    name="townCity"
                                    value={formData.townCity}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Phone Number*
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </label>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Email Address*
                                <input
                                    type="email"
                                    name="emailAddress"
                                    value={formData.emailAddress}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="saveInfo"
                                checked={formData.saveInfo}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-primary border-gray-300 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-600">
                                Save this information for faster check-out next time
                            </label>
                        </div>
                    </form>
                </div>

                <div className="order-summary bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <span>{item.name}</span>
                                </div>
                                <span>${item.price}</span>
                            </div>
                        ))}

                        <div className="border-t pt-4">
                            <div className="flex justify-between mb-2">
                                <span>Subtotal:</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping:</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                            </div>
                            <div className="flex justify-between font-bold">
                                <span>Total:</span>
                                <span>${total}</span>
                            </div>
                        </div>

                        <div className="space-y-4 mt-6">
                            <div className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    id="bank"
                                    name="payment"
                                    value="bank"
                                    checked={paymentMethod === 'bank'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="h-4 w-4"
                                />
                                <label htmlFor="bank" className="flex items-center space-x-2">
                                    <span>Bank</span>
                                    <div className="flex space-x-2">
                                        <img src="/images/payment/visa.png" alt="Visa" className="h-6" />
                                        <img src="/images/payment/mastercard.png" alt="Mastercard" className="h-6" />
                                        <img src="/images/payment/other-cards.png" alt="Other cards" className="h-6" />
                                    </div>
                                </label>
                            </div>

                            <div className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    id="cash"
                                    name="payment"
                                    value="cash"
                                    checked={paymentMethod === 'cash'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="h-4 w-4"
                                />
                                <label htmlFor="cash">Cash on delivery</label>
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-6">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="flex-1 px-4 py-2 border rounded"
                            />
                            <button className="bg-red-500 text-white px-6 py-2 rounded">
                                Apply Coupon
                            </button>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full bg-red-500 text-white py-3 rounded mt-6"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage; 