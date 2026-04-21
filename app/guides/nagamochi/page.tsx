"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "切り花は平均で何日くらい持ちますか？",
    a: "適切なお手入れをした場合、一般的な切り花は5〜10日程度持ちます。花の種類によって差があり、カーネーションやアルストロメリアは2週間近く持つこともあります。逆にガーベラやチューリップは5日程度と短めです。水切りと延命剤の使用で、平均1.5〜2倍長持ちさせることができます。",
  },
  {
    q: "切り花延命剤は必ず使った方がいいですか？",
    a: "使用を強くおすすめします。延命剤には花に必要な糖分（栄養）と殺菌剤が含まれており、水だけの場合と比べて花持ちが大幅に向上します。100均やホームセンターで手軽に購入でき、1回あたり数十円のコストで花の寿命が1.5〜2倍になるため、コスパも抜群です。",
  },
  {
    q: "花瓶の水はどのくらいの頻度で替えるべきですか？",
    a: "延命剤を使っている場合は2〜3日に1回、使っていない場合は毎日替えるのが理想です。夏場は水が腐りやすいため、延命剤使用時でも毎日〜2日に1回は替えましょう。水替えの際に花瓶の内側もスポンジで洗い、茎のぬめりも洗い流すと効果的です。",
  },
  {
    q: "花がしおれてきたら復活させる方法はありますか？",
    a: "「湯あげ」という方法が効果的です。新聞紙で花全体を包み、茎の先端2〜3cmを沸騰したお湯に10〜20秒間つけます。その後すぐに冷たい水に移し、2時間ほど深水につけておくと、しおれた花が復活することがあります。ただし、すべての花に効くわけではなく、完全に枯れた花は復活しません。",
  },
  {
    q: "花のサブスクで届いた花を長持ちさせるコツは？",
    a: "届いたらすぐに開封し、(1)茎を水中で斜めにカット（水切り）、(2)延命剤を入れた新鮮な水に飾る、(3)直射日光・エアコンの風を避ける場所に置く、の3ステップが基本です。特に夏場は届いた直後の処理が花持ちを大きく左右するため、できるだけ早く水に入れましょう。",
  },
];

/* ─── Main Component ─── */
export default function NagamochiGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>切り花を長持ちさせる方法10選｜プロの裏ワザ【2026年】</title>
      <meta name="description" content="切り花を長持ちさせる方法10選をプロの視点で解説。水切り・栄養剤・温度管理・花瓶の清潔さなど、花の寿命を1.5〜2倍に延ばすテクニックとNG行為をご紹介します。" />

      <main className="flex-1">
        {/* ─── Breadcrumbs ─── */}
        <div className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav className="text-xs text-[#999]" aria-label="パンくずリスト">
              <ol className="flex items-center gap-1.5 flex-wrap">
                <li><a href="/" className="hover:text-[#4A7C59] transition-colors">ホーム</a></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#666]">ガイド</span></li>
                <li aria-hidden="true">/</li>
                <li><span className="text-[#333] font-medium">切り花を長持ちさせる方法</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">お手入れガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              切り花を長持ちさせる方法10選<br className="hidden md:block" />
              プロの裏ワザ【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              せっかく届いた花を少しでも長く楽しみたい方へ。
              水切りから温度管理まで、花の寿命を延ばす10のテクニックを詳しく解説します。
            </p>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">この記事の内容</p>
              <ol className="text-sm text-[#666] space-y-2">
                <li><a href="#techniques" className="hover:text-[#4A7C59] transition-colors">1. 長持ちさせる10のテクニック</a></li>
                <li><a href="#ng" className="hover:text-[#4A7C59] transition-colors">2. やってはいけないNG行為</a></li>
                <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">3. よくある質問</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ─── 10 Techniques ─── */}
        <section id="techniques" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              切り花を長持ちさせる10のテクニック
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "水切りを行う", text: "花を水中で茎を斜めにカットする「水切り」は最も基本的かつ効果的なテクニックです。水中で切ることで、茎の導管に空気が入るのを防ぎ、水の吸い上げが良くなります。切り口は斜めにすることで表面積が増え、吸水量がアップします。" },
                { num: "2", title: "切り花延命剤を使う", text: "延命剤には糖分（花の栄養）と殺菌成分が含まれており、花の寿命を1.5〜2倍に延ばす効果があります。100均やホームセンターで手軽に購入でき、1回あたり数十円のコストです。水だけの場合と比べて効果は歴然なので、必ず使いましょう。" },
                { num: "3", title: "花瓶の水を定期的に替える", text: "水は時間が経つと細菌が繁殖し、茎が腐る原因になります。延命剤使用時は2〜3日に1回、未使用時は毎日替えるのが理想です。水替えの際は花瓶の内側もスポンジで洗い、清潔に保ちましょう。" },
                { num: "4", title: "花瓶を清潔に保つ", text: "花瓶の内側にぬめりがある状態は、細菌が大量に繁殖している証拠です。花を入れる前に花瓶を食器用洗剤でしっかり洗い、週に1回は漂白剤で消毒すると細菌の繁殖を防げます。" },
                { num: "5", title: "直射日光を避ける", text: "切り花は直射日光に当たると水分の蒸散が激しくなり、しおれやすくなります。明るい日陰やレースのカーテン越しの光がベストです。窓際に飾る場合は、直射日光が当たらない位置を選びましょう。" },
                { num: "6", title: "エアコンの風を避ける", text: "エアコンの温風・冷風が直接当たると、花が急速に乾燥して傷みます。エアコンの吹き出し口から離れた場所に花瓶を置きましょう。特に冬場の暖房は乾燥が激しいので要注意です。" },
                { num: "7", title: "涼しい場所に置く", text: "花は高温になるほど早く枯れます。室温は15〜25度が理想的。夏場は特に注意が必要で、夜間だけでもエアコンの効いた涼しい部屋に移すと花持ちが向上します。" },
                { num: "8", title: "茎の余分な葉を取る", text: "水中に浸かる部分の葉は必ず取り除きましょう。葉が水に浸かると腐敗して細菌の温床になり、水が汚れる原因になります。花瓶の水面より下の葉はすべて取り除くのが鉄則です。" },
                { num: "9", title: "枯れた花はすぐに取り除く", text: "枯れた花からはエチレンガス（老化促進ホルモン）が発生し、周りの花の寿命も縮めてしまいます。しおれ始めた花は早めに取り除き、元気な花だけを残しましょう。" },
                { num: "10", title: "水の量を花に合わせる", text: "バラやひまわりなど茎が太い花は深水（茎の半分以上が浸かる量）、ガーベラやチューリップなど茎が腐りやすい花は浅水（5cm程度）が適しています。花の種類に合わせた水量調整で、花持ちが変わります。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg w-7 h-7 flex items-center justify-center shrink-0">{item.num}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#333] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── NG Actions ─── */}
        <section id="ng" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              やってはいけないNG行為5選
            </h2>
            <div className="space-y-4">
              {[
                { title: "花を包装のまま放置する", text: "届いた花を開封せずに放置すると、蒸れて花が傷みます。届いたらすぐに開封し、水切りして花瓶に飾りましょう。" },
                { title: "水道水をそのまま入れっぱなしにする", text: "水は1日で細菌が大量に繁殖します。延命剤なしで水を入れっぱなしにすると、2〜3日で水が濁り始め、茎が腐ります。" },
                { title: "果物の近くに花を飾る", text: "りんごやバナナなどの果物はエチレンガスを放出します。このガスが花の老化を促進するため、果物の近くには花を飾らないようにしましょう。" },
                { title: "花びらに水をかける", text: "霧吹きなどで花びらに水をかけると、花びらにシミができたり、カビの原因になります。水やりは花瓶の水だけで十分です。" },
                { title: "ハサミではなく手でちぎる", text: "茎を手でちぎると導管が潰れて水が吸い上げにくくなります。必ず清潔なハサミやカッターで斜めにカットしましょう。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#FDF5F5] rounded-xl p-5 border border-[#E0B8B8] flex items-start gap-3">
                  <span className="text-[#C4877A] text-lg shrink-0">&#10005;</span>
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
              切り花のお手入れに関するよくある質問
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
              まとめ：基本の3ステップで花持ちが大幅アップ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              切り花を長持ちさせるために最も重要なのは、<strong>(1)水切り、(2)延命剤の使用、(3)こまめな水替え</strong>の3つです。この基本を押さえるだけで、花の寿命は1.5〜2倍に延びます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              花のサブスクで届いた花も、正しいお手入れで長く楽しめます。品質保証制度があるサービスなら、届いた時点で傷んでいた場合も安心。お手入れを楽しみながら、花のある暮らしを満喫しましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                鮮度が良い medeluを見る
              </a>
              <a href="/guides/flower-care" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                お花のお手入れガイドを見る
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
