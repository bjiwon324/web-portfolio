'use client'

import classNames from "classnames/bind"
import styles from "./leavesContainer.module.scss"
import { ReactNode } from "react";
import { useFallingLeaves } from "@/libs/hooks/useFallingLeaves";

const cx = classNames.bind(styles);

interface LeafVisualProps {
  size: number; 
  fallCycleDuration: number; 
  delay: number; 
}


interface LeavesContainerProps {
  children: ReactNode
}



const LeafVisual = ({ size, fallCycleDuration, delay }: LeafVisualProps) => {
  return (
         <div
      className={cx("leaf")}
      style={{
        width: size,
        height: size,
        animationDuration: `${fallCycleDuration}s`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export default function LeavesContainer({ children }: LeavesContainerProps) {
  const { leaves } = useFallingLeaves();

  return (

    <div className={cx("leaves-container")}>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={cx("leaf-container")}
          style={{
            left: `${leaf.startX}%`, 
            top: `${leaf.startY}px`, 
            animationDuration: `${leaf.fallDuration}s`, 
            animationDelay: `${leaf.delay}s`, 
          }}
        >
          <LeafVisual
            size={leaf.size} 
            fallCycleDuration={leaf.fallCycleDuration} 
            delay={leaf.delay} 
          />
        </div>
      ))}
      {children}
    </div>
  )
}

