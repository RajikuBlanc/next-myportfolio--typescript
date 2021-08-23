/* eslint-disable @next/next/link-passhref */
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Medias } from '../../styles/Media';
export default function SkillIcon({ id, img, name }) {
  return (
    <SkillIconStyle>
      <Link href={`/skill/${id}`}>
        <Image src={img} alt={name}></Image>
      </Link>
    </SkillIconStyle>
  );
}

const SkillIconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
    ${Medias.tab} {
      width: 60px;
    }
    ${Medias.sp} {
      width: 40px;
    }
  }
`;
