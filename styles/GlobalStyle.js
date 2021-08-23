import { createGlobalStyle } from 'styled-components';
import { Medias } from './Media';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: #818181;
    --white : #ffffff;
    --white-979:#979797;
    --white-beb:#bebebe;
    --black: #000000;

  }
  html{
    font-size: 10px;
  }
  body{
    background-color: var(--primary);
    font-family: 'Roboto Mono';
    color: var(--white);
    letter-spacing: 0.1em;
    margin-top: 12rem;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: var(--white);

  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  .container.small {
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
  }
  .content {
    width: 100%;
    min-height: 350px;
    max-height: 350px;
    padding: 0 1.5rem;
    padding-top: 3rem;
    padding-bottom: 2rem;
    border: 3px solid var(--white);
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${Medias.tab}{
      min-height: 400px;
      max-height: 400px;
      padding-top: 5rem;
    }
  }
`;

export default GlobalStyles;
