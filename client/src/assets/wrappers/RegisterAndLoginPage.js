import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .form {
    max-width: 400px;
    border-top: 6px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.4rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
  }
  .button {
    margin-top: 1rem;
    font-weight: 550;
  }
  .member-button {
    color: var(--primary-600);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.3rem;
  }
`;

export default Wrapper;
