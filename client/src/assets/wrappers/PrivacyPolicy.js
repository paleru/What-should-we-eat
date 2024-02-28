import styled from 'styled-components';

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  ol {
    font-weight: 700;
  }
  h3 {
    font-weight: 700;
    span {
      color: var(--primary-700);
    }
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  h4 {
    span {
      color: var(--primary-700);
    }
    margin-bottom: 2.5rem;
  }
  h5 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .privacy-img {
    display: none;
  }
  .button {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 800px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .privacy-img {
      display: block;
    }
  }
  .back-button {
    background: var(--primary-600);
    border-color: transparent;
    border: transparent;
    border-radius: var(--border-radius);
    font-weight: 700;
    width: 100px;
    height: 40px;
    color: var(--primary-50);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  .back-button:hover {
    background: var(--primary-900);
    transition: var(--transition);
  }
`;

export default Wrapper;
