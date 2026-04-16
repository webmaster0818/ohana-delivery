"use client";

import { useState } from "react";
import Header from "@/app/components/Header";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "bloomeeとmedeluはどちらが安いですか？",
    a: "送料込みの実質負担額で比較すると、medeluのほうが安くなります。medeluのLiteコースは698円（送料無料）、bloomeeの体験プランは980円＋送料385円＝1,365円です。同じポスト投函・花3本でも、1回あたり約667円の差があります。",
  },
  {
    q: "bloomeeとmedeluの花の品質に違いはありますか？",
    a: "bloomeeは全国200店舗以上の提携花屋がアレンジするため、届く花屋によって品質やテイストにばらつきがあります。medeluは自社で仕入れ・品質管理を一元化しており、安定した鮮度の花が届く傾向にあります。どちらも品質保証制度があり、傷んだ花が届いた場合は再送対応を受けられます。",
  },
  {
    q: "bloomeeの4回縛りとは何ですか？",
    a: "bloomeeでは初回申し込み時に最低4回の受け取りが条件となっています。4回受け取る前に解約すると、残り回数分の料金が違約金として発生します。体験プランの場合、最低でも1,365円 x 4回 = 5,460円の利用が必要です。medeluにはこのような回数縛りはなく、いつでも解約可能です。",
  },
  {
    q: "medeluに回数縛りはありますか？",
    a: "medeluには回数縛りはありません。初回から解約自由で、マイページからいつでも解約手続きが可能です。最低利用回数や違約金の設定がないため、気軽にお試しできる点がmedeluの大きなメリットです。",
  },
  {
    q: "配送エリアに違いはありますか？",
    a: "bloomeeは離島を除く日本全国に配送対応しています。medeluも日本全国に対応していますが、一部離島や配送困難な地域は対象外となる場合があります。どちらもポスト投函プランは日本郵便を利用しており、対応エリアに大きな差はありません。",
  },
  {
    q: "プレゼントとして贈るならどちらがおすすめですか？",
    a: "プレゼント用途ではbloomeeが有利です。bloomeeには「花の定期便ギフトチケット」があり、相手に好きなタイミングでお花の定期便を始めてもらえます。medeluにはギフト専用の仕組みがないため、贈り物として利用する場合はbloomeeを選ぶのが無難です。",
  },
  {
    q: "途中でプラン変更はできますか？",
    a: "どちらもマイページからプラン変更が可能です。bloomeeは体験・レギュラー・リッチの3プラン間で変更でき、配送頻度（毎週・隔週）も変更可能です。medeluもLite・Lite+・Basicの各コース間で変更でき、配送頻度は隔週・毎週から選べます。",
  },
  {
    q: "bloomeeとmedelu、両方試してから決めることはできますか？",
    a: "可能ですが、bloomeeには4回の最低受け取り回数があるため、お試しのつもりでも最低4回分の料金が発生します。まず回数縛りのないmedeluから試し、その後bloomeeを検討するのがリスクの少ない順番です。medeluは1回受け取っただけでも解約できるため、お試し利用に向いています。",
  },
];

/* ─── Main Component ─── */
export default function BloomeeVsMedeluPage() {
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
                  <span className="text-[#666]">比較記事</span>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-[#333] font-medium">bloomee vs medelu</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ─── Hero Section ─── */}
        <section className="bg-gradient-to-b from-[#E8F0EB] to-[#F0E8E8] py-12 md:py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-sm text-[#4A7C59] font-medium mb-3 tracking-wide">
              花のサブスク徹底比較
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4 leading-tight">
              bloomee vs medelu どっちがいい？<br className="hidden md:block" />
              8つの違いを徹底比較【2026年最新】
            </h1>
            <p className="text-sm md:text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
              花のサブスクで人気の2大サービス「bloomee（ブルーミー）」と「medelu（メデル）」。
              料金・花の本数・解約のしやすさなど8つの比較ポイントで、どちらがあなたに合うか徹底解説します。
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
              <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-[#E5E5E5] flex-1 max-w-xs mx-auto md:mx-0">
                <p className="text-xs text-[#999] mb-1">bloomee</p>
                <p className="text-lg font-bold text-[#4A7C59] mb-1">980円/回 + 送料385円</p>
                <p className="text-xs text-[#666]">花3本〜 / 4回縛りあり</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl font-bold text-[#999]">VS</span>
              </div>
              <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-[#E5E5E5] flex-1 max-w-xs mx-auto md:mx-0">
                <p className="text-xs text-[#999] mb-1">medelu</p>
                <p className="text-lg font-bold text-[#4A7C59] mb-1">698円/回 送料無料</p>
                <p className="text-xs text-[#666]">花3本〜 / 縛りなし</p>
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
                  <li><a href="#conclusion" className="hover:text-[#4A7C59] transition-colors">1. 結論：こんな人はbloomee / こんな人はmedelu</a></li>
                  <li><a href="#price" className="hover:text-[#4A7C59] transition-colors">2. 料金比較</a></li>
                  <li><a href="#volume" className="hover:text-[#4A7C59] transition-colors">3. 花の本数・ボリューム</a></li>
                  <li><a href="#delivery" className="hover:text-[#4A7C59] transition-colors">4. 配送方法</a></li>
                  <li><a href="#frequency" className="hover:text-[#4A7C59] transition-colors">5. 配送頻度の選択肢</a></li>
                  <li><a href="#cancel" className="hover:text-[#4A7C59] transition-colors">6. 解約のしやすさ</a></li>
                  <li><a href="#freshness" className="hover:text-[#4A7C59] transition-colors">7. 花の鮮度</a></li>
                  <li><a href="#app" className="hover:text-[#4A7C59] transition-colors">8. アプリ・サービス</a></li>
                  <li><a href="#brand" className="hover:text-[#4A7C59] transition-colors">9. ブランド認知度・実績</a></li>
                  <li><a href="#table" className="hover:text-[#4A7C59] transition-colors">10. 比較一覧表</a></li>
                  <li><a href="#scenario" className="hover:text-[#4A7C59] transition-colors">11. シーン別おすすめ</a></li>
                  <li><a href="#pros-cons" className="hover:text-[#4A7C59] transition-colors">12. 両サービスのメリット・デメリット</a></li>
                  <li><a href="#faq" className="hover:text-[#4A7C59] transition-colors">13. よくある質問</a></li>
                  <li><a href="#summary" className="hover:text-[#4A7C59] transition-colors">14. まとめ</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* ─── Quick Conclusion ─── */}
        <section id="conclusion" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              結論：bloomeeとmedelu、あなたに合うのは？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              先に結論をお伝えすると、コスパと手軽さを重視するならmedelu、ブランド力やサービスの充実度を重視するならbloomeeがおすすめです。
              以下に、それぞれに向いている人の特徴をまとめました。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* bloomeeがおすすめ */}
              <div className="bg-[#F9E8E8] rounded-xl p-5 md:p-6 border border-[#F0D0D0]">
                <h3 className="text-base font-bold text-[#333] mb-4 pb-2 border-b border-[#F0D0D0]">
                  bloomeeがおすすめの人
                </h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>知名度の高いサービスを選びたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>SNSで他の利用者の投稿を参考にしたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>アプリで花の管理やお世話情報を見たい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>ギフトとしてお花の定期便を贈りたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>全国の花屋さんのアレンジを楽しみたい</span>
                  </li>
                </ul>
              </div>

              {/* medeluがおすすめ */}
              <div className="bg-[#E8F0EB] rounded-xl p-5 md:p-6 border border-[#C8DCC8]">
                <h3 className="text-base font-bold text-[#333] mb-4 pb-2 border-b border-[#C8DCC8]">
                  medeluがおすすめの人
                </h3>
                <ul className="text-sm text-[#666] space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>送料込みの実質負担をできるだけ抑えたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>回数縛りなしで気軽に始めたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>安定した品質のお花を受け取りたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>シンプルな料金体系がいい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A7C59] mt-0.5 shrink-0 font-bold">--</span>
                    <span>まずは1回試してから続けるか決めたい</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 1. Price Comparison ─── */}
        <section id="price" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較1：料金（送料込みの実質負担）
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              花のサブスクを選ぶ上で最も気になるのが料金です。表示価格だけでなく、送料を含めた1回あたりの実質負担額で比較することが重要です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* bloomee料金 */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#F9E8E8] px-5 py-3 text-center">
                  <h3 className="text-base font-bold text-[#333]">bloomee</h3>
                </div>
                <div className="px-5 py-5 space-y-4">
                  <div className="border-b border-[#E5E5E5] pb-3">
                    <p className="text-xs text-[#999] mb-1">体験プラン</p>
                    <p className="text-sm text-[#666]">980円 + 送料385円 = <span className="font-bold text-[#333]">1,365円/回</span></p>
                  </div>
                  <div className="border-b border-[#E5E5E5] pb-3">
                    <p className="text-xs text-[#999] mb-1">レギュラープラン</p>
                    <p className="text-sm text-[#666]">2,180円 + 送料385円 = <span className="font-bold text-[#333]">2,565円/回</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-[#999] mb-1">リッチプラン</p>
                    <p className="text-sm text-[#666]">3,680円 + 送料550円 = <span className="font-bold text-[#333]">4,230円/回</span></p>
                  </div>
                </div>
              </div>

              {/* medelu料金 */}
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="bg-[#E8F0EB] px-5 py-3 text-center">
                  <h3 className="text-base font-bold text-[#333]">medelu</h3>
                </div>
                <div className="px-5 py-5 space-y-4">
                  <div className="border-b border-[#E5E5E5] pb-3">
                    <p className="text-xs text-[#999] mb-1">Liteコース</p>
                    <p className="text-sm text-[#666]">698円 送料無料 = <span className="font-bold text-[#333]">698円/回</span></p>
                  </div>
                  <div className="border-b border-[#E5E5E5] pb-3">
                    <p className="text-xs text-[#999] mb-1">Lite+コース</p>
                    <p className="text-sm text-[#666]">1,508円 送料無料 = <span className="font-bold text-[#333]">1,508円/回</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-[#999] mb-1">Basicコース</p>
                    <p className="text-sm text-[#666]">2,508円 送料無料 = <span className="font-bold text-[#333]">2,508円/回</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E8F0EB] rounded-xl p-5">
              <h3 className="text-sm font-bold text-[#4A7C59] mb-2">料金比較のポイント</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                最安プラン同士で比較すると、medeluのLiteコース（698円）はbloomeeの体験プラン（1,365円/送料込み）の約半額です。
                medeluは全コース送料無料のため、表示価格がそのまま実質負担額になるシンプルな料金体系です。
                bloomeeは花代とは別に送料385〜550円がかかるため、総額で考える必要があります。
                隔週配送の場合、月額の差はbloomee体験プラン（月2,730円）とmedelu Liteコース（月1,396円）で約1,334円になります。
              </p>
            </div>
          </div>
        </section>

        {/* ─── 2. Volume Comparison ─── */}
        <section id="volume" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較2：花の本数・ボリューム
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F9E8E8] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>体験プラン：3本以上</li>
                  <li>レギュラープラン：4本以上</li>
                  <li>リッチプラン：8本以上</li>
                </ul>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>Liteコース：3本程度</li>
                  <li>Lite+コース：5〜6本程度</li>
                  <li>Basicコース：6〜9本程度</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              最安プラン同士ではどちらも3本程度で大きな差はありません。
              中間プランではmedeluのLite+コース（5〜6本/1,508円）のほうが、bloomeeのレギュラープラン（4本以上/2,565円送料込み）よりも本数が多く、料金も安くなっています。
              1本あたりの単価で見ると、medeluのコストパフォーマンスが際立ちます。
            </p>
          </div>
        </section>

        {/* ─── 3. Delivery Method ─── */}
        <section id="delivery" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較3：配送方法
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>体験・レギュラー：ポスト投函</li>
                  <li>リッチプラン：宅配便（手渡し）</li>
                  <li>ポスト投函はゆうパケットを利用</li>
                  <li>専用の縦長パッケージで届く</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>Lite・Lite+：ポスト投函</li>
                  <li>Basicコース：宅配便</li>
                  <li>ポスト投函は日本郵便を利用</li>
                  <li>専用パッケージで届く</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              配送方法はどちらもほぼ同じ仕組みです。低価格プランはポスト投函、上位プランは宅配便（手渡し）になります。
              ポスト投函は不在時でも受け取れるため、一人暮らしの方や日中不在の方にとって便利です。
              どちらのサービスも、ポストの投函口が幅4.5cm以上・奥行き15cm以上あれば問題なく届きます。
            </p>
          </div>
        </section>

        {/* ─── 4. Delivery Frequency ─── */}
        <section id="frequency" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較4：配送頻度の選択肢
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F9E8E8] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>毎週 / 隔週から選択</li>
                  <li>マイページからいつでも変更可</li>
                  <li>スキップ機能あり（無料）</li>
                </ul>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>隔週 / 毎週から選択</li>
                  <li>マイページからいつでも変更可</li>
                  <li>スキップ機能あり（無料）</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              配送頻度の選択肢はどちらも同じで、毎週または隔週から選べます。
              どちらもマイページから配送頻度の変更が可能で、旅行や出張で受け取れない週はスキップ機能で配送を飛ばせます。
              スキップは無料なので、自分のライフスタイルに合わせて柔軟に調整できます。この項目では両者に差はありません。
            </p>
          </div>
        </section>

        {/* ─── 5. Cancellation ─── */}
        <section id="cancel" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較5：解約のしやすさ
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-6">
              解約のしやすさは、両サービスで大きく異なるポイントです。特に「とりあえず試してみたい」という方にとって重要な比較基準になります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <div className="bg-white rounded-lg p-3 mb-3">
                  <p className="text-sm font-bold text-[#E0B8B8]">4回の最低受け取り回数あり</p>
                </div>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>4回未満の解約は残り回数分が違約金に</li>
                  <li>マイページから解約手続き可能</li>
                  <li>解約ページまでに複数ステップあり</li>
                  <li>引き止めページが表示される</li>
                </ul>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5 border border-[#C8DCC8]">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <div className="bg-white rounded-lg p-3 mb-3">
                  <p className="text-sm font-bold text-[#4A7C59]">回数縛りなし・いつでも解約OK</p>
                </div>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>初回から解約自由</li>
                  <li>マイページから簡単に解約可能</li>
                  <li>違約金・手数料なし</li>
                  <li>解約手続きがシンプル</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
              <h3 className="text-sm font-bold text-[#333] mb-2">解約しやすさの判定</h3>
              <p className="text-sm text-[#666] leading-relaxed">
                解約のしやすさではmedeluが圧倒的に有利です。medeluは回数縛りも違約金もなく、いつでもマイページから解約できます。
                bloomeeは4回の最低受け取りが条件で、体験プランの場合は最低でも5,460円（1,365円 x 4回）の利用が確定します。
                「まず1回試してから判断したい」という方には、medeluのほうが金銭的なリスクが少なくおすすめです。
              </p>
            </div>
          </div>
        </section>

        {/* ─── 6. Freshness ─── */}
        <section id="freshness" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較6：花の鮮度
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>全国200以上の提携花屋が地域ごとに発送</li>
                  <li>花屋によって品質にばらつきがある</li>
                  <li>品質保証制度（再送保証）あり</li>
                  <li>夏場のポスト投函は傷みのリスクがやや高い</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>自社で仕入れ・品質管理を一元化</li>
                  <li>市場直送で鮮度の高い花を使用</li>
                  <li>品質保証制度あり</li>
                  <li>品質のばらつきが少なく安定している</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              花の鮮度に関しては、仕組みの違いがポイントです。bloomeeは提携花屋がそれぞれアレンジして発送するため、花屋ごとの品質差が出やすい面があります。
              一方、medeluは自社で一括して市場から仕入れ、品質管理を行っているため、安定した鮮度の花が届きやすい傾向にあります。
              ただし、どちらも品質保証制度があるため、万が一傷んだ花が届いた場合は再送対応を受けられます。
            </p>
          </div>
        </section>

        {/* ─── 7. App & Services ─── */}
        <section id="app" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較7：アプリ・サービス
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#F9E8E8] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>専用アプリあり（iOS/Android）</li>
                  <li>届いた花の名前やお手入れ方法を確認できる</li>
                  <li>品質保証の申請もアプリから可能</li>
                  <li>ギフトチケットの購入・送付機能あり</li>
                  <li>スキップ・プラン変更もアプリで操作可能</li>
                </ul>
              </div>
              <div className="bg-[#E8F0EB] rounded-xl p-5">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>専用アプリなし（Webマイページで管理）</li>
                  <li>マイページでプラン変更・スキップが可能</li>
                  <li>花の情報はメールで届く</li>
                  <li>シンプルなサービス設計</li>
                  <li>ギフト専用機能はなし</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              サービスの充実度ではbloomeeが上回っています。bloomeeは専用アプリがあり、届いた花の情報確認、品質保証の申請、スキップやプラン変更まですべてアプリ内で完結します。
              またギフトチケット機能があるため、プレゼント用途にも対応しています。
              medeluはアプリがなくWebマイページでの管理になりますが、必要な機能は揃っており、シンプルに使いたい方にはかえって使いやすいとも言えます。
            </p>
          </div>
        </section>

        {/* ─── 8. Brand ─── */}
        <section id="brand" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              比較8：ブランド認知度・実績
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">bloomee</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>2016年サービス開始</li>
                  <li>累計3,000万本以上のお花をお届け</li>
                  <li>SNS投稿数が花のサブスクで最多クラス</li>
                  <li>テレビ・雑誌等のメディア掲載多数</li>
                  <li>花のサブスクの代名詞的存在</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-5 border border-[#E5E5E5]">
                <h3 className="text-base font-bold text-[#333] mb-3">medelu</h3>
                <ul className="text-sm text-[#666] space-y-2">
                  <li>2018年サービス開始</li>
                  <li>コスパの良さで口コミが広がる</li>
                  <li>SNS投稿数はbloomeeと比べると少なめ</li>
                  <li>花のサブスク比較サイトで高評価が多い</li>
                  <li>知る人ぞ知る実力派サービス</li>
                </ul>
              </div>
            </div>
            <p className="text-sm md:text-base text-[#666] leading-relaxed">
              ブランド認知度ではbloomeeが圧倒的にリードしています。2016年の早期参入で花のサブスク市場を開拓し、SNSやメディアでの露出も多いため「花のサブスク＝bloomee」というイメージが定着しています。
              一方、medeluは2018年開始と後発ながら、コスパの良さが口コミで広がり、比較検討する層からの支持を集めています。
              「みんなが使っている安心感」を重視するならbloomee、「実質的なサービス内容」を重視するならmedeluという構図です。
            </p>
          </div>
        </section>

        {/* ─── Comparison Table ─── */}
        <section id="table" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomee vs medelu 比較一覧表
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              ここまでの比較をひと目で確認できる一覧表です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#4A7C59] text-white">
                    <th className="px-4 py-3 text-left font-medium">比較項目</th>
                    <th className="px-4 py-3 text-center font-medium">bloomee</th>
                    <th className="px-4 py-3 text-center font-medium">medelu</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "最安プラン（税込）", bloomee: "980円/回", medelu: "698円/回" },
                    { label: "送料", bloomee: "385〜550円", medelu: "無料" },
                    { label: "実質最安（送料込み）", bloomee: "1,365円/回", medelu: "698円/回" },
                    { label: "花の本数（最安）", bloomee: "3本以上", medelu: "3本程度" },
                    { label: "プラン数", bloomee: "3プラン", medelu: "3コース" },
                    { label: "配送方法", bloomee: "ポスト投函 / 宅配便", medelu: "ポスト投函 / 宅配便" },
                    { label: "配送頻度", bloomee: "毎週 / 隔週", medelu: "毎週 / 隔週" },
                    { label: "回数縛り", bloomee: "4回", medelu: "なし" },
                    { label: "解約時の違約金", bloomee: "残り回数分発生", medelu: "なし" },
                    { label: "品質保証", bloomee: "あり（再送保証）", medelu: "あり" },
                    { label: "専用アプリ", bloomee: "あり", medelu: "なし" },
                    { label: "ギフト対応", bloomee: "あり", medelu: "なし" },
                    { label: "花の仕入れ", bloomee: "提携花屋（200店舗以上）", medelu: "自社一括仕入れ" },
                    { label: "SNS人気", bloomee: "非常に高い", medelu: "普通" },
                    { label: "サービス開始", bloomee: "2016年", medelu: "2018年" },
                    { label: "スキップ機能", bloomee: "あり（無料）", medelu: "あり（無料）" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F8F8]"}>
                      <td className="px-4 py-3 font-medium text-[#333] border-b border-[#E5E5E5]">{row.label}</td>
                      <td className="px-4 py-3 text-center text-[#666] border-b border-[#E5E5E5]">{row.bloomee}</td>
                      <td className="px-4 py-3 text-center text-[#666] border-b border-[#E5E5E5]">{row.medelu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── Scenario Recommendations ─── */}
        <section id="scenario" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              シーン別おすすめ：どっちを選ぶべき？
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8">
              利用シーンごとに、bloomeeとmedeluのどちらがおすすめかを解説します。
            </p>
            <div className="space-y-5">
              {[
                {
                  scenario: "一人暮らしなら",
                  recommend: "medelu",
                  reason: "一人暮らしで花のサブスクを始めるなら、medeluがおすすめです。送料無料で698円から始められるため月々の負担が少なく、回数縛りがないためライフスタイルに合わなければすぐに解約できます。ポスト投函で受け取れるため、不在が多い一人暮らしでも安心です。",
                },
                {
                  scenario: "プレゼントとして贈るなら",
                  recommend: "bloomee",
                  reason: "プレゼント用途ではbloomeeが最適です。bloomeeにはギフトチケット機能があり、相手に好きなタイミングでお花の定期便を始めてもらえます。知名度が高いため贈られた側も安心感があり、SNS映えするアレンジは喜ばれやすいです。medeluにはギフト専用の仕組みがありません。",
                },
                {
                  scenario: "コスパ重視なら",
                  recommend: "medelu",
                  reason: "コストパフォーマンスを最重視するなら、迷わずmedeluです。送料込みの実質負担額はbloomeeの約半額で、回数縛りもないため無駄な出費が発生しません。Lite+コース（1,508円）でも5〜6本届くため、同価格帯のbloomee体験プラン（1,365円/3本）よりボリュームがあります。",
                },
                {
                  scenario: "初心者で不安が多いなら",
                  recommend: "bloomee",
                  reason: "花のサブスクが初めてで不安がある方には、bloomeeが向いています。専用アプリで届いた花の名前やお手入れ方法を確認でき、品質保証もアプリから簡単に申請可能です。SNSに利用者の投稿が多いため、事前にどんな花が届くか参考にできる安心感もあります。ただし4回の最低受け取りがある点は理解しておきましょう。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F8F8] rounded-xl p-5 md:p-6 border border-[#E5E5E5]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#4A7C59] text-white text-xs font-bold rounded-lg px-3 py-1 shrink-0">
                      {item.scenario}
                    </span>
                    <span className="text-base font-bold text-[#333]">
                      {item.recommend}がおすすめ
                    </span>
                  </div>
                  <p className="text-sm text-[#666] leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Pros & Cons Summary ─── */}
        <section id="pros-cons" className="py-12 md:py-16 bg-[#F8F8F8]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              両サービスのメリット・デメリットまとめ
            </h2>

            {/* bloomee */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#333] mb-4">bloomee（ブルーミー）</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#E8F0EB] rounded-xl p-5">
                  <h4 className="text-sm font-bold text-[#4A7C59] mb-3">メリット</h4>
                  <ul className="text-sm text-[#666] space-y-2">
                    <li>-- 知名度が高く安心感がある</li>
                    <li>-- 専用アプリで便利に管理できる</li>
                    <li>-- ギフトチケットでプレゼントに使える</li>
                    <li>-- 全国の花屋のアレンジが楽しめる</li>
                    <li>-- SNSで情報収集しやすい</li>
                    <li>-- 品質保証（再送保証）あり</li>
                  </ul>
                </div>
                <div className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
                  <h4 className="text-sm font-bold text-[#E0B8B8] mb-3">デメリット</h4>
                  <ul className="text-sm text-[#666] space-y-2">
                    <li>-- 送料が別途かかる（385〜550円）</li>
                    <li>-- 4回の最低受け取り回数がある</li>
                    <li>-- 解約手続きがやや複雑</li>
                    <li>-- 花屋により品質にばらつきがある</li>
                    <li>-- 送料込みの実質負担が高め</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* medelu */}
            <div>
              <h3 className="text-lg font-bold text-[#333] mb-4">medelu（メデル）</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#E8F0EB] rounded-xl p-5">
                  <h4 className="text-sm font-bold text-[#4A7C59] mb-3">メリット</h4>
                  <ul className="text-sm text-[#666] space-y-2">
                    <li>-- 送料無料で料金がわかりやすい</li>
                    <li>-- 回数縛りなし、いつでも解約OK</li>
                    <li>-- 自社品質管理で安定した鮮度</li>
                    <li>-- 送料込みでもbloomeeの約半額</li>
                    <li>-- 解約手続きが簡単</li>
                    <li>-- 品質保証あり</li>
                  </ul>
                </div>
                <div className="bg-[#FDF5F5] rounded-xl p-5 border border-[#F0D0D0]">
                  <h4 className="text-sm font-bold text-[#E0B8B8] mb-3">デメリット</h4>
                  <ul className="text-sm text-[#666] space-y-2">
                    <li>-- 専用アプリがない</li>
                    <li>-- ギフト対応機能がない</li>
                    <li>-- SNSでの情報量が少ない</li>
                    <li>-- 知名度がbloomeeより低い</li>
                    <li>-- 花屋ごとのアレンジの多様性はない</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6 pb-3 border-b-2 border-[#4A7C59]">
              bloomee vs medeluに関するよくある質問
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
        <section id="summary" className="py-12 md:py-16 bg-gradient-to-b from-[#E8F0EB] to-[#F0E8E8]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#333] mb-6">
              まとめ：bloomeeとmedeluの選び方
            </h2>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              bloomeeとmedeluはどちらも優れた花のサブスクサービスですが、重視するポイントによっておすすめが異なります。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-4 max-w-2xl mx-auto text-left">
              コスパ・気軽さを重視するならmedeluが最適です。送料無料で698円から始められ、回数縛りもないため金銭的なリスクなくお試しできます。
              安定した品質の花が届くため、シンプルにお花のある生活を楽しみたい方に向いています。
            </p>
            <p className="text-sm md:text-base text-[#666] leading-relaxed mb-8 max-w-2xl mx-auto text-left">
              ブランド力・サービス充実度を重視するならbloomeeがおすすめです。専用アプリやギフト機能など付加価値が充実しており、SNSでの情報量も豊富です。
              花のサブスクの代名詞として安心感があり、プレゼント用途にも対応しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href="/services/medelu"
                className="inline-block bg-[#4A7C59] text-white font-bold text-base px-8 py-4 rounded-full hover:bg-[#3A6247] transition-colors shadow-md"
              >
                medeluの詳細を見る
              </a>
              <a
                href="/services/bloomee"
                className="inline-block bg-white text-[#4A7C59] font-bold text-base px-8 py-4 rounded-full border-2 border-[#4A7C59] hover:bg-[#E8F0EB] transition-colors"
              >
                bloomeeの詳細を見る
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://medelu.flowers"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block text-sm text-[#4A7C59] underline hover:text-[#3A6247] transition-colors"
              >
                medelu公式サイトはこちら
              </a>
              <span className="hidden sm:inline text-[#999]">|</span>
              <a
                href="https://bloomee.jp"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block text-sm text-[#4A7C59] underline hover:text-[#3A6247] transition-colors"
              >
                bloomee公式サイトはこちら
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
