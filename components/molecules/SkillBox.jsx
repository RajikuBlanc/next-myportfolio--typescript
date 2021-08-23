import styled from 'styled-components';
import MoreButton from '../atoms/MoreButton';
import SkillIcon from '../molecules/SkillIcon';
import Skills from '../../src/data/skilldata';
import BoxTitle from '../atoms/BoxTitle';
import { Medias } from '../../styles/Media';

export default function SkillItem() {
  const title = 'Skill';
  return (
    <SkillItemStyle>
      <BoxTitle title={title} />
      <div className="content">
        {/* skill list */}
        <ul className="skill__list">
          {/* skill item */}
          {Skills.map((skill, index) => {
            if (index < 12) {
              return (
                <li className="skill__item" key={skill.id}>
                  <SkillIcon id={skill.id} img={skill.img} name={skill.name} />
                </li>
              );
            }
          })}
        </ul>
        {/* More Button */}
        <MoreButton link="/skill" />
      </div>
    </SkillItemStyle>
  );
}

const SkillItemStyle = styled.li`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Medias.tab} {
    width: 100%;
  }
  .content {
    ${Medias.tab} {
      min-height: 500px;
      max-height: 500px;
    }
    ${Medias.sp} {
      min-height: 400px;
      max-height: 400px;
    }
  }
  .skill__list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px 0;
    margin-bottom: 2rem;
  }
  .skill__item {
    cursor: pointer;
    width: 30%;
    transition: all 0.3s;
  }
  .skill__item:hover {
    transform: translateY(-5px);
  }
  .moreButton {
    ${Medias.tab} {
      margin-top: 4rem;
    }
    ${Medias.sp} {
      margin-top: 2rem;
    }
  }
`;
