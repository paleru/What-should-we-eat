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
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-600);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .landing-img {
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
    .landing-img {
      display: block;
    }
  }
`;

export default Wrapper;
