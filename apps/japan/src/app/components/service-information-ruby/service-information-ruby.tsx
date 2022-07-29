import ServiceInfoCard from './service-info-card'
import {IServiceInformationRuby} from "./models"
  
export function ServiceInformationRuby(){
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
              desc: "",
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
                text: "担当校正者への質問は何回でも"
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
                CTAdetails: "サービスの詳細はこちら>>"
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
                desc: "",
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
                  text: "担当校正者への質問何回でも無料！<無料"
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
                    CTAdetails: "サービスの詳細はこちら>>"
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
            desc: "",
            benefit: {
                        text: "【5月の特典】トップジャーナル英文校正サービスが今だけ10%割引（1単語 30円 27円～）",
                        className: "bg-opal-delta",
                path:"/assets/images/icons/discount-icon.svg"
            },
            listHeading: "[充実の校正サポート]",
            list: [{
                path: "/assets/images/icons/check-round-small.svg",
                text: "365日間何度でも無料フォーマット調整＊投稿先を何度変更しても追加料金無し！"
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
                CTAdetails: "サービスの詳細はこちら>>"
            }
            }
          ]
    }
    return (
<section className="py-10">
  <div className="container">
    <h2 className="font-pb text-center text-ruby-alpha text-5xl mb-8 sm:text-20 sm:leading-7 sm:mb-3">{params.heading}</h2> 
    {/* <app-markdown>
      <p className="text-base text-center font-pr text-ruby-alpha mx-auto max-w-240 mb-10 leading-6 sm:text-13 sm:mb-6">語彙と文法に特化した校正、論理構造まで踏み込む校正、研究内容まで踏み込む校正。研究者のニーズに合わせて3レベルからご希望の英文校正を選択いただけます。もちろんすべての校正サービスで専門分野のネイティブ2名がお客様の原稿をチェックします。</p>
    </app-markdown> */}

    {params.card.map((card) => (
                            <ServiceInfoCard
                            card={card}
                            ></ServiceInfoCard>
                        ))}

  {/* <div className="text-center mt-10">
    <app-lynk className="btn btn-primary">
      <span className="w-full font-pb mt-2 px-6">サービスを比較する</span>
    </app-lynk>
  </div> */}
   
  </div>
  </section>
);
        
}
    export default ServiceInformationRuby;
  