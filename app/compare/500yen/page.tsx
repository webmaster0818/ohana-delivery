"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "本当に500円台でお花の定期便を始められますか？",
    a: "花代だけで見ると、タスハナが528円/回と500円台で始められます。ただし送料330円が別途かかるため、総額は858円/回になります。medeluのLiteコースは698円/回ですが送料無料のため、総額ではmedeluが最安です。純粋な「ワンコイン（500円）」で始められるサービスは現時点ではありませんが、1,000円以下で始められるサービスは複数あります。",
  },
  {
    q: "安い花のサブスクでも品質は大丈夫ですか？",
    a: "はい、安いサービスでも品質面で問題があるわけではありません。medeluは市場直送の仕組みで中間コストを削減しているため安価でも新鮮なお花が届きます。タスハナも規格外の花（品質に問題はないが形やサイズが規格外のもの）を活用することでロスを減らし、低価格を実現しています。各サービスとも品質保証制度があるため、万が一傷んだ花が届いた場合は無料で再送してもらえます。",
  },
  {
    q: "送料無料のサービスはどれですか？",
    a: "medeluは全プラン送料無料です。Liteコースは698円のみで利用でき、送料を含めた総額で業界最安水準です。AND PLANTSも送料込みの価格設定ですが、最安プランが1,980円/回と価格帯が異なります。bloomeeやhanamekuは別途送料がかかります。",
  },
  {
    q: "ワンコインで何本の花が届きますか？",
    a: "最安クラスのプランでは3本程度が一般的です。medeluのLiteコースは3本、タスハナは3〜4本、bloomeeの体験プランは3本以上です。本数は少なめですが、小さな花瓶に飾ったり、一輪挿しにするには十分なボリュームです。テーブルやデスクにちょっとした彩りを添えるのにぴったりです。",
  },
  {
    q: "安い花のサブスクに回数縛りはありますか？",
    a: "サービスによって異なります。medeluは回数縛りなしで698円から始められるため、1回試してすぐ解約も可能です。タスハナも回数縛りはありません。一方、bloomeeは4回の最低受け取り回数があり、4回受け取り前に解約すると残り回数分の料金が発生します。初めてで不安な方は、回数縛りなしのサービスから試すのがおすすめです。",
  },
  {
    q: "月額で一番安いのはどのサービスですか？",
    a: "隔週（月2回）配送の場合、medeluのLiteコースが月額約1,396円（698円 x 2回、送料無料）で最安です。月1回配送が可能なサービスでは、hanamekuのライトプランが月858円＋送料で利用できます。月の花代を最小限に抑えたい方は、月1回配送を選べるサービスを検討するとよいでしょう。",
  },
  {
    q: "安い花のサブスクでポスト投函に対応しているのはどれですか？",
    a: "medelu、bloomee、hanameku（ライトプランのポスト投函を選択した場合）がポスト投函に対応しています。ポスト投函なら不在時でも受け取れるため、日中家を空けることが多い方に便利です。ポスト投函対応のサービスの中で最安なのはmedeluのLiteコース（698円/回・送料無料）です。",
  },
];

/* ─── Ranking Data ─── */
const rankingData = [
  {
    rank: 1,
    name: "medelu",
    nameJa: "メデル",
    plan: "Liteコース",
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
    highlight: "送料無料で698円/回。送料込みの総額で圧倒的に最安。市場直送で花の鮮度も良好。回数縛りなしで安心。",
    color: "#F59E0B",
  },
  {
    rank: 2,
    name: "タスハナ",
    nameJa: "タスハナ",
    plan: "基本プラン",
    price: 528,
    shipping: 330,
    total: 858,
    shippingLabel: "330円",
    flowers: "3〜4本",
    delivery: "ポスト投函",
    frequency: "隔週 / 月1回",
    minOrders: "なし",
    quality: "あり",
    url: "#",
    highlight: "花代528円は最安。規格外の花を活用し低価格とフードロス削減を両立。送料330円を加えても858円/回。",
    color: "#9CA3AF",
  },
  {
    rank: 3,
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
    highlight: "花代858円。月1回配送も選べるため月額コストを最小限に抑えられる。配送頻度の柔軟性が高い。",
    color: "#B45309",
  },
  {
    rank: 4,
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
    highlight: "花代980円＋送料385円で1回1,365円。知名度No.1の安心感。ただし4回の最低受け取りあり。",
    color: "#6B7280",
  },
];

/* ─── Main Component ─── */
export default function FiveHundredYenPage() {
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
                  <span className="text-[#333] font-medium">500円台で始められる花のサブスク</span>
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
              お花の定期便500円台で始められる！<br className="hidden md:block" />
              ワンコイン花サブスク比較【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              「お花のサブスクを始めたいけど、まずは500円くらいの安いプランで試したい」という方へ。
              各サービスの最安プランを送料込みの総額で比較し、本当にお得なサービスをランキング形式でご紹介します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">実質最安</p>
                <p className="text-xl font-bold text-[#4A7C59]">698円/回</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">花代最安</p>
                <p className="text-xl font-bold text-[#4A7C59]">528円/回</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">比較対象</p>
                <p className="text-xl font-bold text-[#4A7C59]">4サービス</p>
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
                  <li><a href="#intro" className="hover:text-[#4A7C59] transition-colors">1. 500円台で始められるお花の定期便はある？</a></li>
                  <li><a href="#comparison-table" className="hover:text-[#4A7C59] transition-colors">2. 最安プラン比較表（送料込み総額）</a></li>
                  <li><a href="#ranking" className="hover:text-[#4A7C59] transition-colors">3. 安い花サブスクランキング</a></li>
                  <li><a href="#total-cost" className="hover:text-[#4A7C59] transition-colors">4. 送料込み総額で比較するのが重要</a></li>
                  <li><a href="#caution" className="hover:text-[#4A7C59] transition-colors">5. 安さだけで選ぶと失敗する理由</a></li>
                  <li><a href="#tips" className="hover:text-[#4A7C59] transition-colors">6. ワンコインで花のある暮らしを始めるコツ</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">7. よくある質問</a></li>
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
              500円台で始められるお花の定期便はある？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              結論から言うと、花代だけで500円台のサービスは存在します。タスハナは1回528円（税込）から利用でき、花代だけならワンコインに近い価格帯です。ただし、ほとんどのサービスでは花代とは別に送料がかかるため、送料を含めた「総額」で比較することが非常に重要です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              例えば、花代が528円でも送料が330円かかれば、1回あたりの総額は858円になります。一方、花代は698円でも送料無料のmedeluなら、総額はそのまま698円。花代だけを見て「安い！」と飛びつくと、実際の支出が予想以上になることもあるのです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              この記事では、各サービスの最安プランを「送料込みの総額」で比較し、本当にお得なサービスをご紹介します。500円台・1,000円以下で花のある暮らしを始めたい方は、ぜひ参考にしてください。
            </p>

            <div className="bg-[#E8F0EB] rounded-xl p-5 mt-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-2">この記事のポイント</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] mt-0.5 shrink-0">--</span>
                  <span>花代だけでなく送料込みの総額で比較することが重要</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] mt-0.5 shrink-0">--</span>
                  <span>送料込みで最安はmedelu Liteコース（698円/回）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] mt-0.5 shrink-0">--</span>
                  <span>花代だけならタスハナ（528円/回）が最安</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4A7C59] mt-0.5 shrink-0">--</span>
                  <span>安さだけでなく花の本数・品質・回数縛りも確認すべき</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="comparison-table" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              最安プラン比較表（送料込み総額で比較）
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              各サービスの最安プランを、花代・送料・1回あたりの総額で比較しました。安い順に並べています。
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-3 py-3 text-left font-medium">順位</th>
                    <th className="px-3 py-3 text-left font-medium">サービス</th>
                    <th className="px-3 py-3 text-center font-medium">花代</th>
                    <th className="px-3 py-3 text-center font-medium">送料</th>
                    <th className="px-3 py-3 text-center font-medium">総額/回</th>
                    <th className="px-3 py-3 text-center font-medium">花の本数</th>
                    <th className="px-3 py-3 text-center font-medium">回数縛り</th>
                  </tr>
                </thead>
                <tbody className="text-[#666]">
                  <tr className="border-b border-[#E5E5E5] bg-[#FFFBEB]">
                    <td className="px-3 py-3 font-bold text-[#F59E0B]">1位</td>
                    <td className="px-3 py-3 font-bold text-[#333]">medelu Liteコース</td>
                    <td className="px-3 py-3 text-center">698円</td>
                    <td className="px-3 py-3 text-center font-bold text-[#4A7C59]">無料</td>
                    <td className="px-3 py-3 text-center font-bold text-[#4A7C59]">698円</td>
                    <td className="px-3 py-3 text-center">3本</td>
                    <td className="px-3 py-3 text-center">なし</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5]">
                    <td className="px-3 py-3 font-bold text-[#9CA3AF]">2位</td>
                    <td className="px-3 py-3 font-bold text-[#333]">タスハナ 基本プラン</td>
                    <td className="px-3 py-3 text-center">528円</td>
                    <td className="px-3 py-3 text-center">330円</td>
                    <td className="px-3 py-3 text-center font-bold">858円</td>
                    <td className="px-3 py-3 text-center">3〜4本</td>
                    <td className="px-3 py-3 text-center">なし</td>
                  </tr>
                  <tr className="border-b border-[#E5E5E5] bg-[#F8F8F8]">
                    <td className="px-3 py-3 font-bold text-[#B45309]">3位</td>
                    <td className="px-3 py-3 font-bold text-[#333]">hanameku ライトプラン</td>
                    <td className="px-3 py-3 text-center">858円</td>
                    <td className="px-3 py-3 text-center">別途</td>
                    <td className="px-3 py-3 text-center">858円+送料</td>
                    <td className="px-3 py-3 text-center">数本</td>
                    <td className="px-3 py-3 text-center">なし</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-bold text-[#6B7280]">4位</td>
                    <td className="px-3 py-3 font-bold text-[#333]">bloomee 体験プラン</td>
                    <td className="px-3 py-3 text-center">980円</td>
                    <td className="px-3 py-3 text-center">385円</td>
                    <td className="px-3 py-3 text-center font-bold">1,365円</td>
                    <td className="px-3 py-3 text-center">3本以上</td>
                    <td className="px-3 py-3 text-center">4回</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#999] mt-3">
              ※ 価格はすべて税込。2026年4月時点の情報です。最新の料金は各公式サイトでご確認ください。
            </p>
          </div>
        </section>

        {/* ─── Ranking Detail ─── */}
        <section id="ranking" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              安い花サブスクランキング（詳細解説）
            </h2>

            <div className="space-y-6">
              {rankingData.map((item) => (
                <div
                  key={item.rank}
                  className={`bg-white rounded-xl overflow-hidden ${item.rank === 1 ? "border-2 border-[#4A7C59]" : "border border-[#E5E5E5]"}`}
                >
                  {item.rank === 1 && (
                    <div className="bg-[#4A7C59] text-white text-xs text-center py-1.5 font-bold">
                      送料込み総額で最安 ─ おすすめNo.1
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-start gap-4 mb-4">
                      <span
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-bold shrink-0"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.rank}位
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#333] mb-1">
                          {item.name}（{item.nameJa}）{item.plan}
                        </h3>
                        <p className="text-sm text-[#666] leading-relaxed">{item.highlight}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className="bg-[#F8F8F8] rounded-lg px-3 py-2 text-center">
                        <p className="text-xs text-[#999] mb-1">花代</p>
                        <p className="text-sm font-bold text-[#333]">{item.price}円</p>
                      </div>
                      <div className="bg-[#F8F8F8] rounded-lg px-3 py-2 text-center">
                        <p className="text-xs text-[#999] mb-1">送料</p>
                        <p className="text-sm font-bold text-[#333]">{item.shippingLabel}</p>
                      </div>
                      <div className="bg-[#E8F0EB] rounded-lg px-3 py-2 text-center">
                        <p className="text-xs text-[#4A7C59] mb-1">総額/回</p>
                        <p className="text-sm font-bold text-[#4A7C59]">
                          {item.total ? `${item.total.toLocaleString()}円` : `${item.price}円+送料`}
                        </p>
                      </div>
                      <div className="bg-[#F8F8F8] rounded-lg px-3 py-2 text-center">
                        <p className="text-xs text-[#999] mb-1">花の本数</p>
                        <p className="text-sm font-bold text-[#333]">{item.flowers}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 text-xs">
                      <span className="bg-[#F8F8F8] text-[#666] px-3 py-1 rounded-full">配送: {item.delivery}</span>
                      <span className="bg-[#F8F8F8] text-[#666] px-3 py-1 rounded-full">頻度: {item.frequency}</span>
                      <span className="bg-[#F8F8F8] text-[#666] px-3 py-1 rounded-full">縛り: {item.minOrders}</span>
                      <span className="bg-[#F8F8F8] text-[#666] px-3 py-1 rounded-full">品質保証: {item.quality}</span>
                    </div>

                    {item.url !== "#" && (
                      <a
                        href={item.url}
                        className="inline-block text-sm text-[#4A7C59] font-medium hover:underline"
                      >
                        {item.name}の詳細レビューを見る →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Total Cost Importance ─── */}
        <section id="total-cost" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              送料込み総額で比較するのが重要な理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              花のサブスクを比較する際、多くの方が花代だけを見て「安い」「高い」と判断しがちです。しかし、実際の支出は「花代 + 送料」の総額で決まります。この差は無視できないほど大きいのです。
            </p>

            <div className="bg-white rounded-xl p-5 border border-[#E5E5E5] mb-6">
              <h3 className="text-sm font-bold text-[#333] mb-3">具体例で比較</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-[#E5E5E5]">
                  <span className="text-[#666]">タスハナ: 花代528円 + 送料330円</span>
                  <span className="font-bold text-[#333]">= 858円/回</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#E5E5E5]">
                  <span className="text-[#666]">medelu: 花代698円 + 送料0円</span>
                  <span className="font-bold text-[#4A7C59]">= 698円/回</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[#666]">bloomee: 花代980円 + 送料385円</span>
                  <span className="font-bold text-[#333]">= 1,365円/回</span>
                </div>
              </div>
              <p className="text-sm text-[#666] mt-4 leading-relaxed">
                花代だけを見るとタスハナ（528円）が最安ですが、送料を加えた総額ではmedelu（698円）が最も安くなります。花代の安さに惹かれても、実際の支出は送料込みで考える必要があります。
              </p>
            </div>

            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              特に月2回（隔週）配送にすると、送料の差は月あたりの支出に大きく影響します。medeluなら月約1,396円、bloomeeなら月約2,730円と、月1,300円以上の差に。年間では約16,000円もの差になるため、送料込みの総額比較は非常に重要です。
            </p>
          </div>
        </section>

        {/* ─── Caution ─── */}
        <section id="caution" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              安さだけで選ぶと失敗する3つの理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              価格は重要な判断基準ですが、安さだけで選ぶと期待はずれになることも。以下の3つのポイントも必ず確認しましょう。
            </p>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "花の本数が少なすぎて物足りない",
                  text: "最安プランは3本程度の花が届くのが一般的です。一輪挿しや小さな花瓶には十分ですが、「もっとボリュームが欲しい」と感じる方も少なくありません。見栄えを重視するなら、少し上のプランも検討する価値があります。1本あたりの単価で見ると、上位プランの方がお得な場合もあります。",
                },
                {
                  num: "2",
                  title: "回数縛りで解約できない",
                  text: "bloomeeのように最低受け取り回数が設定されているサービスもあります。4回縛りの場合、体験プランでも最低1,365円 x 4回 = 5,460円のコストが発生します。「1回試して合わなければやめたい」という方は、回数縛りなしのmedeluやタスハナ、hanamekuを選びましょう。",
                },
                {
                  num: "3",
                  title: "花の品質やアレンジが期待と違う",
                  text: "安いプランでも品質に問題があるわけではありませんが、花の種類やアレンジの自由度は限られます。安いプランはおまかせアレンジが基本で、花の色や種類を選ぶことはできません。インテリアに合わせて色を選びたい方は、多少価格が上がってもHitoHanaのような色が選べるサービスを検討するとよいでしょう。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#FDF5F5] rounded-xl p-5 border border-[#E0B8B8]">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                      {item.num}
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

        {/* ─── Tips ─── */}
        <section id="tips" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ワンコインで花のある暮らしを始める3つのコツ
            </h2>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "まずは隔週配送・月1回配送から始める",
                  text: "毎週配送にすると月あたりのコストが2倍になります。最初は隔週（月2回）や月1回の配送から始めて、花のある暮らしに慣れてきたら頻度を上げるのがおすすめです。medeluの隔週配送なら月約1,396円、hanamekuの月1回なら月858円＋送料で済みます。",
                },
                {
                  num: "2",
                  title: "切り花延命剤で花を長持ちさせる",
                  text: "届いた花を少しでも長く楽しむために、切り花延命剤の活用をおすすめします。100均やホームセンターで手軽に購入でき、花持ちが1.5〜2倍に延びることも。配送頻度を減らしても常に花のある状態を保てるため、コストパフォーマンスが向上します。",
                },
                {
                  num: "3",
                  title: "回数縛りなしのサービスでお試しする",
                  text: "花のサブスクが初めての方は、回数縛りなしのサービスから始めましょう。medeluは回数縛りなしで698円から、タスハナも縛りなしで528円＋送料330円から始められます。合わなければすぐに解約できるため、金銭的なリスクが少ないです。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                      {item.num}
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

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ワンコイン花サブスクに関するよくある質問
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
              まとめ：送料込みで最安はmedelu、花代最安はタスハナ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              お花の定期便を500円台・ワンコインで始めたい方に向けて、各サービスの最安プランを送料込みの総額で比較しました。結論として、送料込みの総額で最も安いのは<strong>medelu Liteコース（698円/回・送料無料）</strong>です。回数縛りもなく、ポスト投函で受け取れるため、初めての方にも安心です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花代だけで見ると<strong>タスハナ（528円/回）</strong>が最安ですが、送料330円を加えると858円/回となります。配送頻度の柔軟性を重視するなら<strong>hanameku（858円/回、月1回配送あり）</strong>も候補です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              安さだけでなく、花の本数・品質・回数縛りの有無・配送方法など、総合的に判断することが大切です。まずは回数縛りなしのサービスで気軽に試してみて、花のある暮らしを始めてみましょう。
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
                3位 hanamekuの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                4位 bloomeeの詳細を見る
              </a>
            </div>
            <a
              href="/compare/cheap"
              className="inline-block mt-4 text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline"
            >
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
