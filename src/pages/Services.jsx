import { motion } from 'framer-motion';
import PageHeader from '../components/UI/PageHeader';
import Button from '../components/UI/Button';

const serviceCategories = [
    {
        title: "Hair Design & Color",
        description: "Expert styling using Olaplex and Kérastase products.",
        items: [
            { name: "Women's Signature Cut & Style", price: "Starts at ₹1,500" },
            { name: "Men's Precision Cut", price: "Starts at ₹800" },
            { name: "Balayage / Ombré", price: "Starts at ₹5,500" },
            { name: "Global Hair Color", price: "Starts at ₹3,500" },
            { name: "Keratin Treatment", price: "Starts at ₹6,000" },
            { name: "Deep Conditioning Spa", price: "Starts at ₹1,200" }
        ]
    },
    {
        title: "Bridal & Makeover",
        description: "Flawless airbrush and HD makeup by internationally trained artists.",
        items: [
            { name: "Signature Bridal HD Makeup", price: "Starts at ₹15,000" },
            { name: "Pre-Bridal Package (5 Days)", price: "Starts at ₹12,000" },
            { name: "Party / Guest Makeup", price: "Starts at ₹4,000" },
            { name: "Engagement / Sangeet Look", price: "Starts at ₹8,500" },
            { name: "Custom Hair Updos", price: "Starts at ₹2,000" }
        ]
    },
    {
        title: "Skin & Spa Retreat",
        description: "Rejuvenating therapies mapping your skin's unique needs.",
        items: [
            { name: "Glow Signature Facial", price: "Starts at ₹3,000" },
            { name: "O3+ Bridal Facial", price: "Starts at ₹4,500" },
            { name: "Aromatherapy Massage (60 min)", price: "Starts at ₹2,500" },
            { name: "Deep Tissue Massage (60 min)", price: "Starts at ₹3,000" },
            { name: "Body Polishing", price: "Starts at ₹4,000" }
        ]
    },
    {
        title: "Nails & Essentials",
        description: "Detail-oriented care for perfect hands and feet.",
        items: [
            { name: "Luxury Gel Manicure", price: "Starts at ₹1,500" },
            { name: "Spa Pedicure", price: "Starts at ₹1,800" },
            { name: "Acrylic Extensions", price: "Starts at ₹3,000" },
            { name: "Nail Art (Per Finger)", price: "Starts at ₹200" },
            { name: "Threading & Waxing (Full Body)", price: "Starts at ₹2,500" }
        ]
    }
];

export default function Services() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Our Services"
                description="Discover our extensive range of premium salon and spa treatments designed to elevate your beauty."
                bgImage="https://images.unsplash.com/photo-1521590832168-6080facceb5c?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {serviceCategories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="bg-primary-50 p-8 md:p-12 rounded-sm border border-primary-100"
                            >
                                <h2 className="font-serif text-3xl text-gray-900 mb-3">{category.title}</h2>
                                <p className="text-gray-600 mb-8 pb-6 border-b border-primary-200">
                                    {category.description}
                                </p>

                                <ul className="space-y-4">
                                    {category.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex justify-between items-center group">
                                            <span className="text-gray-800 font-medium group-hover:text-gold transition-colors">
                                                {item.name}
                                            </span>
                                            <span className="text-gray-500 text-sm whitespace-nowrap ml-4">
                                                {item.price}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}

                    </div>

                    <div className="mt-20 text-center bg-gray-900 text-white p-12 md:p-16 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

                        <h3 className="relative z-10 font-serif text-3xl md:text-4xl mb-6">Need a Custom Package?</h3>
                        <p className="relative z-10 text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                            We offer bespoke bridal packages and group bookings tailored exactly to your requirements and schedule.
                        </p>
                        <Button href="tel:+919876543210" variant="gold" className="relative z-10">
                            Speak to a Consultant
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
