"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクで一番安いのはどこですか？",
    a: "送料込みの1回あたり総額で比較すると、medelu（メデル）のMiniプランが698円（送料無料）で最も安く利用できます。次いでhanameku（ハナメク）のライトプランが858円＋送料で続きます。ただし送料は地域やプランによって異なるため、各公式サイトで最新情報をご確認ください。",
  },
  {
    q: "1,000円以下で花のサブスクを始められますか？",
    a: "はい、1,000円以下で始められるサービスは複数あります。medeluのMiniプランは698円（送料無料）、hanamekuのライトプランは858円（別途送料）で利用可能です。bloomeeの体験プランも980円（別途送料385円）で、花代だけなら1,000円以下です。",
  },
  {
    q: "送料無料の花のサブスクはありますか？",
    a: "medeluとAND PLANTSは送料無料です。medeluは全プラン送料無料で、最安のMiniプランは698円のみで利用できます。AND PLANTSも送料込みの価格設定で、追加の送料はかかりません。送料込みの総額で比較することが重要です。",
  },
  {
    q: "安い花のサブスクでも品質は大丈夫ですか？",
    a: "価格が安くても品質が劣るわけではありません。medeluは市場直送で中間コストを削減しているため安価でも新鮮なお花が届きます。bloomeeやhanamekuも品質保証制度があり、届いた花が傷んでいた場合は再送対応を受けられます。",
  },
  {
    q: "花のサブスクの送料はいくらかかりますか？",
    a: "送料はサービスによって異なります。medeluとAND PLANTSは送料無料です。bloomeeは体験・レギュラープランが385円、リッチプランが550円です。hanamekuは配送方法や地域によって異なります。日本総合園芸は別途送料がかかります。送料を含めた総額で比較することをおすすめします。",
  },
  {
    q: "安い花のサブスクは何本届きますか？",
    a: "サービスとプランにより異なります。medeluのMiniプランは3本、hanamekuのライトプランは花とグリーンで数本、bloomeeの体験プランは3本以上です。一般的に安いプランほど本数は少なめですが、少量でもテーブルに飾るには十分なボリュームです。",
  },
  {
    q: "月額で考えるとどのサービスが安いですか？",
    a: "月額は配送頻度によって変わります。隔週（月2回）配送の場合、medeluのMiniプランは月額約1,396円、hanamekuのライトプランは月額約1,716円＋送料、bloomeeの体験プランは月額約2,730円（送料込み）が目安です。毎週配送にするとこの倍になります。",
  },
  {
    q: "回数縛りなしで安く始められるサービスはどれですか？",
    a: "medeluは回数縛りなしで698円から始められるため、気軽にお試ししたい方に最適です。AND PLANTSも回数縛りがありません。一方、bloomeeは4回の最低受け取り回数があるため、4回受け取り前に解約すると残り回数分の料金が発生します。初めてで不安な方は回数縛りなしのサービスから試すのがおすすめです。",
  },
];

/* ─── Ranking Data ─── */
const rankingData = [
  {
    rank: 1,
    name: "medelu",
    nameJa: "メデル",
    plan: "Miniプラン",
    price: 698,
    shipping: 0,
    total: 698,
    shippingLabel: "無料",
    flowers: "3本",
    delivery: "ポスト投函",
    frequency: "毎週 / 隔週",
    minOrders: "なし",
    quality: "あり",
    url: "/services/medelu",
    officialUrl: "https://www.medelu.flowers",
    highlight: "送料無料で業界最安水準。市場直送で新鮮なお花が届く。回数縛りなしで気軽にお試し可能。",
    bestFor: "とにかく安く始めたい方、送料込みのコスパを重視する方",
    detail: "medeluは市場直送の仕組みにより中間マージンを削減し、送料無料を実現しています。Miniプランは1回698円で3本のお花が届き、送料込みの総額で業界最安水準です。回数縛りもないため、花のサブスクを初めて試す方にも安心です。配送は隔週・毎週から選べ、スキップも自由にできます。",
  },
  {
    rank: 2,
    name: "hanameku",
    nameJa: "ハナメク",
    plan: "ライトプラン",
    price: 858,
    shipping: null,
    total: null,
    shippingLabel: "別途（配送方法による）",
    flowers: "花とグリーン数本",
    delivery: "ポスト投函 / 宅配便",
    frequency: "毎週 / 隔週 / 月1回",
    minOrders: "なし",
    quality: "あり",
    url: "/services/hanameku",
    officialUrl: "https://hanameku.jp",
    highlight: "858円から始められる手頃な価格。ポスト投函と宅配便を選べる柔軟な配送オプション。",
    bestFor: "配送頻度を柔軟に選びたい方、月1回からゆっくり始めたい方",
    detail: "hanamekuは858円のライトプランから始められる花のサブスクです。ポスト投函と宅配便の両方に対応しており、ライフスタイルに合わせた配送方法を選べます。配送頻度も毎週・隔週・月1回と選択肢が多いのが特徴です。回数縛りがないため、合わなければいつでも解約できます。",
  },
  {
    rank: 3,
    name: "bloomee",
    nameJa: "ブルーミー",
    plan: "体験プラン",
    price: 980,
    shipping: 385,
    total: 1365,
    shippingLabel: "385円",
    flowers: "3本以上",
    delivery: "ポスト投函",
    frequency: "毎週 / 隔週",
    minOrders: "4回",
    quality: "あり（再送保証）",
    url: "/services/bloomee",
    officialUrl: "https://bloomee.jp",
    highlight: "累計3,000万本以上の実績。全国200店舗以上の提携花屋からアレンジが届く。SNS人気No.1。",
    bestFor: "知名度・安心感を重視する方、SNSで花の投稿を楽しみたい方",
    detail: "bloomeeは日本最大級の花のサブスクサービスです。体験プランは980円で、送料385円を合わせると1回あたり1,365円になります。全国200店舗以上の提携花屋がアレンジを担当しており、毎回異なるテイストのお花を楽しめます。品質保証制度（再送保証）があるため、届いた花が傷んでいた場合も安心です。ただし4回の最低受け取り回数がある点には注意が必要です。",
  },
  {
    rank: 4,
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    plan: "Standardプラン",
    price: 1980,
    shipping: 0,
    total: 1980,
    shippingLabel: "無料",
    flowers: "4〜6本",
    delivery: "宅配便",
    frequency: "隔週 / 月1回",
    minOrders: "なし",
    quality: "あり",
    url: "/services/and-plants",
    officialUrl: "https://andplants.jp",
    highlight: "プロのフローリストによるハイセンスなアレンジ。送料無料。ボリュームのある4〜6本。",
    bestFor: "おしゃれなアレンジを求める方、インテリアにこだわる方",
    detail: "AND PLANTSはプロのフローリストが一つひとつアレンジした花束が届くサービスです。Standardプランは1,980円で送料無料、4〜6本のお花が届きます。価格帯はやや高めですが、送料無料でボリュームもあるため、1本あたりの単価で見るとコスパは悪くありません。宅配便での配送のため、花の状態が良い形で届きやすい点もメリットです。回数縛りもありません。",
  },
  {
    rank: 5,
    name: "日本総合園芸",
    nameJa: "にほんそうごうえんげい",
    plan: "基本プラン",
    price: 2200,
    shipping: null,
    total: null,
    shippingLabel: "別途（地域による）",
    flowers: "季節の花束",
    delivery: "宅配便",
    frequency: "月1回 / 月2回",
    minOrders: "なし",
    quality: "あり",
    url: "/services/nihon-sogo-engei",
    officialUrl: "https://nihon-sogo-engei.co.jp",
    highlight: "創業以来の実績を持つ老舗。季節感のある花束が届く。法人利用にも対応。",
    bestFor: "老舗の安心感を求める方、季節感のある花を楽しみたい方",
    detail: "日本総合園芸は長年の実績を持つ老舗の花き業者が運営するサービスです。基本プランは2,200円で、別途送料がかかります。季節に合わせた花束が届くのが特徴で、花のプロが厳選した旬のお花を楽しめます。法人向けのオフィス装花にも対応しており、個人利用だけでなくビジネス用途にも適しています。",
  },
];

/* ─── Main Component ─── */
export default function CheapRankingPage() {
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
                  <span className="text-[#666]">比較記事</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">安い花サブスクランキング</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク価格比較
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              【2026年最新】花のサブスクを安い順にランキング！<br className="hidden md:block" />
              送料込みで徹底比較
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクを始めたいけど「結局いくらかかるの？」と悩んでいませんか。
              この記事では、人気5サービスの最安プランを送料込みの総額で比較し、安い順にランキング形式でご紹介します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安サービス</p>
                <p className="text-xl font-bold text-[#4A7C59]">698円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">比較対象</p>
                <p className="text-xl font-bold text-[#4A7C59]">5サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">送料無料</p>
                <p className="text-xl font-bold text-[#4A7C59]">2サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">1,000円以下</p>
                <p className="text-xl font-bold text-[#4A7C59]">2サービス</p>
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
                  <li><a href="#intro" className="hover:text-[#4A7C59] transition-colors">1. なぜ「送料込み」の総額比較が重要なのか</a></li>
                  <li><a href="#ranking-table" className="hover:text-[#4A7C59] transition-colors">2. 花のサブスク安い順ランキング比較表</a></li>
                  <li><a href="#ranking-detail" className="hover:text-[#4A7C59] transition-colors">3. 各サービスの詳細（価格・内容・おすすめの人）</a></li>
                  <li><a href="#under-1000" className="hover:text-[#4A7C59] transition-colors">4. 1,000円以下で始められるサービス</a></li>
                  <li><a href="#free-shipping" className="hover:text-[#4A7C59] transition-colors">5. 送料無料のサービス</a></li>
                  <li><a href="#budget-guide" className="hover:text-[#4A7C59] transition-colors">6. 予算別おすすめサービス</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">7. 花のサブスクの料金に関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">8. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Introduction ─── */}
        <section id="intro" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              なぜ「送料込み」の総額比較が重要なのか
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花のサブスクを選ぶ際、多くの方が「月額○○円」という花代だけを比較しがちです。
              しかし、実際にかかる費用は「花代＋送料」の総額です。
              送料が無料のサービスもあれば、1回あたり385円〜550円の送料がかかるサービスもあります。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              たとえば、花代が980円でも送料が385円かかれば1回あたりの実質負担は1,365円です。
              一方、花代が698円で送料無料なら、そのまま698円で利用できます。
              花代だけで比較すると282円の差ですが、送料込みだと667円もの差になるのです。
            </p>
            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">この記事の比較基準</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 各サービスの「最安プラン」を対象に比較</li>
                <li>・ 花代＋送料の「1回あたり総額」で安い順にランキング</li>
                <li>・ 送料が地域により異なる場合は、その旨を明記</li>
                <li>・ 表示価格はすべて税込</li>
                <li>・ 2026年4月時点の情報に基づく</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Ranking Table ─── */}
        <section id="ranking-table" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスク安い順ランキング比較表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              人気5サービスの最安プランを、送料込みの1回あたり総額で安い順に並べました。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm" style={{ minWidth: "640px" }}>
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">順位</th>
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-left font-medium">プラン</th>
                    <th className="px-4 py-3 text-right font-medium">花代</th>
                    <th className="px-4 py-3 text-right font-medium">送料</th>
                    <th className="px-4 py-3 text-right font-medium">1回あたり総額</th>
                    <th className="px-4 py-3 text-center font-medium">花の本数</th>
                  </tr>
                </thead>
                <tbody>
                  {rankingData.map((item, i) => (
                    <tr key={i} className={`border-t border-[#E5E5E5] ${i === 0 ? "bg-[#FFFBEB]" : ""}`}>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          i === 0 ? "bg-[#F59E0B] text-white" :
                          i === 1 ? "bg-[#9CA3AF] text-white" :
                          i === 2 ? "bg-[#B45309] text-white" :
                          "bg-[#E5E5E5] text-[#666]"
                        }`}>
                          {item.rank}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <a href={item.url} className="font-bold text-[#4A7C59] hover:underline">
                          {item.name}
                        </a>
                        <p className="text-xs text-[#999]">{item.nameJa}</p>
                      </td>
                      <td className="px-4 py-4 text-[#666]">{item.plan}</td>
                      <td className="px-4 py-4 text-right text-[#333]">{item.price.toLocaleString()}円</td>
                      <td className="px-4 py-4 text-right">
                        {item.shipping === 0 ? (
                          <span className="text-[#4A7C59] font-medium">無料</span>
                        ) : item.shipping ? (
                          <span className="text-[#666]">{item.shipping}円</span>
                        ) : (
                          <span className="text-xs text-[#999]">別途</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-right">
                        {item.total ? (
                          <span className="font-bold text-[#333]">{item.total.toLocaleString()}円</span>
                        ) : (
                          <span className="text-xs text-[#999]">{item.price.toLocaleString()}円＋送料</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-[#666]">{item.flowers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">表の補足</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 表示価格はすべて税込です</li>
                <li>・ hanamekuの送料は配送方法（ポスト投函 / 宅配便）や地域によって異なります</li>
                <li>・ 日本総合園芸の送料は地域によって異なります</li>
                <li>・ 2026年4月時点の情報です。最新の料金は各公式サイトでご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Ranking Detail ─── */}
        <section id="ranking-detail" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              各サービスの詳細
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              安い順にランキングした5サービスそれぞれの、料金の内訳・届く内容・おすすめの人を詳しく解説します。
            </p>

            <div className="space-y-8">
              {rankingData.map((item) => (
                <div key={item.rank} className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] overflow-hidden">
                  {/* Service Header */}
                  <div className={`px-5 py-4 flex items-center gap-3 ${item.rank === 1 ? "bg-[#FFFBEB] border-b border-[#F59E0B]" : "bg-[#E8F0EB] border-b border-[#C5D9CB]"}`}>
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold ${
                      item.rank === 1 ? "bg-[#F59E0B] text-white" :
                      item.rank === 2 ? "bg-[#9CA3AF] text-white" :
                      item.rank === 3 ? "bg-[#B45309] text-white" :
                      "bg-[#E5E5E5] text-[#666]"
                    }`}>
                      {item.rank}位
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#333]">
                        {item.name}（{item.nameJa}）{item.plan}
                      </h3>
                      <p className="text-sm text-[#666]">{item.highlight}</p>
                    </div>
                  </div>

                  {/* Service Detail */}
                  <div className="p-5">
                    {/* Price Breakdown */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">花代</p>
                        <p className="text-lg font-bold text-[#333]">{item.price.toLocaleString()}<span className="text-xs font-normal">円</span></p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">送料</p>
                        <p className="text-lg font-bold text-[#333]">
                          {item.shipping === 0 ? (
                            <span className="text-[#4A7C59]">無料</span>
                          ) : item.shipping ? (
                            <>{item.shipping}<span className="text-xs font-normal">円</span></>
                          ) : (
                            <span className="text-sm">別途</span>
                          )}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">1回あたり総額</p>
                        <p className="text-lg font-bold text-[#4A7C59]">
                          {item.total ? (
                            <>{item.total.toLocaleString()}<span className="text-xs font-normal">円</span></>
                          ) : (
                            <span className="text-sm">{item.price.toLocaleString()}円＋送料</span>
                          )}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">花の本数</p>
                        <p className="text-lg font-bold text-[#333]">{item.flowers}</p>
                      </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">届き方</span>
                        <span className="text-[#333]">{item.delivery}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">配送頻度</span>
                        <span className="text-[#333]">{item.frequency}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">回数縛り</span>
                        <span className="text-[#333]">{item.minOrders}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-28 shrink-0">品質保証</span>
                        <span className="text-[#333]">{item.quality}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#666] leading-relaxed mb-5">
                      {item.detail}
                    </p>

                    {/* Best For */}
                    <div className="bg-[#E8F0EB] rounded-lg p-4 mb-5">
                      <p className="text-sm">
                        <span className="font-bold text-[#4A7C59]">こんな人におすすめ：</span>
                        <span className="text-[#666]">{item.bestFor}</span>
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={item.url}
                        className="inline-block text-center bg-white text-[#4A7C59] font-bold text-sm px-6 py-3 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
                      >
                        {item.name}の詳細レビューを見る
                      </a>
                      <a
                        href={item.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-block text-center bg-[#4A7C59] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#3A6247] transition-colors shadow-sm"
                      >
                        {item.name}公式サイトはこちら
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Under 1000 Yen Section ─── */}
        <section id="under-1000" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              1,000円以下で始められる花のサブスク
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              「まずは1,000円以下で気軽に試したい」という方向けに、花代が1,000円以下のサービスをまとめました。
              送料の有無によって実質負担額が変わるため、総額も確認しましょう。
            </p>

            <div className="space-y-4">
              {/* medelu */}
              <div className="bg-white rounded-xl border-2 border-[#4A7C59] p-5 relative">
                <div className="absolute top-0 right-0 bg-[#4A7C59] text-white text-xs px-3 py-1 rounded-bl-lg">
                  総額も1,000円以下
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F59E0B] text-white text-sm font-bold">1位</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#333] mb-1">medelu Miniプラン</h3>
                    <p className="text-sm text-[#666] mb-3">
                      花代698円、送料無料で、1回あたりの総額も698円。送料込みで1,000円以下を実現している唯一のサービスです。
                      回数縛りもないため、1回だけお試しして合わなければすぐに解約できます。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#4A7C59] font-bold">総額698円/回</span>
                      <span className="text-[#999]">送料無料</span>
                      <span className="text-[#999]">3本</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* hanameku */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#9CA3AF] text-white text-sm font-bold">2位</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#333] mb-1">hanameku ライトプラン</h3>
                    <p className="text-sm text-[#666] mb-3">
                      花代858円で1,000円以下ですが、別途送料がかかります。
                      ポスト投函を選べば送料を抑えられる場合があります。配送頻度を月1回にすれば月あたりのコストも抑えられます。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#4A7C59] font-bold">花代858円/回</span>
                      <span className="text-[#999]">送料別途</span>
                      <span className="text-[#999]">花とグリーン数本</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* bloomee */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] p-5">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B45309] text-white text-sm font-bold">3位</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#333] mb-1">bloomee 体験プラン</h3>
                    <p className="text-sm text-[#666] mb-3">
                      花代980円で1,000円以下ですが、送料385円が別途かかるため、1回あたりの総額は1,365円になります。
                      花代のみで見ればギリギリ1,000円以下ですが、送料込みでは1,000円を超える点に注意してください。
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#666] font-bold">総額1,365円/回</span>
                      <span className="text-[#999]">送料385円</span>
                      <span className="text-[#999]">3本以上</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#E8F0EB] rounded-xl p-5">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-2">ポイント</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                送料込みの総額で1,000円以下を実現しているのはmedeluのMiniプランのみです。
                「花代1,000円以下」と「総額1,000円以下」は異なるため、予算を考える際は必ず送料を含めた金額で検討しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Free Shipping Section ─── */}
        <section id="free-shipping" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              送料無料の花のサブスク
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              送料がかかると毎回数百円の追加負担になります。
              長く続けるほど送料の差は大きくなるため、送料無料のサービスはコスパの面で非常に有利です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* medelu */}
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C5D9CB]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold px-2 py-1 rounded">送料無料</span>
                  <h3 className="text-base font-bold text-[#333]">medelu</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  全プラン送料無料。Miniプラン698円、Liteプラン1,508円、Basicプラン2,508円のいずれも送料込みの価格です。
                  市場直送で中間コストを削減することで送料無料を実現しています。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#999] mb-1">1年間（隔週）の送料節約額</p>
                  <p className="text-sm text-[#666]">
                    送料385円のサービスと比較した場合：385円 x 24回 = <span className="font-bold text-[#4A7C59]">年間9,240円の節約</span>
                  </p>
                </div>
              </div>

              {/* AND PLANTS */}
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C5D9CB]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold px-2 py-1 rounded">送料無料</span>
                  <h3 className="text-base font-bold text-[#333]">AND PLANTS</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  送料込みの価格設定で、追加の送料はかかりません。Standardプラン1,980円がそのまま1回あたりの総額です。
                  宅配便での配送にもかかわらず送料無料なのは大きなメリットです。
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-xs text-[#999] mb-1">宅配便なのに送料無料</p>
                  <p className="text-sm text-[#666]">
                    通常、宅配便の送料は550円以上かかることが多いため、<span className="font-bold text-[#4A7C59]">実質的にかなりお得</span>です。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
              <h3 className="text-sm font-bold text-[#333] mb-2">送料有料のサービスの注意点</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                bloomee（送料385〜550円）、hanameku（送料別途）、日本総合園芸（送料別途）は花代とは別に送料がかかります。
                毎週配送を選ぶと月4回の送料が発生するため、月間で1,540円以上の送料負担になる場合もあります。
                隔週配送にすれば送料を半分に抑えられますが、それでも年間を通すとかなりの金額になります。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Budget Guide ─── */}
        <section id="budget-guide" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              予算別おすすめサービス
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              「毎月いくらまでなら花のサブスクに使える？」という視点から、予算別のおすすめサービスをまとめました。
              配送頻度は隔週（月2回）を想定しています。
            </p>

            <div className="space-y-5">
              {/* Under 1500 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    月1,500円以下
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">medelu Miniプラン一択</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      隔週配送で月額約1,396円（698円 x 2回）。送料無料で、月1,500円以下に収まる唯一の選択肢です。
                      3本のお花が届くため、小さな花瓶に飾るのにちょうど良いボリューム。コスパ最重視の方に最適です。
                    </p>
                  </div>
                </div>
              </div>

              {/* 1500-2000 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    月2,000円以下
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">medelu or hanameku</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      medeluのMiniプラン（月約1,396円）に加え、hanamekuのライトプラン（月約1,716円＋送料）も候補に入ります。
                      hanamekuは月1回配送も選べるため、月1回にすれば858円＋送料のみで済みます。
                      配送頻度を調整することで予算内に収めやすいのがhanamekuの利点です。
                    </p>
                  </div>
                </div>
              </div>

              {/* 2000-3000 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    月3,000円以下
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">bloomee or AND PLANTS（月1回）</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      bloomee体験プラン隔週（月約2,730円：1,365円 x 2回）、AND PLANTS Standardプラン月1回（月1,980円）が候補です。
                      知名度と安心感を求めるならbloomee、おしゃれなアレンジとボリュームを求めるならAND PLANTSがおすすめです。
                      AND PLANTSは月1回でも4〜6本届くため、1回の満足度は高いでしょう。
                    </p>
                  </div>
                </div>
              </div>

              {/* Over 3000 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    月3,000円以上
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">全サービスが選択肢に</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      月3,000円以上の予算があれば、AND PLANTS隔週（月約3,960円）や日本総合園芸（月2,200円＋送料〜）も含め、全サービスから自由に選べます。
                      この予算帯では価格よりも、花のテイスト・配送方法・ブランドの好みで選ぶのがよいでしょう。
                      medeluの上位プラン（Lite: 1,508円、Basic: 2,508円）も検討の価値があります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクの料金に関するよくある質問
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
              まとめ：安さで選ぶならmedeluが最有力
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクを安い順に比較した結果、送料込みの総額ではmedelu（メデル）のMiniプラン（698円/回・送料無料）が最も安いサービスです。
              回数縛りもなく、気軽に始められる点も大きなメリットです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              次いでhanameku（858円/回＋送料）、bloomee（980円＋送料385円＝1,365円/回）と続きます。
              bloomeeは送料を含めると割高に見えますが、全国200店舗以上の提携花屋からアレンジが届く点や、SNSでの豊富な情報量は他にない強みです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              価格以外にも、花のボリューム・配送方法・回数縛りの有無・アレンジのテイストなど、自分が重視するポイントを踏まえて選ぶことが大切です。
              まずは気になるサービスの公式サイトで最新情報を確認してみましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/medelu"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                1位 medeluの詳細を見る
              </a>
              <a
                href="/services/hanameku"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                2位 hanamekuの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                3位 bloomeeの詳細を見る
              </a>
            </div>
            <a
              href="/"
              className="inline-block mt-4 text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline"
            >
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
