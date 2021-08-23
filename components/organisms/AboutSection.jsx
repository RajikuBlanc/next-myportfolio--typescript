import SectionTitle from '../atoms/SectionTitle';
import ProfileText from '../atoms/ProfileText';
import styled from 'styled-components';
import Ptext from '../atoms/Ptext';
import { Medias } from '../../styles/Media';
import MoreButton from '../atoms/MoreButton';
export default function ProfileSection() {
  return (
    <Profile_section>
      <div className="container">
        <SectionTitle title="profile" />
        <List_ul>
          <Item_li>
            <ProfileText headding="名前:" text="本馬 遼太郎(ほんま りょうたろう)" />
            <ProfileText headding="出身:" text="大阪府(在住)" />
            <ProfileText headding="自己紹介:" />
            <Ptext text="初めまして、本馬です。" />
            <Ptext text="人に頼られることが好きです。" />
            <Ptext text="自分のためだけでなく、他の人にも使っていただけるようなアプリ開発を目標としています。" />
            <Ptext text="まだアプリを開発することはできていませんが、日々人のためになるアプリはないかと考えています。" />
            <Ptext text="考えるだけでは、開発はできないので、開発するために学習に励んでいます。" />
          </Item_li>
          <Item_li>
            <ProfileText
              headding="2019/02~2020/10"
              text="公務員になるため勉強を始める。毎日5時間以上勉強し筆記試験、面接ともに合格するが内定を頂くことはできませんでした。"
            />
            <ProfileText
              headding="2020/10~"
              text="公務員を諦めるきっかけとなったのが、プログラミングとの出会い。プログラミング学習当初、プログラミング特有の言葉に困惑するが、開発の楽しさを知り、学習意欲が向上し、プログラミングに没頭する。PythonのフレームワークであるDjangoに触れる。"
            />
            <ProfileText
              headding="2020/11~"
              text="Djangoを触り始め、フロントエンドについて学習するようになる。Webアプリケーションを自作し、運用したいと考え始める。フロントエンドを学習するにつれ、Web制作に興味を持つ。"
            />
            <ProfileText headding="2021/03~" text="web制作会社にてインターンをしながら就職活動を始める" />
            <ProfileText
              headding="2021/07~ 現在"
              text="web制作の実務を経験し、自分がやりたいことはweb制作ではなくweb開発であることに気づく。モダンなフロントエンドの技術を学びたいと思い現在はReactとNext.jsについて学習しています。"
            />
          </Item_li>
        </List_ul>
      </div>
    </Profile_section>
  );
}

const Profile_section = styled.section`
  margin-bottom: 10rem;
`;

const List_ul = styled.ul`
  display: flex;
  padding-left: 9rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  border: 1px solid var(--white);
  ${Medias.tab} {
    flex-direction: column;
    align-items: center;
    gap: 8rem;
    padding-left: 4rem;
  }
  ${Medias.sp} {
    flex-direction: column;
    align-items: center;
    gap: 8rem;
    padding-left: 1rem;
  }
`;
const Item_li = styled.li`
  width: 50%;
  padding-right: 4rem;
  ${Medias.tab} {
    width: 100%;
  }

  ${Medias.sp} {
    padding-right: 1rem;
  }
`;
