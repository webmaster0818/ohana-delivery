"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "切り花は最長でどのくらい持ちますか？",
    a: "花の種類や季節によりますが、適切なお手入れをすれば1〜2週間ほど楽しめます。カーネーションやアルストロメリアは比較的長持ちし、2週間以上持つこともあります。一方、チューリップやスイートピーは5〜7日程度が目安です。水切り・水替え・延命剤の使用を組み合わせることで、花の寿命を最大限に延ばせます。",
  },
  {
    q: "延命剤がないときの代わりになるものはありますか？",
    a: "家庭にあるもので代用できます。漂白剤を水1リットルに対して1〜2滴入れると、バクテリアの繁殖を抑えられます。また、砂糖を小さじ1杯ほど加えると花に栄養を補給できます。10円玉を花瓶に入れる方法も知られていますが、銅イオンの殺菌効果は限定的なため、漂白剤のほうが効果的です。",
  },
  {
    q: "花のサブスクで届いた花はどのくらい持ちますか？",
    a: "サブスクで届く花は産地直送や市場から仕入れたての新鮮な状態が多いため、適切にお手入れすれば1週間〜10日ほど楽しめます。届いたらすぐに水切りをして花瓶に生けること、毎日の水替えを欠かさないことが長持ちの秘訣です。延命剤が同封されている場合は必ず使いましょう。",
  },
  {
    q: "花瓶の大きさはどう選べばいいですか？",
    a: "花の丈の約1/3〜1/2が花瓶に収まる高さが目安です。サブスクで届く花束は3〜6本程度が多いため、高さ15〜20cm・口径5〜8cmの花瓶が使いやすいサイズです。口が広すぎると花が開いて散らばり、狭すぎると茎が窮屈になるため、花の本数に合った口径を選びましょう。",
  },
  {
    q: "夏場に花を長持ちさせるコツはありますか？",
    a: "夏場は水温が上がりバクテリアが繁殖しやすいため、水替えを1日2回に増やすのが効果的です。氷を数個入れて水温を下げる方法もあります。エアコンの風が直接当たらない涼しい場所に置き、直射日光を避けてください。水の量はやや少なめにし、茎が傷みやすい部分を減らすのもポイントです。",
  },
  {
    q: "100均の花瓶でも大丈夫ですか？",
    a: "問題ありません。100均にはガラス製・陶器風など、花を生けるのに十分な品質の花瓶が揃っています。サブスクで届く3〜5本程度の花であれば、100均の花瓶で十分に楽しめます。複数の小さな花瓶を用意しておくと、花を1〜2本ずつ分けて飾るアレンジも楽しめるのでおすすめです。",
  },
  {
    q: "届いた花をドライフラワーにできますか？",
    a: "はい、多くの花はドライフラワーにできます。バラ、かすみ草、スターチス、千日紅、ユーカリなどは特にドライフラワー向きです。花がまだ元気なうちに逆さに吊るすハンギング法が最も手軽です。完全に乾燥するまで1〜2週間かかります。ただし、ガーベラやチューリップなど水分の多い花はドライフラワーに不向きです。",
  },
  {
    q: "水切りは毎日したほうがいいですか？",
    a: "毎日行う必要はありませんが、2〜3日に1回は水切りすると効果的です。水替えのタイミングで一緒に行うのが効率的です。茎の切り口がぬめったり変色したりしている場合は、すぐに水切りをしましょう。切れ味の良いハサミや花ばさみを使い、斜めにカットすることで水の吸い上げがよくなります。",
  },
];

/* ─── Tips Data ─── */
const tipsData = [
  {
    number: 1,
    title: "水切り（みずきり）で吸水力を回復させる",
    description:
      "花が届いたら、まず茎の先端を水の中で斜めにカットします。これを「水切り」と呼びます。空気中で切ると切り口に気泡が入り、水の吸い上げを妨げてしまいます。水中で切ることで気泡の侵入を防ぎ、吸水力を最大限に回復できます。",
    points: [
      "水を張ったボウルやバケツの中で茎を切る",
      "切れ味の良いハサミまたは花ばさみを使う",
      "茎を斜めにカットして断面積を広くする",
      "切り口から2〜3cmの位置でカットする",
    ],
  },
  {
    number: 2,
    title: "毎日の水替えでバクテリアを防ぐ",
    description:
      "花瓶の水は毎日取り替えるのが理想です。水が汚れるとバクテリアが繁殖し、茎の導管を詰まらせて水の吸い上げを阻害します。水替えの際は花瓶の内側もスポンジで洗い、ぬめりを取り除きましょう。",
    points: [
      "毎日新しい水に取り替える",
      "花瓶の内側を洗ってぬめりを除去する",
      "水温は常温（冷たすぎない水）が適切",
      "水の量は茎が5cm以上浸かる程度",
    ],
  },
  {
    number: 3,
    title: "延命剤（えんめいざい）を活用する",
    description:
      "延命剤には花に必要な糖分と、バクテリアの繁殖を抑える抗菌成分が含まれています。サブスクで届く花に同封されていることが多いので、必ず使いましょう。延命剤を使うと、使わない場合に比べて花の寿命が2〜3日延びることもあります。",
    points: [
      "サブスクに同封の延命剤は必ず使う",
      "パッケージ記載の分量を守る（入れすぎは逆効果）",
      "延命剤を入れた場合も2〜3日に1回は水替えする",
      "市販品はホームセンターや100均で手に入る",
    ],
  },
  {
    number: 4,
    title: "直射日光とエアコンの風を避けて置く",
    description:
      "花は直射日光に当たると温度が上がり、急速にしおれてしまいます。また、エアコンの風が直接当たる場所も乾燥が進むため避けましょう。窓際に飾る場合はレースカーテン越しの間接光がベストです。",
    points: [
      "直射日光が当たらない明るい場所に置く",
      "エアコンの吹き出し口の近くは避ける",
      "玄関や廊下など涼しい場所もおすすめ",
      "テレビやパソコンなど熱源の近くも避ける",
    ],
  },
  {
    number: 5,
    title: "室温を管理して花の寿命を延ばす",
    description:
      "切り花の最適温度は15〜25度です。室温が高いほど花の代謝が活発になり、早くしおれます。夏場は特に注意が必要で、外出中にエアコンを切ると室温が30度以上になることもあります。できるだけ涼しい環境を保ちましょう。",
    points: [
      "室温15〜25度が花にとっての快適温度",
      "夏場は冷房の効いた部屋に置く",
      "冬場は暖房の風が直接当たらない場所に",
      "夜間は気温が下がる玄関に移すのも有効",
    ],
  },
  {
    number: 6,
    title: "不要な葉や傷んだ花びらを取り除く",
    description:
      "水に浸かる部分の葉は必ず取り除きます。葉が水中にあるとバクテリアの温床になり、水が早く汚れます。また、しおれた花びらや枯れた花はエチレンガスを発生させ、周囲の元気な花まで傷めてしまいます。",
    points: [
      "水に浸かる位置の葉はすべて除去する",
      "しおれた花びらや枯れた花はすぐに取り除く",
      "傷んだ茎はカットして短くする",
      "余分な枝や葉を整理して風通しをよくする",
    ],
  },
  {
    number: 7,
    title: "花瓶を清潔に保つ",
    description:
      "花瓶が汚れていると、新しい水を入れてもすぐにバクテリアが繁殖します。花を入れ替えるたびに花瓶を中性洗剤で洗い、しっかり乾かしてから使いましょう。内側に白い水垢がつく場合は、お酢やクエン酸で浸け置き洗いすると効果的です。",
    points: [
      "花を入れ替えるたびに花瓶を洗う",
      "中性洗剤とスポンジでぬめりを落とす",
      "水垢にはお酢やクエン酸が効果的",
      "しっかり乾燥させてから再利用する",
    ],
  },
];

/* ─── Vase Guide Data ─── */
const vaseSizeData = [
  {
    size: "ミニサイズ（10〜15cm）",
    bestFor: "1〜3本の花、一輪挿し",
    scene: "デスク、洗面台、トイレなど小さなスペース",
    subsc: "medeluのMiniプラン（3本）に最適",
  },
  {
    size: "スタンダード（15〜20cm）",
    bestFor: "3〜5本の花束",
    scene: "リビングのテーブル、玄関、キッチンカウンター",
    subsc: "bloomeeやhanamekuの標準プランに最適",
  },
  {
    size: "トールサイズ（20〜30cm）",
    bestFor: "5〜10本の花束、枝ものを含むアレンジ",
    scene: "リビングの棚、ダイニングテーブル",
    subsc: "AND PLANTSのStandardプラン（4〜6本）に最適",
  },
];

const vaseMaterialData = [
  {
    material: "ガラス製",
    merit: "透明感があり茎の状態が見える。水の汚れにも気づきやすい。どんなインテリアにも合わせやすい。",
    demerit: "割れやすい。水垢が目立ちやすい。",
    price: "100均〜数千円",
  },
  {
    material: "陶器製",
    merit: "光を遮断するため水温が上がりにくい。安定感がある。インテリア性が高い。",
    demerit: "茎の状態が見えない。重い。",
    price: "数百円〜",
  },
  {
    material: "プラスチック製",
    merit: "軽くて割れにくい。子どもやペットがいる家庭に安心。安価。",
    demerit: "傷がつきやすく、バクテリアが残りやすい。見た目の高級感は劣る。",
    price: "100均〜",
  },
];

/* ─── Main Component ─── */
export default function FlowerCarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li>
                  <a href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</a>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#666]">お役立ちガイド</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">届いた花を長持ちさせるコツ</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のお手入れガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              届いた花を長持ちさせるコツ7選<br className="hidden md:block" />
              花瓶の選び方からお手入れまで
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              サブスクで届いた花、せっかくなら少しでも長く楽しみたいですよね。
              この記事では、切り花を長持ちさせる7つのコツと、花瓶の選び方、季節ごとの注意点、
              ドライフラワーの作り方まで、花のある暮らしを最大限に楽しむための実践ガイドをお届けします。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">長持ちのコツ</p>
                <p className="text-xl font-bold text-[#4A7C59]">7選</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">花の寿命が延びる</p>
                <p className="text-xl font-bold text-[#4A7C59]">+3〜5日</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">花瓶の選び方</p>
                <p className="text-xl font-bold text-[#4A7C59]">サイズ別解説</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">ドライフラワー</p>
                <p className="text-xl font-bold text-[#4A7C59]">2度楽しむ</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">この記事の内容</p>
              <nav>
                <ol className="text-sm text-[#666] space-y-2">
                  <li><a href="#tips" className="hover:text-[#4A7C59] transition-colors">1. 切り花を長持ちさせる7つのコツ</a></li>
                  <li><a href="#vase-guide" className="hover:text-[#4A7C59] transition-colors">2. 花瓶の選び方ガイド（サイズ別・素材別）</a></li>
                  <li><a href="#vase-subsc" className="hover:text-[#4A7C59] transition-colors">3. サブスクの花に合う花瓶の選び方</a></li>
                  <li><a href="#100yen" className="hover:text-[#4A7C59] transition-colors">4. 100均で揃える花瓶セット</a></li>
                  <li><a href="#seasonal" className="hover:text-[#4A7C59] transition-colors">5. 季節ごとのお手入れ注意点</a></li>
                  <li><a href="#dried" className="hover:text-[#4A7C59] transition-colors">6. ドライフラワーの作り方 ── 届いた花を2度楽しむ</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">7. 花のお手入れに関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">8. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── 7 Tips Section ─── */}
        <section id="tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              切り花を長持ちさせる7つのコツ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花のサブスクで届いた花を長持ちさせるには、日々のちょっとしたケアが大切です。
              以下の7つのコツを実践するだけで、花の寿命を3〜5日延ばすことができます。
            </p>

            <div className="space-y-8">
              {tipsData.map((tip) => (
                <div key={tip.number} className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] overflow-hidden">
                  <div className="bg-[#E8F0EB] border-b border-[#C5D9CB] px-5 py-4 flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#4A7C59] text-white text-sm font-bold shrink-0">
                      {tip.number}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-[#333]">
                      {tip.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#666] leading-relaxed mb-4">
                      {tip.description}
                    </p>
                    <div className="bg-white rounded-lg border border-[#E5E5E5] p-4">
                      <p className="text-xs font-bold text-[#4A7C59] mb-2">実践ポイント</p>
                      <ul className="text-sm text-[#666] space-y-1.5">
                        {tip.points.map((point, j) => (
                          <li key={j}>・ {point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">7つのコツまとめ</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                すべてを毎日完璧にこなす必要はありません。まずは「水切り」と「毎日の水替え」の2つを習慣にするだけで、
                花の持ちが目に見えて変わります。慣れてきたら延命剤の活用や置き場所の工夫も取り入れてみてください。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Vase Guide ─── */}
        <section id="vase-guide" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花瓶の選び方ガイド（サイズ別・素材別）
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花を美しく飾るには、花に合った花瓶を選ぶことが大切です。
              サイズと素材の2つの観点から、最適な花瓶の選び方を解説します。
            </p>

            {/* Size Guide */}
            <h3 className="text-lg font-bold text-[#333] mb-4">サイズ別ガイド</h3>
            <div className="space-y-4 mb-8">
              {vaseSizeData.map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E5E5E5] p-5">
                  <h4 className="text-base font-bold text-[#333] mb-3">{item.size}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="text-[#999] block mb-1">向いている花</span>
                      <span className="text-[#666]">{item.bestFor}</span>
                    </div>
                    <div>
                      <span className="text-[#999] block mb-1">おすすめの置き場所</span>
                      <span className="text-[#666]">{item.scene}</span>
                    </div>
                    <div>
                      <span className="text-[#999] block mb-1">サブスクとの相性</span>
                      <span className="text-[#666]">{item.subsc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Material Guide */}
            <h3 className="text-lg font-bold text-[#333] mb-4">素材別ガイド</h3>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm" style={{ minWidth: "560px" }}>
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">素材</th>
                    <th className="px-4 py-3 text-left font-medium">メリット</th>
                    <th className="px-4 py-3 text-left font-medium">デメリット</th>
                    <th className="px-4 py-3 text-left font-medium">価格帯</th>
                  </tr>
                </thead>
                <tbody>
                  {vaseMaterialData.map((item, i) => (
                    <tr key={i} className="border-t border-[#E5E5E5]">
                      <td className="px-4 py-4 font-bold text-[#333] whitespace-nowrap">{item.material}</td>
                      <td className="px-4 py-4 text-[#666]">{item.merit}</td>
                      <td className="px-4 py-4 text-[#666]">{item.demerit}</td>
                      <td className="px-4 py-4 text-[#666] whitespace-nowrap">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h4 className="text-sm font-bold text-[#333] mb-2">初心者へのおすすめ</h4>
              <p className="text-sm text-[#666] leading-relaxed">
                迷ったら、まずは透明なガラス製の花瓶を1つ用意しましょう。茎の状態や水の汚れが一目でわかるため、
                お手入れのタイミングを判断しやすく、花のケアに慣れるのに最適です。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Vase for Subscription ─── */}
        <section id="vase-subsc" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              サブスクの花に合う花瓶の選び方
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花のサブスクはサービスやプランによって届く花の本数や丈が異なります。
              利用しているサービスに合った花瓶を選ぶことで、花がより美しく映えます。
            </p>

            <div className="space-y-4">
              {/* bloomee / medelu mini */}
              <div className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    ポスト投函型
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">bloomee・medelu Miniプランなど（3〜4本）</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-3">
                      ポスト投函で届く花は茎が短めにカットされています。高さ10〜15cmのミニ花瓶や一輪挿しが最適です。
                      口径は3〜5cmの細めのものを選ぶと、少ない本数でもまとまりよく飾れます。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#4A7C59] font-bold">高さ10〜15cm</span>
                      <span className="text-[#999]">口径3〜5cm</span>
                      <span className="text-[#999]">一輪挿しも可</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* hanameku / bloomee regular */}
              <div className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    中量タイプ
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">hanameku・bloomeeレギュラープランなど（4〜6本）</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-3">
                      標準的な花束に合うスタンダードサイズの花瓶がおすすめです。高さ15〜20cmで口径5〜8cm程度のものを選ぶと、
                      花束をそのまま入れても窮屈にならず、バランスよく飾れます。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#4A7C59] font-bold">高さ15〜20cm</span>
                      <span className="text-[#999]">口径5〜8cm</span>
                      <span className="text-[#999]">テーブル向き</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AND PLANTS */}
              <div className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    ボリューム型
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">AND PLANTSなど（4〜6本・茎長め）</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-3">
                      宅配便で届く花は茎が長いまま届くことが多いため、高さ20〜30cmのトールサイズの花瓶が映えます。
                      口径は6〜10cm程度で、安定感のある底が広いタイプを選ぶと倒れにくく安心です。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#4A7C59] font-bold">高さ20〜30cm</span>
                      <span className="text-[#999]">口径6〜10cm</span>
                      <span className="text-[#999]">安定感重視</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 100 Yen Shop Section ─── */}
        <section id="100yen" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              100均で揃える花瓶セット
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花瓶に高いお金をかける必要はありません。ダイソーやセリアなどの100均には、
              花を飾るのに十分なアイテムが揃っています。合計500円程度で基本セットが揃います。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">基本の花瓶セット（税込550円）</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>・ ガラス製ミニ花瓶（高さ約15cm）... 110円</li>
                  <li>・ 一輪挿し（高さ約10cm）... 110円</li>
                  <li>・ 花ばさみ（園芸用ハサミ）... 110円</li>
                  <li>・ 霧吹きスプレー ... 110円</li>
                  <li>・ スポンジ（花瓶洗い用）... 110円</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">あると便利な追加アイテム</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>・ トールグラス（高さ約20cm）... 110円</li>
                  <li>・ 延命剤（切花長もち液）... 110円</li>
                  <li>・ 小さなバケツ（水切り用）... 110円</li>
                  <li>・ 麻ひも（ドライフラワー用）... 110円</li>
                  <li>・ クエン酸（花瓶の水垢落とし）... 110円</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#E8F0EB] rounded-xl p-5">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-2">100均花瓶の活用テクニック</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                100均の花瓶は小さめのものが多いため、サブスクで届いた花を小分けにして複数の花瓶に飾るのがおすすめです。
                リビング、玄関、洗面台など、家のあちこちに1〜2本ずつ飾ると、少ない本数でも部屋全体が華やかになります。
                ジュースのガラス瓶やマグカップを花瓶代わりにするのも、インテリアのアクセントになります。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Seasonal Tips ─── */}
        <section id="seasonal" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              季節ごとのお手入れ注意点
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              切り花の寿命は季節によって大きく変わります。
              特に夏は要注意。季節ごとの対策を知っておくと、年間を通じて花を長く楽しめます。
            </p>

            <div className="space-y-5">
              {/* Spring */}
              <div className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    春（3〜5月）
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">花が最も長持ちしやすい季節</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-3">
                      気温15〜20度前後で花にとって快適な環境です。基本のお手入れ（水切り・水替え）を行えば、
                      1週間以上楽しめる花が多い季節です。チューリップやスイートピーなど春の花は茎が柔らかいため、
                      水の量をやや少なめ（茎の3〜5cm）にすると茎が傷みにくくなります。
                    </p>
                    <div className="bg-white rounded-lg border border-[#E5E5E5] p-3">
                      <p className="text-xs text-[#999]">春の注意点</p>
                      <p className="text-sm text-[#666]">花粉が多い季節のため、花粉症の方はユリなどの花粉が飛びやすい花には注意してください。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summer */}
              <div className="bg-[#FDF5F5] rounded-xl border-2 border-[#F0D0D0] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#DC2626] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    夏（6〜8月） 要注意
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">花が最も傷みやすい季節 ── 対策必須</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-3">
                      気温30度を超える夏場は、花の寿命が通常の半分以下になることもあります。
                      水温が上がるとバクテリアが爆発的に増殖し、茎の導管を詰まらせます。
                      夏は他の季節以上にこまめなケアが必要です。
                    </p>
                    <div className="bg-white rounded-lg border border-[#F0D0D0] p-4">
                      <p className="text-xs font-bold text-[#DC2626] mb-2">夏の必須対策</p>
                      <ul className="text-sm text-[#666] space-y-1.5">
                        <li>・ 水替えは1日2回（朝・夜）に増やす</li>
                        <li>・ 氷を2〜3個入れて水温を下げる</li>
                        <li>・ 水の量は少なめ（茎の3cm程度）にする</li>
                        <li>・ 延命剤は必ず使用する</li>
                        <li>・ 冷房の効いた部屋に置く（ただし風は直接当てない）</li>
                        <li>・ 外出中もエアコンを弱くつけておくのが理想</li>
                        <li>・ 帰宅後、水がぬるくなっていたらすぐに替える</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Autumn */}
              <div className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    秋（9〜11月）
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">花持ちが回復する過ごしやすい季節</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-3">
                      気温が下がり始め、花にとっても過ごしやすい季節です。春と同様に基本のケアで十分に長持ちします。
                      9月はまだ残暑が厳しい日もあるため、9月中は夏の対策を続けるのが安心です。
                      秋の花（コスモス、ダリアなど）はドライフラワーにしやすいものが多いのも特徴です。
                    </p>
                    <div className="bg-white rounded-lg border border-[#E5E5E5] p-3">
                      <p className="text-xs text-[#999]">秋の注意点</p>
                      <p className="text-sm text-[#666]">暖房を使い始める時期は、暖房の風が花に直接当たらないよう注意しましょう。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Winter */}
              <div className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] p-5">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    冬（12〜2月）
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">花が最も長持ちする季節</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-3">
                      気温が低いため花の代謝が遅くなり、最も長持ちする季節です。
                      2週間以上持つ花も珍しくありません。ただし、暖房の効いた部屋は乾燥しやすいため、
                      暖房器具の近くには置かないようにしましょう。
                    </p>
                    <div className="bg-white rounded-lg border border-[#E5E5E5] p-3">
                      <p className="text-xs text-[#999]">冬の注意点</p>
                      <p className="text-sm text-[#666]">暖房の風が当たる場所は避けましょう。また、窓際は夜間に冷えすぎる場合があるため、凍結に注意してください。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Dried Flowers ─── */}
        <section id="dried" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ドライフラワーの作り方 ── 届いた花を2度楽しむ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              サブスクで届いた花は、しおれてしまう前にドライフラワーにすることで長期間楽しめます。
              生花として1週間、ドライフラワーとして数ヶ月。1回の配送で2度楽しめるのがサブスクの魅力です。
            </p>

            {/* Method */}
            <h3 className="text-lg font-bold text-[#333] mb-4">ハンギング法（逆さ吊り）── 最も簡単な方法</h3>
            <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4A7C59] text-white text-xs font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="text-sm font-bold text-[#333]">花がまだ元気なうちに取り出す</p>
                    <p className="text-sm text-[#666]">完全にしおれてからではきれいに仕上がりません。花が7〜8分咲きの状態がベストタイミングです。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4A7C59] text-white text-xs font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="text-sm font-bold text-[#333]">余分な葉を取り除く</p>
                    <p className="text-sm text-[#666]">葉が多いと乾燥に時間がかかり、カビの原因になります。必要最低限の葉だけ残しましょう。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4A7C59] text-white text-xs font-bold shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="text-sm font-bold text-[#333]">1本ずつ逆さに吊るす</p>
                    <p className="text-sm text-[#666]">麻ひもや輪ゴムで茎を束ね、風通しの良い日陰に逆さに吊るします。束ねて吊るすと内部が乾きにくいため、1本ずつがおすすめです。</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4A7C59] text-white text-xs font-bold shrink-0 mt-0.5">4</span>
                  <div>
                    <p className="text-sm font-bold text-[#333]">1〜2週間で完成</p>
                    <p className="text-sm text-[#666]">花の種類や湿度にもよりますが、1〜2週間で完全に乾燥します。触ってカサカサになっていれば完成です。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Suitable flowers */}
            <h3 className="text-lg font-bold text-[#333] mb-4">ドライフラワーに向く花・向かない花</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C5D9CB]">
                <h4 className="text-sm font-bold text-[#4A7C59] mb-3">向いている花</h4>
                <ul className="text-sm text-[#666] space-y-1.5">
                  <li>・ バラ（特に濃い色のもの）</li>
                  <li>・ かすみ草</li>
                  <li>・ スターチス</li>
                  <li>・ 千日紅</li>
                  <li>・ ユーカリ</li>
                  <li>・ ラベンダー</li>
                  <li>・ アジサイ（秋色アジサイ）</li>
                  <li>・ ミモザ</li>
                </ul>
              </div>
              <div className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
                <h4 className="text-sm font-bold text-[#333] mb-3">向かない花</h4>
                <ul className="text-sm text-[#666] space-y-1.5">
                  <li>・ ガーベラ（水分が多く縮む）</li>
                  <li>・ チューリップ（花びらが落ちやすい）</li>
                  <li>・ スイートピー（薄く崩れやすい）</li>
                  <li>・ トルコキキョウ（変色しやすい）</li>
                  <li>・ ユリ（花びらが重く形が崩れる）</li>
                  <li>・ 菊（カビが生えやすい）</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h4 className="text-sm font-bold text-[#333] mb-2">ドライフラワーの飾り方と保存のコツ</h4>
              <p className="text-sm text-[#666] leading-relaxed">
                完成したドライフラワーは直射日光を避け、湿気の少ない場所に飾りましょう。
                花瓶に挿す、壁に吊るす、リースにアレンジするなど、飾り方は自由です。
                ヘアスプレーを軽く吹きかけておくと、花びらの落下を防げます。
                保存期間は環境によりますが、おおよそ3ヶ月〜半年ほど楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のお手入れに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#F8F8F8] hover:bg-[#E8F0EB] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#333] pr-4">
                      Q. {item.q}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#999] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-white">
                      <p className="text-sm text-[#666] leading-relaxed">
                        A. {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section id="summary" className="py-12 md:py-16 bg-[#E8F0EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：基本のケアで花はもっと長く楽しめる
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花を長持ちさせるために最も大切なのは、「水切り」と「毎日の水替え」です。
              この2つを習慣にするだけで、花の寿命は確実に延びます。
              延命剤の活用、置き場所の工夫、季節に合わせたケアを加えれば、さらに長く楽しめます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花瓶は利用しているサブスクのプランに合ったサイズを選びましょう。
              100均で揃えれば初期投資もわずかです。
              しおれる前にドライフラワーにすれば、1回の配送で生花とドライフラワーの2通りの楽しみ方ができます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              花のサブスクは定期的に新鮮な花が届くため、お手入れの習慣も自然と身につきます。
              まだサブスクを始めていない方は、まずは手頃なプランから試してみてはいかがでしょうか。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/compare/cheap"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                花のサブスクを安い順に比較する
              </a>
              <a
                href="/guides/beginner"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                初心者向けガイドを見る
              </a>
            </div>
            <a
              href="/"
              className="inline-block mt-4 text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline"
            >
              トップページに戻る
            </a>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#333] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <p className="text-lg font-bold text-white mb-1">flowerデリ</p>
              <p className="text-xs text-gray-400">
                花のサブスクを徹底比較。あなたにぴったりのサービスが見つかる。
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <a href="/" className="hover:text-white transition-colors">
                トップページ
              </a>
              <a href="/#comparison" className="hover:text-white transition-colors">
                比較表
              </a>
              <a href="/#reviews" className="hover:text-white transition-colors">
                サービス詳細
              </a>
              <a href="/#faq" className="hover:text-white transition-colors">
                よくある質問
              </a>
            </nav>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center">
            <p className="text-xs text-gray-500">
              当サイトはアフィリエイトプログラムに参加しています。
              リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。
            </p>
            <p className="text-xs text-gray-500 mt-2">
              掲載情報は2026年4月時点のものです。最新の料金・サービス内容は各公式サイトでご確認ください。
            </p>
            <p className="text-xs text-gray-500 mt-4">
              &copy; 2026 flowerデリ All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
