"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクをプレゼントとして贈ることはできますか？",
    a: "はい、ギフト対応しているサービスであれば、相手の住所に花を届けることができます。bloomeeはギフトチケット（デジタル）を贈る形式、AND PLANTSは注文時に届け先を相手の住所に指定する形式です。日本総合園芸は法人向けの手渡し配達にも対応しています。サービスによってギフトの仕組みが異なるため、事前に確認しましょう。",
  },
  {
    q: "母の日に花の定期便を贈りたいのですが、いつまでに申し込めばいいですか？",
    a: "母の日当日に届けたい場合は、少なくとも1週間前までに申し込むのが安心です。bloomeeのギフトチケットはデジタル発行のため即日贈れますが、実際の花の配送開始日は受け取り側が自分で設定します。AND PLANTSや日本総合園芸は配送日を指定できる場合があるため、早めに公式サイトで母の日向けの対応を確認してください。",
  },
  {
    q: "ギフトチケットとは何ですか？どう使いますか？",
    a: "ギフトチケットとは、花のサブスクの利用権をデジタルチケットとして贈れる仕組みです。bloomeeが提供しており、購入するとURLやQRコードが発行されます。受け取った相手がそのURLから届け先住所やプランを設定すると、花が届き始めます。相手の住所を知らなくても贈れる点が大きなメリットです。",
  },
  {
    q: "花の定期便をプレゼントする場合、相手の住所を知らなくても大丈夫ですか？",
    a: "bloomeeのギフトチケットなら相手の住所を知らなくても贈れます。チケットを受け取った相手が自分で届け先を入力するため、住所を聞く必要がありません。一方、AND PLANTSや日本総合園芸は注文時に届け先住所の入力が必要です。サプライズで贈りたい場合はbloomeeのギフトチケットが便利です。",
  },
  {
    q: "プレゼントする期間（回数）は選べますか？",
    a: "サービスによって異なります。bloomeeのギフトチケットは期間を指定して購入できます（例：3か月、6か月、12か月など）。AND PLANTSは通常のサブスクリプションとして申し込み、贈り主が任意のタイミングで解約する形式です。予算に合わせて回数・期間を調整できますので、公式サイトで最新のギフトプランを確認してください。",
  },
  {
    q: "プレゼント用にメッセージカードを付けられますか？",
    a: "bloomeeのギフトチケットにはデジタルメッセージを添えることができます。AND PLANTSは初回配送時にメッセージカードを同梱できるオプションがある場合があります。日本総合園芸は法人向けの手配を含め、メッセージカードの対応が可能です。いずれも時期やプランによって対応状況が変わるため、注文前に公式サイトで確認してください。",
  },
  {
    q: "花の定期便のギフトにかかる費用はどれくらいですか？",
    a: "ギフトの費用はサービスとプラン、贈る期間によって異なります。bloomeeのギフトチケットは体験プラン3か月分で約4,000円前後から、レギュラープランならやや高めになります。AND PLANTSは1回1,980円（送料無料）からで、3か月（隔週6回）なら約11,880円です。予算に応じてプランと回数を選べるため、3,000円台から数万円台まで幅広く対応できます。",
  },
  {
    q: "贈られた側が届く花のテイストや頻度を変更できますか？",
    a: "bloomeeのギフトチケットの場合、受け取り側がプラン選択や配送頻度の設定を行えるため、自分好みにカスタマイズ可能です。AND PLANTSは贈り主のアカウントで管理する形式のため、変更は贈り主側で行う必要があります。サービスによって柔軟性が異なるため、相手の好みを尊重したい場合はbloomeeのギフトチケットが適しています。",
  },
];

/* ─── Gift Service Data ─── */
const giftServices = [
  {
    rank: 1,
    name: "bloomee",
    nameJa: "ブルーミー",
    giftType: "ギフトチケット（デジタル）",
    price: "980円〜/回",
    shipping: "385円〜",
    giftPlan: "3か月 / 6か月 / 12か月",
    addressRequired: "不要（相手が入力）",
    messageCard: "デジタルメッセージ対応",
    url: "/services/bloomee",
    officialUrl: "https://bloomee.jp",
    highlight: "ギフトチケットで住所不要。相手が届け先・プランを選べる。累計3,000万本超の実績で安心感が高い。",
    bestFor: "相手の住所を知らない場合、気軽なギフトを贈りたい場合、母の日や誕生日のサプライズに",
    detail: "bloomeeはギフトチケット方式を採用しており、購入するとデジタルチケット（URL/QRコード）が発行されます。LINEやメールで相手に送るだけで、受け取り側が届け先住所やプラン、配送頻度を自分で設定できます。相手の住所を知らなくても贈れるため、遠方の親御さんや友人へのプレゼントに最適です。全国200店舗以上の提携花屋からアレンジが届き、知名度も高いため「花の定期便って何？」という方にも安心して贈れます。",
  },
  {
    rank: 2,
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    giftType: "届け先指定（直接配送）",
    price: "1,980円〜/回",
    shipping: "無料",
    giftPlan: "回数縛りなし（任意で解約）",
    addressRequired: "必要（注文時に指定）",
    messageCard: "初回メッセージカード対応あり",
    url: "/services/and-plants",
    officialUrl: "https://andplants.jp",
    highlight: "プロのフローリストによるおしゃれなブーケ。送料無料で4〜6本のボリューム。初回クーポンあり。",
    bestFor: "おしゃれな花を贈りたい場合、インテリア好きな相手へのプレゼント、結婚祝いや新築祝いに",
    detail: "AND PLANTSは注文時に届け先を相手の住所に設定することで、ギフトとして利用できます。プロのフローリストが一つひとつアレンジしたセンスの良いブーケが届くため、見栄えを重視するギフトシーンにぴったりです。1回1,980円で送料無料、4〜6本のボリュームがあり、価格以上の満足感があります。回数縛りがないため、贈り主の判断で好きなタイミングで解約でき、3か月だけ・半年だけなど期間を自由に調整可能です。初回クーポンを活用すればさらにお得に始められます。",
  },
  {
    rank: 3,
    name: "日本総合園芸",
    nameJa: "にほんそうごうえんげい",
    giftType: "届け先指定（手渡し配達対応）",
    price: "2,200円〜/回",
    shipping: "別途（地域による）",
    giftPlan: "月1回 / 月2回",
    addressRequired: "必要（注文時に指定）",
    messageCard: "対応可能",
    url: "/services/nihon-sogo-engei",
    officialUrl: "https://nihon-sogo-engei.co.jp",
    highlight: "ボリューム満点の季節の花束。手渡し配達対応で法人ギフトにも。老舗ならではの品質と信頼。",
    bestFor: "ボリュームのある花束を贈りたい場合、法人の退職祝い・開店祝い、手渡しで届けたい場合に",
    detail: "日本総合園芸は老舗の花き業者が運営するサービスで、季節感のある豪華な花束が届きます。他サービスと比較してボリュームがある点が特徴で、特別感のあるギフトに向いています。手渡し配達にも対応しているため、法人利用の退職祝いや開店祝い、お見舞いなど、配達員から直接手渡しで届けてほしいシーンに適しています。メッセージカードの同梱にも対応しており、フォーマルなギフトシーンでも安心です。",
  },
];

/* ─── Occasion Data ─── */
const occasions = [
  {
    name: "母の日",
    timing: "毎年5月の第2日曜日",
    description: "花の定期便は母の日ギフトの定番になりつつあります。一度きりの花束と異なり、毎月届く花のサブスクなら感謝の気持ちを長く届けられます。遠方に住むお母さんにも配送で届くため、帰省できない場合にも最適です。",
    recommend: "bloomeeのギフトチケット（住所不要で手軽）またはAND PLANTS（おしゃれなブーケ）",
    budget: "3か月分で3,000円〜6,000円が目安",
  },
  {
    name: "誕生日",
    timing: "相手の誕生日に合わせて開始",
    description: "誕生日プレゼントに花の定期便を贈れば、誕生月だけでなくその後も毎月花が届く特別な体験をプレゼントできます。「物」ではなく「体験」を贈りたい方に人気が高まっています。",
    recommend: "AND PLANTS（おしゃれで特別感あり）またはbloomeeのギフトチケット（相手が好みを選べる）",
    budget: "3か月〜6か月分で6,000円〜12,000円が目安",
  },
  {
    name: "結婚祝い",
    timing: "結婚報告後、新居への引越し後",
    description: "新生活を彩る花の定期便は結婚祝いにぴったりです。新居のインテリアに合わせた花が届くため、新生活のスタートを華やかに演出できます。カタログギフトと並ぶ新しい選択肢として注目されています。",
    recommend: "AND PLANTS（インテリア映えするアレンジ）または日本総合園芸（ボリューム感ある花束）",
    budget: "3か月〜6か月分で6,000円〜20,000円が目安",
  },
  {
    name: "退職祝い",
    timing: "退職日前後",
    description: "退職後の新生活を応援する気持ちを込めて、花の定期便を贈る方が増えています。退職後は自宅で過ごす時間が増えるため、定期的に届く花が生活に彩りを添えます。法人からの贈り物としても、個人的なプレゼントとしても適しています。",
    recommend: "日本総合園芸（手渡し配達で法人利用に対応）またはbloomeeのギフトチケット（個人間で気軽に）",
    budget: "3か月〜6か月分で6,000円〜15,000円が目安",
  },
];

/* ─── Main Component ─── */
export default function PresentGuidePage() {
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
                  <span className="text-[#333] font-medium">花の定期便をプレゼントに贈ろう</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花の定期便ギフトガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花の定期便をプレゼントに贈ろう<br className="hidden md:block" />
              母の日・誕生日におすすめのギフト対応サービス
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクはプレゼントとしても人気が高まっています。
              この記事では、ギフト対応している花の定期便サービスの比較、贈り方の手順、シーン別のおすすめをまとめました。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">ギフト対応</p>
                <p className="text-xl font-bold text-[#4A7C59]">3サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">住所不要で贈れる</p>
                <p className="text-xl font-bold text-[#4A7C59]">bloomee</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">ギフト予算</p>
                <p className="text-xl font-bold text-[#4A7C59]">3,000円〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">人気のシーン</p>
                <p className="text-xl font-bold text-[#4A7C59]">母の日・誕生日</p>
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
                  <li><a href="#intro" className="hover:text-[#4A7C59] transition-colors">1. 花の定期便がプレゼントに選ばれる理由</a></li>
                  <li><a href="#comparison-table" className="hover:text-[#4A7C59] transition-colors">2. ギフト対応サービス比較表</a></li>
                  <li><a href="#service-detail" className="hover:text-[#4A7C59] transition-colors">3. おすすめギフト対応サービスの詳細</a></li>
                  <li><a href="#occasions" className="hover:text-[#4A7C59] transition-colors">4. シーン別おすすめ（母の日・誕生日・結婚祝い・退職祝い）</a></li>
                  <li><a href="#how-to-gift" className="hover:text-[#4A7C59] transition-colors">5. 花の定期便をプレゼントする手順</a></li>
                  <li><a href="#tips" className="hover:text-[#4A7C59] transition-colors">6. ギフトで失敗しないためのポイント</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">7. 花の定期便ギフトに関するよくある質問</a></li>
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
              花の定期便がプレゼントに選ばれる理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花の定期便（花のサブスク）をプレゼントに選ぶ方が増えています。
              一度きりの花束と違い、毎月届く花のサブスクは「長く楽しめる体験」を贈れるのが最大の魅力です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              特に母の日のギフトとして注目されており、遠方に住むお母さんへ毎月花を届けられる手段として人気が高まっています。
              誕生日や結婚祝い、退職祝いなど、さまざまなお祝いシーンにも対応できる汎用性の高いギフトです。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#E8F0EB] rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-[#4A7C59] mb-2">毎月届く</p>
                <p className="text-sm text-[#666]">一度きりでなく、数か月にわたって花が届く「体験」のギフト</p>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-[#4A7C59] mb-2">手間いらず</p>
                <p className="text-sm text-[#666]">申し込むだけで自動配送。花屋に行く手間も不要</p>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5 text-center">
                <p className="text-2xl font-bold text-[#4A7C59] mb-2">遠方でもOK</p>
                <p className="text-sm text-[#666]">離れて暮らす相手にも全国配送で届けられる</p>
              </div>
            </div>

            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6 border border-[#E5E5E5]">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">この記事のポイント</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ ギフト対応している花の定期便サービス3社を比較</li>
                <li>・ 母の日・誕生日・結婚祝い・退職祝いなどシーン別のおすすめ</li>
                <li>・ 花の定期便を実際にプレゼントする手順を解説</li>
                <li>・ ギフトで失敗しないための注意点も紹介</li>
                <li>・ 2026年4月時点の情報に基づく</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="comparison-table" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ギフト対応サービス比較表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花の定期便をプレゼントとして贈れる3つのサービスを、ギフト対応の仕組み・料金・特徴で比較しました。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm" style={{ minWidth: "700px" }}>
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-left font-medium">ギフト方式</th>
                    <th className="px-4 py-3 text-right font-medium">料金（1回）</th>
                    <th className="px-4 py-3 text-right font-medium">送料</th>
                    <th className="px-4 py-3 text-center font-medium">住所不要</th>
                    <th className="px-4 py-3 text-center font-medium">メッセージ</th>
                  </tr>
                </thead>
                <tbody>
                  {giftServices.map((item, i) => (
                    <tr key={i} className={`border-t border-[#E5E5E5] ${i === 0 ? "bg-[#FFFBEB]" : ""}`}>
                      <td className="px-4 py-4">
                        <a href={item.url} className="font-bold text-[#4A7C59] hover:underline">
                          {item.name}
                        </a>
                        <p className="text-xs text-[#999]">{item.nameJa}</p>
                      </td>
                      <td className="px-4 py-4 text-[#666]">{item.giftType}</td>
                      <td className="px-4 py-4 text-right text-[#333]">{item.price}</td>
                      <td className="px-4 py-4 text-right">
                        {item.shipping === "無料" ? (
                          <span className="text-[#4A7C59] font-medium">無料</span>
                        ) : (
                          <span className="text-[#666]">{item.shipping}</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {item.addressRequired === "不要（相手が入力）" ? (
                          <span className="inline-block bg-[#4A7C59] text-white text-xs px-2 py-0.5 rounded">不要</span>
                        ) : (
                          <span className="text-xs text-[#999]">必要</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-xs text-[#666]">{item.messageCard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-white rounded-xl border border-[#E5E5E5] p-5">
              <h3 className="text-sm font-bold text-[#333] mb-3">表の補足</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ bloomeeのギフトチケットは公式サイトから購入可能です</li>
                <li>・ AND PLANTSは注文時に届け先を相手の住所に設定することでギフト利用できます</li>
                <li>・ 日本総合園芸の送料は地域によって異なります</li>
                <li>・ 表示価格はすべて税込です</li>
                <li>・ 2026年4月時点の情報です。最新情報は各公式サイトでご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Service Detail ─── */}
        <section id="service-detail" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              おすすめギフト対応サービスの詳細
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              ギフトとして花の定期便を贈る際におすすめの3サービスを、ギフト対応の仕組み・料金・おすすめシーンとともに詳しく解説します。
            </p>

            <div className="space-y-8">
              {giftServices.map((item) => (
                <div key={item.rank} className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] overflow-hidden">
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
                        {item.name}（{item.nameJa}）
                      </h3>
                      <p className="text-sm text-[#666]">{item.highlight}</p>
                    </div>
                  </div>

                  {/* Service Detail */}
                  <div className="p-5">
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">ギフト方式</p>
                        <p className="text-sm font-bold text-[#333]">{item.giftType}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">料金（1回）</p>
                        <p className="text-sm font-bold text-[#4A7C59]">{item.price}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">送料</p>
                        <p className="text-sm font-bold text-[#333]">
                          {item.shipping === "無料" ? (
                            <span className="text-[#4A7C59]">無料</span>
                          ) : (
                            item.shipping
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5 text-sm">
                      <div className="flex">
                        <span className="text-[#999] w-32 shrink-0">ギフトプラン</span>
                        <span className="text-[#333]">{item.giftPlan}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-32 shrink-0">相手の住所</span>
                        <span className="text-[#333]">{item.addressRequired}</span>
                      </div>
                      <div className="flex">
                        <span className="text-[#999] w-32 shrink-0">メッセージ</span>
                        <span className="text-[#333]">{item.messageCard}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#666] leading-relaxed mb-5">
                      {item.detail}
                    </p>

                    {/* Best For */}
                    <div className="bg-[#E8F0EB] rounded-lg p-4 mb-5">
                      <p className="text-sm">
                        <span className="font-bold text-[#4A7C59]">こんなギフトシーンにおすすめ：</span>
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

        {/* ─── Occasions ─── */}
        <section id="occasions" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              シーン別おすすめ：母の日・誕生日・結婚祝い・退職祝い
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花の定期便をプレゼントする際、贈るシーンに合わせてサービスを選ぶと、より喜ばれるギフトになります。
              代表的な4つのシーンごとに、おすすめのサービスと予算の目安をまとめました。
            </p>

            <div className="space-y-6">
              {occasions.map((occasion, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                  <div className="bg-[#E8F0EB] px-5 py-3 border-b border-[#C5D9CB]">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-[#333]">{occasion.name}</h3>
                      <span className="text-xs text-[#4A7C59] font-medium">{occasion.timing}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[#666] leading-relaxed mb-4">
                      {occasion.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-[#F8F8F8] rounded-lg p-3">
                        <p className="text-xs text-[#999] mb-1">おすすめサービス</p>
                        <p className="text-sm text-[#333] font-medium">{occasion.recommend}</p>
                      </div>
                      <div className="bg-[#F8F8F8] rounded-lg p-3">
                        <p className="text-xs text-[#999] mb-1">予算の目安</p>
                        <p className="text-sm text-[#333] font-medium">{occasion.budget}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How to Gift ─── */}
        <section id="how-to-gift" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花の定期便をプレゼントする手順
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花の定期便をギフトとして贈る方法は、サービスによって異なります。
              ここでは代表的な2つの方法を、具体的な手順とともに解説します。
            </p>

            {/* Method 1: Gift Ticket */}
            <div className="mb-8">
              <h3 className="text-base md:text-lg font-bold text-[#333] mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4A7C59] text-white text-xs font-bold">A</span>
                ギフトチケット方式（bloomee）
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">1</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">bloomee公式サイトでギフトチケットを購入</p>
                    <p className="text-sm text-[#666]">プラン（体験/レギュラー/リッチ）と期間（3か月/6か月/12か月）を選び、支払いを完了します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">2</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">デジタルチケット（URL）を受け取る</p>
                    <p className="text-sm text-[#666]">購入完了後、ギフトチケットのURLが発行されます。メッセージを添えることも可能です。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">3</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">LINEやメールで相手にチケットを送る</p>
                    <p className="text-sm text-[#666]">チケットのURLをLINE、メール、SNSなど好きな方法で相手に共有します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">4</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">相手が届け先・配送頻度を設定</p>
                    <p className="text-sm text-[#666]">受け取った相手がURLから自分の住所や配送頻度を設定すると、花が届き始めます。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 2: Direct Delivery */}
            <div className="mb-8">
              <h3 className="text-base md:text-lg font-bold text-[#333] mb-4 flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4A7C59] text-white text-xs font-bold">B</span>
                届け先指定方式（AND PLANTS / 日本総合園芸）
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">1</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">公式サイトでプランを選んで申し込む</p>
                    <p className="text-sm text-[#666]">AND PLANTSまたは日本総合園芸の公式サイトから、贈りたいプランと配送頻度を選択します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">2</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">届け先に相手の住所を入力</p>
                    <p className="text-sm text-[#666]">注文フォームの届け先欄に、自分の住所ではなく相手の住所を入力します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F0EB] text-[#4A7C59] text-sm font-bold">3</span>
                  </div>
                  <div className="flex-1 bg-[#F8F8F8] rounded-xl p-4 border border-[#E5E5E5]">
                    <p className="text-sm font-bold text-[#333] mb-1">支払い完了後、花が相手に届く</p>
                    <p className="text-sm text-[#666]">支払いは贈り主のクレジットカード等で行い、花は相手の住所に届きます。贈りたい期間が終わったら解約します。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E8F0EB] rounded-xl p-5">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-2">どちらの方式を選ぶべき？</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                相手の住所を知らない場合や、相手に届くタイミングや頻度を自分で選んでもらいたい場合は、bloomeeのギフトチケット方式が便利です。
                一方、花のテイストやボリュームにこだわりたい場合や、確実に届く日を自分でコントロールしたい場合は、AND PLANTSや日本総合園芸の届け先指定方式がおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Tips ─── */}
        <section id="tips" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ギフトで失敗しないためのポイント
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花の定期便をプレゼントする際に、事前に確認しておくべきポイントをまとめました。
              贈った後に「こうすればよかった」とならないために、以下の点を押さえておきましょう。
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">相手の生活スタイルを考慮する</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  不在がちな方にはポスト投函対応のサービス（bloomee）が向いています。在宅時間が確保できる方なら宅配便（AND PLANTS、日本総合園芸）でも問題ありません。
                  また、花の手入れに慣れていない方には、本数が少なめで管理しやすいプランから始めるのがおすすめです。
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">配送頻度と期間を慎重に決める</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  毎週届くと花の管理が大変になる場合があります。初めてのギフトなら隔週または月1回がおすすめです。
                  期間も最初は3か月程度から始め、相手が気に入ったら延長するのが無難です。長期間のギフトは負担に感じる方もいるため、相手の反応を見ながら調整しましょう。
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">花のアレルギーやペットの有無を確認する</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花粉アレルギーをお持ちの方には配慮が必要です。また、猫を飼っている家庭ではユリ科の花が危険なため注意が必要です。
                  事前にアレルギーやペットの有無を確認しておくと安心です。気になる場合は、花の種類を選べるサービスや、届いた花の品種が事前にわかるサービスを選びましょう。
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">事前に一言伝えておく</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  完全なサプライズも素敵ですが、届け先指定方式の場合は突然花が届いて相手が困惑する可能性もあります。
                  「花の定期便を贈るから届くよ」と事前に伝えておくと、相手も受け取りの準備ができて安心です。ギフトチケット方式なら、チケットを渡す際に説明できるためスムーズです。
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-2">解約のタイミングを把握しておく</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  届け先指定方式でギフトを贈る場合、贈りたい期間が終わった後に解約を忘れないようにしましょう。
                  bloomeeのギフトチケットは購入時に期間が確定するため、自動的に終了します。AND PLANTSや日本総合園芸は贈り主が自分で解約手続きを行う必要があります。
                  カレンダーにリマインダーを設定しておくと安心です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花の定期便ギフトに関するよくある質問
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
              まとめ：花の定期便で「届き続ける」プレゼントを
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花の定期便は、一度きりの花束では実現できない「毎月届く喜び」を贈れるギフトです。
              母の日、誕生日、結婚祝い、退職祝いなど、さまざまなシーンで活用できます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              相手の住所を知らなくても贈れるbloomeeのギフトチケットは、手軽さで選ぶなら最有力です。
              おしゃれなブーケにこだわるならAND PLANTS、ボリューム感と手渡し対応を求めるなら日本総合園芸がおすすめです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              贈るシーンや相手の生活スタイルに合わせてサービスを選び、花を通じて気持ちを届けましょう。
              まずは気になるサービスの公式サイトでギフト対応の詳細を確認してみてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/bloomee"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                1位 bloomeeの詳細を見る
              </a>
              <a
                href="/services/and-plants"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                2位 AND PLANTSの詳細を見る
              </a>
              <a
                href="/services/nihon-sogo-engei"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                3位 日本総合園芸の詳細を見る
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
