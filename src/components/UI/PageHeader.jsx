import { motion } from 'framer-motion';

export default function PageHeader({ title, description, bgImage = null }) {
    return (
        <div className="relative py-24 md:py-32 bg-primary-50 overflow-hidden">
            {/* Optional Background Image with Overlay */}
            {bgImage && (
                <>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
                </>
            )}

            {/* Decorative Gold Elements */}
            <div className="absolute top-0 left-0 w-32 h-1 bg-gold"></div>
            <div className="absolute bottom-0 right-0 w-32 h-1 bg-gold"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
                >
                    {title}
                </motion.h1>

                {description && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-2xl mx-auto text-lg text-gray-600"
                    >
                        {description}
                    </motion.p>
                )}
            </div>
        </div>
    );
}
