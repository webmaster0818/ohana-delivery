"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクを母の日ギフトとして贈ることはできますか？",
    a: "はい、多くのサービスでギフト対応が可能です。bloomeeではギフトチケットを購入して贈ることができ、受け取った方が好きなタイミングで花の定期便を始められます。HitoHanaではメッセージカード付きで届け先を指定でき、AND PLANTSもギフト対応に力を入れています。",
  },
  {
    q: "母の日ギフトにおすすめの予算はいくらですか？",
    a: "花のサブスクのギフトとしては、3,000〜5,000円が最も人気の価格帯です。bloomeeのギフトチケットなら金額を選べますし、HitoHanaなら1回あたり2,000〜5,000円のプランが選べます。1回分だけでなく、3ヶ月分をまとめてギフトにするとより喜ばれます。",
  },
  {
    q: "母の日に届くように日付指定できますか？",
    a: "サービスによって対応が異なります。HitoHanaでは配送日の日付指定が可能で、母の日当日に届けることができます。bloomeeのギフトチケットは受け取った方が自分で開始日を設定するため、日付指定ではなくチケット自体を母の日に渡す形になります。AND PLANTSも配送日の相談が可能です。",
  },
  {
    q: "遠方の母に贈ることはできますか？",
    a: "はい、花のサブスクは配送先を指定できるため、離れて暮らすお母さんにも届けられます。日本全国対応（一部離島を除く）のサービスがほとんどですので、遠方でも問題ありません。事前にお届け先の住所を確認しておきましょう。",
  },
  {
    q: "母がお花のサブスクを気に入らなかった場合、解約できますか？",
    a: "回数縛りのないサービス（medelu、AND PLANTS、HitoHanaなど）なら、いつでも解約可能です。bloomeeは4回の最低受け取り回数がありますが、ギフトチケットの場合はチケット分の回数のみで自動更新はされません。ギフトとして贈る場合は、回数が限定されているプランやチケットを選ぶと、お母さんが気軽に試せます。",
  },
];

/* ─── Main Component ─── */
export default function MothersDayGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>花のサブスクを母の日にプレゼント｜おすすめギフト3選【2026年】</title>
      <meta name="description" content="花のサブスクを母の日ギフトに贈る方法を徹底解説。おすすめサービス3選や予算別の選び方、注意点を紹介。毎月届くお花のプレゼントで、お母さんに長く楽しんでもらえます。" />

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
                <li><span className="text-[#333] font-medium">母の日ギフト</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F9E8E8] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#C4877A] font-medium mb-3 tracking-wide">
              母の日ギフトガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスクを母の日にプレゼント<br className="hidden md:block" />
              おすすめギフト3選【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              2026年の母の日は5月10日（日）。今年は一度きりの花束ではなく、
              毎月届く「花のサブスク」をプレゼントしてみませんか？
              長く楽しめるギフトとして注目の花の定期便、おすすめ3選をご紹介します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">2026年の母の日</p>
                <p className="text-xl font-bold text-[#C4877A]">5月10日（日）</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">ギフト予算</p>
                <p className="text-xl font-bold text-[#C4877A]">3,000円〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">おすすめ</p>
                <p className="text-xl font-bold text-[#C4877A]">厳選3サービス</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">この記事の内容</p>
              <ol className="text-sm text-[#666] space-y-2">
                <li><a href="#why-subscription" className="hover:text-[#4A7C59] transition-colors">1. 花のサブスクが母の日ギフトに最適な理由</a></li>
                <li><a href="#recommend-3" className="hover:text-[#4A7C59] transition-colors">2. おすすめサービス3選</a></li>
                <li><a href="#budget" className="hover:text-[#4A7C59] transition-colors">3. 予算別おすすめ</a></li>
                <li><a href="#cautions" className="hover:text-[#4A7C59] transition-colors">4. 贈る際の注意点</a></li>
                <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">5. よくある質問</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ─── Why Subscription for Mother's Day ─── */}
        <section id="why-subscription" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#C4877A]">
              花のサブスクが母の日ギフトに最適な理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              母の日にカーネーションの花束を贈るのは定番ですが、花束は1〜2週間で枯れてしまいます。花のサブスクなら毎月新しい花が届くため、「ありがとう」の気持ちを長く届け続けることができます。
            </p>

            <div className="space-y-4">
              <div className="bg-[#FFF5F5] rounded-xl p-5 border border-[#F0D8D8]">
                <h3 className="text-sm font-bold text-[#333] mb-2">毎回届くサプライズ感</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花のサブスクは、毎回届く花の種類が異なります。「今月はどんな花が届くかな？」というワクワク感が、母の日の一度きりのプレゼントにはない魅力です。季節の花が届くたびに、お子さんからの贈り物であることを思い出してもらえます。
                </p>
              </div>
              <div className="bg-[#FFF5F5] rounded-xl p-5 border border-[#F0D8D8]">
                <h3 className="text-sm font-bold text-[#333] mb-2">数ヶ月にわたって楽しめる</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  3ヶ月分のギフトなら、母の日の5月から7月まで花が届き続けます。花束が1〜2週間で終わるのに対し、サブスクギフトは長期間にわたって「花のある暮らし」を楽しんでもらえます。6ヶ月や1年分のギフトならさらに長く喜んでもらえるでしょう。
                </p>
              </div>
              <div className="bg-[#FFF5F5] rounded-xl p-5 border border-[#F0D8D8]">
                <h3 className="text-sm font-bold text-[#333] mb-2">手間いらずで受け取れる</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  ポスト投函対応のサービスなら、お母さんが不在でも受け取れます。重い花瓶付きのフラワーアレンジメントと違い、コンパクトなパッケージで届くため、受け取りの負担もありません。届いたら水切りをして花瓶に飾るだけの簡単さも魅力です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Recommended 3 Services ─── */}
        <section id="recommend-3" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#C4877A]">
              母の日ギフトにおすすめの花のサブスク3選
            </h2>

            <div className="space-y-6">
              {/* bloomee */}
              <div className="bg-white rounded-xl p-5 md:p-6 border-2 border-[#C4877A]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#C4877A] text-white text-xs font-bold rounded-lg px-2.5 py-1">おすすめ1</span>
                  <h3 className="text-base font-bold text-[#333]">bloomee（ブルーミー）のギフトチケット</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  bloomeeでは母の日にぴったりな「花の定期便ギフトチケット」を販売しています。チケットを購入してお母さんに贈ると、お母さん自身が好きなタイミングで花の定期便を開始できます。金額も選べるため、予算に合わせたギフトが可能です。
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">ギフト形式</p>
                    <p className="text-sm font-bold text-[#333]">ギフトチケット</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">金額</p>
                    <p className="text-sm font-bold text-[#4A7C59]">選択可能</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">受け取り</p>
                    <p className="text-sm font-bold text-[#333]">ポスト投函</p>
                  </div>
                </div>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">ポイント：相手が好きなタイミングで始められるため、「もう花のサブスクを利用している」「いつ届くかわからないと困る」という方にも安心して贈れます。</p>
                </div>
              </div>

              {/* AND PLANTS */}
              <div className="bg-white rounded-xl p-5 md:p-6 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1">おすすめ2</span>
                  <h3 className="text-base font-bold text-[#333]">AND PLANTS（アンドプランツ）</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  AND PLANTSはプロのフローリストによるおしゃれなアレンジが特徴。ボリュームのある花束が送料無料で届きます。ギフト対応にも力を入れており、届け先を指定することで直接お母さんの元にお届けできます。見栄えが良く、花好きなお母さんへのプレゼントに最適です。
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">ギフト形式</p>
                    <p className="text-sm font-bold text-[#333]">届け先指定</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">料金</p>
                    <p className="text-sm font-bold text-[#4A7C59]">1,980円/回〜</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">花の本数</p>
                    <p className="text-sm font-bold text-[#333]">4〜6本</p>
                  </div>
                </div>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">ポイント：ボリュームがあっておしゃれなアレンジが届くため、「見栄えのするプレゼントを贈りたい」という方におすすめ。送料無料・回数縛りなしも嬉しいポイントです。</p>
                </div>
              </div>

              {/* HitoHana */}
              <div className="bg-white rounded-xl p-5 md:p-6 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1">おすすめ3</span>
                  <h3 className="text-base font-bold text-[#333]">HitoHana（ひとはな）</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  HitoHanaは花の色やスタイルを自分で選べるのが最大の特徴です。「お母さんはピンクが好きだから」「和風のアレンジが合いそう」といった細かいリクエストに対応可能。メッセージカード付きで届けられるため、感謝の気持ちを花と一緒に届けられます。ボリュームも豪華で、ギフトにふさわしい華やかさがあります。
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">ギフト対応</p>
                    <p className="text-sm font-bold text-[#333]">メッセージカード付</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">料金</p>
                    <p className="text-sm font-bold text-[#4A7C59]">1,320円/回〜</p>
                  </div>
                  <div className="text-center bg-[#F8F8F8] rounded-lg p-3">
                    <p className="text-xs text-[#999]">特徴</p>
                    <p className="text-sm font-bold text-[#333]">色指定OK</p>
                  </div>
                </div>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">ポイント：花の色やボリュームを選べるため、お母さんの好みに合わせたギフトが可能。メッセージカードに手書きの感謝を添えられるのも嬉しいポイントです。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Budget Guide ─── */}
        <section id="budget" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#C4877A]">
              予算別おすすめプラン
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              母の日ギフトの予算に合わせて、最適なプランを選びましょう。花のサブスクは1回分だけでなく、複数回分をまとめてギフトにすることもできます。
            </p>

            <div className="space-y-4">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">3,000円以下のギフト</h3>
                <p className="text-sm text-[#666] leading-relaxed mb-2">
                  気軽に贈りたい方向け。bloomeeのギフトチケット（体験プラン2回分：約2,770円）がおすすめ。お試し感覚で花のある暮らしを体験してもらえます。
                </p>
                <div className="bg-white rounded-lg p-3 border border-[#E5E5E5]">
                  <p className="text-xs text-[#4A7C59] font-medium">おすすめ：bloomee ギフトチケット（体験プラン2回分）</p>
                </div>
              </div>

              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">3,000〜5,000円のギフト</h3>
                <p className="text-sm text-[#666] leading-relaxed mb-2">
                  最も人気の価格帯です。AND PLANTSの1〜2回分（1,980〜3,960円）や、HitoHanaの2回分が選べます。ボリュームのある華やかなアレンジが届くため、お母さんの満足度も高いです。
                </p>
                <div className="bg-white rounded-lg p-3 border border-[#E5E5E5]">
                  <p className="text-xs text-[#4A7C59] font-medium">おすすめ：AND PLANTS 2回分 または HitoHana 2回分（色指定付き）</p>
                </div>
              </div>

              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">5,000円以上のギフト</h3>
                <p className="text-sm text-[#666] leading-relaxed mb-2">
                  しっかり感謝を伝えたい方向け。HitoHanaの上位プラン3回分や、bloomeeのレギュラープラン3回分（約7,695円）がおすすめ。3ヶ月にわたって花が届くため、母の日以降もずっと喜んでもらえます。LIFFTの花束プラン（3,300円）2〜3回分もプレミアム感があります。
                </p>
                <div className="bg-white rounded-lg p-3 border border-[#E5E5E5]">
                  <p className="text-xs text-[#4A7C59] font-medium">おすすめ：HitoHana 上位プラン3回分 または LIFFT 花束プラン2回分</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Cautions ─── */}
        <section id="cautions" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#C4877A]">
              花のサブスクを母の日に贈る際の注意点
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: "注意 1",
                  title: "届け先の住所を事前に確認",
                  text: "花の定期便は配送先の住所を登録する必要があります。サプライズで贈りたい場合でも、正確な住所を事前に確認しておきましょう。特にマンション名・部屋番号の記載漏れは配送トラブルの原因になります。",
                },
                {
                  step: "注意 2",
                  title: "花粉アレルギーの有無を確認",
                  text: "お母さんに花粉アレルギーがある場合は注意が必要です。多くのサービスでは届く花の種類を指定できないため、アレルギーのある花が届く可能性があります。事前にカスタマーサポートに相談するか、HitoHanaのように花の種類をある程度選べるサービスを利用しましょう。",
                },
                {
                  step: "注意 3",
                  title: "受け取り方法の確認（ポスト投函 vs 宅配便）",
                  text: "お母さんが日中不在がちな場合は、ポスト投函対応サービス（bloomee、medeluなど）がおすすめです。宅配便タイプ（AND PLANTS、HitoHana、LIFFT）の場合は、在宅している曜日や時間帯を確認しておきましょう。置き配に対応しているサービスもあります。",
                },
                {
                  step: "注意 4",
                  title: "自動更新の有無を確認",
                  text: "ギフトとして贈る場合、サブスクの自動更新に注意しましょう。bloomeeのギフトチケットなら指定回数分で終了しますが、通常の定期便を代理で申し込む場合は、お母さん自身で解約手続きが必要になる場合があります。解約方法もあわせて伝えておくと親切です。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                  <div className="bg-[#C4877A] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">
                    {item.step}
                  </div>
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
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#C4877A]">
              母の日の花のサブスクに関するよくある質問
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#F8F8F8] hover:bg-[#FFF0F0] transition-colors text-left"
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
        <section id="summary" className="py-12 md:py-16 bg-[#F9E8E8]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：花のサブスクで母の日に「続く」感謝を届けよう
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              母の日の花のプレゼントは定番ですが、花のサブスクを贈ることで<strong>毎月届くサプライズ</strong>という新しい体験をプレゼントできます。一度きりの花束ではなく、数ヶ月にわたって花が届く喜びを、お母さんに味わってもらいましょう。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              気軽に贈るなら<strong>bloomeeのギフトチケット</strong>、見栄え重視なら<strong>AND PLANTS</strong>、お母さんの好みに合わせたいなら<strong>HitoHana</strong>がおすすめです。2026年の母の日は5月10日。早めに準備して、素敵なギフトをお届けしましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/bloomee"
                className="inline-block bg-[#C4877A] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#B07068] transition-colors shadow-md"
              >
                bloomeeの詳細を見る
              </a>
              <a
                href="/services/and-plants"
                className="inline-block bg-white text-[#C4877A] font-bold text-base px-8 py-4 rounded-full border-2 border-[#C4877A] hover:bg-[#FFF5F5] transition-colors"
              >
                AND PLANTSの詳細を見る
              </a>
              <a
                href="/services/hitohana"
                className="inline-block bg-white text-[#C4877A] font-bold text-base px-8 py-4 rounded-full border-2 border-[#C4877A] hover:bg-[#FFF5F5] transition-colors"
              >
                HitoHanaの詳細を見る
              </a>
            </div>
            <a
              href="/"
              className="inline-block mt-4 text-sm text-[#666] hover:text-[#C4877A] transition-colors underline"
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
              <a href="/" className="hover:text-white transition-colors">トップページ</a>
              <a href="/#comparison" className="hover:text-white transition-colors">比較表</a>
              <a href="/#reviews" className="hover:text-white transition-colors">サービス詳細</a>
              <a href="/#faq" className="hover:text-white transition-colors">よくある質問</a>
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
