import SectionTitle from '../components/atoms/SectionTitle';
import Link from 'next/link';
import styled from 'styled-components';
import works from '../src/data/worksdata';
import Layout from '../components/layout';
import Image from 'next/image';
export async function getStaticProps() {
  return {
    props: {
      worksData: works
    }
  };
}

export default function Works({ worksData }) {
  return (
    <Layout>
      <div className="container">
        <SectionTitle title="works" />
        <WorksList_ul>
          {worksData.map(work => {
            return (
              <WorksItem_li key={work.id}>
                <Link href={`works/${work.id}`}>
                  <a>
                    <Image src={work.img} alt="画像"></Image>
                  </a>
                </Link>
              </WorksItem_li>
            );
          })}
        </WorksList_ul>
      </div>
    </Layout>
  );
}

const WorksList_ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  margin-top: 4rem;
  margin-bottom: 3rem;
  &::after {
    content: '';
    display: block;
    width: 250px;
    height: 0;
  }
`;

const WorksItem_li = styled.li`
  max-width: 250px;
  height: 350px;
  border: 1px solid #000;
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    transform: translateY(-10px);
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: cover;
    }
  }
`;
