"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "bloomee（ブルーミー）の料金はいくらですか？",
    a: "bloomeeには3つのプランがあります。体験プランは1回980円（税込・送料385円別）、レギュラープランは1回2,180円（税込・送料385円別）、リッチプランは1回3,680円（税込・送料550円別）です。いずれも隔週または毎週の配送頻度を選べます。",
  },
  {
    q: "bloomeeの解約方法を教えてください。",
    a: "bloomeeの解約はマイページから手続きできます。ただし、初回契約時に4回分の最低受け取り回数が設定されており、4回受け取り前に解約すると残り回数分の料金が発生します。4回受け取り後は、次回配送日の前週金曜日までにマイページで解約手続きを行えば、追加料金なしで解約可能です。",
  },
  {
    q: "bloomeeのお花が傷んで届いた場合はどうすればいいですか？",
    a: "bloomeeには品質保証制度（再送保証）があります。届いたお花が傷んでいた場合、マイページの「品質保証フォーム」から写真を添付して申請すると、無料で新しいお花を再送してもらえます。申請期限はお届け日を含めて2日以内です。",
  },
  {
    q: "bloomeeはどのくらいの頻度で届きますか？",
    a: "bloomeeの配送頻度は「毎週」または「隔週」から選択できます。マイページからいつでも変更可能です。また、旅行や出張などで受け取れない週は「スキップ機能」を使って配送を1回飛ばすこともできます。スキップは無料で、マイページから簡単に設定できます。",
  },
  {
    q: "bloomeeのお花はポストに届きますか？",
    a: "体験プランとレギュラープランはポスト投函で届きます。専用のパッケージに入った状態で届くため、不在時でも受け取れます。リッチプランは花のボリュームが大きいため、宅配便（手渡し）での配送となります。ポスト投函の場合、ポストのサイズが投函口の幅が4.5cm以上、奥行きが15cm以上あれば問題なく届きます。",
  },
  {
    q: "bloomeeはどの花屋さんからお花が届きますか？",
    a: "bloomeeは全国200店舗以上の提携花屋と契約しており、お届け先の地域に近い花屋さんからお花が届きます。届く花屋さんは毎回異なる場合があり、さまざまなフローリストのアレンジを楽しめます。どの花屋さんから届いたかはお届け時のカードに記載されています。",
  },
  {
    q: "bloomeeをプレゼントとして贈ることはできますか？",
    a: "はい、bloomeeではギフト用の「花の定期便ギフトチケット」を販売しています。チケットを購入して相手に贈ると、相手が好きなタイミングでお花の定期便を始められます。母の日や誕生日のプレゼントとして人気があります。",
  },
  {
    q: "bloomeeの対応エリアはどこですか？",
    a: "bloomeeは離島やごく一部の地域を除き、日本全国に配送対応しています。ポスト投函プランは日本郵便のゆうパケット、リッチプランは宅配便で届くため、通常の郵便・宅配が届く地域であれば利用可能です。",
  },
];

/* ─── User Reviews ─── */
const userReviews = [
  {
    name: "M.K.",
    age: "30代女性",
    rating: 5,
    title: "毎週届くのが楽しみになりました",
    text: "一人暮らしで花を買う習慣がなかったのですが、bloomeeを始めてから部屋に花があるのが当たり前になりました。ポスト投函なので仕事で遅くなっても受け取れるのが助かります。体験プランでも十分かわいいお花が届くので満足しています。",
    date: "2025年12月",
  },
  {
    name: "A.S.",
    age: "40代女性",
    rating: 4,
    title: "品質保証があるので安心",
    text: "夏場に一度だけ元気のないお花が届いたことがありますが、品質保証フォームから申請したらすぐに再送してもらえました。対応が早くて好印象です。レギュラープランにしてからは花の種類も増えて、毎回どんなお花が届くかワクワクしています。",
    date: "2025年11月",
  },
  {
    name: "Y.T.",
    age: "20代女性",
    rating: 3,
    title: "手軽だけどボリュームはやや少なめ",
    text: "体験プランを利用しています。手軽に始められるのは良いのですが、正直なところ3本だと少し物足りなさを感じます。もう少し花の本数が多ければ嬉しいです。ただ、980円という価格を考えると妥当かもしれません。花屋に行く時間がない人には便利だと思います。",
    date: "2025年10月",
  },
  {
    name: "R.N.",
    age: "30代女性",
    rating: 4,
    title: "インスタ映えするアレンジが嬉しい",
    text: "届くお花がいつもセンス良くまとめられていて、インスタに投稿するのが楽しいです。花屋さんによってアレンジの雰囲気が違うのも面白いポイント。リッチプランはボリュームがあって見栄えも抜群です。ただ解約のときに4回縛りがあるのは事前に知っておくべきでした。",
    date: "2026年1月",
  },
  {
    name: "K.M.",
    age: "50代女性",
    rating: 2,
    title: "解約手続きがわかりにくかった",
    text: "お花自体は綺麗で良かったのですが、解約しようとしたときに手続きがわかりにくく、少し困りました。マイページの奥の方に解約ページがあり、引き止めのページも何度か表示されます。4回の最低利用期間があることも、もっとわかりやすく表示してほしかったです。",
    date: "2025年9月",
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
export default function BloomeePage() {
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
                  <span className="text-[#666]">サービス一覧</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">bloomee（ブルーミー）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F9E8E8] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              bloomee（ブルーミー）の口コミ・評判を<br className="hidden md:block" />
              徹底調査【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              累計3,000万本以上のお花を届けてきた日本最大級の花のサブスク「bloomee」。
              実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">累計お届け</p>
                <p className="text-xl font-bold text-[#4A7C59]">3,000万本以上</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">提携花屋</p>
                <p className="text-xl font-bold text-[#4A7C59]">全国200店舗以上</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安プラン</p>
                <p className="text-xl font-bold text-[#4A7C59]">980円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">届き方</p>
                <p className="text-xl font-bold text-[#4A7C59]">ポスト投函</p>
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
                  <li><a href="#overview" className="hover:text-[#4A7C59] transition-colors">1. bloomeeとは？サービス概要</a></li>
                  <li><a href="#pricing" className="hover:text-[#4A7C59] transition-colors">2. 料金プラン・送料の詳細</a></li>
                  <li><a href="#pros" className="hover:text-[#4A7C59] transition-colors">3. bloomeeのメリット（良い評判）</a></li>
                  <li><a href="#cons" className="hover:text-[#4A7C59] transition-colors">4. bloomeeのデメリット（悪い評判）</a></li>
                  <li><a href="#reviews" className="hover:text-[#4A7C59] transition-colors">5. 利用者の口コミ・評判</a></li>
                  <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">6. こんな人におすすめ／おすすめしない人</a></li>
                  <li><a href="#comparison" className="hover:text-[#4A7C59] transition-colors">7. 競合サービスとの比較</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#4A7C59] transition-colors">8. bloomeeの始め方</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">9. よくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">10. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Service Overview ─── */}
        <section id="overview" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomee（ブルーミー）とは？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              bloomee（ブルーミー）は、株式会社Crunch Style（クランチスタイル）が2016年から運営している日本最大級のお花の定期便（花のサブスク）サービスです。
              旧サービス名は「Bloomee LIFE（ブルーミーライフ）」で、2021年3月に現在の「bloomee」にリブランディングしました。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              累計3,000万本以上のお花を届けた実績があり、SNSでの認知度は花のサブスクの中でもトップクラスです。
              全国200店舗以上の提携花屋さんがアレンジしたお花が、ポスト投函で届くのが最大の特徴。
              忙しい方や不在が多い方でも、気軽にお花のある生活を始められるサービスとして人気を集めています。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">bloomee 基本情報</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">運営会社</span>
                  <span className="text-[#333]">株式会社Crunch Style</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">サービス開始</span>
                  <span className="text-[#333]">2016年</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">累計お届け</span>
                  <span className="text-[#333]">3,000万本以上</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">提携花屋</span>
                  <span className="text-[#333]">全国200店舗以上</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">届き方</span>
                  <span className="text-[#333]">ポスト投函 / 宅配便</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">対応エリア</span>
                  <span className="text-[#333]">全国（離島除く）</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">配送頻度</span>
                  <span className="text-[#333]">毎週 / 隔週</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">品質保証</span>
                  <span className="text-[#333]">あり（再送保証）</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pricing Table ─── */}
        <section id="pricing" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomeeの料金プラン・送料
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              bloomeeは3つのプランを提供しています。いずれも税込価格で、送料は別途かかります。
              配送頻度は「毎週」または「隔週」から選択可能です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {/* 体験プラン */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#F9E8E8] px-5 py-4 text-center">
                  <p className="text-xs text-[#999] mb-1">初めての方に</p>
                  <h3 className="text-lg font-bold text-[#333]">体験プラン</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">980<span className="text-base font-medium">円/回</span></p>
                  <p className="text-xs text-[#999] mb-4">+ 送料385円</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>お花の本数：3本以上</p>
                    <p>届き方：ポスト投函</p>
                    <p>1回あたり合計：1,365円</p>
                  </div>
                </div>
              </div>

              {/* レギュラープラン */}
              <div className="bg-white rounded-xl border-2 border-[#4A7C59] overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-[#4A7C59] text-white text-xs px-3 py-1 rounded-bl-lg">
                  人気
                </div>
                <div className="bg-[#E8F0EB] px-5 py-4 text-center">
                  <p className="text-xs text-[#4A7C59] mb-1">一番人気</p>
                  <h3 className="text-lg font-bold text-[#333]">レギュラープラン</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">2,180<span className="text-base font-medium">円/回</span></p>
                  <p className="text-xs text-[#999] mb-4">+ 送料385円</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>お花の本数：4本以上</p>
                    <p>届き方：ポスト投函</p>
                    <p>1回あたり合計：2,565円</p>
                  </div>
                </div>
              </div>

              {/* リッチプラン */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#F9E8E8] px-5 py-4 text-center">
                  <p className="text-xs text-[#999] mb-1">豪華に楽しみたい方に</p>
                  <h3 className="text-lg font-bold text-[#333]">リッチプラン</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">3,680<span className="text-base font-medium">円/回</span></p>
                  <p className="text-xs text-[#999] mb-4">+ 送料550円</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>お花の本数：8本以上</p>
                    <p>届き方：宅配便（手渡し）</p>
                    <p>1回あたり合計：4,230円</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">料金に関する補足</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 表示価格はすべて税込です</li>
                <li>・ 送料はプランにより異なります（体験・レギュラー：385円、リッチ：550円）</li>
                <li>・ 配送頻度は「毎週」「隔週」から選択可能（マイページで変更可）</li>
                <li>・ 初回契約は4回分の最低受け取りが条件です</li>
                <li>・ スキップ機能あり（配送を1回飛ばすことが無料で可能）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Pros Section ─── */}
        <section id="pros" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomeeのメリット・良い評判
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "ポスト投函で受け取り簡単",
                  text: "体験プランとレギュラープランはポスト投函で届くため、不在時でも問題なく受け取れます。専用の箱に入った状態で届くので、仕事で帰りが遅い方や一人暮らしの方でもストレスなくお花を受け取れる点が高く評価されています。",
                },
                {
                  title: "初心者に最適なサービス設計",
                  text: "980円/回の体験プランから始められるため、お花のサブスクが初めての方でもハードルが低いのが魅力です。花瓶がなくても付属のガイドに簡単な飾り方が書かれており、お花の知識がなくても楽しめるよう工夫されています。",
                },
                {
                  title: "品質保証制度（再送保証）あり",
                  text: "配送中にお花が傷んでしまった場合、マイページから写真を添付して申請すると無料で再送してもらえます。この品質保証制度があることで、安心して利用を続けられるという口コミが多く見られます。",
                },
                {
                  title: "全国200店舗以上の提携花屋から届く",
                  text: "bloomeeは全国の花屋と提携しており、お届け先の近くの花屋さんがアレンジしたお花が届きます。毎回異なる花屋さんのアレンジを楽しめるため、飽きずに続けられるという声があります。地域の花屋を応援できる点も好評です。",
                },
                {
                  title: "SNSでの認知度・人気がNo.1クラス",
                  text: "Instagramを中心にSNSでの投稿数が非常に多く、花のサブスクの中でも認知度はトップクラスです。届いたお花をSNSに投稿して楽しむユーザーが多いことから、毎回フォトジェニックなアレンジが届くと評判です。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#E8F0EB] rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
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

        {/* ─── Cons Section ─── */}
        <section id="cons" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#F0D0D0]">
              bloomeeのデメリット・悪い評判
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "花のボリュームが少なめ",
                  text: "体験プランは3本以上、レギュラープランでも4本以上と、他社サービスと比較するとお花の本数がやや少なめです。特に体験プランの3本ではテーブルに飾るには物足りないという口コミがあります。ボリュームを求める方はリッチプラン（8本以上）を検討するか、他サービスとの比較をおすすめします。",
                },
                {
                  title: "夏場の鮮度リスク",
                  text: "ポスト投函の場合、夏場はポスト内の高温でお花が傷みやすくなります。特に7〜9月の猛暑の時期は、届いたお花がしおれているという報告が増える傾向にあります。ただし品質保証制度で再送対応してもらえるため、申請すれば代わりのお花を受け取れます。",
                },
                {
                  title: "解約手続きがやや複雑",
                  text: "bloomeeの解約はマイページから手続きできますが、解約ページにたどり着くまでに複数のステップがあり、引き止めのページが表示されるため、やや手間がかかるという声があります。また、4回の最低受け取り回数を満たす前の解約は残り回数分の料金が発生する点にも注意が必要です。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
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

        {/* ─── User Reviews ─── */}
        <section id="reviews" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomee利用者の口コミ・評判
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              実際にbloomeeを利用したユーザーの口コミをご紹介します。良い口コミだけでなく改善を求める声も含め、バランスよくまとめました。
            </p>
            <div className="space-y-5">
              {userReviews.map((review, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E8F0EB] flex items-center justify-center">
                        <span className="text-sm font-bold text-[#4A7C59]">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#333]">{review.name} / {review.age}</p>
                        <p className="text-xs text-[#999]">{review.date}</p>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <h3 className="text-sm font-bold text-[#333] mb-2">{review.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Recommendation Section ─── */}
        <section id="recommend" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomeeはこんな人におすすめ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* おすすめの人 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#4A7C59] mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#E8F0EB] flex items-center justify-center text-sm">
                    ○
                  </span>
                  おすすめの人
                </h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>お花のサブスクを初めて利用する方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>日中不在が多く、ポスト投函で受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>手軽に少額からお花を楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>品質保証のある安心なサービスを選びたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>SNSにお花の写真を投稿したい方</span>
                  </li>
                </ul>
              </div>

              {/* おすすめしない人 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#E0B8B8] mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#FDF5F5] flex items-center justify-center text-sm">
                    x
                  </span>
                  おすすめしない人
                </h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>ボリュームのある豪華なお花が欲しい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>送料を含めたコスパを最重視する方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>回数縛りなしで気軽に試したい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>お花の種類やスタイルを自分で選びたい方</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Section ─── */}
        <section id="comparison" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomee vs 競合サービス比較
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              bloomeeと人気の花のサブスク2社を比較しました。それぞれの特徴を把握して、自分に合ったサービスを選びましょう。
            </p>
            <div className="table-wrapper">
              <table className="comparison-table w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="rounded-tl-lg">比較項目</th>
                    <th>bloomee</th>
                    <th>medelu</th>
                    <th className="rounded-tr-lg">AND PLANTS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-[#333]">最安プラン</td>
                    <td>980円/回</td>
                    <td>698円/回</td>
                    <td>1,980円/回</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">送料</td>
                    <td>385〜550円</td>
                    <td>無料</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">花の本数（最安）</td>
                    <td>3本以上</td>
                    <td>3本</td>
                    <td>4〜6本</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">届き方</td>
                    <td>ポスト投函</td>
                    <td>ポスト投函</td>
                    <td>宅配便</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">回数縛り</td>
                    <td>4回</td>
                    <td>なし</td>
                    <td>なし</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">品質保証</td>
                    <td>あり</td>
                    <td>あり</td>
                    <td>あり</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">SNS人気</td>
                    <td className="font-bold text-[#4A7C59]">非常に高い</td>
                    <td>普通</td>
                    <td>高い</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">おすすめポイント</td>
                    <td>初心者向け、手軽さ</td>
                    <td>コスパ最強</td>
                    <td>おしゃれ重視</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">bloomee vs medelu</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  コスパを重視するならmedeluが有利です。medeluは月額698円で送料無料のため、1回あたりの総額はbloomeeの体験プラン（980円+送料385円=1,365円）の約半額になります。
                  一方、bloomeeは全国200店舗以上の提携花屋からのアレンジが届くため、毎回異なるテイストのお花を楽しめる点が強みです。SNSでの情報量もbloomeeのほうが圧倒的に多く、事前に他のユーザーの投稿を参考にできます。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">bloomee vs AND PLANTS</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  AND PLANTSはプロのフローリストによるハイセンスなアレンジが特徴で、インテリアにこだわる方に向いています。送料無料でボリュームも多いですが、最安プランが1,980円/回とbloomeeより高めです。
                  手軽に少額から始めたい初心者にはbloomee、デザイン性とボリュームを求める方にはAND PLANTSがおすすめです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── How to Sign Up ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomeeの始め方（申し込み手順）
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "公式サイトにアクセス",
                  text: "bloomeeの公式サイト（bloomee.jp）にアクセスし、「お花の定期便を申し込む」ボタンをクリックします。",
                },
                {
                  step: "STEP 2",
                  title: "プランを選択",
                  text: "体験プラン（980円）、レギュラープラン（2,180円）、リッチプラン（3,680円）の中から希望のプランを選びます。",
                },
                {
                  step: "STEP 3",
                  title: "配送頻度を選択",
                  text: "「毎週届く」または「隔週届く」のどちらかを選択します。迷ったら隔週から始めるのがおすすめです。",
                },
                {
                  step: "STEP 4",
                  title: "お届け先情報を入力",
                  text: "氏名、住所、電話番号などのお届け先情報を入力します。ポスト投函の場合はポストのサイズを事前に確認しておきましょう。",
                },
                {
                  step: "STEP 5",
                  title: "支払い方法を登録",
                  text: "クレジットカード情報を登録します。VISA、Mastercard、JCB、American Express、Dinersに対応しています。",
                },
                {
                  step: "STEP 6",
                  title: "申し込み完了、お届けを待つ",
                  text: "申し込み完了後、最短で翌週からお花が届き始めます。届いたお花は水切りをしてから花瓶に飾りましょう。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
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
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomeeに関するよくある質問
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
        <section id="summary" className="py-12 md:py-16 bg-[#F9E8E8]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：bloomeeは初心者に最適な花のサブスク
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              bloomee（ブルーミー）は、ポスト投函で手軽に受け取れる点と、980円/回からの手頃な価格設定で、お花のサブスク初心者に最も選ばれているサービスです。
              全国200店舗以上の提携花屋からセンスの良いアレンジが届き、品質保証制度もあるため安心して利用できます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方で、花のボリュームがやや少なめな点や、4回の最低受け取り回数がある点はデメリットとして把握しておく必要があります。
              コスパ重視ならmedelu、デザイン性重視ならAND PLANTSも検討した上で、自分に合ったサービスを選びましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://bloomee.jp"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                bloomee公式サイトはこちら
              </a>
              <a
                href="/"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                他のサービスと比較する
              </a>
            </div>
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
