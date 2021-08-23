/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

export default function WorksItem({ id, img }) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`/works/${id}`}>
      <Link_a>
        <Image src={img} alt="画像"></Image>
      </Link_a>
    </Link>
  );
}

const Link_a = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  width: 100%;
  height: 350px;
  position: relative;
  padding: 1rem;
  overflow: hidden;
  border: 1px solid var(--white);
  img {
    object-fit: cover;
    offset-position: top;
  }
  &::after {
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    z-index: 5;
    transition: all 0.4s;
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;
