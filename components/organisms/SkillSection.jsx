import SectionTitle from '../atoms/SectionTitle';
import SkillItem from '../molecules/SkillItem';
import Skills from '../../src/data/skilldata';
import styled from 'styled-components';
import ViewMoreButton from '../atoms/ViewMoreButton';
import { Medias } from '../../styles/Media';

export default function SkillSection() {
  return (
    <Skill_section>
      <SectionTitle title="skill" />
      <div className="container small">
        <List_ul>
          {Skills.map((skill, index) => {
            if (index < 12) {
              return (
                <li key={skill.id}>
                  <SkillItem id={skill.id} img={skill.img} name={skill.name} color={skill.color} level={skill.level} />
                </li>
              );
            }
          })}
        </List_ul>
        <ViewMoreButton link="skill" />
      </div>
    </Skill_section>
  );
}

const Skill_section = styled.section`
  margin-bottom: 10rem;
  .container.small {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding-bottom: 3rem;
  }
`;

const List_ul = styled.ul`
  margin: 0 auto;
  width: 90%;
  padding-bottom: 8rem;
  padding-top: 5rem;
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8rem;
  border-bottom: 2px solid var(--white);
  ${Medias.tab} {
    gap: 3rem 3rem;
  }
  ${Medias.sp} {
    gap: 2rem 2rem;
  }
`;
