import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const Container = styled.main`
  display: flex;
  gap: 2rem;
  margin-top: 6.75rem;
  padding: 2rem 10rem;

  .column-left {
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
    width: 40rem;
  }

  .column-right {
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
    width: 28rem;
  }
`;
