import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--nav-height);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: white;
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-600);
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.75rem;
  }

  .btn-container {
    display: flex;
    align-items: center;
  }
  h4 {
    display: none;
  }
  .local-dining-icon {
    display: block;
  }
  @media (min-width: 800px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    h4 {
      display: block;
    }
    .local-dining-icon {
      display: none;
    }
  }
  @media (max-width: 800px) {
    .menu-icon {
      font-size: large;
    }
  }
`;
export default Wrapper;
