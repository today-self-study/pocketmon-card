### 프로젝트 프롬프트(요구사항)

1. 프로젝트는 리액트 프로젝트를 사용하고
2.  @https://pokemoncard.co.kr/cards  여기에 포켓몬 카드들이 있는데 피카츄,파이리,꼬부기 까지 3단진화까지 해서 카드를 똑같이 만들어줘
3. @https://youtu.be/YDCCauu4lIk?si=13yeCSOt64ZtUN5- 이 유튜브를 분석해서 카드를 원하는 방향으로 드래그 할때마다 이미지가 회전하고 반짝이는 효과를 추가해줘.
4. 경로는 toy 디렉토리 아래에 pocketman-card 라는 프로젝트를 생성해서 만들어줘.
5. 다 만들면 위에 만든 저장소에 커밋/푸쉬 해줘.
6. 다 만들면 @https://github.com/today-self-study/tss/issues 여기 issue까지 아래 양식으로 등록해줘.  제목은 프로젝트 명이랑 똑같이하고 설명은 아래와 같이 소개 설명하고 주소는 github pages 만들거니까 그 주소 넣어서 이슈 생성해줘.
사이트 소개:
사이트 주소:
개발자: @sSeongJae91
7. 그리고 READ.ME에 내가 위에 작성한 프롬프를 그대로 올려줘. 이 내용 까지 전부

---

# pocketmon-card

## 주요 변경사항 (2024-06)

- **1세대(1~151번) 포켓몬 카드**: 모든 1세대 포켓몬을 카드로 구현, 번호순 정렬.
- **타입별 배경색/글로우/드래그 효과**: 카드 배경, glow-pulse, 드래그 효과가 포켓몬 타입별로 동적으로 적용됨.
- **드래그 시 홀로그램 효과**: 카드를 드래그하면 홀로그램 느낌의 애니메이션 효과가 추가됨.
- **이미지 경로**: 실제 이미지 파일이 없는 포켓몬은 PokeAPI 공식 일러스트(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{번호}.png`)를 사용.
- **타입별 색상 매핑**:
  - 풀: #4caf50, 불꽃: #e53935, 물: #2196f3, 전기: #ffeb3b, 얼음: #00bcd4, 격투: #f44336, 독: #ab47bc, 땅: #a1887f, 비행: #90caf9, 에스퍼: #f06292, 벌레: #8bc34a, 바위: #795548, 고스트: #7e57c2, 드래곤: #1976d2, 악: #616161, 강철: #b0bec5, 페어리: #f8bbd0, 노말: #bdbdbd
- **데이터/이미지 출처**: PokeAPI, pokemoncard.co.kr (내부 개발/학습용)

## 사용법
- npm install → npm start (로컬 실행)
- npm run deploy (GitHub Pages 배포)
- 배포 주소: https://today-self-study.github.io/pocketmon-card/

## 개발자
- @sSeongJae91
