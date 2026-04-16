"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "おしゃれな花のサブスクの選び方は？",
    a: "おしゃれさで選ぶなら、(1)花の組み合わせ・色合いのセンス、(2)パッケージや梱包のデザイン性、(3)SNSでの投稿写真の雰囲気、(4)花瓶やインテリアとの相性の4点をチェックしましょう。公式サイトやInstagramで実際に届いた花の写真を確認するのが最も確実です。",
  },
  {
    q: "インスタ映えする花のサブスクはどこですか？",
    a: "Instagramでの投稿数・いいね数で見ると、bloomeeがSNS人気No.1です。提携花屋200店以上のアレンジが届くため、毎回異なるテイストの写真が撮れます。AND PLANTSはプロのフローリストによるハイセンスなアレンジで、洗練された写真が撮りやすいのが特徴です。",
  },
  {
    q: "花のサブスクで届く花は自分で選べますか？",
    a: "多くのサービスではプロが旬の花をセレクトして届けるため、基本的に花の種類は選べません。ただし、AND PLANTSでは好みの色味やテイストの傾向を登録でき、それに基づいたアレンジが届きます。サプライズ感を楽しむのも花のサブスクの魅力の一つです。",
  },
  {
    q: "おしゃれに飾るためのおすすめの花瓶はありますか？",
    a: "透明なガラス製の花瓶が最も万能で、どんな花にも合います。茎の断面や水の清涼感が見えることで、写真映えも抜群です。陶器やマットな質感の花瓶はナチュラルな雰囲気に、金属製のフラワーベースはモダンなインテリアに合います。複数の花瓶を使い分けると、飾り方の幅が広がります。",
  },
  {
    q: "花のサブスクはプレゼントとして贈れますか？",
    a: "はい、多くのサービスがギフト対応しています。AND PLANTSはギフト用のラッピングや観葉植物のギフトにも対応しています。bloomeeもギフトプランがあり、相手の住所に直接届けることが可能です。おしゃれなパッケージで届くため、贈り物として喜ばれるでしょう。",
  },
  {
    q: "賃貸のワンルームでもおしゃれに飾れますか？",
    a: "もちろん飾れます。小さなテーブルや窓辺、キッチンカウンターなど、わずかなスペースがあれば十分です。bloomeeの体験プランは3本程度の少量で届くため、小さな花瓶でコンパクトに飾れます。壁掛けのフラワーベースやドライフラワーとして吊るす方法も、狭い空間を有効活用するテクニックです。",
  },
  {
    q: "届いた花をおしゃれに長持ちさせるコツはありますか？",
    a: "到着後すぐに茎を斜めにカットし、清潔な水に入れることが基本です。水は毎日交換し、水に浸かる部分の葉は取り除きましょう。直射日光やエアコンの風が直接当たる場所は避け、涼しい場所に置くと長持ちします。栄養剤を使うと花の持ちが1.5倍ほど延びることもあります。",
  },
  {
    q: "花のサブスクとドライフラワーを組み合わせるのはアリですか？",
    a: "非常におすすめの組み合わせです。サブスクで届いた生花を楽しんだ後、ドライフラワーにして飾り続けることで、部屋に常に花がある暮らしを実現できます。特にバラ、アジサイ、スターチスなどはドライフラワーにしやすい花です。生花とドライフラワーを並べて飾ると、空間に奥行きが生まれます。",
  },
];

/* ─── Ranking Data ─── */
const rankingData = [
  {
    rank: 1,
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    plan: "Standardプラン",
    price: 1980,
    shipping: 0,
    total: 1980,
    shippingLabel: "無料",
    flowers: "4〜6本",
    delivery: "宅配便（専用ボックス）",
    frequency: "隔週 / 月1回",
    minOrders: "なし",
    quality: "あり",
    style: "洗練・モダン",
    url: "/services/and-plants",
    officialUrl: "https://andplants.jp",
    highlight: "プロのフローリストによるハイセンスなセレクト。独自デザインの梱包ボックス。観葉植物も取り扱い。送料無料。",
    bestFor: "インテリアにこだわる方、洗練されたアレンジを求める方、観葉植物にも興味がある方",
    detail: "AND PLANTSは、プロのフローリストが旬の花を一つひとつセレクトしてアレンジするサービスです。最大の特徴は「見せることを意識したデザイン性」にあります。独自開発の梱包ボックスは花が傷みにくい設計でありながら、届いた瞬間の開封体験にもこだわっています。4〜6本のボリュームある花束が届き、そのまま花瓶に活けるだけで様になります。切り花だけでなく観葉植物のサブスクも展開しており、グリーンインテリア全体をトータルコーディネートできるのも他にない強みです。回数縛りなし、送料無料で気軽に始められます。",
    stylePoints: [
      "フローリストが色合い・質感のバランスを計算したアレンジ",
      "ニュアンスカラーやくすみ系の色合いが得意",
      "SNS映えだけでなく、部屋に溶け込むナチュラルな美しさ",
      "観葉植物と組み合わせた統一感のあるインテリアが実現",
    ],
  },
  {
    rank: 2,
    name: "bloomee",
    nameJa: "ブルーミー",
    plan: "レギュラープラン",
    price: 1580,
    shipping: 385,
    total: 1965,
    shippingLabel: "385円",
    flowers: "4本以上",
    delivery: "ポスト投函 / 宅配便",
    frequency: "毎週 / 隔週",
    minOrders: "4回",
    quality: "あり（再送保証）",
    style: "多彩・華やか",
    url: "/services/bloomee",
    officialUrl: "https://bloomee.jp",
    highlight: "SNS投稿数No.1。全国200店以上の提携花屋が手がける多彩なアレンジ。累計3,000万本以上の実績。",
    bestFor: "毎回違うテイストを楽しみたい方、SNSに花の投稿をしたい方、知名度と安心感を重視する方",
    detail: "bloomeeは日本最大級の花のサブスクサービスで、Instagramでの投稿数は業界トップクラスです。最大の特徴は、全国200店舗以上の提携花屋がアレンジを担当する点にあります。毎回異なる花屋からアレンジが届くため、和風・洋風・ナチュラル・ポップなど多彩なテイストの花を楽しめます。レギュラープランは4本以上のお花が届き、体験プラン（980円＋送料385円）よりもボリュームと華やかさがアップします。品質保証（再送保証）制度があるため、万が一傷んだ花が届いても安心です。SNSでの情報量が豊富なため、他のユーザーの飾り方を参考にできるのも利点です。ただし4回の最低受け取り回数がある点にはご注意ください。",
    stylePoints: [
      "200店以上の花屋による多彩なアレンジスタイル",
      "毎回異なるテイストで「開けてみるまでわからない」サプライズ感",
      "SNSに投稿写真が豊富で、飾り方の参考になる",
      "季節のイベントに合わせた限定アレンジも",
    ],
  },
  {
    rank: 3,
    name: "日本総合園芸",
    nameJa: "にほんそうごうえんげい",
    plan: "プレミアムプラン",
    price: 3300,
    shipping: null,
    total: null,
    shippingLabel: "別途（地域による）",
    flowers: "プロのアレンジ花束",
    delivery: "手渡し / 宅配便",
    frequency: "月1回 / 月2回",
    minOrders: "なし",
    quality: "あり",
    style: "格式・本格派",
    url: "/services/nihon-sogo-engei",
    officialUrl: "https://nihon-sogo-engei.co.jp",
    highlight: "プロのフローリストが一つひとつ手作りする本格アレンジ。ボリューム満点の花束。手渡し配送対応。",
    bestFor: "本格的な花の美しさを求める方、来客時に映えるアレンジが欲しい方、手渡しで確実に受け取りたい方",
    detail: "日本総合園芸は、長年の実績を持つ花のプロフェッショナル集団が運営するサービスです。プレミアムプランでは、経験豊富なフローリストが一つひとつ丁寧にアレンジした花束が届きます。ボリュームは他サービスと比較しても圧倒的で、玄関やリビングに飾ると空間が一気に華やぎます。最大の特徴は「手渡し配送」に対応している点です。配送員が直接玄関先まで届けてくれるため、花が傷むリスクが最も少ない配送方法といえます。ポスト投函では不安のある大きなアレンジやデリケートな花材も、手渡しなら安心して受け取れます。価格帯はやや高めですが、その分の品質とボリュームは確かです。",
    stylePoints: [
      "フローリストの技術が光る立体的で美しいアレンジメント",
      "高品質な花材をふんだんに使ったボリューム感",
      "手渡し配送で花の鮮度と形を最高の状態でキープ",
      "来客時やパーティーシーンでも見劣りしない格式",
    ],
  },
];

/* ─── Main Component ─── */
export default function OshareGuidePage() {
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
                  <span className="text-[#666]">ガイド記事</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">おしゃれな花サブスクおすすめ</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-gradient-to-b from-[#FDF2F8] to-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#C2567E] font-medium mb-3 tracking-wide">
              花のサブスク おしゃれ特集
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              おしゃれな花サブスクおすすめ3選<br className="hidden md:block" />
              インスタ映えするセンスの良いサービス
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              「せっかく花のサブスクを始めるなら、おしゃれなサービスを選びたい」と思っていませんか。
              この記事では、デザイン性・アレンジのセンス・SNS映えの観点から、スタイルにこだわる方に特におすすめの3サービスを厳選してご紹介します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">厳選サービス</p>
                <p className="text-xl font-bold text-[#4A7C59]">3サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安価格帯</p>
                <p className="text-xl font-bold text-[#4A7C59]">980円〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">送料無料</p>
                <p className="text-xl font-bold text-[#4A7C59]">1サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">SNS人気</p>
                <p className="text-xl font-bold text-[#C2567E]">No.1掲載</p>
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
                  <li><a href="#what-is-stylish" className="hover:text-[#4A7C59] transition-colors">1. おしゃれな花のサブスクとは？選び方の基準</a></li>
                  <li><a href="#ranking-table" className="hover:text-[#4A7C59] transition-colors">2. おしゃれな花サブスク3選 比較表</a></li>
                  <li><a href="#ranking-detail" className="hover:text-[#4A7C59] transition-colors">3. 各サービスの詳細レビュー</a></li>
                  <li><a href="#instagram-tips" className="hover:text-[#4A7C59] transition-colors">4. 届いた花をインスタ映えさせる撮影・飾り方テクニック</a></li>
                  <li><a href="#room-coordination" className="hover:text-[#4A7C59] transition-colors">5. お部屋のテイスト別コーディネート術</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">6. おしゃれな花サブスクに関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">7. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── What Makes It Stylish ─── */}
        <section id="what-is-stylish" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              おしゃれな花のサブスクとは？選び方の基準
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花のサブスクは数多くありますが、「おしゃれ」と感じるかどうかはサービスによって大きく異なります。
              単に花が届くだけではなく、色合いの計算、花材の組み合わせ、梱包のデザイン性まで含めてトータルで評価することが重要です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              ここでは、おしゃれな花のサブスクを見極めるための5つのチェックポイントをご紹介します。
            </p>

            <div className="space-y-4">
              <div className="bg-[#FDF2F8] rounded-xl p-5 border border-[#F5D0E0]">
                <h3 className="text-sm font-bold text-[#C2567E] mb-2">1. アレンジのセンス・色合い</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  プロのフローリストがアレンジを手がけているか、色のトーンに統一感があるかが重要です。
                  くすみカラーやニュアンスカラーを取り入れたアレンジは、今のインテリアトレンドとも相性が良く、写真映えもします。
                </p>
              </div>
              <div className="bg-[#FDF2F8] rounded-xl p-5 border border-[#F5D0E0]">
                <h3 className="text-sm font-bold text-[#C2567E] mb-2">2. パッケージ・梱包のデザイン</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  届いた瞬間の「開封体験」もおしゃれさの一部です。
                  オリジナルデザインのボックスやペーパー、ブランドロゴ入りのラッピングなど、細部にまでこだわりがあるサービスは満足度が高くなります。
                </p>
              </div>
              <div className="bg-[#FDF2F8] rounded-xl p-5 border border-[#F5D0E0]">
                <h3 className="text-sm font-bold text-[#C2567E] mb-2">3. SNSでの評判・投稿の雰囲気</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  InstagramやXでの投稿を見ると、実際に届く花の雰囲気がよくわかります。
                  投稿数が多いサービスほど飾り方の参考例も豊富で、自分の理想のスタイルをイメージしやすくなります。
                </p>
              </div>
              <div className="bg-[#FDF2F8] rounded-xl p-5 border border-[#F5D0E0]">
                <h3 className="text-sm font-bold text-[#C2567E] mb-2">4. 花瓶・インテリアとの相性</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  どんなにきれいな花でも、部屋のインテリアと合わなければおしゃれには見えません。
                  届く花のボリュームやスタイルが、自分の持っている花瓶や部屋のテイストに合うかを事前に確認しましょう。
                </p>
              </div>
              <div className="bg-[#FDF2F8] rounded-xl p-5 border border-[#F5D0E0]">
                <h3 className="text-sm font-bold text-[#C2567E] mb-2">5. 花以外のトータル提案力</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花だけでなく、観葉植物やドライフラワー、花瓶のセット販売など、暮らし全体をスタイリングする提案があるサービスは、
                  おしゃれな空間づくりを一歩進めてくれます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Ranking Table ─── */}
        <section id="ranking-table" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              おしゃれな花サブスク3選 比較表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              デザイン性・アレンジのセンス・SNSでの評判を総合的に評価し、おしゃれさで選ぶ方におすすめの3サービスを比較しました。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm" style={{ minWidth: "700px" }}>
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">順位</th>
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-left font-medium">プラン</th>
                    <th className="px-4 py-3 text-right font-medium">料金</th>
                    <th className="px-4 py-3 text-right font-medium">送料</th>
                    <th className="px-4 py-3 text-center font-medium">花の本数</th>
                    <th className="px-4 py-3 text-center font-medium">スタイル</th>
                    <th className="px-4 py-3 text-center font-medium">配送方法</th>
                  </tr>
                </thead>
                <tbody>
                  {rankingData.map((item, i) => (
                    <tr key={i} className={`border-t border-[#E5E5E5] ${i === 0 ? "bg-[#FDF2F8]" : ""}`}>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          i === 0 ? "bg-[#C2567E] text-white" :
                          i === 1 ? "bg-[#9CA3AF] text-white" :
                          "bg-[#B45309] text-white"
                        }`}>
                          {item.rank}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <a href={item.url} className="font-bold text-[#4A7C59] hover:underline">
                          {item.name}
                        </a>
                        <p className="text-xs text-[#999]">{item.nameJa}</p>
                      </td>
                      <td className="px-4 py-4 text-[#666]">{item.plan}</td>
                      <td className="px-4 py-4 text-right text-[#333]">{item.price.toLocaleString()}円</td>
                      <td className="px-4 py-4 text-right">
                        {item.shipping === 0 ? (
                          <span className="text-[#4A7C59] font-medium">無料</span>
                        ) : item.shipping ? (
                          <span className="text-[#666]">{item.shipping}円</span>
                        ) : (
                          <span className="text-xs text-[#999]">別途</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-[#666]">{item.flowers}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="inline-block bg-[#FDF2F8] text-[#C2567E] text-xs font-medium px-2 py-0.5 rounded">
                          {item.style}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center text-[#666] text-xs">{item.delivery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">表の補足</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 表示価格はすべて税込です</li>
                <li>・ bloomeeの体験プラン（980円＋送料385円）でも始められますが、おしゃれさ重視ならレギュラープラン以上がおすすめです</li>
                <li>・ 日本総合園芸の送料は地域によって異なります</li>
                <li>・ 2026年4月時点の情報です。最新の料金は各公式サイトでご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Ranking Detail ─── */}
        <section id="ranking-detail" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              各サービスの詳細レビュー
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              おしゃれさで選ぶ3サービスそれぞれの、デザインの特徴・届く内容・おすすめの人を詳しく解説します。
            </p>

            <div className="space-y-8">
              {rankingData.map((item) => (
                <div key={item.rank} className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] overflow-hidden">
                  {/* Service Header */}
                  <div className={`px-5 py-4 flex items-center gap-3 ${item.rank === 1 ? "bg-[#FDF2F8] border-b border-[#F5D0E0]" : "bg-[#E8F0EB] border-b border-[#C5D9CB]"}`}>
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold ${
                      item.rank === 1 ? "bg-[#C2567E] text-white" :
                      item.rank === 2 ? "bg-[#9CA3AF] text-white" :
                      "bg-[#B45309] text-white"
                    }`}>
                      {item.rank}位
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#333]">
                        {item.name}（{item.nameJa}）{item.plan}
                      </h3>
                      <p className="text-sm text-[#666]">{item.highlight}</p>
                    </div>
                  </div>

                  {/* Service Detail */}
                  <div className="p-5">
                    {/* Price Breakdown */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">料金</p>
                        <p className="text-lg font-bold text-[#333]">{item.price.toLocaleString()}<span className="text-xs font-normal">円</span></p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">送料</p>
                        <p className="text-lg font-bold text-[#333]">
                          {item.shipping === 0 ? (
                            <span className="text-[#4A7C59]">無料</span>
                          ) : item.shipping ? (
                            <>{item.shipping}<span className="text-xs font-normal">円</span></>
                          ) : (
                            <span className="text-sm">別途</span>
                          )}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">1回あたり総額</p>
                        <p className="text-lg font-bold text-[#4A7C59]">
                          {item.total ? (
                            <>{item.total.toLocaleString()}<span className="text-xs font-normal">円</span></>
                          ) : (
                            <span className="text-sm">{item.price.toLocaleString()}円＋送料</span>
                          )}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">花の本数</p>
                        <p className="text-lg font-bold text-[#333]">{item.flowers}</p>
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">届き方</span>
                        <span className="text-[#333]">{item.delivery}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">配送頻度</span>
                        <span className="text-[#333]">{item.frequency}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">回数縛り</span>
                        <span className="text-[#333]">{item.minOrders}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">品質保証</span>
                        <span className="text-[#333]">{item.quality}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#666] leading-relaxed mb-5">
                      {item.detail}
                    </p>

                    {/* Style Points */}
                    <div className="bg-[#FDF2F8] rounded-lg p-4 mb-5 border border-[#F5D0E0]">
                      <p className="text-sm font-bold text-[#C2567E] mb-3">おしゃれポイント</p>
                      <ul className="text-sm text-[#666] space-y-2">
                        {item.stylePoints.map((point, idx) => (
                          <li key={idx}>・ {point}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Best For */}
                    <div className="bg-[#E8F0EB] rounded-lg p-4 mb-5">
                      <p className="text-sm">
                        <span className="font-bold text-[#4A7C59]">こんな人におすすめ：</span>
                        <span className="text-[#666]">{item.bestFor}</span>
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={item.url}
                        className="inline-block text-center bg-white text-[#4A7C59] font-bold text-sm px-6 py-3 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
                      >
                        {item.name}の詳細レビューを見る
                      </a>
                      <a
                        href={item.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-block text-center bg-[#4A7C59] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#3A6247] transition-colors shadow-sm"
                      >
                        {item.name}公式サイトはこちら
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Instagram Tips ─── */}
        <section id="instagram-tips" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#C2567E]">
              届いた花をインスタ映えさせる撮影・飾り方テクニック
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              せっかくおしゃれな花が届いても、飾り方や撮影方法次第で印象は大きく変わります。
              ここでは、花のサブスクで届いた花をより魅力的に見せるためのテクニックをご紹介します。
            </p>

            <div className="space-y-6">
              {/* Tip 1 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">自然光を活かす撮影がポイント</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花の写真は自然光が最も美しく仕上がります。窓辺に花を置き、午前中の柔らかい光で撮影するのがベストです。
                  直射日光は影が強くなりすぎるため、レースカーテン越しの光がおすすめです。
                  蛍光灯やLEDライトの下では花の色味が変わってしまうため、できるだけ自然光の時間帯に撮影しましょう。
                </p>
              </div>

              {/* Tip 2 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">背景をシンプルに統一する</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花を主役にするためには、背景のごちゃつきを排除することが重要です。
                  白い壁、木目のテーブル、大理石調のプレートなど、シンプルな背景を選びましょう。
                  布（リネンやコットン）を敷くだけでも写真の雰囲気が格上げされます。
                  生活感のあるものが映り込まないよう、撮影前に周囲を整理することも忘れずに。
                </p>
              </div>

              {/* Tip 3 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">花瓶の選び方で印象が変わる</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  透明なガラス花瓶は万能ですが、花の色に合わせて花瓶を選ぶとさらに統一感が出ます。
                  パステルカラーの花にはマットな白い陶器、ビビッドな花にはシンプルなクリアガラス、
                  グリーン系にはブラウンやテラコッタの素材がよく合います。
                  一輪挿しを複数並べるテクニックは、少量の花でもおしゃれに見せられる方法としておすすめです。
                </p>
              </div>

              {/* Tip 4 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">小物を添えて世界観をつくる</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花だけでなく、本・キャンドル・コーヒーカップなどの小物を一緒に配置すると、
                  暮らしの一場面を切り取ったような雰囲気のある写真になります。
                  ただし小物は1〜2点に抑え、花を主役にすることがポイントです。
                  色のトーンを花と揃えると、全体のまとまりが良くなります。
                </p>
              </div>

              {/* Tip 5 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">真上からのアングルを活用する</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花を真上（フラットレイ）から撮影すると、花びらの美しさが際立ちます。
                  特にバラやラナンキュラスなど花びらが幾重にも重なる花は、真上からのアングルで本領を発揮します。
                  斜め45度の角度は花束全体のボリューム感を伝えたい時に最適です。
                  複数のアングルで撮影して、最も映える1枚を選びましょう。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Room Coordination ─── */}
        <section id="room-coordination" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              お部屋のテイスト別コーディネート術
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花のサブスクで届いた花を、自分の部屋のインテリアに合わせておしゃれに飾る方法をテイスト別にご紹介します。
            </p>

            <div className="space-y-6">
              {/* Natural */}
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C5D9CB]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold px-2 py-1 rounded">ナチュラル</span>
                  <h3 className="text-base font-bold text-[#333]">木目調・北欧風のお部屋に</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  白やグリーンを基調としたナチュラルカラーの花が最も相性が良いです。
                  ユーカリやかすみ草などのグリーン系をメインに、差し色として淡いピンクやイエローを加えると
                  北欧インテリアに自然に溶け込みます。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#999] mb-1">おすすめサービス</p>
                  <p className="text-sm text-[#666]">
                    <span className="font-bold text-[#4A7C59]">AND PLANTS</span> -- ニュアンスカラーのアレンジと観葉植物の組み合わせが得意
                  </p>
                </div>
              </div>

              {/* Modern */}
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#333] text-white text-xs font-bold px-2 py-1 rounded">モダン</span>
                  <h3 className="text-base font-bold text-[#333]">モノトーン・シンプルなお部屋に</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  白やグレーを基調としたモダンな空間には、ビビッドな赤やオレンジの花がアクセントとして映えます。
                  逆に、白い花だけでまとめるとスタイリッシュで洗練された印象になります。
                  花瓶はガラスやステンレスなど無機質な素材を選ぶと統一感が出ます。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#999] mb-1">おすすめサービス</p>
                  <p className="text-sm text-[#666]">
                    <span className="font-bold text-[#4A7C59]">AND PLANTS</span> -- 洗練されたセレクトでモダン空間との相性が抜群
                  </p>
                </div>
              </div>

              {/* Feminine */}
              <div className="bg-[#FDF2F8] rounded-xl p-5 border border-[#F5D0E0]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#C2567E] text-white text-xs font-bold px-2 py-1 rounded">フェミニン</span>
                  <h3 className="text-base font-bold text-[#333]">ピンク・ホワイト基調のお部屋に</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  ピンクのバラ、ラナンキュラス、トルコキキョウなど華やかな花が良く合います。
                  花びらのボリュームがある花を選ぶと、フェミニンなインテリアがさらに華やぎます。
                  パールホワイトやゴールドの花瓶を合わせると、より上品な空間に仕上がります。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#999] mb-1">おすすめサービス</p>
                  <p className="text-sm text-[#666]">
                    <span className="font-bold text-[#4A7C59]">bloomee</span> -- 多彩な花屋のアレンジで華やかなスタイルが豊富
                  </p>
                </div>
              </div>

              {/* Classic */}
              <div className="bg-[#F8F5F0] rounded-xl p-5 border border-[#E5DDD0]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#8B6914] text-white text-xs font-bold px-2 py-1 rounded">クラシック</span>
                  <h3 className="text-base font-bold text-[#333]">格式高い・上品なお部屋に</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  深い赤のバラ、白いカサブランカ、紫のトルコキキョウなど、格式のある花材が最適です。
                  ボリュームのある花束をリビングや玄関に飾ると、ホテルのロビーのような上質な空間を演出できます。
                  陶器や真鍮の花器と合わせると、クラシカルな雰囲気が引き立ちます。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#999] mb-1">おすすめサービス</p>
                  <p className="text-sm text-[#666]">
                    <span className="font-bold text-[#4A7C59]">日本総合園芸</span> -- プロのアレンジとボリュームで格式ある空間を演出
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              おしゃれな花サブスクに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#FDF2F8] transition-colors text-left"
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
                    <div className="px-5 py-4 bg-white border-t border-[#E5E5E5]">
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
        <section id="summary" className="py-12 md:py-16 bg-gradient-to-b from-[#E8F0EB] to-[#FDF2F8]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：おしゃれさで選ぶならAND PLANTSが最有力
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              おしゃれな花のサブスクを比較した結果、デザイン性・アレンジのセンス・トータル提案力の面でAND PLANTS（アンドプランツ）が最もおすすめです。
              プロのフローリストによる洗練されたセレクト、独自デザインの梱包、観葉植物まで含めたトータルコーディネートが可能な点は、他サービスにない強みです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              SNSでの投稿を楽しみたい方にはbloomee（ブルーミー）がおすすめです。
              200店以上の提携花屋から届く多彩なアレンジは、毎回違う写真が撮れる楽しさがあります。
              InstagramやXでの投稿事例も豊富で、飾り方の参考にしやすいのも利点です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              本格的な花の美しさとボリュームを求めるなら、日本総合園芸のプレミアムプランが最適です。
              手渡し配送で最高の状態で届く花束は、来客時やパーティーシーンでも映える格式があります。
              自分のライフスタイルやインテリアのテイストに合わせて、最適なサービスを選んでみてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/and-plants"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                1位 AND PLANTSの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                2位 bloomeeの詳細を見る
              </a>
              <a
                href="/services/nihon-sogo-engei"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                3位 日本総合園芸の詳細を見る
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
            <p className="text-xs text-gray-500 mt-4">
              &copy; 2026 flowerデリ All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
