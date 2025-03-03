import { useState } from 'react';
import { motion } from 'framer-motion';

interface SwipeableContentProps {
  contents: string[];
}

const SwipeableContent: React.FC<SwipeableContentProps> = ({ contents }) => {
  const [index, setIndex] = useState(0);

  const nextContent = () => setIndex((prev) => (prev + 1) % contents.length);
  const prevContent = () => setIndex((prev) => (prev - 1 + contents.length) % contents.length);

  return (
    <div className="relative w-full max-w-2xl h-64 overflow-hidden bg-yellow-200 p-4 rounded-lg shadow-lg">
      <motion.div
        key={index}
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "-100%" }}
        className="absolute w-full h-full flex items-center justify-center text-xl font-bold"
      >
        {contents[index]}
      </motion.div>
      <button onClick={prevContent} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full">&#8249;</button>
      <button onClick={nextContent} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white rounded-full">&#8250;</button>
    </div>
  );
};

export default SwipeableContent;
