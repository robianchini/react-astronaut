

# [React Astronaut](https://robianchini.github.io/react-astronaut/)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-astronaut.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-astronaut

A React Astronaut é uma biblioteca que oferece mais de 200 opções de avatares de astronautas para você usar em seu projeto.

<div>

<img src="http://res.cloudinary.com/astronaut-images/image/upload/v1657429473/odaaw7kbo2oxybwxvwu3.webp" width="120" alt="ReactAstronaut">
<img src="http://res.cloudinary.com/astronaut-images/image/upload/v1657429487/dbfuo3reumu9clkbtkb5.webp" width="120" alt="ReactAstronaut">
<img src="http://res.cloudinary.com/astronaut-images/image/upload/v1657429477/suctj4qwkwfvw2igidpg.webp" width="120" alt="ReactAstronaut">
<img src="http://res.cloudinary.com/astronaut-images/image/upload/v1657429465/rvfykurvjqy5d30gorgf.webp" width="120" alt="ReactAstronaut">
<img src="http://res.cloudinary.com/astronaut-images/image/upload/v1657429458/hbmdxkvbzkmfcr3sqf9g.webp" width="120" alt="ReactAstronaut">
<img src="http://res.cloudinary.com/astronaut-images/image/upload/v1657429455/lbfhajxp7suf8sfuxbyn.webp" width="120" alt="ReactAstronaut">
<img src="http://res.cloudinary.com/astronaut-images/image/upload/v1657429448/jrxifxyslrprdvzlhboy.webp" width="120" alt="ReactAstronaut">

</div>

## Instalação

```bash
yarn add react-astronaut
# ou
npm install react-astronaut --save
```

## Exemplo de uso

```jsx
import ReactAstronaut from 'react-astronaut';

function App() {
  return (
    <div className="App">
      <ReactAstronaut astronaut="ASTR104" />
    </div>
  );
}

```

## Funções auxiliares

Além do componente <ReactAstronaut />, a biblioteca inclui também algumas funções auxiliares:

### getAstronauts(page, take, search)

Retorna todos os avatares disponíveis.

```jsx

import ReactAstronaut, { getAstronauts } from 'react-astronaut';

function App() {

  const getAstronauts = getAstronauts(1, 10, 'alien');
  
  return (
    <div className="App">
      {allAstronauts.map(item => (
        <ReactAstronaut astronaut={item.code} />
      )}     
    </div>
  );
}

```

| Parâmetro         | Tipo               | Notes                           |
| ----------- | --------------------- | ------------------------------- |
| `page`     | NUMBER | Número da página usada para sistemas de paginação. |
| `take`      | NUMBER  | Quantidade de registos exibidor por página|
| `search` | STRING | Termo usado para filtrar avatares baseado em tags. |


### getRandomAstronaut()

Retorna um avatar aleatório.

```jsx

import ReactAstronaut, { getRandomAstronaut } from 'react-astronaut';

function App() {

  const randomAstronaut = getRandomAstronaut();
  
  // response: {
  //   "tags_en": [
  //       "astronaut",
  //       "sitting",
  //       "earth"
  //   ],
  //   "tags_br": [
  //       "astronauta",
  //       "sentando",
  //       "terra"
  //   ],
  //   "url": "http://res.cloudinary.com/astronaut-images/image/upload/v1657429440/tez3eq15trtkr2e2uyes.webp",
  //   "code": "ASTR167"
  // }

  return (
    <div className="App">
      <ReactAstronaut astronaut={randomAstronaut.code} />
    </div>
  );
}

```

### getAllAstronauts()

Retorna todos os avatares disponíveis.

```jsx

import ReactAstronaut, { getAllAstronauts } from 'react-astronaut';

function App() {

  const allAstronauts = getAllAstronauts();
  
  return (
    <div className="App">
      {allAstronauts.map(item => (
        <ReactAstronaut astronaut={item.code} />
      )}     
    </div>
  );
}

```

## Créditos

Os direitos autorais de todas as imagens disponibilizadas nesta biblioteca são de [@catalyststuff](https://catalystvibes.dribbble.com/). <br/>
As imagen foram obtidas através do seu perfil no [Freepik](https://www.freepik.com/author/catalyststuff/).
