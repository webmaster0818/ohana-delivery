"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── SEO Metadata (exported from layout or head) ─── */
// Note: metadata export is not available in "use client" components.
// Use a separate layout.tsx or head.tsx for metadata, or apply via <title> tag.

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクは本当にしょぼいのですか？",
    a: "「しょぼい」と感じるかどうかはプラン選びに大きく左右されます。最安プラン（500〜1,000円前後）では花が3本程度と少なめですが、2,000円以上のプランでは5〜8本のボリュームあるアレンジが届きます。また、サービスによって品質に差があるため、口コミや品質保証制度の有無を事前に確認することが重要です。",
  },
  {
    q: "届いた花がすぐ枯れてしまいます。対処法はありますか？",
    a: "届いたらすぐに水切り（水中で茎を斜めにカット）を行い、切り花延命剤を入れた新鮮な水に飾りましょう。夏場はこまめな水替え（毎日が理想）が必須です。また、直射日光やエアコンの風が直接当たる場所を避けることで花持ちが大幅に改善します。クール便対応のサービスを選ぶのも効果的です。",
  },
  {
    q: "しょぼくないおすすめのサービスはどれですか？",
    a: "ボリューム重視ならAND PLANTS（4〜6本、送料無料）、コスパ重視ならmedelu（698円〜、送料無料）、鮮度重視ならLIFFT（市場直送、3,300円）がおすすめです。いずれも品質保証制度があり、万が一の際も安心です。",
  },
  {
    q: "品質保証制度とは何ですか？",
    a: "届いた花が傷んでいた場合に、無料で再送または返金してもらえる制度です。bloomee、medelu、AND PLANTSなど主要サービスの多くが導入しています。申請は写真を撮ってマイページやLINEから行うのが一般的で、期限はお届け日から2〜3日以内が多いです。",
  },
  {
    q: "花のサブスクをやめた人が多いのはなぜですか？",
    a: "主な理由は「期待とのギャップ」「花のお手入れが面倒」「コスパへの不満」の3つです。特に最安プランで始めた方が本数の少なさに物足りなさを感じるケースが多いです。事前にプラン内容を確認し、お手入れ方法も理解した上で始めると継続率が高まります。",
  },
];

/* ─── Main Component ─── */
export default function ShoboboiGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* ─── Head (SEO) ─── */}
      <title>花のサブスクはしょぼい？ひどい？実際に届く花の実態を検証【2026年】</title>
      <meta name="description" content="花のサブスクが「しょぼい」「ひどい」と言われる理由を徹底検証。実際に届くお花の品質や本数、サービスごとの違いを解説し、失敗しない選び方をご紹介します。" />

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
                  <span className="text-[#666]">ガイド</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">花のサブスクはしょぼい？</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              実態検証ガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスクはしょぼい？ひどい？<br className="hidden md:block" />
              実際に届く花の実態を検証【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              「花のサブスク しょぼい」「お花の定期便 ひどい」で検索するあなたへ。
              ネガティブな口コミの真相と、本当に満足できるサービスの選び方を解説します。
            </p>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">この記事の内容</p>
              <ol className="text-sm text-[#666] space-y-2">
                <li><a href="#why-shoboi" className="hover:text-[#4A7C59] transition-colors">1. 「しょぼい」と言われる3つの理由</a></li>
                <li><a href="#complaints" className="hover:text-[#4A7C59] transition-colors">2. よくある不満とその原因</a></li>
                <li><a href="#good-value" className="hover:text-[#4A7C59] transition-colors">3. 実はコスパが良いプランはこれ</a></li>
                <li><a href="#avoid-disappointment" className="hover:text-[#4A7C59] transition-colors">4. がっかりしないための選び方</a></li>
                <li><a href="#tips" className="hover:text-[#4A7C59] transition-colors">5. 満足度を上げる5つのコツ</a></li>
                <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">6. よくある質問</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ─── Why "しょぼい" ─── */}
        <section id="why-shoboi" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              「しょぼい」と言われる3つの理由
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花のサブスクを「しょぼい」「ひどい」と感じる方には、共通するパターンがあります。多くの場合、サービス自体の品質ではなく、<strong>期待値とのギャップ</strong>が原因です。
            </p>

            <div className="space-y-4">
              <div className="bg-[#FFF8F0] rounded-xl p-5 border border-[#F0E0D0]">
                <h3 className="text-sm font-bold text-[#333] mb-2">理由1：花屋の花束をイメージしていた</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花屋で2,000〜3,000円の花束を買うと、かなりのボリュームがあります。しかし、花のサブスクの最安プラン（500〜1,000円）で届くのは3〜4本程度。花屋の花束と同じボリュームを期待すると「しょぼい」と感じてしまいます。ポスト投函対応のサービスは箱のサイズに制限があるため、本数が限られるのは構造的な制約です。
                </p>
              </div>
              <div className="bg-[#FFF8F0] rounded-xl p-5 border border-[#F0E0D0]">
                <h3 className="text-sm font-bold text-[#333] mb-2">理由2：SNSの「映え写真」との差</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  InstagramやXで見る花のサブスクの写真は、上位プランのものやプロが撮影した写真であることが多いです。最安プランで届く花と比較すると当然ギャップが生まれます。また、写真映えする花瓶やテーブルコーディネートも印象に影響しています。実際に届く花の雰囲気を知りたい場合は、一般ユーザーの投稿を参考にしましょう。
                </p>
              </div>
              <div className="bg-[#FFF8F0] rounded-xl p-5 border border-[#F0E0D0]">
                <h3 className="text-sm font-bold text-[#333] mb-2">理由3：季節や時期による品質の差</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  花は生き物です。特に夏場（7〜8月）は輸送中の温度上昇で花が傷みやすく、「届いた時点でしおれていた」という不満が増える時期です。逆に春（3〜5月）や秋（9〜11月）は花の種類が豊富で品質も安定します。季節によって届く花の印象が大きく変わることを理解しておくと、がっかりを防げます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Common Complaints ─── */}
        <section id="complaints" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              よくある不満とその実際の原因
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-lg px-2.5 py-1">不満1</span>
                  <h3 className="text-sm font-bold text-[#333]">「花が少ない・しょぼい」</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  <strong>原因：</strong>最安プランを選んでいるケースがほとんどです。体験プラン（980円前後）は3本程度で、あくまで「お試し」の位置づけ。満足度を上げるには1,500円以上のプランを選ぶことで花の本数とバリエーションが格段に向上します。
                </p>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">解決策：medelu BASIC（1,240円/回・5本）やAND PLANTS（1,980円/回・4〜6本）など中価格帯のプランがおすすめ。送料無料なので総額でもお得です。</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-lg px-2.5 py-1">不満2</span>
                  <h3 className="text-sm font-bold text-[#333]">「届いた花がすぐ枯れる」</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  <strong>原因：</strong>輸送中の環境（特に夏場の高温）と、届いた後のお手入れ不足が主な原因です。ポスト投函の場合、ポスト内の温度が40度以上になることもあり、花にダメージを与えます。
                </p>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">解決策：夏場はクール便対応のサービス（LIFFTなど）を選ぶか、在宅時に受け取れる宅配便プランを選択。届いたらすぐに水切りをして延命剤入りの水に飾りましょう。</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#E0B8B8] text-white text-xs font-bold rounded-lg px-2.5 py-1">不満3</span>
                  <h3 className="text-sm font-bold text-[#333]">「花の種類が選べない」</h3>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  <strong>原因：</strong>花のサブスクの多くは「プロが旬の花をセレクト」するスタイルです。自分で花を選べないことがデメリットに感じる方もいますが、実はこれは「自分では買わない花に出会える」というメリットでもあります。
                </p>
                <div className="bg-[#E8F0EB] rounded-lg p-3">
                  <p className="text-xs text-[#4A7C59] font-medium">解決策：色やスタイルを選びたい方にはHitoHana（色指定可能）がおすすめ。完全に自由に選びたい場合は、花屋のオンラインショップでの都度購入が向いています。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Good Value Plans ─── */}
        <section id="good-value" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              実はコスパが良いプランはこれ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              「しょぼい」と感じさせない、本数・品質・価格のバランスが取れたプランを厳選しました。1本あたりの単価で比較すると、サブスクならではのお得感がわかります。
            </p>

            <div className="table-wrapper">
              <table className="comparison-table w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="rounded-tl-lg">サービス</th>
                    <th>プラン/料金</th>
                    <th>本数</th>
                    <th>送料</th>
                    <th className="rounded-tr-lg">1本あたり</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-[#333]">タスハナ</td>
                    <td>+act 528円/回</td>
                    <td>3本</td>
                    <td>330円</td>
                    <td className="font-bold text-[#4A7C59]">約286円</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">medelu</td>
                    <td>ANYROOM 698円/回</td>
                    <td>3本</td>
                    <td>無料</td>
                    <td className="font-bold text-[#4A7C59]">約233円</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">medelu</td>
                    <td>BASIC 1,240円/回</td>
                    <td>5本</td>
                    <td>無料</td>
                    <td className="font-bold text-[#4A7C59]">約248円</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">AND PLANTS</td>
                    <td>1,980円/回</td>
                    <td>4〜6本</td>
                    <td>無料</td>
                    <td className="font-bold text-[#4A7C59]">約330〜495円</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#333]">LIFFT</td>
                    <td>花束プラン 3,300円/回</td>
                    <td>6〜8本</td>
                    <td>無料</td>
                    <td className="font-bold text-[#4A7C59]">約413〜550円</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
              <h3 className="text-sm font-bold text-[#333] mb-2">花屋で買うといくら？</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                一般的な花屋でミニブーケを購入すると、3〜5本で800〜1,500円程度。1本あたり300〜500円が相場です。サブスクは市場から直接仕入れることで中間マージンをカットし、花屋の店頭価格よりもお得に提供されています。特にmedeluやタスハナは1本200円台と、花屋で買うより30〜50%安い計算になります。
              </p>
            </div>
          </div>
        </section>

        {/* ─── Avoid Disappointment ─── */}
        <section id="avoid-disappointment" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              がっかりしないための正しい選び方
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花のサブスクで失敗しないためには、自分のニーズに合ったサービスとプランを選ぶことが最も重要です。以下のポイントを押さえて選びましょう。
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "ポイント 1",
                  title: "予算は「送料込み」で考える",
                  text: "月額料金だけでなく送料も含めた「1回あたりの総額」で比較しましょう。bloomeeの体験プランは980円ですが送料385円を加えると1,365円。一方、medeluは698円で送料無料なので総額698円です。送料込みで比較すると実質的なコスパがわかります。",
                },
                {
                  step: "ポイント 2",
                  title: "受け取り方法を生活スタイルに合わせる",
                  text: "日中不在が多い方はポスト投函対応サービス（bloomee、medelu、タスハナなど）が便利です。ただし夏場はポスト内の高温で花が傷むリスクがあります。品質を優先するなら宅配便（AND PLANTS、LIFFT）や時間指定可能なサービスを選びましょう。",
                },
                {
                  step: "ポイント 3",
                  title: "品質保証制度の有無を確認する",
                  text: "万が一届いた花が傷んでいた場合の保証があるサービスを選ぶと安心です。bloomee、medelu、AND PLANTSなど主要サービスは品質保証を導入しています。保証がないサービスは、価格が安くても万が一の際にリスクがあります。",
                },
                {
                  step: "ポイント 4",
                  title: "回数縛りの有無をチェック",
                  text: "bloomeeには4回の最低受け取り回数がありますが、medelu、AND PLANTS、タスハナ、LIFFTは回数縛りなしでいつでも解約可能です。初めて試す場合は縛りなしのサービスから始めるのがおすすめです。",
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

        {/* ─── Tips ─── */}
        <section id="tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              満足度を上げる5つのコツ
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: "コツ 1",
                  title: "品質保証制度を遠慮なく活用する",
                  text: "届いた花が傷んでいた場合、遠慮せずに品質保証を申請しましょう。写真を撮ってマイページやLINEから送るだけで、再送または返金の対応を受けられます。サービス側も品質改善のフィードバックとして活用しているため、申請することはサービス向上にもつながります。",
                },
                {
                  step: "コツ 2",
                  title: "季節ごとの花の違いを楽しむ",
                  text: "春はチューリップやラナンキュラス、夏はひまわりやトルコキキョウ、秋はダリアやコスモス、冬はアネモネやスイートピー。季節によって届く花の種類や色合いが変わるのは、サブスクならではの楽しみです。「今月はどんな花かな？」というワクワク感を大切にしましょう。",
                },
                {
                  step: "コツ 3",
                  title: "花瓶にこだわると印象が変わる",
                  text: "同じ花でも、花瓶によって見栄えが大きく変わります。100均やIKEAなどで手に入る小さめの花瓶を2〜3個用意して、花を分けて飾ると少ない本数でも華やかになります。背の高い花瓶より、口が小さめのコンパクトな花瓶が少ない本数のアレンジに向いています。",
                },
                {
                  step: "コツ 4",
                  title: "プランのアップグレードを検討する",
                  text: "最安プランで「しょぼい」と感じたら、1つ上のプランを試してみてください。数百円の差でも花の本数やバリエーションが大幅に増えます。例えばbloomeeなら体験プラン（980円）からレギュラープラン（2,180円）に上げると、花の本数が3本→4本以上に増え、花材の品質やバリエーションも向上します。",
                },
                {
                  step: "コツ 5",
                  title: "複数サービスを試して比較する",
                  text: "回数縛りなしのサービス（medelu、タスハナ、LIFFTなど）を順番に試して、自分の好みに合うサービスを見つけるのがおすすめです。同じ価格帯でもサービスによって花のテイストやアレンジスタイルが異なるため、実際に試さないとわからない違いがあります。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
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

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクに関するよくある質問
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
        <section id="summary" className="py-12 md:py-16 bg-[#F3EDE6]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：正しく選べば花のサブスクは「しょぼく」ない
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクが「しょぼい」と感じる主な原因は、<strong>プラン選びのミスマッチ</strong>です。最安プランはあくまでお試し用であり、満足度を求めるなら1,500円以上のプランを選ぶことで花のボリュームと品質が大幅にアップします。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              コスパ重視なら<strong>medelu</strong>（698円〜・送料無料）、ボリュームとデザイン重視なら<strong>AND PLANTS</strong>（1,980円〜・送料無料）、鮮度と質を追求するなら<strong>LIFFT</strong>（3,300円・市場直送）がおすすめです。品質保証制度を活用し、季節の花を楽しむ心構えがあれば、花のサブスクはきっと日々の暮らしを豊かにしてくれるでしょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/services/medelu"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                medeluの詳細を見る
              </a>
              <a
                href="/services/and-plants"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                AND PLANTSの詳細を見る
              </a>
              <a
                href="/services/lifft"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                LIFFTの詳細を見る
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
