"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "一人暮らしで花のサブスクを始めるのにおすすめのサービスは？",
    a: "一人暮らしにはmedelu（メデル）のMiniプランが最もおすすめです。698円（送料無料）で始められ、ポスト投函で受け取れるため不在でも安心。回数縛りもないので気軽にお試しできます。",
  },
  {
    q: "一人暮らしで不在が多くても大丈夫ですか？",
    a: "ポスト投函に対応しているサービスなら、不在でも問題ありません。medelu・bloomee・hanameku（ポスト投函プラン）はいずれもポストに届くため、帰宅後に受け取れます。ポストのサイズが小さい場合は事前に確認しておきましょう。",
  },
  {
    q: "花瓶がなくても始められますか？",
    a: "はい、始められます。100均のガラスコップやジャムの空き瓶でも十分代用できます。まずは手持ちのグラスや空き瓶で試してみて、気に入ったら小さな花瓶を購入するのがおすすめです。",
  },
  {
    q: "お花の手入れは大変ですか？",
    a: "基本的なお手入れは水替えと茎のカットだけです。2〜3日に1回、水を替えて茎を1cmほど斜めにカットするだけで長持ちします。1回5分もかかりません。花のサブスクにはお手入れガイドが同封されていることが多いので、初心者でも安心です。",
  },
  {
    q: "ワンルームでも花を飾るスペースはありますか？",
    a: "3本程度のミニブーケなら、テーブルの隅・キッチンカウンター・洗面台・窓際など、小さなスペースで十分飾れます。むしろコンパクトな空間のほうが花の存在感が際立ち、部屋全体の雰囲気が変わります。",
  },
  {
    q: "旅行や出張で受け取れない週はどうすればいいですか？",
    a: "ほとんどのサービスでスキップ（配送停止）機能があります。medeluは配送日の変更やスキップが自由にでき、hanamekuも同様です。bloomeeもマイページからスキップ可能です。旅行の予定がわかったら早めに手続きしておきましょう。",
  },
  {
    q: "月額いくらくらいが目安ですか？",
    a: "一人暮らしなら月1,000〜2,000円程度が目安です。medeluのMiniプランを隔週で利用すれば月約1,396円（698円x2回）、bloomeeの体験プランなら隔週で月約2,730円（1,365円x2回）です。まずは隔週配送から始めて、ペースをつかむのがおすすめです。",
  },
  {
    q: "花のサブスクはいつでも解約できますか？",
    a: "medeluとhanamekuは回数縛りがなく、いつでも解約できます。bloomeeは4回の最低受け取り回数があるため、4回受け取り前に解約すると残り回数分の料金が発生します。気軽に試したい方は回数縛りなしのサービスから始めるのがおすすめです。",
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
    highlight: "698円〜送料無料。ポスト投函で不在でも受け取れる。回数縛りなしで気軽に始められる。",
    bestFor: "コスパ重視の一人暮らし、初めて花のサブスクを試す方",
    detail:
      "medeluは一人暮らしに最もおすすめの花のサブスクです。Miniプランは1回698円で送料無料、3本のお花がポストに届きます。市場直送で中間マージンを削減しているため、低価格でも新鮮なお花が届くのが強みです。回数縛りがないため「まずは試してみたい」という方にも安心。配送頻度は毎週・隔週から選べ、スキップも自由。一人暮らしの小さなテーブルに飾るにはちょうど良い3本というボリューム感も魅力です。",
  },
  {
    rank: 2,
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
    highlight: "知名度No.1、累計3,000万本以上の実績。全国200店舗以上の提携花屋からアレンジが届く。",
    bestFor: "安心感・知名度を重視する方、SNSで花の投稿を楽しみたい方",
    detail:
      "bloomeeは日本最大級の花のサブスクで、知名度・実績ともにNo.1のサービスです。体験プランは980円で送料385円を合わせると1回1,365円ですが、全国200店舗以上の提携花屋がアレンジを担当するため、毎回異なるテイストのお花を楽しめます。品質保証制度（再送保証）があり、届いた花が傷んでいた場合は再送対応を受けられるので安心。SNSでの投稿が盛んで、他の利用者のアレンジを参考にできるのも一人暮らしには心強いポイントです。ただし4回の最低受け取り回数がある点には注意が必要です。",
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
    officialUrl: "https://hanameku.jp",
    highlight: "858円から。市場直送で鮮度抜群。ポスト投函と宅配便を選べる柔軟な配送。",
    bestFor: "鮮度にこだわりたい方、月1回からゆっくり始めたい方",
    detail:
      "hanamekuは市場直送にこだわった花のサブスクです。ライトプランは858円で、別途送料がかかりますが、市場から直接届くため鮮度が抜群。ポスト投函と宅配便の両方に対応しており、一人暮らしで不在がちな方はポスト投函を選べます。配送頻度も毎週・隔週・月1回と幅広く、月1回から気軽に始められるのが特徴です。回数縛りもないため、合わなければいつでも解約可能。花のサブスクに慣れてきたらプランをアップグレードする、という使い方もおすすめです。",
  },
];

/* ─── Main Component ─── */
export default function HitorigurashiGuidePage() {
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
                  <span className="text-[#666]">ガイド記事</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">一人暮らしにおすすめの花サブスク</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              一人暮らし向けガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              一人暮らしにおすすめの花サブスク3選<br className="hidden md:block" />
              コスパと手軽さで選ぶ
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              一人暮らしの部屋にお花を飾りたいけど、「どのサービスがいいの？」「続けられるか不安」と感じていませんか。
              この記事では、一人暮らしに本当に合う花のサブスクを3つ厳選し、コスパ・手軽さ・受け取りやすさの観点で比較します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安プラン</p>
                <p className="text-xl font-bold text-[#4A7C59]">698円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">比較対象</p>
                <p className="text-xl font-bold text-[#4A7C59]">3サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">ポスト投函</p>
                <p className="text-xl font-bold text-[#4A7C59]">全サービス対応</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">回数縛りなし</p>
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
                  <li><a href="#why-flowers" className="hover:text-[#4A7C59] transition-colors">1. 一人暮らしにお花がおすすめの理由</a></li>
                  <li><a href="#how-to-choose" className="hover:text-[#4A7C59] transition-colors">2. 一人暮らし向け花サブスクの選び方</a></li>
                  <li><a href="#ranking-table" className="hover:text-[#4A7C59] transition-colors">3. 一人暮らし向け花サブスク3選 比較表</a></li>
                  <li><a href="#ranking-detail" className="hover:text-[#4A7C59] transition-colors">4. 各サービスの詳細レビュー</a></li>
                  <li><a href="#room-tips" className="hover:text-[#4A7C59] transition-colors">5. 一人暮らしの部屋で花を飾るコツ</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">6. 一人暮らしの花サブスクに関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">7. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Why Flowers for Solo Living ─── */}
        <section id="why-flowers" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              一人暮らしにお花がおすすめの理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              「一人暮らしの部屋に花なんて」と思う方もいるかもしれません。しかし、一人暮らしだからこそ花を飾るメリットは大きいのです。
            </p>

            <div className="space-y-5 mb-8">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">部屋の雰囲気が変わる</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  ワンルームや1Kの部屋でも、テーブルに花が一輪あるだけで空間の印象は大きく変わります。殺風景になりがちな一人暮らしの部屋に、自然の彩りと生き生きとした雰囲気をプラスできます。インテリアにお金をかけなくても、数百円の花で部屋がぐっとおしゃれに見えるのはコスパが良いと言えるでしょう。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">リラックス効果・ストレス軽減</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花には視覚的なリラックス効果があるとされています。仕事や学校から疲れて帰ってきたとき、部屋に花があるだけで気持ちが和らぎます。一人暮らしでは話し相手がいない分、花のお世話をすることが日々のちょっとした楽しみや癒しになるという声も多いです。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">季節感を感じられる</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花のサブスクでは季節に合わせた旬のお花が届きます。忙しい日々の中で季節の移ろいを感じられるのは、心の豊かさにつながります。春はチューリップ、夏はヒマワリ、秋はコスモス、冬はスイートピーなど、季節ごとの花が届く楽しみがあります。
                </p>
              </div>
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">生活にリズムが生まれる</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  定期的にお花が届くことで、水替えやお手入れといったルーティンが生まれます。一人暮らしはどうしても生活が不規則になりがちですが、花のお世話をすることで小さな生活リズムが生まれ、丁寧な暮らしにつながります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section id="how-to-choose" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              一人暮らし向け花サブスクの選び方
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              一人暮らしで花のサブスクを選ぶ際に、特に重視すべきポイントは以下の4つです。
            </p>

            <div className="space-y-5">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    Point 1
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">ポスト投函で受け取れるか</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      一人暮らしで最も重要なのが受け取り方法です。仕事や外出で不在が多い場合、ポスト投函に対応しているサービスを選びましょう。宅配便だと再配達の手間がかかり、ストレスの原因になります。今回紹介する3サービスはいずれもポスト投函に対応しています。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    Point 2
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">送料込みの総額が予算内か</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      花代だけでなく送料を含めた総額で比較することが大切です。一人暮らしの限られた生活費の中で無理なく続けるには、月1,000〜2,000円程度が目安。送料無料のサービスなら、表示価格がそのまま支払い額になるのでわかりやすいです。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    Point 3
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">回数縛り・解約の自由度</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      初めて花のサブスクを試す場合、回数縛りがないサービスのほうが安心です。「思っていたのと違った」「忙しくて手入れできない」と感じたときに、すぐ解約できるかどうかは重要なポイント。medeluとhanamekuは回数縛りなし、bloomeeは4回の最低受け取りがあります。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    Point 4
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">スキップ機能があるか</h3>
                    <p className="text-sm text-[#666] leading-relaxed">
                      一人暮らしだと旅行や帰省で家を空けることも多いでしょう。そんなときに配送をスキップできる機能があると便利です。今回紹介する3サービスはいずれもスキップに対応しており、不在時に無駄な出費を抑えられます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Ranking Table ─── */}
        <section id="ranking-table" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              一人暮らし向け花サブスク3選 比較表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              一人暮らしにおすすめの3サービスを、料金・配送方法・回数縛りなどの観点で比較しました。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm" style={{ minWidth: "640px" }}>
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">順位</th>
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-right font-medium">花代</th>
                    <th className="px-4 py-3 text-right font-medium">送料</th>
                    <th className="px-4 py-3 text-right font-medium">1回あたり総額</th>
                    <th className="px-4 py-3 text-center font-medium">届き方</th>
                    <th className="px-4 py-3 text-center font-medium">回数縛り</th>
                  </tr>
                </thead>
                <tbody>
                  {rankingData.map((item, i) => (
                    <tr key={i} className={`border-t border-[#E5E5E5] ${i === 0 ? "bg-[#FFFBEB]" : ""}`}>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                          i === 0 ? "bg-[#F59E0B] text-white" :
                          i === 1 ? "bg-[#9CA3AF] text-white" :
                          "bg-[#B45309] text-white"
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
                      <td className="px-4 py-4 text-center text-[#666]">{item.delivery}</td>
                      <td className="px-4 py-4 text-center">
                        {item.minOrders === "なし" ? (
                          <span className="text-[#4A7C59] font-medium">なし</span>
                        ) : (
                          <span className="text-[#666]">{item.minOrders}</span>
                        )}
                      </td>
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
                <li>・ bloomeeは4回の最低受け取り回数があります</li>
                <li>・ 2026年4月時点の情報です。最新の料金は各公式サイトでご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Ranking Detail ─── */}
        <section id="ranking-detail" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              各サービスの詳細レビュー
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              一人暮らしの視点で、3サービスそれぞれのメリット・注意点を詳しく解説します。
            </p>

            <div className="space-y-8">
              {rankingData.map((item) => (
                <div key={item.rank} className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                  {/* Service Header */}
                  <div className={`px-5 py-4 flex items-center gap-3 ${item.rank === 1 ? "bg-[#FFFBEB] border-b border-[#F59E0B]" : "bg-[#E8F0EB] border-b border-[#C5D9CB]"}`}>
                    <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold ${
                      item.rank === 1 ? "bg-[#F59E0B] text-white" :
                      item.rank === 2 ? "bg-[#9CA3AF] text-white" :
                      "bg-[#B45309] text-white"
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
                      <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">花代</p>
                        <p className="text-lg font-bold text-[#333]">{item.price.toLocaleString()}<span className="text-xs font-normal">円</span></p>
                      </div>
                      <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
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
                      <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">1回あたり総額</p>
                        <p className="text-lg font-bold text-[#4A7C59]">
                          {item.total ? (
                            <>{item.total.toLocaleString()}<span className="text-xs font-normal">円</span></>
                          ) : (
                            <span className="text-sm">{item.price.toLocaleString()}円＋送料</span>
                          )}
                        </p>
                      </div>
                      <div className="bg-[#F8F8F8] rounded-lg p-3 text-center border border-[#E5E5E5]">
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
                        <span className="font-bold text-[#4A7C59]">こんな一人暮らしにおすすめ：</span>
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

        {/* ─── Room Decoration Tips ─── */}
        <section id="room-tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              一人暮らしの部屋で花を飾るコツ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              「花を飾りたいけど、ワンルームだとスペースが...」という方でも大丈夫。一人暮らしの部屋で花を素敵に飾るコツをご紹介します。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">おすすめの飾る場所</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>・ <span className="font-medium text-[#333]">テーブル・デスクの隅</span> - 食事やリモートワーク中に目に入り、気分転換に</li>
                  <li>・ <span className="font-medium text-[#333]">キッチンカウンター</span> - 料理中に花が見えると楽しい気分に</li>
                  <li>・ <span className="font-medium text-[#333]">洗面台</span> - 朝の身支度中に花があるとリフレッシュ</li>
                  <li>・ <span className="font-medium text-[#333]">窓際</span> - 自然光で花がきれいに映える（直射日光は避ける）</li>
                  <li>・ <span className="font-medium text-[#333]">玄関</span> - 帰宅時に最初に目に入る場所で「おかえり」の気分に</li>
                </ul>
              </div>

              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">花瓶がなくても大丈夫</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>・ <span className="font-medium text-[#333]">100均のガラスコップ</span> - 3本程度ならコップで十分飾れる</li>
                  <li>・ <span className="font-medium text-[#333]">ジャムやソースの空き瓶</span> - 洗って再利用。ナチュラルな雰囲気に</li>
                  <li>・ <span className="font-medium text-[#333]">マグカップ</span> - 使わなくなったカップも花瓶代わりに</li>
                  <li>・ <span className="font-medium text-[#333]">ペットボトルを切ったもの</span> - 応急処置にはこれでもOK</li>
                  <li>・ <span className="font-medium text-[#333]">100均の一輪挿し</span> - 110円で購入可能。おしゃれなものも多い</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6 mb-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">花を長持ちさせる基本のお手入れ</h3>
              <div className="space-y-3 text-sm text-[#666]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">1</span>
                  <p><span className="font-medium text-[#333]">水替えは2〜3日に1回</span> - 水が濁ると雑菌が繁殖し、花が傷みやすくなります。こまめな水替えが長持ちの基本です。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">2</span>
                  <p><span className="font-medium text-[#333]">茎を斜めにカット</span> - 水替えのたびに茎を1cmほど斜めに切ると、水の吸い上げが良くなります。キッチンバサミでOKです。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">3</span>
                  <p><span className="font-medium text-[#333]">直射日光・エアコンの風を避ける</span> - 直射日光は花を傷め、エアコンの乾燥した風も花持ちを悪くします。間接光の当たる涼しい場所がベストです。</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">4</span>
                  <p><span className="font-medium text-[#333]">付属の栄養剤を使う</span> - 花のサブスクには延命剤が同封されていることが多いです。水に混ぜるだけで花持ちが大幅に改善します。</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
              <h3 className="text-sm font-bold text-[#333] mb-2">一人暮らしならではの注意点</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ 長期不在の際は花を処分してから外出しましょう（水が腐ると不衛生に）</li>
                <li>・ 猫を飼っている場合、ユリ科の花は猫に有毒なため注意が必要です</li>
                <li>・ 夏場は水が傷みやすいので、こまめな水替えを心がけましょう</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              一人暮らしの花サブスクに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-[#E8F0EB] transition-colors text-left"
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
                    <div className="px-5 py-4 bg-[#F8F8F8]">
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
              まとめ：一人暮らしの花サブスクはmedeluが最もおすすめ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              一人暮らしに合う花のサブスクを3つ比較した結果、総合的に最もおすすめなのはmedelu（メデル）です。
              698円から始められる手頃な価格、送料無料、ポスト投函で不在でも受け取れる、回数縛りなしでいつでも解約可能と、一人暮らしが求める条件をすべて満たしています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              知名度と安心感を重視するならbloomee（ブルーミー）、鮮度にこだわるならhanameku（ハナメク）もよい選択肢です。
              bloomeeはSNSでの情報量が豊富で、初めてでも安心感があります。hanamekuは市場直送で鮮度が高く、月1回からスタートできる柔軟さが魅力です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              一人暮らしの部屋に花があるだけで、日々の暮らしは想像以上に豊かになります。
              まずは月700〜1,400円程度の気軽な予算から、お花のある生活を始めてみませんか。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/medelu"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                1位 medeluの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                2位 bloomeeの詳細を見る
              </a>
              <a
                href="/services/hanameku"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                3位 hanamekuの詳細を見る
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
              <img src="/images/logo-flwdeli-a1-trimmed.png" alt="flowerデリ" className="h-12 w-auto brightness-0 invert opacity-80 mb-2" />
              <p className="text-lg font-bold text-white mb-1">flowerデリ</p>
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
