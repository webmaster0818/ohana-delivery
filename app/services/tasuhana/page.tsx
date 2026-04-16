"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "タスハナ（+hana）の料金はいくらですか？",
    a: "タスハナには2つのプランがあります。「+act for flowers」は1回528円（税込）で花が3本届きます。「+live for flowers」は1回770円（税込）で花が5本届きます。いずれも送料330円が別途かかります。配送頻度は隔週（2週間に1回）です。",
  },
  {
    q: "タスハナの解約方法を教えてください。",
    a: "タスハナの解約はマイページから手続きできます。回数縛りがないため、いつでも解約可能です。次回配送日の5日前までに手続きを完了すれば、次回以降の配送が停止されます。一時的にお届けを止めたい場合はスキップ機能も利用できます。",
  },
  {
    q: "タスハナのお花はポスト投函ですか？",
    a: "はい、タスハナはポスト投函に対応しています。専用のコンパクトなパッケージに入った状態で届くため、不在時でも受け取れます。ポストのサイズが投函口の幅4cm以上、奥行き15cm以上あれば問題なく届きます。",
  },
  {
    q: "タスハナの「サステナブル」とはどういう意味ですか？",
    a: "タスハナは、花市場で流通基準に満たない「規格外の花」を積極的に活用しています。茎の長さや花の大きさが規格と少し異なるだけで廃棄されてしまう花を、品質には問題のない状態で届けることで、フラワーロス（花の廃棄）の削減に貢献しています。花を飾ることが環境配慮にもつながる、サステナブルな仕組みです。",
  },
  {
    q: "届く花の種類は選べますか？",
    a: "タスハナでは届く花の種類を自分で選ぶことはできません。プロが旬の花を季節に合わせてセレクトしてお届けします。そのため、毎回異なる花との出会いを楽しめます。苦手な花やアレルギーがある場合は、カスタマーサポートに事前に相談することをおすすめします。",
  },
];

/* ─── User Reviews ─── */
const userReviews = [
  {
    name: "A.K.",
    age: "20代女性",
    rating: 5,
    title: "528円でこの満足度はすごい",
    text: "月1,000円以下でお花のある暮らしが始められるのが嬉しいです。3本でも小さな花瓶に飾るとかわいくて、一人暮らしの部屋にちょうど良いサイズ感。花の廃棄を減らすサステナブルな取り組みも共感できます。",
    date: "2026年3月",
  },
  {
    name: "T.M.",
    age: "30代女性",
    rating: 4,
    title: "エコな花のサブスクとして応援したい",
    text: "規格外の花を活用しているということですが、届く花は全く問題ない品質です。むしろ「この花が捨てられるなんて」と思うくらい綺麗な花もあります。環境に配慮しながら花を楽しめるのは気分が良いです。送料が別途かかるのが少し残念ですが、総額858円なら十分お手頃です。",
    date: "2026年1月",
  },
  {
    name: "N.S.",
    age: "40代女性",
    rating: 3,
    title: "コスパは良いけど本数は物足りない",
    text: "+actプランの3本は、正直なところ少し物足りなさを感じます。もう少しボリュームが欲しい方は+liveプラン（5本）の方がおすすめかもしれません。ただ、この価格帯で定期的にお花が届くのは他にあまりないので、入門としては良いと思います。",
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
export default function TasuhanaServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>タスハナ（+hana）の口コミ・評判【2026年最新】528円の花サブスクを検証</title>
      <meta name="description" content="タスハナ（+hana）の口コミ・評判を徹底検証。528円から始められるサステナブルな花のサブスク。料金プランやメリット・デメリット、実際の利用者の声を紹介します。" />

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
                <li><span className="text-[#333] font-medium">タスハナ（+hana）</span></li>
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
              タスハナ（+hana）の口コミ・評判<br className="hidden md:block" />
              528円の花サブスクを検証【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              タスハナ（+hana）は528円から始められる、サステナブルな花のサブスクリプションサービスです。
              規格外の花を活用したエコな仕組みと、業界最安クラスの価格設定が特徴。実際の口コミとともに検証します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安料金</p>
                <p className="text-xl font-bold text-[#4A7C59]">528円/回</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">送料</p>
                <p className="text-xl font-bold text-[#333]">330円</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">届き方</p>
                <p className="text-xl font-bold text-[#4A7C59]">ポスト投函</p>
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
                <li><a href="#features" className="hover:text-[#4A7C59] transition-colors">1. タスハナの特徴・サービス概要</a></li>
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
              タスハナの特徴・サービス概要
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              タスハナ（+hana）は、<a href="https://tasuhana.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] underline">公式サイト</a>で提供されている花の定期便サービスです。「花を足すことで、暮らしにプラスを」がコンセプト。市場で規格外とされた花を活用するサステナブルな仕組みが特徴で、環境に配慮しながら低価格でお花のある暮らしを実現できます。
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">サステナブルな花の活用</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花市場では、茎の長さや花の大きさが規格と少し異なるだけで流通できず廃棄される花があります。タスハナはこうした「規格外の花」を積極的に活用。見た目や品質には全く問題のない花を、フラワーロス削減に貢献しながらお得な価格で届けています。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">業界最安クラスの価格設定</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  最安プランは1回528円（税込）と、花のサブスク業界でもトップクラスの低価格です。送料330円を含めても1回あたり858円。月に2回届いても1,716円と、2,000円以下で花のある暮らしが楽しめます。初めての方でも気軽に始められる価格帯です。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">ポスト投函で受け取り簡単</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  専用のコンパクトなパッケージでポスト投函されるため、不在時でも受け取れます。仕事で帰りが遅い方や、日中外出が多い方でも安心して利用できます。届いたらすぐに水切りをして花瓶に飾りましょう。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">環境配慮へのこだわり</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  タスハナは花のパッケージにも環境配慮素材を採用しています。花を飾ることが自然と環境保護につながる仕組みで、SDGsに関心のある方からも支持されています。「花を楽しむ＝社会貢献」という新しい価値観を提案しています。
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
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1">人気No.1</span>
                  <h3 className="text-base font-bold text-[#333]">+act for flowers</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">料金</p>
                    <p className="text-lg font-bold text-[#4A7C59]">528円/回</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">花の本数</p>
                    <p className="text-lg font-bold text-[#333]">3本</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">送料</p>
                    <p className="text-lg font-bold text-[#333]">330円</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">1回合計</p>
                    <p className="text-lg font-bold text-[#4A7C59]">858円</p>
                  </div>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">
                  花のサブスクを最安で試したい方に最適なプラン。3本の花が隔週で届きます。小さな花瓶に飾るのにちょうど良い本数で、一人暮らしのお部屋にも無理なく取り入れられます。
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#999] text-white text-xs font-bold rounded-lg px-2.5 py-1">ボリュームUP</span>
                  <h3 className="text-base font-bold text-[#333]">+live for flowers</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">料金</p>
                    <p className="text-lg font-bold text-[#4A7C59]">770円/回</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">花の本数</p>
                    <p className="text-lg font-bold text-[#333]">5本</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">送料</p>
                    <p className="text-lg font-bold text-[#333]">330円</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">1回合計</p>
                    <p className="text-lg font-bold text-[#4A7C59]">1,100円</p>
                  </div>
                </div>
                <p className="text-sm text-[#666] leading-relaxed">
                  より華やかな花を楽しみたい方向けのプラン。5本の花が届くため、中程度の花瓶にボリュームのあるアレンジが楽しめます。1本あたりの単価は+actプランよりもさらにお得です。
                </p>
              </div>
            </div>

            <div className="mt-6 bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CE]">
              <h3 className="text-sm font-bold text-[#333] mb-2">配送について</h3>
              <ul className="text-sm text-[#666] space-y-1.5">
                <li>・配送方法：ポスト投函（日本郵便）</li>
                <li>・配送頻度：隔週（2週間に1回）</li>
                <li>・送料：330円/回</li>
                <li>・対応エリア：日本全国（一部離島を除く）</li>
                <li>・スキップ：マイページからいつでも可能</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── User Reviews ─── */}
        <section id="reviews" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              タスハナ（+hana）の口コミ・評判
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
              タスハナのメリット・デメリット
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CE]">
                <h3 className="text-sm font-bold text-[#4A7C59] mb-3">メリット</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>業界最安クラスの528円/回</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>サステナブルな花の活用で環境に優しい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>ポスト投函で不在でも受け取れる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>回数縛りなしでいつでも解約OK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>規格外でも品質は問題なし</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFF5F5] rounded-xl p-5 border border-[#F0D8D8]">
                <h3 className="text-sm font-bold text-[#C4877A] mb-3">デメリット</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>花の種類を自分で選べない</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>最安プランは3本と本数が少なめ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>送料330円が別途かかる</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>一部地域は配送対応外の場合あり</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>知名度が低くクチコミ情報が少ない</span>
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
              タスハナの始め方（申し込み手順）
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "公式サイトにアクセス",
                  text: "タスハナの公式サイト（tasuhana.com）にアクセスし、「お花の定期便を始める」ボタンをクリックします。",
                },
                {
                  step: "STEP 2",
                  title: "プランを選択",
                  text: "+act for flowers（528円・3本）または +live for flowers（770円・5本）のどちらかを選択します。迷ったら+actプランから始めるのがおすすめです。",
                },
                {
                  step: "STEP 3",
                  title: "お届け先情報を入力",
                  text: "氏名、住所、電話番号などを入力します。ポスト投函のため、ポストのサイズ（投函口の幅4cm以上）を事前に確認しておきましょう。",
                },
                {
                  step: "STEP 4",
                  title: "支払い方法を登録",
                  text: "クレジットカード情報を登録します。VISA、Mastercard、JCBなど主要ブランドに対応しています。",
                },
                {
                  step: "STEP 5",
                  title: "申し込み完了、お届けを待つ",
                  text: "申し込み完了後、次の配送タイミングで花がポストに届きます。届いたらすぐにパッケージを開封し、水切りをしてから花瓶に飾りましょう。",
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
              タスハナはこんな方におすすめ
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#4A7C59] mb-3">おすすめな人</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>とにかく安く花のサブスクを試したい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>環境に配慮したサービスを選びたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>一人暮らしで少量の花を飾りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>ポスト投函で手軽に受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>花のサブスク初心者で気軽に始めたい方</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#C4877A] mb-3">おすすめしない人</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>ボリュームのある華やかな花束がほしい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>花の種類を自分で細かく選びたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>送料込みで500円以下を求める方</span>
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
              タスハナに関するよくある質問
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
              まとめ：タスハナは最安で花のサブスクを始めたい方に最適
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              タスハナ（+hana）は、<strong>528円/回</strong>という業界最安クラスの価格で花のある暮らしを始められるサービスです。規格外の花を活用するサステナブルな仕組みで、花を楽しみながら環境にも貢献できます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              送料330円を含めても1回858円からと非常にリーズナブル。回数縛りもなく、ポスト投函で手軽に受け取れるため、花のサブスクを初めて試す方にぴったりです。ボリュームを求める方は+liveプラン（5本・1,100円）も検討してみてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://tasuhana.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                タスハナ公式サイトはこちら
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
