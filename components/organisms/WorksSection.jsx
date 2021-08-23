import SectionTitle from '../atoms/SectionTitle';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Works from '../../src/data/worksdata';
import WorksItem from '../molecules/WorksItem';
import ViewMoreButton from '../atoms/ViewMoreButton';
import { Medias } from '../../styles/Media';
SwiperCore.use([Autoplay]);

export default function WorksSection() {
  return (
    <Works_section>
      <div className="container">
        <SectionTitle title="works" />
        <Swiper spaceBetween={30} centeredSlides={true} freeMode={true}>
          {Works.map(work => {
            if (work.id <= 5) {
              return (
                <SwiperSlide key={work.id}>
                  <WorksItem id={work.id} img={work.img} />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
        <ViewMoreButton link="/works" />
      </div>
    </Works_section>
  );
}

const Works_section = styled.section`
  margin-bottom: 10rem;
  ul {
    width: 100%;
    display: flex;
    gap: 3rem;
    margin-bottom: 5rem;
    justify-content: center;
  }
  .swiper-wrapper {
    margin-bottom: 3rem;
    padding: 1rem 0;
  }
  .swiper-slide {
    min-width: 250px;
    max-width: 250px;
    width: 100%;
    height: 350px;
  }
`;
