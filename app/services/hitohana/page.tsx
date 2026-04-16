"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "HitoHanaの花の定期便は色を選べますか？",
    a: "はい、HitoHanaでは7色（ホワイト&グリーン、レッド、イエロー&オレンジ、ピンク、パープル、ブラウン、ブルー）から好きな色を選べます。また「おまかせ」も選択可能で、季節に合わせた旬の色合いの花が届きます。色は注文後もマイページから変更できます。",
  },
  {
    q: "HitoHanaの最低利用回数はありますか？",
    a: "HitoHanaの花の定期便には最低3回の受け取りが必要です。3回受け取り後は、マイページからいつでも解約が可能です。初回で合わなかった場合でも3回は継続する必要があるため、まずは小さめのプラン（Liteプラン1,320円）から始めるのがおすすめです。",
  },
  {
    q: "HitoHanaの花はポスト投函で届きますか？",
    a: "HitoHanaの花の定期便はポスト投函には対応しておらず、すべて宅配便（手渡し）での配送となります。配送日の時間帯指定が可能なので、在宅時に受け取れるよう設定できます。不在の場合は再配達の手続きが必要です。ポスト投函希望の方はbloomeeやmedeluの利用をおすすめします。",
  },
  {
    q: "HitoHanaの品質保証はどのような内容ですか？",
    a: "HitoHanaでは、届いた花に問題（萎れ、折れ、虫食い等）があった場合、写真を添付してカスタマーサポートに連絡すると、無料で新しい花を再送してもらえます。品質保証の申請期限はお届けから3日以内です。配送時の品質管理も徹底しており、花の状態には定評があります。",
  },
  {
    q: "HitoHanaの花の定期便とフラワーギフトは違いますか？",
    a: "はい、HitoHanaでは「花の定期便（サブスクリプション）」と「フラワーギフト（1回限りの注文）」の両方を提供しています。定期便は毎週・2週間に1回・月1回の定期配送で、ギフトは花束・アレンジメント・観葉植物などを1回だけ注文するサービスです。定期便からギフトへの切り替えや、ギフトの一時的な追加注文も可能です。",
  },
  {
    q: "HitoHanaは法人でも利用できますか？",
    a: "はい、HitoHanaは法人向けサービスにも力を入れています。オフィスの受付やエントランスに飾る定期的なフラワーアレンジメントや、取引先への贈答用フラワーギフトなど、ビジネスシーンでの利用も可能です。法人プランの場合は請求書払いにも対応しています。詳しくはHitoHana公式サイトの法人ページをご確認ください。",
  },
  {
    q: "HitoHanaで届く花の種類は選べますか？",
    a: "花の色味は7色から選べますが、具体的な花の種類（バラ、ガーベラなど）を個別に指定することはできません。選んだ色のテーマに合わせて、プロのフローリストが旬の花をセレクトしてアレンジします。どんな花が届くかは届いてからのお楽しみです。ただし、フラワーギフト（1回注文）の場合は花の種類を指定して注文できます。",
  },
];

/* ─── Pricing Data ─── */
const pricingPlans = [
  { name: "Lite", price: "1,320円", volume: "花 4〜6本", description: "ちょっとした彩りを添えたい方に" },
  { name: "S", price: "1,980円", volume: "花 4〜9本", description: "テーブルや棚に飾るのにちょうど良いボリューム" },
  { name: "M", price: "2,640円", volume: "花 7〜11本", description: "リビングや寝室をしっかり華やかに" },
  { name: "L", price: "3,850円", volume: "花 10〜15本", description: "存在感のある豪華なアレンジメント" },
  { name: "LL", price: "4,950円", volume: "花 13〜20本", description: "圧巻のボリューム。来客のあるお部屋にも" },
];

/* ─── Main Component ─── */
export default function HitoHanaPage() {
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
                  <span className="text-[#666]">サービス一覧</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">HitoHana（ひとはな）</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F9E8E8] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク個別レビュー
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              HitoHana（ひとはな）の口コミ・評判を<br className="hidden md:block" />
              徹底調査【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              好きな色とボリュームを自分で選べる花の定期便「HitoHana（ひとはな）」。
              1回1,320円から始められるサービスの実力を、料金・メリット・デメリット・口コミから詳しく検証します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">選べる色</p>
                <p className="text-xl font-bold text-[#4A7C59]">7色</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">プラン数</p>
                <p className="text-xl font-bold text-[#4A7C59]">5種類</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">最安プラン</p>
                <p className="text-xl font-bold text-[#4A7C59]">1,320円/回〜</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">品質保証</p>
                <p className="text-xl font-bold text-[#4A7C59]">あり</p>
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
                  <li><a href="#overview" className="hover:text-[#4A7C59] transition-colors">1. HitoHanaとは？サービス概要</a></li>
                  <li><a href="#features" className="hover:text-[#4A7C59] transition-colors">2. 花の定期便の特徴</a></li>
                  <li><a href="#pricing" className="hover:text-[#4A7C59] transition-colors">3. 料金プラン一覧</a></li>
                  <li><a href="#pros" className="hover:text-[#4A7C59] transition-colors">4. HitoHanaのメリット</a></li>
                  <li><a href="#cons" className="hover:text-[#4A7C59] transition-colors">5. HitoHanaのデメリット</a></li>
                  <li><a href="#how-to-start" className="hover:text-[#4A7C59] transition-colors">6. 利用の流れ（5ステップ）</a></li>
                  <li><a href="#recommend" className="hover:text-[#4A7C59] transition-colors">7. こんな方におすすめ</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">8. よくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">9. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Service Overview ─── */}
        <section id="overview" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHana（ひとはな）とは？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              HitoHana（ひとはな）は、株式会社Beer and Techが運営する花と植物の総合ECサイトです。花束・アレンジメント・観葉植物・胡蝶蘭などのフラワーギフトに加えて、2020年から花の定期便（サブスクリプション）サービスも開始しました。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              HitoHanaの最大の特徴は「自分で色とボリュームを選べる」こと。一般的な花のサブスクでは届く花はおまかせですが、HitoHanaでは7色から好みの色味を、5段階のボリュームから好みの花束サイズを選択できます。インテリアのテイストや部屋の雰囲気に合わせた花選びができるのが他サービスにはない強みです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4">
              運営会社のBeer and Techは、花き業界のDXに取り組むスタートアップ企業で、テクノロジーを活用した新しい花の買い方を提案しています。花の産地や品種に関する情報も充実しており、花を選ぶ楽しさも提供しているサービスです。
            </p>
            <div className="bg-[#F8F8F8] rounded-xl p-5 mt-6">
              <h3 className="text-sm font-bold text-[#333] mb-3">HitoHana 基本情報</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="text-[#999]">運営会社</div>
                <div className="text-[#333]">株式会社Beer and Tech</div>
                <div className="text-[#999]">サービス開始</div>
                <div className="text-[#333]">2014年（定期便は2020年〜）</div>
                <div className="text-[#999]">公式サイト</div>
                <div className="text-[#333]">
                  <a href="https://hitohana.tokyo/" target="_blank" rel="noopener noreferrer nofollow" className="text-[#4A7C59] hover:underline">
                    hitohana.tokyo
                  </a>
                </div>
                <div className="text-[#999]">サービス内容</div>
                <div className="text-[#333]">花の定期便、フラワーギフト、観葉植物</div>
                <div className="text-[#999]">配送エリア</div>
                <div className="text-[#333]">日本全国（離島を除く）</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Features ─── */}
        <section id="features" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHana 花の定期便の特徴
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              HitoHanaの花の定期便にはどのような特徴があるのでしょうか。他サービスとの違いを含めて、5つのポイントを解説します。
            </p>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "好きな色を7色から選べる",
                  text: "ホワイト&グリーン、レッド、イエロー&オレンジ、ピンク、パープル、ブラウン、ブルーの7色から好みの色味を選択できます。「おまかせ」も選べるので、季節に合わせた旬の花を楽しみたい方にも対応。色はマイページからいつでも変更可能です。インテリアの雰囲気に合わせて色を選べるのはHitoHanaならではの魅力です。",
                },
                {
                  num: "2",
                  title: "5段階のボリュームから選べる",
                  text: "Lite（4〜6本）、S（4〜9本）、M（7〜11本）、L（10〜15本）、LL（13〜20本）の5段階から、飾りたい場所や予算に合わせてボリュームを選択できます。少量でテーブルに飾りたい方から、リビングを豪華に彩りたい方まで幅広く対応しています。",
                },
                {
                  num: "3",
                  title: "1回1,320円〜の明瞭な料金体系",
                  text: "最もリーズナブルなLiteプランは1回1,320円（税込）。プランごとに価格が固定されているため、毎月の支出が明確です。ただし別途送料がかかる点には注意が必要です。送料は配送先エリアによって異なります。",
                },
                {
                  num: "4",
                  title: "お届け頻度は3パターン",
                  text: "毎週・2週間に1回・月1回の3つの配送頻度から選べます。忙しい方は月1回から、常に花のある暮らしを楽しみたい方は毎週と、ライフスタイルに合わせた選択が可能です。頻度はマイページからいつでも変更でき、スキップ機能で一時的に配送を止めることもできます。",
                },
                {
                  num: "5",
                  title: "品質保証制度あり",
                  text: "届いた花に問題があった場合は、写真を添付してカスタマーサポートに連絡すると、無料で新しい花を再送してもらえます。配送時の品質管理にも力を入れており、専用のボックスで花が傷みにくい状態で届きます。安心して利用できる体制が整っています。",
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

        {/* ─── Pricing ─── */}
        <section id="pricing" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHana 料金プラン一覧
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              HitoHanaの花の定期便は5つのプランから選べます。すべて税込価格です。別途、配送先エリアに応じた送料がかかります。
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">プラン</th>
                    <th className="px-4 py-3 text-center font-medium">価格（税込）</th>
                    <th className="px-4 py-3 text-center font-medium">花の本数</th>
                    <th className="px-4 py-3 text-left font-medium">特徴</th>
                  </tr>
                </thead>
                <tbody className="text-[#666]">
                  {pricingPlans.map((plan, i) => (
                    <tr key={i} className={`border-b border-[#E5E5E5] ${i % 2 === 1 ? "bg-[#F8F8F8]" : ""}`}>
                      <td className="px-4 py-3 font-bold text-[#333]">{plan.name}</td>
                      <td className="px-4 py-3 text-center font-bold text-[#4A7C59]">{plan.price}</td>
                      <td className="px-4 py-3 text-center">{plan.volume}</td>
                      <td className="px-4 py-3">{plan.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#F8F8F8] rounded-xl p-5">
              <h3 className="text-sm font-bold text-[#333] mb-2">送料について</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                HitoHanaの花の定期便は、花代とは別に送料がかかります。送料は配送先の地域によって異なります。北海道・沖縄・離島は追加送料が発生する場合があります。最新の送料情報はHitoHana公式サイトでご確認ください。送料込みの総額で他サービスと比較する際は、この点に注意が必要です。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Pros ─── */}
        <section id="pros" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaのメリット（良い評判）
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "自分の好みの色を選べるのが嬉しい",
                  text: "他の花のサブスクでは届く花がすべておまかせのことが多いですが、HitoHanaでは7色から色を選択できます。部屋のインテリアに合わせて統一感のあるコーディネートが可能。「毎回ピンク系の花が欲しい」「モノトーンのインテリアにはホワイト&グリーンを」といった使い方ができます。",
                },
                {
                  title: "ボリュームを自分で調整できる",
                  text: "5段階のボリューム選択は、花のサブスクとしては珍しい特徴です。初めての方はLiteプランから小さく始めて、慣れてきたらMやLにステップアップという使い方も。飾る場所のサイズや予算に合わせて柔軟に選べるのは大きなメリットです。",
                },
                {
                  title: "品質保証があるので安心",
                  text: "万が一届いた花が傷んでいた場合も、写真を送れば無料で再送してもらえる品質保証があります。宅配便での配送のため、花が潰れたり折れたりするリスクが低く、ポスト投函サービスより状態の良い花が届きやすいのも利点です。",
                },
                {
                  title: "法人利用にも対応",
                  text: "HitoHanaはオフィスのエントランスや受付、会議室などへの定期的なフラワーアレンジメントにも対応しています。請求書払いが可能で、法人としても利用しやすい体制が整っています。福利厚生やオフィス環境の向上に花の定期便を導入する企業も増えています。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <h3 className="text-base font-bold text-[#4A7C59] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#E8F0EB] flex items-center justify-center text-xs">○</span>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Cons ─── */}
        <section id="cons" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaのデメリット（悪い評判）
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "ポスト投函に対応していない",
                  text: "HitoHanaの花の定期便はすべて宅配便（手渡し）での配送です。ポスト投函には対応していないため、配送時に在宅している必要があります。日中不在が多い方は配送日時の指定を活用するか、ポスト投函対応のbloomeeやmedeluを検討するとよいでしょう。",
                },
                {
                  title: "最低3回の受け取りが必要",
                  text: "HitoHanaの花の定期便には最低3回の受け取り義務があります。3回受け取る前に解約すると、残り回数分の花代が発生します。「1回だけ試してみたい」という方には向かないため、まずはLiteプラン（1,320円）で3回試してから継続を判断するのがおすすめです。",
                },
                {
                  title: "送料が別途かかる",
                  text: "花代は明瞭ですが、別途送料がかかります。送料は地域によって異なるため、送料込みの総額で比較すると他サービスより割高になる場合があります。送料無料のmedeluやAND PLANTSと比較する際は、総額ベースで検討しましょう。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <h3 className="text-base font-bold text-[#E0B8B8] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FDF5F5] flex items-center justify-center text-xs">x</span>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How to Start ─── */}
        <section id="how-to-start" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHana 花の定期便の始め方（5ステップ）
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "STEP 1",
                  title: "HitoHana公式サイトにアクセス",
                  text: "HitoHanaの公式サイト（hitohana.tokyo）にアクセスし、「花の定期便」のページを開きます。トップページのナビゲーションから「定期便」を選択するか、直接定期便ページにアクセスできます。",
                },
                {
                  step: "STEP 2",
                  title: "ボリューム（プラン）を選択",
                  text: "Lite / S / M / L / LL の5つのプランから、お好みのボリュームを選びます。初めての方はLiteプラン（1,320円、4〜6本）かSプラン（1,980円、4〜9本）から始めるのがおすすめです。",
                },
                {
                  step: "STEP 3",
                  title: "色と配送頻度を選択",
                  text: "7色（ホワイト&グリーン、レッド、イエロー&オレンジ、ピンク、パープル、ブラウン、ブルー）または「おまかせ」から好みの色を選びます。配送頻度は毎週・2週間に1回・月1回から選択します。",
                },
                {
                  step: "STEP 4",
                  title: "お届け先情報・支払い方法を登録",
                  text: "氏名、住所、電話番号などのお届け先情報と、クレジットカード情報を登録します。配送日時の指定も可能です。在宅時間に合わせて設定しましょう。",
                },
                {
                  step: "STEP 5",
                  title: "申し込み完了 → 花が届くのを待つ",
                  text: "申し込み完了後、指定した日時に花が届きます。届いたら茎を水切りして花瓶に飾りましょう。品質に問題があれば3日以内にカスタマーサポートに連絡すれば、品質保証で対応してもらえます。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                  <div className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">
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

        {/* ─── Recommendation ─── */}
        <section id="recommend" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaはこんな方におすすめ
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {/* おすすめの人 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#4A7C59] mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#E8F0EB] flex items-center justify-center text-sm">
                    ○
                  </span>
                  おすすめの人
                </h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>花の色を自分で選びたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>インテリアに合わせた花を飾りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>ボリュームを自分で調整したい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>品質の良い花を宅配便で受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-1 shrink-0">--</span>
                    <span>法人でオフィスに花を飾りたい方</span>
                  </li>
                </ul>
              </div>

              {/* おすすめしない人 */}
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#E0B8B8] mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#FDF5F5] flex items-center justify-center text-sm">
                    x
                  </span>
                  おすすめしない人
                </h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>ポスト投函で受け取りたい方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>1回だけ試してみたい方（3回縛りあり）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>送料込みで最安のサービスを探している方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E0B8B8] mt-1 shrink-0">--</span>
                    <span>サプライズ感を楽しみたい方（色を選ぶため）</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              HitoHanaに関するよくある質問
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
                    <div className="px-5 py-4 bg-white border-t border-[#E5E5E5]">
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
              まとめ：HitoHanaは「色とボリュームを選びたい」方に最適
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              HitoHana（ひとはな）は、7色から好きな色を選べて、5段階のボリュームから好みのサイズを選択できる、カスタマイズ性の高い花の定期便サービスです。1回1,320円からと価格も手頃で、品質保証もあるため安心して利用できます。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              一方で、ポスト投函に対応していない点や、最低3回の受け取りが必要な点は事前に把握しておく必要があります。送料も別途かかるため、総額ベースで他サービスと比較することをおすすめします。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              「インテリアに合わせた色の花を飾りたい」「ボリュームを自分で決めたい」という方にはぴったりのサービスです。まずはLiteプランで気軽に試してみてはいかがでしょうか。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://hitohana.tokyo/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                HitoHana公式サイトはこちら
              </a>
              <a
                href="/"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                他のサービスと比較する
              </a>
            </div>
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
