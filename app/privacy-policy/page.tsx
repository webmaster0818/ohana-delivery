import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | flowerデリ - お花の定期便比較サイト",
  description:
    "flowerデリのプライバシーポリシーです。個人情報の取扱い、Cookie使用、Google Analytics等について記載しています。",
};

export default function PrivacyPolicyPage() {
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
            <span className="text-[#3D3632]">プライバシーポリシー</span>
          </nav>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-8">
            プライバシーポリシー
          </h1>

          <div className="bg-white rounded-2xl border border-[#E8E0D8] p-6 md:p-10 text-[#3D3632] text-sm leading-relaxed space-y-8">
            <p>
              株式会社MediaX（以下「当社」といいます。）は、当社が運営するウェブサイト「flowerデリ」（以下「本サイト」といいます。）における利用者の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
            </p>

            {/* 第1条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第1条（個人情報の定義）
              </h2>
              <p>
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できる情報、および容貌、指紋、声紋にかかるデータ等の個人識別符号が含まれる情報を指します。
              </p>
            </section>

            {/* 第2条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第2条（個人情報の収集方法）
              </h2>
              <p>
                当社は、以下の方法で個人情報を取得することがあります。
              </p>
              <ol className="list-decimal pl-6 space-y-2 mt-2">
                <li>利用者がお問い合わせフォームを通じて情報を入力した場合</li>
                <li>利用者が本サイトを閲覧した際に自動的に収集される情報（アクセスログ、IPアドレス、ブラウザ情報、Cookie等）</li>
                <li>アフィリエイトプログラムを通じて提携先から提供される情報</li>
              </ol>
            </section>

            {/* 第3条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第3条（個人情報の利用目的）
              </h2>
              <p className="mb-3">
                当社が個人情報を収集・利用する目的は、以下のとおりです。
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>本サイトのサービスの提供・運営のため</li>
                <li>利用者からのお問い合わせに回答するため</li>
                <li>利用者に対して本サイトの更新情報やお知らせを送付するため</li>
                <li>本サイトの利用状況を分析し、サービスの改善に活用するため</li>
                <li>お花の定期便サービスの比較情報の品質向上のため</li>
                <li>アフィリエイト広告の効果測定・分析のため</li>
                <li>不正アクセス、不正利用の防止のため</li>
                <li>本サイトのメンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用規約に違反する行為に対する対応のため</li>
                <li>利用者の本サイト閲覧履歴や検索条件に基づく最適な情報の提供のため</li>
                <li>アンケート調査の実施・集計のため</li>
                <li>マーケティングデータの調査・統計・分析のため</li>
                <li>上記の利用目的に付随する目的のため</li>
              </ol>
            </section>

            {/* 第4条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第4条（個人情報の第三者提供）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>当社は、次に掲げる場合を除いて、あらかじめ利用者の同意を得ることなく、第三者に個人情報を提供することはありません。
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>法令に基づく場合</li>
                    <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                    <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                    <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                  </ul>
                </li>
                <li>前項の定めにかかわらず、利用履歴や属性情報等の個人を特定できない統計データについては、第三者に提供することがあります。</li>
              </ol>
            </section>

            {/* 第5条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第5条（個人情報の管理）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>当社は、利用者の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス、紛失、破損、改ざん、漏洩などを防止するため、セキュリティシステムの維持、管理体制の整備等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。</li>
                <li>当社は、保有する個人情報について、利用目的の達成に必要な範囲内で正確かつ最新の内容に保つよう努めるとともに、利用する必要がなくなった場合は遅滞なく消去するよう努めます。</li>
              </ol>
            </section>

            {/* 第6条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第6条（個人情報の開示・訂正・削除）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>利用者から個人情報の開示を求められたときは、利用者本人からの請求であることを確認の上で、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあります。
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                    <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                    <li>その他法令に違反することとなる場合</li>
                  </ul>
                </li>
                <li>個人情報が事実でない場合は、利用者からの請求に基づき、速やかに訂正または削除を行います。</li>
                <li>利用者から個人情報の利用停止または消去を求められた場合、必要な調査を行い、その結果に基づき対応します。</li>
              </ol>
            </section>

            {/* 第7条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第7条（Cookie（クッキー）およびアクセス解析ツールの使用について）
              </h2>
              <p className="mb-3">
                本サイトでは、利用者の利便性向上およびサイト改善のため、以下のツールを使用しています。
              </p>
              <h3 className="font-bold text-[#3D3632] mt-4 mb-2">Google Analytics</h3>
              <p>
                本サイトでは、Googleが提供するアクセス解析ツール「Google Analytics」を使用しています。Google Analyticsはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。Cookieを無効にすることでデータの収集を拒否することができますので、お使いのブラウザの設定をご確認ください。Google Analyticsの利用規約については、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-[#C4877A] underline hover:text-[#A86B5E]">Google Analytics利用規約</a>をご確認ください。
              </p>
              <h3 className="font-bold text-[#3D3632] mt-4 mb-2">アフィリエイト広告について</h3>
              <p>
                本サイトは、各種アフィリエイトサービスプロバイダー（ASP）を通じてアフィリエイト広告を掲載しています。これらのASPでは、広告の効果測定のためにCookieを使用する場合があります。利用者がアフィリエイトリンクをクリックした際に、ASPのCookieが利用者のブラウザに保存されることがあります。
              </p>
              <h3 className="font-bold text-[#3D3632] mt-4 mb-2">Cookieの管理について</h3>
              <p>
                利用者は、ブラウザの設定によりCookieの受け入れを拒否することができます。ただし、Cookieを無効にした場合、本サイトの一部の機能が正常に動作しない可能性があります。
              </p>
            </section>

            {/* 第8条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第8条（免責事項）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>本サイトからリンクされた外部サイトにおけるプライバシー情報の取扱いについては、当社は一切の責任を負わないものとします。</li>
                <li>利用者自身がインターネット上に公開した個人情報等により、損害が生じた場合でも、当社は一切の責任を負わないものとします。</li>
                <li>利用者が掲載サービスの公式サイトに遷移した後の個人情報の取扱いについては、各サービス提供会社のプライバシーポリシーが適用されます。</li>
              </ol>
            </section>

            {/* 第9条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第9条（プライバシーポリシーの変更）
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、利用者に通知することなく変更することができるものとします。</li>
                <li>当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本サイトに掲載したときから効力を生じるものとします。</li>
              </ol>
            </section>

            {/* 第10条 */}
            <section>
              <h2 className="text-lg font-bold text-[#3D3632] mb-3 border-l-4 border-[#C4877A] pl-4">
                第10条（お問い合わせ窓口）
              </h2>
              <p>
                本ポリシーに関するお問い合わせは、下記のGoogleフォームよりお願いいたします。
              </p>
              <div className="mt-3 p-4 bg-[#FAF7F2] rounded-lg border border-[#E8E0D8]">
                <p className="font-bold text-[#3D3632]">株式会社MediaX</p>
                <p className="text-[#6B5F57] mt-1">所在地：東京都渋谷区</p>
                <p className="text-[#6B5F57] mt-1">お問い合わせ：Googleフォームにて受付</p>
              </div>
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
