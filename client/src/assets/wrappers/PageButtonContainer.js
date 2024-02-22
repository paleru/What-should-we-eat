import styled from 'styled-components';

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .button-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-button {
    background: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-600);
    border-radius: var(--border-radius);
    cursor:pointer:
  }
  .active{
    background:var(--primary-600);
        color: var(--background-secondary-color);

  }
  .prev-button,.next-button{
    background: var(--background-secondary-color);
    border-color: transparent;
    border: 2px solid var(--primary-600);
    border-radius: var(--border-radius);
    font-weight: 700;
    width: 100px;
    height: 40px;
    color: var(--primary-700);
    text-transform:capitalize;
    letter-spacing:var(--letter-spacing);
    display:flex;
    align-items:center;
    justify-content:center;
    gap:0.5rem;
    cursor:pointer;
  }
  .prev-button:hover,.next-button:hover{
    background:var(--primary-600);
    color: var(--background-secondary-color);
    transition:var(--transition);
  }
  .dots{
    display:grid;
    place-items:center;
    cursor:text;
  }
`;
export default Wrapper;
