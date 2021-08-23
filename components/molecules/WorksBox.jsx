/* eslint-disable @next/next/link-passhref */
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import MoreButton from '../atoms/MoreButton';
import Works from '../../src/data/worksdata';
import WorksItem from './WorksItem';
import { Medias } from '../../styles/Media';
import BoxTitle from '../atoms/BoxTitle';
import Link from 'next/link';
import Image from 'next/image';

SwiperCore.use([Autoplay]);

export default function WorksBox() {
  const title = 'Works';
  return (
    <WorksItemStyle>
      <BoxTitle title={title} />
      {/* Swiper */}
      <div className="content">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
        >
          {Works.map(work => {
            return (
              <SwiperSlide key={work.id}>
                <Link href={`/works/${work.id}`}>
                  <Link_a>
                    <Image src={work.img} alt="画像"></Image>
                  </Link_a>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* More Button */}
        <MoreButton link="/works" />
      </div>
    </WorksItemStyle>
  );
}
const WorksItemStyle = styled.li`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Medias.tab} {
    width: 100%;
  }
  .content {
    ${Medias.tab} {
      min-height: 600px;
    }
    ${Medias.sp} {
      min-height: 400px;
    }
  }
  .swiper-container {
    max-width: 100%;
    min-width: 100%;
    margin-bottom: 2rem;
    z-index: 1;
  }
  .swiper-slide {
    height: 243px;
    ${Medias.tab} {
      height: 500px;
    }
    ${Medias.sp} {
      height: 300px;
    }
  }
`;
const Link_a = styled.a`
  cursor: pointer;
`;
