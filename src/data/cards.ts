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

// 1~151번 포켓몬 데이터 (PokeAPI 공식 일러스트 사용)
export const cards: PokemonCard[] = [
  { id: '001', name: '이상해씨', engName: 'Bulbasaur', stage: 1, type: '풀/독', hp: 60, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', description: '씨앗 포켓몬. 등에 씨앗을 지니고 태어난다.' },
  { id: '002', name: '이상해풀', engName: 'Ivysaur', stage: 2, type: '풀/독', hp: 90, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png', description: '꽃봉오리가 자라난 이상해씨의 진화형.' },
  { id: '003', name: '이상해꽃', engName: 'Venusaur', stage: 3, type: '풀/독', hp: 130, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png', description: '등의 꽃이 활짝 핀 이상해풀의 진화형.' },
  { id: '004', name: '파이리', engName: 'Charmander', stage: 1, type: '불꽃', hp: 55, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', description: '꼬리의 불꽃이 생명력의 상징인 불꽃 포켓몬.' },
  { id: '005', name: '리자드', engName: 'Charmeleon', stage: 2, type: '불꽃', hp: 90, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png', description: '파이리의 진화형. 성격이 다소 난폭해진다.' },
  { id: '006', name: '리자몽', engName: 'Charizard', stage: 3, type: '불꽃/비행', hp: 130, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', description: '불꽃과 비행 타입의 최종 진화. 강력한 화염방사!' },
  { id: '007', name: '꼬부기', engName: 'Squirtle', stage: 1, type: '물', hp: 54, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', description: '등껍질이 단단한 물거북 포켓몬.' },
  { id: '008', name: '어니부기', engName: 'Wartortle', stage: 2, type: '물', hp: 80, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', description: '꼬부기의 진화형. 귀와 꼬리가 길어진다.' },
  { id: '009', name: '거북왕', engName: 'Blastoise', stage: 3, type: '물', hp: 130, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png', description: '등껍질의 대포로 강력한 물대포를 발사한다.' },
  { id: '010', name: '캐터피', engName: 'Caterpie', stage: 1, type: '벌레', hp: 45, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png', description: '작은 벌레 포켓몬.' },
  { id: '011', name: '단데기', engName: 'Metapod', stage: 2, type: '벌레', hp: 50, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png', description: '캐터피의 진화형. 단단한 껍질.' },
  { id: '012', name: '버터플', engName: 'Butterfree', stage: 3, type: '벌레/비행', hp: 70, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png', description: '나비 포켓몬. 꽃가루를 뿌린다.' },
  { id: '013', name: '뿔충이', engName: 'Weedle', stage: 1, type: '벌레/독', hp: 40, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png', description: '작은 벌레 포켓몬. 독침이 있다.' },
  { id: '014', name: '딱충이', engName: 'Kakuna', stage: 2, type: '벌레/독', hp: 45, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png', description: '뿔충이의 진화형. 단단한 껍질.' },
  { id: '015', name: '독침붕', engName: 'Beedrill', stage: 3, type: '벌레/독', hp: 80, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png', description: '벌레/독 타입의 벌 포켓몬.' },
  { id: '016', name: '구구', engName: 'Pidgey', stage: 1, type: '노말/비행', hp: 40, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png', description: '작은 새 포켓몬.' },
  { id: '017', name: '피죤', engName: 'Pidgeotto', stage: 2, type: '노말/비행', hp: 63, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png', description: '구구의 진화형. 빠른 비행.' },
  { id: '018', name: '피죤투', engName: 'Pidgeot', stage: 3, type: '노말/비행', hp: 83, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png', description: '피죤의 진화형. 강력한 날개짓.' },
  { id: '019', name: '꼬렛', engName: 'Rattata', stage: 1, type: '노말', hp: 30, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png', description: '작은 쥐 포켓몬.' },
  { id: '020', name: '레트라', engName: 'Raticate', stage: 2, type: '노말', hp: 55, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png', description: '꼬렛의 진화형. 날카로운 이빨.' },
  // ... (21~151번까지 동일 패턴으로 추가, 실제 적용 시 전체 151개로 확장)
]; 