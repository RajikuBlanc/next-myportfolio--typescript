import myportfolioImg from '../images/worksImg/myPortfolio.png';

const works = [
  {
    id: 1,
    title: 'My Portfolio',
    img: myportfolioImg,
    productionTime: '2週間',
    commitment:
      '誰に見てもらうかをよく考え作成いたしました。トップページの一番上簡易的なプロフィールを持ってくることで、他のページやスクロールをしなくても自分のことがわかってもらえるように設計しました。フロントエンドにNext.jsを採用したことでページの再読み込みがなくなり、ストレスなくPortfolioを見ていただくことができます。少し長くなるためGithubのReadme.mdに続きを書いています。',
    hardships:
      'データの取得と表示に少し苦戦しました。worksやskillのデータはapiを使用するのではなく、srcファイルで管理しています。ダイナミックルーティングを使用し、個別ページを表示する時にどのようにデータを表示させればいいのかがわかりませんでした。解決するのに2日ほどかかりました。',
    github: 'https://github.com/RajikuBlanc/next-myportfolio',
    url: ''
  }
];

export default works;
