"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクに合う花瓶のサイズはどれくらいですか？",
    a: "花のサブスクの最安プラン（3〜4本）なら高さ10〜15cmの小さめの花瓶や一輪挿しが最適です。中間プラン（5〜8本）なら高さ15〜20cmの花瓶、上位プラン（8本以上）なら高さ20〜25cmの花瓶が目安です。口が小さめの花瓶を選ぶと、少ない本数でもバランスよく飾れます。",
  },
  {
    q: "100均の花瓶でも大丈夫ですか？",
    a: "はい、100均の花瓶でも十分に使えます。特にダイソーやセリアのガラス製一輪挿しはシンプルなデザインで、どんな花にも合わせやすいです。まずは100均で数種類のサイズを揃えて、花を分けて飾るのがおすすめです。慣れてきたら、お気に入りの花瓶にアップグレードすると楽しみが広がります。",
  },
  {
    q: "花瓶のお手入れ方法を教えてください",
    a: "花を替えるタイミングで、花瓶の内側を食器用洗剤とスポンジで洗いましょう。口の狭い花瓶は、水と少量の漂白剤を入れてしばらく浸け置きすると、ぬめりや細菌を除去できます。週に1回は漂白剤で消毒するのが理想的です。清潔な花瓶は花を長持ちさせる基本です。",
  },
  {
    q: "花瓶を持っていない場合、何で代用できますか？",
    a: "ジャムの空き瓶、ワインボトル、グラス、マグカップなど、水が入る容器なら何でも代用可能です。特に口の小さい空き瓶は一輪挿しにぴったりです。ペットボトルの上部をカットしたものに布やペーパーを巻くだけでも、おしゃれな花瓶になります。",
  },
  {
    q: "花瓶を複数持つメリットはありますか？",
    a: "大きなメリットがあります。花を分けて飾ることで、(1)部屋の複数箇所に花を配置でき華やかさが増す、(2)少ない本数でもバランスよく見える、(3)花の種類ごとに分けると長持ちする（エチレンガス対策）。サイズ違いで3つ程度持っておくと、届いた花に合わせて柔軟に飾れます。",
  },
];

/* ─── Vase Data ─── */
const vaseCategories = [
  {
    title: "ガラス製の花瓶（透明感が魅力）",
    items: [
      { name: "IKEA TIDVATTEN", price: "299円〜", size: "14cm", desc: "北欧デザインのシンプルなガラス花瓶。ミニブーケに最適なサイズ感で、どんなインテリアにも馴染む。" },
      { name: "ホルムガード フローラ", price: "3,300円〜", size: "12cm", desc: "デンマーク王室御用達ブランドの一輪挿し。丸みを帯びたフォルムが花を美しく引き立てる。" },
      { name: "無印良品 ソーダガラス花瓶", price: "990円〜", size: "15cm", desc: "無印らしいシンプルで飽きのこないデザイン。程よいサイズ感で3〜5本の花にちょうど良い。" },
      { name: "100均 ガラスシリンダー", price: "110円〜", size: "10〜20cm", desc: "ダイソーやセリアで手に入るシンプルな円柱型。複数買いして花を分けて飾るのに最適。" },
    ],
  },
  {
    title: "陶器製の花瓶（温かみのある質感）",
    items: [
      { name: "KAHLER ハンマースホイ", price: "5,500円〜", size: "12.5cm", desc: "デンマーク・ケーラーの人気花瓶。横縞のテクスチャーが特徴的で、花がなくてもオブジェとして映える。" },
      { name: "有田焼 一輪挿し", price: "2,000円〜", size: "10〜15cm", desc: "日本の伝統工芸品ならではの繊細な美しさ。和モダンなインテリアに最適で、一輪の花を引き立てる。" },
      { name: "フランフラン 陶器花瓶", price: "1,500円〜", size: "15〜20cm", desc: "マットな質感とトレンドカラーが魅力。くすみカラーのラインナップで、おしゃれな部屋に馴染む。" },
      { name: "波佐見焼 フラワーベース", price: "1,800円〜", size: "12cm", desc: "長崎の波佐見焼はモダンなデザインが多く、北欧インテリアとの相性も抜群。普段使いしやすい。" },
    ],
  },
  {
    title: "金属製の花瓶（モダンな印象）",
    items: [
      { name: "HAY ルミ ベース", price: "4,400円〜", size: "15cm", desc: "デンマーク・HAYのスチール製花瓶。マットなカラーリングがモダンインテリアにぴったり。" },
      { name: "ZARA HOME メタル花瓶", price: "2,990円〜", size: "18cm", desc: "ゴールドやシルバーのメタリックカラーが高級感を演出。シンプルなフォルムで花を引き立てる。" },
      { name: "能作 真鍮一輪挿し", price: "3,850円〜", size: "10cm", desc: "富山の伝統的な真鍮鋳物メーカーの一輪挿し。使い込むほど味が出る経年変化も楽しめる。" },
    ],
  },
  {
    title: "一輪挿し（花1〜2本をおしゃれに）",
    items: [
      { name: "KINTO SACCO", price: "880円〜", size: "9cm", desc: "ころんとした可愛らしいフォルムが人気。ガラス製で花の茎まで美しく見える。デスクにぴったり。" },
      { name: "スガハラガラス 一輪挿し", price: "2,200円〜", size: "12cm", desc: "日本のガラス工房が一つ一つ手作りする一輪挿し。独特のフォルムと透明感が魅力。" },
      { name: "scope house 一輪挿し", price: "1,650円〜", size: "10cm", desc: "北欧テイストのシンプルなデザイン。一輪の花を飾るだけで絵になるバランスの良いサイズ。" },
      { name: "100均 一輪挿し各種", price: "110円〜", size: "8〜12cm", desc: "ダイソー・セリアには多様なデザインの一輪挿しが揃う。試しに複数買いして自分の好みを探るのに最適。" },
    ],
  },
];

/* ─── Main Component ─── */
export default function KabinGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>花瓶・一輪挿しのおすすめ15選｜花のサブスクに合う花瓶の選び方【2026年】</title>
      <meta name="description" content="花瓶・一輪挿しのおすすめ15選を素材別・サイズ別・予算別に紹介。花のサブスクで届く花に合う花瓶の選び方ポイントも詳しく解説します。" />

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
                <li><span className="text-[#333] font-medium">花瓶・一輪挿しのおすすめ</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">花瓶ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花瓶・一輪挿しのおすすめ15選<br className="hidden md:block" />
              花のサブスクに合う花瓶の選び方【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクで届いた花をおしゃれに飾るには、花瓶選びが重要です。
              素材別・サイズ別・予算別におすすめの花瓶15選と、選び方のポイントを解説します。
            </p>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花瓶選びの4つのポイント
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "サブスクのプランに合ったサイズを選ぶ", text: "花3〜4本なら高さ10〜15cmの小さめ花瓶、5〜8本なら15〜20cm、8本以上なら20〜25cmが目安です。花瓶が大きすぎると花がスカスカに見え、小さすぎると入りきりません。まずは届く花の本数に合わせたサイズを選びましょう。" },
                { num: "2", title: "口の大きさに注目する", text: "口が小さめの花瓶は、少ない本数でもバランスよく飾れます。逆に口が広い花瓶は多めの花を豪快に飾るのに向いています。サブスクの花は3〜5本が多いため、口径5〜8cm程度の花瓶がおすすめです。" },
                { num: "3", title: "インテリアとの調和を考える", text: "ナチュラルな部屋にはガラスや陶器、モダンな部屋には金属やマットな質感の花瓶、和風の部屋には焼き物や竹製の花瓶が合います。部屋のテイストに合った素材・色を選ぶことで、花がインテリアの一部として自然に馴染みます。" },
                { num: "4", title: "洗いやすさも重要", text: "口が狭すぎる花瓶は内側が洗いにくく、ぬめりや細菌の温床になりがちです。定期的に花瓶を洗うことを考えると、手が入るサイズか、ボトルブラシで洗えるサイズを選ぶと実用的です。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">{item.num}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#333] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Vase Recommendations ─── */}
        {vaseCategories.map((category, ci) => (
          <section key={ci} className={`py-12 md:py-16 ${ci % 2 === 0 ? "bg-[#F8F8F8]" : "bg-white"}`}>
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-sm font-bold text-[#333]">{item.name}</h3>
                      <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-2 py-0.5 rounded-full font-medium">{item.price}</span>
                      <span className="text-xs bg-[#F8F8F8] text-[#666] px-2 py-0.5 rounded-full">高さ {item.size}</span>
                    </div>
                    <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ─── Budget Guide ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              予算別おすすめ花瓶
            </h2>
            <div className="space-y-4">
              {[
                { budget: "500円以下", desc: "100均のガラス花瓶・一輪挿し。まずはここから始めて、自分の好みを探るのがおすすめ。複数買いして花を分けて飾ると華やか。" },
                { budget: "1,000〜3,000円", desc: "IKEA、無印良品、KINTO、フランフランなど。デザイン性と実用性のバランスが良い価格帯。メインの花瓶として長く使える。" },
                { budget: "3,000〜5,000円", desc: "ホルムガード、HAY、能作など。ブランド花瓶ならではのデザイン性。花がなくてもインテリアオブジェとして映える。" },
                { budget: "5,000円以上", desc: "KAHLER、スガハラガラスなど。一生モノの花瓶として愛着を持って使える。ギフトにもおすすめの上質アイテム。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                  <h3 className="text-sm font-bold text-[#4A7C59] mb-2">{item.budget}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花瓶選びに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#E8F0EB] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#333] pr-4">Q. {item.q}</span>
                    <svg className={`w-4 h-4 text-[#999] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-white border-t border-[#E5E5E5]">
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
              まとめ：花瓶選びで花のある暮らしがもっと楽しくなる
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクで届いた花を最大限に楽しむには、<strong>花瓶選び</strong>が重要です。まずは100均やIKEAの手頃な花瓶から始めて、サイズ感や好みを把握してから、お気に入りの花瓶にアップグレードするのがおすすめです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              異なるサイズの花瓶を2〜3個持っておくと、届いた花のボリュームに合わせて使い分けたり、花を分けて複数の場所に飾ったりと、楽しみ方の幅が広がります。花瓶とセットで、花のサブスクを始めてみましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                medeluの詳細を見る
              </a>
              <a href="/services/and-plants" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                AND PLANTSの詳細を見る
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
