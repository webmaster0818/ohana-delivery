"use client";

import { useState } from "react";

/* ─── Diagnosis Logic ─── */
type DiagnosisAnswer = {
  q1: string;
  q2: string;
  q3: string;
};

function getRecommendation(answers: DiagnosisAnswer): string {
  const { q1, q2, q3 } = answers;
  if (q2 === "cost") return "medelu";
  if (q1 === "beginner" && q3 === "post") return "bloomee";
  if (q1 === "stylish") return "andplants";
  if (q2 === "freshness") return "hananoteikibin";
  if (q3 === "flexible") return "hanameku";
  return "bloomee";
}

const recommendationMap: Record<string, { name: string; reason: string }> = {
  bloomee: {
    name: "bloomee（ブルーミー）",
    reason:
      "初心者でも始めやすく、ポスト投函で受け取りも簡単。SNSでも話題のサービスです。",
  },
  medelu: {
    name: "medelu（メデル）",
    reason:
      "月額698円からと業界最安クラス。送料無料でコスパを重視する方に最適です。",
  },
  andplants: {
    name: "AND PLANTS（アンドプランツ）",
    reason:
      "おしゃれなアレンジが特徴。インテリアにこだわる方におすすめです。",
  },
  hananoteikibin: {
    name: "花の定期便（日本総合園芸）",
    reason:
      "農家直送で鮮度抜群。本格的なお花を楽しみたい方に向いています。",
  },
  hanameku: {
    name: "hanameku（ハナメク）",
    reason:
      "市場直送で新鮮。回数縛りなしで気軽に始められます。",
  },
};

/* ─── Service Data ─── */
const services = [
  {
    id: "bloomee",
    name: "bloomee（ブルーミー）",
    tagline: "SNSで話題の初心者向けサービス",
    image: "/images/service-bloomee.jpg",
    overview:
      "bloomeeは、累計会員数10万人以上を誇る、日本最大級のお花の定期便サービスです。全国200店舗以上の提携花屋さんから届くお花は、季節感あふれるアレンジが魅力。届いたお花をSNSに投稿するユーザーも多く、インスタグラムでも話題のサービスです。ポスト投函で届くため、不在時でも受け取れる手軽さが初心者に支持されています。",
    plans: [
      { name: "体験プラン", price: "980円/回", flowers: "3本以上", delivery: "隔週" },
      { name: "レギュラープラン", price: "1,580円/回", flowers: "4本以上", delivery: "隔週" },
      { name: "リッチプラン", price: "2,980円/回", flowers: "8本以上", delivery: "隔週" },
    ],
    shipping: "385円",
    deliveryMethod: "ポスト投函（リッチプランは手渡し）",
    cancellation: "4回受け取り後に解約可能",
    pros: [
      "ポスト投函で不在でも受け取れる",
      "全国200店舗以上の提携花屋から届く",
      "品質保証制度あり（痛んでいたら再送）",
      "SNS映えするアレンジ",
    ],
    cons: [
      "送料が別途かかる（385円）",
      "最低4回の受け取りが必要",
      "花の種類は選べない",
    ],
    recommended: [
      "お花のサブスクが初めての方",
      "不在が多くポスト投函で受け取りたい方",
      "SNS映えするお花が欲しい方",
    ],
  },
  {
    id: "medelu",
    name: "medelu（メデル）",
    tagline: "コスパ最強、送料無料の実力派",
    image: "/images/service-medelu.jpg",
    overview:
      "medeluは、月額698円からという業界最安クラスの価格設定が魅力のお花の定期便です。送料無料なのも大きなポイント。お部屋の雰囲気に合わせて「ANYROOM」「MODERN」「NATURAL」の3コースから選べるのが特徴で、インテリアとの調和を意識したアレンジが届きます。コストを抑えながらも質の良いお花を楽しみたい方に最適なサービスです。",
    plans: [
      { name: "Liteコース", price: "698円/回", flowers: "3本", delivery: "隔週" },
      { name: "Lite+コース", price: "1,198円/回", flowers: "5〜6本", delivery: "隔週" },
      { name: "Basicコース", price: "1,958円/回", flowers: "6〜9本", delivery: "隔週" },
    ],
    shipping: "無料",
    deliveryMethod: "ポスト投函（Basicは宅配便）",
    cancellation: "回数縛りなし、いつでも解約可能",
    pros: [
      "月額698円からと業界最安クラス",
      "送料無料で追加費用なし",
      "部屋の雰囲気に合わせた3コース",
      "回数縛りなし、いつでも解約可能",
    ],
    cons: [
      "対応エリアが限られる場合がある",
      "Liteコースは花の本数が少なめ",
      "知名度がbloomeeほど高くない",
    ],
    recommended: [
      "とにかくコスパを重視する方",
      "送料無料でお花を楽しみたい方",
      "お部屋のインテリアに合うお花が欲しい方",
    ],
  },
  {
    id: "andplants",
    name: "AND PLANTS（アンドプランツ）",
    tagline: "おしゃれ派向けのハイセンスな花",
    image: "/images/service-andplants.jpg",
    overview:
      "AND PLANTSは、おしゃれなインテリアグリーンや観葉植物で知られるブランドが手掛けるお花の定期便です。プロのフローリストが厳選したセンスの良いアレンジが特徴で、インテリアにこだわる方から高い支持を得ています。初回500円OFFのキャンペーンを実施しており、気軽にお試しできるのも魅力。3つのプランから選べ、ボリューム感のあるお花が届きます。",
    plans: [
      { name: "Sプラン", price: "1,980円/回", flowers: "4〜6本", delivery: "隔週/月1回" },
      { name: "Mプラン", price: "2,980円/回", flowers: "6〜9本", delivery: "隔週/月1回" },
      { name: "Lプラン", price: "4,980円/回", flowers: "10〜14本", delivery: "隔週/月1回" },
    ],
    shipping: "無料",
    deliveryMethod: "宅配便（手渡し）",
    cancellation: "回数縛りなし",
    pros: [
      "プロのフローリストによるおしゃれなアレンジ",
      "初回500円OFFキャンペーン",
      "花のボリュームが多い",
      "送料無料",
    ],
    cons: [
      "価格帯がやや高め",
      "ポスト投函に非対応",
      "在宅での受け取りが必要",
    ],
    recommended: [
      "おしゃれなアレンジを楽しみたい方",
      "インテリアにこだわる方",
      "ボリュームのあるお花が欲しい方",
    ],
  },
  {
    id: "hananoteikibin",
    name: "花の定期便（日本総合園芸）",
    tagline: "農家直送で鮮度を追求",
    image: "/images/service-hananoteikibin.jpg",
    overview:
      "日本総合園芸が運営する「花の定期便」は、生産者から直接届く鮮度重視のサービスです。市場を通さず農家から直送されるため、通常の花屋で購入するよりも新鮮な状態のお花が届きます。季節の旬の花を中心に、本格的なアレンジメントが楽しめるのが特徴。花持ちの良さを重視する方や、本格的なお花を自宅で楽しみたい方におすすめです。",
    plans: [
      { name: "レギュラー", price: "1,500円〜/回", flowers: "5〜7本", delivery: "隔週/月1回" },
      { name: "プレミアム", price: "3,000円〜/回", flowers: "10本以上", delivery: "隔週/月1回" },
    ],
    shipping: "地域により異なる",
    deliveryMethod: "宅配便（手渡し）",
    cancellation: "コースにより異なる",
    pros: [
      "農家直送で鮮度が抜群",
      "花持ちが良い",
      "季節の旬の花が届く",
      "本格的なアレンジメント",
    ],
    cons: [
      "送料が地域により異なる",
      "ポスト投函に非対応",
      "プランの選択肢が少なめ",
    ],
    recommended: [
      "花の鮮度にこだわる方",
      "長く花を楽しみたい方",
      "本格的なアレンジメントが欲しい方",
    ],
  },
  {
    id: "hanameku",
    name: "hanameku（ハナメク）",
    tagline: "市場直送、回数縛りなしで気軽に",
    image: "/images/service-hanameku.jpg",
    overview:
      "hanamekuは、市場直送にこだわった新鮮なお花が届くサービスです。回数の縛りがないため、いつでも自由にスキップや解約ができる気軽さが特徴。お花のプロが市場で直接仕入れた旬の花をそのまま届けるため、鮮度と品質のバランスが優れています。試しに1回だけ注文してみたいという方にもおすすめです。",
    plans: [
      { name: "ライトプラン", price: "858円/回", flowers: "3本", delivery: "隔週" },
      { name: "セルフアレンジプラン", price: "1,958円/回", flowers: "7〜10本", delivery: "隔週/月1回" },
      { name: "スタンダードプラン", price: "2,680円/回", flowers: "花瓶付き", delivery: "隔週/月1回" },
    ],
    shipping: "無料（一部プラン）",
    deliveryMethod: "ポスト投函/宅配便",
    cancellation: "回数縛りなし、いつでも解約可能",
    pros: [
      "市場直送で新鮮",
      "回数縛りなし、いつでも解約OK",
      "花瓶付きプランあり",
      "スキップも自由",
    ],
    cons: [
      "プランによって送料が異なる",
      "地域によっては届かない場合がある",
      "アレンジのテイストは選べない",
    ],
    recommended: [
      "まず試しに始めてみたい方",
      "縛りなしで気軽に楽しみたい方",
      "新鮮なお花にこだわる方",
    ],
  },
];

/* ─── FAQ Data ─── */
const faqItems = [
  {
    q: "お花の定期便とは何ですか？",
    a: "お花の定期便（花のサブスク）とは、定期的に自宅にお花が届くサブスクリプションサービスです。毎回プロが選んだ季節のお花が届くため、自分で花屋に行く手間がなく、常に新鮮なお花を楽しめます。",
  },
  {
    q: "お花の定期便の相場はどれくらいですか？",
    a: "お花の定期便の相場は、1回あたり700円〜5,000円程度です。最安値はmedeluの698円/回、手軽に始められるbloomeeは980円/回からとなっています。送料込みの総額で比較することが大切です。",
  },
  {
    q: "ポスト投函と手渡し、どちらがいいですか？",
    a: "不在が多い方にはポスト投函がおすすめです。ポスト投函はbloomee（体験・レギュラープラン）やmedelu（Liteコース）などで対応しています。ただし、ポスト投函は花のボリュームに限りがあるため、大きなアレンジを楽しみたい方は手渡しのサービスを選びましょう。",
  },
  {
    q: "お花はどれくらい持ちますか？",
    a: "一般的に、届いたお花は適切なお手入れをすれば1週間〜10日程度楽しめます。農家直送の花の定期便（日本総合園芸）やhanamekuは鮮度が高いため、より長く楽しめる傾向があります。付属の栄養剤を使い、水をこまめに替えることがポイントです。",
  },
  {
    q: "解約は簡単にできますか？",
    a: "サービスによって異なります。medelu、AND PLANTS、hanamekuは回数縛りなしでいつでも解約可能です。bloomeeは最低4回の受け取りが必要です。解約方法はいずれもマイページからオンラインで手続きできます。",
  },
  {
    q: "届くお花の種類は選べますか？",
    a: "基本的にお花の種類はプロにおまかせとなります。ただし、medeluではお部屋の雰囲気に合わせた3コース（ANYROOM/MODERN/NATURAL）から選べるため、好みのテイストに近いお花が届きやすくなっています。",
  },
  {
    q: "お花が傷んで届いた場合はどうなりますか？",
    a: "多くのサービスで品質保証制度があります。例えばbloomeeでは、届いたお花が傷んでいた場合、写真を送ることで無料で再送してもらえます。各サービスの保証制度は申し込み前に確認しておきましょう。",
  },
  {
    q: "一人暮らしでも利用できますか？",
    a: "もちろん利用できます。むしろ一人暮らしの方にこそおすすめです。ポスト投函対応のbloomeeやmedeluなら不在時でも受け取れ、少量プランを選べばお花の世話の負担も少なく楽しめます。",
  },
  {
    q: "プレゼントとして送ることはできますか？",
    a: "一部のサービスではギフト対応が可能です。AND PLANTSはギフト向けの豪華なプランがあり、bloomeeもギフトチケットを販売しています。プレゼント目的の場合は、手渡し配送のサービスを選ぶと安心です。",
  },
  {
    q: "お花の定期便を選ぶ際に最も重要なポイントは？",
    a: "最も重要なのは「続けやすさ」です。料金、送料、届く頻度、受け取り方法、解約条件の5つを総合的に見て、自分のライフスタイルに合ったサービスを選びましょう。まずは安いプランやお試しから始めるのがおすすめです。",
  },
];

/* ─── Purpose Recommendations ─── */
const purposes = [
  {
    title: "一人暮らしの方に",
    icon: "🏠",
    description: "不在でも受け取れるポスト投函対応で、少量から始められるサービスがおすすめ。",
    services: ["bloomee 体験プラン（980円+送料385円）", "medelu Liteコース（698円・送料無料）"],
    best: "medelu",
  },
  {
    title: "プレゼント用に",
    icon: "🎁",
    description: "ボリュームのある華やかなアレンジで、ギフト対応しているサービスが最適。",
    services: ["AND PLANTS Mプラン以上（2,980円〜）", "bloomee リッチプラン（2,980円）"],
    best: "AND PLANTS",
  },
  {
    title: "おしゃれにこだわる方に",
    icon: "✨",
    description: "プロのフローリストによるセンスの良いアレンジが届くサービスを選びましょう。",
    services: ["AND PLANTS（全プラン）", "medelu MODERNコース"],
    best: "AND PLANTS",
  },
  {
    title: "コスパ重視の方に",
    icon: "💰",
    description: "送料込みの総額で比較して、最もお得に続けられるサービスを選びましょう。",
    services: ["medelu Liteコース（698円・送料無料）", "hanameku ライトプラン（858円）"],
    best: "medelu",
  },
  {
    title: "鮮度重視の方に",
    icon: "🌿",
    description: "農家直送や市場直送で、より新鮮な状態のお花が届くサービスがおすすめ。",
    services: ["花の定期便（農家直送）", "hanameku（市場直送）"],
    best: "花の定期便",
  },
];

/* ─── How to Choose ─── */
const howToChoose = [
  {
    title: "料金と送料の総額で比較する",
    description:
      "月額料金だけでなく、送料を含めた総額で比較しましょう。例えばbloomeeは月額980円ですが送料385円が別途かかります。一方medeluは698円で送料無料。月2回届く場合の月額総額で計算すると実質的なコスパがわかります。",
  },
  {
    title: "届き方（ポスト投函 vs 手渡し）を確認する",
    description:
      "日中不在がちな方はポスト投函対応のサービスがおすすめです。ただし、ポスト投函は花のサイズに制限があるため、ボリュームのあるお花を希望する場合は手渡し配送のサービスを選びましょう。",
  },
  {
    title: "解約条件・回数縛りをチェックする",
    description:
      "お花の定期便によっては最低受け取り回数が設定されています。bloomeeは4回の縛りがありますが、medelu・AND PLANTS・hanamekuは回数縛りなし。初めて試す方は縛りなしのサービスが安心です。",
  },
  {
    title: "花の本数とボリュームを確認する",
    description:
      "同じ価格帯でも届く花の本数はサービスによって異なります。テーブルに飾るなら3〜5本で十分ですが、リビングを華やかにしたい場合は8本以上届くプランがおすすめです。",
  },
  {
    title: "品質保証制度の有無を確認する",
    description:
      "配送中にお花が傷んでしまうこともあります。品質保証があるサービスなら、写真を送るだけで再送や返金に対応してもらえるため安心です。bloomeeなどは保証制度が充実しています。",
  },
];

/* ─── Component ─── */
export default function Home() {
  const [diagnosisStep, setDiagnosisStep] = useState(0);
  const [answers, setAnswers] = useState<DiagnosisAnswer>({
    q1: "",
    q2: "",
    q3: "",
  });
  const [result, setResult] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAnswer = (question: keyof DiagnosisAnswer, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);

    if (question === "q1") setDiagnosisStep(2);
    else if (question === "q2") setDiagnosisStep(3);
    else if (question === "q3") {
      setResult(getRecommendation(newAnswers));
      setDiagnosisStep(4);
    }
  };

  const resetDiagnosis = () => {
    setDiagnosisStep(0);
    setAnswers({ q1: "", q2: "", q3: "" });
    setResult(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── Header ─── */}
      <header className="bg-white/80 backdrop-blur-md border-b border-[#E8E0D8] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/logo-flwdeli-a1-trimmed.png" alt="flowerデリ" className="h-16 md:h-20 w-auto" />
          </a>
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm text-[#6B5F57]">
            <a href="#diagnosis" className="hover:text-[#C4877A] transition-colors">診断</a>
            <a href="#comparison" className="hover:text-[#C4877A] transition-colors">比較表</a>
            <a href="#reviews" className="hover:text-[#C4877A] transition-colors">サービス詳細</a>
            <a href="#how-to-choose" className="hover:text-[#C4877A] transition-colors">選び方</a>
            <a href="#faq" className="hover:text-[#C4877A] transition-colors">FAQ</a>
          </nav>
          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="メニュー"
          >
            <span className={`block w-6 h-0.5 bg-[#3D3632] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#3D3632] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#3D3632] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#E8E0D8]">
            <nav className="max-w-6xl mx-auto px-4 py-4 space-y-1">
              <p className="text-xs text-[#9B8F87] font-medium tracking-wider mb-2">ページ内</p>
              <a href="#diagnosis" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">診断</a>
              <a href="#comparison" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">比較表</a>
              <a href="#reviews" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">サービス詳細</a>
              <a href="#how-to-choose" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">選び方</a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">FAQ</a>

              <div className="border-t border-[#E8E0D8] my-3" />
              <p className="text-xs text-[#9B8F87] font-medium tracking-wider mb-2">サービス詳細</p>
              <a href="/services/bloomee" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">bloomee（ブルーミー）</a>
              <a href="/services/medelu" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">medelu（メデル）</a>
              <a href="/services/and-plants" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">AND PLANTS</a>
              <a href="/services/nihon-sogo-engei" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">花の定期便（日本総合園芸）</a>
              <a href="/services/hanameku" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">hanameku（ハナメク）</a>

              <div className="border-t border-[#E8E0D8] my-3" />
              <p className="text-xs text-[#9B8F87] font-medium tracking-wider mb-2">ガイド</p>
              <a href="/guides/beginner" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">初心者ガイド</a>
              <a href="/guides/flower-care" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">お花のお手入れ方法</a>
              <a href="/guides/hitorigurashi" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">一人暮らしのお花</a>
              <a href="/guides/present" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">プレゼント向け</a>
              <a href="/guides/oshare" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">おしゃれに飾る</a>
              <a href="/guides/seasonal-flowers" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">季節のお花</a>
              <a href="/guides/kaiyaku" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">解約方法</a>

              <div className="border-t border-[#E8E0D8] my-3" />
              <p className="text-xs text-[#9B8F87] font-medium tracking-wider mb-2">比較記事</p>
              <a href="/compare/bloomee-vs-medelu" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">bloomee vs medelu</a>
              <a href="/compare/cheap" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">安いお花の定期便</a>
              <a href="/compare/post-delivery" className="block py-2.5 px-3 text-[#3D3632] hover:bg-[#FBF8F4] rounded-lg transition">ポスト投函対応</a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* ─── Hero Section ─── */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
          <img
            src="/images/hero.jpg"
            alt="花のある暮らし"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-0">
            <div className="max-w-xl">
              <p className="text-sm md:text-base text-[#C4877A] font-medium mb-4 tracking-widest uppercase">
                Flower Subscription Guide
              </p>
              <h2 className="heading-serif text-4xl md:text-6xl font-bold text-[#3D3632] mb-6 leading-[1.2]">
                暮らしに、
                <br />
                お花を。
              </h2>
              <p className="text-base md:text-lg text-[#6B5F57] leading-relaxed mb-10 max-w-md">
                人気のお花の定期便5社を徹底比較。
                あなたのライフスタイルにぴったりの
                サービスが見つかります。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#diagnosis"
                  className="inline-block bg-[#C4877A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#A86B5E] transition-all hover:shadow-lg text-center"
                >
                  30秒で診断する
                </a>
                <a
                  href="#comparison"
                  className="inline-block bg-white/80 text-[#3D3632] border border-[#E8E0D8] px-8 py-4 rounded-full font-medium hover:bg-white transition-all text-center"
                >
                  比較表を見る
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Flower Divider ─── */}
        <div className="flower-divider">
          <span className="text-[#C4877A] text-lg">❀</span>
        </div>

        {/* ─── Quick Diagnosis ─── */}
        <section id="diagnosis" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">DIAGNOSIS</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                あなたに合ったサービスを診断
              </h2>
              <p className="text-[#6B5F57]">
                3つの質問に答えるだけで、おすすめのお花の定期便がわかります
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/section-diagnosis.jpg"
                alt=""
                className="w-full h-48 object-cover rounded-t-3xl"
              />
              <div className="bg-white border border-[#E8E0D8] border-t-0 rounded-b-3xl p-8 md:p-12 shadow-sm">
                {diagnosisStep === 0 && (
                  <div className="text-center">
                    <p className="text-lg text-[#3D3632] mb-8">
                      簡単3ステップで<br className="md:hidden" />ぴったりのサービスを見つけましょう
                    </p>
                    <button
                      onClick={() => setDiagnosisStep(1)}
                      className="bg-[#C4877A] text-white px-10 py-4 rounded-full font-medium hover:bg-[#A86B5E] transition-all hover:shadow-lg"
                    >
                      診断スタート
                    </button>
                  </div>
                )}

                {diagnosisStep === 1 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 rounded-full bg-[#C4877A] text-white text-sm flex items-center justify-center font-medium">1</span>
                      <span className="text-sm text-[#C4877A]">質問 1/3</span>
                    </div>
                    <p className="text-lg font-medium text-[#3D3632] mb-6">
                      お花の定期便に何を求めますか？
                    </p>
                    <div className="grid gap-3">
                      {[
                        { value: "beginner", label: "手軽に始めたい（初心者）" },
                        { value: "stylish", label: "おしゃれなお花が欲しい" },
                        { value: "quality", label: "品質・鮮度にこだわりたい" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer("q1", opt.value)}
                          className="text-left bg-[#FBF8F4] border border-[#E8E0D8] rounded-2xl px-6 py-5 hover:border-[#C4877A] hover:bg-[#F9F2F0] transition-all"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {diagnosisStep === 2 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 rounded-full bg-[#C4877A] text-white text-sm flex items-center justify-center font-medium">2</span>
                      <span className="text-sm text-[#C4877A]">質問 2/3</span>
                    </div>
                    <p className="text-lg font-medium text-[#3D3632] mb-6">
                      最も重視するポイントは？
                    </p>
                    <div className="grid gap-3">
                      {[
                        { value: "cost", label: "コスパ（できるだけ安く）" },
                        { value: "freshness", label: "鮮度（長持ちするお花）" },
                        { value: "design", label: "デザイン（おしゃれさ）" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer("q2", opt.value)}
                          className="text-left bg-[#FBF8F4] border border-[#E8E0D8] rounded-2xl px-6 py-5 hover:border-[#C4877A] hover:bg-[#F9F2F0] transition-all"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {diagnosisStep === 3 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-8 rounded-full bg-[#C4877A] text-white text-sm flex items-center justify-center font-medium">3</span>
                      <span className="text-sm text-[#C4877A]">質問 3/3</span>
                    </div>
                    <p className="text-lg font-medium text-[#3D3632] mb-6">
                      受け取り方法の希望は？
                    </p>
                    <div className="grid gap-3">
                      {[
                        { value: "post", label: "ポスト投函（不在でもOK）" },
                        { value: "hand", label: "手渡し（大きなアレンジOK）" },
                        { value: "flexible", label: "どちらでもよい" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer("q3", opt.value)}
                          className="text-left bg-[#FBF8F4] border border-[#E8E0D8] rounded-2xl px-6 py-5 hover:border-[#C4877A] hover:bg-[#F9F2F0] transition-all"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {diagnosisStep === 4 && result && (
                  <div className="text-center">
                    <p className="text-sm text-[#C4877A] tracking-widest mb-3">
                      RESULT
                    </p>
                    <p className="text-lg text-[#6B5F57] mb-2">
                      あなたにおすすめは
                    </p>
                    <p className="heading-serif text-3xl md:text-4xl font-bold text-[#C4877A] mb-5">
                      {recommendationMap[result]?.name}
                    </p>
                    <p className="text-[#6B5F57] mb-8 max-w-md mx-auto leading-relaxed">
                      {recommendationMap[result]?.reason}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`#${result}`}
                        className="inline-block bg-[#C4877A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#A86B5E] transition-all"
                      >
                        詳細を見る
                      </a>
                      <button
                        onClick={resetDiagnosis}
                        className="inline-block bg-white text-[#3D3632] border border-[#E8E0D8] px-8 py-3 rounded-full font-medium hover:bg-[#FBF8F4] transition-all"
                      >
                        もう一度診断する
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Flower Divider ─── */}
        <div className="flower-divider bg-[#FBF8F4]">
          <span className="text-[#C4877A] text-lg">❀</span>
        </div>

        {/* ─── Comparison Table ─── */}
        <section id="comparison" className="py-20 bg-[#FBF8F4]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">COMPARISON</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                お花の定期便 5社比較表
              </h2>
              <p className="text-[#6B5F57]">
                料金・送料・届き方を一目で比較できます
              </p>
            </div>

            <div className="table-wrapper rounded-2xl shadow-sm bg-white overflow-hidden">
              <table className="comparison-table w-full">
                <thead>
                  <tr>
                    <th className="rounded-tl-2xl">サービス</th>
                    <th>最安料金</th>
                    <th>送料</th>
                    <th>届き方</th>
                    <th>花の本数</th>
                    <th>頻度</th>
                    <th className="rounded-tr-2xl">解約条件</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-[#3D3632]">bloomee</td>
                    <td>980円/回</td>
                    <td>385円</td>
                    <td>ポスト投函</td>
                    <td>3本〜</td>
                    <td>隔週</td>
                    <td>4回縛り</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#3D3632]">medelu</td>
                    <td className="text-[#C4877A] font-medium">698円/回</td>
                    <td className="text-[#7A9E7E] font-medium">無料</td>
                    <td>ポスト投函</td>
                    <td>3本〜</td>
                    <td>隔週</td>
                    <td className="text-[#7A9E7E]">縛りなし</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#3D3632]">AND PLANTS</td>
                    <td>1,980円/回</td>
                    <td className="text-[#7A9E7E] font-medium">無料</td>
                    <td>手渡し</td>
                    <td>4〜6本</td>
                    <td>隔週/月1</td>
                    <td className="text-[#7A9E7E]">縛りなし</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#3D3632]">花の定期便</td>
                    <td>1,500円〜/回</td>
                    <td>地域別</td>
                    <td>手渡し</td>
                    <td>5〜7本</td>
                    <td>隔週/月1</td>
                    <td>コース別</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-[#3D3632]">hanameku</td>
                    <td>858円/回</td>
                    <td>一部無料</td>
                    <td>ポスト/手渡し</td>
                    <td>3本〜</td>
                    <td>隔週</td>
                    <td className="text-[#7A9E7E]">縛りなし</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-[#9B8F87] mt-6 text-center">
              ※ 料金は税込み表示です。最新の料金は各公式サイトでご確認ください。
            </p>
          </div>
        </section>

        {/* ─── Individual Service Reviews ─── */}
        <section id="reviews" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">REVIEWS</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                各サービスの詳細レビュー
              </h2>
              <p className="text-[#6B5F57]">
                5つのサービスを徹底的に解説します
              </p>
            </div>

            <div className="space-y-20">
              {services.map((service, idx) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="service-card scroll-mt-24"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E8E0D8]">
                    {/* Service Image Header */}
                    <div className="relative h-56 md:h-72 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="service-card-img w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <p className="text-white/80 text-sm mb-1">
                          {idx + 1}. {service.tagline}
                        </p>
                        <h3 className="heading-serif text-2xl md:text-3xl font-bold text-white">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 md:p-10 space-y-8">
                      {/* Overview */}
                      <div>
                        <h4 className="text-lg font-bold text-[#3D3632] mb-3 flex items-center gap-2">
                          <span className="w-1 h-6 bg-[#C4877A] rounded-full inline-block" />
                          サービス概要
                        </h4>
                        <p className="text-[#6B5F57] leading-[1.9]">
                          {service.overview}
                        </p>
                      </div>

                      {/* Pricing Table */}
                      <div>
                        <h4 className="text-lg font-bold text-[#3D3632] mb-3 flex items-center gap-2">
                          <span className="w-1 h-6 bg-[#C4877A] rounded-full inline-block" />
                          料金プラン
                        </h4>
                        <div className="table-wrapper rounded-xl overflow-hidden border border-[#E8E0D8]">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-[#FBF8F4]">
                                <th className="text-left px-5 py-3.5 font-medium text-[#3D3632]">プラン</th>
                                <th className="text-left px-5 py-3.5 font-medium text-[#3D3632]">料金</th>
                                <th className="text-left px-5 py-3.5 font-medium text-[#3D3632]">花の本数</th>
                                <th className="text-left px-5 py-3.5 font-medium text-[#3D3632]">配送頻度</th>
                              </tr>
                            </thead>
                            <tbody>
                              {service.plans.map((plan) => (
                                <tr key={plan.name} className="border-t border-[#E8E0D8]">
                                  <td className="px-5 py-3.5">{plan.name}</td>
                                  <td className="px-5 py-3.5 font-medium text-[#C4877A]">{plan.price}</td>
                                  <td className="px-5 py-3.5">{plan.flowers}</td>
                                  <td className="px-5 py-3.5">{plan.delivery}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#6B5F57]">
                          <span className="bg-[#FBF8F4] px-3 py-1.5 rounded-full">送料: <strong>{service.shipping}</strong></span>
                          <span className="bg-[#FBF8F4] px-3 py-1.5 rounded-full">届き方: <strong>{service.deliveryMethod}</strong></span>
                          <span className="bg-[#FBF8F4] px-3 py-1.5 rounded-full">解約: <strong>{service.cancellation}</strong></span>
                        </div>
                      </div>

                      {/* Pros & Cons */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#E8F0E9] rounded-2xl p-6">
                          <h4 className="font-bold text-[#5C7F60] mb-4">メリット</h4>
                          <ul className="space-y-3">
                            {service.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-2 text-[#3D3632] text-sm leading-relaxed">
                                <span className="text-[#7A9E7E] mt-0.5 shrink-0">&#10003;</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-[#F9F2F0] rounded-2xl p-6">
                          <h4 className="font-bold text-[#A86B5E] mb-4">デメリット</h4>
                          <ul className="space-y-3">
                            {service.cons.map((con) => (
                              <li key={con} className="flex items-start gap-2 text-[#3D3632] text-sm leading-relaxed">
                                <span className="text-[#C4877A] mt-0.5 shrink-0">&#9651;</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Recommended For */}
                      <div className="bg-[#FBF8F4] rounded-2xl p-6 border border-[#E8E0D8]">
                        <h4 className="font-bold text-[#3D3632] mb-3">
                          こんな方におすすめ
                        </h4>
                        <ul className="space-y-2">
                          {service.recommended.map((rec) => (
                            <li key={rec} className="flex items-start gap-3 text-[#6B5F57] text-sm">
                              <span className="text-[#C4877A] shrink-0">&#9656;</span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Purpose-based Recommendations ─── */}
        <section id="purpose" className="py-20 bg-[#FBF8F4]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">FOR YOU</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                目的別おすすめサービス
              </h2>
              <p className="text-[#6B5F57]">
                あなたの目的に合ったサービスを見つけましょう
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {purposes.map((purpose) => (
                <div
                  key={purpose.title}
                  className="bg-white rounded-2xl p-7 hover:shadow-md transition-all border border-[#E8E0D8] group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{purpose.icon}</span>
                    <h3 className="text-lg font-bold text-[#3D3632]">
                      {purpose.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#6B5F57] mb-5 leading-relaxed">
                    {purpose.description}
                  </p>
                  <div className="space-y-2 mb-5">
                    {purpose.services.map((s) => (
                      <p key={s} className="text-sm text-[#6B5F57] flex items-start gap-2">
                        <span className="text-[#C4877A] shrink-0">-</span>
                        {s}
                      </p>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-[#C4877A] bg-[#F9F2F0] inline-block px-3 py-1 rounded-full">
                    イチオシ: {purpose.best}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How to Choose ─── */}
        <section id="how-to-choose" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">HOW TO CHOOSE</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                お花の定期便の選び方
              </h2>
              <p className="text-[#6B5F57]">
                失敗しないために押さえておきたい5つのポイント
              </p>
            </div>

            <div className="relative">
              <img
                src="/images/section-guide.jpg"
                alt=""
                className="w-full h-40 md:h-52 object-cover rounded-3xl mb-12"
              />
              <div className="space-y-8">
                {howToChoose.map((item, idx) => (
                  <div key={item.title} className="flex gap-5 md:gap-8 items-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-[#C4877A] text-white flex items-center justify-center font-bold text-lg heading-serif">
                      {idx + 1}
                    </div>
                    <div className="flex-1 pb-8 border-b border-[#E8E0D8] last:border-b-0">
                      <h3 className="text-lg font-bold text-[#3D3632] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#6B5F57] leading-[1.9]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-20 bg-[#FBF8F4]">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm text-[#C4877A] tracking-widest mb-3">FAQ</p>
              <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-4">
                よくある質問
              </h2>
              <p className="text-[#6B5F57]">
                お花の定期便に関する疑問にお答えします
              </p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E8E0D8]"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#FBF8F4] transition-colors"
                  >
                    <span className="font-medium text-[#3D3632]">
                      Q. {item.q}
                    </span>
                    <span
                      className={`text-[#C4877A] text-xl shrink-0 transition-transform duration-300 ${
                        openFaq === idx ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-[#6B5F57] leading-[1.9] border-t border-[#E8E0D8] pt-4">
                      A. {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Summary + CTA ─── */}
        <section className="relative py-20 overflow-hidden">
          <img
            src="/images/section-lifestyle.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm text-[#C4877A] tracking-widest mb-3">SUMMARY</p>
            <h2 className="heading-serif text-3xl md:text-4xl font-bold text-[#3D3632] mb-8">
              自分に合ったお花の定期便を<br className="hidden md:inline" />選びましょう
            </h2>
            <div className="text-left bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 mb-10 text-[#6B5F57] leading-[1.9] space-y-4 shadow-sm border border-[#E8E0D8]">
              <p>
                お花の定期便は、忙しい毎日の中に彩りを添えてくれるサービスです。
                この記事では人気5社を比較してきましたが、それぞれに特徴があり、一概に「これが一番」とは言えません。
              </p>
              <p>大切なのは、あなたのライフスタイルに合ったサービスを選ぶことです。</p>
              <ul className="space-y-3 my-4">
                {[
                  { label: "初心者で手軽に始めたいなら", value: "bloomee" },
                  { label: "コスパ最優先なら", value: "medelu（送料無料で698円〜）" },
                  { label: "おしゃれなお花が欲しいなら", value: "AND PLANTS" },
                  { label: "鮮度重視なら", value: "花の定期便（農家直送）" },
                  { label: "縛りなしで気軽に試したいなら", value: "hanameku" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-[#C4877A] shrink-0 mt-1">&#9656;</span>
                    <span>
                      <strong className="text-[#3D3632]">{item.label}</strong> → {item.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p>
                迷ったら、まずは安いプランやお試しキャンペーンから始めてみることをおすすめします。
                実際に届いたお花を見て、自分の好みに合うかどうかを確かめるのが一番確実な方法です。
              </p>
            </div>
            <a
              href="#diagnosis"
              className="inline-block bg-[#C4877A] text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-[#A86B5E] transition-all hover:shadow-lg"
            >
              もう一度診断してみる
            </a>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-[#3D3632] text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🌷</span>
                <img src="/images/logo-flwdeli-a1-trimmed.png" alt="flowerデリ" className="h-12 w-auto brightness-0 invert opacity-80 mb-2" />
                <h3 className="heading-serif font-bold text-lg">flowerデリ</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                お花の定期便（花のサブスク）の比較情報サイトです。各サービスの料金、届き方、口コミなどを徹底調査し、あなたにぴったりのサービス選びをサポートします。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider text-gray-300">コンテンツ</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#comparison" className="hover:text-[#C4877A] transition-colors">比較表</a></li>
                <li><a href="#reviews" className="hover:text-[#C4877A] transition-colors">サービス詳細</a></li>
                <li><a href="#purpose" className="hover:text-[#C4877A] transition-colors">目的別おすすめ</a></li>
                <li><a href="#how-to-choose" className="hover:text-[#C4877A] transition-colors">選び方ガイド</a></li>
                <li><a href="#faq" className="hover:text-[#C4877A] transition-colors">よくある質問</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider text-gray-300">サービス一覧</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#bloomee" className="hover:text-[#C4877A] transition-colors">bloomee（ブルーミー）</a></li>
                <li><a href="#medelu" className="hover:text-[#C4877A] transition-colors">medelu（メデル）</a></li>
                <li><a href="#andplants" className="hover:text-[#C4877A] transition-colors">AND PLANTS</a></li>
                <li><a href="#hananoteikibin" className="hover:text-[#C4877A] transition-colors">花の定期便</a></li>
                <li><a href="#hanameku" className="hover:text-[#C4877A] transition-colors">hanameku（ハナメク）</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              当サイトはアフィリエイトプログラムに参加しています。掲載情報は記事執筆時点のものです。最新情報は各公式サイトでご確認ください。
            </p>
            <p className="text-xs text-gray-500 mt-2">
              &copy; 2026 flowerデリ All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
