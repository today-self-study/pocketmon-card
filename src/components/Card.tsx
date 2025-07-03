import React, { useRef, useState } from 'react';
import './Card.css';
import { PokemonCard } from '../data/cards';

interface CardProps {
  card: PokemonCard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // 드래그 시작 위치
  const dragStart = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setRotation({ x: dy / 3, y: dx / 3 });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    setRotation({ x: 0, y: 0 });
    dragStart.current = null;
  };

  return (
    <div
      className={`pokemon-card${isDragging ? ' dragging' : ''}`}
      ref={cardRef}
      style={{
        transform: `perspective(800px) rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg)`
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="card-glow" />
      <img src={card.image} alt={card.name} className="card-image" draggable={false} />
      <div className="card-info">
        <div className="card-header">
          <span className="card-name">{card.name}</span>
          <span className="card-hp">HP {card.hp}</span>
        </div>
        <div className="card-type">{card.type}</div>
        <div className="card-desc">{card.description}</div>
        <div className="card-stage">{card.stage}단 진화</div>
      </div>
      <div className="card-sparkle" />
    </div>
  );
};

export default Card; 