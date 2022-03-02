import styled from 'styled-components';

export const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export const Spacer = styled.div`
  margin-top: 84px;
  margin-bottom: 84px;
`;
