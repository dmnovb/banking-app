import card from '@/assets/platinum-card.avif';
import { motion } from 'motion/react';

const Card = () => {
  return (
    <div className="flex justify-center mt-3">
      <motion.div whileTap={{ scale: 0.9 }}>
        <img src={card} alt="card" />
      </motion.div>
    </div>
  );
};

export default Card;
