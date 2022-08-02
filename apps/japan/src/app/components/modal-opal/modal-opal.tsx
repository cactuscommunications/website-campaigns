import { MarkDown } from '../markdown/markdown';
const ModalOpal = ({ closeModal}: { closeModal: any }) => {
  const closeIcon = 'assets/images/icons/close.svg'
  return (
    <>
      <div className="overlay flex flex-col fixed top-0 bottom-0 left-0 right-0 items-center justify-center z-10 bg-black/70">
        <div  className="relative">
          <button
            className="button float-right relative top-8 right-10 z-10 focus:outline-none sm:right-4.75"
            onClick={(e) => closeModal(false)}
          >
            <span className="w-3 h-3 float-right inline-block bg-no-repeat bg-cover" style={{backgroundImage: `url(${closeIcon})`}}></span>
          </button>
          <div className="clearfix"></div>
          <div className="bg-white max-h-90vh overflow-y-auto custom-scroll pt-10">
   <div className="container">
      <div className="mb-5 text-center px-10 sm:px-5">
         <h1 className="text-3xl sm:text-xxl md:text-2.5xl text-ruby-alpha">エディテージの英文校正サービス</h1>
         {/* <app-markdown>
            <p className="text-base leading-22 font-ssb px-10 sm:px-0 text-ruby-alpha"> ジャーナル投稿前の英語論文を国際出版レベルの英語に校正する英文校正・英文校閲サービスです。<br>高品質、低価格かつ迅速な納品スピードで論文の英語を出版に適した状態に校正します。<br>納期、予算、 必要な校正レベルに合わせて3つのサービスからお選びいただけます。 </p>
         </app-markdown> */}
      </div>
      <div className="flex justify-center sm:flex-col">
         <div className="bg-white border border-pearl-epsilon1 md:w-77.5 rounded-lg sm:block sm:mb-7.5 sm:mx-auto sm:shadow sm:w-85 w-94">
            <div className="w-full float-left py-2.5 px-2 text-center rounded-t-lg bg-pearl-epsilon1 dyna-height-1 min-h-18 flex justify-center">
                  <p className="text-sm text-white leading-18 font-ssb self-center"><span className=" text-xxl leading-6"><span className="font-sb">スタンダード英文校正</span></span><br/>文単位で英語表現を中心に英語校閲</p>
     
            </div>
            <div className="w-full float-left py-3 px-3 bg-white text-center dyna-height-2 min-h-37 sm:min-h-auto">
               <h3 className="font-sb mb-1 text-pearl-epsilon1"></h3>
               <p className="text-x-base font-ssb mb-2 text-pearl-epsilon1">最速納期！当日納品に対応</p>
                  <p className="text-ruby-alpha text-sm tracking-wider leading-5 font-ssb">英語論文の英文法、スペリング、専門用語の使用を徹底的にブラッシュアップし、ジャーナルの投稿規定に合わせてフォーマット調整します。</p>
            </div>
            <div className="w-full float-left py-2.5 px-1.5 text-center bg-pearl-beta/30 dyna-height-3 min-h-23.75 sm:min-h-auto">
               <p className="text-center flex justify-center mb-2">
                  <p className="text-2xl leading-34 font-sb text-ruby-alpha self-center">
                     5円～
                  </p>
                  <span className="text-ruby-alpha font-ssb text-center text-sm leading-5 self-center">/単語</span><span  className="w-4 h-4 inline-block cursor-pointer bg-no-repeat bg-contain self-center ml-2.5 " style={{ backgroundImage: `url(${'/assets/images/icons/information.svg'})`,}}></span>
               </p>
               <p className="bg-diamond-zeta px-2.5 py-0.5 text-diamond-delta text-sm leading-20 inline-block rounded leading-17">最短当日納品から対応</p>
            </div>
               <div className="bg-pearl-epsilon1 float-left px-1 py-3 text-center w-full">
                  <p className="text-base text-white font-sb tracking-wider leading-5">品質を保証する作業体制</p>
               </div>
               <div className="w-full float-left py-3 px-5 bg-white dyna-height-4 min-h-35.5 sm:min-h-auto">
                  <ul>
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/user-blue1.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block">専門分野英文校正者</p>
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/user-blue1.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block">専門分野レビュアー</p>
                              
                           
                        </div>
                     </li>
                     
                  </ul>
               </div>
            
               <div className="bg-pearl-epsilon1 float-left px-1 py-3 text-center w-full">
                  <p className="text-base text-white font-sb tracking-wider leading-5">無料特典</p>
               </div>
               <div className="w-full float-left py-3 px-5 bg-white dyna-height-5 min-h-97 sm:min-h-auto">
                  <ul>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/user-blue1.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-pearl-epsilon1">単語数削減（10%）</p>
                              
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">リファレンスチェック</p>
                              
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">英語上達アドバイス</p>
                              
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">英文校正証明書</p>
                              
                           
                        </div>
                     </li>
                     
                  </ul>
               </div>
            
               <div className="bg-pearl-epsilon1 float-left px-1 py-3 text-center w-full">
                  <p className="text-base text-white font-sb tracking-wider leading-5">安心＆無料のアフターサポート</p>
               </div>
               <div className="w-full float-left py-3 px-5 bg-white dyna-height-6 min-h-42 sm:min-h-auto">
                  <ul>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/user-blue1.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-pearl-epsilon1">フォーマット調整</p>
                              
                           <p className="bg-diamond-alpha/15 px-2.5 py-0.5 ml-2.5 text-diamond-delta text-xs font-sb leading-17 inline-block rounded">1つの投稿先</p>
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/user-blue1.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">校正者とのQ&amp;A</p>
                              
                           
                        </div>
                     </li>
                     
                  </ul>
               </div>
            
            <div className="w-full float-left pb-6 pt-4 px-5 bg-white rounded-b-lg">
               {/* <app-lynk className="bg-pearl-epsilon1 btn btn-primary hover:shadow-blueBottom w-full">
                  
                  <a queryparamshandling="merge" data-description="editing overview v2-plan selection-standard editing details-click" href="/services/english-editing/standard-editing-plan">
                     <span className="px-3 inline-block font-ssb md:text-xs sm:text-xs">サービスの詳細を確認する&gt;&gt;</span><!---->
                  </a>
                  
               </app-lynk> */}
            </div>
            
            <div className="clearfix"></div>
         </div>
         
         <div className="bg-white border border-garnet-sigma md:w-77.5 rounded-lg sm:block sm:mb-7.5 sm:mx-auto sm:shadow sm:w-85 w-94">
            <div className="w-full float-left py-2.5 px-2 text-center rounded-t-lg bg-garnet-mu dyna-height-1 min-h-18 flex justify-center">
                  <p className="text-sm text-white leading-18 font-ssb self-center"><span className=" text-xxl leading-6"><span className="font-sb">プレミアム英文校正</span></span><br/>論文構成に踏み込んだ英文校閲</p>
                  
            </div>
            <div className="w-full float-left py-3 px-3 bg-white text-center dyna-height-2 min-h-37 sm:min-h-auto">
               <h3 className="font-sb mb-1 text-garnet-sigma"></h3>
               <p className="text-x-base font-ssb mb-2 text-garnet-sigma">365日無料・無制限の再校正つき</p>
                  <p className="text-ruby-alpha text-sm tracking-wider leading-5 font-ssb">英語表現だけでなく、英語論文の文章構成に着目して主題を伝わりやすくし、読みやすさをアップ。無制限再校正を含む論文投稿サポートが無料。</p>
                  
            </div>
            <div className="w-full float-left py-2.5 px-1.5 text-center bg-garnet-mu/30 dyna-height-3 min-h-23.75 sm:min-h-auto">
               <p className="text-center flex justify-center mb-2">
                  
                  <p className="text-2xl leading-34 font-sb text-ruby-alpha self-center">
                     11円～
                  </p>
                  <span className="text-ruby-alpha font-ssb text-center text-sm leading-5 self-center">/単語</span><span className="w-4 h-4 inline-block cursor-pointer bg-no-repeat bg-contain self-center ml-2.5 " style={{ backgroundImage: `url(${'/assets/images/icons/information.svg'})`,}}></span>
               </p>
               <p className="bg-diamond-zeta px-2.5 py-0.5 text-diamond-delta text-sm leading-20 inline-block rounded leading-17">最短当日納品から対応</p>
            </div>
               <div className="bg-garnet-mu float-left px-1 py-3 text-center w-full">
                  <p className="text-base text-white font-sb tracking-wider leading-5">品質を保証する作業体制</p>
               </div>
               <div className="w-full float-left py-3 px-5 bg-white dyna-height-4 min-h-35.5 sm:min-h-auto">
                  <ul>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-5.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block">専門分野シニア英文校正者</p>
                              
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-5.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block">専門分野レビュアー</p>
                              
                           
                        </div>
                     </li>
                     
                  </ul>
               </div>
            
               <div className="bg-garnet-mu float-left px-1 py-3 text-center w-full">
                  <p className="text-base text-white font-sb tracking-wider leading-5">無料特典</p>
               </div>
               <div className="w-full float-left py-3 px-5 bg-white dyna-height-5 min-h-97 sm:min-h-auto">
                  <ul>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-maroon-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-garnet-sigma">論文評価レポート</p>
                                                         
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-maroon-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-garnet-sigma">言語面改善アドバイス</p>
                                                         
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-maroon-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-garnet-sigma">カバーレター作成</p>
                                                         
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-maroon-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-garnet-sigma">単語数削減（20%）</p>
                                                         
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">リファレンスチェック</p>
                                                         
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">英語上達アドバイス</p>
                              
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">英文校正証明書</p>
                                                         
                        </div>
                     </li>
                     
                  </ul>
               </div>
            
               <div className="bg-garnet-mu float-left px-1 py-3 text-center w-full">
                  <p className="text-base text-white font-sb tracking-wider leading-5">安心＆無料のアフターサポート</p>
               </div>
               <div className="w-full float-left py-3 px-5 bg-white dyna-height-6 min-h-42 sm:min-h-auto">
                  <ul>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-maroon-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-garnet-sigma">再校正</p>
                              
                           <p className="bg-diamond-alpha/15 px-2.5 py-0.5 ml-2.5 text-diamond-delta text-xs font-sb leading-17 inline-block rounded">修正量上限無し</p>
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-maroon-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-garnet-sigma">フォーマット調整</p>
                              
                           <p className="bg-diamond-alpha/15 px-2.5 py-0.5 ml-2.5 text-diamond-delta text-xs font-sb leading-17 inline-block rounded">1つの投稿先</p>
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">校正者とのQ&amp;A</p>
                              
                           
                        </div>
                     </li>
                     
                  </ul>
               </div>
            
            <div className="w-full float-left pb-6 pt-4 px-5 bg-white rounded-b-lg">
               {/* <app-lynk className="bg-garnet-sigma btn btn-primary hover:shadow-brownBottom w-full">
                  
                  <a queryparamshandling="merge" data-description="editing overview v2-plan selection-premium editing details-click" href="/services/english-editing/premium-editing-plan">
                     <span className="px-3 inline-block font-ssb md:text-xs sm:text-xs">サービスの詳細を確認する&gt;&gt;</span><!---->
                  </a>
                  
               </app-lynk> */}
            </div>
            
            <div className="clearfix"></div>
         </div>
         
         <div className="bg-white border border-opal-alpha1 md:w-77.5 rounded-lg sm:block sm:mb-7.5 sm:mx-auto sm:shadow sm:w-85 w-94">
            <div className="w-full float-left py-2.5 px-2 text-center rounded-t-lg bg-opal-alpha1 dyna-height-1 min-h-18 flex justify-center">
                  <p className="text-sm text-white leading-18 font-ssb self-center"><span className=" text-xxl leading-6"><span className="font-sb">トップジャーナル英文校正</span></span><br/>投稿前査読つきの英文校閲</p>
                  
            </div>
            <div className="w-full float-left py-3 px-3 bg-white text-center dyna-height-2 min-h-37 sm:min-h-auto">
               <h3 className="font-sb mb-1 text-opal-alpha1"></h3>
               <p className="text-x-base font-ssb mb-2 text-opal-alpha1">査読者による投稿前査読つき</p>
                  <p className="text-ruby-alpha text-sm tracking-wider leading-5 font-ssb">エディテージ最高ランクの英語校閲者に現役のジャーナル査読者が加わり、投稿先ジャーナルに照準を絞ったライティングの徹底改善と投稿前査読を提供。</p>
                  
            </div>
            <div className="w-full float-left py-2.5 px-1.5 text-center bg-opal-alpha1/30 dyna-height-3 min-h-23.75 sm:min-h-auto">
               <p className="text-center flex justify-center mb-2">
                  
                  <p className="text-2xl leading-34 font-sb text-ruby-alpha self-center">
                     30円～
                  </p>
                  <span className="text-ruby-alpha font-ssb text-center text-sm leading-5 self-center">/単語</span><span  className="w-4 h-4 inline-block cursor-pointer bg-no-repeat bg-contain self-center ml-2.5 " style={{ backgroundImage: `url(${'/assets/images/icons/information.svg'})`,}}></span>
               </p>
               <p className="bg-diamond-zeta px-2.5 py-0.5 text-diamond-delta text-sm leading-20 inline-block rounded leading-17">最短4営業日納品から対応</p>
            </div>
               <div className="bg-opal-alpha1 float-left px-1 py-3 text-center w-full">
                  <p className="text-base text-white font-sb tracking-wider leading-5">品質を保証する作業体制</p>
               </div>
               <div className="w-full float-left py-3 px-5 bg-white dyna-height-4 min-h-35.5 sm:min-h-auto">
                  <ul>
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-5.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/user-yellow.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block">専門分野シニア英文校正者</p>
                                                         
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-5.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/user-yellow.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block">専門分野ジャーナル査読者</p>
                                                         
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-5.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/user-yellow.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block">専門分野マネージングエディター</p>                           
                        </div>
                     </li>
                     
                  </ul>
               </div>
            
               <div className="bg-opal-alpha1 float-left px-1 py-3 text-center w-full">
                  <p className="text-base text-white font-sb tracking-wider leading-5">無料特典</p>
               </div>
               <div className="w-full float-left py-3 px-5 bg-white dyna-height-5 min-h-97 sm:min-h-auto">
                  <ul>
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-golden-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-opal-alpha1">論文完成度評価レポート</p>
                              
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-golden-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-opal-alpha1">投稿準備アドバイス</p>
                                                         
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-golden-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-opal-alpha1">言語面改善アドバイス</p>
                              
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-golden-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-opal-alpha1">剽窃チェックレポート <span className="w-21 h-5 bg-contain bg-no-repeat inline-block mx-2 flex-shrink-0 align-text-bottom" style={{ backgroundImage: `url(${'/assets/images/ithenticate-logo.png'})`,}}></span></p>
                              
                           <p className="bg-diamond-alpha/15 px-2.5 py-0.5 ml-2.5 text-diamond-delta text-xs font-sb leading-17 inline-block rounded">365日間回数無制限</p>
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-golden-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-opal-alpha1">カバーレター作成</p>
                              
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-golden-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-opal-alpha1">単語数削減</p>
                              
                           <p className="bg-diamond-alpha/15 px-2.5 py-0.5 ml-2.5 text-diamond-delta text-xs font-sb leading-17 inline-block rounded">上限無制限</p>
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">リファレンスチェック</p>
                                                         
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">英語上達アドバイス</p>
                                                         
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">英文校正証明書</p>
                                                         
                        </div>
                     </li>
                     
                  </ul>
               </div>
            
               <div className="bg-opal-alpha1 float-left px-1 py-3 text-center w-full">
                  <p className="text-base text-white font-sb tracking-wider leading-5">安心＆無料のアフターサポート</p>
               </div>
               <div className="w-full float-left py-3 px-5 bg-white dyna-height-6 min-h-42 sm:min-h-auto">
                  <ul>
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-golden-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-opal-alpha1">査読コメント対策</p>
                                                         
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-golden-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-opal-alpha1">再校正</p>
                              
                           <p className="bg-diamond-alpha/15 px-2.5 py-0.5 ml-2.5 text-diamond-delta text-xs font-sb leading-17 inline-block rounded">修正量上限無し</p>
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/provided-golden-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-opal-alpha1">フォーマット調整</p>
                              
                           <p className="bg-diamond-alpha/15 px-2.5 py-0.5 ml-2.5 text-diamond-delta text-xs font-sb leading-17 inline-block rounded">複数の投稿先</p>
                           
                        </div>
                     </li>
                     
                     <li className="block w-full float-left mb-1.5">
                        <span className="float-left inline-block mr-2.5">
                           <span className="w-4 h-4 mt-2 bg-no-repeat bg-contain flex-shrink-0 inline-block " style={{ backgroundImage: `url(${'/assets/images/icons/check-black-icon.svg'})`,}}></span>
                        </span>
                        <div className="float-left w-4.25/5">
                              <p className="text-sm leading-21 font-ssb inline-block text-ruby-alpha">校正者とのQ&amp;A</p>
                              
                           
                        </div>
                     </li>
                     
                  </ul>
               </div>
            
            <div className="w-full float-left pb-6 pt-4 px-5 bg-white rounded-b-lg">
               {/* <app-lynk className="bg-opal-alpha1 btn btn-primary hover:shadow-goldenBottom w-full">
                  
                  <a queryparamshandling="merge" data-description="editing overview v2-plan selection-sce details-click" href="/services/english-editing/top-journal-editing-plan">
                     <span className="px-3 inline-block font-ssb md:text-xs sm:text-xs">サービスの詳細を確認する&gt;&gt;</span>
                  </a>
                  
               </app-lynk> */}
            </div>
            
            <div className="clearfix"></div>
         </div>
         
      </div>
       <div>
            <div className="container">
               <div className="pt-5 pb-10">
                  <h4 className="font-sb text-center text-20 leading-5 mb-5 text-ruby-alpha">各サービスの利用をおすすめする場面 </h4>
                  <div className="flex flex-row justify-center sm:flex-col">
                     <div className="mx-4 bg-white sm:w-80 sm:mx-auto sm:mb-2 md:mx-2">
                        <div className="bg-pearl-eta/10 h-full md:px-5 md:py-6 md:w-70 px-6.5 py-7.5 sm:mx-auto sm:w-80 w-87.5">
                           <ul>
                              <li className="flex flex-row mb-5 last:mb-0 md:mb-3 sm:mb-3">
                                 <span className="w-3.75 h-4.5 mt-1.5 mr-2 bg-no-repeat bg-contain flex-shrink-0 " style={{ backgroundImage: `url(${'/assets/images/icons/user-blue.svg'})`,}}></span>
                                 <p className="text-ruby-alpha font-ssb text-13 leading-18"> 論文の流れはよくまとまっているため、文章表現のみを英文校正して欲しい </p>
                              </li>
                              <li className="flex flex-row mb-5 last:mb-0 md:mb-3 sm:mb-3">
                                 <span className="w-3.75 h-4.5 mt-1.5 mr-2 bg-no-repeat bg-contain flex-shrink-0 " style={{ backgroundImage: `url(${'/assets/images/icons/user-blue.svg'})`,}}></span>
                                 <p className="text-ruby-alpha font-ssb text-13 leading-18"> 締め切りが近いので、短納期で英語校閲して欲しい </p>
                              </li>
                              <li className="flex flex-row mb-5 last:mb-0 md:mb-3 sm:mb-3">
                                 <span className="w-3.75 h-4.5 mt-1.5 mr-2 bg-no-repeat bg-contain flex-shrink-0 " style={{ backgroundImage: `url(${'/assets/images/icons/user-blue.svg'})`,}}></span>
                                 <p className="text-ruby-alpha font-ssb text-13 leading-18"> 予算が限られている論文以外の大型原稿を低予算で英語校閲したい </p>
                              </li>
                              
                           </ul>
                        </div>
                     </div>
                     <div className="mx-4 bg-white sm:w-80 sm:mx-auto sm:mb-2 md:mx-2">
                        <div className="bg-garnet-alpha/10 h-full md:px-5 md:py-6 md:w-70 px-6.5 py-7.5 sm:mx-auto sm:w-80 w-87.5">
                           <ul>
                              <li className="flex flex-row mb-5 last:mb-0 md:mb-3 sm:mb-3">
                                 <span className="w-3.75 h-4.5 mt-1.5 mr-2 bg-no-repeat bg-contain flex-shrink-0 " style={{ backgroundImage: `url(${'/assets/images/icons/user-brown.svg'})`,}}></span>
                                 <p className="text-ruby-alpha font-ssb text-13 leading-18"> 英語論文の構成に不慣れなため、文章構成も含めて英文校閲して欲しい </p>
                              </li>
                              <li className="flex flex-row mb-5 last:mb-0 md:mb-3 sm:mb-3">
                                 <span className="w-3.75 h-4.5 mt-1.5 mr-2 bg-no-repeat bg-contain flex-shrink-0 " style={{ backgroundImage: `url(${'/assets/images/icons/user-brown.svg'})`,}}></span>
                                 <p className="text-ruby-alpha font-ssb text-13 leading-18"> 英文校正者から英文改善のためのアドバイスが欲しい </p>
                              </li>
                              <li className="flex flex-row mb-5 last:mb-0 md:mb-3 sm:mb-3">
                                 <span className="w-3.75 h-4.5 mt-1.5 mr-2 bg-no-repeat bg-contain flex-shrink-0 " style={{ backgroundImage: `url(${'/assets/images/icons/user-brown.svg'})`,}}></span>
                                 <p className="text-ruby-alpha font-ssb text-13 leading-18"> 一度英文校正にかけた後に何度も論文を修正する可能性がある </p>
                              </li>
                              
                           </ul>
                        </div>
                     </div>
                     <div className="mx-4 bg-white sm:w-80 sm:mx-auto sm:mb-2 md:mx-2">
                        <div className="bg-opal-alpha/10 h-full md:px-5 md:py-6 md:w-70 px-6.5 py-7.5 sm:mx-auto sm:w-80 w-87.5">
                           <ul>
                              <li className="flex flex-row mb-5 last:mb-0 md:mb-3 sm:mb-3">
                                 <span className="w-3.75 h-4.5 mt-1.5 mr-2 bg-no-repeat bg-contain flex-shrink-0 " style={{ backgroundImage: `url(${'/assets/images/icons/user-yellow.svg'})`,}}></span>
                                 <p className="text-ruby-alpha font-ssb text-13 leading-18"> 目標とする投稿先ジャーナルが明確に決まっている </p>
                              </li>
                              <li className="flex flex-row mb-5 last:mb-0 md:mb-3 sm:mb-3">
                                 <span className="w-3.75 h-4.5 mt-1.5 mr-2 bg-no-repeat bg-contain flex-shrink-0 " style={{ backgroundImage: `url(${'/assets/images/icons/user-yellow.svg'})`,}}></span>
                                 <p className="text-ruby-alpha font-ssb text-13 leading-18"> 事前査読を受けて、論文受理の可能性を最大限に高めたい </p>
                              </li>
                              <li className="flex flex-row mb-5 last:mb-0 md:mb-3 sm:mb-3">
                                 <span className="w-3.75 h-4.5 mt-1.5 mr-2 bg-no-repeat bg-contain flex-shrink-0 " style={{ backgroundImage: `url(${'/assets/images/icons/user-yellow.svg'})`,}}></span>
                                 <p className="text-ruby-alpha font-ssb text-13 leading-18"> レベルの高いジャーナルに挑戦するため、複数ジャーナルへの再投稿を視野に入れたい </p>
                              </li>
                              
                           </ul>
                        </div>
                     </div>
                     
                  </div>
               </div>
            </div>
         </div>
      
   </div>
        </div>
         <div className="clearfix"></div>

        </div>
      </div>
    </>
  );
}; 


export default ModalOpal;