import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc, icon, index }) => {
  return (
    <InView triggerOnce threshold={0.2}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{
            y: -10,
            borderColor: '#aaa',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          }}
        >
          <div className="service-icon">{icon}</div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <motion.div
            className="card-glow"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </InView>
  );
};

export default ServiceCard;