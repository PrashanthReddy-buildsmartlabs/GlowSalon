import { motion } from 'framer-motion';
import { Gift, Sparkles, Tag } from 'lucide-react';
import PageHeader from '../components/UI/PageHeader';
import Button from '../components/UI/Button';

const promotions = [
    {
        icon: <Gift className="w-6 h-6" />,
        title: "First Visit Exclusive",
        subtitle: "Welcome to GlowSalon",
        description: "Enjoy a complimentary deep conditioning treatment or a simple nail polish change with any hair service of ₹2,500 or more.",
        discount: "Free Add-on",
        terms: "Valid for new clients only. Mention this offer when booking.",
        bgColor: "from-primary-50 to-primary-100",
        borderColor: "border-primary-200"
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Bridal Party Package",
        subtitle: "Celebrate with Glamour",
        description: "Book for a bridal party of 4 or more and the Bride receives a complimentary pre-bridal trial package, plus a glass of champagne all around.",
        discount: "Free Trial + Champagne",
        terms: "Minimum booking of ₹20,000 required. Advise 2 weeks notice.",
        bgColor: "from-gold-dark/10 to-gold/20",
        borderColor: "border-gold"
    },
    {
        icon: <Tag className="w-6 h-6" />,
        title: "Weekday Rejuvenation",
        subtitle: "Tuesday – Thursday",
        description: "Take 20% off all premium spa and massage therapies booked between 11 AM and 3 PM on weekdays.",
        discount: "20% OFF",
        terms: "Cannot be combined with other offers. Subject to availability.",
        bgColor: "from-gray-50 to-gray-100",
        borderColor: "border-gray-200"
    }
];

export default function Offers() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Special Offers"
                description="Exclusive packages and seasonal promotions designed to pamper you for less."
                bgImage="https://images.unsplash.com/photo-1608283086580-dfb657fb1e5c?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="space-y-12">
                        {promotions.map((promo, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className={`relative overflow-hidden rounded-md border ${promo.borderColor} bg-gradient-to-r ${promo.bgColor}`}
                            >
                                <div className="flex flex-col md:flex-row shadow-sm">

                                    {/* Visual/Discount Column */}
                                    <div className="md:w-1/3 bg-white/60 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-black/5">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gold shadow-sm mb-4">
                                            {promo.icon}
                                        </div>
                                        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">{promo.discount}</h3>
                                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{promo.subtitle}</p>
                                    </div>

                                    {/* Details Column */}
                                    <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                                        <h2 className="text-2xl font-serif text-gray-900 mb-4">{promo.title}</h2>
                                        <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl">
                                            {promo.description}
                                        </p>

                                        <div className="mt-auto">
                                            <p className="text-xs text-gray-500 italic mb-6">* {promo.terms}</p>
                                            <Button href="tel:+919876543210" variant="primary">
                                                Claim This Offer
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Membership Teaser */}
            <section className="py-20 bg-gray-900 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-serif text-white mb-6">Join The Glow Club</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Become a premium member to unlock year-round discounts, priority booking, and complimentary birthday makeovers.
                    </p>
                    <Button to="/contact" variant="gold">Inquire About Memberships</Button>
                </div>
            </section>
        </div>
    );
}
