"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [colors, setColors] = useState(Array(9).fill("bg-neutral-800"));
  const [blueIndices, setBlueIndices] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); // Tracks the elapsed time
  const [timestamps, setTimestamps] = useState<string[]>(Array(9).fill(""));// Stops the time stamps formated time
  const [clickOrder, setClickOrder] = useState<number[]>(Array(9).fill(0));

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && blueIndices.length < 9) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning, blueIndices.length]);

  const formatTime = (time: number) => {
    return `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${("0" + Math.floor((time / 1000) % 60)).slice(-2)}:${("0" + ((time / 10) % 100)).slice(-2)}`;
  };

  const handleClick = (index: number) => {
    if (!isRunning) {
      setIsRunning(true);
    }
    if (!blueIndices.includes(index)) {
      setColors((prevColors) =>
        prevColors.map((color, i) => (i === index ? "bg-white" : color))
      );
      setBlueIndices((prevIndices) => {
        const newIndices = [...prevIndices, index];
        if (newIndices.length === 9) {
          setIsRunning(false);
        }
        return newIndices;
      });
      setTimestamps((prevTimestamps) => {
        const newTimestamps = [...prevTimestamps];
        newTimestamps[index] = formatTime(time);
        return newTimestamps;
      });
      setClickOrder((prevOrder) => {
        const newOrder = [...prevOrder];
        newOrder[index] = blueIndices.length + 1;
        return newOrder;
      });
    }
  };

  const handleReset = () => {
    setColors(Array(9).fill("bg-neutral-800"));
    setBlueIndices([]);
    setIsRunning(false);
    setTime(0);
    setTimestamps(Array(9).fill(""));
    setClickOrder(Array(9).fill(0));
  };

  const formatBlueIndicesText = () => {
    if (blueIndices.length === 0) return "No boxes are white";
    
    const sortedIndices = [...blueIndices].sort((a, b) => clickOrder[a] - clickOrder[b]);
    const formattedIndices = sortedIndices.map((index) => (
      <span key={index} className="relative">
        {index + 1}
        <sup className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
          <span className="text-black text-xs font-bold">{clickOrder[index]}</span>
        </sup>
      </span>
    ));

    return (
      <>
        Box number{' '}
        {formattedIndices.reduce((prev, curr, i) => (
          <>
            {prev}
            {i > 0 && (i === formattedIndices.length - 1 ? ' and ' : ', ')}
            {curr}
          </>
        ))}
        {' '}
        {blueIndices.length > 1 ? 'are' : 'is'} white
      </>
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-cyan-500 p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-xl sm:text-2xl font-bold text-white"
      >
        {formatTime(time)}
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xs sm:max-w-md">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <motion.div
              className={`w-full aspect-square ${color} rounded-lg flex items-center justify-center relative`}
              onClick={() => handleClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence>
                {clickOrder[index] > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute top-1 right-1 w-6 h-6 bg-neutral-700 rounded-full flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-bold">{clickOrder[index]}</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="font-bold text-black text-xl"
              >
                {timestamps[index]}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-white mt-4 font-semibold text-lg sm:text-2xl text-center"
      >
        {formatBlueIndicesText()}
      </motion.div>
      <motion.button
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-white text-black rounded-lg font-semibold text-sm sm:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Reset
      </motion.button>
    </div>
  );
}
