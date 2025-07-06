import React, { useRef, useState } from 'react';
import './Card.css';
import { PokemonCard } from '../data/cards';

interface CardProps {
  card: PokemonCard;
}

// 타입별 색상 매핑
const TYPE_COLORS: Record<string, string> = {
  '풀': '#4caf50',
  '불꽃': '#e53935',
  '물': '#2196f3',
  '전기': '#ffeb3b',
  '얼음': '#00bcd4',
  '격투': '#f44336',
  '독': '#ab47bc',
  '땅': '#a1887f',
  '비행': '#90caf9',
  '에스퍼': '#f06292',
  '벌레': '#8bc34a',
  '바위': '#795548',
  '고스트': '#7e57c2',
  '드래곤': '#1976d2',
  '악': '#616161',
  '강철': '#b0bec5',
  '페어리': '#f8bbd0',
  '노말': '#bdbdbd',
};

function getTypeColor(type: string) {
  // 복수 타입일 경우 첫 번째 타입 기준
  const mainType = type.split('/')[0];
  return TYPE_COLORS[mainType] || '#eee';
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

  const typeColor = getTypeColor(card.type);

  return (
    <div
      className={`pokemon-card${isDragging ? ' dragging' : ''}`}
      ref={cardRef}
      style={{
        transform: `perspective(800px) rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg)`,
        background: `linear-gradient(135deg, ${typeColor}33 60%, #fffbe7 100%)`,
        boxShadow: isDragging
          ? `0 8px 32px ${typeColor}88, 0 1.5px 0 #fff8 inset`
          : undefined,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div
        className="card-glow"
        style={{
          boxShadow: isDragging
            ? `0 0 48px 16px ${typeColor}cc, 0 0 0 0 #fff0`
            : `0 0 32px 8px ${typeColor}88, 0 0 0 0 #fff0`,
        }}
      />
      <div className="card-holo" />
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