"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "観葉植物のサブスクと花のサブスクはどう違いますか？",
    a: "花のサブスクは切り花が定期的に届き、1〜2週間で枯れるため常に新しい花を楽しめます。観葉植物のサブスクは鉢植えのグリーンが届き、適切に育てれば何年も楽しめます。お手入れの手間は観葉植物の方が少なく、水やりは週1〜2回程度です。コストは観葉植物の方が初期費用が高めですが、長期的にはコスパが良くなります。",
  },
  {
    q: "観葉植物を枯らしてしまいそうで不安です",
    a: "AND PLANTSでは、初心者でも育てやすい種類を選んでくれるオプションがあります。また、育て方の説明書が同封されるため、水やりの頻度や日当たりの条件がわかりやすいです。万が一枯れてしまった場合の交換保証があるサービスもあるため、初心者でも安心して始められます。",
  },
  {
    q: "賃貸マンションでも観葉植物は置けますか？",
    a: "はい、問題なく置けます。小型の観葉植物（ポトス、サンスベリアなど）なら棚やテーブルの上に置けるため、床を汚す心配もありません。受け皿を使えば水漏れも防げます。壁掛けタイプや吊り下げタイプを選べば、スペースを取らずにグリーンを楽しめます。",
  },
  {
    q: "花のサブスクと観葉植物のサブスクは併用できますか？",
    a: "もちろん併用できます。観葉植物で部屋のベースとなるグリーンを確保し、花のサブスクで季節の彩りをプラスするのは人気の組み合わせです。AND PLANTSでは切り花と観葉植物の両方を扱っているため、一つのサービスでまとめることも可能です。",
  },
];

/* ─── Main Component ─── */
export default function KanyouShokubutsuPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>観葉植物のサブスクおすすめ3選｜グリーンのある暮らし【2026年】</title>
      <meta name="description" content="観葉植物のサブスク・グリーンの定期便おすすめ3選を比較。AND PLANTSを中心に、花のサブスクとの違いや選び方を解説。初心者でも育てやすい観葉植物サブスクをご紹介します。" />

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
                <li><span className="text-[#333] font-medium">観葉植物のサブスク</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">比較ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              観葉植物のサブスクおすすめ3選<br className="hidden md:block" />
              グリーンのある暮らし【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              切り花だけでなく、観葉植物のサブスクも人気が高まっています。
              長く楽しめるグリーンの定期便を比較し、選び方のポイントを解説します。
            </p>
          </div>
        </section>

        {/* ─── Difference ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクと観葉植物サブスクの違い
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="text-left px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">比較項目</th>
                    <th className="text-center px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">花のサブスク</th>
                    <th className="text-center px-3 py-3 text-xs text-[#999] border-b border-[#E5E5E5]">観葉植物サブスク</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "楽しめる期間", flower: "1〜2週間", plant: "数ヶ月〜数年" },
                    { item: "お手入れ", flower: "水替え毎日〜2日", plant: "水やり週1〜2回" },
                    { item: "月額目安", flower: "700〜3,000円", plant: "2,000〜5,000円" },
                    { item: "配送頻度", flower: "毎週〜月1回", plant: "月1回〜不定期" },
                    { item: "インテリア効果", flower: "華やかさ・彩り", plant: "癒し・空気清浄" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#E5E5E5]">
                      <td className="px-3 py-3 font-medium text-[#333]">{row.item}</td>
                      <td className="px-3 py-3 text-center text-[#666]">{row.flower}</td>
                      <td className="px-3 py-3 text-center text-[#666]">{row.plant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── Recommendations ─── */}
        <section className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物サブスクおすすめ3選
            </h2>
            <div className="space-y-6">
              {[
                {
                  rank: 1,
                  name: "AND PLANTS",
                  nameJa: "アンドプランツ",
                  price: "1,980円〜/月",
                  highlight: "観葉植物と切り花の両方を扱う総合サービス。プロが選んだ育てやすい観葉植物が届き、育て方のサポートも充実。14日間の交換保証付きで初心者も安心。送料無料。",
                  features: ["初心者向けの育てやすい植物をセレクト", "14日間の交換保証", "育て方の説明書付き", "切り花プランとの併用可能"],
                  color: "#4A7C59",
                  url: "/services/and-plants",
                },
                {
                  rank: 2,
                  name: "CLAS",
                  nameJa: "クラス",
                  price: "月額レンタル制",
                  highlight: "家具・家電のサブスクサービスだが、大型の観葉植物もレンタル可能。オフィスや広いリビングに映える大型グリーンを気軽に試せる。交換・返却も可能。",
                  features: ["大型観葉植物のレンタルが可能", "交換・返却が自由", "メンテナンス不要プランあり", "法人利用にも対応"],
                  color: "#6B8E5B",
                  url: "#",
                },
                {
                  rank: 3,
                  name: "HitoHana",
                  nameJa: "ひとはな",
                  price: "3,300円〜",
                  highlight: "花の定期便で知られるHitoHanaは、観葉植物の単品購入にも対応。サブスクではないが、好みの観葉植物を選んで購入でき、育て方のサポートも受けられる。",
                  features: ["豊富な品揃えから選べる", "サイズ・種類が豊富", "ギフト対応あり", "育て方のサポート"],
                  color: "#8B6F5C",
                  url: "/services/hitohana",
                },
              ].map((item) => (
                <div key={item.rank} className={`bg-white rounded-xl overflow-hidden ${item.rank === 1 ? "border-2 border-[#4A7C59]" : "border border-[#E5E5E5]"}`}>
                  {item.rank === 1 && (
                    <div className="bg-[#4A7C59] text-white text-xs text-center py-1.5 font-bold">おすすめNo.1</div>
                  )}
                  <div className="p-5">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-bold shrink-0" style={{ backgroundColor: item.color }}>
                        {item.rank}位
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#333] mb-1">{item.name}（{item.nameJa}）</h3>
                        <p className="text-sm text-[#4A7C59] font-medium">{item.price}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#666] leading-relaxed mb-4">{item.highlight}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features.map((f, fi) => (
                        <span key={fi} className="bg-[#F8F8F8] text-[#666] text-xs px-3 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                    {item.url !== "#" && (
                      <a href={item.url} className="inline-block text-sm text-[#4A7C59] font-medium hover:underline">
                        {item.name}の詳細を見る →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物サブスクの選び方3つのポイント
            </h2>
            <div className="space-y-4">
              {[
                { num: "1", title: "置き場所に合ったサイズを選ぶ", text: "デスクや棚に置くならミニサイズ（15〜30cm）、リビングに飾るならミディアム（50〜100cm）、シンボルツリーなら大型（100cm以上）が目安です。サブスクで届く植物のサイズ感を事前に確認しましょう。" },
                { num: "2", title: "日当たり条件をチェックする", text: "窓際で日光が入る部屋なら選択肢は豊富ですが、日当たりの悪い部屋でも育つ耐陰性の強い植物（ポトス、サンスベリア、モンステラなど）もあります。自分の部屋の日当たり条件に合った植物が届くサービスを選びましょう。" },
                { num: "3", title: "交換・保証制度を確認する", text: "初心者は植物を枯らしてしまう可能性があります。AND PLANTSの14日間交換保証のように、万が一枯れた場合のサポートがあるサービスを選ぶと安心です。" },
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

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              観葉植物サブスクに関するよくある質問
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
        <section className="py-12 md:py-16 bg-[#E8F0EB]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：観葉植物サブスクならAND PLANTSがおすすめ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              観葉植物のサブスクは、切り花と比べてお手入れが楽で長く楽しめるのが最大のメリットです。初心者には<strong>AND PLANTS</strong>が最もおすすめで、プロが選んだ育てやすい植物が届き、14日間の交換保証もあるため安心して始められます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              花のサブスクと観葉植物サブスクを併用すれば、グリーンの癒しと花の華やかさの両方を楽しめます。まずは一つ試してみて、部屋に植物がある暮らしの心地よさを体感してみてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/and-plants" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                AND PLANTSの詳細を見る
              </a>
              <a href="/services/medelu" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                花のサブスク medeluを見る
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
