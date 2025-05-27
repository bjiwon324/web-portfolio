import { useEffect, useState } from "react";
import { LeafData } from "../types";
import { getRandomInt, getRandomNumber } from "../utils";
import { LEAF_SETTINGS } from "../constants";


export const useFallingLeaves = () => {
    const [leaves, setLeaves] = useState<LeafData[]>([]);

  const {
    numberOfLeaves,
    minLeafSize,
    maxLeafSize,
    minFallDuration,
    maxFallDuration,
    minFallCycleDuration,
    maxFallCycleDuration,
    maxDelay,
  } = LEAF_SETTINGS;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const calculatedLeaves: LeafData[] = [];

      for (let i = 0; i < numberOfLeaves; i++) {
        const randomSize = getRandomInt(minLeafSize, maxLeafSize);
        const randomStartX = getRandomNumber(0, 100); 
        const randomStartY = getRandomNumber(-maxLeafSize * 2 - 20, -minLeafSize - 10); 

        const randomFallDuration = getRandomNumber(minFallDuration, maxFallDuration); 
        const randomFallCycleDuration = getRandomNumber(minFallCycleDuration, maxFallCycleDuration); 
        const randomDelay = getRandomNumber(0, maxDelay); 

        calculatedLeaves.push({
          id: i, 
          size: randomSize,
          startX: randomStartX, 
          startY: randomStartY, 
          fallDuration: randomFallDuration,
          fallCycleDuration: randomFallCycleDuration,
          delay: randomDelay,
        });
      }
      setLeaves(calculatedLeaves);
    }
  }, []);
  return { leaves };
};
