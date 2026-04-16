import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | flowerデリ - お花の定期便比較サイト",
  description:
    "flowerデリの利用規約です。当サイトのご利用条件、禁止事項、免責事項等をご確認ください。",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2]">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 pt-6">
          <nav className="text-xs text-[#9B8F87]">
            <Link href="/" className="hover:text-[#C4877A] transition-colors">
              トップ
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-[#3D3632]">利用規約</span>
          </nav>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-8">
            利用規約
          </h1>

          <div className="bg-white rounded-2xl border border-[#E8E0D8] p-6 md:p-10 text-[#3D3632] text-sm leading-relaxed space-y-8">
            <p>
              この利用規約（以下「本規約」といいます。）は、株式会社MediaX（以下「当社」といいます。）が運営するウェブサイト「flowerデリ」（以下「本サイト」といいます。）の利用条件を定めるものです。本サイトをご利用いただくすべての方（以下「利用者」といいます。）は、本規約に同意の上、本サイトをご利用ください。
            </p>

            {/* 第1条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第1条（本サイトの目的）
              </h2>
              <p>
                本サイトは、お花の定期便（花のサブスク）サービスの比較・紹介情報の提供を目的として運営されています。当社は、利用者がお花の定期便サービスを選択する際に役立つ情報を提供することを目指しています。
              </p>
            </section>

            {/* 第2条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第2条（定義）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>「本サービス」とは、本サイトにおいて提供されるお花の定期便サービスの比較情報、口コミ情報、各種ガイド記事、診断機能その他一切のサービスをいいます。</li>
                <li>「利用者」とは、本サイトにアクセスし、本サービスを利用するすべての方をいいます。</li>
                <li>「掲載サービス」とは、本サイトで紹介・比較するお花の定期便サービス（bloomee、medelu、AND PLANTS、hanameku等）をいいます。</li>
              </ol>
            </section>

            {/* 第3条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第3条（本規約への同意）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>利用者は、本サイトを利用することにより、本規約のすべての条項に同意したものとみなされます。</li>
                <li>本規約に同意いただけない場合は、本サイトのご利用をお控えください。</li>
              </ol>
            </section>

            {/* 第4条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第4条（本規約の変更）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>当社は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。</li>
                <li>変更後の利用規約は、本サイトに掲載した時点から効力を生じるものとします。</li>
                <li>本規約の変更後に利用者が本サイトを利用した場合、変更後の規約に同意したものとみなされます。</li>
              </ol>
            </section>

            {/* 第5条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第5条（利用登録）
              </h2>
              <p>
                本サイトの閲覧にあたっては、原則として利用登録は不要です。ただし、当社が今後提供する特定のサービスにおいて利用登録が必要となる場合は、別途定める手続きに従うものとします。
              </p>
            </section>

            {/* 第6条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第6条（禁止事項）
              </h2>
              <p className="mb-3">
                利用者は、本サイトの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                <li>他の利用者に成りすます行為</li>
                <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>当社、本サイトの他の利用者またはその他の第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                <li>本サイトのコンテンツを無断で複製、転載、改変、頒布する行為</li>
                <li>本サイトの情報を商業目的で利用する行為（当社が別途許可した場合を除く）</li>
                <li>コンピューターウイルスその他の有害なプログラムを送信する行為</li>
                <li>自動化されたツール（クローラー、スクレイピングツール等）を用いて本サイトにアクセスする行為（検索エンジンのクローラーを除く）</li>
                <li>当社や掲載サービスの信用を毀損する虚偽の情報を流布する行為</li>
                <li>不正アクセスまたはこれを試みる行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ol>
            </section>

            {/* 第7条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第7条（本サービスの提供の停止等）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>本サービスにかかるコンピューターシステムの保守点検または更新を行う場合</li>
                    <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                    <li>コンピューターまたは通信回線等が事故により停止した場合</li>
                    <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                  </ul>
                </li>
                <li>当社は、本サービスの提供の停止または中断により、利用者または第三者が被ったいかなる不利益または損害について、理由を問わず一切の責任を負わないものとします。</li>
              </ol>
            </section>

            {/* 第8条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第8条（知的財産権）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>本サイトに掲載されている文章、画像、デザイン、ロゴその他のコンテンツに関する著作権、商標権その他の知的財産権は、当社または正当な権利を有する第三者に帰属します。</li>
                <li>利用者は、当社の事前の書面による承諾なく、本サイトのコンテンツを複製、転載、改変、頒布その他の方法で利用することはできません。</li>
                <li>掲載サービスの名称、ロゴ等は、各サービス提供会社の商標または登録商標です。</li>
              </ol>
            </section>

            {/* 第9条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第9条（アフィリエイトプログラムについて）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>本サイトは、各種アフィリエイトプログラムに参加しています。本サイト内のリンクを通じて掲載サービスにお申し込みいただいた場合、当社が紹介手数料を受け取ることがあります。</li>
                <li>アフィリエイトプログラムへの参加は、当サイトに掲載する情報の正確性・中立性に影響を与えるものではありません。掲載順序やランキングは、当社独自の評価基準に基づいて決定しています。</li>
                <li>利用者がアフィリエイトリンクを通じて行った取引について、当社は契約の当事者とはならず、一切の責任を負わないものとします。</li>
              </ol>
            </section>

            {/* 第10条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第10条（免責事項）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>当社は、本サイトに掲載される情報の正確性、完全性、有用性、最新性等について、いかなる保証も行いません。</li>
                <li>本サイトに掲載されている料金、プラン内容、キャンペーン情報等は、各サービス提供会社により変更される場合があります。最新の情報は各公式サイトにてご確認ください。</li>
                <li>利用者が本サイトの情報に基づいて掲載サービスに申し込んだ結果、損害が生じた場合であっても、当社は一切の責任を負わないものとします。</li>
                <li>当社は、本サイトからリンクされた外部サイトの内容について、いかなる責任も負わないものとします。</li>
                <li>当社は、利用者と掲載サービス提供会社との間のトラブルについて、一切の責任を負わないものとします。</li>
              </ol>
            </section>

            {/* 第11条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第11条（掲載情報について）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>本サイトに掲載されている口コミ・評判情報は、個人の感想であり、すべての方に同様の効果を保証するものではありません。</li>
                <li>当社は、掲載情報の正確性の維持に努めますが、掲載サービスの料金改定、プラン変更、サービス終了等により、情報が最新でない場合があります。</li>
                <li>本サイトの比較情報・ランキングは、当社独自の調査・評価基準に基づくものであり、客観的な優劣を示すものではありません。</li>
              </ol>
            </section>

            {/* 第12条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第12条（個人情報の取扱い）
              </h2>
              <p>
                利用者の個人情報の取扱いについては、別途定める「<Link href="/privacy-policy" className="text-[#C4877A] underline hover:text-[#A86B5E]">プライバシーポリシー</Link>」に従います。利用者は、当社のプライバシーポリシーに同意の上、本サイトをご利用ください。
              </p>
            </section>

            {/* 第13条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第13条（秘密保持）
              </h2>
              <p>
                利用者は、本サービスに関連して当社が利用者に対して秘密に取り扱うことを求めて開示した非公知の情報について、当社の事前の書面による承諾がある場合を除き、秘密に取り扱うものとします。
              </p>
            </section>

            {/* 第14条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第14条（利用制限および登録抹消）
              </h2>
              <p>
                当社は、以下の場合には、事前の通知なく、利用者に対して本サービスの全部もしくは一部の利用を制限し、またはアカウントの登録を抹消することができるものとします。
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>本規約のいずれかの条項に違反した場合</li>
                <li>登録事項に虚偽の事実があることが判明した場合</li>
                <li>その他、当社が本サービスの利用を適当でないと判断した場合</li>
              </ol>
            </section>

            {/* 第15条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第15条（損害賠償）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>利用者が本規約に違反し、当社に損害を与えた場合、利用者は当社に対して一切の損害を賠償するものとします。</li>
                <li>当社が利用者に対して損害賠償責任を負う場合であっても、当社の賠償責任は直接かつ通常の損害に限られ、逸失利益、間接損害、特別損害については責任を負わないものとします。</li>
              </ol>
            </section>

            {/* 第16条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第16条（反社会的勢力の排除）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>利用者は、現在、暴力団、暴力団員、暴力団関係企業、総会屋、社会運動標ぼうゴロ、政治活動標ぼうゴロ、特殊知能暴力集団等の反社会的勢力（以下「反社会的勢力」といいます。）に該当しないことを表明し、かつ将来にわたっても該当しないことを確約します。</li>
                <li>当社は、利用者が反社会的勢力に該当すると判断した場合、事前の通知なく本サービスの利用を拒否し、またはアカウントを抹消することができるものとします。</li>
              </ol>
            </section>

            {/* 第17条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第17条（不可抗力）
              </h2>
              <p>
                天災地変、戦争、暴動、内乱、法令の改廃制定、公権力による命令処分、ストライキ等の労働争議、輸送機関の事故、通信回線の障害、その他当社の責に帰することのできない事由による本サービスの全部または一部の履行遅滞または履行不能については、当社は一切の責任を負わないものとします。
              </p>
            </section>

            {/* 第18条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第18条（権利義務の譲渡の禁止）
              </h2>
              <p>
                利用者は、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
              </p>
            </section>

            {/* 第19条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第19条（分離可能性）
              </h2>
              <p>
                本規約のいずれかの条項またはその一部が、消費者契約法その他の法令等により無効または執行不能と判断された場合であっても、本規約の残りの規定および一部が無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。
              </p>
            </section>

            {/* 第20条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第20条（準拠法・管轄裁判所）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                <li>本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
              </ol>
            </section>

            {/* 附則 */}
            <section className="border-t border-[#E8E0D8] pt-6">
              <p className="text-[#6B5F57]">2026年4月16日 制定</p>
              <p className="mt-2 text-[#6B5F57]">株式会社MediaX</p>
              <p className="text-[#6B5F57]">東京都渋谷区</p>
            </section>
          </div>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#3D3632] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <img src="/images/logo-flwdeli-footer.png" alt="flowerデリ" className="h-14 w-auto opacity-90" />
              <p className="text-xs text-gray-400 mt-1">
                花のサブスクを徹底比較。あなたにぴったりのサービスが見つかる。
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">トップページ</Link>
              <Link href="/#comparison" className="hover:text-white transition-colors">比較表</Link>
              <Link href="/#reviews" className="hover:text-white transition-colors">サービス詳細</Link>
              <Link href="/#faq" className="hover:text-white transition-colors">よくある質問</Link>
            </nav>
          </div>
          <div className="border-t border-gray-600 pt-6 text-center">
            <p className="text-xs text-gray-500">
              当サイトはアフィリエイトプログラムに参加しています。掲載情報は記事執筆時点のものです。最新情報は各公式サイトでご確認ください。
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-400">
              <Link href="/terms-of-service" className="hover:text-white transition-colors">利用規約</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
              <Link href="/content-policy" className="hover:text-white transition-colors">記事の制作ポリシー</Link>
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
