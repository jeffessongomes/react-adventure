import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      background: #fff;
      color: #000;
  }

  .row {
      width: 100%;
  }
`;
