import Layout from '../../components/layout';
import skillLists from '../../src/data/skilldata';
import SectionTitle from '../../components/atoms/SectionTitle';
import SkillDetail from '../../components/molecules/SkillDetail';
import styled from 'styled-components';
import { Medias } from '../../styles/Media';

export async function getStaticProps({ params }) {
  const skills = skillLists.filter(skill => skill.id.toString() === params.id);
  return {
    props: {
      skillData: skills[0]
    }
  };
}
export async function getStaticPaths() {
  const paths = skillLists.map(skillList => ({
    params: { id: skillList.id.toString() }
  }));
  return { paths, fallback: false };
}
export default function SkillName({ skillData }) {
  return (
    <Layout>
      <SectionTitle title="skill" />
      <div className="container">
        <SkillName_section>
          <SkillDetail name={skillData.name} img={skillData.img} color={skillData.color} level={skillData.level} />
        </SkillName_section>
      </div>
    </Layout>
  );
}

const SkillName_section = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 100%;
  padding: 3rem 4rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  ${Medias.tab} {
    padding: 2rem;
  }
`;
