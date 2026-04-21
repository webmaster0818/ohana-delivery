"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "男性が花のサブスクを使うのは変ですか？",
    a: "まったく変ではありません。近年は男性の利用者が急増しており、特に20〜30代の一人暮らし男性に人気です。インテリアにこだわる男性が増えている背景もあり、花のある部屋はSNSでも好評です。bloomeeの利用者の約3割が男性というデータもあります。",
  },
  {
    q: "男性向けのシンプルな花が届くサービスはありますか？",
    a: "HitoHanaでは花の色をホワイトやグリーン、ブラウンなどシックな色味で指定できるため、男性的なインテリアにも合わせやすいです。AND PLANTSも落ち着いたトーンのアレンジが多く、モダンな部屋によく馴染みます。",
  },
  {
    q: "花瓶を持っていませんが、代わりになるものはありますか？",
    a: "空き瓶やグラス、マグカップなど、家にあるもので十分代用できます。特にジャムの空き瓶やワインボトルはおしゃれな一輪挿しになります。100均でもシンプルなガラス花瓶が手に入るため、最初は安価なものから始めるのがおすすめです。",
  },
  {
    q: "花の手入れが面倒そうですが、最低限何をすればいいですか？",
    a: "最低限やるべきことは3つです。(1)届いたら茎を水中で斜めに切る（水切り）、(2)花瓶の水は2〜3日に1回替える、(3)直射日光とエアコンの風を避けて飾る。これだけで1週間以上楽しめます。切り花延命剤を入れるとさらに長持ちします。",
  },
];

/* ─── Main Component ─── */
export default function DanseiGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>花のサブスクは男性にもおすすめ｜一人暮らしの部屋に花を【2026年】</title>
      <meta name="description" content="花のサブスクは男性にもおすすめ。一人暮らしの部屋に花を飾るメリット、男性に人気のサービス、おしゃれに飾るコツを解説。メンズも楽しめる花のある暮らしをご提案します。" />

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
                <li><span className="text-[#333] font-medium">男性向け花のサブスク</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">メンズガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスクは男性にもおすすめ<br className="hidden md:block" />
              一人暮らしの部屋に花を【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              「花は女性のもの」は過去の話。男性の花サブスク利用者が急増中です。
              一人暮らしの部屋がぐっとおしゃれになる、花のある暮らしの始め方を解説します。
            </p>
          </div>
        </section>

        {/* ─── Benefits ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              男性が花サブスクを始める5つのメリット
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "部屋の印象が格段にアップする", text: "花が1輪あるだけで、無機質な一人暮らしの部屋の雰囲気がガラリと変わります。来客時にも好印象で、「おしゃれな部屋だね」と言われる確率が上がります。インテリアにこだわる男性にとって、花は最もコスパの良いインテリアアイテムの一つです。" },
                { num: "2", title: "リラックス効果・ストレス軽減", text: "花には科学的に証明されたリラックス効果があります。千葉大学の研究では、花のある環境ではストレスホルモン（コルチゾール）が低下することがわかっています。仕事で疲れて帰宅した時、花が目に入ると気持ちがほっとします。" },
                { num: "3", title: "季節感を感じられる", text: "一人暮らしだと季節の変化を感じにくいもの。花のサブスクなら、春はチューリップ、夏はひまわり、秋はダリア、冬はアネモネと、自然に季節を感じられます。仕事に追われる日々にちょっとした彩りを添えてくれます。" },
                { num: "4", title: "自分で選ぶ手間がない", text: "花屋に入ること自体に抵抗がある男性も少なくありません。サブスクなら、プロが選んだ花が自宅に届くため、「何を買えばいいかわからない」「花屋に入りにくい」という悩みが解消されます。ポスト投函なら不在でも受け取れます。" },
                { num: "5", title: "話題のきっかけになる", text: "花を飾っている男性は、友人やパートナーとの話題のきっかけになります。「花のサブスク使ってるの？」という会話から交友関係が広がることも。SNSに投稿すれば、おしゃれな暮らしのアピールにもなります。" },
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

        {/* ─── Recommended Services ─── */}
        <section className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              男性におすすめの花サブスク3選
            </h2>
            <div className="space-y-4">
              {[
                { name: "medelu", nameJa: "メデル", price: "698円〜", reason: "送料無料・ポスト投函で手間なし。698円から始められる手軽さが魅力。「MODERN」コースはモダンなインテリアに合うシックなアレンジが届く。", url: "/services/medelu" },
                { name: "HitoHana", nameJa: "ひとはな", price: "1,320円〜", reason: "花の色をホワイト・グリーン・ブラウン等から選べるため、男性的なインテリアに合わせやすい。送料無料・回数縛りなし。", url: "/services/hitohana" },
                { name: "AND PLANTS", nameJa: "アンドプランツ", price: "1,980円〜", reason: "デザイン性の高いアレンジが届く。観葉植物も扱っており、グリーンと花を組み合わせたおしゃれな暮らしが実現。", url: "/services/and-plants" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-base font-bold text-[#333]">{item.name}（{item.nameJa}）</h3>
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-2 py-0.5 rounded-full font-medium">{item.price}</span>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed mb-3">{item.reason}</p>
                  <a href={item.url} className="inline-block text-sm text-[#4A7C59] font-medium hover:underline">
                    {item.name}の詳細を見る →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Display Tips ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              男性の部屋に花をおしゃれに飾る3つのコツ
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "シンプルな花瓶を選ぶ", text: "透明なガラスの花瓶、マットなセラミック、ダークカラーの陶器など、シンプルで無駄のないデザインの花瓶を選びましょう。一輪挿しなら花1本でもサマになります。100均のガラスボトルやIKEAのシンプルな花瓶もおすすめです。" },
                { num: "2", title: "飾る場所を決めておく", text: "デスクの隅、テレビボードの上、洗面台など、花を飾る定位置を決めておくと習慣になりやすいです。目に入りやすい場所に飾ることで、リラックス効果も高まります。窓際は直射日光で花が傷みやすいので避けましょう。" },
                { num: "3", title: "グリーン系・ホワイト系を基調にする", text: "男性の部屋に合わせやすい色は、グリーン・ホワイト・ブラウン系です。派手なピンクや赤が苦手な方は、HitoHanaで色を指定するか、medeluのMODERNコースを選ぶと、落ち着いたトーンの花が届きます。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFF8F0] rounded-xl p-5 border border-[#F0E0D0] flex items-start gap-4">
                  <span className="bg-[#8B6F5C] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">{item.num}</span>
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
              男性の花サブスクに関するよくある質問
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
              まとめ：花のある暮らし、男性こそ始めてみよう
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクは男性にこそおすすめしたいサービスです。部屋の雰囲気が良くなるだけでなく、リラックス効果や季節感を感じられるメリットがあります。「花屋に入りにくい」「何を選べばいいかわからない」という悩みも、サブスクなら解決します。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              まずは<strong>medelu</strong>の698円プランで気軽に始めるか、色を選べる<strong>HitoHana</strong>で自分好みの花を試してみましょう。花1本で部屋の印象は驚くほど変わります。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                698円から始める medeluを見る
              </a>
              <a href="/services/hitohana" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                色が選べる HitoHanaを見る
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
