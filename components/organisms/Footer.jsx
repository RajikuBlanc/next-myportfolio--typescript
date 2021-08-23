import styled from 'styled-components';

const FooterStyle = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  border-top: 2px solid var(--white);
  small {
    font-size: 1.2rem;
  }
  span {
    text-transform: uppercase;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <small>
        &copy;2021 <span>ryotaro homma</span>
      </small>
    </FooterStyle>
  );
}
