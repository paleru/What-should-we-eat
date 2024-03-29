import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 2rem 1rem 3rem;
  .form-title {
    margin-bottom: 1rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
    column-gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
  .form-button {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

  .form-input-third {
    width: 30%;
  }

  .clear-button {
    background: transparent;
    border-color: transparent;
    display: none;
    font-size: small;
    cursor: pointer;
  }

  .added-ingredients {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    spacing: 1rem;
    direction: row;
  }

  .added-ingredient {
    margin: 0.5rem;
    button {
      background-color: var(--grey-700);
      padding: 0.5rem;
    }
    button:hover {
      background-color: var(--grey-900);
    }
  }

  @media (max-width: 800px) {
    .form-button,
    .form-row-wide {
      grid-column: span 2;
    }
  }

  @media (min-width: 801px) {
    .form-center {
      grid-template-columns: 3fr 1fr 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1300px) {
    .form-center {
      grid-template-columns: 3fr 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
