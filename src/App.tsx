import React from 'react';
import './App.css';
import { cards } from './data/cards.ts';
import Card from './components/Card.tsx';

function App() {
  return (
    <div className="App">
      <h1 className="main-title">포켓몬 카드 컬렉션</h1>
      <div className="card-grid">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <footer className="footer">이미지 출처: pokemoncard.co.kr, PokeAPI | 내부 개발/학습용</footer>
    </div>
  );
}

export default App; 