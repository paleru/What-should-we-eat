import styled from 'styled-components';

const Wrapper = styled.article`
  padding: 2rem;
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  border-bottom: 5px solid var(--primary-600);
  /* color prop from Admin.jsx/StatItem.jsx 
  border-bottom: 5px solid ${(props) => props.color}; */

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: var(--primary-600);
    /* color: ${(props) => props.color}; */
    line-height: 2;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: left;
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    /* background: ${(props) => props.bcg}; */
    background: var(--primary-600);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: var(--primary-50);
      /* color: ${(props) => props.color}; */
    }
  }
`;

export default Wrapper;
