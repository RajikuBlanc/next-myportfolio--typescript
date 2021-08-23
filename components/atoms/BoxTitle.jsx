import styled from 'styled-components';

export default function BoxTitle({ title }) {
  return <BoxTitle_h3>{title}</BoxTitle_h3>;
}
const BoxTitle_h3 = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.2em;
  margin-bottom: 1rem;
`;
