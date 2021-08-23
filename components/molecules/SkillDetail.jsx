/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { Medias } from '../../styles/Media';
export default function SkillDetail({ name, img, color, level }) {
  return (
    <SkillDetail_div color={color}>
      <Box_div>
        <LeftBox_div>
          <Image src={img} alt={name}></Image>
        </LeftBox_div>
        <RightBox_div>
          <NameText_p>{name}</NameText_p>
          <LevelText_p>{level}</LevelText_p>
          <LevelBar_div level={level} color={color}></LevelBar_div>
        </RightBox_div>
      </Box_div>
      <Link href="/skill">
        <Link_a>back to List</Link_a>
      </Link>
    </SkillDetail_div>
  );
}

const SkillDetail_div = styled.div`
  width: 100%;
  border: 4px solid ${props => props.color};
  padding-top: 8rem;
  padding-bottom: 8rem;
  padding-left: 4rem;
  padding-right: 4rem;
  ${Medias.custom(680)} {
    padding: 2rem 4rem;
  }
  ${Medias.sp} {
    padding: 2rem 2rem;
  }
`;

const Box_div = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding-bottom: 10rem;
  border-bottom: 1px solid var(--white);
  ${Medias.tab} {
    padding-bottom: 5rem;
  }
  ${Medias.custom(680)} {
    flex-direction: column;
  }
`;

const LeftBox_div = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  img {
    width: 300px;
    ${Medias.sp} {
      width: 100px;
    }
  }
  ${Medias.custom(680)} {
    width: 100%;
  }
`;
const RightBox_div = styled.div`
  width: 50%;
  ${Medias.custom(680)} {
    width: 100%;
  }
`;
const NameText_p = styled.p`
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 0.2em;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10rem;

  ${Medias.custom(680)} {
    margin-bottom: 2rem;
    font-size: 2rem;
    text-align: center;
  }
`;

const LevelText_p = styled(NameText_p)`
  text-align: right;
  margin-bottom: 1rem;
  font-size: 2rem;
`;
const LevelBar_div = styled.div`
  width: 100%;
  height: 15px;
  border: 1px solid ${props => props.color};
  position: relative;
  &::after {
    content: '';
    width: ${props => props.level};
    height: 13px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.color};
  }
`;

const Link_a = styled.a`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 auto;
  margin-top: 3rem;
  display: block;
  width: 180px;
  padding: 1rem 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  transition: all 0.5s;
  ${Medias.custom(680)} {
    width: 100%;
    font-size: 1.2rem;
  }
  &:hover {
    width: 220px;
  }
`;
