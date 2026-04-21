"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "ふるさと納税の花の定期便は確定申告が必要ですか？",
    a: "ワンストップ特例制度を利用すれば確定申告は不要です。寄付先が5自治体以内であれば、各自治体に申請書を送るだけで手続きが完了します。6自治体以上に寄付する場合や、もともと確定申告が必要な方（自営業など）は確定申告で寄付金控除を申請してください。",
  },
  {
    q: "届く花の種類や色は選べますか？",
    a: "多くの自治体の花の定期便では、届く花の種類や色を指定することはできません。地元で栽培された旬の花がセレクトされて届くのが一般的です。ただし、一部の自治体では「バラ中心」「季節の花束」など大まかなテーマを選べる場合があります。",
  },
  {
    q: "ふるさと納税の花の定期便はいつ届きますか？",
    a: "自治体やプランによって異なりますが、多くは申し込みから1〜2ヶ月後に初回が届き、その後は月1回ペースで届くのが一般的です。配送スケジュールは各自治体の返礼品ページに記載されているため、事前に確認しましょう。",
  },
  {
    q: "普通の花のサブスクとふるさと納税の花の定期便、どちらがお得ですか？",
    a: "税控除が受けられる分、ふるさと納税の方が実質負担が少なくなります。ただし、ふるさと納税は年間の控除上限額があり、花の種類やアレンジの自由度は通常のサブスクの方が高いです。両方を併用し、ふるさと納税で季節の花を楽しみつつ、通常のサブスクで好みの花を補うのも一つの方法です。",
  },
  {
    q: "ふるさと納税の花の定期便で人気の自治体はどこですか？",
    a: "千葉県南房総市（温暖な気候で花の栽培が盛ん）、高知県（ユリやトルコキキョウの産地）、愛知県田原市（花き生産量日本一）などが人気です。各ふるさと納税ポータルサイトで「花 定期便」と検索すると、最新の返礼品が見つかります。",
  },
];

/* ─── Main Component ─── */
export default function FurusatoNouzeiGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <title>お花の定期便をふるさと納税で｜お得に花のある暮らし【2026年】</title>
      <meta name="description" content="ふるさと納税で花の定期便がもらえる自治体を紹介。仕組み・メリット・デメリット・おすすめ自治体を解説し、お得に花のある暮らしを始める方法をご紹介します。" />

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
                <li><span className="text-[#333] font-medium">ふるさと納税で花の定期便</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">お得ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              お花の定期便をふるさと納税で<br className="hidden md:block" />
              お得に花のある暮らし【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              ふるさと納税の返礼品として花の定期便を選ぶと、実質負担2,000円で数ヶ月間お花が届きます。
              仕組みやおすすめ自治体を詳しく解説します。
            </p>
          </div>
        </section>

        {/* ─── How it works ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ふるさと納税で花の定期便がもらえる仕組み
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              ふるさと納税は、好きな自治体に寄付をすると、寄付額から2,000円を差し引いた金額が翌年の住民税・所得税から控除される制度です。返礼品として「花の定期便」を選べば、<strong>実質2,000円の自己負担</strong>で数ヶ月間、定期的にお花が届きます。
            </p>
            <div className="space-y-4">
              {[
                { step: "STEP 1", title: "控除上限額を確認する", text: "ふるさと納税ポータルサイト（楽天ふるさと納税、さとふる、ふるなび等）のシミュレーターで、ご自身の年収や家族構成に基づく控除上限額を確認しましょう。上限額を超えた分は自己負担になるため注意が必要です。" },
                { step: "STEP 2", title: "花の定期便の返礼品を選ぶ", text: "ポータルサイトで「花 定期便」「お花 サブスク」などのキーワードで検索します。寄付金額は10,000〜30,000円程度が多く、届く回数は3〜6回が一般的です。配送時期や花の種類もチェックしましょう。" },
                { step: "STEP 3", title: "寄付を申し込む", text: "通常のネットショッピングと同じ感覚で申し込めます。ワンストップ特例制度を利用する場合は、申請書の提出を忘れずに。寄付後1〜2ヶ月で初回のお花が届き始めます。" },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 border border-[#E5E5E5] flex items-start gap-4">
                  <div className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-sm font-bold text-[#333] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Popular Municipalities ─── */}
        <section className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花の定期便がもらえるおすすめ自治体
            </h2>
            <div className="space-y-4">
              {[
                { name: "千葉県 南房総市", amount: "15,000円〜", detail: "温暖な南房総で育った季節の花が毎月届く。3回〜6回の定期便が人気。ストック、カーネーション、ひまわりなど地元産の花が中心。", flowers: "季節の切り花 5〜10本" },
                { name: "高知県 芸西村", amount: "12,000円〜", detail: "高知の豊かな日差しで育ったユリやトルコキキョウが届く。花き栽培が盛んな地域ならではの高品質な花が魅力。", flowers: "ユリ・トルコキキョウ等 3〜5本" },
                { name: "愛知県 田原市", amount: "10,000円〜", detail: "花き生産量日本一の田原市から届く花の定期便。バラ、菊、カーネーションなど種類豊富。市場への出荷前の新鮮な花が届く。", flowers: "季節の花束 1束" },
                { name: "長崎県 大村市", amount: "20,000円〜", detail: "長崎の温暖な気候で育った花が年4回届く季節便。春はチューリップ、夏はひまわり、秋はダリア、冬はスイートピーなど四季折々の花を楽しめる。", flowers: "季節の花 年4回" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-base font-bold text-[#333]">{item.name}</h3>
                    <span className="text-xs bg-[#E8F0EB] text-[#4A7C59] px-2 py-0.5 rounded-full font-medium">{item.amount}</span>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed mb-2">{item.detail}</p>
                  <p className="text-xs text-[#999]">届く花の目安：{item.flowers}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#999] mt-3">※ 返礼品の内容・寄付金額は変更になる場合があります。最新情報は各ポータルサイトでご確認ください。</p>
          </div>
        </section>

        {/* ─── Merits & Demerits ─── */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ふるさと納税で花の定期便を選ぶメリット・デメリット
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8D8CB]">
                <h3 className="text-base font-bold text-[#333] mb-3">メリット</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#10003;</span>実質2,000円で数ヶ月間花が届く</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#10003;</span>産地直送で鮮度が高い</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#10003;</span>地域の花き農家を応援できる</li>
                  <li className="flex items-start gap-2"><span className="text-[#4A7C59] shrink-0">&#10003;</span>通常のサブスクと併用可能</li>
                </ul>
              </div>
              <div className="bg-[#FDF5F5] rounded-xl p-5 border border-[#E0B8B8]">
                <h3 className="text-base font-bold text-[#333] mb-3">デメリット</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li className="flex items-start gap-2"><span className="text-[#C4877A] shrink-0">&#10005;</span>花の種類や色を選べない</li>
                  <li className="flex items-start gap-2"><span className="text-[#C4877A] shrink-0">&#10005;</span>配送タイミングを自由に変更できない</li>
                  <li className="flex items-start gap-2"><span className="text-[#C4877A] shrink-0">&#10005;</span>控除上限額を超えると自己負担が増える</li>
                  <li className="flex items-start gap-2"><span className="text-[#C4877A] shrink-0">&#10005;</span>届くまで1〜2ヶ月かかることがある</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              ふるさと納税の花の定期便に関するよくある質問
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
        <section className="py-12 md:py-16 bg-[#F3EDE6]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：ふるさと納税で花のある暮らしをお得に始めよう
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              ふるさと納税の花の定期便は、<strong>実質2,000円で数ヶ月間お花が届く</strong>お得な方法です。産地直送の新鮮な花を楽しみながら、地域の花き農家を応援できるのも魅力的なポイントです。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              ふるさと納税の花は届くタイミングや種類を選べないため、より自由度の高い花サブスクと併用するのもおすすめです。まずはふるさと納税で花のある暮らしを体験し、気に入ったら通常のサブスクも検討してみましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                併用におすすめ medeluを見る
              </a>
              <a href="/services/hitohana" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                色が選べる HitoHanaを見る
              </a>
            </div>
            <a href="/" className="inline-block mt-4 text-sm text-[#666] hover:text-[#4A7C59] transition-colors underline">
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
