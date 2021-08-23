/* eslint-disable @next/next/link-passhref */
import Layout from '../../components/layout';
import SectionTitle from '../../components/atoms/SectionTitle';
import Image from 'next/image';
import workLists from '../../src/data/worksdata';
import Link from 'next/link';
import styled from 'styled-components';
import { Medias } from '../../styles/Media';

export async function getStaticProps({ params }) {
  const works = workLists.filter(work => work.id.toString() === params.id);
  return {
    props: {
      workData: works[0]
    }
  };
}
export async function getStaticPaths() {
  const paths = workLists.map(workList => ({
    params: { id: workList.id.toString() }
  }));
  return {
    paths,
    fallback: false
  };
}

export default function WorksName({ workData }) {
  return (
    <Layout>
      <WorksName_div className="container">
        <SectionTitle title="works" />
        <DetailBox_div>
          <LeftBox_div>
            {/* サムネイル */}
            <Image src={workData.img} alt="WorksImg"></Image>
          </LeftBox_div>

          <RightBox_div>
            {/* タイトル */}
            <Title_p>{workData.title}</Title_p>
            {/* 制作期間 */}
            <Text_p>制作期間: {workData.productionTime}</Text_p>
            {/* こだわり */}
            <div>
              <Text_p>こだわり:</Text_p>
              <Text_p>{workData.commitment}</Text_p>
            </div>
            {/* 苦戦したこと */}
            <div>
              <Text_p>苦戦したこと:</Text_p>
              <Text_p>{workData.hardships}</Text_p>
            </div>
            <UrlBox_div>
              {/* GitHub */}
              <Link href={workData.github}>
                <Link_a target="_blank">github</Link_a>
              </Link>
              {/* URL */}
              <Link href={workData.url}>
                <Link_a target="_blank">url</Link_a>
              </Link>
            </UrlBox_div>
            <UrlBox_div>
              {/* Back Button */}
              <Link href="/works">
                <BackButton_a>back to list</BackButton_a>
              </Link>
            </UrlBox_div>
          </RightBox_div>
        </DetailBox_div>
      </WorksName_div>
    </Layout>
  );
}
const WorksName_div = styled.div``;

const DetailBox_div = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 5rem 2rem 3rem 2rem;
  margin-bottom: 3rem;
  gap: 5rem;
  ${Medias.tab} {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding-right: 3rem;
    padding-left: 3rem;
  }
`;
const LeftBox_div = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  img {
    width: 400px;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  ${Medias.tab} {
    width: 100%;
    img {
      height: 400px;
    }
  }
`;
const RightBox_div = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  ${Medias.tab} {
    width: 100%;
  }
`;
const Title_p = styled.p`
  margin-top: 4rem;
  letter-spacing: 0.2em;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  ${Medias.tab} {
    margin-top: 1rem;
  }
`;
const Text_p = styled.p`
  font-size: 1.6rem;
  ${Medias.sp} {
    font-size: 1.4rem;
  }
`;
const UrlBox_div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0 3rem;
  ${Medias.tab} {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;
const Link_a = styled.a`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  ${Medias.tab} {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
  }
`;
const BackButton_a = styled(Link_a)`
  display: inline-block;
  margin: 0 auto;
  text-align: center;
`;
