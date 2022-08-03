import ServiceInfoCard from './service-info-card'
import {IServiceInformationRuby} from "./models"
import MarkDown from '../markdown/markdown';
import ModalOpal from '../modal-opal/modal-opal';
import {  useState } from 'react';

  
export function ServiceInformationRuby(){
  const [openModal, setOpenModal] = useState(false);

    const params : IServiceInformationRuby = {

        heading: 'エディテージの英文校正サービス',
        subHeading: '語彙と文法に特化した校正、論理構造まで踏み込む校正、研究内容まで踏み込む校正。研究者のニーズに合わせて3レベルからご希望の英文校正を選択いただけます。もちろんすべての校正サービスで専門分野のネイティブ2名がお客様の原稿をチェックします。',
        path: '',
        card: [
          {
            path:  "/assets/images/icons/yellow-star.svg",
            heading: {
              heading: "スタンダード英文校正 >",
              specialHeadingText: "専門分野のネイティブ２名体制で校正",
              headingClassName: "border-pearl-beta",
              comment: "不動の定番",
              path: "/assets/images/icons/yellow-star.svg",
              subHeadingClass: "bg-pearl-beta"
            },
            desc: "圧倒的な発注数を誇る定番の英文校正。徹底的な言語チェックで文法、語彙、専門用語エラーなどを校正するスタンダード英文校正は、品質に妥協せずにリーズナブルな価格 で英文校正を受けたい方に最適です。専門分野のネイティブ校正者２名によるダブルチェックで、365日有効の再校正（１回分） も初回注文時+2円/単語、もしくは60%割引でご利用可能。その他の論文投稿に必要な様々なサポートも無料もしくはオプションで追加可能です。急ぎのアブストラクト校正や、論文以外の用途でも頼れるサービスとして支持を得ています。",
            benefit: {
              text: "【5月の特典】iThenticateを利用した剽窃チェックレポートが今だけ無料。",
              className: "bg-lapis-delta",
              path:"/assets/images/icons/discount-icon.svg",
            },
            listHeading: "[充実の校正サポート]",
            list: [{
              path: "/assets/images/icons/check-round-small.svg",
              text: "フォーマット無料調整"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "担当校正者への質問は何回でも無料"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "納得いくまで書き直します100%品質保証"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "業界最速！最短8.5時間納品"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "リーズナブルに追加365日有効の再校正１回分"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "単語数削減10%まで無料"
            }
            
            ],
            pricing: {
              path1: "/assets/images/icons/watch.svg",
              path2: "/assets/images/icons/wallet.png",
              wordCount: "4,000単語",
              days: "まで4営業日～",
              text: "最短で",
              disclaimer: "*納期の短いハイスピードプラン登場！",
              price: "5円",
              word: "1単語",
              tax: "～(税抜) ",
              CTAdetails: "サービスの詳細はこちら>>",
              ctaLink: "https://app.editage.jp/order/ncf/english-editing/standard-editing/document",
              link: "https://www.editage.jp/services/english-editing/standard-editing-plan"
            }
          },
          {
            path:  "/assets/images/icons/yellow-star.svg",
            heading: {
                      heading: "プレミアム英文校正 >",
                specialHeadingText: "論理展開まで踏み込み論旨を明確に",
                headingClassName: "border-garnet-lambda",
                comment: "査読対策オプション有",
                path: "/assets/images/icons/yellow-star.svg",
                subHeadingClass: "bg-garnet-lambda"
            },
            desc: "平均20年以上の経験を持つシニア校正者２名が、英文法・語彙などのチェックにとどまらず論理の流れも校閲し、論旨を際立たせ、 受理率を高めます。再校正も1年間、投稿の前後に関わらず回数も修正量も上限無しでご利用いただけます。更に有料オプションの「査読返答レター英文校正＆再フォーマット調整」 を追加すると、査読者への返信文校正、フォーマット調整（2誌まで）も1年間何度でも無料 に。もしもの際の再投稿時にも安心です。",
            benefit: {
              text: "【5月の特典】iThenticateを利用した剽窃チェックレポートが今だけ無料。",
              className: "bg-garnet-beta",
              path:"/assets/images/icons/discount-icon.svg"
            },
            listHeading: "[充実の校正サポート]",
            list: [{
              path: "/assets/images/icons/check-round-small.svg",
              text: "365日間何度でも無料再校正【修正量の上限20%が撤廃になりました！】"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "フォーマット調整1誌無料「オプション追加」で2誌まで無料にも。"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "「オプション追加で」365日間何度でも査読返信の校正"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "カバーレター作成無料"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "担当校正者への質問は何回でも無料"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "単語数削減20％まで無料"
            }
            
            ],
            pricing: {
                path1: "/assets/images/icons/watch.svg",
                path2: "/assets/images/icons/wallet.png",
                wordCount: "3,000単語",
                days: "単語/1日～",
                text: "最短で",
                disclaimer: "*納期の短いハイスピードプラン登場！",
                price: "11円",
                word: "1単語",
                tax: "～(税抜) ",
              CTAdetails: "サービスの詳細はこちら>>",
              ctaLink: "https://app.editage.jp/order/ncf/english-editing/premium-editing/document",
              link: "https://www.editage.jp/services/english-editing/premium-editing-plan"
            }
          },
          {
            path:  "/assets/images/icons/yellow-star.svg",
            heading: {
                        heading: "トップジャーナル英文校正 >",
                specialHeadingText: "【最高峰】研究内容まで踏み込む英語論文校正！",
                headingClassName: "border-opal-delta1",
                comment: "投稿前査読付き",
                path: "/assets/images/icons/yellow-star.svg",
                subHeadingClass: "bg-opal-delta1"
            },
            desc: "一流ジャーナルでの査読者経験を持つ査読者が、編集で指摘を受けそうな点を洗い出す論文完成度評価レポート、平均20年以上の経験を持つシニア校正者が投稿ジャーナルに合わせ、文体を柔軟に最適化する英文校正。エディテージの「最高品質」サービスです。再校正は1年間、投稿の前後に関わらず回数も修正量も上限無し。査読者への返信文も校正。1年以内なら投稿先を何度変更してもフォーマット調整の追加料金もかかりません。ジャーナルのインパクトファクターの高低にかかわらずご利用いただけます。",
            benefit: {
                        text: "【5月の特典】トップジャーナル英文校正サービスが今だけ10%割引（1単語 30円 27円～）",
                        className: "bg-opal-delta",
                path:"/assets/images/icons/discount-icon.svg"
            },
            listHeading: "[充実の校正サポート]",
            list: [{
              path: "/assets/images/icons/check-round-small.svg",
              text: "365日間何度でも無料フォーマット調整 !!break!!＊投稿先を何度変更しても追加料金無し！"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "365日間何度でも無料再校正＊一回の修正量の上限も無し"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "研究内容に踏み込んだ論文完成度評価レポート"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "365日間何度でも無料査読返信文の校正"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "担当校正者への質問は何回でも無料"
            },
            {
              path: "/assets/images/icons/check-round-small.svg",
              text: "納得いくまで書き直します100%品質保証"
            }
            
            ],
            pricing: {
              path1: "/assets/images/icons/watch.svg",
              path2: "/assets/images/icons/wallet.png",
              wordCount: "4,000単語",
              days: "単語まで4営業日～",
              text: "最短で ",
              disclaimer: "*納期の短いハイスピードプラン登場！",
              price: "30円",
              word: "1単語",
              tax: "～(税抜) ",
              CTAdetails: "サービスの詳細はこちら>>",
              ctaLink: "https://app.editage.jp/order/ncf/english-editing/scientific-editing/document",
              link: "https://www.editage.jp/services/english-editing/top-journal-editing-plan"
                
            }
          }
        ],
        CTAtext: 'サービスを比較する'
    }
    return (
  <section className="py-10">
    <div className="container">
      <h2 className="font-pb text-center text-ruby-alpha text-5xl mb-8 sm:text-20 sm:leading-7 sm:mb-3">{params.heading}</h2> 
      <p className="text-base text-center font-pr text-ruby-alpha mx-auto max-w-240 mb-10 leading-6 sm:text-13 sm:mb-6">{params.subHeading}</p>
      {params.card.map((card, index) => (
        <ServiceInfoCard
          key={index}
          card={card}
          ></ServiceInfoCard>
      ))}
      <div className="text-center mt-10">
        <a onClick={() => {setOpenModal(true);}}className="btn btn-primary">
          <span className="w-full font-pb mt-2 px-6">{params.CTAtext}</span>
        </a>
      </div>
    {openModal && <ModalOpal closeModal={setOpenModal}/>}
  </div>
  </section>
);
        
}
    export default ServiceInformationRuby;
  
