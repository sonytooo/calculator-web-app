import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  .buttons-layout {
    width: 450px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2px;
    padding: 0px 0px 30px;
    margin: 0 auto;

    .long-button-wrapper {
      grid-column: 1/3;
    }

    button {
      width: 100%;
      height: 80px;
      border-radius: 8px;
      font-size: 2rem;
      background-color: rgb(96,95,99);
      color: white;
      transition: 0.22s;
      outline: none;

      &:hover {
        border: 3px solid white;
        opacity: 0.85;
      }
    }

    button.function-button {
      background-color: rgb(255, 159, 12);
    }

    button.secondary-button {
      background-color: rgb(64, 63, 67);
      color: white;
    }
  }
`;

export const ResultContainer = styled.div`
  width: 450px;
  background-color: rgb(39, 44, 51);
  border-radius: 8px;
  margin-bottom: 2px;
  display: flex;
  justify-content: flex-end;

  h2 {
    color: white;
    font-size: 2.6rem;
    margin: 0;
    padding: 20px;
  }
`;