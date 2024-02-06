import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
  }
  .info {
    h5 {
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-secondary-color);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    align-items: center;
    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .recipe-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
    grid-column: span 2;
  }
  .user-img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .actions {
    display: flex;
    margin-top: 1rem;
    align-items: center;
  }
  .edit-button,
  .delete-button {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  /* enables avatar to be positioned right */
  .filler {
    flex-grow: 1;
  }
  .user-box {
    justify-self: end;
  }
`;

export default Wrapper;
