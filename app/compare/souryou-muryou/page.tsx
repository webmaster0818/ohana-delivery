"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "送料無料のサービスは本当に追加費用がかかりませんか？",
    a: "medeluとAND PLANTSは表示価格に送料が含まれており、追加の送料は一切かかりません。hanamekuはプランや配送方法によって送料が異なり、一部プランのみ送料無料です。各サービスの公式サイトで最新の料金体系をご確認ください。",
  },
  {
    q: "送料無料のサービスは品質が劣りますか？",
    a: "いいえ、品質が劣ることはありません。medeluは市場直送の仕組みで中間コストを削減し、AND PLANTSはプロのフローリストがアレンジを担当しています。送料を無料にできる理由は、配送ルートの効率化やビジネスモデルの工夫であり、花の品質を落としているわけではありません。",
  },
  {
    q: "送料無料と送料別、年間でどれくらい差がつきますか？",
    a: "例えばbloomeeの送料385円を隔週（月2回）で利用すると、送料だけで年間9,240円になります。送料無料のmedeluなら、この分がまるまるお得です。毎週配送にすると年間約2万円の差になることもあり、長期利用するほど送料無料サービスのメリットが大きくなります。",
  },
  {
    q: "離島や北海道・沖縄でも送料無料ですか？",
    a: "サービスによって異なります。medeluは全国送料無料ですが、一部離島は配送対象外の場合があります。AND PLANTSは沖縄・離島への配送に追加料金がかかる場合があります。お住まいの地域が配送対象かどうか、事前に公式サイトでご確認ください。",
  },
];

/* ─── Comparison Data ─── */
const comparisonData = [
  {
    name: "medelu",
    nameJa: "メデル",
    plans: [
      { plan: "Liteコース", price: 698, shipping: 0, total: 698, flowers: "3本", delivery: "ポスト投函" },
      { plan: "Liteコース+", price: 1508, shipping: 0, total: 1508, flowers: "5〜6本", delivery: "ポスト投函" },
      { plan: "Basicコース", price: 2508, shipping: 0, total: 2508, flowers: "6〜8本", delivery: "宅配便" },
    ],
    highlight: "全プラン送料無料。市場直送で鮮度が良く、698円/回から始められる最安水準。",
    url: "/services/medelu",
    color: "#4A7C59",
  },
  {
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    plans: [
      { plan: "基本プラン", price: 1980, shipping: 0, total: 1980, flowers: "4〜6本", delivery: "宅配便" },
    ],
    highlight: "送料込み1,980円/回。プロのフローリストによるデザイン性の高いアレンジが届く。",
    url: "/services/and-plants",
    color: "#6B8E5B",
  },
  {
    name: "hanameku",
    nameJa: "ハナメク",
    plans: [
      { plan: "セルフアレンジプランS", price: 2178, shipping: 0, total: 2178, flowers: "8〜10本", delivery: "宅配便" },
    ],
    highlight: "一部プランで送料無料。セルフアレンジプランSは送料込み2,178円で本数が多くコスパ良好。",
    url: "/services/hanameku",
    color: "#8B6F5C",
  },
];

/* ─── Main Component ─── */
export default function SouryouMuryouPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>送料無料のお花の定期便3選｜総額で比較【2026年】</title>
      <meta name="description" content="送料無料の花のサブスク・お花の定期便を徹底比較。medelu、AND PLANTS、hanamekuの送料込み総額を一覧表で比較し、最もお得なサービスをご紹介します。" />

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
                <li><span className="text-[#333] font-medium">送料無料のお花の定期便</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">比較ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              送料無料のお花の定期便3選<br className="hidden md:block" />
              総額で比較【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクは送料が意外と高く、年間で1万円以上の差がつくことも。
              送料無料で利用できるサービスを総額ベースで徹底比較します。
            </p>
          </div>
        </section>

        {/* ─── Why Shipping Matters ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              なぜ送料無料が重要なのか
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              花のサブスクを選ぶ際、花代だけに注目しがちですが、<strong>送料を含めた総額</strong>で比較することが非常に重要です。送料は1回あたり300〜500円が相場で、隔週配送なら月600〜1,000円、年間では7,200〜12,000円もの差になります。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CB]">
              <h3 className="text-sm font-bold text-[#333] mb-3">年間送料シミュレーション（隔週配送の場合）</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-[#C8D8CB]">
                  <span className="text-[#666]">送料385円のサービス（bloomee等）</span>
                  <span className="font-bold text-[#C4877A]">年間 9,240円</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#C8D8CB]">
                  <span className="text-[#666]">送料330円のサービス（タスハナ等）</span>
                  <span className="font-bold text-[#C4877A]">年間 7,920円</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#666]">送料無料のサービス（medelu等）</span>
                  <span className="font-bold text-[#4A7C59]">年間 0円</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Detail ─── */}
        <section className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              送料無料サービス3選（詳細比較）
            </h2>

            <div className="space-y-6">
              {comparisonData.map((service, idx) => (
                <div key={idx} className={`bg-white rounded-xl overflow-hidden ${idx === 0 ? "border-2 border-[#4A7C59]" : "border border-[#E5E5E5]"}`}>
                  {idx === 0 && (
                    <div className="bg-[#4A7C59] text-white text-xs text-center py-1.5 font-bold">
                      送料無料で最安 - おすすめNo.1
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#333] mb-2">{service.name}（{service.nameJa}）</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-4">{service.highlight}</p>

                    <div className="overflow-x-auto mb-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-[#F8F8F8]">
                            <th className="text-left px-3 py-2 text-xs text-[#999]">プラン</th>
                            <th className="text-center px-3 py-2 text-xs text-[#999]">花代</th>
                            <th className="text-center px-3 py-2 text-xs text-[#999]">送料</th>
                            <th className="text-center px-3 py-2 text-xs text-[#999]">総額/回</th>
                            <th className="text-center px-3 py-2 text-xs text-[#999]">本数</th>
                          </tr>
                        </thead>
                        <tbody>
                          {service.plans.map((plan, pi) => (
                            <tr key={pi} className="border-t border-[#E5E5E5]">
                              <td className="px-3 py-2 text-[#333] font-medium">{plan.plan}</td>
                              <td className="px-3 py-2 text-center text-[#666]">{plan.price.toLocaleString()}円</td>
                              <td className="px-3 py-2 text-center text-[#4A7C59] font-bold">無料</td>
                              <td className="px-3 py-2 text-center text-[#4A7C59] font-bold">{plan.total.toLocaleString()}円</td>
                              <td className="px-3 py-2 text-center text-[#666]">{plan.flowers}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <a href={service.url} className="inline-block text-sm text-[#4A7C59] font-medium hover:underline">
                      {service.name}の詳細レビューを見る →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#999] mt-3">
              ※ 価格はすべて税込。2026年4月時点の情報です。最新の料金は各公式サイトでご確認ください。
            </p>
          </div>
        </section>

        {/* ─── Total Cost Table ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              送料込み総額比較表（送料有料サービスとの比較）
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8F8F8]">
                    <th className="text-left px-3 py-2 text-xs text-[#999] border-b border-[#E5E5E5]">サービス</th>
                    <th className="text-center px-3 py-2 text-xs text-[#999] border-b border-[#E5E5E5]">花代</th>
                    <th className="text-center px-3 py-2 text-xs text-[#999] border-b border-[#E5E5E5]">送料</th>
                    <th className="text-center px-3 py-2 text-xs text-[#999] border-b border-[#E5E5E5]">総額/回</th>
                    <th className="text-center px-3 py-2 text-xs text-[#999] border-b border-[#E5E5E5]">年間送料</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#E8F0EB]">
                    <td className="px-3 py-2 font-bold text-[#4A7C59]">medelu Lite</td>
                    <td className="px-3 py-2 text-center">698円</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">無料</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">698円</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">0円</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="px-3 py-2 text-[#333]">タスハナ</td>
                    <td className="px-3 py-2 text-center">528円</td>
                    <td className="px-3 py-2 text-center text-[#C4877A]">330円</td>
                    <td className="px-3 py-2 text-center">858円</td>
                    <td className="px-3 py-2 text-center text-[#C4877A]">7,920円</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="px-3 py-2 text-[#333]">bloomee 体験</td>
                    <td className="px-3 py-2 text-center">980円</td>
                    <td className="px-3 py-2 text-center text-[#C4877A]">385円</td>
                    <td className="px-3 py-2 text-center">1,365円</td>
                    <td className="px-3 py-2 text-center text-[#C4877A]">9,240円</td>
                  </tr>
                  <tr className="bg-[#E8F0EB]">
                    <td className="px-3 py-2 font-bold text-[#4A7C59]">AND PLANTS</td>
                    <td className="px-3 py-2 text-center">1,980円</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">無料</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">1,980円</td>
                    <td className="px-3 py-2 text-center font-bold text-[#4A7C59]">0円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#999] mt-3">※ 年間送料は隔週（月2回・年24回）配送で計算</p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              送料無料の花サブスクに関するよくある質問
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
              まとめ：送料無料で選ぶならmedeluが最安
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              送料無料のお花の定期便3サービスを比較した結果、<strong>総額で最も安いのはmedelu Liteコース（698円/回）</strong>です。回数縛りもなく、ポスト投函で手軽に受け取れるため、初めての方にもおすすめです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              ボリュームとデザイン性を重視するなら<strong>AND PLANTS（1,980円/回）</strong>、本数重視なら<strong>hanamekuのセルフアレンジプランS（2,178円/回）</strong>がおすすめです。いずれも送料を気にせず利用できるため、長期利用に向いています。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                medeluの詳細を見る
              </a>
              <a href="/services/and-plants" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                AND PLANTSの詳細を見る
              </a>
            </div>
            <a href="/compare/cheap" className="inline-block mt-4 text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline">
              安い花のサブスク総合ランキングも見る
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
