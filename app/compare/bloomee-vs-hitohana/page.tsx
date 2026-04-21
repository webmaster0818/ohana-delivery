"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "bloomeeとHitoHana、初心者にはどちらがおすすめですか？",
    a: "手軽さ重視ならbloomeeがおすすめです。ポスト投函で受け取れ、980円から始められます。一方、花の色やボリュームにこだわりたい方はHitoHanaが向いています。HitoHanaは色を選べるため、インテリアに合わせた花を受け取れます。",
  },
  {
    q: "bloomeeの4回縛りとHitoHanaの回数縛りについて教えてください",
    a: "bloomeeは最低4回の受け取りが必要で、4回未満での解約は残り回数分の料金が発生します。HitoHanaは回数縛りがなく、いつでも解約可能です。お試しで始めたい方はHitoHanaの方がリスクが少ないです。",
  },
  {
    q: "両方同時に利用することはできますか？",
    a: "はい、併用は可能です。bloomeeのお手頃プランで日常の花を確保しつつ、HitoHanaの上位プランを月1回利用して特別感のある花を楽しむという使い方をしている方もいます。ただし、費用がかさむため、まずは片方を試してから検討するのがおすすめです。",
  },
  {
    q: "品質保証制度はどちらにもありますか？",
    a: "はい、どちらのサービスにも品質保証制度があります。bloomeeは届いた花が傷んでいた場合、写真を送ることで再送対応が受けられます。HitoHanaも同様に、品質に問題があった場合は再送してもらえます。申請期限はどちらも届いてから数日以内です。",
  },
];

/* ─── Comparison Items ─── */
const comparisonItems = [
  { item: "最安プラン", bloomee: "980円/回（体験プラン）", hitohana: "1,320円/回（Sサイズ）", winner: "bloomee" },
  { item: "送料", bloomee: "385円〜", hitohana: "無料", winner: "hitohana" },
  { item: "総額（最安）", bloomee: "1,365円/回", hitohana: "1,320円/回", winner: "hitohana" },
  { item: "花の本数", bloomee: "3本〜（プランによる）", hitohana: "4本〜（サイズによる）", winner: "hitohana" },
  { item: "花の色選択", bloomee: "不可（おまかせ）", hitohana: "可能（7色から選択）", winner: "hitohana" },
  { item: "配送方法", bloomee: "ポスト投函 / 宅配便", hitohana: "宅配便のみ", winner: "bloomee" },
  { item: "回数縛り", bloomee: "4回", hitohana: "なし", winner: "hitohana" },
  { item: "配送頻度", bloomee: "毎週 / 隔週", hitohana: "毎週 / 隔週 / 月1回", winner: "hitohana" },
];

/* ─── Main Component ─── */
export default function BloomeeVsHitohanaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>bloomee vs HitoHana 徹底比較｜どっちがおすすめ？【2026年】</title>
      <meta name="description" content="bloomee（ブルーミー）とHitoHana（ひとはな）を8項目で徹底比較。料金・送料・花の本数・色選択・回数縛りなど、目的別にどちらがおすすめかを解説します。" />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</a></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#666]">比較</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#333] font-medium">bloomee vs HitoHana</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">サービス比較</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              bloomee vs HitoHana 徹底比較<br className="hidden md:block" />
              どっちがおすすめ？【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              人気の花サブスク「bloomee」と「HitoHana」を8つの項目で徹底比較。
              あなたの目的に合ったサービスがどちらか、わかりやすく解説します。
            </p>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              8項目比較表
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5] w-1/4">比較項目</th>
                    <th className="text-center px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5] w-5/16">bloomee</th>
                    <th className="text-center px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5] w-5/16">HitoHana</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonItems.map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E5E5]">
                      <td className="px-3 py-3 font-medium text-[#333]">{row.item}</td>
                      <td className={`px-3 py-3 text-center ${row.winner === "bloomee" ? "bg-[#E8F0EB] font-bold text-[#4A7C59]" : "text-[#666]"}`}>
                        {row.bloomee}
                      </td>
                      <td className={`px-3 py-3 text-center ${row.winner === "hitohana" ? "bg-[#E8F0EB] font-bold text-[#4A7C59]" : "text-[#666]"}`}>
                        {row.hitohana}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#999] mt-3">※ 価格はすべて税込。2026年4月時点の情報です。</p>
          </div>
        </section>

        {/* ─── bloomee Strengths ─── */}
        <section className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomeeの強み
            </h2>
            <div className="space-y-4">
              {[
                { title: "ポスト投函で不在時も安心", text: "体験プラン・レギュラープランはポスト投函に対応。日中不在が多い方でも、帰宅後にポストから受け取れます。宅配便の時間指定が難しい方には大きなメリットです。" },
                { title: "知名度No.1の安心感", text: "花のサブスクで最も知名度が高く、累計利用者数も業界トップクラス。口コミやレビューが豊富で、事前に情報収集しやすいのも利点です。" },
                { title: "花代980円からの手軽さ", text: "体験プランは花代980円と、気軽に始めやすい価格設定。花のある暮らしをまず体験してみたい初心者に向いています。" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <h3 className="text-sm font-bold text-[#333] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HitoHana Strengths ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaの強み
            </h2>
            <div className="space-y-4">
              {[
                { title: "花の色を7色から選べる", text: "ホワイト・レッド・イエロー・オレンジ・ブルー・ブラウン・ピンクの7色から好みの色を選択可能。部屋のインテリアや気分に合わせてカスタマイズできるのはHitoHanaならではの魅力です。" },
                { title: "送料無料でトータルコストが明確", text: "すべてのプランで送料無料。表示価格がそのまま支払い総額になるため、料金体系がわかりやすく、隠れコストがありません。" },
                { title: "回数縛りなしでいつでも解約OK", text: "最低利用回数の縛りがないため、1回試して合わなければすぐに解約できます。初めてで不安な方も、金銭的リスクなく始められます。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CB]">
                  <h3 className="text-sm font-bold text-[#333] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Recommendation ─── */}
        <section className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              目的別おすすめ
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomeeがおすすめな人</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>ポスト投函で気軽に受け取りたい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>とにかく安く花サブスクを始めたい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>花のセレクトはプロにおまかせしたい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>知名度の高いサービスで安心感がほしい</li>
                </ul>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CB]">
                <h3 className="text-base font-bold text-[#333] mb-3">HitoHanaがおすすめな人</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>花の色を自分で選びたい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>送料を気にせず利用したい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>回数縛りなしで気軽に試したい</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#9679;</span>ボリュームのある花を楽しみたい</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomee vs HitoHanaに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#F8F8F8] hover:bg-[#E8F0EB] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#333] pr-4">Q. {item.q}</span>
                    <svg className={`w-4 h-4 text-[#999] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-white">
                      <p className="text-sm text-[#666] leading-relaxed">A. {item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section className="py-12 md:py-16 bg-[#F3EDE6]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：迷ったらHitoHanaがおすすめ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              8項目で比較した結果、総合的には<strong>HitoHana</strong>が優勢です。送料無料・回数縛りなし・色選択可能と、ユーザーにとって嬉しいポイントが多く揃っています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              ただし、ポスト投函で手軽に受け取りたい方や、まずは低予算で花サブスクを体験したい方には<strong>bloomee</strong>が向いています。目的や生活スタイルに合わせて選びましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/hitohana" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                HitoHanaの詳細を見る
              </a>
              <a href="/services/bloomee" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                bloomeeの詳細を見る
              </a>
            </div>
            <a href="/" className="inline-block mt-4 text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline">
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
              <p className="text-xs text-gray-400">花のサブスクを徹底比較。あなたにぴったりのサービスが見つかる。</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <a href="/" className="hover:text-white transition-colors">トップページ</a>
              <a href="/#comparison" className="hover:text-white transition-colors">比較表</a>
              <a href="/#reviews" className="hover:text-white transition-colors">サービス詳細</a>
              <a href="/#faq" className="hover:text-white transition-colors">よくある質問</a>
            </nav>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center">
            <p className="text-xs text-gray-500">当サイトはアフィリエイトプログラムに参加しています。リンク先のサービスで購入等が行われた場合、当サイトが紹介手数料を受け取ることがあります。</p>
            <p className="text-xs text-gray-500 mt-2">掲載情報は2026年4月時点のものです。最新の料金・サービス内容は各公式サイトでご確認ください。</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
              <a href="/terms-of-service" className="hover:text-white transition-colors">利用規約</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="/content-policy" className="hover:text-white transition-colors">記事の制作ポリシー</a>
            </div>
            <p className="text-xs text-gray-500 mt-4">&copy; 2026 flowerデリ All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
