import { useState } from "react";
import './dice.css';

interface DiceRollerProps {
  onRoll: (result: number) => void;
  disabled?: boolean;
}

const generateRandomDiceFace = (): number => {
  return Math.floor(Math.random() * 6) + 1;
};

export const DiceRoller: React.FC<DiceRollerProps> = ({ onRoll, disabled = false }) => {
  const [isRolling, setIsRolling] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [next, setNext] = useState(1);

  const baseRotations = [
     { x: 0, y: 0 },
     { x: -90, y: 0 },
     { x: 0, y: 90 },
     { x: 0, y: -90 },
     { x: 90, y: 0 },
     { x: 180, y: 0 },
  ];

  const getRotationForFace = (face: number) => {
    const fullSpinX = 360 * 3;
    const fullSpinY = 360 * 3;
    const final = baseRotations[face-1];
    return {
      x: fullSpinX + final?.x,
      y: fullSpinY + final?.y,
    };
  };

  // New: Dynamic animation start rotation to simulate rolling
  const getSpinStartRotation = (face: number) => {
    const offset = 90 * 5; // 450 deg = 1.25 full spins
    const final = baseRotations[face-1];
    return {
      x: final?.x + offset,
      y: final?.y + offset,
    };
  };

  const handleDiceRoll = () => {
    if (disabled || isRolling) return;

    const finalFace = generateRandomDiceFace();
    setNext(finalFace);
    const finalRotation = getRotationForFace(finalFace);
    setRotation(finalRotation);

    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
      onRoll(finalFace);
    }, 560);
  };

  const transform = isRolling
    ? `rotateX(${getSpinStartRotation(next).x}deg) rotateY(${getSpinStartRotation(next).y}deg)`
    : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;

  return (
<div className="dice-wrapper">
  <div className="container">
    <div className="dice-container" onClick={handleDiceRoll}>
      <div className="dice" style={{ transform }}>
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face right"></div>
        <div className="face left"></div>
      </div>
    </div>
  </div>
</div>

  );
};
