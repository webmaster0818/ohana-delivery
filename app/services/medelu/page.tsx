"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "medelu（メデル）の料金はいくらですか？",
    a: "medeluには3つのコース（ANYROOM・MODERN・NATURAL）があり、それぞれMini・Lite・Basic・Luxeの4サイズから選べます。最安はMiniサイズの698円（税込）で、全プラン送料無料です。Liteは1,240円〜、Basicは1,540円〜となっています。",
  },
  {
    q: "medeluの解約方法を教えてください。",
    a: "medeluの解約はマイページから手続きできます。回数縛りがないため、いつでも解約が可能です。次回配送日の前日までにマイページで解約手続きを行えば、追加料金なしで解約できます。違約金や最低利用期間はありません。",
  },
  {
    q: "medeluのお花が傷んで届いた場合はどうすればいいですか？",
    a: "medeluには品質保証制度があります。届いたお花が傷んでいた場合、到着から2日以内にマイページの問い合わせフォームから写真を添付して申請すると、次回配送時に代替のお花を届けてもらえます。市場直送のため鮮度には自信がありますが、万が一の際も安心です。",
  },
  {
    q: "medeluの3つのコースの違いは何ですか？",
    a: "ANYROOMコースはどんなお部屋にも合う万能なアレンジ、MODERNコースはモノトーンやスタイリッシュなお部屋に合うアレンジ、NATURALコースはナチュラルテイストや北欧風のお部屋に合うアレンジが届きます。お部屋の雰囲気に合わせて選ぶのがおすすめです。",
  },
  {
    q: "medeluはどのくらいの頻度で届きますか？",
    a: "medeluの配送頻度は「毎週」または「隔週」から選択できます。マイページからいつでも変更可能です。また、受け取れない週はスキップ機能を使って配送を1回飛ばすこともできます。スキップは無料で、マイページから簡単に設定できます。",
  },
  {
    q: "medeluの送料はかかりますか？",
    a: "いいえ、medeluは全プラン送料無料です。他社のお花のサブスクでは300〜500円程度の送料がかかるサービスが多い中、medeluは表示価格のみで利用できるため、トータルコストを抑えたい方に人気です。",
  },
  {
    q: "medeluのお花は手渡しで届きますか？",
    a: "medeluのお花はすべてポスト投函（ゆうパケット）での配送となります。手渡しでの受け取りには対応していません。ポストの投函口が幅4cm以上、奥行き15cm以上あれば問題なく届きます。不在時でも受け取れるのがメリットです。",
  },
  {
    q: "medeluの対応エリアはどこですか？",
    a: "medeluは離島やごく一部の地域を除き、日本全国に配送対応しています。ただし、お届け先の地域によって届くお花の種類が異なる場合があります。これは各地域の市場から直送しているためで、鮮度を最優先にした仕組みです。",
  },
];

/* ─── User Reviews ─── */
const userReviews = [
  {
    name: "S.H.",
    age: "20代女性",
    rating: 5,
    title: "698円で送料無料は本当にお得！",
    text: "他のサービスと比較してmedeluが圧倒的にコスパが良かったので始めました。Miniサイズでも可愛いお花が3本届くし、送料無料なので本当に698円だけで済むのが嬉しいです。一人暮らしの小さな部屋にはちょうど良いボリュームで、毎回届くのが楽しみになりました。",
    date: "2026年2月",
  },
  {
    name: "T.M.",
    age: "30代女性",
    rating: 4,
    title: "部屋に合わせてコースを選べるのが良い",
    text: "MODERNコースを利用しています。モノトーンの部屋にも合うようなシックなお花が届くので、インテリアの邪魔にならず気に入っています。30年以上の経験があるプロが選んでいるだけあって、色合わせのセンスが良いです。ただ、届く前にどんなお花かわからないのが少し残念。",
    date: "2026年1月",
  },
  {
    name: "A.K.",
    age: "40代女性",
    rating: 5,
    title: "市場直送だからか花持ちが良い",
    text: "medeluは市場から直送してくれるので、届いたお花がとても元気でびっくりしました。以前別のサービスを使っていたときは3日くらいで元気がなくなることもありましたが、medeluのお花は1週間以上きれいに咲いてくれます。回数縛りもないので気楽に続けられます。",
    date: "2025年12月",
  },
  {
    name: "Y.O.",
    age: "30代女性",
    rating: 3,
    title: "安いけど手渡しができないのが惜しい",
    text: "コスパは文句なしですが、すべてポスト投函のみで手渡し対応がないのが少し残念です。ボリュームのあるお花を頼みたくても、ポストに入るサイズに限られるのがネック。Luxeサイズにしても宅配便では届きません。ただ698円から始められる手軽さは魅力的なので、入門としてはおすすめです。",
    date: "2025年11月",
  },
  {
    name: "M.I.",
    age: "50代女性",
    rating: 4,
    title: "NATURALコースが我が家にぴったり",
    text: "木製家具が多いナチュラルテイストの自宅に合うお花を探していて、NATURALコースを見つけました。期待通り、優しい色合いの季節のお花が届くので部屋の雰囲気にマッチしています。地域によって届くお花が違うようですが、それも季節感があって良いと思います。Basicサイズで満足しています。",
    date: "2026年3月",
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
export default function MedeluPage() {
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
                  <span className="text-[#333] font-medium">medelu（メデル）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              medelu（メデル）の口コミ・評判を<br className="hidden md:block" />
              徹底調査【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              業界最安値698円〜・送料無料のコスパ最強お花のサブスク「medelu」。
              実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安プラン</p>
                <p className="text-xl font-bold text-[#4A7C59]">698円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">送料</p>
                <p className="text-xl font-bold text-[#4A7C59]">全プラン無料</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">コース</p>
                <p className="text-xl font-bold text-[#4A7C59]">3コース展開</p>
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
              <nav>
                <ol className="text-sm text-[#666] space-y-2">
                  <li><a href="#overview" className="hover:text-[#4A7C59] transition-colors">1. medeluとは？サービス概要</a></li>
                  <li><a href="#pricing" className="hover:text-[#4A7C59] transition-colors">2. 料金プラン・コースの詳細</a></li>
                  <li><a href="#pros" className="hover:text-[#4A7C59] transition-colors">3. medeluのメリット（良い評判）</a></li>
                  <li><a href="#cons" className="hover:text-[#4A7C59] transition-colors">4. medeluのデメリット（悪い評判）</a></li>
                  <li><a href="#reviews" className="hover:text-[#4A7C59] transition-colors">5. 利用者の口コミ・評判</a></li>
                  <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">6. こんな人におすすめ／おすすめしない人</a></li>
                  <li><a href="#comparison" className="hover:text-[#4A7C59] transition-colors">7. 競合サービスとの比較</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#4A7C59] transition-colors">8. medeluの始め方</a></li>
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
              medelu（メデル）とは？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              medelu（メデル）は、30年以上の花業界経験を持つプロフェッショナルが厳選したお花が届く、コスパ最強のお花の定期便（花のサブスク）サービスです。
              業界最安値クラスの698円〜という価格設定に加え、全プラン送料無料という圧倒的なコストパフォーマンスが最大の特徴です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              お部屋の雰囲気に合わせて選べる3つのコース（ANYROOM・MODERN・NATURAL）を展開しており、
              市場から直送することで鮮度の高いお花をリーズナブルな価格で届けています。
              回数縛りがなくいつでも解約できるため、初めてお花のサブスクを試す方にも人気のサービスです。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">medelu 基本情報</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">運営会社</span>
                  <span className="text-[#333]">株式会社medelu</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">業界経験</span>
                  <span className="text-[#333]">30年以上</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">最安プラン</span>
                  <span className="text-[#333]">698円/回（送料無料）</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">コース数</span>
                  <span className="text-[#333]">3コース x 4サイズ</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">届き方</span>
                  <span className="text-[#333]">ポスト投函</span>
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
                  <span className="text-[#999] w-28 shrink-0">回数縛り</span>
                  <span className="text-[#333]">なし（いつでも解約OK）</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pricing Table ─── */}
        <section id="pricing" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              medeluの料金プラン・コース
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              medeluは3つのコースと4つのサイズの組み合わせから選べます。すべてのプランで送料無料です。
            </p>

            {/* コース紹介 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {/* ANYROOM */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#E8F0EB] px-5 py-4 text-center">
                  <p className="text-xs text-[#4A7C59] mb-1">万能タイプ</p>
                  <h3 className="text-lg font-bold text-[#333]">ANYROOM</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-sm text-[#666] leading-relaxed">
                    どんなお部屋にもマッチする、バランスの良いアレンジが届きます。迷ったらこのコースがおすすめ。
                  </p>
                </div>
              </div>

              {/* MODERN */}
              <div className="bg-white rounded-xl border-2 border-[#4A7C59] overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-[#4A7C59] text-white text-xs px-3 py-1 rounded-bl-lg">
                  人気
                </div>
                <div className="bg-[#E8F0EB] px-5 py-4 text-center">
                  <p className="text-xs text-[#4A7C59] mb-1">スタイリッシュ</p>
                  <h3 className="text-lg font-bold text-[#333]">MODERN</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-sm text-[#666] leading-relaxed">
                    モダンでスタイリッシュなお部屋に合うアレンジ。シックな色合いのお花が中心です。
                  </p>
                </div>
              </div>

              {/* NATURAL */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#E8F0EB] px-5 py-4 text-center">
                  <p className="text-xs text-[#999] mb-1">やさしい雰囲気</p>
                  <h3 className="text-lg font-bold text-[#333]">NATURAL</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-sm text-[#666] leading-relaxed">
                    ナチュラルテイストや北欧風のお部屋にぴったり。優しい色合いのお花が届きます。
                  </p>
                </div>
              </div>
            </div>

            {/* サイズ別料金 */}
            <h3 className="text-base font-bold text-[#333] mb-4">サイズ別料金（全コース共通・税込・送料無料）</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {/* Mini */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 text-center">
                <p className="text-xs text-[#999] mb-1">お試しに最適</p>
                <h4 className="text-base font-bold text-[#333] mb-2">Mini</h4>
                <p className="text-3xl font-bold text-[#4A7C59] mb-1">698<span className="text-base font-medium">円〜</span></p>
                <p className="text-xs text-[#4A7C59] font-medium mb-3">送料無料</p>
                <p className="text-sm text-[#666]">お花 3本程度</p>
              </div>

              {/* Lite */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 text-center">
                <p className="text-xs text-[#999] mb-1">ちょうど良いサイズ</p>
                <h4 className="text-base font-bold text-[#333] mb-2">Lite</h4>
                <p className="text-3xl font-bold text-[#4A7C59] mb-1">1,240<span className="text-base font-medium">円〜</span></p>
                <p className="text-xs text-[#4A7C59] font-medium mb-3">送料無料</p>
                <p className="text-sm text-[#666]">お花 5本程度</p>
              </div>

              {/* Basic */}
              <div className="bg-white rounded-xl border-2 border-[#4A7C59] p-5 text-center relative">
                <div className="absolute top-0 right-0 bg-[#4A7C59] text-white text-xs px-2 py-0.5 rounded-bl-lg">
                  人気
                </div>
                <p className="text-xs text-[#4A7C59] mb-1">一番人気</p>
                <h4 className="text-base font-bold text-[#333] mb-2">Basic</h4>
                <p className="text-3xl font-bold text-[#4A7C59] mb-1">1,540<span className="text-base font-medium">円〜</span></p>
                <p className="text-xs text-[#4A7C59] font-medium mb-3">送料無料</p>
                <p className="text-sm text-[#666]">お花 6〜7本程度</p>
              </div>

              {/* Luxe */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] p-5 text-center">
                <p className="text-xs text-[#999] mb-1">豪華に楽しむ</p>
                <h4 className="text-base font-bold text-[#333] mb-2">Luxe</h4>
                <p className="text-3xl font-bold text-[#4A7C59] mb-1">2,178<span className="text-base font-medium">円〜</span></p>
                <p className="text-xs text-[#4A7C59] font-medium mb-3">送料無料</p>
                <p className="text-sm text-[#666]">お花 8〜9本程度</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">料金に関する補足</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 表示価格はすべて税込です</li>
                <li>・ 全プラン送料無料（表示価格のみでOK）</li>
                <li>・ 配送頻度は「毎週」「隔週」から選択可能（マイページで変更可）</li>
                <li>・ 回数縛りなし、いつでも解約OK（違約金なし）</li>
                <li>・ スキップ機能あり（配送を1回飛ばすことが無料で可能）</li>
                <li>・ 3コース x 4サイズ = 計12パターンから選択可能</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Pros Section ─── */}
        <section id="pros" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              medeluのメリット・良い評判
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "業界最安値級の698円〜＆送料無料",
                  text: "medeluの最大の魅力は圧倒的なコストパフォーマンスです。Miniサイズは698円〜で、しかも全プラン送料無料。他社では本体価格に加えて300〜550円の送料がかかるケースが多い中、medeluは表示価格だけで利用できます。例えばbloomeeの体験プラン（980円＋送料385円＝1,365円）と比較すると、約半額でお花のサブスクを始められます。",
                },
                {
                  title: "お部屋に合わせて選べる3コース",
                  text: "ANYROOM・MODERN・NATURALの3コースが用意されており、自分のお部屋の雰囲気に合ったお花が届くのがmedeluならではの特徴です。モダンなお部屋にはシックな色合い、ナチュラルなお部屋には優しい色合いなど、インテリアとの調和を重視したアレンジが届くため、飾ったときの満足感が高いと好評です。",
                },
                {
                  title: "回数縛りなし、いつでも解約OK",
                  text: "medeluには最低利用期間や回数縛りがありません。気に入らなければいつでも解約でき、違約金も発生しません。他社サービスでは4回の最低受け取りが条件になっているところもある中、medeluは1回目から解約可能なので、お試し感覚で気軽に始められます。",
                },
                {
                  title: "市場直送で鮮度が抜群",
                  text: "medeluのお花は市場から直送されるため、鮮度が非常に良いと評判です。花屋を経由せずに直接届くので、中間マージンをカットしつつ鮮度も確保するという仕組みが価格と品質の両立を可能にしています。届いたお花が長持ちするという口コミが多いのも、市場直送ならではの強みです。",
                },
                {
                  title: "30年以上の経験を持つプロが厳選",
                  text: "medeluのお花は、花業界で30年以上の経験を持つプロフェッショナルが厳選しています。長年培った目利き力で、品質の高い旬のお花をセレクト。お花の組み合わせや色合わせのセンスが良いという口コミも多く、プロならではの安定したクオリティが期待できます。",
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
              medeluのデメリット・悪い評判
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "ポスト投函のみ（手渡し不可）",
                  text: "medeluの配送はすべてポスト投函（ゆうパケット）のみで、宅配便（手渡し）には対応していません。そのため、ポストに入るサイズに限られ、大きなブーケや豪華なアレンジを望む方には物足りない場合があります。また、ポストのサイズが小さい場合は利用が難しい可能性もあります。",
                },
                {
                  title: "届く花の写真が事前にわからない",
                  text: "medeluでは届くお花の写真が事前に公開されないため、どんなお花が届くかは届いてからのお楽しみとなります。サプライズ感を楽しめる方には良いですが、イメージと違うお花が届くリスクを気にする方にはデメリットに感じる可能性があります。",
                },
                {
                  title: "地域によって届く花が異なる場合あり",
                  text: "medeluは各地域の市場から直送する仕組みのため、お届け先の地域によって届くお花の種類が異なる場合があります。鮮度を優先するための仕組みですが、SNSで他の人が投稿しているお花と違うものが届くことがある点は事前に把握しておくと良いでしょう。",
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
              medelu利用者の口コミ・評判
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              実際にmedeluを利用したユーザーの口コミをご紹介します。良い口コミだけでなく改善を求める声も含め、バランスよくまとめました。
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
              medeluはこんな人におすすめ
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
                    <span>とにかくコスパ重視でお花のサブスクを始めたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>送料込みの総額を安く抑えたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>お部屋のテイストに合ったお花が欲しい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>回数縛りなしで気軽に試したい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>鮮度の良いお花を求める方</span>
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
                    <span>宅配便（手渡し）で受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>届く前にお花の写真を確認したい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>ポストに入らない大きなブーケが欲しい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>SNSでの情報量が多いサービスを選びたい方</span>
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
              medelu vs 競合サービス比較
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              medeluと人気の花のサブスク2社を比較しました。それぞれの特徴を把握して、自分に合ったサービスを選びましょう。
            </p>
            <div className="table-wrapper">
              <table className="comparison-table w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="rounded-tl-lg">比較項目</th>
                    <th>medelu</th>
                    <th>bloomee</th>
                    <th className="rounded-tr-lg">&FLOWER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-[#333]">最安プラン</td>
                    <td className="font-bold text-[#4A7C59]">698円/回</td>
                    <td>980円/回</td>
                    <td>1,276円/回</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">送料</td>
                    <td className="font-bold text-[#4A7C59]">無料</td>
                    <td>385〜550円</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">1回あたり総額（最安）</td>
                    <td className="font-bold text-[#4A7C59]">698円</td>
                    <td>1,365円</td>
                    <td>1,276円</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">届き方</td>
                    <td>ポスト投函</td>
                    <td>ポスト投函 / 宅配便</td>
                    <td>ポスト投函</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">回数縛り</td>
                    <td className="font-bold text-[#4A7C59]">なし</td>
                    <td>4回</td>
                    <td>なし</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">コース選択</td>
                    <td className="font-bold text-[#4A7C59]">3コース</td>
                    <td>1コース</td>
                    <td>1コース</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">品質保証</td>
                    <td>あり</td>
                    <td>あり</td>
                    <td>あり</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">おすすめポイント</td>
                    <td>コスパ最強・送料無料</td>
                    <td>初心者向け・SNS人気</td>
                    <td>セレクト型・写真で選べる</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">medelu vs bloomee</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  コスパで比較するとmedeluが圧倒的に有利です。medeluのMiniサイズは698円で送料無料のため、1回あたりの総額はbloomeeの体験プラン（980円＋送料385円＝1,365円）の約半額になります。
                  また、medeluは回数縛りがないのに対し、bloomeeは4回の最低受け取りが条件です。
                  一方、bloomeeはSNSでの情報量が圧倒的に多く、全国200店舗以上の提携花屋からアレンジが届くため、毎回違うテイストのお花を楽しめるという強みがあります。初心者への知名度・安心感ではbloomeeに軍配が上がります。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">medelu vs &FLOWER（アンドフラワー）</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  &FLOWERは届くお花の写真を事前に確認でき、不要な週はスキップできるセレクト型のサービスです。最安プランは1,276円で送料無料のため、コスパはmedeluに比べるとやや高め。
                  「届く前にお花を確認したい」という方には&FLOWERが向いていますが、「とにかく安くお花のある暮らしを始めたい」という方にはmedeluがおすすめです。medeluの3コース展開はお部屋に合わせた選択ができる点で独自の強みがあります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── How to Sign Up ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              medeluの始め方（申し込み手順）
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "公式サイトにアクセス",
                  text: "medeluの公式サイト（medelu.flowers）にアクセスし、「お花の定期便を申し込む」ボタンをクリックします。",
                },
                {
                  step: "STEP 2",
                  title: "コースを選択",
                  text: "ANYROOM・MODERN・NATURALの3コースから、お部屋の雰囲気に合ったコースを選びます。迷ったらANYROOMコースがおすすめです。",
                },
                {
                  step: "STEP 3",
                  title: "サイズを選択",
                  text: "Mini（698円〜）・Lite（1,240円〜）・Basic（1,540円〜）・Luxe（2,178円〜）の4サイズから希望のサイズを選びます。お試しならMiniサイズがおすすめです。",
                },
                {
                  step: "STEP 4",
                  title: "配送頻度を選択",
                  text: "「毎週届く」または「隔週届く」のどちらかを選択します。迷ったら隔週から始めるのがおすすめです。",
                },
                {
                  step: "STEP 5",
                  title: "お届け先情報・支払い方法を登録",
                  text: "氏名、住所、電話番号などのお届け先情報とクレジットカード情報を登録します。ポスト投函のため、ポストのサイズを事前に確認しておきましょう。",
                },
                {
                  step: "STEP 6",
                  title: "申し込み完了、お届けを待つ",
                  text: "申し込み完了後、最短で翌週からお花が届き始めます。届いたお花は水切りをしてから花瓶に飾りましょう。回数縛りなしなので、合わなければいつでも解約できます。",
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
              medeluに関するよくある質問
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
              まとめ：medeluはコスパ最強の花のサブスク
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              medelu（メデル）は、業界最安値級の698円〜＆全プラン送料無料という圧倒的なコストパフォーマンスが魅力のお花のサブスクです。
              お部屋の雰囲気に合わせて選べる3コース（ANYROOM・MODERN・NATURAL）、回数縛りなし、市場直送の高い鮮度と、コスパ以外の面でも充実したサービスを提供しています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方で、ポスト投函のみで手渡し不可、届く花の事前確認ができないといったデメリットもあります。
              SNSでの認知度を重視するならbloomee、事前にお花を選びたいなら&FLOWERも検討した上で、自分に合ったサービスを選びましょう。
              コスパ重視で気軽にお花のある暮らしを始めたい方には、medeluが最もおすすめです。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://medelu.flowers"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                medelu公式サイトはこちら
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
            <p className="text-xs text-gray-500 mt-4">
              &copy; 2026 flowerデリ All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
