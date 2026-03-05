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
    <InView triggerOnce threshold={0.15}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          className="service-card"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: index * 0.08,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
          whileHover={{
            y: -6,
            borderColor: 'rgba(255, 255, 255, 0.15)',
            background: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="service-icon-wrapper">{icon}</div>
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="card-arrow">↗</div>
          <motion.div
            className="card-glow"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      )}
    </InView>
  );
};

export default ServiceCard;