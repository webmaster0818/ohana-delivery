"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "仏花に向かない花はありますか？",
    a: "バラなどトゲのある花は仏花には不向きとされています。また、毒のある花（彼岸花、スズラン等）や香りが強すぎる花も避けるのが一般的です。ただし、故人が好きだった花であればトゲを取り除いて供えることもあります。宗派や地域の慣習によっても異なるため、気になる場合はお寺に確認するとよいでしょう。",
  },
  {
    q: "月命日に合わせて届けてもらえますか？",
    a: "定期便サービスの多くは「毎週」「隔週」「月1回」といった配送頻度の選択が可能ですが、特定の日付指定ができるサービスは限られます。月命日に合わせたい場合は、月1回配送を選び、届いた花を月命日まで涼しい場所で保管する方法が現実的です。medeluやbloomeeではスキップ機能があるため、配送タイミングの調整がしやすいです。",
  },
  {
    q: "仏花は1対（2束）必要ですか？",
    a: "正式には仏壇の左右に1束ずつ、計2束（1対）を供えるのが基本です。ただし、小さな仏壇や現代的な仏壇では1束だけ飾る方も増えています。定期便で届く花を1束として、もう1束は近くの花屋やスーパーで購入して補うという使い方もあります。無理のない範囲で供えることが大切です。",
  },
  {
    q: "定期便の花はそのまま仏壇に供えられますか？",
    a: "定期便で届く花は基本的にそのまま花瓶に飾る用途のアレンジです。仏花として供える場合は、届いた花の中から仏花に適したもの（菊、カーネーション、スターチスなど）を選び、仏壇用の花立に合わせて茎の長さを切りそろえてお供えください。medeluのNATURALコースやANYROOMコースは落ち着いた色合いの花が多く、仏花にもアレンジしやすいです。",
  },
  {
    q: "夏場でも仏花は長持ちしますか？",
    a: "夏場は気温が高く花が傷みやすいため、通常より花持ちが短くなります。対策としては、こまめな水替え（毎日が理想）、切り花延命剤の使用、エアコンの風が直接当たらない涼しい場所に仏壇を置くことが有効です。また、菊やスターチスなど暑さに比較的強い花を選ぶのもポイントです。定期便なら定期的に新しい花が届くため、夏場でも常に新鮮な花をお供えできます。",
  },
  {
    q: "お盆やお彼岸用の特別な仏花は届きますか？",
    a: "一般的な花の定期便はお盆・お彼岸専用の仏花アレンジには対応していません。ただし、通常の定期便で届く花を仏花としてアレンジすることは可能です。お盆やお彼岸に特別な仏花が必要な場合は、通常の定期便に加えて花屋やオンラインショップで仏花セットを別途購入することをおすすめします。",
  },
];

/* ─── Main Component ─── */
export default function ButsudanGuidePage() {
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
                  <span className="text-[#666]">ガイド</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">仏花の定期便おすすめ</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              仏花ガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              仏花の定期便おすすめ3選<br className="hidden md:block" />
              仏壇のお花を手軽にお届け【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              仏壇にお供えするお花を定期的に届けてくれる「仏花の定期便」。
              忙しい毎日でも、いつも新鮮で美しいお花を仏壇に飾ることができます。
              この記事では、仏花に適した定期便サービスを厳選してご紹介します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">おすすめ</p>
                <p className="text-xl font-bold text-[#4A7C59]">厳選3サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安価格</p>
                <p className="text-xl font-bold text-[#4A7C59]">698円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">送料無料あり</p>
                <p className="text-xl font-bold text-[#4A7C59]">medelu</p>
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
                  <li><a href="#what-is" className="hover:text-[#4A7C59] transition-colors">1. 仏花の定期便とは？</a></li>
                  <li><a href="#flowers" className="hover:text-[#4A7C59] transition-colors">2. 仏花に適した花の種類</a></li>
                  <li><a href="#how-to-choose" className="hover:text-[#4A7C59] transition-colors">3. 仏花の定期便を選ぶポイント</a></li>
                  <li><a href="#comparison" className="hover:text-[#4A7C59] transition-colors">4. おすすめサービス比較3選</a></li>
                  <li><a href="#tips" className="hover:text-[#4A7C59] transition-colors">5. 仏花を長持ちさせるコツ</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">6. よくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">7. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── What is 仏花の定期便 ─── */}
        <section id="what-is" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              仏花の定期便とは？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              仏花の定期便とは、仏壇にお供えするお花を定期的に自宅まで届けてくれるサービスです。花屋やスーパーに買いに行く手間がなくなり、いつでも新鮮なお花を仏壇にお供えできるのが最大のメリットです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              特に、ご高齢で外出が難しい方、仕事が忙しくて花屋に立ち寄る時間がない方、遠方に住んでいてご実家の仏壇のお花を気にかけている方などに重宝されています。近年では、お花のサブスクリプションサービスの普及に伴い、仏花にも対応したサービスが増えてきました。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              一般的なお花の定期便サービスでは、仏花専用のプランは設けていないことが多いですが、届くお花の中から仏花に適した花を選んでお供えしたり、落ち着いた色味のコースを選択したりすることで、仏花としても十分活用できます。
            </p>
            <div className="bg-[#F8F8F8] rounded-xl p-5 mt-6">
              <h3 className="text-sm font-bold text-[#333] mb-3">仏花の定期便はこんな方におすすめ</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] mt-0.5 shrink-0">--</span>
                  <span>忙しくて花屋に行く時間がない方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] mt-0.5 shrink-0">--</span>
                  <span>ご高齢で外出が大変な方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] mt-0.5 shrink-0">--</span>
                  <span>いつも新鮮な花を仏壇に供えたい方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] mt-0.5 shrink-0">--</span>
                  <span>仏花選びに迷ってしまう方</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] mt-0.5 shrink-0">--</span>
                  <span>遠方のご実家に花を届けたい方</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Suitable Flowers ─── */}
        <section id="flowers" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              仏花に適した花の種類
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              仏花にはどのような花が適しているのでしょうか。伝統的に仏花に使われる花の種類と、その理由をご紹介します。仏花選びの参考にしてください。
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  name: "菊（きく）",
                  desc: "仏花の定番で最もポピュラーな花です。花持ちが非常に良く、1〜2週間以上持つことも。白・黄色・紫など色のバリエーションも豊富で、どの宗派でも使えます。小菊やスプレー菊も仏花によく使われます。",
                },
                {
                  name: "カーネーション",
                  desc: "菊に次いで仏花に多く使われる花です。花持ちが良く、白やピンクなど柔らかい色合いが仏壇に映えます。トゲがないため扱いやすく、一年を通して安定的に入手できるのも利点です。",
                },
                {
                  name: "スターチス",
                  desc: "ドライフラワーにもなるほど花持ちが良いのが特徴です。紫・ピンク・白など色も豊富で、仏花のアクセントとして重宝します。乾燥しても色が褪せにくいため、長くお供えしたい場合にも適しています。",
                },
                {
                  name: "百合（ゆり）",
                  desc: "格式高い印象があり、法事やお葬式でもよく使われます。白い百合は清楚で厳かな雰囲気を演出します。ただし花粉が多いため、花粉を取り除いてからお供えすると仏壇や仏具が汚れにくくなります。",
                },
                {
                  name: "りんどう",
                  desc: "秋の仏花としてよく使われる花です。紫や青の花が仏壇に落ち着いた雰囲気を添えます。花持ちも比較的良く、秋のお彼岸の時期にぴったりです。",
                },
                {
                  name: "トルコキキョウ",
                  desc: "上品で華やかな見た目が特徴。白や紫のトルコキキョウは仏花にもよく合います。花持ちも1週間以上と長く、近年仏花としての人気が高まっている花のひとつです。",
                },
              ].map((flower, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <h3 className="text-base font-bold text-[#4A7C59] mb-2">{flower.name}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{flower.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#FDF5F5] rounded-xl p-5 mt-6 border border-[#E0B8B8]">
              <h3 className="text-sm font-bold text-[#E0B8B8] mb-2">仏花に避けた方がよい花</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                トゲのある花（バラなど）、毒のある花（彼岸花、スズラン、水仙など）、香りが強すぎる花は一般的に仏花には不向きとされています。ただし、故人がバラを好きだった場合はトゲを取って供えるなど、心を込めてお供えすることが最も大切です。
              </p>
            </div>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section id="how-to-choose" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              仏花の定期便を選ぶ4つのポイント
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              仏花用に花の定期便を利用する場合、通常のインテリア用途とは選び方が少し異なります。以下の4つのポイントを意識して、ご自身の状況に合ったサービスを選びましょう。
            </p>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "配送頻度 ─ 仏花の交換サイクルに合わせる",
                  text: "仏花は一般的に1〜2週間で交換するのが理想的です。菊などの花持ちの良い花であれば2週間程度持ちますが、夏場は1週間が目安。隔週配送が選べるサービスであれば、無駄なく仏花を新鮮に保てます。月命日や法事に合わせたい場合は、スキップ機能のあるサービスが便利です。",
                },
                {
                  num: "2",
                  title: "花持ちの良さ ─ 鮮度と品質が重要",
                  text: "仏花は長く飾るものなので、花持ちの良さは重要な判断基準です。農家直送や市場直送のサービスは、花屋を経由しないぶん鮮度が高く、花持ちが良い傾向があります。また、品質保証制度があるサービスを選んでおくと、万が一傷んだ花が届いた場合にも安心です。",
                },
                {
                  num: "3",
                  title: "花の色味・スタイル ─ 落ち着いた色合いを選ぶ",
                  text: "仏花には白・黄色・紫・ピンクなど、落ち着いた色合いの花が適しています。華やかすぎるアレンジや原色の花は仏壇には不向きな場合があります。medeluのNATURALコースやANYROOMコースのように、ナチュラルで落ち着いた雰囲気のコースを選ぶと仏花に適した花が届きやすいです。",
                },
                {
                  num: "4",
                  title: "価格と送料 ─ 継続しやすいコストか",
                  text: "仏花は継続的にお供えするものなので、長く続けられる価格帯のサービスを選ぶことが大切です。花代だけでなく送料も含めた総額で比較しましょう。medeluは送料無料で698円〜と手頃で、長期的なコストを抑えやすいサービスです。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#333] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Service Comparison ─── */}
        <section id="comparison" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              仏花におすすめの定期便サービス3選
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              仏花に適した花の定期便サービスを3つ厳選しました。価格・花持ち・配送方法などを比較して、ご自身に合ったサービスを見つけてください。
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">比較項目</th>
                    <th className="px-4 py-3 text-center font-medium">bloomee</th>
                    <th className="px-4 py-3 text-center font-medium">medelu</th>
                    <th className="px-4 py-3 text-center font-medium">花の定期便<br />(日本総合園芸)</th>
                  </tr>
                </thead>
                <tbody className="text-[#666]">
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="px-4 py-3 font-medium text-[#333]">最安価格</td>
                    <td className="px-4 py-3 text-center">980円/回</td>
                    <td className="px-4 py-3 text-center font-bold text-[#4A7C59]">698円/回</td>
                    <td className="px-4 py-3 text-center">2,200円/回</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5] bg-[#F8F8F8]">
                    <td className="px-4 py-3 font-medium text-[#333]">送料</td>
                    <td className="px-4 py-3 text-center">385円</td>
                    <td className="px-4 py-3 text-center font-bold text-[#4A7C59]">無料</td>
                    <td className="px-4 py-3 text-center">別途（地域による）</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="px-4 py-3 font-medium text-[#333]">配送方法</td>
                    <td className="px-4 py-3 text-center">ポスト投函</td>
                    <td className="px-4 py-3 text-center">ポスト投函</td>
                    <td className="px-4 py-3 text-center">宅配便</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5] bg-[#F8F8F8]">
                    <td className="px-4 py-3 font-medium text-[#333]">配送頻度</td>
                    <td className="px-4 py-3 text-center">毎週/隔週</td>
                    <td className="px-4 py-3 text-center">毎週/隔週</td>
                    <td className="px-4 py-3 text-center">月1回/月2回</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="px-4 py-3 font-medium text-[#333]">品質保証</td>
                    <td className="px-4 py-3 text-center">あり</td>
                    <td className="px-4 py-3 text-center">あり</td>
                    <td className="px-4 py-3 text-center">あり</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5] bg-[#F8F8F8]">
                    <td className="px-4 py-3 font-medium text-[#333]">回数縛り</td>
                    <td className="px-4 py-3 text-center">4回</td>
                    <td className="px-4 py-3 text-center font-bold text-[#4A7C59]">なし</td>
                    <td className="px-4 py-3 text-center font-bold text-[#4A7C59]">なし</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-[#333]">仏花向き度</td>
                    <td className="px-4 py-3 text-center">○</td>
                    <td className="px-4 py-3 text-center font-bold text-[#4A7C59]">◎</td>
                    <td className="px-4 py-3 text-center font-bold text-[#4A7C59]">◎</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Service Details */}
            <div className="space-y-6">
              {/* bloomee */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#F9E8E8] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#4A7C59] text-sm font-bold">1</span>
                    <div>
                      <h3 className="text-base font-bold text-[#333]">bloomee（ブルーミー）</h3>
                      <p className="text-xs text-[#666]">ポスト投函で手軽に受け取れる人気No.1サービス</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#666] leading-relaxed mb-4">
                    bloomeeは累計会員数10万人以上を誇る日本最大級の花のサブスクサービスです。体験プラン980円〜と手頃な価格で、ポスト投函で届くため不在時でも受け取れます。全国200店舗以上の提携花屋からアレンジが届くため、季節感のある花を楽しめます。
                  </p>
                  <p className="text-sm text-[#666] leading-relaxed mb-4">
                    仏花として利用する場合、届くお花は花屋さんがアレンジしたものなので、菊やカーネーションなど仏花に適した花が含まれることもあります。ただし仏花専用のコースはないため、届いた花から仏花に適したものを選んでお供えする形になります。ポスト投函の手軽さを重視する方におすすめです。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">体験プラン980円/回</span>
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">送料385円</span>
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">ポスト投函</span>
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">品質保証あり</span>
                  </div>
                  <a
                    href="/services/bloomee"
                    className="inline-block text-sm text-[#4A7C59] font-medium hover:underline"
                  >
                    bloomeeの詳細レビューを見る →
                  </a>
                </div>
              </div>

              {/* medelu */}
              <div className="bg-white rounded-xl border-2 border-[#4A7C59] overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-[#4A7C59] text-white text-xs px-3 py-1 rounded-bl-lg">
                  仏花に最もおすすめ
                </div>
                <div className="bg-[#E8F0EB] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#4A7C59] text-sm font-bold">2</span>
                    <div>
                      <h3 className="text-base font-bold text-[#333]">medelu（メデル）</h3>
                      <p className="text-xs text-[#666]">送料無料・698円〜の最安水準、NATURAL/ANYROOMコースが仏花向き</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#666] leading-relaxed mb-4">
                    medeluは市場直送の仕組みで中間コストを削減し、698円〜送料無料という業界最安水準を実現しているサービスです。仏花として利用する場合、特に「ANYROOMコース」と「NATURALコース」がおすすめです。
                  </p>
                  <p className="text-sm text-[#666] leading-relaxed mb-4">
                    ANYROOMコースは場所を選ばない落ち着いた色合いの花がメインで、白・グリーン系を中心としたアレンジが届きます。NATURALコースはナチュラルな雰囲気の花が中心で、仏壇に飾っても違和感のない上品な花が届きます。市場直送のため鮮度が高く、花持ちが良いのも仏花には大きなメリットです。回数縛りがないため、お試し感覚で始められるのもポイントです。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">698円/回〜</span>
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">送料無料</span>
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">回数縛りなし</span>
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">NATURAL/ANYROOMコース推奨</span>
                  </div>
                  <a
                    href="/services/medelu"
                    className="inline-block text-sm text-[#4A7C59] font-medium hover:underline"
                  >
                    medeluの詳細レビューを見る →
                  </a>
                </div>
              </div>

              {/* 日本総合園芸 */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#F3EDE6] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#4A7C59] text-sm font-bold">3</span>
                    <div>
                      <h3 className="text-base font-bold text-[#333]">花の定期便（日本総合園芸）</h3>
                      <p className="text-xs text-[#666]">農家直送で鮮度抜群、ボリュームのある花束が届く</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#666] leading-relaxed mb-4">
                    日本総合園芸が運営する「花の定期便」は、農家直送で鮮度の高いお花が届くサービスです。基本プランは2,200円/回で、季節に応じた花束が届きます。花屋やスーパーで購入する仏花とは一線を画す、プロが選んだ新鮮な花が届くのが最大の特徴です。
                  </p>
                  <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
                    農家直送のため中間業者を通さず、摘みたての花が短い流通ルートで届きます。そのため花持ちが非常に良く、仏花として2週間以上持つケースもあります。宅配便での配送となるため、ボリュームのある花束を受け取れるのも魅力。法人のオフィス装花にも対応しており、お寺や葬儀場への導入実績もある信頼性の高いサービスです。
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">2,200円/回〜</span>
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">農家直送</span>
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">宅配便</span>
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-3 py-1 rounded-full">花持ち抜群</span>
                  </div>
                  <a
                    href="/services/nihon-sogo-engei"
                    className="inline-block text-sm text-[#4A7C59] font-medium hover:underline"
                  >
                    花の定期便の詳細レビューを見る →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Tips for Longevity ─── */}
        <section id="tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              仏花を長持ちさせる5つのコツ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              定期便で届いた花を少しでも長く美しく保つために、以下の5つのポイントを実践してみてください。適切なお手入れで花の寿命は大きく変わります。
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "コツ 1",
                  title: "水切りをしてから飾る",
                  text: "届いたお花は、まず茎の根元を水の中で斜めにカット（水切り）してください。空気が入った導管を切り落とすことで、水の吸い上げが良くなり花持ちが格段に向上します。切れ味の良いハサミやカッターを使うのがポイントです。",
                },
                {
                  step: "コツ 2",
                  title: "こまめに水を替える",
                  text: "花立（花瓶）の水は毎日替えるのが理想です。特に夏場は水が腐りやすいため、1日1回は必ず交換しましょう。水替えの際に花立も軽く洗い、ぬめりを取り除くと雑菌の繁殖を防げます。",
                },
                {
                  step: "コツ 3",
                  title: "切り花延命剤を使う",
                  text: "市販の切り花延命剤（フラワーフード）を水に混ぜることで、花持ちが1.5〜2倍に伸びることもあります。延命剤には栄養分と抗菌成分が含まれており、水の腐敗を防ぎながら花に栄養を供給します。100均やホームセンターで手軽に入手できます。",
                },
                {
                  step: "コツ 4",
                  title: "直射日光・エアコンの風を避ける",
                  text: "仏壇の置き場所にも注意しましょう。直射日光が当たる場所やエアコンの風が直接当たる場所は花が早く傷む原因になります。涼しくて風通しの良い場所に仏壇を配置するのが理想的です。",
                },
                {
                  step: "コツ 5",
                  title: "傷んだ花はこまめに取り除く",
                  text: "花束の中で傷み始めた花があれば、早めに取り除きましょう。傷んだ花からはエチレンガスが発生し、周りの花も早く傷ませてしまいます。元気な花だけを残すことで、残りの花をより長く楽しめます。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                  <div className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#333] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              仏花の定期便に関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#E8F0EB] transition-colors text-left"
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
        <section id="summary" className="py-12 md:py-16 bg-[#F3EDE6]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：仏花の定期便で大切な方への想いを続ける
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              仏花の定期便を利用すれば、忙しい毎日の中でも仏壇にいつも新鮮なお花をお供えできます。花屋に行く手間が省けるだけでなく、プロが選んだ旬の花が届くため、自分では選ばないような美しい花に出会えるのも定期便の魅力です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              仏花としてのおすすめは、送料無料で698円〜と手頃な<strong>medelu</strong>のNATURAL/ANYROOMコースです。落ち着いた色合いの花が市場直送で届き、花持ちも良好。回数縛りもないため、まずはお試し感覚で始められます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              より本格的な仏花を求める方は<strong>花の定期便（日本総合園芸）</strong>の農家直送サービスがおすすめ。手軽さを重視するなら<strong>bloomee</strong>のポスト投函も便利です。ご自身のライフスタイルに合ったサービスで、大切な方への想いを花に託してみてはいかがでしょうか。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/medelu"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                medeluの詳細を見る
              </a>
              <a
                href="/services/nihon-sogo-engei"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                花の定期便の詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                bloomeeの詳細を見る
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
