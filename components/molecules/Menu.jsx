import styled from 'styled-components';
import Link from 'next/link';
import { bool } from 'prop-types';
import { Medias } from '../../styles/Media';

export default function Menu({ open }) {
  return (
    <Menu_nav open={open}>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="/works">
        <a>works</a>
      </Link>
      <Link href="/skill">
        <a>skill</a>
      </Link>
      <Link href="/contact">
        <a>contact</a>
      </Link>
    </Menu_nav>
  );
}
Menu.propTypes = {
  open: bool.isRequired
};

const Menu_nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primary};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  ${Medias.sp} {
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    transition: color 0.3s linear;
    ${Medias.sp} {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.black};
    }
  }
`;
