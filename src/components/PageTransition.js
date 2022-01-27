import { motion } from 'framer-motion'

const animations = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
}

const PageTransition = ({ children }) => {
    return (
        <motion.div variants={animations} initial='initial' animate='animate' exit='exit' transition={{ duration: 0.2 }}>
            {children}
        </motion.div>
    );
};

export default PageTransition;
