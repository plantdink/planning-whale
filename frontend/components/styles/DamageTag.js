import styled from 'styled-components';

export const DamageTag = styled.div`
  background: var(--orange);
  transform: rotate(-3deg);
  color: var(--text);
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: 16px;
  right: -2px;
`;

export const DamageTagText = styled.div`
  background: var(--orange);
  transform: rotate(-3deg);
  color: var(--text);
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 1rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;
