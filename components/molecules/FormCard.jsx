import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Medias } from '../../styles/Media';
export default function FormCard({ url, text, img }) {
  return (
    <FormCard_li>
      <Image src={img} alt={img}></Image>
      <Link href={`${url}`}>
        <a target="_blank">{text}</a>
      </Link>
    </FormCard_li>
  );
}

const FormCard_li = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: var(--white);
    left: -100%;
    bottom: 0;
    transition: all 0.7s;
  }
  &:hover {
    &::after {
      left: 0;
    }
  }
  a {
    font-size: 1.5rem;
    ${Medias.tab} {
      font-size: 1.2rem;
    }
  }
`;
