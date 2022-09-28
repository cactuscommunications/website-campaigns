import { useState } from 'react';
import pageService from '../../services/renderer/page-service';

export function MobileNav() {

  const [showServices, setShowServices] = useState(false);
  const [showWhyChooseUs, setShowWhyChooseUs] = useState(false);
  const [showPrices, setShowPrices] = useState(false);
  const rightArrow = '/assets/images/icons/angle-right.svg';
  const downArrow = '/assets/images/icons/angle-down.svg';
  const partner = pageService.getPartner();
  return (
  <div className="w-full float-left my-auto px-4">
      {partner == "JPN" && <div className="w-full float-left">
      <div className="pl-1 pr-5 py-2.5 relative border-b border-gray-400">
        <a onClick={() => setShowServices(!showServices)} className="block text-sm" href="javascript:void(0);" data-description="hp-top nav-<services>-null-click-<top-navigation>-null"> サービス
        <span className="inline-block float-right w-4 h-2.5 bg-no-repeat bg-contain bg-right mt-4 absolute right-0 top-0 mr-3"
          style={{ backgroundImage: `url(${showServices ? downArrow : rightArrow})` }}></span>
        </a>
        { showServices ? <div>
          <div className="pl-2.5 ">
              <a className="block text-sm py-2" data-description="hp-top nav-<english-editing>-null-click-<top-navigation>-null" href="https://www.editage.jp/services/english-editing" > 英文校正
                <span className="inline-block uppercase text-xxxs tracking-wider font-sb py-0.5 px-1.6 rounded-sm leading-14 ">当日納品から対応</span>
              </a>
          </div>
          <div className="pl-2.5 ">
            <a className="block text-sm py-2" data-description="hp-top nav-<translation>-null-click-<top-navigation>-null" href="https://www.editage.jp/services/translation"> 学術翻訳 </a>
          </div>
          <div className="pl-2.5 ">
            <a className="block text-sm py-2" data-description="hp-top nav-<publishing-services-packs>-null-click-<top-navigation>-null" href="https://www.editage.jp/services/publishing-services-packs"> 投稿支援・論文作成</a>
          </div>
          <div className="pl-2.5 ">
            <a className="block text-sm py-2" data-description="hp-top nav-<research-promotion>-null-click-<top-navigation>-null" href="https://www.editage.jp/services/research-promotion"> リサーチプロモーション</a>
          </div>
          <div className="pl-2.5 ">
            <a className="block text-sm py-2" href="https://www.editage.jp/info/services/conference/" target="_self" data-description="hp-topnav-serviceselection-VirtualConference-null-click-null-null"> 学会用プレゼンテーション制作</a>
          </div>
        </div> : null } 
        
      </div>
      <div className="pl-1 pr-5 py-2.5 relative border-b border-gray-400">
        <a onClick={() => setShowWhyChooseUs(!showWhyChooseUs)} className="block text-sm" href="javascript:void(0);" data-description="hp-top nav-<why-choose-us-links>-null-click-<top-navigation>-null"> 選ばれる理由
          <span className="inline-block float-right w-4 h-2.5 bg-no-repeat bg-contain bg-right mt-4 absolute right-0 top-0 mr-3"
            style={{ backgroundImage: `url(${showWhyChooseUs ? downArrow : rightArrow})` }}></span>
        </a>
        { showWhyChooseUs ? <div>
          <div className="pl-2.5 ">
          <a className="block text-sm py-2"  data-description="hp-top nav-<why-choose-us>-null-click-<top-navigation>-null" href="https://www.editage.jp/why-choose-us" > エディテージが選ばれる理由 </a>
          </div>
          <div className="pl-2.5 ">
            <a className="block text-sm py-2"  data-description="hp-top nav-<guaranteed-quality>-null-click-<top-navigation>-null" href="https://www.editage.jp/quality" > 品質保証 </a>
          </div>
          <div className="pl-2.5 ">
            <a className="block text-sm py-2"  data-description="hp-top nav-<subject-areas-expertise>-null-click-<top-navigation>-null" href="https://www.editage.jp/subject-expertise" > 対応分野・専門分野 </a>
          </div>
          <div className="pl-2.5 ">
            <a className="block text-sm py-2" href="https://www.editage.jp/insights/" target="_blank" data-description="hp-top nav-insights-null-click-<top-navigation>-null" > エディテージインサイト </a>
          </div>
          <div className="pl-2.5 ">
            <a className="block text-sm py-2"  data-description="hp-top nav-<why-choose-us>-null-click-<researcher-life>-null" href="https://www.editage.jp/researcher-life" > Researcher.Life </a>
          </div>
        </div> : null }
      </div>
      <div className="pl-1 pr-5 py-2.5 relative border-b border-gray-400">
        <a className="block text-sm" href="https://www.editage.jp/payments" target="_blank" data-description="hp-top nav-payments-null-click-<top-navigation>-null"> お支払い</a>
      </div>
      <div className="pl-1 pr-5 py-2.5 relative border-b border-gray-400">
        <a onClick={() => setShowPrices(!showPrices)}  className="block text-sm" href="javascript:void(0);" data-description="hp-top nav-pricing-null-click-<top-navigation>-null"> 料金と納期
          <span className="inline-block float-right w-4 h-2.5 bg-no-repeat bg-contain bg-right mt-4 absolute right-0 top-0 mr-3"
            style={{ backgroundImage: `url(${showPrices ? downArrow : rightArrow})` }}></span>
        </a>
        { showPrices ? <div>
          <div className="pl-2.5">
            <a className="block text-sm py-2" data-description="topnavigation-pricing-editingpricing-click" href="https://www.editage.jp/services/english-editing/price-delivery"> 英文校正サービスの料金と納期 </a>
          </div>
          <div className="pl-2.5">
            <a className="block text-sm py-2" data-description="topnavigation-pricing-translationpricing-click" href="https://www.editage.jp/services/translation/price-delivery"> 和英翻訳サービスの料金と納期 </a>
          </div>
          <div className="pl-2.5">
            <a className="block text-sm py-2" data-description="topnavigation-pricing-psspricing-click" href="https://www.editage.jp/services/publishing-services-packs/price-delivery"> 投稿支援サービスの料金と納期 </a>
          </div>
        </div> : null }
      </div>
      <div className="pl-1 pr-5 py-2.5 relative border-b border-gray-400">
        <a className="block text-sm" href="tel:0120502987" data-description="hp-top nav-contact-null-click-<top-navigation>-null"> 0120-50-2987 </a>
      </div>
      <div className="pl-1 pr-5 py-2.5 relative border-b border-gray-400">
        <a className="block text-sm" data-description="hp-top nav-help-null-click-<top-navigation>-null" href="https://www.editage.jp/help"> ヘルプ </a>
      </div>
      <div className="pl-1 pr-5 py-2.5 relative border-b border-gray-400 hidden">
        <a className="block text-sm" href="https://app.editage.jp" target="_self" data-description="hp-top nav-myaccount-null-click-<top-navigation>-null"> My dashboard </a>
      </div>
    </div>
      }
      {partner == "KOR" && <div className="w-full float-left">
        <div className="pl-1 pr-5 py-2.5 relative border-b border-gray-400">
          <a className="block text-sm" href="https://www.editage.co.kr/editing/" target="_blank" data-description="hp-top nav-payments-null-click-<top-navigation>-null">영문교정</a>
        </div>
        <div className="pl-1 pr-5 py-2.5 relative border-b border-gray-400">
          <a className="block text-sm" href="https://www.editage.co.kr/translation/" target="_blank" data-description="hp-top nav-payments-null-click-<top-navigation>-null">학술번역</a>
        </div>
        <div className="pl-1 pr-5 py-2.5 relative border-b border-gray-400">
          <a className="block text-sm" href="https://www.editage.co.kr/publication/" target="_blank" data-description="hp-top nav-payments-null-click-<top-navigation>-null">저널투고</a>
        </div>
      </div>
      }
  </div>

 );
}

export default MobileNav;
