"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* --- FAQ Data --- */
const faqItems = [
  {
    q: "花のサブスクは月額いくらから始められますか？",
    a: "最安のサービスはmedelu（メデル）のMiniプランで、1回698円（送料無料）から始められます。隔週配送なら月額約1,396円です。bloomeeの体験プランは980円＋送料385円で1回あたり1,365円です。まずは1,000円前後のプランから試すのがおすすめです。",
  },
  {
    q: "花のサブスクはどのくらいの頻度で届きますか？",
    a: "サービスやプランによって異なりますが、一般的には毎週・隔週（2週間に1回）・月1回から選べます。初心者には隔週がおすすめです。届いたお花が枯れる頃に次が届くサイクルになるため、常にお花がある生活を無理なく続けられます。",
  },
  {
    q: "届いたお花はどのくらい持ちますか？",
    a: "季節やお花の種類によりますが、適切にお手入れすれば5日から10日ほど楽しめます。こまめに水替えをし、茎を斜めにカットする「水切り」を行うことで、より長持ちさせることができます。夏場はやや短く、冬場はより長持ちする傾向があります。",
  },
  {
    q: "花瓶を持っていないのですが大丈夫ですか？",
    a: "花瓶がなくても問題ありません。コップやグラス、空き瓶、マグカップなど、水を入れられる容器であれば代用できます。100円ショップでもシンプルな花瓶が購入できます。サブスクで届くお花は3〜5本程度の小ぶりなブーケが多いため、大きな花瓶は必要ありません。",
  },
  {
    q: "ポスト投函と宅配便の違いは何ですか？",
    a: "ポスト投函は不在でも受け取れる手軽さが魅力です。専用の箱に入ってポストに届くため、受け取りの時間を気にする必要がありません。一方、宅配便は手渡しのため在宅が必要ですが、花が箱の中で潰れにくく、状態が良いまま届きやすいメリットがあります。初心者にはポスト投函が手軽でおすすめです。",
  },
  {
    q: "届いたお花が傷んでいた場合はどうすればいいですか？",
    a: "品質保証制度があるサービスを選べば安心です。bloomeeでは傷んだお花が届いた場合に再送対応を受けられます。medeluやhanamekuにも品質保証があります。届いた直後に写真を撮っておくと、問い合わせ時にスムーズです。",
  },
  {
    q: "花のサブスクは途中で解約できますか？",
    a: "ほとんどのサービスで解約可能です。ただし、サービスによって条件が異なります。medeluやhanamekuは回数縛りがなく、いつでも解約できます。bloomeeは最低4回の受け取りが条件で、4回未満で解約すると残り回数分の料金が発生します。初めてで不安な方は回数縛りなしのサービスから始めるのが安心です。",
  },
  {
    q: "花のサブスクでお花の種類は選べますか？",
    a: "基本的にお花の種類はおまかせです。プロの花屋やフローリストが季節のお花をセレクトして届けてくれるため、自分では選ばないようなお花との出会いを楽しめます。これが花のサブスクの大きな魅力の一つです。色味の好み（暖色系・寒色系など）を指定できるサービスもあります。",
  },
];

/* --- Step Data --- */
const stepData = [
  {
    step: 1,
    title: "サービスを選んで申し込む",
    description: "公式サイトからプランを選び、配送先住所・配送頻度・支払い方法を登録します。ほとんどのサービスがクレジットカード決済に対応しています。申し込みは5分程度で完了します。",
  },
  {
    step: 2,
    title: "お花が届く",
    description: "指定した頻度でお花が届きます。ポスト投函の場合は専用の箱でポストに届くため、不在でも受け取れます。届いたらすぐに箱から出して水に浸けましょう。",
  },
  {
    step: 3,
    title: "お花を飾って楽しむ",
    description: "届いたお花を花瓶やグラスに生けて、お部屋に飾ります。テーブル、玄関、洗面台など、目に入る場所に置くと日常が華やかになります。毎日の水替えでお花が長持ちします。",
  },
  {
    step: 4,
    title: "次回のお届けを待つ",
    description: "お花が枯れる頃に次のお届けがあります。スキップ機能があるサービスなら、旅行や外出で不在の週はお届けを休止できます。自分のペースで無理なく続けられます。",
  },
];

/* --- Check Points Data --- */
const checkPoints = [
  {
    title: "料金（花代＋送料の総額）",
    detail: "花代だけでなく、送料を含めた1回あたりの総額で比較することが重要です。送料無料のサービスもあれば、1回あたり385〜550円の送料がかかるサービスもあります。月額は「1回あたり総額 x 月の配送回数」で計算しましょう。",
  },
  {
    title: "配送方法（ポスト投函 or 宅配便）",
    detail: "ポスト投函は不在でも受け取れる手軽さが魅力です。一方、宅配便は花の状態が良いまま届きやすいメリットがあります。一人暮らしや日中不在が多い方はポスト投函対応のサービスを選ぶと便利です。",
  },
  {
    title: "配送頻度（毎週・隔週・月1回）",
    detail: "初心者には隔週（2週間に1回）がおすすめです。毎週だと消費が追いつかないことがあり、月1回だとお花がない期間が長くなります。隔週なら前の花が枯れる頃に次が届くちょうど良いサイクルです。",
  },
  {
    title: "解約条件（回数縛りの有無）",
    detail: "サービスによっては最低受け取り回数が設定されています。bloomeeは4回の最低受け取りが条件です。初めてで続けられるか不安な方は、medeluやhanamekuのような回数縛りなしのサービスを選ぶと安心です。",
  },
  {
    title: "品質保証の有無",
    detail: "配送中にお花が傷んでしまうことは稀にあります。品質保証制度があるサービスなら、傷んだお花が届いた場合に再送や返金の対応を受けられます。bloomee、medelu、hanamekuはいずれも品質保証制度を設けています。",
  },
];

/* --- Mistake Data --- */
const mistakeData = [
  {
    mistake: "送料を考慮せずにサービスを選ぶ",
    solution: "花代だけでなく送料込みの総額で比較しましょう。花代が安くても送料を含めると割高になるケースがあります。medeluやAND PLANTSのような送料無料のサービスは総額が明確で分かりやすいです。",
  },
  {
    mistake: "毎週配送で始めてしまう",
    solution: "初心者がいきなり毎週配送にすると、お花の消費が追いつかず、まだ元気な花があるのに次が届く状態になりがちです。まずは隔週から始めて、慣れてきたら頻度を上げるのがおすすめです。",
  },
  {
    mistake: "届いたお花をすぐに水に浸けない",
    solution: "届いたお花は配送中に水分を失っています。届いたらすぐに箱から出し、茎の先端を1〜2cm斜めにカットしてから水に浸けましょう。これだけでお花の持ちが大きく変わります。",
  },
  {
    mistake: "直射日光やエアコンの風が当たる場所に飾る",
    solution: "直射日光はお花を早く傷めます。エアコンの風も乾燥の原因になります。明るい日陰で風が直接当たらない場所が最適です。玄関やリビングの窓から少し離れた場所がおすすめです。",
  },
  {
    mistake: "水替えをしない",
    solution: "水は毎日替えるのが理想です。最低でも2日に1回は替えましょう。水が濁ると雑菌が繁殖し、茎が腐って花の寿命が縮みます。水替えの際に花瓶の内側もさっと洗うとより効果的です。",
  },
  {
    mistake: "回数縛りを確認せずに申し込む",
    solution: "解約条件は事前に必ず確認しましょう。特にbloomeeは4回の最低受け取りが条件です。「お試し」のつもりが思った以上の出費になることがあります。不安な方は回数縛りなしのサービスから始めましょう。",
  },
];

/* --- Main Component --- */
export default function BeginnerGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* --- Breadcrumbs --- */}
        <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li>
                  <a href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</a>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#666]">ガイド</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">花サブスク初心者ガイド</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* --- Hero Section --- */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花サブスク初心者向け完全ガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花サブスク初心者ガイド｜<br className="hidden md:block" />
              失敗しない選び方と始め方を徹底解説
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスク（定期便）を始めたいけど「どのサービスを選べばいいの？」「届いたお花はどうすればいいの？」と悩んでいませんか。
              この記事では、初心者が失敗しないための選び方・始め方・お花の飾り方まで、すべてを分かりやすく解説します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安プラン</p>
                <p className="text-xl font-bold text-[#4A7C59]">698円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">申し込み時間</p>
                <p className="text-xl font-bold text-[#4A7C59]">約5分</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">お花の日持ち</p>
                <p className="text-xl font-bold text-[#4A7C59]">5〜10日</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">解約縛りなし</p>
                <p className="text-xl font-bold text-[#4A7C59]">複数あり</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Table of Contents --- */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">この記事の内容</p>
              <nav>
                <ol className="text-sm text-[#666] space-y-2">
                  <li><a href="#what-is" className="hover:text-[#4A7C59] transition-colors">1. 花のサブスク（定期便）とは</a></li>
                  <li><a href="#how-it-works" className="hover:text-[#4A7C59] transition-colors">2. 花のサブスクの仕組み（申込から届くまで）</a></li>
                  <li><a href="#check-points" className="hover:text-[#4A7C59] transition-colors">3. 申し込み前に確認すべき5つのポイント</a></li>
                  <li><a href="#recommended" className="hover:text-[#4A7C59] transition-colors">4. 初心者におすすめのサービス</a></li>
                  <li><a href="#display-tips" className="hover:text-[#4A7C59] transition-colors">5. 届いたお花の飾り方ガイド</a></li>
                  <li><a href="#mistakes" className="hover:text-[#4A7C59] transition-colors">6. 初心者がやりがちな失敗と対策</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">7. 花のサブスク初心者のよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">8. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* --- What Is Flower Subscription --- */}
        <section id="what-is" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスク（定期便）とは
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花のサブスクとは、定期的にお花が自宅に届くサービスです。
              「花の定期便」とも呼ばれ、毎週や隔週など決まったペースで、プロが選んだ季節のお花がポストや宅配便で届きます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              自分でお花を買いに行く必要がなく、どんなお花が届くか分からないワクワク感も楽しめます。
              お花屋さんに行き慣れていない方でも気軽に始められるのが、花のサブスクの大きな魅力です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#E8F0EB] rounded-xl p-5 text-center">
                <p className="text-sm font-bold text-[#4A7C59] mb-2">手軽さ</p>
                <p className="text-sm text-[#666] leading-relaxed">
                  申し込むだけで定期的にお花が届く。買いに行く手間がゼロ。
                </p>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5 text-center">
                <p className="text-sm font-bold text-[#4A7C59] mb-2">お花との出会い</p>
                <p className="text-sm text-[#666] leading-relaxed">
                  プロが選んだ旬のお花が届く。自分では選ばない花との出会いがある。
                </p>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5 text-center">
                <p className="text-sm font-bold text-[#4A7C59] mb-2">リーズナブル</p>
                <p className="text-sm text-[#666] leading-relaxed">
                  1回698円から。花屋で買うよりも手頃な価格で始められる。
                </p>
              </div>
            </div>

            <div className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">こんな人に向いています</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ お花のある暮らしを始めたいけど、何から始めればいいか分からない方</li>
                <li>・ 仕事が忙しくてお花屋さんに行く時間がない方</li>
                <li>・ お花の知識がなくても気軽に楽しみたい方</li>
                <li>・ インテリアに彩りをプラスしたい方</li>
                <li>・ 季節の移ろいをお花で感じたい方</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- How It Works --- */}
        <section id="how-it-works" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクの仕組み（申込から届くまで）
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花のサブスクはとてもシンプルな仕組みです。4つのステップで、お花のある暮らしが始まります。
            </p>

            <div className="space-y-6">
              {stepData.map((item) => (
                <div key={item.step} className="bg-white rounded-xl border border-[#E5E5E5] p-5 flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4A7C59] text-white text-sm font-bold">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#333] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#E8F0EB] rounded-xl p-5">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-2">サイクルのポイント</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                隔週配送の場合、届いたお花が5〜10日ほど楽しめるため、お花が枯れる頃にちょうど次のお届けが届きます。
                旅行や出張で受け取れない週はスキップ機能を使えば、お届けをお休みできます。自分のライフスタイルに合わせて柔軟に調整できるのも花のサブスクの良いところです。
              </p>
            </div>
          </div>
        </section>

        {/* --- 5 Check Points --- */}
        <section id="check-points" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              申し込み前に確認すべき5つのポイント
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花のサブスクを選ぶ際に、事前に確認しておきたい5つのポイントをまとめました。
              この5項目をチェックすれば、自分に合ったサービスを見つけられます。
            </p>

            <div className="space-y-5">
              {checkPoints.map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] overflow-hidden">
                  <div className="px-5 py-4 flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#4A7C59] text-white text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-[#333] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#666] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-xl border-2 border-[#4A7C59] p-5">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">初心者向けの選び方まとめ</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" style={{ minWidth: "480px" }}>
                  <thead>
                    <tr className="bg-[#E8F0EB]">
                      <th className="px-3 py-2 text-left font-medium text-[#333]">項目</th>
                      <th className="px-3 py-2 text-left font-medium text-[#333]">初心者おすすめ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[#E5E5E5]">
                      <td className="px-3 py-2 text-[#666]">料金</td>
                      <td className="px-3 py-2 text-[#666]">送料込みで1回1,000円前後</td>
                    </tr>
                    <tr className="border-t border-[#E5E5E5]">
                      <td className="px-3 py-2 text-[#666]">配送方法</td>
                      <td className="px-3 py-2 text-[#666]">ポスト投函（不在でも受け取れる）</td>
                    </tr>
                    <tr className="border-t border-[#E5E5E5]">
                      <td className="px-3 py-2 text-[#666]">配送頻度</td>
                      <td className="px-3 py-2 text-[#666]">隔週（2週間に1回）</td>
                    </tr>
                    <tr className="border-t border-[#E5E5E5]">
                      <td className="px-3 py-2 text-[#666]">解約条件</td>
                      <td className="px-3 py-2 text-[#666]">回数縛りなし</td>
                    </tr>
                    <tr className="border-t border-[#E5E5E5]">
                      <td className="px-3 py-2 text-[#666]">品質保証</td>
                      <td className="px-3 py-2 text-[#666]">あり（再送・返金対応）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* --- Recommended Services --- */}
        <section id="recommended" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              初心者におすすめのサービス
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              数ある花のサブスクの中から、初心者が最初に選ぶべきサービスを厳選しました。
              安心感・コスパ・始めやすさの観点から、まずはこの2つを検討してみてください。
            </p>

            {/* bloomee - Primary Recommendation */}
            <div className="bg-white rounded-xl border-2 border-[#4A7C59] overflow-hidden mb-6">
              <div className="px-5 py-4 bg-[#E8F0EB] border-b border-[#C5D9CB] flex items-center gap-3">
                <span className="bg-[#4A7C59] text-white text-xs font-bold px-3 py-1 rounded">
                  初心者に一番おすすめ
                </span>
                <h3 className="text-lg font-bold text-[#333]">bloomee（ブルーミー）</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#666] leading-relaxed mb-5">
                  bloomeeは累計3,000万本以上のお届け実績を持つ、日本最大級の花のサブスクサービスです。
                  知名度No.1で利用者が多いため、SNSでの口コミや飾り方の参考情報が豊富にあります。
                  全国200店舗以上の提携花屋がアレンジを担当しており、届くたびに異なるテイストのお花を楽しめます。
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                  <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                    <p className="text-xs text-[#999] mb-1">体験プラン</p>
                    <p className="text-lg font-bold text-[#333]">980<span className="text-xs font-normal">円</span></p>
                  </div>
                  <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                    <p className="text-xs text-[#999] mb-1">送料</p>
                    <p className="text-lg font-bold text-[#333]">385<span className="text-xs font-normal">円</span></p>
                  </div>
                  <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                    <p className="text-xs text-[#999] mb-1">1回あたり総額</p>
                    <p className="text-lg font-bold text-[#4A7C59]">1,365<span className="text-xs font-normal">円</span></p>
                  </div>
                  <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                    <p className="text-xs text-[#999] mb-1">花の本数</p>
                    <p className="text-lg font-bold text-[#333]">3本以上</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                  <div className="flex">
                    <span className="text-[#999] w-28 shrink-0">届き方</span>
                    <span className="text-[#333]">ポスト投函</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#999] w-28 shrink-0">配送頻度</span>
                    <span className="text-[#333]">毎週 / 隔週</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#999] w-28 shrink-0">回数縛り</span>
                    <span className="text-[#333]">4回</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#999] w-28 shrink-0">品質保証</span>
                    <span className="text-[#333]">あり（再送保証）</span>
                  </div>
                </div>

                <div className="bg-[#E8F0EB] rounded-lg p-4 mb-5">
                  <p className="text-sm font-bold text-[#4A7C59] mb-2">初心者におすすめの理由</p>
                  <ul className="text-sm text-[#666] space-y-1.5">
                    <li>・ 知名度No.1で利用者数が多く、安心感がある</li>
                    <li>・ 品質保証（再送保証）があり、傷んだ花が届いても対応してもらえる</li>
                    <li>・ SNSに口コミが多く、飾り方の参考情報が豊富</li>
                    <li>・ ポスト投函対応で、不在でも受け取れる</li>
                    <li>・ 全国200店舗以上の花屋が参加しており、多様なアレンジが届く</li>
                  </ul>
                </div>

                <div className="bg-[#FDF5F5] rounded-lg p-4 mb-5 border border-[#F0D0D0]">
                  <p className="text-sm font-bold text-[#333] mb-1">注意点</p>
                  <p className="text-sm text-[#666] leading-relaxed">
                    最低4回の受け取りが条件です。4回受け取り前に解約すると残り回数分の料金が発生します。
                    隔週の場合、約2か月間は継続することになります。
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/services/bloomee"
                    className="inline-block text-center bg-white text-[#4A7C59] font-bold text-sm px-6 py-3 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
                  >
                    bloomeeの詳細レビューを見る
                  </a>
                  <a
                    href="https://bloomee.jp"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-block text-center bg-[#4A7C59] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#3A6247] transition-colors shadow-sm"
                  >
                    bloomee公式サイトはこちら
                  </a>
                </div>
              </div>
            </div>

            {/* medelu - Runner Up */}
            <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
              <div className="px-5 py-4 bg-[#FFFBEB] border-b border-[#F59E0B] flex items-center gap-3">
                <span className="bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded">
                  コスパ重視ならこちら
                </span>
                <h3 className="text-lg font-bold text-[#333]">medelu（メデル）</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-[#666] leading-relaxed mb-5">
                  medeluは送料無料・回数縛りなしで、最も気軽に始められる花のサブスクです。
                  Miniプランは1回698円で業界最安水準。市場直送の仕組みにより中間コストを削減し、低価格と新鮮さを両立しています。
                  「まずは安く試してみたい」「合わなければすぐに解約したい」という方に最適です。
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                  <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                    <p className="text-xs text-[#999] mb-1">Miniプラン</p>
                    <p className="text-lg font-bold text-[#333]">698<span className="text-xs font-normal">円</span></p>
                  </div>
                  <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                    <p className="text-xs text-[#999] mb-1">送料</p>
                    <p className="text-lg font-bold text-[#4A7C59]">無料</p>
                  </div>
                  <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                    <p className="text-xs text-[#999] mb-1">1回あたり総額</p>
                    <p className="text-lg font-bold text-[#4A7C59]">698<span className="text-xs font-normal">円</span></p>
                  </div>
                  <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                    <p className="text-xs text-[#999] mb-1">花の本数</p>
                    <p className="text-lg font-bold text-[#333]">3本</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                  <div className="flex">
                    <span className="text-[#999] w-28 shrink-0">届き方</span>
                    <span className="text-[#333]">ポスト投函</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#999] w-28 shrink-0">配送頻度</span>
                    <span className="text-[#333]">毎週 / 隔週</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#999] w-28 shrink-0">回数縛り</span>
                    <span className="text-[#333]">なし</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#999] w-28 shrink-0">品質保証</span>
                    <span className="text-[#333]">あり</span>
                  </div>
                </div>

                <div className="bg-[#E8F0EB] rounded-lg p-4 mb-5">
                  <p className="text-sm font-bold text-[#4A7C59] mb-2">初心者におすすめの理由</p>
                  <ul className="text-sm text-[#666] space-y-1.5">
                    <li>・ 業界最安水準の698円/回（送料無料）で始められる</li>
                    <li>・ 回数縛りなしで、合わなければいつでも解約可能</li>
                    <li>・ 送料無料だから、表示価格＝支払い総額で分かりやすい</li>
                    <li>・ 市場直送で新鮮なお花が届く</li>
                    <li>・ スキップも自由にできる</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/services/medelu"
                    className="inline-block text-center bg-white text-[#4A7C59] font-bold text-sm px-6 py-3 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
                  >
                    medeluの詳細レビューを見る
                  </a>
                  <a
                    href="https://www.medelu.flowers"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-block text-center bg-[#4A7C59] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#3A6247] transition-colors shadow-sm"
                  >
                    medelu公式サイトはこちら
                  </a>
                </div>
              </div>
            </div>

            {/* Comparison Box */}
            <div className="mt-8 bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-4">2つのサービスの比較</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" style={{ minWidth: "480px" }}>
                  <thead>
                    <tr className="bg-[#E8F0EB]">
                      <th className="px-3 py-2 text-left font-medium text-[#333]">項目</th>
                      <th className="px-3 py-2 text-center font-medium text-[#333]">bloomee</th>
                      <th className="px-3 py-2 text-center font-medium text-[#333]">medelu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[#E5E5E5]">
                      <td className="px-3 py-2 text-[#666]">1回あたり総額</td>
                      <td className="px-3 py-2 text-center text-[#333]">1,365円</td>
                      <td className="px-3 py-2 text-center text-[#4A7C59] font-bold">698円</td>
                    </tr>
                    <tr className="border-t border-[#E5E5E5]">
                      <td className="px-3 py-2 text-[#666]">送料</td>
                      <td className="px-3 py-2 text-center text-[#333]">385円</td>
                      <td className="px-3 py-2 text-center text-[#4A7C59] font-bold">無料</td>
                    </tr>
                    <tr className="border-t border-[#E5E5E5]">
                      <td className="px-3 py-2 text-[#666]">回数縛り</td>
                      <td className="px-3 py-2 text-center text-[#333]">4回</td>
                      <td className="px-3 py-2 text-center text-[#4A7C59] font-bold">なし</td>
                    </tr>
                    <tr className="border-t border-[#E5E5E5]">
                      <td className="px-3 py-2 text-[#666]">品質保証</td>
                      <td className="px-3 py-2 text-center text-[#333]">あり</td>
                      <td className="px-3 py-2 text-center text-[#333]">あり</td>
                    </tr>
                    <tr className="border-t border-[#E5E5E5]">
                      <td className="px-3 py-2 text-[#666]">知名度</td>
                      <td className="px-3 py-2 text-center text-[#4A7C59] font-bold">No.1</td>
                      <td className="px-3 py-2 text-center text-[#333]">中程度</td>
                    </tr>
                    <tr className="border-t border-[#E5E5E5]">
                      <td className="px-3 py-2 text-[#666]">おすすめの人</td>
                      <td className="px-3 py-2 text-center text-[#666]">安心感重視</td>
                      <td className="px-3 py-2 text-center text-[#666]">コスパ重視</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* --- How to Display Flowers --- */}
        <section id="display-tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              届いたお花の飾り方ガイド
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              届いたお花を長く楽しむためのコツを、花瓶の選び方・水替え・置き場所の3つの観点で解説します。
            </p>

            {/* Vase Selection */}
            <div className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] p-5 mb-6">
              <h3 className="text-base font-bold text-[#333] mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4A7C59] text-white text-xs font-bold">1</span>
                花瓶の選び方
              </h3>
              <p className="text-sm text-[#666] leading-relaxed mb-4">
                花のサブスクで届くお花は3〜5本程度の小ぶりなブーケが多いため、大きな花瓶は必要ありません。
                口径5〜8cm、高さ15〜20cm程度の小さめの花瓶がちょうど良いサイズです。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-[#E5E5E5]">
                  <p className="text-sm font-bold text-[#333] mb-2">初心者向けの花瓶</p>
                  <ul className="text-sm text-[#666] space-y-1.5">
                    <li>・ 口が狭めのもの（花がまとまりやすい）</li>
                    <li>・ 透明なガラス製（水の汚れが分かりやすい）</li>
                    <li>・ 安定感のある底が広いもの</li>
                    <li>・ 100円ショップのもので十分</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-[#E5E5E5]">
                  <p className="text-sm font-bold text-[#333] mb-2">花瓶の代わりになるもの</p>
                  <ul className="text-sm text-[#666] space-y-1.5">
                    <li>・ グラスやコップ</li>
                    <li>・ 空き瓶（ジャムの瓶など）</li>
                    <li>・ マグカップ</li>
                    <li>・ ペットボトルの上部をカットしたもの</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Water Change */}
            <div className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] p-5 mb-6">
              <h3 className="text-base font-bold text-[#333] mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4A7C59] text-white text-xs font-bold">2</span>
                水替えのコツ
              </h3>
              <p className="text-sm text-[#666] leading-relaxed mb-4">
                水替えはお花を長持ちさせるために最も重要なお手入れです。
                毎日替えるのが理想ですが、最低でも2日に1回は行いましょう。
              </p>
              <div className="bg-white rounded-lg p-4 border border-[#E5E5E5]">
                <p className="text-sm font-bold text-[#333] mb-3">水替えの手順</p>
                <ol className="text-sm text-[#666] space-y-2">
                  <li>1. 花瓶から花を取り出す</li>
                  <li>2. 花瓶の内側をスポンジや指でさっと洗う（ぬめりを取る）</li>
                  <li>3. 茎の先端を1〜2cm斜めにカットする（水切り）</li>
                  <li>4. 新しい水を花瓶の半分〜7分目まで入れる</li>
                  <li>5. 枯れた花や変色した葉があれば取り除く</li>
                  <li>6. 花を戻す</li>
                </ol>
              </div>
              <div className="mt-4 bg-[#E8F0EB] rounded-lg p-4">
                <p className="text-sm font-bold text-[#4A7C59] mb-1">ワンポイント</p>
                <p className="text-sm text-[#666] leading-relaxed">
                  茎を切るときは、よく切れるハサミを使い、水の中で切る「水切り」がベストです。
                  切り口を斜めにすることで、水を吸い上げる面積が大きくなり、お花が長持ちします。
                  キッチンバサミでも代用できます。
                </p>
              </div>
            </div>

            {/* Placement */}
            <div className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-base font-bold text-[#333] mb-3 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4A7C59] text-white text-xs font-bold">3</span>
                置き場所の選び方
              </h3>
              <p className="text-sm text-[#666] leading-relaxed mb-4">
                お花を飾る場所によって、見た目の印象も花の持ちも変わります。
                適切な場所に飾ることで、お花をより長く楽しめます。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-[#E5E5E5]">
                  <p className="text-sm font-bold text-[#4A7C59] mb-2">おすすめの場所</p>
                  <ul className="text-sm text-[#666] space-y-1.5">
                    <li>・ リビングのテーブル</li>
                    <li>・ 玄関（帰宅時に目に入る）</li>
                    <li>・ ダイニングテーブル</li>
                    <li>・ 洗面台（朝の身支度が華やかに）</li>
                    <li>・ デスク周り（仕事中の癒し）</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 border border-[#E5E5E5]">
                  <p className="text-sm font-bold text-[#333] mb-2">避けたい場所</p>
                  <ul className="text-sm text-[#666] space-y-1.5">
                    <li>・ 直射日光が当たる窓際</li>
                    <li>・ エアコンの風が直接当たる場所</li>
                    <li>・ テレビやパソコンなど熱を発する家電の近く</li>
                    <li>・ 果物の近く（エチレンガスで花が傷む）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Common Mistakes --- */}
        <section id="mistakes" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              初心者がやりがちな失敗と対策
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花のサブスクを始めたばかりの方がやりがちな失敗パターンと、その対策をまとめました。
              事前に知っておくことで、快適にお花のある暮らしを始められます。
            </p>

            <div className="space-y-4">
              {mistakeData.map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                  <div className="px-5 py-4">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="bg-[#FDF5F5] text-[#C53030] text-xs font-bold px-2 py-1 rounded border border-[#F0D0D0] shrink-0">
                        NG
                      </span>
                      <p className="text-sm font-bold text-[#333]">{item.mistake}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="bg-[#E8F0EB] text-[#4A7C59] text-xs font-bold px-2 py-1 rounded border border-[#C5D9CB] shrink-0">
                        対策
                      </span>
                      <p className="text-sm text-[#666] leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスク初心者のよくある質問
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

        {/* --- Summary + CTA --- */}
        <section id="summary" className="py-12 md:py-16 bg-[#E8F0EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：初心者はbloomeeかmedeluから始めよう
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクは、申し込むだけで定期的にプロが選んだお花が届く便利なサービスです。
              お花屋さんに行く手間がなく、季節のお花との出会いを楽しめます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              初心者がサービスを選ぶ際は、料金（送料込みの総額）・配送方法・配送頻度・解約条件・品質保証の5点を確認しましょう。
              迷ったら、知名度と安心感のbloomee、コスパと気軽さのmedeluのどちらかから始めるのがおすすめです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              届いたお花は、こまめな水替えと適切な置き場所を心がけるだけで、5〜10日ほど楽しめます。
              まずは隔週配送でお花のある暮らしを体験してみてください。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              花のサブスクは「始めてみたら想像以上に良かった」という声が多いサービスです。
              この記事を参考に、あなたもお花のある暮らしを始めてみませんか。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/bloomee"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                bloomeeの詳細を見る
              </a>
              <a
                href="/services/medelu"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                medeluの詳細を見る
              </a>
            </div>
            <div className="mt-4 flex justify-center gap-4">
              <a
                href="/compare/cheap"
                className="inline-block text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline"
              >
                安い花のサブスクランキングを見る
              </a>
              <a
                href="/"
                className="inline-block text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline"
              >
                トップページに戻る
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-[#333] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <img src="/images/logo-flwdeli-a1-trimmed.png" alt="flowerデリ" className="h-12 w-auto brightness-0 invert opacity-80 mb-2" />
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
