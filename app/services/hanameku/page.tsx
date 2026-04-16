"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "ハナメク（hanameku）の料金はいくらですか？",
    a: "ハナメクには3つのプランがあります。ライトプランは1回858円（税込・送料別）、スタンダードプランは1回1,958円（税込・送料別）、セルフプランは1回2,680円（税込・送料別）です。いずれも回数縛りなしで、いつでも解約できます。",
  },
  {
    q: "ハナメクの解約方法を教えてください。",
    a: "ハナメクの解約はマイページから手続きできます。回数縛りがないため、いつでも自由に解約が可能です。次回配送日の数日前までにマイページで解約手続きを行えば、追加料金なしで解約できます。解約後も届いた花の情報はアプリで引き続き確認できます。",
  },
  {
    q: "ハナメクのお花はどのように届きますか？",
    a: "ハナメクのお花はポスト投函で届きます。市場から直送されるため、鮮度の高い切り花が届くのが特徴です。専用のパッケージに丁寧に梱包された状態で届くため、不在時でも安心して受け取れます。",
  },
  {
    q: "ハナメクのアプリではどんな情報が見られますか？",
    a: "ハナメクの専用アプリでは、届いたお花の品種名、産地情報、お手入れ方法などを確認できます。花の名前がわからなくても、アプリを開けばすぐに確認できるため、お花の知識を深めながら楽しむことができます。",
  },
  {
    q: "ハナメクの配送エリアはどこですか？",
    a: "ハナメクは日本国内の多くの地域に対応していますが、一部の離島や配送が難しい地域では対応エリア外となる場合があります。詳しい配送対応エリアは公式サイトで郵便番号を入力して確認できます。",
  },
  {
    q: "ハナメクのセルフプランとは何ですか？",
    a: "セルフプランは、届いたお花を自分でアレンジして楽しむためのプランです。通常のプランではアレンジ済みのお花が届きますが、セルフプランでは茎が長めの状態でお花が届くため、自分好みのアレンジや生け方を楽しめます。お花に慣れてきた方やフラワーアレンジメントに挑戦したい方におすすめです。",
  },
  {
    q: "ハナメクのお花が傷んでいた場合はどうすればいいですか？",
    a: "届いたお花に傷みや問題があった場合は、カスタマーサポートに連絡することで対応してもらえます。市場直送で鮮度管理には力を入れていますが、配送中のトラブルに対しても丁寧に対応してくれると口コミで評判です。",
  },
  {
    q: "ハナメクはプレゼントとして贈ることはできますか？",
    a: "はい、ハナメクではギフト用の花の定期便も利用可能です。公式サイトからギフト設定を行うことで、大切な方へお花の定期便をプレゼントできます。母の日や誕生日など、特別なギフトとして人気があります。",
  },
];

/* ─── User Reviews ─── */
const userReviews = [
  {
    name: "S.Y.",
    age: "30代女性",
    rating: 5,
    title: "市場直送だから鮮度が全然違います",
    text: "以前は別の花のサブスクを使っていましたが、ハナメクに切り替えてからお花の持ちが格段に良くなりました。市場から直接届くので、花屋さんを経由するサービスより明らかに鮮度が違います。1週間以上きれいに咲いてくれるので、コスパも良いと感じています。",
    date: "2026年2月",
  },
  {
    name: "T.M.",
    age: "40代女性",
    rating: 4,
    title: "アプリで花の情報がわかるのが嬉しい",
    text: "届いたお花の名前や産地がアプリで確認できるのが気に入っています。今まで花の名前を知らずに飾っていましたが、ハナメクを始めてからは花の品種に詳しくなりました。お花の知識が増えるのも楽しさのひとつです。スタンダードプランで十分満足しています。",
    date: "2026年1月",
  },
  {
    name: "A.K.",
    age: "20代女性",
    rating: 4,
    title: "回数縛りなしが決め手でした",
    text: "初めての花のサブスクだったので、いつでも解約できるハナメクを選びました。結局気に入ってずっと続けていますが、縛りがないという安心感は大きいです。ライトプランは858円で始められるのでお試しにぴったり。ただ、ライトプランだと花の本数が少なめなので、スタンダードに変更しようか検討中です。",
    date: "2025年12月",
  },
  {
    name: "M.H.",
    age: "30代女性",
    rating: 5,
    title: "セルフプランで自分好みにアレンジ",
    text: "フラワーアレンジメントに興味があったので、セルフプランを利用しています。茎が長めの状態で届くので、自分で好きな長さに切って生けられるのが最高です。市場直送なのでお花も新鮮で、生花店で買うのと変わらないクオリティ。毎回届くのが楽しみです。",
    date: "2026年3月",
  },
  {
    name: "R.I.",
    age: "40代女性",
    rating: 3,
    title: "お花は良いけど配送エリアに注意",
    text: "お花の鮮度やクオリティは文句なしです。ただ、以前引っ越した際に新しい住所が配送エリア外だったことがあり、一時的に利用できなくなりました。現在の住所では問題なく届いていますが、引っ越しの予定がある方は事前にエリア確認をおすすめします。",
    date: "2025年11月",
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
export default function HanamekuPage() {
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
                  <span className="text-[#333] font-medium">ハナメク（hanameku）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F5E9] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              ハナメク（hanameku）の口コミ・評判を<br className="hidden md:block" />
              徹底調査【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              市場直送で新鮮なお花が届く花のサブスク「ハナメク（hanameku）」。
              実際の利用者の口コミ・評判をもとに、料金プラン・メリット・デメリットを詳しく解説します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最大の特徴</p>
                <p className="text-xl font-bold text-[#4A7C59]">市場直送</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">回数縛り</p>
                <p className="text-xl font-bold text-[#4A7C59]">なし</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安プラン</p>
                <p className="text-xl font-bold text-[#4A7C59]">858円/回〜</p>
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
                  <li><a href="#overview" className="hover:text-[#4A7C59] transition-colors">1. ハナメク（hanameku）とは？サービス概要</a></li>
                  <li><a href="#pricing" className="hover:text-[#4A7C59] transition-colors">2. 料金プラン・送料の詳細</a></li>
                  <li><a href="#pros" className="hover:text-[#4A7C59] transition-colors">3. ハナメクのメリット（良い評判）</a></li>
                  <li><a href="#cons" className="hover:text-[#4A7C59] transition-colors">4. ハナメクのデメリット（悪い評判）</a></li>
                  <li><a href="#reviews" className="hover:text-[#4A7C59] transition-colors">5. 利用者の口コミ・評判</a></li>
                  <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">6. こんな人におすすめ／おすすめしない人</a></li>
                  <li><a href="#comparison" className="hover:text-[#4A7C59] transition-colors">7. 競合サービスとの比較</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#4A7C59] transition-colors">8. ハナメクの始め方</a></li>
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
              ハナメク（hanameku）とは？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              ハナメク（hanameku）は、花き市場から直接お花を届ける花のサブスクリプションサービスです。
              市場直送にこだわることで、花屋を経由するサービスと比べて圧倒的な鮮度を実現しています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              回数縛りがなくいつでも解約できる手軽さと、届いたお花の品種や産地情報をアプリで確認できるユニークな機能が特徴です。
              ライトプランは858円/回からとリーズナブルで、セルフアレンジを楽しめるプランも用意されているなど、初心者から上級者まで幅広く対応したサービスです。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">ハナメク 基本情報</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">サービス名</span>
                  <span className="text-[#333]">ハナメク（hanameku）</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">特徴</span>
                  <span className="text-[#333]">市場直送で新鮮なお花</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">最安プラン</span>
                  <span className="text-[#333]">858円/回（税込・送料別）</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">回数縛り</span>
                  <span className="text-[#333]">なし（いつでも解約OK）</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">届き方</span>
                  <span className="text-[#333]">ポスト投函</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">アプリ</span>
                  <span className="text-[#333]">花の情報確認機能あり</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">プラン数</span>
                  <span className="text-[#333]">3プラン</span>
                </div>
                <div className="flex">
                  <span className="text-[#999] w-28 shrink-0">セルフアレンジ</span>
                  <span className="text-[#333]">対応（セルフプラン）</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Pricing Table ─── */}
        <section id="pricing" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ハナメクの料金プラン・送料
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              ハナメクは3つのプランを提供しています。いずれも税込価格で、送料は別途かかります。
              回数縛りがないため、気軽にプラン変更や解約が可能です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {/* ライトプラン */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#E8F5E9] px-5 py-4 text-center">
                  <p className="text-xs text-[#999] mb-1">気軽に始めたい方に</p>
                  <h3 className="text-lg font-bold text-[#333]">ライトプラン</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">858<span className="text-base font-medium">円/回</span></p>
                  <p className="text-xs text-[#999] mb-4">+ 送料別</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>お花の本数：少なめ</p>
                    <p>届き方：ポスト投函</p>
                    <p>市場直送の新鮮なお花</p>
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
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">1,958<span className="text-base font-medium">円/回</span></p>
                  <p className="text-xs text-[#999] mb-4">+ 送料別</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>お花の本数：しっかりボリューム</p>
                    <p>届き方：ポスト投函</p>
                    <p>アプリで花の情報確認可</p>
                  </div>
                </div>
              </div>

              {/* セルフプラン */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#E8F5E9] px-5 py-4 text-center">
                  <p className="text-xs text-[#999] mb-1">自分でアレンジしたい方に</p>
                  <h3 className="text-lg font-bold text-[#333]">セルフプラン</h3>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-3xl font-bold text-[#4A7C59] mb-1">2,680<span className="text-base font-medium">円/回</span></p>
                  <p className="text-xs text-[#999] mb-4">+ 送料別</p>
                  <div className="text-sm text-[#666] space-y-2 text-left">
                    <p>茎長めでアレンジ自由</p>
                    <p>届き方：ポスト投函</p>
                    <p>フラワーアレンジメント向き</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">料金に関する補足</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 表示価格はすべて税込です</li>
                <li>・ 送料はプラン・配送先により異なります</li>
                <li>・ 回数縛りなし。いつでも解約・プラン変更が可能です</li>
                <li>・ スキップ機能あり（配送を1回飛ばすことが可能）</li>
                <li>・ セルフプランは自分でアレンジを楽しみたい方向けのプランです</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Pros Section ─── */}
        <section id="pros" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ハナメクのメリット・良い評判
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "市場直送で鮮度抜群",
                  text: "ハナメク最大の強みは、花き市場から直接お花が届くこと。花屋を経由しないため、流通にかかる時間が短く、新鮮な状態のお花を楽しめます。口コミでも「他のサービスより明らかに花持ちが良い」「1週間以上きれいに咲いている」といった鮮度を評価する声が多く見られます。",
                },
                {
                  title: "回数縛りなし、いつでも解約OK",
                  text: "ハナメクは回数縛りがなく、いつでも自由に解約できます。花のサブスクを初めて試す方にとって、「合わなかったらすぐやめられる」という安心感は大きなメリット。他社サービスでは4回の最低利用回数がある場合もあるため、この点でハナメクは気軽に始められるサービスと言えます。",
                },
                {
                  title: "花の情報がアプリで確認できる",
                  text: "届いたお花の品種名、産地、お手入れ方法などを専用アプリで確認できるのはハナメクならではの機能です。「名前も知らなかった花に愛着が湧いた」「産地を知ると大切にしたくなる」という口コミがあり、お花を楽しむだけでなく知識を深められる点が好評です。",
                },
                {
                  title: "リーズナブルな価格設定",
                  text: "ライトプランは858円/回と、花のサブスクの中でもトップクラスの低価格です。市場直送で中間コストを抑えているため、品質に対して価格が非常にリーズナブル。お花のある生活を無理なく続けられる価格設定が評価されています。",
                },
                {
                  title: "セルフアレンジプランあり",
                  text: "他社にはあまり見られないセルフプラン（2,680円/回）では、茎が長めの状態でお花が届くため、自分好みのアレンジが楽しめます。フラワーアレンジメントに挑戦したい方や、お花の扱いに慣れた上級者にも対応できるユニークなプランです。",
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
              ハナメクのデメリット・悪い評判
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "配送エリアが限定される場合あり",
                  text: "ハナメクは一部の地域では配送に対応していない場合があります。特に離島や配送ルートの関係で届けられないエリアがあるため、申し込み前に公式サイトで配送対応エリアを確認する必要があります。引っ越し時にエリア外になったという口コミもあるため、転居予定がある方は注意が必要です。",
                },
                {
                  title: "ライトプランは花の本数が少なめ",
                  text: "858円というリーズナブルな価格が魅力のライトプランですが、花の本数は少なめです。テーブルに飾るには物足りないと感じる方もいます。しっかりとしたボリュームを求める場合は、スタンダードプラン（1,958円）やセルフプラン（2,680円）を検討するのがおすすめです。",
                },
                {
                  title: "ポスト投函のみの配送方法",
                  text: "ハナメクの配送はポスト投函のみとなっています。宅配便（手渡し）での受け取りには対応していないため、大きなボリュームのお花を希望する場合は他社サービスも検討する必要があります。また、夏場はポスト内の温度上昇によるお花へのダメージが心配という声もあります。",
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
              ハナメク利用者の口コミ・評判
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              実際にハナメク（hanameku）を利用したユーザーの口コミをご紹介します。良い口コミだけでなく改善を求める声も含め、バランスよくまとめました。
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
              ハナメクはこんな人におすすめ
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
                    <span>お花の鮮度・持ちの良さを重視する方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>回数縛りなしで気軽に始めたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>届いた花の品種や産地を知りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>リーズナブルにお花のある生活を楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>自分でフラワーアレンジメントに挑戦したい方</span>
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
                    <span>配送エリア外にお住まいの方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>大きなボリュームのお花を宅配便で受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>送料込みの総額で最安を求める方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>花屋さんのプロのアレンジをそのまま楽しみたい方</span>
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
              ハナメク vs 競合サービス比較
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              ハナメクと人気の花のサブスク2社を比較しました。それぞれの特徴を把握して、自分に合ったサービスを選びましょう。
            </p>
            <div className="table-wrapper">
              <table className="comparison-table w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="rounded-tl-lg">比較項目</th>
                    <th>ハナメク</th>
                    <th>bloomee</th>
                    <th className="rounded-tr-lg">medelu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-[#333]">最安プラン</td>
                    <td className="font-bold text-[#4A7C59]">858円/回</td>
                    <td>980円/回</td>
                    <td>698円/回</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">送料</td>
                    <td>別途</td>
                    <td>385〜550円</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">鮮度</td>
                    <td className="font-bold text-[#4A7C59]">市場直送</td>
                    <td>花屋経由</td>
                    <td>市場仕入れ</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">届き方</td>
                    <td>ポスト投函</td>
                    <td>ポスト投函/宅配便</td>
                    <td>ポスト投函</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">回数縛り</td>
                    <td className="font-bold text-[#4A7C59]">なし</td>
                    <td>4回</td>
                    <td>なし</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">アプリ対応</td>
                    <td className="font-bold text-[#4A7C59]">あり（花情報確認）</td>
                    <td>あり</td>
                    <td>なし</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">セルフアレンジ</td>
                    <td className="font-bold text-[#4A7C59]">対応</td>
                    <td>非対応</td>
                    <td>非対応</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">おすすめポイント</td>
                    <td>鮮度重視・花の知識</td>
                    <td>初心者向け・手軽さ</td>
                    <td>コスパ最強</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">ハナメク vs bloomee</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  bloomeeは全国200店舗以上の花屋と提携しており、SNS人気もNo.1クラスの知名度を誇ります。一方、ハナメクは市場直送にこだわることで鮮度で優位性があります。
                  また、bloomeeには4回の最低受け取り回数がありますが、ハナメクは回数縛りなし。気軽にお試ししたい方にはハナメクの方が始めやすいと言えます。
                  花屋のアレンジの多様性を楽しみたい方はbloomee、鮮度と自由度を重視する方はハナメクがおすすめです。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">ハナメク vs medelu</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  medeluは月額698円・送料無料と、総額でのコスパが最も優れたサービスです。一方、ハナメクは市場直送による鮮度の高さと、アプリでの花情報確認機能、セルフアレンジプランといった独自の付加価値があります。
                  価格だけで選ぶならmedelu、お花の鮮度や知識を深める体験を重視するならハナメクがおすすめです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── How to Sign Up ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ハナメクの始め方（申し込み手順）
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "公式サイトにアクセス",
                  text: "ハナメクの公式サイトにアクセスし、「お花の定期便を申し込む」ボタンをクリックします。",
                },
                {
                  step: "STEP 2",
                  title: "プランを選択",
                  text: "ライトプラン（858円）、スタンダードプラン（1,958円）、セルフプラン（2,680円）の中から希望のプランを選びます。",
                },
                {
                  step: "STEP 3",
                  title: "配送先・配送頻度を設定",
                  text: "お届け先の住所を入力し、配送頻度を選択します。ポスト投函で届くため、ポストのサイズを事前に確認しておきましょう。",
                },
                {
                  step: "STEP 4",
                  title: "支払い方法を登録",
                  text: "クレジットカード情報を登録します。申し込み完了後、回数縛りなしでいつでもプラン変更・解約が可能です。",
                },
                {
                  step: "STEP 5",
                  title: "アプリをダウンロード",
                  text: "ハナメクの専用アプリをダウンロードしておくと、届いたお花の品種名や産地、お手入れ方法が確認できて便利です。",
                },
                {
                  step: "STEP 6",
                  title: "お届けを待つ",
                  text: "申し込み完了後、市場から直送された新鮮なお花がポストに届きます。届いたお花は水切りをしてから花瓶に飾りましょう。",
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
              ハナメクに関するよくある質問
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
        <section id="summary" className="py-12 md:py-16 bg-[#E8F5E9]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：ハナメクは鮮度重視の方に最適な花のサブスク
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              ハナメク（hanameku）は、市場直送で鮮度抜群のお花が届く花のサブスクサービスです。
              回数縛りなしでいつでも解約でき、858円/回のライトプランから気軽に始められます。
              届いたお花の品種や産地をアプリで確認できる独自機能や、自分でアレンジを楽しめるセルフプランなど、他社にはない魅力が詰まっています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一方で、配送エリアが限定される場合がある点や、ポスト投函のみの配送方法、ライトプランの花の本数が少なめな点はデメリットとして把握しておきましょう。
              コスパ重視ならmedelu、知名度・実績重視ならbloomeeも検討した上で、自分に合ったサービスを選ぶのがおすすめです。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://hanameku.jp"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                ハナメク公式サイトはこちら
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
