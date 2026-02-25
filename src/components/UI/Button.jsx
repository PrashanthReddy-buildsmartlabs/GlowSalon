import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({
    children,
    variant = 'primary',
    to = null,
    href = null,
    onClick = null,
    className = '',
    type = 'button'
}) {
    const baseStyles = "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 px-6 py-3 min-w-[140px]";

    const variants = {
        primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-lg hover:shadow-primary-500/30",
        secondary: "bg-gray-900 text-white hover:bg-gold shadow-md hover:shadow-lg hover:shadow-gold/30",
        outline: "bg-transparent text-gray-900 border border-gray-900 hover:border-primary-500 hover:text-primary-500",
        gold: "bg-gold text-white hover:bg-gold-dark shadow-md hover:shadow-lg hover:shadow-gold/30",
    };

    const Component = motion.button;
    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses} onClick={onClick}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedClasses} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <Component
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={combinedClasses}
            onClick={onClick}
            type={type}
        >
            {children}
        </Component>
    );
}
