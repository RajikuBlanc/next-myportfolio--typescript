import AboutSection from '../components/organisms/AboutSection';
import SkillSection from '../components/organisms/SkillSection';
import WorksSection from '../components/organisms/WorksSection';
import Mvsection from '../components/organisms/MvSection';

export default function Top() {
  return (
    <div>
      {/* MV Section */}
      <Mvsection />
      {/* Profile Section*/}
      <AboutSection />
      {/* Skill Section*/}
      <SkillSection />
      {/* Works Section*/}
      <WorksSection />
    </div>
  );
}
