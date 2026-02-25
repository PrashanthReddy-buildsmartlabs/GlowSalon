import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Scissors, Droplets, Heart } from 'lucide-react';
import Button from '../components/UI/Button';

// Unsplash premium aesthetic images
const heroSlides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80',
        title: 'Experience Pure Luxury',
        subtitle: 'Where Beauty Meets Elegance',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80',
        title: 'Transform Your Look',
        subtitle: 'Master Stylists at Your Service',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80',
        title: 'Relax & Rejuvenate',
        subtitle: 'Premium Spa Treatments',
    }
];

const featuredServices = [
    {
        icon: <Scissors className="w-8 h-8" />,
        title: "Hair Styling",
        description: "Expert cuts, coloring, and treatments tailored to your unique style."
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Bridal Makeup",
        description: "Flawless, luxurious bridal packages for your special day."
    },
    {
        icon: <Droplets className="w-8 h-8" />,
        title: "Spa & Massage",
        description: "Deep relaxation therapies to melt away stress."
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "Nail Care",
        description: "Premium manicures and pedicures with artistic designs."
    }
];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-gray-900">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
                        />
                        {/* Dark gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30" />
                    </motion.div>
                </AnimatePresence>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                    <div className="max-w-2xl text-white">
                        <motion.p
                            key={`sub-${currentSlide}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-gold uppercase tracking-widest text-sm md:text-base font-semibold mb-4"
                        >
                            {heroSlides[currentSlide].subtitle}
                        </motion.p>
                        <motion.h1
                            key={`title-${currentSlide}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight"
                        >
                            {heroSlides[currentSlide].title}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button href="tel:+919876543210" variant="gold">
                                Book Appointment
                            </Button>
                            <Button to="/services" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                                Explore Services
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                    {heroSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-gold w-8' : 'bg-white/50 hover:bg-white'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Services Teaser */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Our Premium Services</h2>
                        <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Indulge in a world class salon experience. We use only the finest products to ensure you look and feel extraordinary.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-luxury transition-all duration-300 text-center rounded-sm"
                            >
                                <div className="w-16 h-16 mx-auto bg-primary-50 text-gold rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-serif text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <Link to="/services" className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-gold transition-colors">
                                    READ MORE <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Split Section */}
            <section className="py-20 bg-primary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
                                    alt="Salon interior"
                                    className="rounded-sm shadow-xl z-10 relative"
                                />
                                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold -z-10 rounded-sm"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <h4 className="text-gold uppercase tracking-widest font-semibold mb-2">The GlowSalon Promise</h4>
                            <h2 className="font-serif text-4xl text-gray-900 mb-6 leading-tight">Setting the Gold Standard in Beauty</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Located in the heart of Hyderabad, GlowSalon is a sanctuary of refined beauty and wellness. Our commitment to excellence is reflected in every detail, from our plush interiors to our meticulously curated luxury products.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Internationally Trained Master Stylists',
                                    '100% Authentic Premium Products',
                                    'Hygienic, State-of-the-Art Facilities',
                                    'Personalized Consultations'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700">
                                        <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button to="/team" variant="primary">Meet Our Experts</Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
