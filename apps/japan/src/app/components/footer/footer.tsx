import pageService from '../../services/renderer/page-service';
const partner = pageService.getPartner();
export function Footer() {

return (
  <>
  { partner == "JPN" &&  <div className="bg-pearl-alpha w-full float-left">
    <section className="container">
        <div className="wrapper pt-15 pb-10 sm:pt-8">
          <div className="flex justify-between sm:block">
              <div className="float-left sm:w-1/2 mb-3">
                <h6 className="uppercase mb-3 text-white tracking-wider font-sb sm:mb-0">サービス</h6>
                <ul className="footer-links">
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/english-editing/top-journal-editing-plan">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">トップジャーナル英文校正</span>
                      </a>
                    </span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                    <a href="https://www.editage.jp/services/english-editing/premium-editing-plan">
                      <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">プレミアム英文校正</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/english-editing/standard-editing-plan">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">スタンダード英文校正</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/translation/top-journal-translation-plan">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">トップジャーナル学術翻訳</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/translation/premium-translation-plan">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">プレミアム学術翻訳</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/translation/standard-translation-plan">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">スタンダード学術翻訳</span>
                      </a>
                    </span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/publishing-services-packs/writing-plus-full-publication-support">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">論文執筆＋ 投稿フルサポート</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/publishing-services-packs/full-publication-support">
                      <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">投稿フルサポート</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/publishing-services-packs/express-submission-support">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">投稿お急ぎサポートパック</span>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="float-left sm:w-1/2 mb-3">
                <h6 className="uppercase mb-3 text-white tracking-wider font-sb sm:mb-0">サービス</h6>
                <ul className="footer-links">
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/other/literature-review">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">先行文献検索サポート</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/media/english-narration" target="_self">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">英語ナレーション</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/media/transcription" target="_self">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">テープ起こし</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/media/transcription-plus-translation" target="_self">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">テープ起こし＋翻訳</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.editage.jp/services/media/caption-subtitle-creation" target="_self">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">キャプション・サブタイトル作成</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a data-description="footer-services-null-click-translation premium-null-null" href="https://www.editage.jp/services/english-editing/book-editing">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">書籍英文校正</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a data-description="footer-services-null-click-translation premium-null-null" href="https://www.editage.jp/services/translation/book-translation">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">書籍翻訳・英文校正</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a data-description="footer-services-null-click-pss writing-null-null" href="https://www.editage.jp/services/translation/english-to-japanese">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">英和翻訳</span></a></span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a data-description="footer-services-null-click-translation basic-null-null" href="https://www.editage.jp/services/translation/basic-translation-plan">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">ベーシック翻訳</span>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="clearfix hidden sm:block"></div>
              <div className="float-left sm:w-1/2 mb-3">
                <h6 className="uppercase mb-3 text-white tracking-wider font-sb sm:mb-0">エディテージの利点</h6>
                <ul className="footer-links">
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a data-description="footer-editage benefits-null-click-testimonials-null-null" href="https://www.editage.jp/testimonials">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">お客様の声</span></a></span>
                    </li>
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a href="https://app.editage.jp/refer-a-friend" target="_blank" rel="noreferrer">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">お友達を紹介する</span></a></span>
                    </li>
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a data-description="footer-editage benefits-null-click-editage for lab-null-null" href="https://www.editage.jp/services/editage-for-lab">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">研究室向けグループプログラム</span></a></span>
                    </li>
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a href="https://www.editage.jp/journal" target="_blank" rel="noreferrer" data-description="footer-editage benefits-null-click-journal pages-null-null">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">ジャーナル検索</span></a></span>
                    </li>
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a data-description="footer-editage benefits-null-click-subject areas-null-null" href="https://www.editage.jp/subject-expertise">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">対応分野・専門分野</span></a></span>
                    </li>
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a data-description="footer-editage benefits-null-click-types of document-null-null" href="https://www.editage.jp/types-of-document">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">対応可能な原稿の種類</span></a></span>
                    </li>
                </ul>
              </div>
              <div className="float-left sm:w-1/2 mb-3">
                <h6 className="uppercase mb-3 text-white tracking-wider font-sb sm:mb-0">エディテージについて</h6>
                <ul className="footer-links">
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a data-description="footer-about editage-null-click-about us-null-null" href="https://www.editage.jp/about">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">会社概要</span></a></span>
                    </li>
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a href="https://www.editage.jp/info/news/" target="_blank" rel="noreferrer" data-description="footer-about editage-null-click-news-null-null">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">ニュース</span></a></span>
                    </li>
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a data-description="footer-about editage-null-click-partner with us-null-null" href="https://www.editage.jp/partner-with-us">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">パートナー契約について</span></a></span>
                    </li>
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a data-description="footer-editage benefits-null-click-privacy-null-null" href="https://www.editage.jp/privacy">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">個人情報保護方針</span></a></span>
                    </li>
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a data-description="footer-editage benefits-null-click-tokushou-null-null" href="https://www.editage.jp/tokushou">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">特定商取引法に基づく表記</span></a></span>
                    </li>
                    <li className="mb-1 mt-2.5 sm:mb-0">
                      <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                        <a data-description="footer-editage benefits-null-click-terms of use-null-null" href="https://www.editage.jp/terms-of-use">
                          <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">ご利用規約</span></a></span>
                    </li>
                </ul>
              </div>
              <div className="clearfix hidden sm:block"></div>
              <div className="float-left sm:w-1/2 mb-3">
                <h6 className="uppercase mb-3 text-white tracking-wider font-sb sm:mb-0">お問い合わせ</h6>
                <ul className="footer-links">
                  <li>
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out pointer-events-none">
                    <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">
                      ＜メールでのお問い合わせ＞
                    </span>
                  </span>
                  </li>
                  <li>
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out pointer-events-none">
                      <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">月～金 9:30～24:00</span>
                    </span>
                  </li>
                  <li>
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out pointer-events-none">
                      <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">土 12:30～21:30</span>
                    </span>
                  </li>
                  <li>
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out pointer-events-none">
                      <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">＜電話窓口＞</span>
                    </span>
                  </li>
                  <li>
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out pointer-events-none">
                      <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">月～金 9:30～21:00</span>
                    </span>
                  </li>
                  <li>
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out pointer-events-none">
                      <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">土 12:30～21:30</span>
                    </span>
                  </li>
                  <li>
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out pointer-events-none">
                      <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">＜論文投稿支援特別窓口＞</span>
                    </span>
                  </li>
                  <li>
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out pointer-events-none">
                      <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">月～金 11:00～21:00</span>
                    </span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="tel:0120502987"><span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">電話：0120-50-2987</span>
                    </a>
                  </span>
                  </li>
                  <li className="mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="mailto:submissions@editage.com">
                        <span className="block text-sm font-ssb sm:text-xxxs md:text-xsm text-white hover:text-white">submissions@editage.com</span>
                      </a>
                    </span>
                  </li>
                  <li className="inline-block mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://www.facebook.com/EditageJapan" target="_blank" rel="noreferrer">
                        <span className="w-4 h-4 inline-block bg-no-repeat bg-contain bg-center sm:mt-3 mr-4"
                    style={{backgroundImage: `url('/assets/images/icons/facebook.svg')`}}></span></a></span>
                  </li>
                  <li className="inline-block mb-1 mt-2.5 sm:mb-0">
                    <span className="text-white opacity-75 hover:opacity-100 transition duration-300 ease-in-out">
                      <a href="https://twitter.com/editagejapan" target="_blank" rel="noreferrer">
                        <span className="w-4 h-4 inline-block bg-no-repeat bg-contain bg-center sm:mt-3 mr-4  "
                          style={{backgroundImage: `url('/assets/images/icons/twitter.svg')`}}></span></a></span>
                  </li>
                </ul>
              </div>
          </div>
          <div className="clearfix"></div>
          <div className="w-full h-1 border-t my-5 border-ruby-gamma"></div>
          <div className="w-full float-left sm:flex sm:flex-col">
              <div className="w-1/2 float-left sm:w-full sm:order-last">
                <div className="flex mb-1 sm:flex">
              <span className="font-ssb inline-block leading-5 pointer-events-none sm:leading-4 text-opacity-70 text-white">
                <span className="text-white text-xsm">{'カクタス・コミュニケーションズ株式会社　東京都千代田区神田三崎町2-4-1 TUG-I ビル 4F'}</span>
              </span>
                </div>
              </div>
          </div>
          <div className="clearfix"></div>
          <div className="w-full h-1 border-t inline-block sm:pb-3 sm:mt-3 pb-4 mt-5 border-ruby-gamma"></div>
          <div className="w-full float-left sm:flex-col flex">
            <div className="w-1/2 md:w-2/5 sm:w-full float-left items-center">
              <span className="font-ssb text-white text-opacity-70 text-xs leading-14 tracking-wider uppercase sm:tracking-widesmall sm:text-10 sm:leading-3 sm:mb-0.75 md:text-sm md:leading-18 mb-2">
                SOLUTIONS BY
              </span>
              <span className="block">
                <a href="https://researcher.life/ja/?utm_source=editage.jp&utm_medium=referral&utm_campaign=footer-logo" target="_blank" rel="noreferrer">
                  <span className="block mt-2 mb-3 w-75 h-4 bg-no-repeat bg-contain bg-left sm:mt-0.75 sm:mb-2.75 sm:h-3.2 sm:w-32 md:w-55 md:h-6.5 md:mt-2 md:mb-5"
                  style={{ backgroundImage: `url('assets/images/r-logos/researcher-life.svg')` }}></span>
                </a>
              </span>
              <div>
                <p className="text-white text-opacity-70 text-xs font-ssb leading-28 sm:text-10 sm:leading-4 md:text-sm md:leading-21">
                  Cactus Communications. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="w-1/2 md:w-3/5 sm:w-full float-left flex flex-wrap items-center justify-end sm:justify-start">
              <div className="sm:mt-6">
                <span className="inline-block md:block sm:block pointer-events-none">
                  <a href="https://www.editage.jp/">
                    <span className="align-middle bg-contain bg-left bg-no-repeat h-4.5 inline-block md:h-6 md:mb-2 md:ml-3 md:mt-3.5 md:w-20.75 mr-1 my-3 sm:h-4.5 sm:mb-2 sm:mt-0 sm:w-17 w-17"
                      style={{ backgroundImage: `url('assets/images/r-logos/editage.svg')` }}></span>
                  </a>
                </span>
                <span className="inline-block">
                  <a href="https://discovery.researcher.life/?utm_source=editage.jp&utm_medium=referral&utm_campaign=footer-rdiscovery-logo" target="_self">
                    <span className="align-middle bg-contain bg-left bg-no-repeat h-5.5 inline-block md:h-6.5 md:my-0 md:w-26.25 ml-3 my-3 sm:h-4.5 sm:ml-0 sm:mr-2 sm:my-0 sm:w-17.5 w-20  "
                      style={{ backgroundImage: `url('assets/images/r-logos/r-discovery.svg')` }}></span>
                  </a>
                </span>
                <span className="inline-block">
                  <a href="https://pubsure.researcher.life/?utm_source=editage.jp&utm_medium=referral&utm_campaign=footer-rpubsure-logo" target="_self">
                    <span className="align-middle bg-contain bg-left bg-no-repeat h-5.5 inline-block md:h-7.5 md:my-0 md:w-22.5 ml-3 my-3 sm:h-4.5 sm:ml-0 sm:mr-2 sm:my-0 sm:w-15 w-17.5  "
                      style={{ backgroundImage: `url('assets/images/r-logos/r-pubsure.svg')` }}></span>
                  </a>
                </span>
                <span className="inline-block">
                  <a href="https://upskill.researcher.life/?utm_source=editage.jp&utm_medium=referral&utm_campaign=footer-rupskill-logo" target="_self">
                    <span className="align-middle bg-contain bg-left bg-no-repeat h-5.5 inline-block md:h-6.75 md:my-0 md:w-20 ml-3 my-3 sm:h-4.5 sm:ml-0 sm:mr-2 sm:my-0 sm:w-13 w-15  "
                      style={{ backgroundImage: `url('assets/images/r-logos/r-upskill.svg')` }}></span>
                  </a>
                </span>
                <span className="inline-block">
                  <a href="https://voice.researcher.life/?utm_source=editage.jp&utm_medium=referral&utm_campaign=footer-rvoice-logo" target="_self">
                    <span className="align-middle bg-contain bg-left bg-no-repeat h-5.5 inline-block md:h-7.5 md:my-0 md:w-17.5 ml-3 my-3 sm:h-4.5 sm:ml-0 sm:mr-2 sm:my-0 sm:w-12 w-13  "
                      style={{ backgroundImage: `url('assets/images/r-logos/r-voice.svg')` }}></span>
                  </a>
                </span>
                <span className="inline-block">
                  <a href="https://covid19.researcher.life/?utm_source=editage.jp&utm_medium=referral&utm_campaign=footer-rconcept-logo" target="_self">
                    <span className="align-middle bg-contain bg-left bg-no-repeat h-5.5 inline-block md:h-6.75 md:my-0 md:w-22.5 ml-3 my-3 sm:h-4.5 sm:ml-0 sm:mr-2 sm:my-0 sm:w-15 w-17.5  "
                      style={{ backgroundImage: `url('assets/images/r-logos/r-concept.svg')` }}></span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
  }

  {partner == "KOR" && <section className="w-full">
    <div className="bg-slate-800 py-10">
      <div className="container">
        <div className="flex justify-between sm:flex-col">
          <div>
            <div className="w-33 h-12.5 mb-2 bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(/assets/images/logo/white-editage-logo.svg)"}}></div>
            <p className="text-white text-xs font-ssb leading-6">(주)캑터스 커뮤니케이션즈코리아</p>
            <p className="text-white text-xs font-ssb leading-6 mt-2.5">서울특별시 마포구 월드컵북로 22 영준빌딩 4층 <br /> 대표자: 박기서 | 개인정보관리책임자: Abhishek Goel <br /> 사업자등록번호:220-88-09073 | 통신판매업신고번호: 제2011-서울마포-1692</p>
            <div className="flex mt-2.5">
              <div className="w-14 h-8.75 bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(/assets/images/korea/partners/csba-logo.png)"}}></div>
              <div className="w-48 h-8.75 bg-contain bg-center bg-no-repeat ml-2.5" style={{backgroundImage: "url(/assets/images/korea/partners/ksi-emblem.png)"}}></div>
              <div className="w-30 h-8.75 bg-contain bg-center bg-no-repeat ml-2.5" style={{backgroundImage: "url(/assets/images/korea/partners/quality-assurance.png)"}}></div>
            </div>
          </div>
          <div className="sm:mt-5">
            <p className="text-white text-xs font-ssb leading-6"><span className="font-sb">고객센터</span> <br /> (TEL) 02-3478-4396 <span className="ml-2.5"> (Fax) 02-703-3177 </span> <br /> (Email) submit-korea@editage.com</p>
            <p className="text-white text-xs font-ssb leading-6 mt-2.5">월-금 9:00 ~ 18:00 토/일 12:30 ~ 21:30</p>
            <p className="text-white text-xs font-ssb leading-6 mt-2.5">*작업 접수는 24시간 가능합니다.</p>
            <div className="flex mt-2.5">
              <div className="w-80 h-8.75 bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(/assets/images/korea/partners/payment.png)"}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-ruby-beta">
      <p className="text-white text-xs font-ssb leading-6 py-1.5 text-center">© 2002 - 2022 CACTUS COMMUNICATIONS, ALL RIGHT RESERVED.</p>
    </div>
  </section>}
</>
 );
}

export default Footer;
