import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .logout-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.4rem;
    padding: 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: #b23b3b;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-button {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: white;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  .dropdown-button:hover {
    background: var(--primary-800);
  }
`;

export default Wrapper;
