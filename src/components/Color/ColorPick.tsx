import { useState } from "react";
import styles from "./ColorPick.module.css";

export const ColorPick = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [action, setAction] = useState({ x: 0, y: 0 });

  const pointerStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  const boxMove = {
    transform: `scale(${position.x}px, ${position.y}px)`,
  };

  return (
    <div
      className={styles.container}
      onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
    >
      <p>포인터 따라다니기</p>
      <div
        className={styles.box}
        style={boxMove}
        onMouseEnter={() => setAction(position)}
      >
        <div className={styles.pointer1} style={pointerStyle} />
      </div>
    </div>
  );
};
