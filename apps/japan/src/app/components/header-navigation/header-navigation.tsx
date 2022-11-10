import { BrowserView, MobileView } from 'react-device-detect';

interface IHeaderNavigation {
  id?: string;
  logo?: string;
  link: {
    route?: string;
    tracking: {};
  }
  navigation: INavigation[];
}
interface INavigation {
  name?: string;
}

export function HeaderNavigation({ params }: { params: IHeaderNavigation }){
  return (
    <>
      <BrowserView>
        <header className="w-full fixed bg-white z-10 top-0">
          <div className="px-12.5 md:px-5">
            <section className="w-full flex justify-between items-center">
              <div className="py-2.5">
                <div className="xxl:w-50 w-50 h-10 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${params.logo})` }}>
                {/* /assets/images/logo/editage-eng-20.svg */}
                {params?.link && (
                    <a className="block" href={params?.link.route}><span className="block h-10 invisible xxl:w-50 w-50"></span></a>
                )}
                </div>
              </div>
              <div className="ml-3.5">
                <a className="btn-nav text-sm leading-9 border-none px-7 bg-amber-alpha hover:shadow-sm inline-block hover:text-white" href="#">
                  <span className="font-sb text-sm">概算お見積・ご注文</span>
                </a>
              </div>
            </section>
          </div>
          <div className="bg-pearl-beta px-12.5 md:px-5">
            <section className="w-full py-1.5">
              <ul className="flex w-full">
                <li className="border-r border-ruby-upsilon">
                  <a className="py-1 px-6 md:px-3" href="#">
                    <span className="bg-no-repeat bg-contain inline-block h-4 w-4" style={{ backgroundImage: `url('/assets/images/icons/home-icon.png')` }}></span>
                  </a>
                </li>
                {params.navigation.map((item, index) => (
                <li key={index} className="flex-auto border-r border-ruby-upsilon">
                  <a className="flex justify-center text-sm text-ruby-upsilon hover:text-white" href="#">
                    <span className="py-1 px-6 inline-block md:px-1.2">
                      {item?.name}
                    </span>
                  </a>
                </li>
                ))}
                <li className="flex-auto border-r border-ruby-upsilon">
                  <a className="flex justify-center text-sm text-ruby-upsilon hover:text-white" href="#">
                    <span className="py-1 px-6 inline-block md:px-1.2">
                      学術翻訳
                    </span>
                  </a>
                </li>
                <li className="flex-auto border-r border-ruby-upsilon">
                  <a className="flex justify-center text-sm text-ruby-upsilon hover:text-white" href="#">
                    <span className="py-1 px-6 inline-block md:px-1.2">
                      論文作成・投稿
                    </span>
                  </a>
                </li>
                <li className="flex-auto border-r border-ruby-upsilon">
                  <a className="flex justify-center text-sm text-ruby-upsilon hover:text-white" href="#">
                    <span className="py-1 px-6 inline-block md:px-1.2">
                      対応分野
                    </span>
                  </a>
                </li>
                <li className="flex-auto border-r border-ruby-upsilon">
                  <a className="flex justify-center text-sm text-ruby-upsilon hover:text-white" href="#">
                    <span className="py-1 px-6 inline-block md:px-1.2">
                      品質保証
                    </span>
                  </a>
                </li>
                <li className="flex-auto border-r border-ruby-upsilon">
                  <a className="flex justify-center text-sm text-ruby-upsilon hover:text-white" href="#">
                    <span className="py-1 px-6 inline-block md:px-1.2">
                      お支払い
                    </span>
                  </a>
                </li>
                <li className="flex-auto border-r border-ruby-upsilon">
                  <a className="flex justify-center text-sm text-ruby-upsilon hover:text-white" href="#">
                    <span className="py-1 px-6 inline-block md:px-1.2">
                      会社概要
                    </span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </header>
      </BrowserView>

      <MobileView>
        <header className="w-full fixed bg-white z-10 top-0">
          <section className="w-full flex justify-between items-center px-3.5 py-2.5">
            <div className="xxl:w-48 w-48 h-10 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url('/assets/images/logo/editage-eng-20.svg')` }}>
                <a className="block" href="#"><span className="block h-10 invisible xxl:w-48 w-48"></span></a>
            </div>
            <div className="flex flex-col">
              <div className="mx-auto">
                <span className="block h-1.25 w-8 bg-pearl-epsilon1 mb-1.25"></span>
                <span className="block h-1.25 w-8 bg-pearl-epsilon1 mb-1.25"></span>
                <span className="block h-1.25 w-8 bg-pearl-epsilon1 mb-1.25"></span>
              </div>
              <p className="text-xs font-sb text-pearl-epsilon1 uppercase text-center leading-15">Menu</p>
            </div>
          </section>

          {/* this is for mobile menu */}
          <div className="w-full bg-pearl-epsilon1 fixed top-0 z-10 pt-4 pb-7.5 px-9 hidden">
            <div className="flex justify-between items-center">
              <div className="xxl:w-40 w-40 h-10 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url('/assets/images/logo/editage-20-white-logo.svg')` }}>
                  <a className="block" href="#"><span className="block h-10 invisible xxl:w-40 w-40"></span></a>
              </div>
              <div className="w-8 h-8 border-2 border-white flex justify-center items-center">
                <span className="bg-no-repeat bg-contain h-3.5 w-3.5 inline-block" style={{ backgroundImage: `url('/assets/images/icons/close.png')` }}></span>
              </div>
            </div>
            <div className="py-8 mt-7">
              <ul className="text-center">
                <li>
                  <a className="text-white text-base py-1.5 hover:text-white" href="#">
                    英文校正
                  </a>
                </li>
                <li>
                  <a className="text-white text-base py-1.5 hover:text-white" href="#">
                    学術翻訳
                  </a>
                </li>
                <li>
                  <a className="text-white text-base py-1.5 hover:text-white" href="#">
                    論文作成・投稿
                  </a>
                </li>
                <li>
                  <a className="text-white text-base py-1.5 hover:text-white" href="#">
                    対応分野
                  </a>
                </li>
                <li>
                  <a className="text-white text-base py-1.5 hover:text-white" href="#">
                    品質保証
                  </a>
                </li>
                <li>
                  <a className="text-white text-base py-1.5 hover:text-white" href="#">
                    お支払い
                  </a>
                </li>
                <li>
                  <a className="text-white text-base py-1.5 hover:text-white" href="#">
                    会社概要
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center mb-2">
              <a className="text-white text-sm py-1.5 hover:text-white underline" href="#">
                メンバーログイン
              </a>
              <a className="btn-nav h-8 leading-7 border-none bg-white hover:shadow-sm transition-all duration-100 ease-in inline-block text-ruby-alpha ml-6">
                <span className="font-ssb tracking-wider text-xs">概算お見積・ご注文</span>
              </a>
            </div>
          </div>
        </header>
      </MobileView>
  </>
 );
}

export default HeaderNavigation;
