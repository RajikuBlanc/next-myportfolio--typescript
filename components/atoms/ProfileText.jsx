import styled from 'styled-components';
import { Medias } from '../../styles/Media';

export default function ProfileText({ headding, text }) {
  return (
    <ProfileText_div>
      <Headding_p>{headding}</Headding_p>
      <Description_p>{text}</Description_p>
    </ProfileText_div>
  );
}

const ProfileText_div = styled.div``;

const Headding_p = styled.p`
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
`;
const Description_p = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  ${Medias.sp} {
    text-align: justify;
  }
`;
