import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "記事の制作ポリシー | flowerデリ - お花の定期便比較サイト",
  description:
    "flowerデリの記事制作ポリシーです。ユーザーファーストの姿勢、正確な情報発信、中立な口コミ紹介、制作フローをご説明します。",
};

export default function ContentPolicyPage() {
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
            <span className="text-[#3D3632]">記事の制作ポリシー</span>
          </nav>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
            記事の制作ポリシー
          </h1>
          <p className="text-[#6B5F57] text-sm leading-relaxed mb-8">
            「flowerデリ」では、お花の定期便（花のサブスク）を検討されているすべてのユーザーに、信頼性の高い情報をお届けするため、以下のポリシーに基づいて記事を制作しています。
          </p>

          <div className="space-y-8">
            {/* 4つの基本方針 */}
            <section className="bg-white rounded-2xl border border-[#E8E0D8] p-6 md:p-10">
              <h2 className="heading-serif text-2xl font-bold text-[#3D3632] mb-8 text-center">
                4つの基本方針
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* 方針1 */}
                <div className="bg-[#FAF7F2] rounded-xl p-6 border border-[#E8E0D8]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C4877A] text-white text-sm font-bold">1</span>
                    <h3 className="text-lg font-bold text-[#3D3632]">ユーザーファースト</h3>
                  </div>
                  <p className="text-sm text-[#6B5F57] leading-relaxed">
                    お花の定期便を利用するユーザーの多様なニーズに対応し、各サービスの特性を分かりやすく発信します。「初めてお花の定期便を始める方」「コスパ重視の方」「おしゃれにこだわりたい方」など、さまざまな視点から情報を整理し、最適なサービス選びをサポートします。
                  </p>
                </div>

                {/* 方針2 */}
                <div className="bg-[#FAF7F2] rounded-xl p-6 border border-[#E8E0D8]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C4877A] text-white text-sm font-bold">2</span>
                    <h3 className="text-lg font-bold text-[#3D3632]">正確かつ最新な情報発信</h3>
                  </div>
                  <p className="text-sm text-[#6B5F57] leading-relaxed">
                    各お花の定期便サービスの料金・プラン・キャンペーン情報を定期的に確認し、最新の状態に更新しています。公式サイトの情報に基づき、正確な情報を掲載するよう努めています。情報に変更があった場合は速やかに反映いたします。
                  </p>
                </div>

                {/* 方針3 */}
                <div className="bg-[#FAF7F2] rounded-xl p-6 border border-[#E8E0D8]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C4877A] text-white text-sm font-bold">3</span>
                    <h3 className="text-lg font-bold text-[#3D3632]">操作のない口コミ情報</h3>
                  </div>
                  <p className="text-sm text-[#6B5F57] leading-relaxed">
                    当サイトで紹介する口コミ・評判情報は、中立性を保った形で掲載しています。良い口コミだけでなく、改善を求める声も含めて公正に紹介し、ユーザーが偏りなくサービスを判断できるよう努めています。アフィリエイト広告の有無が評価に影響を与えることはありません。
                  </p>
                </div>

                {/* 方針4 */}
                <div className="bg-[#FAF7F2] rounded-xl p-6 border border-[#E8E0D8]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C4877A] text-white text-sm font-bold">4</span>
                    <h3 className="text-lg font-bold text-[#3D3632]">分かりやすさ</h3>
                  </div>
                  <p className="text-sm text-[#6B5F57] leading-relaxed">
                    お花の定期便選びに必要な情報を整理して提供します。料金比較表、配送方法の違い、各サービスの特徴など、比較検討に必要な情報を図表や一覧で視覚的に分かりやすく表現しています。専門用語には解説を加え、初めての方にも理解しやすい記事づくりを心がけています。
                  </p>
                </div>
              </div>
            </section>

            {/* 記事制作フロー */}
            <section className="bg-white rounded-2xl border border-[#E8E0D8] p-6 md:p-10">
              <h2 className="heading-serif text-2xl font-bold text-[#3D3632] mb-8 text-center">
                記事制作フロー
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#C4877A] text-white flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-[#3D3632] mb-2">企画・調査</h3>
                    <p className="text-sm text-[#6B5F57] leading-relaxed">
                      ユーザーが知りたい情報を徹底的にリサーチします。お花の定期便に関する検索キーワードやSNSでの口コミ傾向を分析し、ユーザーのニーズに合ったテーマを設定します。各サービスの公式サイトを確認し、最新の料金・プラン・キャンペーン情報を収集します。
                    </p>
                  </div>
                </div>

                <div className="ml-6 border-l-2 border-[#E8E0D8] h-4" />

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#C4877A] text-white flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-[#3D3632] mb-2">記事執筆</h3>
                    <p className="text-sm text-[#6B5F57] leading-relaxed">
                      調査結果をもとに、正確で分かりやすい記事を作成します。各サービスの特徴やメリット・デメリットを公平に記載し、比較表や図を活用して視覚的に理解しやすいコンテンツを制作します。お花の定期便を初めて利用する方にも分かるよう、丁寧な解説を心がけています。
                    </p>
                  </div>
                </div>

                <div className="ml-6 border-l-2 border-[#E8E0D8] h-4" />

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#C4877A] text-white flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-[#3D3632] mb-2">校正・公開</h3>
                    <p className="text-sm text-[#6B5F57] leading-relaxed">
                      執筆した記事は、情報の正確性・最新性を複数の視点からチェックした上で公開します。料金やプラン内容は公式サイトと照合し、誤りがないことを確認します。表現に偏りがないか、ユーザーにとって分かりやすいかを最終確認してから掲載します。
                    </p>
                  </div>
                </div>

                <div className="ml-6 border-l-2 border-[#E8E0D8] h-4" />

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#C4877A] text-white flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-[#3D3632] mb-2">定期更新</h3>
                    <p className="text-sm text-[#6B5F57] leading-relaxed">
                      公開後も定期的に記事を見直し、情報の鮮度を保ちます。各サービスの料金改定やプラン変更、新キャンペーンの情報を随時反映しています。また、ユーザーからのご指摘やフィードバックをもとに、記事の改善を行っています。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 情報の訂正・ご意見 */}
            <section className="bg-white rounded-2xl border border-[#E8E0D8] p-6 md:p-10">
              <h2 className="heading-serif text-2xl font-bold text-[#3D3632] mb-4 text-center">
                情報の訂正・ご意見について
              </h2>
              <p className="text-sm text-[#6B5F57] leading-relaxed text-center mb-4">
                当サイトに掲載されている情報に誤りを発見された場合、または記事内容に関するご意見・ご要望がございましたら、お気軽にご連絡ください。確認の上、速やかに対応いたします。
              </p>
              <div className="text-center">
                <div className="inline-block p-4 bg-[#FAF7F2] rounded-lg border border-[#E8E0D8]">
                  <p className="text-sm font-bold text-[#3D3632]">株式会社MediaX</p>
                  <p className="text-xs text-[#6B5F57] mt-1">お問い合わせ：Googleフォームにて受付</p>
                </div>
              </div>
            </section>

            {/* 附則 */}
            <div className="text-sm text-[#6B5F57] pl-2">
              <p>2026年4月16日 制定</p>
              <p className="mt-1">株式会社MediaX</p>
              <p>東京都渋谷区</p>
            </div>
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
