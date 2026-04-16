"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクは月いくらかかりますか？",
    a: "サービスやプランによって異なりますが、最安で月528円（タスハナ・隔週）、一般的には月1,000〜3,000円程度です。送料が別途かかるサービス（bloomeeは385〜550円）もあれば、送料無料のサービス（medelu、AND PLANTS）もあるため、送料込みの総額で比較することをおすすめします。",
  },
  {
    q: "花のサブスクはどのくらい続ける人が多いですか？",
    a: "公式データによると、bloomeeの継続率は約80%以上、medeluも高い継続率を維持しています。3ヶ月以上続ける方が多く、一度生活に花がある暮らしに慣れるとやめられなくなるという声が多いです。まずは回数縛りなしのサービスで1〜2ヶ月試してみるのがおすすめです。",
  },
  {
    q: "一人暮らしでも花のサブスクは使えますか？",
    a: "一人暮らしの方にこそおすすめです。ポスト投函対応サービスなら不在時でも受け取れますし、少量のプランを選べば場所も取りません。部屋に花があるだけで空間の印象が明るくなり、帰宅時の気分も変わります。medelu ANYROOMコースやタスハナが一人暮らしに人気です。",
  },
  {
    q: "花のサブスクとお花屋さん、どちらがお得ですか？",
    a: "コスパ面ではサブスクの方がお得なケースが多いです。花屋のミニブーケは800〜1,500円程度ですが、サブスクは市場直送で中間マージンがカットされるため、同等の品質で安く手に入ります。一方、特定の花を指定して買いたい場合は花屋の方が自由度が高いです。",
  },
  {
    q: "花のアレルギーがある場合でも利用できますか？",
    a: "花粉アレルギーの方は注意が必要です。多くのサービスでは届く花の種類を事前に指定できないため、アレルギーの原因となる花が届く可能性があります。事前にカスタマーサポートに相談すると、特定の花を避けて配送してもらえるサービスもあります。花粉が少ない品種を中心に扱うサービスを選ぶのも一つの方法です。",
  },
];

/* ─── Main Component ─── */
export default function MeritDemeritGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>花のサブスクのメリット・デメリット7選｜始める前に知っておくべきこと</title>
      <meta name="description" content="花のサブスクのメリット7つとデメリット5つを徹底解説。お花の定期便を始める前に知っておくべきポイントや、おすすめ・おすすめしない人の特徴も紹介します。" />

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
                <li><span className="text-[#333] font-medium">メリット・デメリット</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              完全ガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスクのメリット・デメリット7選<br className="hidden md:block" />
              始める前に知っておくべきこと
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              お花の定期便（花のサブスク）を検討中の方に向けて、メリット7つとデメリット5つを徹底解説。
              自分に合うかどうか、始める前に確認しておきましょう。
            </p>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">この記事の内容</p>
              <ol className="text-sm text-[#666] space-y-2">
                <li><a href="#merits" className="hover:text-[#4A7C59] transition-colors">1. 花のサブスクのメリット7つ</a></li>
                <li><a href="#demerits" className="hover:text-[#4A7C59] transition-colors">2. 花のサブスクのデメリット5つ</a></li>
                <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">3. おすすめな人・おすすめしない人</a></li>
                <li><a href="#comparison" className="hover:text-[#4A7C59] transition-colors">4. 各サービスのメリデメ比較</a></li>
                <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">5. よくある質問</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ─── Merits ─── */}
        <section id="merits" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクのメリット7つ
            </h2>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "自分で選ぶ手間がなく、忙しくてもOK",
                  text: "花屋に行く時間がなくても、定期的にプロが選んだ旬の花が届きます。通勤途中に花屋に寄る余裕がない方や、近くに花屋がない方にとって大きなメリットです。注文の手間もなく、一度申し込めば自動的に届き続けるため、忙しい方ほど便利さを実感できます。",
                },
                {
                  num: "2",
                  title: "プロのフローリストによるおしゃれなアレンジ",
                  text: "花のサブスクでは、プロのフローリストが季節の花を組み合わせてアレンジしてくれます。自分では思いつかないような色の組み合わせや花の取り合わせを楽しめるのは、サブスクならではの魅力です。花の知識がなくても、そのまま花瓶に飾るだけでおしゃれなインテリアになります。",
                },
                {
                  num: "3",
                  title: "花屋で買うよりコスパが良い",
                  text: "サブスクは市場から直接仕入れることで中間マージンをカットしています。花屋でミニブーケを買うと1本あたり300〜500円ですが、medeluなら1本約233円、タスハナなら約176円と圧倒的にお得。さらに送料無料のサービスも多く、トータルコストで比較すると花屋より経済的です。",
                },
                {
                  num: "4",
                  title: "季節の移り変わりを花で感じられる",
                  text: "春はチューリップやスイートピー、夏はひまわり、秋はダリアやコスモス、冬はアネモネやラナンキュラス。毎回届く花が変わることで、部屋にいながら季節の移ろいを感じられます。花の名前や特徴を覚える楽しみも生まれ、暮らしに彩りが加わります。",
                },
                {
                  num: "5",
                  title: "癒し効果・ストレス軽減が科学的に実証済み",
                  text: "千葉大学の研究では、生花を部屋に飾ることでストレスホルモン（コルチゾール）が減少し、リラックス効果があることが実証されています。在宅勤務のデスクや寝室に花を飾ることで、仕事の疲れやストレスの軽減が期待できます。花の色や香りが心身に良い影響を与えるのは科学的に裏付けられた事実です。",
                },
                {
                  num: "6",
                  title: "部屋のインテリアがワンランクアップ",
                  text: "生花があるだけで部屋の雰囲気が一気に変わります。特別な飾り付けをしなくても、テーブルや窓辺に小さな花瓶を置くだけでおしゃれな空間に。来客時にも「お花がある生活をしているんだ」という好印象を与えます。インテリアに自信がない方でも、花があるだけで部屋が洗練された印象になります。",
                },
                {
                  num: "7",
                  title: "ギフトとしても喜ばれる",
                  text: "花のサブスクにはギフトチケットや贈り先指定が可能なサービスもあり、母の日や誕生日のプレゼントとして注目されています。一度きりの花束ではなく、数ヶ月にわたって定期的に花が届くため、長く楽しんでもらえる点が人気の理由です。bloomeeのギフトチケットやHitoHanaのギフト対応が特に人気です。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CE]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">{item.num}</span>
                    <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed pl-8">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Demerits ─── */}
        <section id="demerits" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#E0B8B8]">
              花のサブスクのデメリット5つ
            </h2>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "届く花の種類を自分で選べない",
                  text: "ほとんどのサービスでは、届く花の種類はプロのフローリストにお任せです。「バラだけがほしい」「白い花だけがいい」といった細かいリクエストには対応できません。ただし、HitoHanaでは色の指定が可能で、一部サービスではNG花材の指定ができるケースもあります。自分で完全に選びたい方には向いていません。",
                },
                {
                  num: "2",
                  title: "夏場は花が傷みやすい",
                  text: "生花は温度に敏感で、特に夏場（7〜8月）は輸送中やポスト内で花が傷むリスクが高まります。ポスト投函の場合、ポスト内温度が40度以上になることもあり、届いた時点でしおれているケースも。対策としてはクール便対応サービスを選ぶか、宅配便で直接受け取る方法があります。品質保証制度がある各サービスでは、傷んだ花の再送にも対応しています。",
                },
                {
                  num: "3",
                  title: "定期縛りがあるサービスがある",
                  text: "bloomeeには4回の最低受け取り回数があり、途中解約すると残り回数分の料金が発生します。「お試しで1回だけ」ということができないため、初めての方は注意が必要です。一方、medelu、AND PLANTS、タスハナ、LIFFTは回数縛りなしで、いつでも解約可能です。初めて試す場合は縛りなしのサービスから始めることをおすすめします。",
                },
                {
                  num: "4",
                  title: "不在時の受け取りに工夫が必要",
                  text: "ポスト投函対応サービスなら不在でも受け取れますが、宅配便タイプ（AND PLANTS、LIFFTなど）は在宅が必要です。不在が多い方は、ポスト投函対応サービスを選ぶか、配送日の時間指定ができるサービスを利用しましょう。また、置き配に対応しているサービスもあるので、事前に確認しておくと安心です。",
                },
                {
                  num: "5",
                  title: "花粉アレルギーのリスク",
                  text: "花粉アレルギーの方は、特にユリやカスミソウなど花粉が多い花が届いた場合にアレルギー症状が出る可能性があります。事前にカスタマーサポートに相談すれば、特定の花を避けて配送してもらえるサービスもありますが、完全な対応は難しいのが現状です。花粉が出にくい品種を中心に扱うサービスを選ぶか、届いた花から花粉を事前に取り除く対処が必要です。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0">{item.num}</span>
                    <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed pl-8">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Recommend / Not Recommend ─── */}
        <section id="recommend" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              こんな人におすすめ / おすすめしない人
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CE]">
                <h3 className="text-sm font-bold text-[#4A7C59] mb-3">おすすめな人</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>忙しくて花屋に行く時間がない方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>花の知識がなくてもおしゃれに飾りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>部屋のインテリアにアクセントがほしい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>季節の花との出会いを楽しみたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>日々のストレスを和らげたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0">&#10003;</span>
                    <span>コスパよく花のある暮らしを始めたい方</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFF5F5] rounded-xl p-5 border border-[#F0D8D8]">
                <h3 className="text-sm font-bold text-[#C4877A] mb-3">おすすめしない人</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>花の種類を自分で細かく選びたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>花のお手入れを全くしたくない方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>月500円でも固定費を増やしたくない方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>重度の花粉アレルギーがある方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-0.5 shrink-0">--</span>
                    <span>ペットが花を食べてしまうリスクがある方</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="comparison" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              各サービスのメリデメ比較表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              主要5サービスのメリット・デメリットを一覧で比較しました。自分が重視するポイントに合わせてサービスを選びましょう。
            </p>

            <div className="table-wrapper">
              <table className="comparison-table w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="rounded-tl-lg">サービス</th>
                    <th>主なメリット</th>
                    <th>主なデメリット</th>
                    <th className="rounded-tr-lg">こんな方に</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-[#333]">bloomee</td>
                    <td>知名度No.1、初心者向け、ポスト投函</td>
                    <td>4回縛り、送料別、最安は3本</td>
                    <td>手軽に始めたい初心者</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">medelu</td>
                    <td>送料無料、698円〜、縛りなし</td>
                    <td>花の本数が少なめ、知名度が低い</td>
                    <td>コスパ重視の方</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">AND PLANTS</td>
                    <td>送料無料、おしゃれ、ボリューム多い</td>
                    <td>最安1,980円とやや高め、宅配便のみ</td>
                    <td>デザイン重視の方</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">タスハナ</td>
                    <td>528円〜最安級、サステナブル、縛りなし</td>
                    <td>送料別330円、本数少なめ</td>
                    <td>とにかく安く試したい方</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">LIFFT</td>
                    <td>市場直送で鮮度抜群、Journal付き</td>
                    <td>3,300円とやや高め、月1回</td>
                    <td>品質にこだわる方</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクに関するよくある質問
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
        <section id="summary" className="py-12 md:py-16 bg-[#F3EDE6]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：メリットを最大化する選び方がカギ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクには「手間なくプロのアレンジが届く」「コスパが良い」「癒し効果がある」など多くのメリットがあります。一方で、「花の種類が選べない」「夏場の品質リスク」「定期縛り」などのデメリットも存在します。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              大切なのは、自分のライフスタイルや重視するポイントに合ったサービスを選ぶこと。コスパ重視なら<strong>medelu</strong>、手軽さなら<strong>bloomee</strong>、デザイン重視なら<strong>AND PLANTS</strong>、品質重視なら<strong>LIFFT</strong>がおすすめです。まずは回数縛りなしのサービスから気軽に試してみましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                おすすめサービスを比較する
              </a>
              <a
                href="/guides/beginner"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                初心者ガイドを読む
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
