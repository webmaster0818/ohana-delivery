"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "花のサブスクをやめた後、また再開できますか？",
    a: "はい、ほとんどのサービスで再開可能です。bloomee、medelu、AND PLANTSなどは解約後も再登録が可能で、以前のアカウント情報が残っている場合もあります。再開時にクーポンが配布されることもあるため、公式サイトやメルマガをチェックしておくとお得に再開できます。",
  },
  {
    q: "やめる前にスキップ機能で様子を見ることはできますか？",
    a: "多くのサービスがスキップ（配送停止）機能を提供しています。medeluは次回配送のスキップが可能、bloomeeもマイページからスキップできます。「しばらく休みたいけど完全にやめるのは迷う」という場合は、スキップ機能を活用して様子を見るのがおすすめです。",
  },
  {
    q: "花のサブスクの代わりになるものはありますか？",
    a: "生花以外の選択肢として、ドライフラワーの定期便、観葉植物のサブスク（AND PLANTSなど）、造花・アーティフィシャルフラワーがあります。また、近所のスーパーや直売所で季節の花を買う方法も、自分のペースで花を楽しめるためおすすめです。",
  },
  {
    q: "花のサブスクを続けるメリットは何ですか？",
    a: "定期的に届くことで花を飾る習慣が身につき、部屋の雰囲気が明るくなります。自分では選ばない花との出会いがあること、花屋に行く時間を節約できること、季節の移り変わりを感じられることが主なメリットです。継続割引があるサービスもあり、長く続けるほどお得になる場合もあります。",
  },
];

/* ─── Main Component ─── */
export default function YametaGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* ─── Head (SEO) ─── */}
      <title>花のサブスクをやめた理由5選｜続けるべきかの判断基準【2026年】</title>
      <meta name="description" content="花のサブスクをやめた人に多い理由5つを徹底解説。飽きた・コスパが悪い・花が合わないなどのリアルな声と、続けるべき人・やめるべき人の判断基準をご紹介します。" />

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
                <li><span className="text-[#333] font-medium">花のサブスクをやめた理由</span></li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-[#F3EDE6] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">お花の定期便ガイド</p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              花のサブスクをやめた理由5選<br className="hidden md:block" />
              続けるべきかの判断基準【2026年】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              「花のサブスク やめた」「お花の定期便 やめた理由」で検索するあなたへ。
              よくあるやめた理由を分析し、続けるべきか・やめるべきかの判断基準を解説します。
            </p>
          </div>
        </section>

        {/* ─── Table of Contents ─── */}
        <section className="bg-white py-8 border-b border-[#E5E5E5]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-[#F8F8F8] rounded-xl p-5 md:p-6">
              <p className="text-sm font-bold text-[#333] mb-3">この記事の内容</p>
              <ol className="text-sm text-[#666] space-y-2">
                <li><a href="#reasons" className="hover:text-[#4A7C59] transition-colors">1. よくあるやめた理由5選</a></li>
                <li><a href="#continue" className="hover:text-[#4A7C59] transition-colors">2. 続けるべき人の特徴</a></li>
                <li><a href="#quit" className="hover:text-[#4A7C59] transition-colors">3. やめるべき人の特徴</a></li>
                <li><a href="#alternatives" className="hover:text-[#4A7C59] transition-colors">4. やめた後の代替案</a></li>
                <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">5. よくある質問</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* ─── Reasons ─── */}
        <section id="reasons" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクをやめた理由5選
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              SNSや口コミサイトに寄せられた「やめた理由」を分析すると、大きく5つのパターンに分けられます。共通しているのは、<strong>期待と現実のギャップ</strong>が原因であることが多い点です。
            </p>

            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "届く花に飽きてしまった",
                  text: "毎回届く花が似たようなラインナップだと、マンネリを感じてしまうことがあります。特に同じサービスを半年以上続けると、季節の花が一巡して既視感が出てきます。対策としては、サービスを乗り換えて新鮮さを取り戻す、上位プランに変更して花の種類を増やすなどの方法があります。",
                },
                {
                  num: "2",
                  title: "コスパが悪いと感じた",
                  text: "「スーパーで花を買った方が安い」「花屋の方がボリュームがある」という不満は非常に多いです。確かに花代だけを比較すると、スーパーの切り花は1束300〜500円程度で買えます。ただし、サブスクは自宅に届く利便性、プロのアレンジ、季節の花との出会いという付加価値があります。",
                },
                {
                  num: "3",
                  title: "届く花が好みに合わなかった",
                  text: "おまかせアレンジのサービスでは、自分の好みと合わない花が届くことがあります。「派手な色は苦手なのにビビッドな花が届いた」「部屋のインテリアと合わない」という声が目立ちます。色やテイストを選べるHitoHanaや、好みを学習するAND PLANTSなど、カスタマイズ性の高いサービスに切り替えるのが有効です。",
                },
                {
                  num: "4",
                  title: "花がすぐに枯れてしまう",
                  text: "特に夏場は配送中に花が傷みやすく、届いた時点で元気がないケースもあります。水切りや栄養剤の活用、こまめな水替えなどお手入れの知識がないと花がすぐに枯れてしまい、もったいなく感じることも。クール便対応のサービスを選ぶ、品質保証制度を活用するなどの対策があります。",
                },
                {
                  num: "5",
                  title: "忙しくてお手入れができない",
                  text: "花の水替えや花瓶の洗浄など、日々のお手入れが負担に感じる方もいます。仕事や育児で忙しいと、届いた花を飾る余裕すらないことも。配送頻度を隔週や月1回に変更する、お手入れが楽な茎の強い花が届くサービスを選ぶ、ドライフラワーに切り替えるなどの工夫で解決できる場合があります。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#FFF8F0] rounded-xl p-5 border border-[#F0E0D0]">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#C4877A] text-white text-xs font-bold rounded-lg px-2.5 py-1 shrink-0 mt-0.5">
                      理由{item.num}
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

        {/* ─── Continue ─── */}
        <section id="continue" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクを続けるべき人の特徴
            </h2>
            <div className="space-y-3">
              {[
                "花屋に行く時間がなく、定期的に届く利便性に価値を感じる人",
                "季節の花との新しい出会いを楽しめる人",
                "インテリアとして部屋に花を飾る習慣をつけたい人",
                "プランやサービスの変更で不満を解消できそうな人",
                "品質保証制度を活用して、傷んだ花の再送を受けられることを知っている人",
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-[#E5E5E5] flex items-start gap-3">
                  <span className="text-[#4A7C59] text-lg shrink-0">&#10003;</span>
                  <p className="text-sm text-[#666] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Quit ─── */}
        <section id="quit" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              花のサブスクをやめるべき人の特徴
            </h2>
            <div className="space-y-3">
              {[
                "自分で花を選びたい、おまかせアレンジにストレスを感じる人",
                "花のお手入れが面倒で、枯れた花を放置してしまう人",
                "月々の出費をできるだけ減らしたい、花にお金をかけたくない人",
                "不在が多く、届いた花がポストで長時間放置されてしまう人",
                "複数のサービスを試しても満足できなかった人",
              ].map((item, i) => (
                <div key={i} className="bg-[#FDF5F5] rounded-xl p-4 border border-[#E0B8B8] flex items-start gap-3">
                  <span className="text-[#C4877A] text-lg shrink-0">&#10005;</span>
                  <p className="text-sm text-[#666] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Alternatives ─── */}
        <section id="alternatives" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              やめた後の代替案3選
            </h2>
            <div className="space-y-4">
              {[
                {
                  num: "1",
                  title: "スーパーや直売所で自分で花を買う",
                  text: "週末にスーパーの花売り場や地元の直売所で花を選ぶ方法です。1束300〜500円程度で手に入り、自分の好みの花を選べます。ただし、花屋のような専門的なアレンジやアドバイスは期待できません。",
                },
                {
                  num: "2",
                  title: "観葉植物のサブスクに切り替える",
                  text: "AND PLANTSなどの観葉植物サブスクは、切り花に比べてお手入れが楽で長持ちします。水やりは週1〜2回で済み、インテリアとしても映えます。グリーンのある暮らしを楽しみたい方におすすめです。",
                },
                {
                  num: "3",
                  title: "ドライフラワーや造花を活用する",
                  text: "お手入れ不要で長期間楽しめるドライフラワーや高品質な造花（アーティフィシャルフラワー）も選択肢です。初期費用はかかりますが、ランニングコストがゼロなのが魅力。季節ごとに入れ替えることで、変化も楽しめます。",
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
              花のサブスクをやめる前に知りたいQ&A
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#F8F8F8] hover:bg-[#E8F0EB] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#333] pr-4">Q. {item.q}</span>
                    <svg
                      className={`w-4 h-4 text-[#999] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 py-4 bg-white">
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
              まとめ：やめる前にサービスの見直しも検討しよう
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              花のサブスクをやめたいと感じる理由の多くは、<strong>プランやサービスの選び直し</strong>で解決できる可能性があります。飽きたなら別サービスへの乗り換え、コスパ不満ならmedeluのような送料無料サービス、花が合わないならHitoHanaのような色選択可能なサービスを試してみてください。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              それでも満足できなければ、無理に続ける必要はありません。スーパーで自分で花を選ぶ、観葉植物に切り替えるなど、自分に合った方法で花のある暮らしを楽しみましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
              <a href="/services/medelu" className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md">
                コスパ最強 medeluを見る
              </a>
              <a href="/services/hitohana" className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors">
                花を選べる HitoHanaを見る
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
