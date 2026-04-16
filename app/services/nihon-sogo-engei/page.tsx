"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花の定期便 by 日本総合園芸の料金はいくらですか？",
    a: "月1回プランは2,200円（税込）から利用できます。送料は別途かかり、お届け先の地域によって異なります。より豪華な花束が届く上位プランも用意されており、月2回プランや季節の特別プランなども選択可能です。",
  },
  {
    q: "日本総合園芸の花の定期便はどのように届きますか？",
    a: "宅配便による手渡し配達です。ポスト投函ではないため、花が傷む心配が少なく、大きなボリュームの花束をそのままの状態で受け取ることができます。配達日時の指定も可能なので、確実に受け取れる日時を選びましょう。",
  },
  {
    q: "不在時に受け取れなかった場合はどうなりますか？",
    a: "手渡し配達のため、不在の場合は宅配業者の不在票が届きます。不在票に記載の連絡先に電話するか、Webから再配達の日時を指定して受け取ることができます。お花の鮮度を保つため、できるだけ早めの再配達をおすすめします。",
  },
  {
    q: "どんなお花が届きますか？",
    a: "農家から直送される季節の新鮮なお花を、プロのフローリストがアレンジした本格的な花束が届きます。バラ、ガーベラ、カーネーション、ユリなどの定番の花から、季節限定の珍しい花まで幅広いラインナップが特徴です。届くお花の種類は毎回異なり、季節の移り変わりを楽しめます。",
  },
  {
    q: "解約・休止はいつでもできますか？",
    a: "解約・休止はマイページからいつでも手続き可能です。次回配送日の5日前までに手続きすれば、次回分からの配送を停止できます。最低利用期間の縛りはないため、お試しで1回だけの利用も可能です。再開もマイページから簡単に行えます。",
  },
  {
    q: "配送エリアはどこですか？",
    a: "関東・関西・中部エリアを中心に配送に対応しています。農家直送の鮮度を保つため、配送エリアが限定されている点にご注意ください。具体的な対応エリアは公式サイトの配送エリア確認ページで郵便番号を入力して確認できます。",
  },
  {
    q: "プレゼントとして贈ることはできますか？",
    a: "はい、ギフト用の定期便プランも用意されています。お届け先をプレゼント相手の住所に指定することで、毎月お花のギフトを届けることができます。メッセージカードの同封も可能で、母の日や誕生日のプレゼントとして人気があります。",
  },
  {
    q: "日本総合園芸とはどんな会社ですか？",
    a: "日本総合園芸は、長年にわたり園芸・花卉事業を展開してきた老舗企業です。全国の契約農家と直接取引を行い、高品質な花の流通に実績があります。花の定期便サービスでは、その長年のネットワークを活かして農家直送の新鮮なお花を届けています。プロのフローリストが在籍しており、アレンジの品質にも定評があります。",
  },
];

/* ─── User Reviews ─── */
const userReviews = [
  {
    name: "S.Y.",
    age: "40代女性",
    rating: 5,
    title: "花屋さんで買うより断然新鮮です",
    text: "農家直送というだけあって、届くお花の鮮度が段違いです。近所の花屋で買うと2〜3日で元気がなくなることもありましたが、日本総合園芸のお花は1週間以上きれいに咲いてくれます。プロのアレンジもセンスが良くて、毎月届くのが本当に楽しみです。手渡しで届くので花が傷む心配もありません。",
    date: "2026年2月",
  },
  {
    name: "T.M.",
    age: "30代女性",
    rating: 4,
    title: "ボリューム満点で飾り映えする",
    text: "他社のポスト投函型を使っていましたが、物足りなくてこちらに切り替えました。届く花束のボリュームが全然違います。リビングに飾ると部屋の雰囲気がパッと華やかになります。ただ、手渡しなので在宅していないと受け取れないのが少し不便です。配達日時を指定できるので、休日に届くようにしています。",
    date: "2026年1月",
  },
  {
    name: "A.K.",
    age: "50代女性",
    rating: 5,
    title: "老舗ならではの安心感があります",
    text: "園芸の老舗が運営しているという安心感で選びました。期待通り、届くお花の品質が安定しています。季節ごとに旬のお花が届くので、四季を感じられるのも嬉しいポイント。フローリストさんのアレンジも毎回テーマがあるようで、そのまま飾るだけで様になります。お花好きの友人にもすすめました。",
    date: "2025年12月",
  },
  {
    name: "M.H.",
    age: "30代女性",
    rating: 3,
    title: "品質は最高だけど配送エリアが惜しい",
    text: "実家の母にプレゼントしようと思ったのですが、配送エリア外で届けられませんでした。自宅用には大満足しているだけに残念です。あと送料を含めると月3,000円を超えるので、コスパだけで見ると他社より高めかなと思います。ただ、届くお花の鮮度と品質を考えれば納得の価格です。",
    date: "2025年11月",
  },
  {
    name: "R.I.",
    age: "20代女性",
    rating: 4,
    title: "本格的な花束が届いて感動しました",
    text: "初回に届いた花束を見て、そのボリュームと美しさに感動しました。正直、2,200円でこのクオリティは驚きです。花屋さんで同じレベルの花束を買うと3,000円以上はすると思います。月1回なので負担も少なく、ちょうど前の花が枯れる頃に新しい花が届くサイクルが心地良いです。",
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
export default function NihonSogoEngeiPage() {
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
                  <span className="text-[#333] font-medium">花の定期便 by 日本総合園芸</span>
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
              花の定期便 by 日本総合園芸の口コミ・評判を<br className="hidden md:block" />
              徹底調査【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              老舗園芸会社が運営する「花の定期便 by 日本総合園芸」。農家直送の新鮮なお花をプロのフローリストがアレンジ。
              実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">お届け方法</p>
                <p className="text-xl font-bold text-[#4A7C59]">農家直送</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">アレンジ</p>
                <p className="text-xl font-bold text-[#4A7C59]">プロのフローリスト</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安プラン</p>
                <p className="text-xl font-bold text-[#4A7C59]">2,200円/月〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">届き方</p>
                <p className="text-xl font-bold text-[#4A7C59]">手渡し配達</p>
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
                  <li><a href="#overview" className="hover:text-[#4A7C59] transition-colors">1. 花の定期便 by 日本総合園芸とは？サービス概要</a></li>
                  <li><a href="#pricing" className="hover:text-[#4A7C59] transition-colors">2. 料金プラン・送料の詳細</a></li>
                  <li><a href="#pros" className="hover:text-[#4A7C59] transition-colors">3. 日本総合園芸のメリット（良い評判）</a></li>
                  <li><a href="#cons" className="hover:text-[#4A7C59] transition-colors">4. 日本総合園芸のデメリット（悪い評判）</a></li>
                  <li><a href="#reviews" className="hover:text-[#4A7C59] transition-colors">5. 利用者の口コミ・評判</a></li>
                  <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">6. こんな人におすすめ／おすすめしない人</a></li>
                  <li><a href="#comparison" className="hover:text-[#4A7C59] transition-colors">7. 競合サービスとの比較</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#4A7C59] transition-colors">8. 花の定期便の始め方</a></li>
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
              花の定期便 by 日本総合園芸とは？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              「花の定期便 by 日本総合園芸」は、老舗の園芸会社である日本総合園芸が運営するお花の定期便（花のサブスク）サービスです。
              全国の契約農家から直送される新鮮なお花を、プロのフローリストが本格的な花束にアレンジしてお届けします。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              最大の特徴は農家直送による圧倒的な鮮度の高さです。市場を経由せずに農家から直接届くため、通常の花屋で購入するよりも日持ちが良いと評判です。
              宅配便による手渡し配達のため、大きなボリュームの花束が傷むことなく届きます。
              長年の園芸事業で培ったネットワークと品質管理のノウハウが、安定したサービス品質を支えています。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">日本総合園芸 花の定期便 基本情報</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">運営会社</span>
                  <span className="text-[#333]">日本総合園芸</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">サービス形態</span>
                  <span className="text-[#333]">花の定期便（サブスク）</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">お花の特徴</span>
                  <span className="text-[#333]">農家直送・プロのアレンジ</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">最安料金</span>
                  <span className="text-[#333]">月1回 2,200円〜（送料別）</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">届き方</span>
                  <span className="text-[#333]">宅配便（手渡し配達）</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">対応エリア</span>
                  <span className="text-[#333]">関東・関西・中部中心</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">配送頻度</span>
                  <span className="text-[#333]">月1回〜</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">運営の強み</span>
                  <span className="text-[#333]">老舗園芸会社の品質管理</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pricing Table ─── */}
        <section id="pricing" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              日本総合園芸 花の定期便の料金プラン・送料
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花の定期便 by 日本総合園芸は3つのプランを提供しています。いずれも税込価格で、送料は地域により別途かかります。
              月1回の配送が基本で、月2回プランも選択可能です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {/* ライトプラン */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#E8F0EB] px-5 py-4 text-center">
                  <p className="text-xs text-[#999] mb-1">お試しに最適</p>
                  <h3 className="text-lg font-bold text-[#333]">ライトプラン</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">2,200<span className="text-base font-medium">円/月</span></p>
                  <p className="text-xs text-[#999] mb-4">+ 送料（地域により異なる）</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>花束のスタイル：季節のミニブーケ</p>
                    <p>届き方：宅配便（手渡し）</p>
                    <p>配送頻度：月1回</p>
                  </div>
                </div>
              </div>

              {/* スタンダードプラン */}
              <div className="bg-white rounded-xl border-2 border-[#4A7C59] overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-[#4A7C59] text-white text-xs px-3 py-1 rounded-bl-lg">
                  人気
                </div>
                <div className="bg-[#E8F0EB] px-5 py-4 text-center">
                  <p className="text-xs text-[#4A7C59] mb-1">一番人気</p>
                  <h3 className="text-lg font-bold text-[#333]">スタンダードプラン</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">3,850<span className="text-base font-medium">円/月</span></p>
                  <p className="text-xs text-[#999] mb-4">+ 送料（地域により異なる）</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>花束のスタイル：本格アレンジブーケ</p>
                    <p>届き方：宅配便（手渡し）</p>
                    <p>配送頻度：月1回</p>
                  </div>
                </div>
              </div>

              {/* プレミアムプラン */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#E8F0EB] px-5 py-4 text-center">
                  <p className="text-xs text-[#999] mb-1">豪華に楽しみたい方に</p>
                  <h3 className="text-lg font-bold text-[#333]">プレミアムプラン</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">5,500<span className="text-base font-medium">円/月</span></p>
                  <p className="text-xs text-[#999] mb-4">+ 送料（地域により異なる）</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>花束のスタイル：豪華デザイナーズブーケ</p>
                    <p>届き方：宅配便（手渡し）</p>
                    <p>配送頻度：月1回（月2回も可）</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">料金に関する補足</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 表示価格はすべて税込です</li>
                <li>・ 送料はお届け先の地域により異なります（目安：550〜880円）</li>
                <li>・ 農家直送のため、市場流通のお花より鮮度が高いのが特徴です</li>
                <li>・ 最低利用回数の縛りはありません</li>
                <li>・ スキップ機能あり（翌月の配送を1回飛ばすことが可能）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Pros Section ─── */}
        <section id="pros" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              日本総合園芸 花の定期便のメリット・良い評判
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "農家直送で鮮度が最高レベル",
                  text: "日本総合園芸の最大の強みは、全国の契約農家から直送されるお花の鮮度の高さです。市場を経由しないため、収穫から最短でお届けが可能。通常の花屋で買うお花と比べて、2〜3日長く楽しめるという口コミが多く見られます。特にバラやユリなど、鮮度が命のお花で違いが実感できると評判です。",
                },
                {
                  title: "プロのフローリストによる本格アレンジ",
                  text: "在籍するプロのフローリストが、季節に合わせたテーマで一つひとつ丁寧にアレンジします。色合いのバランスや花材の組み合わせにプロの技が光り、そのまま飾るだけで部屋が華やかになります。花屋で購入するのと同等かそれ以上のアレンジ品質が自宅に届く点が高く評価されています。",
                },
                {
                  title: "ボリューム満点の花束が届く",
                  text: "ポスト投函型のサービスとは異なり、宅配便で届くため花束のサイズに制限がありません。ライトプランでも花屋の店頭で1,500〜2,000円相当のボリュームがあり、スタンダードプラン以上では「こんなに届くの？」と驚く利用者も。飾り映えするボリュームを求める方に特におすすめです。",
                },
                {
                  title: "手渡し配達で花が傷まず安心",
                  text: "すべてのプランが宅配便による手渡し配達です。ポスト投函のように花が折れたり、暑さで傷んだりするリスクがほとんどありません。専用の箱に丁寧に梱包された状態で届くため、開封時の感動も大きいと好評です。特に夏場はポスト投函型との品質差が顕著になります。",
                },
                {
                  title: "老舗園芸会社ならではの信頼性",
                  text: "日本総合園芸は長年にわたり園芸・花卉事業を展開してきた老舗企業です。花の品質管理ノウハウや農家とのネットワークが豊富で、安定した品質のお花が届きます。新興のスタートアップ系サービスとは異なる、老舗ならではの安心感と信頼性が支持されています。",
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
              日本総合園芸 花の定期便のデメリット・悪い評判
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "価格がやや高め",
                  text: "最安プランでも月2,200円（税込・送料別）のため、送料を含めると1回あたり約2,750〜3,080円になります。bloomeeの体験プラン（1,365円/回）やmedeluのLiteプラン（698円/回・送料無料）と比べると割高です。ただし、届くお花のボリュームと鮮度を考慮すると、花屋で同等の花束を買うよりはお得という声もあります。",
                },
                {
                  title: "手渡しのため不在時に受け取れない",
                  text: "すべてのプランが宅配便による手渡し配達のため、不在の場合は再配達が必要になります。一人暮らしで日中不在が多い方や、受け取り時間の調整が難しい方にはやや不便です。配達日時の指定は可能ですが、ポスト投函型のような「いつでも受け取れる」手軽さはありません。",
                },
                {
                  title: "配送エリアが限定されている",
                  text: "農家直送の鮮度を保つため、配送エリアが関東・関西・中部を中心とした地域に限定されています。北海道、東北の一部、四国、九州、沖縄、離島は配送対象外の場合があります。全国対応のbloomeeやmedeluと比べると、利用できるエリアが狭い点はデメリットです。公式サイトで事前にエリア確認が必要です。",
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
              花の定期便 by 日本総合園芸 利用者の口コミ・評判
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              実際に花の定期便 by 日本総合園芸を利用したユーザーの口コミをご紹介します。良い口コミだけでなく改善を求める声も含め、バランスよくまとめました。
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
              花の定期便 by 日本総合園芸はこんな人におすすめ
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
                    <span>鮮度の高い新鮮なお花を楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>ボリュームのある本格的な花束が欲しい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>プロのフローリストのアレンジを自宅で楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>在宅時間が確保でき、手渡しで受け取れる方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>信頼できる老舗企業のサービスを選びたい方</span>
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
                    <span>できるだけ安くお花を楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>日中不在が多く、ポスト投函で受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>配送エリア外にお住まいの方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>毎週届く高頻度の配送を希望する方</span>
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
              日本総合園芸 vs 競合サービス比較
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花の定期便 by 日本総合園芸と人気の花のサブスク2社を比較しました。それぞれの特徴を把握して、自分に合ったサービスを選びましょう。
            </p>
            <div className="table-wrapper">
              <table className="comparison-table w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="rounded-tl-lg">比較項目</th>
                    <th>日本総合園芸</th>
                    <th>bloomee</th>
                    <th className="rounded-tr-lg">medelu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-[#333]">最安プラン</td>
                    <td>2,200円/月</td>
                    <td>980円/回</td>
                    <td>698円/回</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">送料</td>
                    <td>550〜880円</td>
                    <td>385〜550円</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">花のボリューム</td>
                    <td className="font-bold text-[#4A7C59]">多い（本格花束）</td>
                    <td>少なめ（3本〜）</td>
                    <td>少なめ（3本〜）</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">届き方</td>
                    <td>宅配便（手渡し）</td>
                    <td>ポスト投函</td>
                    <td>ポスト投函</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">鮮度</td>
                    <td className="font-bold text-[#4A7C59]">非常に高い（農家直送）</td>
                    <td>普通</td>
                    <td>高い（市場直送）</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">回数縛り</td>
                    <td>なし</td>
                    <td>4回</td>
                    <td>なし</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">対応エリア</td>
                    <td>関東・関西・中部中心</td>
                    <td>全国（離島除く）</td>
                    <td>全国（離島除く）</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">おすすめポイント</td>
                    <td>鮮度・品質・ボリューム</td>
                    <td>手軽さ・初心者向け</td>
                    <td>コスパ最強</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">日本総合園芸 vs bloomee</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  手軽さと価格ではbloomeeに軍配が上がります。bloomeeはポスト投函で受け取りの手間がなく、体験プラン980円+送料385円=1,365円/回から始められます。
                  一方、日本総合園芸は農家直送の鮮度の高さと、プロのフローリストによる本格的な花束が強みです。
                  「手軽に少額で始めたい」ならbloomee、「鮮度とボリュームにこだわりたい」なら日本総合園芸がおすすめです。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">日本総合園芸 vs medelu</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  コスパではmedeluが圧倒的です。medeluは月額698円で送料無料のため、日本総合園芸の約4分の1の費用で花のある生活を始められます。
                  ただしmedeluはポスト投函で花のボリュームも控えめ。日本総合園芸は手渡し配達でボリューム満点の本格花束が届くため、お花の品質と見栄えを重視する方には日本総合園芸が適しています。
                  費用を抑えつつ手軽に楽しみたいならmedelu、品質重視なら日本総合園芸という選び方がおすすめです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── How to Sign Up ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花の定期便 by 日本総合園芸の始め方（申し込み手順）
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "公式サイトにアクセス",
                  text: "日本総合園芸の公式サイトにアクセスし、「花の定期便」のページを開きます。",
                },
                {
                  step: "STEP 2",
                  title: "配送エリアを確認",
                  text: "お届け先の郵便番号を入力して、配送対応エリア内かどうかを確認します。エリア外の場合は残念ながら利用できません。",
                },
                {
                  step: "STEP 3",
                  title: "プランを選択",
                  text: "ライトプラン（2,200円）、スタンダードプラン（3,850円）、プレミアムプラン（5,500円）の中から希望のプランを選びます。迷ったらスタンダードプランがおすすめです。",
                },
                {
                  step: "STEP 4",
                  title: "配送頻度・日時を選択",
                  text: "月1回または月2回の配送頻度を選び、希望の配達日時を指定します。手渡し配達のため、確実に在宅している日時を選びましょう。",
                },
                {
                  step: "STEP 5",
                  title: "お届け先情報・支払い方法を入力",
                  text: "氏名、住所、電話番号などのお届け先情報と、クレジットカードなどの支払い方法を登録します。",
                },
                {
                  step: "STEP 6",
                  title: "申し込み完了、お届けを待つ",
                  text: "申し込み完了後、初回のお届け日に農家直送の新鮮な花束が届きます。届いたら茎を水切りして花瓶に飾りましょう。付属のケアガイドに長持ちさせるコツが記載されています。",
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
              花の定期便 by 日本総合園芸に関するよくある質問
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
              まとめ：日本総合園芸は鮮度とボリューム重視の方に最適
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花の定期便 by 日本総合園芸は、農家直送の新鮮なお花をプロのフローリストがアレンジした本格的な花束が届くサービスです。
              手渡し配達でボリューム満点の花束が傷むことなく届き、老舗園芸会社ならではの安定した品質が魅力です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方で、送料込みの価格はやや高め、配送エリアが限定的、手渡しのため不在時に受け取れないといった点はデメリットとして把握しておきましょう。
              手軽さ重視ならbloomee、コスパ重視ならmedeluも検討した上で、お花の鮮度と品質を最重視する方にはこのサービスがおすすめです。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                日本総合園芸 公式サイトはこちら
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
