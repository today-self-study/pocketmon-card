// CRA 환경에서 process.env.PUBLIC_URL 사용을 위한 타입 무시
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let process: any;

export interface PokemonCard {
  id: string; // 3자리 번호 문자열
  name: string; // 한글 이름
  engName: string; // 영문 이름
  stage: number; // 진화 단계(1~3)
  type: string; // 타입 (복수 타입은 '/'로 구분)
  hp: number; // 임의값(50~150)
  image: string; // 이미지 URL
  description: string; // 간단 설명
}

// 1~151번 포켓몬 데이터 (샘플: 1~5번, 실제는 151개로 확장 필요)
export const cards: PokemonCard[] = [
  {
    id: '001',
    name: '이상해씨',
    engName: 'Bulbasaur',
    stage: 1,
    type: '풀/독',
    hp: 60,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    description: '등에 씨앗을 지닌 풀·독 타입 포켓몬.'
  },
  {
    id: '002',
    name: '이상해풀',
    engName: 'Ivysaur',
    stage: 2,
    type: '풀/독',
    hp: 90,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    description: '꽃봉오리가 자라난 이상해씨의 진화형.'
  },
  {
    id: '003',
    name: '이상해꽃',
    engName: 'Venusaur',
    stage: 3,
    type: '풀/독',
    hp: 130,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    description: '등의 꽃이 활짝 핀 이상해풀의 진화형.'
  },
  {
    id: '004',
    name: '파이리',
    engName: 'Charmander',
    stage: 1,
    type: '불꽃',
    hp: 55,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    description: '꼬리의 불꽃이 생명력의 상징인 불꽃 포켓몬.'
  },
  {
    id: '005',
    name: '리자드',
    engName: 'Charmeleon',
    stage: 2,
    type: '불꽃',
    hp: 90,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
    description: '파이리의 진화형. 성격이 다소 난폭해진다.'
  },
  // ... (006~151번까지 동일 패턴으로 추가, 실제 적용 시 전체 151개로 확장)
]; 