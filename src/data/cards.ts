// CRA 환경에서 process.env.PUBLIC_URL 사용을 위한 타입 무시
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let process: any;

export interface PokemonCard {
  id: string;
  name: string;
  engName: string;
  stage: number;
  type: string;
  hp: number;
  image: string;
  description: string;
}

const PUBLIC_URL = process.env.PUBLIC_URL || '';

export const cards: PokemonCard[] = [
  {
    id: 'pikachu-1',
    name: '피카츄',
    engName: 'Pikachu',
    stage: 1,
    type: '전기',
    hp: 60,
    image: PUBLIC_URL + '/pikachu-1.png',
    description: '귀여운 전기쥐 포켓몬. 볼에 전기를 저장한다.'
  },
  {
    id: 'pikachu-2',
    name: '라이츄',
    engName: 'Raichu',
    stage: 2,
    type: '전기',
    hp: 120,
    image: PUBLIC_URL + '/pikachu-2.png',
    description: '피카츄의 진화형. 강력한 전기 공격을 구사한다.'
  },
  {
    id: 'charmander-1',
    name: '파이리',
    engName: 'Charmander',
    stage: 1,
    type: '불꽃',
    hp: 50,
    image: PUBLIC_URL + '/charmander-1.png',
    description: '꼬리의 불꽃이 생명력의 상징인 불꽃 포켓몬.'
  },
  {
    id: 'charmander-2',
    name: '리자드',
    engName: 'Charmeleon',
    stage: 2,
    type: '불꽃',
    hp: 90,
    image: PUBLIC_URL + '/charmander-2.png',
    description: '파이리의 진화형. 성격이 다소 난폭해진다.'
  },
  {
    id: 'charmander-3',
    name: '리자몽',
    engName: 'Charizard',
    stage: 3,
    type: '불꽃/비행',
    hp: 170,
    image: PUBLIC_URL + '/charmander-3.png',
    description: '불꽃과 비행 타입의 최종 진화. 강력한 화염방사!'
  },
  {
    id: 'squirtle-1',
    name: '꼬부기',
    engName: 'Squirtle',
    stage: 1,
    type: '물',
    hp: 50,
    image: PUBLIC_URL + '/squirtle-1.png',
    description: '등껍질이 단단한 물거북 포켓몬.'
  },
  {
    id: 'squirtle-2',
    name: '어니부기',
    engName: 'Wartortle',
    stage: 2,
    type: '물',
    hp: 90,
    image: PUBLIC_URL + '/squirtle-2.png',
    description: '꼬부기의 진화형. 귀와 꼬리가 길어진다.'
  },
  {
    id: 'squirtle-3',
    name: '거북왕',
    engName: 'Blastoise',
    stage: 3,
    type: '물',
    hp: 170,
    image: PUBLIC_URL + '/squirtle-3.png',
    description: '등껍질의 대포로 강력한 물대포를 발사한다.'
  }
]; 