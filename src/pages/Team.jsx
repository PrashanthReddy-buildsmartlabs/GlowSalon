import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import PageHeader from '../components/UI/PageHeader';

const teamMembers = [
    {
        id: 1,
        name: 'Sarah Rahman',
        role: 'Creative Director & Founder',
        image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=800',
        bio: 'With over 15 years of international experience, Sarah brings global trends to Hyderabad.',
        specialty: 'Precision Cuts & Color',
        phone: '919876543210'
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Lead Bridal Makeup Artist',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800',
        bio: 'Certified HD & Airbrush specialist. Priya ensures every bride feels like royalty on her big day.',
        specialty: 'Bridal Makeovers',
        phone: '919876543210'
    },
    {
        id: 3,
        name: 'Rahul Verma',
        role: 'Senior Hair Stylist',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
        bio: 'Rahul specializes in modern men\'s grooming and advanced women\'s balayage techniques.',
        specialty: 'Balayage & Men\'s Grooming',
        phone: '919876543210'
    },
    {
        id: 4,
        name: 'Anita Reddy',
        role: 'Spa & Wellness Manager',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
        bio: 'Anita\'s healing hands and holistic approach guarantee ultimate relaxation for every client.',
        specialty: 'Aromatherapy & Skin Care',
        phone: '919876543210'
    }
];

export default function Team() {
    return (
        <div className="bg-gray-50 flex-grow">
            <PageHeader
                title="Meet Our Experts"
                description="Our talented team of internationally trained professionals are dedicated to delivering perfection."
                bgImage="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-sm shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image Container with Hover Zoom */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

                                    {/* WhatsApp CTA overlay on hover */}
                                    <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <a
                                            href={`https://wa.me/${member.phone}?text=Hi%20${encodeURIComponent(member.name)},%20I%20would%20like%20to%20book%20an%20appointment.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            <span>Chat on WhatsApp</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-serif text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-gold text-sm font-semibold tracking-wide uppercase mb-4">{member.role}</p>

                                    <div className="mb-4">
                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">Specialty</span>
                                        <p className="text-gray-700 font-medium">{member.specialty}</p>
                                    </div>

                                    <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
}
