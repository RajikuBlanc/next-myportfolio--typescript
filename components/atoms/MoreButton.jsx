import Link from 'next/link';
import styled from 'styled-components';

export default function MoreButton({ link = '/' }) {
  return (
    <MoreButtonStyle>
      <Link href={link}>
        <a className="moreButton">MORE</a>
      </Link>
    </MoreButtonStyle>
  );
}

const MoreButtonStyle = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4rem;
    height: 30px;
    font-size: 1.2rem;
    background-color: var(--white-979);
    border-radius: 5px;
    transition: all 0.5s;
  }
  a:hover {
    padding: 0 6rem;
    background-color: var(--white-beb);
  }
`;
