"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクでは季節に合ったお花が届きますか？",
    a: "はい、ほとんどの花のサブスクサービスでは、その時期に旬を迎える季節の花を中心にアレンジして届けてくれます。プロのフローリストが市場で仕入れた新鮮な旬の花を選ぶため、自分では選ばないような季節の花との出会いも楽しめます。",
  },
  {
    q: "届く花の種類を事前に知ることはできますか？",
    a: "多くのサービスでは届くまで花の種類がわからない「お任せスタイル」が基本です。ただし、bloomeeやmedeluなど一部サービスでは、発送時に届く花の名前やケア方法をメールやアプリで通知してくれます。届いた花の名前を知ることで、季節の花への理解も深まります。",
  },
  {
    q: "夏場に花のサブスクを利用しても大丈夫ですか？",
    a: "夏場でも利用可能ですが、鮮度管理には注意が必要です。多くのサービスではクール便対応や保水ゼリーの使用など、夏場の配送対策を行っています。届いたらすぐに水揚げし、直射日光を避けた涼しい場所に飾ることで、夏でも数日間楽しめます。エアコンの風が直接当たる場所は避けましょう。",
  },
  {
    q: "季節の花を長持ちさせるコツはありますか？",
    a: "基本は毎日の水替えと茎の切り戻し（水切り）です。春の花は涼しい場所に、夏の花は水に氷を入れると長持ちします。秋冬の花は比較的日持ちしますが、暖房の風が直接当たる場所は避けてください。付属の延命剤を使用し、傷んだ花びらや葉はこまめに取り除くことも大切です。",
  },
  {
    q: "花のサブスクは季節によって届く本数が変わりますか？",
    a: "基本的にプランごとの本数は季節によって変わりません。ただし、花の種類によってボリューム感は異なります。たとえば夏のひまわりは1本でも存在感がありますが、冬の小花は数本でコンパクトな印象になります。サービスによっては、季節に応じてグリーンや枝物を加えてボリュームを調整する場合もあります。",
  },
  {
    q: "花のサブスクで届く花は自分で選べますか？",
    a: "基本的にはフローリストのお任せですが、AND PLANTSでは花の色味の好みを伝えられるなど、一部カスタマイズに対応しているサービスもあります。季節の花を楽しむという観点では、プロにお任せすることで自分では選ばない花に出会える点がサブスクの魅力です。",
  },
  {
    q: "季節ごとにサブスクのプランを変更できますか？",
    a: "はい、多くのサービスではプラン変更や配送頻度の変更が可能です。たとえば、花が長持ちしにくい夏場は隔週配送にし、花が長持ちする冬場は月1回にするなど、季節に合わせた調整ができます。スキップ機能を使えば、旅行や帰省で不在の週は配送を止めることも可能です。",
  },
  {
    q: "花のサブスクは何月に始めるのがおすすめですか？",
    a: "どの月から始めても季節の花を楽しめますが、特におすすめなのは3月と10月です。3月は春の花が豊富で種類も多く、華やかなアレンジが届きやすい時期です。10月は秋の花が充実し、気温が下がって花が長持ちしやすくなります。もちろん、思い立ったときにすぐ始められるのがサブスクの良さです。",
  },
];

/* ─── Monthly Flower Data ─── */
const monthlyData = [
  {
    month: 1,
    label: "1月",
    season: "winter",
    flowers: ["バラ", "スイートピー", "ラナンキュラス", "アネモネ"],
    tip: "暖房で乾燥しやすい季節です。加湿器の近くに飾ると花も人も潤います。茎が短い花はグラスや小瓶に活けるとおしゃれです。",
    recommend: "冬でも色鮮やかな花が届くmedeluやbloomeeがおすすめ。新年の食卓を華やかに彩れます。",
  },
  {
    month: 2,
    label: "2月",
    season: "winter",
    flowers: ["チューリップ", "ラナンキュラス", "ユーカリ", "カーネーション"],
    tip: "チューリップは暖かい部屋で茎が伸びる特性があります。涼しい玄関先に飾ると長持ちします。バレンタインの時期は赤やピンクの花が充実します。",
    recommend: "春の先取りが楽しめる時期。AND PLANTSはプロのアレンジで季節感あるブーケが届きます。",
  },
  {
    month: 3,
    label: "3月",
    season: "spring",
    flowers: ["チューリップ", "ラナンキュラス", "スイートピー", "フリージア"],
    tip: "春の花は繊細なものが多いため、直射日光は避けましょう。スイートピーは甘い香りが魅力なので、リビングや寝室に飾ると癒されます。",
    recommend: "花の種類が最も豊富になる時期。どのサブスクでも華やかなアレンジが届きやすく、初めての方にもおすすめの開始月です。",
  },
  {
    month: 4,
    label: "4月",
    season: "spring",
    flowers: ["バラ", "ガーベラ", "カーネーション", "スターチス"],
    tip: "気温が上がり始めるため、水替えは毎日行いましょう。茎のぬめりを感じたら水切りを。花瓶の水は少なめ（茎が3cm浸かる程度）にすると腐りにくくなります。",
    recommend: "新生活のスタートに合わせて始める方が多い月。medeluなら698円から気軽にお試しできます。",
  },
  {
    month: 5,
    label: "5月",
    season: "spring",
    flowers: ["バラ", "シャクヤク", "カーネーション", "トルコキキョウ"],
    tip: "母の日のカーネーションだけでなく、シャクヤクが旬を迎える贅沢な月です。シャクヤクは蕾で届くことが多く、日に日に開いていく姿を楽しめます。",
    recommend: "母の日ギフトとしてサブスクを贈るのも人気。bloomeeはギフト対応プランもあります。",
  },
  {
    month: 6,
    label: "6月",
    season: "summer",
    flowers: ["アジサイ", "ユリ", "トルコキキョウ", "ヒペリカム"],
    tip: "梅雨の湿気で花が傷みやすい時期です。風通しの良い場所に飾り、水はこまめに替えましょう。アジサイはドライフラワーにもしやすいのでおすすめです。",
    recommend: "梅雨で外出が減る分、室内に花があると気分が明るくなります。配送頻度を隔週にして鮮度を保つのがコツです。",
  },
  {
    month: 7,
    label: "7月",
    season: "summer",
    flowers: ["ひまわり", "ユリ", "トルコキキョウ", "グラジオラス"],
    tip: "夏本番は花の日持ちが短くなります。水に氷を数個入れる、延命剤を必ず使う、エアコンの効いた部屋に飾るなどの工夫が必要です。ひまわりは1本でも存在感抜群です。",
    recommend: "夏の鮮度対策がしっかりしているサービスを選びましょう。AND PLANTSは宅配便配送で花の状態が良好です。",
  },
  {
    month: 8,
    label: "8月",
    season: "summer",
    flowers: ["ひまわり", "トルコキキョウ", "クルクマ", "アンスリウム"],
    tip: "最も花が傷みやすい月です。届いたらすぐに水揚げし、茎を斜めにカットしてください。南国系の花（アンスリウム、クルクマなど）は暑さに強く長持ちします。",
    recommend: "旅行や帰省で不在になる場合はスキップ機能を活用しましょう。medeluやhanamekuは柔軟にスキップできます。",
  },
  {
    month: 9,
    label: "9月",
    season: "autumn",
    flowers: ["リンドウ", "ケイトウ", "コスモス", "ワレモコウ"],
    tip: "秋の花は落ち着いた色合いが特徴です。和の雰囲気を楽しみたいなら、陶器の花瓶に活けると季節感が増します。気温が下がり始め、花が長持ちしやすくなります。",
    recommend: "秋は花のコスパが良い季節。気温が落ち着き花持ちが良くなるため、サブスクを再開するのにも最適です。",
  },
  {
    month: 10,
    label: "10月",
    season: "autumn",
    flowers: ["ダリア", "コスモス", "バラ", "スプレーマム"],
    tip: "ダリアは花弁が多く豪華な印象で、秋のアレンジの主役です。水はこまめに替え、茎が柔らかいので丁寧に扱いましょう。ハロウィンカラーのアレンジも楽しめます。",
    recommend: "秋バラも出回り、花の種類が豊富な時期。花好きな方への贈り物としてサブスクを始めるのにも良い月です。",
  },
  {
    month: 11,
    label: "11月",
    season: "autumn",
    flowers: ["ダリア", "ケイトウ", "ユーカリ", "紅葉の枝物"],
    tip: "紅葉した枝物やユーカリなどのグリーンが映える季節です。枝物は花瓶に高さを出して飾ると空間が引き締まります。ドライフラワーにしやすい花材が増えるのも秋の特徴です。",
    recommend: "クリスマスに向けて花のある暮らしを始めるのに良いタイミング。hanamekuは月1回から始められて手軽です。",
  },
  {
    month: 12,
    label: "12月",
    season: "winter",
    flowers: ["バラ", "クリスマスホーリー", "コットンフラワー", "ヒバ"],
    tip: "クリスマスやお正月に向けた特別なアレンジが届くことも。赤と緑のクリスマスカラーや、松や千両を使ったお正月アレンジなど、イベントに合わせた花を楽しめます。",
    recommend: "年末はイベントが多く、花の需要が高まる時期。早めにサブスクを契約しておくと確実に届きます。",
  },
];

const seasonColors: Record<string, { bg: string; text: string; border: string; label: string }> = {
  spring: { bg: "bg-[#FFF0F5]", text: "text-[#C75C8A]", border: "border-[#F0C0D0]", label: "春" },
  summer: { bg: "bg-[#F0F8FF]", text: "text-[#2E7DB5]", border: "border-[#B0D4F1]", label: "夏" },
  autumn: { bg: "bg-[#FFF8F0]", text: "text-[#B8602A]", border: "border-[#F0D0B0]", label: "秋" },
  winter: { bg: "bg-[#F5F5FF]", text: "text-[#5B5BAA]", border: "border-[#C8C8E8]", label: "冬" },
};

/* ─── Main Component ─── */
export default function SeasonalFlowersPage() {
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
                  <span className="text-[#666]">お花ガイド</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">季節の花カレンダー</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              季節のお花ガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              季節の花カレンダー｜月別で届く<br className="hidden md:block" />
              お花の種類とサブスクの楽しみ方
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクでは、季節ごとに旬のお花が届きます。
              この記事では月別の代表的な花の種類、飾り方のコツ、季節に合わせたサブスクの活用法を詳しくご紹介します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">春（3-5月）</p>
                <p className="text-base font-bold text-[#C75C8A]">チューリップ・バラ</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">夏（6-8月）</p>
                <p className="text-base font-bold text-[#2E7DB5]">ひまわり・ユリ</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">秋（9-11月）</p>
                <p className="text-base font-bold text-[#B8602A]">コスモス・ダリア</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">冬（12-2月）</p>
                <p className="text-base font-bold text-[#5B5BAA]">バラ・ユーカリ</p>
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
                  <li><a href="#intro" className="hover:text-[#4A7C59] transition-colors">1. 花のサブスクで季節を感じる暮らし</a></li>
                  <li><a href="#spring" className="hover:text-[#4A7C59] transition-colors">2. 春の花カレンダー（3月・4月・5月）</a></li>
                  <li><a href="#summer" className="hover:text-[#4A7C59] transition-colors">3. 夏の花カレンダー（6月・7月・8月）</a></li>
                  <li><a href="#autumn" className="hover:text-[#4A7C59] transition-colors">4. 秋の花カレンダー（9月・10月・11月）</a></li>
                  <li><a href="#winter" className="hover:text-[#4A7C59] transition-colors">5. 冬の花カレンダー（12月・1月・2月）</a></li>
                  <li><a href="#calendar" className="hover:text-[#4A7C59] transition-colors">6. 月別花カレンダー一覧表</a></li>
                  <li><a href="#tips" className="hover:text-[#4A7C59] transition-colors">7. 季節別・花を長持ちさせるポイント</a></li>
                  <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">8. 季節の花が届くおすすめサブスク</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">9. 季節の花とサブスクに関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">10. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Introduction ─── */}
        <section id="intro" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクで季節を感じる暮らし
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              スーパーや花屋で何気なく花を買うとき、つい同じ種類を選んでしまうという方は多いのではないでしょうか。
              花のサブスク（定期便）を利用すると、プロのフローリストが選んだ旬のお花が自宅に届くため、季節の移り変わりを自然に感じられるようになります。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              春にはチューリップやスイートピーの柔らかな色合い、夏にはひまわりの鮮やかな黄色、秋にはダリアやコスモスの深い色彩、冬にはバラやユーカリのシックな雰囲気と、
              四季折々の花が部屋の表情を変えてくれます。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">この記事でわかること</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 月ごとの代表的な花の種類と特徴</li>
                <li>・ 季節ごとの飾り方のコツとお手入れ方法</li>
                <li>・ 季節に合わせたサブスクの活用法</li>
                <li>・ 季節の花が届くおすすめサブスクサービス</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Spring Section ─── */}
        <section id="spring" className="py-12 md:py-16 bg-[#FFF0F5]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-2 pb-3 border-b-2 border-[#C75C8A]">
              春の花カレンダー（3月・4月・5月）
            </h2>
            <p className="text-sm text-[#C75C8A] font-medium mb-6">チューリップ、バラ、ラナンキュラス、スイートピー</p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              春は花の種類が最も豊富になる季節です。チューリップやラナンキュラスなど球根花が出回り、
              スイートピーの甘い香り、フリージアの爽やかな香りも楽しめます。
              色のバリエーションも豊かで、パステルカラーから鮮やかな色まで幅広いアレンジが届きます。
            </p>

            <div className="space-y-5">
              {monthlyData.filter(m => m.season === "spring").map((m) => (
                <div key={m.month} className="bg-white rounded-xl border border-[#F0C0D0] overflow-hidden">
                  <div className="px-5 py-3 bg-[#FFEEF4] border-b border-[#F0C0D0]">
                    <h3 className="text-base font-bold text-[#333]">{m.label}の花</h3>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {m.flowers.map((f) => (
                        <span key={f} className="bg-[#FFF0F5] text-[#C75C8A] text-sm px-3 py-1 rounded-full border border-[#F0C0D0]">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold text-[#999] mb-1">飾り方のコツ</p>
                        <p className="text-sm text-[#666] leading-relaxed">{m.tip}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#999] mb-1">おすすめサブスク</p>
                        <p className="text-sm text-[#666] leading-relaxed">{m.recommend}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white rounded-xl p-5 border border-[#F0C0D0]">
              <h3 className="text-sm font-bold text-[#C75C8A] mb-2">春のサブスク活用ポイント</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                春は花の種類が豊富で、サブスクを始めるのに最適な季節です。
                気温が穏やかなため花の日持ちも良く、届いた花を1週間以上楽しめることも珍しくありません。
                新生活のスタートに合わせて、花のある暮らしを始めてみてはいかがでしょうか。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Summer Section ─── */}
        <section id="summer" className="py-12 md:py-16 bg-[#F0F8FF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-2 pb-3 border-b-2 border-[#2E7DB5]">
              夏の花カレンダー（6月・7月・8月）
            </h2>
            <p className="text-sm text-[#2E7DB5] font-medium mb-6">ひまわり、ユリ、アジサイ、トルコキキョウ</p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              夏は元気の出るビタミンカラーの花が中心です。ひまわりやトルコキキョウなど、暑さに比較的強い花が出回ります。
              ただし、気温が高いため花の日持ちが短くなりがちです。鮮度管理が重要なシーズンです。
            </p>

            <div className="space-y-5">
              {monthlyData.filter(m => m.season === "summer").map((m) => (
                <div key={m.month} className="bg-white rounded-xl border border-[#B0D4F1] overflow-hidden">
                  <div className="px-5 py-3 bg-[#E8F4FD] border-b border-[#B0D4F1]">
                    <h3 className="text-base font-bold text-[#333]">{m.label}の花</h3>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {m.flowers.map((f) => (
                        <span key={f} className="bg-[#F0F8FF] text-[#2E7DB5] text-sm px-3 py-1 rounded-full border border-[#B0D4F1]">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold text-[#999] mb-1">飾り方のコツ</p>
                        <p className="text-sm text-[#666] leading-relaxed">{m.tip}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#999] mb-1">おすすめサブスク</p>
                        <p className="text-sm text-[#666] leading-relaxed">{m.recommend}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
              <h3 className="text-sm font-bold text-[#B84C4C] mb-2">夏の鮮度に関する注意点</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 届いたらすぐに開封し、水揚げ（茎を水中でカット）をする</li>
                <li>・ 花瓶の水は毎日交換し、水量は少なめ（茎が3cm浸かる程度）にする</li>
                <li>・ 付属の延命剤は必ず使用する</li>
                <li>・ 直射日光とエアコンの風が直接当たる場所を避ける</li>
                <li>・ 可能であればクール便対応のサービスを選ぶ</li>
                <li>・ 旅行等で不在の場合はスキップ機能を活用する</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Autumn Section ─── */}
        <section id="autumn" className="py-12 md:py-16 bg-[#FFF8F0]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-2 pb-3 border-b-2 border-[#B8602A]">
              秋の花カレンダー（9月・10月・11月）
            </h2>
            <p className="text-sm text-[#B8602A] font-medium mb-6">コスモス、ダリア、ケイトウ、リンドウ</p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              秋は深みのある色合いの花が主役です。ダリアの豪華な花姿、コスモスの可憐さ、ケイトウのユニークな質感など、
              個性的な花が揃います。気温が下がるため花持ちも良くなり、サブスクのコストパフォーマンスが高い季節です。
            </p>

            <div className="space-y-5">
              {monthlyData.filter(m => m.season === "autumn").map((m) => (
                <div key={m.month} className="bg-white rounded-xl border border-[#F0D0B0] overflow-hidden">
                  <div className="px-5 py-3 bg-[#FFF3E8] border-b border-[#F0D0B0]">
                    <h3 className="text-base font-bold text-[#333]">{m.label}の花</h3>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {m.flowers.map((f) => (
                        <span key={f} className="bg-[#FFF8F0] text-[#B8602A] text-sm px-3 py-1 rounded-full border border-[#F0D0B0]">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold text-[#999] mb-1">飾り方のコツ</p>
                        <p className="text-sm text-[#666] leading-relaxed">{m.tip}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#999] mb-1">おすすめサブスク</p>
                        <p className="text-sm text-[#666] leading-relaxed">{m.recommend}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white rounded-xl p-5 border border-[#F0D0B0]">
              <h3 className="text-sm font-bold text-[#B8602A] mb-2">秋のサブスク活用ポイント</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                秋は気温が下がって花の日持ちが良くなるため、月1回の配送でもたっぷり楽しめます。
                ドライフラワーにしやすい花材（ケイトウ、ユーカリ、ワレモコウなど）も多いので、
                届いた花を飾った後にドライフラワーとして残す楽しみ方もおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Winter Section ─── */}
        <section id="winter" className="py-12 md:py-16 bg-[#F5F5FF]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-2 pb-3 border-b-2 border-[#5B5BAA]">
              冬の花カレンダー（12月・1月・2月）
            </h2>
            <p className="text-sm text-[#5B5BAA] font-medium mb-6">バラ、カーネーション、ユーカリ、クリスマスホーリー</p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              冬は花の種類がやや少なくなりますが、バラやカーネーションなど定番の花が美しい季節です。
              クリスマスやお正月に合わせた特別なアレンジが届くこともあり、イベント感を楽しめます。
              気温が低いため花が最も長持ちする季節でもあります。
            </p>

            <div className="space-y-5">
              {monthlyData.filter(m => m.season === "winter").map((m) => (
                <div key={m.month} className="bg-white rounded-xl border border-[#C8C8E8] overflow-hidden">
                  <div className="px-5 py-3 bg-[#EFEFFF] border-b border-[#C8C8E8]">
                    <h3 className="text-base font-bold text-[#333]">{m.label}の花</h3>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {m.flowers.map((f) => (
                        <span key={f} className="bg-[#F5F5FF] text-[#5B5BAA] text-sm px-3 py-1 rounded-full border border-[#C8C8E8]">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold text-[#999] mb-1">飾り方のコツ</p>
                        <p className="text-sm text-[#666] leading-relaxed">{m.tip}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#999] mb-1">おすすめサブスク</p>
                        <p className="text-sm text-[#666] leading-relaxed">{m.recommend}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white rounded-xl p-5 border border-[#C8C8E8]">
              <h3 className="text-sm font-bold text-[#5B5BAA] mb-2">冬のサブスク活用ポイント</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                冬は花が最も長持ちする季節です。暖房の効いた部屋でも1週間以上持つことが多く、
                月1回の配送でも十分に楽しめます。ただし、暖房の温風が直接当たる場所は避けてください。
                玄関先など涼しい場所に飾れば、さらに長持ちします。年末年始はお正月花が届くサービスもあるので、
                特別感のあるアレンジを楽しめるのも冬ならではです。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Monthly Calendar Table ─── */}
        <section id="calendar" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              月別花カレンダー一覧表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              12か月分の代表的な花を一覧にまとめました。サブスクで届く花の目安としてお役立てください。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm" style={{ minWidth: "560px" }}>
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">月</th>
                    <th className="px-4 py-3 text-left font-medium">季節</th>
                    <th className="px-4 py-3 text-left font-medium">代表的な花</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyData.map((m, i) => {
                    const sc = seasonColors[m.season];
                    return (
                      <tr key={m.month} className={`border-t border-[#E5E5E5] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}>
                        <td className="px-4 py-3 font-bold text-[#333]">{m.label}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded ${sc.bg} ${sc.text}`}>
                            {sc.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-[#666]">{m.flowers.join("、")}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">表の補足</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 掲載している花は代表例です。実際に届く花はサービスや時期によって異なります</li>
                <li>・ 同じ花でも品種や色のバリエーションがあり、毎回異なるアレンジを楽しめます</li>
                <li>・ 季節の変わり目には前後の季節の花が混じることもあります</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Seasonal Tips ─── */}
        <section id="tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              季節別・花を長持ちさせるポイント
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              季節によって花のケア方法は変わります。ちょっとした工夫で花の寿命を数日延ばすことができます。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Spring Tips */}
              <div className="bg-[#FFF0F5] rounded-xl p-5 border border-[#F0C0D0]">
                <h3 className="text-base font-bold text-[#C75C8A] mb-3">春のケアポイント</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>・ 茎が柔らかい花が多いため水量は少なめに</li>
                  <li>・ チューリップは涼しい場所に飾ると長持ち</li>
                  <li>・ 花粉が落ちるユリは雄しべを取り除く</li>
                  <li>・ 水替え時に茎のぬめりを洗い流す</li>
                </ul>
              </div>

              {/* Summer Tips */}
              <div className="bg-[#F0F8FF] rounded-xl p-5 border border-[#B0D4F1]">
                <h3 className="text-base font-bold text-[#2E7DB5] mb-3">夏のケアポイント</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>・ 水替えは毎日、できれば朝晩2回</li>
                  <li>・ 氷を花瓶に入れて水温を下げる</li>
                  <li>・ 延命剤は必ず使用する</li>
                  <li>・ 漂白剤を1滴入れると水の腐敗を防げる</li>
                </ul>
              </div>

              {/* Autumn Tips */}
              <div className="bg-[#FFF8F0] rounded-xl p-5 border border-[#F0D0B0]">
                <h3 className="text-base font-bold text-[#B8602A] mb-3">秋のケアポイント</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>・ ドライフラワー向きの花は早めに吊るす</li>
                  <li>・ 枝物は茎の断面を十字に割ると水揚げが良い</li>
                  <li>・ 花瓶の水量はやや多めでOK</li>
                  <li>・ 台風シーズンは配送日に注意</li>
                </ul>
              </div>

              {/* Winter Tips */}
              <div className="bg-[#F5F5FF] rounded-xl p-5 border border-[#C8C8E8]">
                <h3 className="text-base font-bold text-[#5B5BAA] mb-3">冬のケアポイント</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>・ 暖房の温風が直接当たらない場所に飾る</li>
                  <li>・ 加湿器の近くに置くと乾燥を防げる</li>
                  <li>・ 水替えは2日に1回程度でも可</li>
                  <li>・ 凍結に注意（玄関先が氷点下の地域）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Recommended Services ─── */}
        <section id="recommend" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              季節の花が届くおすすめサブスク
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              季節の花を楽しむのに適したサブスクサービスを厳選してご紹介します。
              どのサービスも旬の花を中心にアレンジしてくれるため、季節感のあるお花が届きます。
            </p>

            <div className="space-y-5">
              {/* medelu */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="px-5 py-4 bg-[#E8F0EB] border-b border-[#C5D9CB]">
                  <h3 className="text-base font-bold text-[#333]">medelu（メデル）</h3>
                  <p className="text-sm text-[#666]">市場直送で鮮度抜群の季節花が届く</p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#666] leading-relaxed mb-4">
                    medeluは市場から直接仕入れた新鮮な花を届けるサービスです。
                    季節ごとに旬の花を厳選しており、春はチューリップやラナンキュラス、夏はひまわり、秋はダリアなど、
                    その時期ならではの花に出会えます。Miniプラン698円（送料無料）から始められるため、
                    気軽に季節の花を楽しみたい方に最適です。
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm mb-4">
                    <span className="bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">698円/回〜</span>
                    <span className="bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">送料無料</span>
                    <span className="bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">回数縛りなし</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/services/medelu" className="inline-block text-center bg-white text-[#4A7C59] font-bold text-sm px-6 py-3 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                      medeluの詳細を見る
                    </a>
                    <a href="https://www.medelu.flowers" target="_blank" rel="noopener noreferrer nofollow" className="inline-block text-center bg-[#4A7C59] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#3A6247] transition-colors shadow-sm">
                      medelu公式サイトはこちら
                    </a>
                  </div>
                </div>
              </div>

              {/* bloomee */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="px-5 py-4 bg-[#E8F0EB] border-b border-[#C5D9CB]">
                  <h3 className="text-base font-bold text-[#333]">bloomee（ブルーミー）</h3>
                  <p className="text-sm text-[#666]">全国の提携花屋が選ぶ地域ごとの季節花</p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#666] leading-relaxed mb-4">
                    bloomeeは全国200店舗以上の提携花屋からアレンジが届くサービスです。
                    地域の花屋がその土地の気候に合わせた旬の花を選ぶため、
                    季節感のあるアレンジが届きやすいのが特徴です。
                    SNSでの投稿も多く、他の利用者がどんな季節の花を受け取っているか参考にできます。
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm mb-4">
                    <span className="bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">980円/回〜</span>
                    <span className="bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">送料385円〜</span>
                    <span className="bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">品質再送保証</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/services/bloomee" className="inline-block text-center bg-white text-[#4A7C59] font-bold text-sm px-6 py-3 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                      bloomeeの詳細を見る
                    </a>
                    <a href="https://bloomee.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-block text-center bg-[#4A7C59] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#3A6247] transition-colors shadow-sm">
                      bloomee公式サイトはこちら
                    </a>
                  </div>
                </div>
              </div>

              {/* AND PLANTS */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="px-5 py-4 bg-[#E8F0EB] border-b border-[#C5D9CB]">
                  <h3 className="text-base font-bold text-[#333]">AND PLANTS（アンドプランツ）</h3>
                  <p className="text-sm text-[#666]">プロが手掛けるハイセンスな季節アレンジ</p>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#666] leading-relaxed mb-4">
                    AND PLANTSはプロのフローリストが季節の花を使ったおしゃれなアレンジを届けてくれるサービスです。
                    宅配便での配送のため、花の状態が良好で届きやすく、夏場でも安心です。
                    4〜6本のボリュームがあり、季節感とデザイン性の両方を求める方におすすめです。
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm mb-4">
                    <span className="bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">1,980円/回〜</span>
                    <span className="bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">送料無料</span>
                    <span className="bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">宅配便配送</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/services/and-plants" className="inline-block text-center bg-white text-[#4A7C59] font-bold text-sm px-6 py-3 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                      AND PLANTSの詳細を見る
                    </a>
                    <a href="https://andplants.jp" target="_blank" rel="noopener noreferrer nofollow" className="inline-block text-center bg-[#4A7C59] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#3A6247] transition-colors shadow-sm">
                      AND PLANTS公式サイトはこちら
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              季節の花とサブスクに関するよくある質問
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
              まとめ：季節の花で暮らしに彩りを
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクを利用すると、自分では選ばないような季節の花に出会い、四季の移ろいを日常の中で感じられるようになります。
              春のチューリップ、夏のひまわり、秋のダリア、冬のバラと、12か月それぞれに違った楽しみがあります。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のケア方法も季節によって異なります。特に夏場は鮮度管理に注意が必要ですが、
              冬場は花が長持ちしやすく、コストパフォーマンスの面でもお得に楽しめます。
              配送頻度やスキップ機能を活用して、季節に合わせた利用スタイルを見つけましょう。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              まずは気になるサービスで季節の花を一度受け取ってみてください。
              届いた花の名前を調べ、飾り方を工夫するうちに、花のある暮らしが自然と生活の一部になっていくはずです。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/medelu"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                medeluの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                bloomeeの詳細を見る
              </a>
              <a
                href="/compare/cheap"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                安い順ランキングを見る
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
              <img src="/images/logo-flwdeli-footer.png" alt="flowerデリ" className="h-14 w-auto opacity-90" />

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
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
              <a href="/terms-of-service" className="hover:text-white transition-colors">利用規約</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="/content-policy" className="hover:text-white transition-colors">記事の制作ポリシー</a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              &copy; 2026 flowerデリ All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
