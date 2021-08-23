import styled from 'styled-components';

import Link from 'next/link';
import { Medias } from '../../styles/Media';
export default function ViewMoreButton({ link }) {
  return (
    <ViewMoreButton_div>
      <Link href={link}>
        <a>View More</a>
      </Link>
    </ViewMoreButton_div>
  );
}

const ViewMoreButton_div = styled.div`
  width: 100%;
  text-align: center;
  a {
    font-size: 3rem;
    font-weight: bold;
    transition: all 0.5s;
    ${Medias.tab} {
      font-size: 2.4rem;
    }
    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
