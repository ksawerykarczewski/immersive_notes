import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
            <motion.div
             ref={ref}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 }
                }}
            >
                {children}
            </motion.div>
    );
}

export default Section;
