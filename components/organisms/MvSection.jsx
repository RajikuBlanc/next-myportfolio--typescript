import styled from 'styled-components';
import SectionTitle from '../atoms/SectionTitle';
import WorksBox from '../molecules/WorksBox';
import SkillBox from '../molecules/SkillBox';
import AboutBox from '../molecules/AboutBox';
import { Medias } from '../../styles/Media';
// --------------- Function ---------------
export default function Mvsection() {
  return (
    <Mv_section>
      <div className="container">
        <SectionTitle title="my portfolio" />
        <List_ul>
          <WorksBox />
          <AboutBox />
          <SkillBox />
        </List_ul>
      </div>
    </Mv_section>
  );
}
// --------------- Style ---------------
const Mv_section = styled.section`
  margin-bottom: 10rem;
  ${Medias.tab} {
    margin-bottom: 5rem;
  }
`;

const List_ul = styled.ul`
  width: 100%;
  border: 2px solid var(--white);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5rem 10%;
  display: flex;
  justify-content: space-between;
  ${Medias.custom(1100)} {
    padding: 5rem 1.2rem;
  }
  ${Medias.tab} {
    flex-direction: column;
    gap: 5rem;
    padding: 5rem 5%;
  }
`;
