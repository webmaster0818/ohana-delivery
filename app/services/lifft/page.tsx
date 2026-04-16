"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "LIFFT（リフト）の料金はいくらですか？",
    a: "LIFFTの花束プランは1回3,300円（税込・送料無料）です。月に1回届くペースで、届く花は6〜8本のボリュームある花束です。季節限定でコーヒーと花のセットプランも提供されることがあります。いずれのプランも回数縛りなしで、いつでも解約可能です。",
  },
  {
    q: "LIFFTの解約方法を教えてください。",
    a: "LIFFTの解約はマイページから手続きできます。回数縛りがないため、いつでも好きなタイミングで解約可能です。次回配送日の数日前までに手続きを完了すれば、次回以降の配送が停止されます。一時的にお届けを止めたい場合はスキップ機能も利用できます。",
  },
  {
    q: "LIFFTのお花はポスト投函ですか？",
    a: "LIFFTのお花はポスト投函には対応しておらず、宅配便（クール便）での配送となります。花のボリュームが大きく、鮮度を保つためにクール便を採用しているためです。配達時間帯の指定が可能なので、在宅している時間帯を指定して受け取りましょう。",
  },
  {
    q: "LIFFT Journalとは何ですか？",
    a: "LIFFT Journalは、お花と一緒に届く花の読み物（リーフレット）です。届いた花の種類や産地の紹介、花言葉、お手入れ方法、飾り方のヒントなどが掲載されています。花を飾るだけでなく、花について学ぶ楽しみも提供するLIFFT独自のサービスで、花のある暮らしをより深く楽しめます。",
  },
  {
    q: "LIFFTはどの地域に届けてもらえますか？",
    a: "LIFFTは離島を除く日本全国に配送対応しています。クール便（ヤマト運輸）での配送のため、通常のヤマト運輸が届く地域であれば問題なく利用できます。ただし、一部地域では配達に通常より1日多くかかる場合があります。",
  },
];

/* ─── User Reviews ─── */
const userReviews = [
  {
    name: "S.Y.",
    age: "30代女性",
    rating: 5,
    title: "鮮度が全然違います",
    text: "以前他のサブスクを使っていましたが、LIFFTに変えてから花の持ちが格段に良くなりました。市場直送のクール便なので、届いた時点の花がとにかく元気。2週間以上楽しめることもあります。月1回なので負担も少なく、届くのが毎月の楽しみです。",
    date: "2026年2月",
  },
  {
    name: "K.H.",
    age: "40代女性",
    rating: 4,
    title: "Journalが嬉しいサプライズ",
    text: "花と一緒に届くLIFFT Journalがとても素敵です。花の名前や産地を知ると愛着が湧きますし、お手入れ方法も参考になります。花だけでなく「知る楽しみ」がセットになっているのは他にはないサービスだと思います。ただ、3,300円は安くはないので、予算に余裕がある方向けかもしれません。",
    date: "2026年1月",
  },
  {
    name: "M.A.",
    age: "20代女性",
    rating: 4,
    title: "パッケージがおしゃれ",
    text: "届いた箱のデザインがシンプルでおしゃれなので、開封する瞬間がワクワクします。花自体もセンスが良い組み合わせで、そのまま花瓶に入れるだけでインテリアになります。月1回なのでもう少し頻度を選べるとさらに嬉しいのですが、品質には大満足です。",
    date: "2025年12月",
  },
];

/* ─── Star Rating Component ─── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating}つ星`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Main Component ─── */
export default function LifftServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>LIFFT（リフト）の口コミ・評判【2026年最新】花の定期便の実力を検証</title>
      <meta name="description" content="LIFFT（リフト）の口コミ・評判を徹底検証。市場直送・クール便で届く鮮度抜群の花の定期便。3,300円/回の花束プランの実力や、メリット・デメリットを解説します。" />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</a></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#666]">サービス詳細</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#333] font-medium">LIFFT（リフト）</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              サービス詳細レビュー
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              LIFFT（リフト）の口コミ・評判<br className="hidden md:block" />
              花の定期便の実力を検証【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              LIFFT（リフト）はBOTANIC株式会社が運営する花の定期便サービスです。
              市場直送・クール便配送で鮮度にこだわった花が届きます。実際の口コミとともにその実力を検証します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">月額料金</p>
                <p className="text-xl font-bold text-[#4A7C59]">3,300円/回</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">送料</p>
                <p className="text-xl font-bold text-[#4A7C59]">無料</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">配送方法</p>
                <p className="text-xl font-bold text-[#4A7C59]">クール便</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">回数縛り</p>
                <p className="text-xl font-bold text-[#4A7C59]">なし</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">この記事の内容</p>
              <ol className="text-sm text-[#666] space-y-2">
                <li><a href="#features" className="hover:text-[#4A7C59] transition-colors">1. LIFFTの特徴・サービス概要</a></li>
                <li><a href="#plans" className="hover:text-[#4A7C59] transition-colors">2. 料金プランと配送について</a></li>
                <li><a href="#reviews" className="hover:text-[#4A7C59] transition-colors">3. 口コミ・評判</a></li>
                <li><a href="#merits-demerits" className="hover:text-[#4A7C59] transition-colors">4. メリット・デメリット</a></li>
                <li><a href="#how-to-start" className="hover:text-[#4A7C59] transition-colors">5. 始め方5ステップ</a></li>
                <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">6. こんな方におすすめ</a></li>
                <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">7. よくある質問</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ─── Features ─── */}
        <section id="features" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              LIFFTの特徴・サービス概要
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              LIFFT（リフト）は、BOTANIC株式会社（<a href="https://lifft.jp/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">公式サイト</a>）が運営する花の定期便サービスです。「花のある暮らしを、もっと身近に」をコンセプトに、市場直送の鮮度の高い花を届けています。
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">市場直送・農家と直接取引</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  LIFFTは花の卸売市場や農家と直接取引し、中間マージンをカットしています。市場で仕入れた花をその日のうちに発送するため、花屋の店頭に並ぶ花よりも鮮度が高い状態で届きます。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">クール便で鮮度キープ</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  全ての配送にヤマト運輸のクール便を使用しています。夏場でも温度管理された状態で届くため、「届いた花がしおれていた」というトラブルが極めて少ないのが特徴です。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">LIFFT Journal付き</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花と一緒に届く「LIFFT Journal」は、届いた花の種類・産地・花言葉・飾り方のヒントなどが掲載された読み物です。花を飾るだけでなく、花について学ぶ楽しみも提供しています。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">おしゃれなパッケージ</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  シンプルでスタイリッシュなパッケージデザインで、開封する瞬間からワクワクできます。ギフトとしてもそのまま贈れるクオリティで、おしゃれな花生活を演出します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Plans ─── */}
        <section id="plans" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              料金プランと配送について
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-[#4A7C59]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1">メインプラン</span>
                  <h3 className="text-base font-bold text-[#333]">花束プラン</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">料金</p>
                    <p className="text-lg font-bold text-[#4A7C59]">3,300円/回</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">花の本数</p>
                    <p className="text-lg font-bold text-[#333]">6〜8本</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">送料</p>
                    <p className="text-lg font-bold text-[#4A7C59]">無料</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">配送頻度</p>
                    <p className="text-lg font-bold text-[#333]">月1〜2回</p>
                  </div>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">
                  プロが厳選した旬の花が6〜8本のボリュームある花束で届きます。LIFFT Journal付き。クール便で配送されるため、年間を通じて安定した品質の花を楽しめます。
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#999] text-white text-xs font-bold rounded-lg px-2.5 py-1">季節限定</span>
                  <h3 className="text-base font-bold text-[#333]">コーヒーと花プラン</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">
                  季節限定で提供される特別プラン。厳選されたスペシャルティコーヒーと旬の花束がセットで届きます。花とコーヒーの両方を楽しみたい方や、ちょっと贅沢な休日を過ごしたい方に人気のプランです。提供時期や料金は公式サイトでご確認ください。
                </p>
              </div>
            </div>

            <div className="mt-6 bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CE]">
              <h3 className="text-sm font-bold text-[#333] mb-2">配送について</h3>
              <ul className="text-sm text-[#666] space-y-1.5">
                <li>・配送方法：ヤマト運輸クール便（冷蔵）</li>
                <li>・配送頻度：月1〜2回（プランによる）</li>
                <li>・配達日時：時間帯指定可能</li>
                <li>・対応エリア：離島を除く日本全国</li>
                <li>・不在時：不在票からの再配達に対応</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── User Reviews ─── */}
        <section id="reviews" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              LIFFT（リフト）の口コミ・評判
            </h2>
            <div className="space-y-4">
              {userReviews.map((review, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#333]">{review.name}</span>
                      <span className="text-xs text-[#999]">{review.age}</span>
                    </div>
                    <span className="text-xs text-[#999]">{review.date}</span>
                  </div>
                  <StarRating rating={review.rating} />
                  <h3 className="text-sm font-bold text-[#333] mt-2 mb-1">{review.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Merits & Demerits ─── */}
        <section id="merits-demerits" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              LIFFTのメリット・デメリット
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CE]">
                <h3 className="text-sm font-bold text-[#4A7C59] mb-3">メリット</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>市場直送で鮮度が抜群に良い</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>クール便で年中安定した品質</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>LIFFT Journal付きで花を深く楽しめる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>おしゃれなパッケージデザイン</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>回数縛りなしでいつでも解約OK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>送料無料</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFF5F5] rounded-xl p-5 border border-[#F0D8D8]">
                <h3 className="text-sm font-bold text-[#C4877A] mb-3">デメリット</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>3,300円/回とやや高価格帯</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>ポスト投函不可（宅配便のみ）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>配送ペースが月1回とゆっくりめ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>花の種類やスタイルの指定は不可</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── How to Start ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              LIFFTの始め方（申し込み手順）
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "公式サイトにアクセス",
                  text: "LIFFTの公式サイト（lifft.jp）にアクセスし、花の定期便ページを開きます。",
                },
                {
                  step: "STEP 2",
                  title: "プランを選択",
                  text: "花束プラン（3,300円/回）を選択します。季節限定プランがある場合はそちらも確認しましょう。",
                },
                {
                  step: "STEP 3",
                  title: "配送頻度と届け先を設定",
                  text: "配送頻度（月1回または月2回）と届け先住所を入力します。配達時間帯の指定も可能です。",
                },
                {
                  step: "STEP 4",
                  title: "支払い情報を登録",
                  text: "クレジットカード情報を登録します。主要なクレジットカードブランドに対応しています。",
                },
                {
                  step: "STEP 5",
                  title: "申し込み完了、お届けを待つ",
                  text: "申し込み完了後、次の配送日にクール便で花束が届きます。届いたらすぐに水切りをして花瓶に飾りましょう。LIFFT Journalも一緒に届くのでお楽しみに。",
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

        {/* ─── Recommend ─── */}
        <section id="recommend" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              LIFFTはこんな方におすすめ
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#4A7C59] mb-3">おすすめな人</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>花の鮮度と品質を最重視する方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>花だけでなく花の知識も楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>月1回のペースでゆったり楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>おしゃれな暮らしにこだわる方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>在宅時間が確保でき直接受け取れる方</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#C4877A] mb-3">おすすめしない人</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>月1,000円以下で花のサブスクを始めたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>ポスト投函で手軽に受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>毎週花が届くペースを希望する方</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              LIFFTに関するよくある質問
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
        <section id="summary" className="py-12 md:py-16 bg-[#F3EDE6]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：LIFFTは品質重視派に最適な花の定期便
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              LIFFT（リフト）は、市場直送・クール便配送による<strong>圧倒的な鮮度</strong>が最大の強みです。3,300円/回とやや高価格帯ですが、6〜8本のボリュームある花束にLIFFT Journalが付く内容を考えると、花好きな方には十分な価値があります。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              回数縛りなしでいつでも解約できるため、「一度試してみたい」という気軽な利用も可能です。花の鮮度と品質に妥協したくない方、花について深く知りたい方に自信を持っておすすめできるサービスです。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://lifft.jp/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                LIFFT公式サイトはこちら
              </a>
              <a
                href="/"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                他のサービスと比較する
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
              <a href="/" className="hover:text-white transition-colors">トップページ</a>
              <a href="/#comparison" className="hover:text-white transition-colors">比較表</a>
              <a href="/#reviews" className="hover:text-white transition-colors">サービス詳細</a>
              <a href="/#faq" className="hover:text-white transition-colors">よくある質問</a>
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
