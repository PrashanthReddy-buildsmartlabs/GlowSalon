import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import emailjs from '@emailjs/browser';
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import PageHeader from '../components/UI/PageHeader';
import Button from '../components/UI/Button';

export default function Contact() {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Mock EmailJS transmission for demonstration without active keys
        // In production: emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            formRef.current.reset();

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    return (
        <div className="bg-gray-50 flex-grow">
            <PageHeader
                title="Get in Touch"
                description="Book your appointment, inquire about services, or just say hello."
                bgImage="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Information & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Visit Our Sanctuary</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We are conveniently located in the upscale heart of Jubilee Hills. Drop by for a consultation or give us a call to secure your preferred slot.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 shrink-0 mt-1">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-gray-900">Location</h4>
                                        <p className="text-gray-600 mt-1">123 Jubilee Hills Road, Plot No 45<br />Hyderabad, Telangana 500033</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 shrink-0 mt-1">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-gray-900">Phone & WhatsApp</h4>
                                        <p className="text-gray-600 mt-1">
                                            <a href="tel:+919876543210" className="hover:text-gold transition-colors block">+91 98765 43210</a>
                                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors block mt-1 font-medium">Message on WhatsApp</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 shrink-0 mt-1">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-gray-900">Opening Hours</h4>
                                        <div className="text-gray-600 mt-1 space-y-1">
                                            <p>Mon - Fri: 10:00 AM - 8:00 PM</p>
                                            <p>Saturday: 9:00 AM - 9:00 PM</p>
                                            <p>Sunday: 10:00 AM - 7:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simulated Google Map (Iframe) */}
                        <div className="w-full h-80 rounded-sm overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3bcb91625d8cbdb5%3A0x6b4fbcec920db207!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="GlowSalon Location"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-100"
                    >
                        <h2 className="text-3xl font-serif text-gray-900 mb-8">Send Us a Message</h2>

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        required
                                        className="w-full border-gray-300 rounded-sm shadow-sm focus:border-gold focus:ring-gold py-3 px-4 border"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="user_phone"
                                        id="user_phone"
                                        required
                                        className="w-full border-gray-300 rounded-sm shadow-sm focus:border-gold focus:ring-gold py-3 px-4 border"
                                        placeholder="+91 90000 00000"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="service_interest" className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
                                <select
                                    name="service_interest"
                                    id="service_interest"
                                    className="w-full border-gray-300 rounded-sm shadow-sm focus:border-gold focus:ring-gold py-3 px-4 border bg-white"
                                >
                                    <option>Hair Styling & Cut</option>
                                    <option>Hair Color / Balayage</option>
                                    <option>Bridal Makeup Package</option>
                                    <option>Spa & Massage</option>
                                    <option>Nail Care</option>
                                    <option>Other Enquiry</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        name="preferred_date"
                                        id="preferred_date"
                                        className="w-full border-gray-300 rounded-sm shadow-sm focus:border-gold focus:ring-gold py-3 px-4 border"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                                    <select
                                        name="preferred_time"
                                        id="preferred_time"
                                        className="w-full border-gray-300 rounded-sm shadow-sm focus:border-gold focus:ring-gold py-3 px-4 border bg-white"
                                    >
                                        <option>Morning (10AM - 1PM)</option>
                                        <option>Afternoon (1PM - 4PM)</option>
                                        <option>Evening (4PM - 7PM)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Message / Restrictions</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    className="w-full border-gray-300 rounded-sm shadow-sm focus:border-gold focus:ring-gold py-3 px-4 border"
                                    placeholder="Tell us any specific requirements or questions..."
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full text-lg py-4"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending Request...' : 'Request Appointment'}
                            </Button>

                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-4 bg-green-50 border border-green-200 rounded-sm flex items-center text-green-800 mt-4"
                                    >
                                        <CheckCircle className="w-5 h-5 mr-3 shrink-0" />
                                        <span>Your request has been received! Our team will contact you shortly to confirm your booking.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </form>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
