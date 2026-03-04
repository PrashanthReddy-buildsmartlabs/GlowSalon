import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Intro */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl text-white tracking-widest">
                            GLOW<span className="text-gold">SALON</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Experience the pinnacle of luxury beauty. Our professional stylists and therapists are dedicated to bringing out your inner glow.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-medium uppercase tracking-wider mb-6">Explore</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
                            <li><Link to="/team" className="hover:text-gold transition-colors">The Team</Link></li>
                            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
                            <li><Link to="/offers" className="hover:text-gold transition-colors">Special Offers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-medium uppercase tracking-wider mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span>123 Jubilee Hills Road, Plot No 45<br />Hyderabad, Telangana 500033</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-gold shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-gold shrink-0" />
                                <a href="mailto:hello@glowsalon.in" className="hover:text-white transition-colors">hello@glowsalon.in</a>
                            </li>
                        </ul>
                    </div>

                    {/* Open Hours */}
                    <div>
                        <h4 className="text-white font-medium uppercase tracking-wider mb-6">Hours</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                <span>Mon - Fri</span>
                                <span className="text-white">10:00 AM - 8:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-800 pb-2">
                                <span>Saturday</span>
                                <span className="text-white">9:00 AM - 9:00 PM</span>
                            </li>
                            <li className="flex justify-between pb-2">
                                <span>Sunday</span>
                                <span className="text-white">10:00 AM - 7:00 PM</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {currentYear} GlowSalon Hyderabad. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
