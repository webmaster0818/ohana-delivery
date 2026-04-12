"use client";

import { useState } from "react";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクは途中で解約できますか？",
    a: "ほとんどのサービスは途中解約が可能です。ただしbloomeeのように最低受取回数（4回）が設定されているサービスでは、4回受け取る前に解約すると残り回数分の料金が発生します。medelu、hanameku、日本総合園芸は回数縛りがないため、いつでも解約できます。AND PLANTSは都度払い方式のため、次回配送前にスキップまたは停止すれば追加料金はかかりません。",
  },
  {
    q: "bloomeeの解約方法を教えてください。",
    a: "bloomeeはマイページから解約手続きが可能です。ログイン後、マイページの「プラン・登録情報の確認/変更」から「解約する」を選択します。ただし、4回の最低受取回数を満たしていない場合は解約できず、残り回数分の料金が発生します。解約ではなく「お届けをストップ」（休止）を選ぶことも可能で、休止中は料金が発生しません。解約と休止の違いを理解したうえで手続きしましょう。",
  },
  {
    q: "解約と休止の違いは何ですか？",
    a: "解約はサービスの利用を完全にやめることで、アカウント情報やクーポンなどが失われる場合があります。休止は一時的にお届けを止めることで、アカウントや設定はそのまま保持されます。再開したくなったときに休止のほうがスムーズに戻れます。迷っている段階であれば、まず休止を選ぶのがおすすめです。bloomeeやmedeluには休止機能があります。",
  },
  {
    q: "解約後に届いた花はどうなりますか？",
    a: "解約手続きのタイミングによっては、既に手配済みの花が届くことがあります。多くのサービスでは「次回お届け日の○日前まで」に解約する必要があり、この期限を過ぎると次回分が届き、料金が発生します。解約を検討している場合は、次回お届け日を確認し、余裕を持って手続きしましょう。",
  },
  {
    q: "解約したら違約金はかかりますか？",
    a: "今回紹介した5サービスにおいて、違約金が発生するのはbloomeeのみです。bloomeeは4回の最低受取回数があり、4回未満で解約すると残り回数分の花代＋送料が請求されます。それ以外のmedelu、AND PLANTS、hanameku、日本総合園芸には違約金はありません。",
  },
  {
    q: "花のサブスクを解約する人の主な理由は何ですか？",
    a: "よくある解約理由としては「花が好みに合わなかった」「コストが気になるようになった」「花のお手入れが負担になった」「引っ越しや生活環境の変化」「届く頻度が多すぎた」などがあります。配送頻度の変更やプラン変更で解決できる場合もあるため、解約前にサービスの設定を見直すのがおすすめです。",
  },
  {
    q: "一度解約しても再開できますか？",
    a: "はい、ほとんどのサービスで再開が可能です。ただし、解約した場合は新規登録と同じ手続きが必要になることがあります。休止であれば、マイページから簡単にお届けを再開できるサービスが多いです。bloomee、medelu、hanamekuはいずれも再開に対応しています。以前のアカウント情報を使えるかどうかはサービスによって異なるため、公式サイトで確認してください。",
  },
  {
    q: "解約前にやっておくべきことはありますか？",
    a: "まず次回お届け日と解約期限を確認しましょう。次に、ポイントやクーポンが残っている場合は使い切ることをおすすめします。また、解約ではなく休止やスキップで対応できないかも検討してください。配送頻度の変更やプランのダウングレードで不満が解消される場合もあります。解約理由を明確にしたうえで、本当に解約が必要かどうかを判断しましょう。",
  },
];

/* ─── Cancellation Data ─── */
const cancellationData = [
  {
    name: "bloomee",
    nameJa: "ブルーミー",
    minOrders: "4回",
    method: "マイページ",
    penalty: "あり（4回未満で残額請求）",
    pauseOption: "あり（お届けストップ）",
    deadline: "次回お届け日の前週金曜日まで",
    difficulty: "やや注意が必要",
    url: "/services/bloomee",
    officialUrl: "https://bloomee.jp",
    steps: [
      "bloomee公式サイトにログイン",
      "マイページを開く",
      "「プラン・登録情報の確認/変更」を選択",
      "ページ下部の「解約する」をクリック",
      "解約理由を選択して確認画面へ進む",
      "内容を確認し「解約する」ボタンを押す",
    ],
    notes: [
      "4回受け取るまで解約できません。4回未満で手続きすると残り回数分の料金が発生します。",
      "「解約」と「お届けストップ（休止）」は別の機能です。一時的にやめたい場合は休止を選びましょう。",
      "休止中は料金が発生しません。再開も簡単にできます。",
      "解約期限は次回お届け日の前週金曜日です。期限を過ぎると次回分が届きます。",
      "解約するとアカウント情報やクーポンが失われる場合があります。",
    ],
  },
  {
    name: "medelu",
    nameJa: "メデル",
    minOrders: "なし",
    method: "マイページ",
    penalty: "なし",
    pauseOption: "あり（スキップ / 休止）",
    deadline: "次回お届け日の数日前まで",
    difficulty: "簡単",
    url: "/services/medelu",
    officialUrl: "https://www.medelu.flowers",
    steps: [
      "medelu公式サイトにログイン",
      "マイページを開く",
      "「定期便の設定」を選択",
      "「解約する」を選択",
      "解約理由を入力して確認画面へ進む",
      "内容を確認し解約を完了",
    ],
    notes: [
      "回数縛りがないため、いつでも解約できます。",
      "解約前にスキップ（次回1回分を飛ばす）や休止も検討しましょう。",
      "解約手続きは次回お届け日の数日前までに行う必要があります。",
      "手続きが完了すると確認メールが届きます。届かない場合はサポートに問い合わせましょう。",
    ],
  },
  {
    name: "AND PLANTS",
    nameJa: "アンドプランツ",
    minOrders: "なし",
    method: "マイページ（スキップ/停止）",
    penalty: "なし",
    pauseOption: "あり（スキップ / 停止）",
    deadline: "次回お届け日の5日前まで",
    difficulty: "簡単",
    url: "/services/and-plants",
    officialUrl: "https://andplants.jp",
    steps: [
      "AND PLANTS公式サイトにログイン",
      "マイページを開く",
      "「お届けスケジュール」を確認",
      "次回配送をスキップ、または定期便を停止",
      "停止を選択して確認画面へ進む",
      "内容を確認して停止を完了",
    ],
    notes: [
      "都度払い方式のため、厳密には「解約」ではなく「停止」です。",
      "次回配送前にスキップすれば、その回の料金は発生しません。",
      "停止後も再開は簡単にできます。",
      "次回お届け日の5日前までに手続きが必要です。",
    ],
  },
  {
    name: "hanameku",
    nameJa: "ハナメク",
    minOrders: "なし",
    method: "マイページ",
    penalty: "なし",
    pauseOption: "あり（スキップ）",
    deadline: "次回お届け日の数日前まで",
    difficulty: "簡単",
    url: "/services/hanameku",
    officialUrl: "https://hanameku.jp",
    steps: [
      "hanameku公式サイトにログイン",
      "マイページを開く",
      "「定期便の管理」を選択",
      "「解約する」を選択",
      "解約理由を入力して確認画面へ進む",
      "内容を確認し解約を完了",
    ],
    notes: [
      "回数縛りがないため、いつでも解約できます。",
      "解約前にスキップ機能の利用も検討しましょう。",
      "解約手続きは次回お届け日の数日前までに行う必要があります。",
      "手続き完了後、確認メールが届きます。",
    ],
  },
  {
    name: "日本総合園芸",
    nameJa: "にほんそうごうえんげい",
    minOrders: "なし",
    method: "電話 / メール",
    penalty: "なし",
    pauseOption: "要相談",
    deadline: "次回お届け日の1週間前まで",
    difficulty: "やや手間がかかる",
    url: "/services/nihon-sogo-engei",
    officialUrl: "https://nihon-sogo-engei.co.jp",
    steps: [
      "日本総合園芸の公式サイトで連絡先を確認",
      "電話またはメールで解約の旨を連絡",
      "氏名・登録情報を伝える",
      "解約希望日を伝える",
      "解約完了の確認を受ける",
    ],
    notes: [
      "マイページからのオンライン解約には対応していません。電話またはメールでの連絡が必要です。",
      "回数縛りはないため、違約金は発生しません。",
      "次回お届け日の1週間前までに連絡するのが安心です。",
      "営業時間内に連絡する必要があるため、事前に公式サイトで営業時間を確認しましょう。",
    ],
  },
];

/* ─── Main Component ─── */
export default function KaiyakuGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── Header ─── */}
      <header className="bg-white border-b border-[#E5E5E5] sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-lg md:text-xl font-bold text-[#4A7C59] hover:opacity-80 transition-opacity">
            お花の定期便ナビ
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-[#666]">
            <a href="/#comparison" className="hover:text-[#4A7C59] transition-colors">
              比較表
            </a>
            <a href="/#reviews" className="hover:text-[#4A7C59] transition-colors">
              サービス詳細
            </a>
            <a href="/#how-to-choose" className="hover:text-[#4A7C59] transition-colors">
              選び方
            </a>
            <a href="/#faq" className="hover:text-[#4A7C59] transition-colors">
              よくある質問
            </a>
          </nav>
        </div>
      </header>

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
                  <span className="text-[#333] font-medium">花サブスク解約方法まとめ</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#E8F0EB] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク解約ガイド
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花サブスク解約方法まとめ｜<br className="hidden md:block" />
              各社の解約手順と注意点を徹底解説
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクをやめたいけど「解約方法がわからない」「違約金がかかるの？」と不安に思っていませんか。
              この記事では、人気5サービスの解約方法・手順・注意点をわかりやすくまとめました。
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">対象サービス</p>
                <p className="text-xl font-bold text-[#4A7C59]">5サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">回数縛りあり</p>
                <p className="text-xl font-bold text-[#4A7C59]">1サービスのみ</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">Web解約対応</p>
                <p className="text-xl font-bold text-[#4A7C59]">4サービス</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
                <p className="text-xs text-[#999] mb-1">違約金あり</p>
                <p className="text-xl font-bold text-[#4A7C59]">1サービスのみ</p>
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
                  <li><a href="#intro" className="hover:text-[#4A7C59] transition-colors">1. 花のサブスクを解約する前に確認すべきこと</a></li>
                  <li><a href="#comparison-table" className="hover:text-[#4A7C59] transition-colors">2. 解約条件の比較表（5サービス一覧）</a></li>
                  <li><a href="#step-by-step" className="hover:text-[#4A7C59] transition-colors">3. 各サービスの解約手順と注意点</a></li>
                  <li><a href="#reasons" className="hover:text-[#4A7C59] transition-colors">4. 花のサブスクをやめた理由（よくある解約理由）</a></li>
                  <li><a href="#tips" className="hover:text-[#4A7C59] transition-colors">5. 解約して後悔しないためのポイント</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">6. 花のサブスクの解約に関するよくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">7. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Introduction ─── */}
        <section id="intro" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクを解約する前に確認すべきこと
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              花のサブスクの解約を考えたとき、すぐに解約手続きに進む前にいくつか確認しておきたいポイントがあります。
              確認を怠ると、不要な料金が発生したり、後で後悔したりする可能性があります。
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">最低受取回数を満たしているか</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  bloomeeには4回の最低受取回数があります。4回受け取る前に解約すると、残り回数分の料金（花代＋送料）が請求されます。
                  まずは自分が何回受け取ったかを確認しましょう。他のサービス（medelu、AND PLANTS、hanameku、日本総合園芸）には回数縛りはありません。
                </p>
              </div>

              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">次回お届け日と解約期限を確認</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  多くのサービスでは、次回お届け日の数日前までに解約手続きを完了する必要があります。
                  期限を過ぎると次回分の料金が発生してしまうため、マイページで次回お届け日を確認し、余裕を持って手続きしましょう。
                </p>
              </div>

              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">解約ではなく「休止」や「スキップ」で解決できないか</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  一時的に花が不要な場合や、頻度を減らしたい場合は、解約ではなく休止やスキップで対応できることがあります。
                  休止ならアカウント情報が保持されるため、再開時の手続きが簡単です。完全にやめる決意が固まっていない場合は、まず休止を検討しましょう。
                </p>
              </div>

              <div className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-sm font-bold text-[#333] mb-2">ポイントやクーポンの残高を確認</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  解約するとポイントやクーポンが失効する場合があります。
                  残っているポイントやクーポンがあれば、解約前に使い切るのがおすすめです。
                </p>
              </div>
            </div>

            <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-3">この記事の対象サービス</h3>
              <ul className="text-sm text-[#666] space-y-2">
                <li>・ bloomee（ブルーミー）-- 4回受取後にマイページから解約</li>
                <li>・ medelu（メデル）-- 回数縛りなし、マイページからいつでも解約</li>
                <li>・ AND PLANTS（アンドプランツ）-- 都度払い、スキップ/停止で対応</li>
                <li>・ hanameku（ハナメク）-- 回数縛りなし、マイページから解約</li>
                <li>・ 日本総合園芸 -- 電話またはメールで解約</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="comparison-table" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              解約条件の比較表（5サービス一覧）
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              人気5サービスの解約条件を一覧で比較しました。回数縛り・解約方法・違約金・休止オプションの有無を確認できます。
            </p>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm" style={{ minWidth: "700px" }}>
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">サービス名</th>
                    <th className="px-4 py-3 text-center font-medium">回数縛り</th>
                    <th className="px-4 py-3 text-center font-medium">解約方法</th>
                    <th className="px-4 py-3 text-center font-medium">違約金</th>
                    <th className="px-4 py-3 text-center font-medium">休止機能</th>
                    <th className="px-4 py-3 text-center font-medium">解約難易度</th>
                  </tr>
                </thead>
                <tbody>
                  {cancellationData.map((item, i) => (
                    <tr key={i} className={`border-t border-[#E5E5E5] ${item.name === "bloomee" ? "bg-[#FDF5F5]" : ""}`}>
                      <td className="px-4 py-4">
                        <a href={item.url} className="font-bold text-[#4A7C59] hover:underline">
                          {item.name}
                        </a>
                        <p className="text-xs text-[#999]">{item.nameJa}</p>
                      </td>
                      <td className="px-4 py-4 text-center">
                        {item.minOrders === "なし" ? (
                          <span className="text-[#4A7C59] font-medium">なし</span>
                        ) : (
                          <span className="text-[#C53030] font-medium">{item.minOrders}</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-[#666]">{item.method}</td>
                      <td className="px-4 py-4 text-center">
                        {item.penalty === "なし" ? (
                          <span className="text-[#4A7C59] font-medium">なし</span>
                        ) : (
                          <span className="text-[#C53030] text-xs">{item.penalty}</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center text-[#666] text-xs">{item.pauseOption}</td>
                      <td className="px-4 py-4 text-center">
                        {item.difficulty === "簡単" ? (
                          <span className="bg-[#E8F0EB] text-[#4A7C59] text-xs font-medium px-2 py-1 rounded">{item.difficulty}</span>
                        ) : (
                          <span className="bg-[#FDF5F5] text-[#C53030] text-xs font-medium px-2 py-1 rounded">{item.difficulty}</span>
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
                <li>・ bloomeeのみ4回の最低受取回数があり、未達で解約すると残額が請求されます</li>
                <li>・ 日本総合園芸はオンライン解約に対応しておらず、電話またはメールでの連絡が必要です</li>
                <li>・ AND PLANTSは都度払い方式のため、「解約」ではなく「停止」という扱いになります</li>
                <li>・ 2026年4月時点の情報です。最新の解約条件は各公式サイトでご確認ください</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── Step-by-Step Guide ─── */}
        <section id="step-by-step" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              各サービスの解約手順と注意点
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              5サービスそれぞれの具体的な解約手順をステップごとに解説します。注意点もあわせて確認してください。
            </p>

            <div className="space-y-8">
              {cancellationData.map((item, idx) => (
                <div key={idx} className="bg-[#F8F8F8] rounded-xl border border-[#E5E5E5] overflow-hidden">
                  {/* Service Header */}
                  <div className={`px-5 py-4 flex items-center gap-3 ${
                    item.name === "bloomee"
                      ? "bg-[#FDF5F5] border-b border-[#F0D0D0]"
                      : "bg-[#E8F0EB] border-b border-[#C5D9CB]"
                  }`}>
                    <div>
                      <h3 className="text-lg font-bold text-[#333]">
                        {item.name}（{item.nameJa}）の解約方法
                      </h3>
                      <p className="text-sm text-[#666]">
                        解約方法：{item.method}　｜　回数縛り：{item.minOrders}　｜　難易度：{item.difficulty}
                      </p>
                    </div>
                  </div>

                  {/* Service Detail */}
                  <div className="p-5">
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">回数縛り</p>
                        <p className={`text-base font-bold ${item.minOrders === "なし" ? "text-[#4A7C59]" : "text-[#C53030]"}`}>
                          {item.minOrders}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">解約方法</p>
                        <p className="text-base font-bold text-[#333]">{item.method}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">違約金</p>
                        <p className={`text-base font-bold ${item.penalty === "なし" ? "text-[#4A7C59]" : "text-[#C53030]"}`}>
                          {item.penalty === "なし" ? "なし" : "あり"}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-3 text-center border border-[#E5E5E5]">
                        <p className="text-xs text-[#999] mb-1">休止機能</p>
                        <p className="text-base font-bold text-[#333]">
                          {item.pauseOption.startsWith("あり") ? "あり" : "要相談"}
                        </p>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="mb-5">
                      <h4 className="text-sm font-bold text-[#333] mb-3">解約手順</h4>
                      <ol className="space-y-2">
                        {item.steps.map((step, stepIdx) => (
                          <li key={stepIdx} className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#4A7C59] text-white text-xs font-bold shrink-0 mt-0.5">
                              {stepIdx + 1}
                            </span>
                            <span className="text-sm text-[#666] leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Notes */}
                    <div className={`rounded-lg p-4 mb-5 ${
                      item.name === "bloomee" ? "bg-[#FDF5F5] border border-[#F0D0D0]" : "bg-[#E8F0EB]"
                    }`}>
                      <h4 className={`text-sm font-bold mb-2 ${
                        item.name === "bloomee" ? "text-[#C53030]" : "text-[#4A7C59]"
                      }`}>
                        注意点
                      </h4>
                      <ul className="text-sm text-[#666] space-y-2">
                        {item.notes.map((note, noteIdx) => (
                          <li key={noteIdx}>・ {note}</li>
                        ))}
                      </ul>
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

        {/* ─── Reasons Section ─── */}
        <section id="reasons" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクをやめた理由（よくある解約理由）
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花のサブスクを解約した方がよく挙げる理由をまとめました。
              自分の状況に当てはまるかどうか確認し、解約以外の方法で解決できないかも検討してみましょう。
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由1
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">花が好みに合わなかった</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-2">
                      届く花の色合いや種類が自分の好みと合わないという声は少なくありません。
                      特にランダムアレンジのサービスでは、毎回好みの花が届くとは限りません。
                    </p>
                    <p className="text-sm text-[#4A7C59]">
                      対策：色の好みを登録できるサービス（medeluなど）に切り替える、またはプランを変更して選択肢を広げる。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由2
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">コストが気になるようになった</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-2">
                      最初は気にならなかった月々の費用が、続けるうちに負担に感じるケースがあります。
                      特に送料込みで月3,000円以上かかる場合、年間では36,000円以上になります。
                    </p>
                    <p className="text-sm text-[#4A7C59]">
                      対策：より安いプランにダウングレードする、配送頻度を隔週や月1回に変更する、送料無料のサービスに乗り換える。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由3
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">花のお手入れが負担になった</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-2">
                      水替えや切り戻し、枯れた花の処理など、花のお手入れが思ったより手間に感じるという声もあります。
                      特に忙しい時期には、お手入れが後回しになりがちです。
                    </p>
                    <p className="text-sm text-[#4A7C59]">
                      対策：配送頻度を減らす（月1回にする）、長持ちしやすい花を扱うサービスを選ぶ、延命剤を活用する。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由4
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">届く頻度が多すぎた</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-2">
                      毎週届くプランにしていたものの、前回の花がまだ元気なうちに次の花が届いてしまい、飾る場所や花瓶が足りなくなることがあります。
                    </p>
                    <p className="text-sm text-[#4A7C59]">
                      対策：隔週や月1回の配送に変更する、スキップ機能を活用する。解約の必要がないケースが多い。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由5
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">引っ越し・生活環境の変化</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-2">
                      引っ越しやライフスタイルの変化（出産、入院、長期出張など）で花を受け取れなくなるケースもあります。
                    </p>
                    <p className="text-sm text-[#4A7C59]">
                      対策：一時的な場合は解約ではなく休止やスキップで対応する。住所変更のみで解決する場合もある。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <div className="flex items-start gap-3">
                  <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                    理由6
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#333] mb-2">届いた花の鮮度に不満があった</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-2">
                      ポスト投函の場合、夏場や配送状況によって花がしおれて届くことがあります。
                      品質保証のあるサービスでは再送対応を受けられますが、それでも繰り返されると不満につながります。
                    </p>
                    <p className="text-sm text-[#4A7C59]">
                      対策：宅配便配送のサービス（AND PLANTSなど）に切り替える、品質保証を利用して再送を依頼する。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Tips to Avoid Regret ─── */}
        <section id="tips" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              解約して後悔しないためのポイント
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              解約してから「やっぱり続ければよかった」と後悔する方もいます。
              以下のポイントを確認してから解約手続きに進みましょう。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C5D9CB]">
                <h3 className="text-base font-bold text-[#333] mb-3">まず休止・スキップを試す</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  完全に解約する前に、1〜2か月の休止やスキップを試してみましょう。
                  花のない生活を体験して「やっぱり花があったほうがいい」と気づく方は少なくありません。
                  休止中は料金が発生しないため、リスクなく判断できます。
                </p>
              </div>

              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C5D9CB]">
                <h3 className="text-base font-bold text-[#333] mb-3">プラン変更で不満が解消しないか検討</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  料金が負担なら安いプランへのダウングレード、頻度が多ければ月1回に変更、花の好みが合わなければ別のサービスに乗り換えなど、
                  解約以外の選択肢で不満が解消するケースは多くあります。
                </p>
              </div>

              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C5D9CB]">
                <h3 className="text-base font-bold text-[#333] mb-3">他サービスへの乗り換えを検討</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  今のサービスに不満があっても、花のサブスク自体を辞める必要はないかもしれません。
                  サービスごとに花のテイスト・料金・配送方法が異なるため、別のサービスに変えるだけで満足度が大きく向上することがあります。
                </p>
              </div>

              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C5D9CB]">
                <h3 className="text-base font-bold text-[#333] mb-3">解約理由を明確にする</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  「なんとなく」で解約すると後悔しやすくなります。
                  具体的に何が不満なのか、その不満は解約でしか解決できないのかを整理しましょう。
                  理由が明確であれば、解約後もすっきりとした気持ちで次のステップに進めます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクの解約に関するよくある質問
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
              まとめ：解約前に休止やプラン変更も検討しよう
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクの解約は、ほとんどのサービスでマイページから簡単に手続きできます。
              注意が必要なのはbloomeeの4回最低受取回数と、日本総合園芸の電話/メール解約の2点です。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              解約を考えている方は、まず「本当に解約が必要か」を振り返ってみてください。
              配送頻度の変更、プランのダウングレード、休止やスキップなど、解約せずに不満を解消できる方法が見つかるかもしれません。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              それでも解約する場合は、次回お届け日と解約期限を確認し、余裕を持って手続きを進めましょう。
              別のサービスに乗り換えたい方は、当サイトの比較ページも参考にしてください。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a
                href="/"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                花サブスク5社比較トップへ
              </a>
              <a
                href="/compare/cheap"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                安い花サブスクランキング
              </a>
              <a
                href="/guides/beginner"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                初心者向けガイド
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
              <p className="text-lg font-bold text-white mb-1">お花の定期便ナビ</p>
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
              &copy; 2026 お花の定期便ナビ All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
