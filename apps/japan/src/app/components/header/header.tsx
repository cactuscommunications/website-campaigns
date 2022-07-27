export function Header() {

return (
  <div id="header" className="float-left w-full px-15 md:px-5 fixed bg-white shadow z-10 top-0">
    <section className="w-full float-left">
        <div className="float-left flex items-center py-2.5">
          <div className="sm:hidden md:hidden xxl:w-50 w-50 h-10 bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url('/assets/images/logo/editage-eng-20.svg')` }}>
              <a className="block" data-description="hp-top nav-editage logo-null-click-null-null"
                href="https://www.editage.jp/"><span className="block h-10 invisible xxl:w-50 w-50"></span></a>
          </div>
          <div className="hidden md:inline-block sm:inline-block bg-center bg-no-repeat bg-contain md:w-30 md:h-9 sm:w-24 sm:h-7.5 sm:mt-1"
            style={{ backgroundImage: `url('/assets/images/logo/logo.svg')` }}>
              <a className="block" data-description="hp-top nav-editage logo-null-click-null-null"
                href="https://www.editage.jp/"><span className="block h-9.5 invisible w-25">&nbsp;</span></a>
          </div>
        </div>
      <div className="flex justify-between sm:block">
        <div className="float-left left-nav">
          <div className="ml-3.5">
            <ul>
              <li className="inline-block text-sm relative uppercase">
                  <a href="javascript:void(0);" className="transition-all duration-100 ease-in inline-block hover:bg-pearl-beta/10" data-description="hp-top nav-engish proofreading-main-click">
                    <span className="py-4.6 px-2 inline-block md:px-1.2"><span className="font-ssb tracking-wider text-sm md:text-13">英文校正</span>
                      <span className="w-2.5 h-2.5 inline-block bg-contain bg-no-repeat bg-center ml-1 transition-all duration-100 ease-in"
                        style={{ backgroundImage: `url('assets/images/icons/rectangle-black.svg')` }}></span>
                    </span>
                  </a>
                <div className="dropdown-menu pointer-events-none opacity-0 ease-in-out absolute left-0 shadow rounded-lg bg-white z-20 top-12.5 mt-2.5">
                    <div className="flex max-h-80vh overflow-y-auto py-4.5 w-162">
                      <div className="w-3/5 pr-10">
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-engish proofreading-overview-click" href="https://www.editage.jp/services/english-editing">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 英文校正サービス概要 </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-engish proofreading-top journal-click" href="https://www.editage.jp/services/english-editing/top-journal-editing-plan">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> トップジャーナル英文校正
                                  <span className="text-10 font-sb rounded-sm px-2 ml-2 py-0.5 inline-block bg-opal-alpha/20 text-opal-alpha">最高峰</span>
                                </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-engish proofreading-premium ed-click" href="https://www.editage.jp/services/english-editing/premium-editing-plan">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> プレミアム英文校正
                                  <span className="text-10 font-sb rounded-sm px-2 ml-2 py-0.5 inline-block bg-pearl-eta/20 text-pearl-eta">おすすめ</span>
                                </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-engish proofreading-standard ed-click" href="https://www.editage.jp/services/english-editing/standard-editing-plan">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> スタンダード英文校正</span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-engish proofreading-fee and delivery-click" href="https://www.editage.jp/services/english-editing/price-delivery">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 料金と納期</span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-engish proofreading-service compare support-click" href="https://www.editage.jp/services/english-editing/compare-support">
                            <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 英文校正レベルとサポート比較</span>
                          </a>
                          </div>
                        </div>
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="top nav-engish proofreading-re-editing-click" href="https://www.editage.jp/services/english-editing/re-editing">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 再校正について</span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-engish proofreading-eng proofreading-click" href="https://www.editage.jp/services/english-editing/sample">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 英文校正サンプル</span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" href="https://www.editage.jp/services/english-editing/fileformats" target="_blank" data-description="hp-top nav-engish proofreading-file format-click">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 取り扱いファイル
                                </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" href="https://www.editage.jp/services/english-editing/curation-english-manuscript-writing-posts" target="_blank" data-description="hp-top nav-engish proofreading-summary-click">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 英語論文執筆方法のまとめ
                                </span>
                              </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/5 pr-0">
                        <div><span className="text-x-base inline-block tracking-0.32 text-ruby-alpha/60 py-2.5">その他の英文校正サービス</span></div>
                        <div>
                          <div className="border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-engish proofreading-book editing-click" href="https://www.editage.jp/services/english-editing/book-editing">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> 書籍英文校正</span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div className="border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-engish proofreading-thesis editing-click" href="https://www.editage.jp/services/english-editing/thesis-editing">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> 学位論文英文校正</span>
                              </a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </li>
              <li className="inline-block text-sm relative uppercase">
                  <a className="transition-all duration-100 ease-in inline-block hover:bg-pearl-beta/10" 
                    href="javascript:void(0);" data-description="hp-top nav-academic translation j2e-main-click">
                    <span className="py-4.6 px-2 inline-block md:px-1.2">
                      <span className="font-ssb tracking-wider text-sm md:text-13">学術翻訳(和英)</span>
                      <span className="w-2.5 h-2.5 inline-block bg-contain bg-no-repeat bg-center ml-1 transition-all duration-100 ease-in"
                        style={{ backgroundImage: `url('assets/images/icons/rectangle-black.svg')` }}></span>
                    </span>
                    </a>
                <div className="dropdown-menu pointer-events-none opacity-0 ease-in-out absolute left-0 shadow rounded-lg bg-white z-20 top-12.5 mt-2.5">
                    <div className="flex max-h-80vh overflow-y-auto py-4.5 w-162">
                      <div className="w-3/5 pr-10">
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-academic translation j2e-overview-click" href="https://www.editage.jp/services/translation">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 翻訳サービス概要 </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-academic translation j2e-top journal-click" href="https://www.editage.jp/services/translation/top-journal-translation-plan">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> トップジャーナル学術翻訳 </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-academic translation j2e-premium tl-click" href="https://www.editage.jp/services/translation/premium-translation-plan">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> プレミアム学術翻訳 </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-academic translation j2e-standard tl-click" href="https://www.editage.jp/services/translation/standard-translation-plan">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> スタンダード学術翻訳 </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-academic translation j2e-fee and delivery-click" href="https://www.editage.jp/services/translation/price-delivery">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 料金と納期 </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-academic translation j2e-tl service comparison-click" href="https://www.editage.jp/services/translation/compare-support">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 翻訳サービス比較 </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" href="https://www.editage.jp/services/translation/japanese-to-english/sample" target="_blank" data-description="hp-top nav-academic translation j2e-file format-click">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 学術翻訳サンプル
                                </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div>
                              <a className="block hover:bg-lapis-gamma/20 link-hover" href="https://www.editage.jp/services/translation/file-format" target="_blank" data-description="hp-top nav-academic translation j2e-file format-click">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 取り扱いファイル </span>
                              </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/5 pr-0">
                        <div><span className="text-x-base inline-block tracking-0.32 text-ruby-alpha/60 py-2.5">その他の翻訳サービス</span></div>
                        <div>
                          <div className="border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-academic translation other-basic-click" href="https://www.editage.jp/services/translation/basic-translation-plan">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> ベーシック翻訳 </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div className="border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-academic translation other-e2j-click" href="https://www.editage.jp/services/translation/english-to-japanese">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> 英和翻訳 </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div className="border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-academic translation other-book tl-click" href="https://www.editage.jp/services/translation/book-translation">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> 書籍翻訳 </span>
                              </a>
                          </div>
                        </div>
                        <div>
                          <div className="border-l border-l-lapis-gamma">
                              <a className="block hover:bg-lapis-gamma/20 link-hover" href="https://www.editage.jp/services/translation/thesis-translation" target="_blank" data-description="hp-top nav-academic translation other-thesis tl-click">
                                <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> 学位論文翻訳 </span>
                              </a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </li>
              <li className="inline-block text-sm relative uppercase">
                  <a className="transition-all duration-100 ease-in inline-block hover:bg-pearl-beta/10" href="javascript:void(0);" data-description="hp-top nav-publication support services-main-click">
                    <span className="py-4.6 px-2 inline-block md:px-1.2"><span className="font-ssb tracking-wider text-sm md:text-13">投稿支援・論文作成</span>
                      <span className="w-2.5 h-2.5 inline-block bg-contain bg-no-repeat bg-center ml-1 transition-all duration-100 ease-in"
                        style={{ backgroundImage: `url('assets/images/icons/rectangle-black.svg')` }}></span>
                    </span>
                  </a>
                <div className="dropdown-menu pointer-events-none opacity-0 ease-in-out absolute left-0 shadow rounded-lg bg-white z-20 top-12.5 mt-2.5">
                    <div className="flex max-h-80vh overflow-y-auto py-4.5 w-90">
                      <div className="w-full pr-0">
                        <div>
                          <div>
                            <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-publication support services-overview sub support-click" href="https://www.editage.jp/services/publishing-services-packs">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 投稿支援・論文作成サービス概要 </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                            <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-publication support services-full support-click" href="https://www.editage.jp/services/publishing-services-packs/writing-plus-full-publication-support">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> 論文執筆＋ 投稿フルサポート </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                            <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-publication support services-post full support-click" href="https://www.editage.jp/services/publishing-services-packs/full-publication-support">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> 投稿フルサポート </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                            <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-publication support services-hurry support pack-click" href="https://www.editage.jp/services/publishing-services-packs/express-submission-support">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> 投稿お急ぎサポートパック </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                            <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-publication support services-customize pack-click" href="https://www.editage.jp/services/publishing-services-packs/custom-pack">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> カスタマイズパック </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                            <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="top nav-publication support services-basic writing support-click" href="https://www.editage.jp/services/publishing-services-packs/basic-writing-support">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> ベーシック論文執筆サポート </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="ml-10 border-l border-l-lapis-gamma">
                            <a className="block hover:bg-lapis-gamma/20 link-hover" href="https://www.editage.jp/services/other/literature-review" target="_blank" data-description="hp-top nav-publication support services-literature search support-click">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-2.5"> 先行文献検索サポート </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div>
                            <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-publication support services-fee and delivery-click" href="https://www.editage.jp/services/publishing-services-packs/price-delivery">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 料金と納期 </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div>
                            <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-publication support services-comparison of sub support-click" href="https://www.editage.jp/services/publishing-services-packs/compare-plans">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 投稿支援・論文作成サービス比較 </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div>
                            <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-publication support services-confidentiality handling treatise-click" href="https://www.editage.jp/services/publishing-services-packs/confidentiality">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 論文取り扱いの守秘義務 </span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <div>
                            <a className="block hover:bg-lapis-gamma/20 link-hover" data-description="hp-top nav-publication support services-code of ethic-click" href="https://www.editage.jp/services/publishing-services-packs/ethics">
                              <span className="text-x-base block tracking-0.32 py-2.5 px-10"> 出版に関する倫理規定 </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </li>
              <li className="inline-block text-sm relative uppercase">
                  <a className="transition-all duration-100 ease-in inline-block hover:bg-pearl-beta/10" data-description="hp-top nav-subject area expertise-main-click" href="https://www.editage.jp/subject-expertise">
                    <span className="py-4.6 px-2 inline-block md:px-1.2">
                      <span className="font-ssb tracking-wider text-sm md:text-13">対応分野</span>
                    </span>
                  </a>
              </li>
              <li className="inline-block text-sm relative uppercase">
                  <a className="transition-all duration-100 ease-in inline-block hover:bg-pearl-beta/10" href="javascript:void(0);" data-description="hp-top nav-why choose us-main-click">
                    <span className="py-4.6 px-2 inline-block md:px-1.2">
                      <span className="font-ssb tracking-wider text-sm md:text-13">選ばれる理由</span>
                      <span className="w-2.5 h-2.5 inline-block bg-contain bg-no-repeat bg-center ml-1 transition-all duration-100 ease-in"
                        style={{ backgroundImage: `url('assets/images/icons/rectangle-black.svg')` }}></span>
                    </span>
                  </a>
                <div className="dropdown-menu pointer-events-none opacity-0 ease-in-out absolute left-0 shadow rounded-lg bg-white z-20 top-12.5 mt-2.5">
                    <ul className="w-90 py-4.5">
                      <li className="block">
                        <a className="block hover:bg-lapis-gamma/20 hover:text-pearl-beta hover:rounded-t-lg" data-description="hp-top nav-why choose us-payment-click" href="https://www.editage.jp/payments">
                          <span className="w-90 font-ssb text-x-base py-2.5 px-10 block tracking-0.32">お支払い方法</span>
                        </a>
                      </li>
                      <li className="block">
                        <a className="block hover:bg-lapis-gamma/20 hover:text-pearl-beta" data-description="hp-top nav-why choose us-quality assurance-click" href="https://www.editage.jp/quality">
                          <span className="w-90 font-ssb text-x-base py-2.5 px-10 block tracking-0.32">エディテージの品質保証</span>
                        </a>
                      </li>
                      <li className="block">
                        <a className="block hover:bg-lapis-gamma/20 hover:text-pearl-beta hover:rounded-b-lg" data-description="hp-top nav-why choose us-customer voice-click" href="https://www.editage.jp/testimonials">
                          <span className="w-90 font-ssb text-x-base py-2.5 px-10 block tracking-0.32">お客様の声</span>
                        </a>
                      </li>
                      <li className="block">
                        <a className="block hover:bg-lapis-gamma/20 hover:text-pearl-beta hover:rounded-b-lg" href="https://www.editage.jp/researcher-life" target="_blank" data-description="hp-top nav-why choose us-reasearcherlife">
                          <span className="w-70 mx-auto border-t border-ruby-alpha/10 block"></span>
                          <span className="w-90 py-2.5 px-10 block">
                            <span className="w-30 h-3.25 inline-block bg-no-repeat bg-contain  ng-lazyloaded"
                              style={{ backgroundImage: `url('/assets/images/r-editage/researcher-life-logo-blue.svg')` }}></span>
                            <span className="inline-block text-white uppercase text-xs tracking-wider font-sb py-0.5 px-1.6 bg-diamond-alpha rounded-sm leading-14 ml-2">NEW</span>
                            <span className="text-xs text-ruby-alpha/80 tracking-0.32 block leading-18 font-ssb mt-2">パーソナライズされた、研究者のための統合プラットフォーム</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="float-right right-nav">
          <div className="ml-3.5">
            <ul>
              <li className="inline-block text-sm relative uppercase">
                  <a className="transition-all duration-100 ease-in inline-block hover:bg-pearl-beta/10" href="javascript:void(0);" data-description="hp-top nav-<contact cs>-null-click-<top-navigation>-null">
                    <span className="py-4.6 px-2 inline-block md:px-1.2">
                      <span className="bg-no-repeat bg-contain mr-1 inline-block align-middle w-4.5 h-5"
                        style={{ backgroundImage: `url('/assets/images/icons/user-headset.svg')` }}></span>
                      <span className="font-ssb tracking-wider text-sm md:text-13">ヘルプ</span>
                      <span className="w-2.5 h-2.5 inline-block bg-contain bg-no-repeat bg-center ml-1 transition-all duration-100 ease-in"
                        style={{ backgroundImage: `url('assets/images/icons/rectangle-black.svg')` }}></span>
                    </span>
                  </a>
                <div className="dropdown-menu pointer-events-none opacity-0 ease-in-out absolute left-0 shadow rounded-lg bg-white z-20 top-12.5 mt-2.5 -ml-48 md:-ml-62.5">
                      <div className="clearfix"></div>
                      <div className="bg-white rounded-lg shadow overflow-hidden sm:w-full sm:inline-block sm:max-h-90vh sm:overflow-y-scroll sm:shadow-none w-143">
                        <div className="w-full float-left p-5 border-pearl-epsilon border-b sm:p-4">
                          <div className="flex">
                          <span className="mr-5 w-10 h-8 align-middle inline-block bg-no-repeat bg-contain  ng-lazyloaded"
                            style={{ backgroundImage: `url('/assets/images/icons/call-round-icon.svg')` }}></span>
                          <span className="inline-block align-middle sm:w-52 w-118">
                              <a href="tel:0120-50-2987" data-description="hp-top nav-contact-null-click-<top-navigation>-null">
                                <span className="leading-6 lowercase font-sb text-base sm:text-sm sm:leading-22">0120-50-2987</span>
                              </a>
                                <span className="block w-full normal-case text-sm font-pr leading-5 sm:text-xsm"></span>
                              </span>
                            </div>
                        </div>
                        <div className="w-full float-left p-5 border-pearl-epsilon border-b sm:p-4">
                            <div className="flex">
                              <span className="mr-5 w-10 h-8 align-middle inline-block bg-no-repeat bg-contain  ng-lazyloaded"
                                style={{ backgroundImage: `url('/assets/images/icons/email-round-icon.svg')` }}></span>
                              <span className="inline-block align-middle sm:w-52 w-118">
                                <a href="mailto:submissions@editage.com" data-description="hp-top nav-contact-null-click-<top-navigation>-null">
                                  <span className="leading-6 lowercase font-sb text-base sm:text-sm sm:leading-22">submissions@editage.com</span>
                                </a>
                                <span className="block w-full normal-case text-sm font-pr leading-5 sm:text-xsm"></span>
                              </span>
                            </div>
                        </div>
                        <div className="w-full float-left p-5 border-pearl-epsilon border-b sm:p-4">
                            <div className="flex">
                              <span className="mr-5 w-10 h-8 align-middle inline-block bg-no-repeat bg-contain  ng-lazyloaded"
                                style={{ backgroundImage: `url('/assets/images/icons/chat-round-brown-icon.svg')` }}></span>
                              <span className="inline-block align-middle sm:w-52 w-118">
                                <a data-description="hp-top nav-FAQ-click" href="https://www.editage.jp/help">
                                  <span className="leading-6 lowercase font-sb text-base sm:text-sm sm:leading-22">「よくある質問」はこちらから</span>
                                </a>
                                <span className="block w-full normal-case text-sm font-pr leading-5 sm:text-xsm"></span>
                              </span>
                            </div>
                        </div>
                        <div className="w-full float-left border-pearl-epsilon border-b px-5 pt-5 pb-3 last:border-0 sm:p-4">
                          <div className="border-dashed w-full float-left border-b-2 border-ruby-alpha/10 last:border-0">
                              <div className="float-left">
                                <div className="py-2.5 px-2 mb-4 rounded block bg-white">
                                  <div className="table">
                                    <span className="inline-block align-middle sm:w-52 text-garnet-sigma text-base leading-22 font-sb"> &lt;エディテージの営業時間&gt; </span>
                                    <p className="text-ruby-alpha"><span className="text-x-base text-ruby-alpha leading-22">何かお困りの場合は、メールやお電話にてお気軽にお問い合わせください。</span></p>
                                  </div>
                                </div>
                                <div className="w-22 font-sb font-black leading-22 text-sm mr-1.5 sm:text-xsm float-left capitalize">月曜～金曜：</div>
                                <div className="w-110 sm:w-67.5 pb-3 sm:pb-2 float-left">
                                  <div className="w-full float-left pb-1 leading-18 sm:pb-0">
                                    <span className="text-sm capitalize leading-22 mr-2 sm:block sm:text-xsm sm:mr-0">英文校正・学術翻訳</span>
                                    <span className="w-4 h-3 inline-block bg-no-repeat bg-contain mr-1  ng-lazyloaded"
                                      style={{ backgroundImage: `url('/assets/images/icons/envelope-blue.svg')` }}></span>
                                    <span className="text-sm leading-22 mr-2 sm:text-xsm">9:30～24:00</span>
                                    <span className="w-4 h-3 inline-block bg-no-repeat bg-contain mr-1  ng-lazyloaded"
                                      style={{ backgroundImage: `url('/assets/images/icons/phone-blue.svg')` }}></span>
                                    <span className="text-sm leading-22 mr-2 sm:text-xsm">9:30～21:00</span></div>
                                  <div className="w-full float-left pb-1 leading-18 sm:pb-0">
                                    <span className="text-sm capitalize leading-22 mr-2 sm:block sm:text-xsm sm:mr-0">論文投稿支援</span>
                                    <span className="w-4 h-3 inline-block bg-no-repeat bg-contain mr-1  ng-lazyloaded"
                                      style={{ backgroundImage: `url('/assets/images/icons/envelope-blue.svg')` }}></span>
                                    <span className="text-sm leading-22 mr-2 sm:text-xsm">11:00～21:00</span>
                                    <span className="w-4 h-3 inline-block bg-no-repeat bg-contain mr-1  ng-lazyloaded"
                                      style={{ backgroundImage: `url('/assets/images/icons/phone-blue.svg')` }}></span>
                                    <span className="text-sm leading-22 mr-2 sm:text-xsm">11:00～21:00</span></div>
                                  </div>
                                </div>
                                <div className="float-left">
                                    <div className="w-22 font-sb font-black leading-22 text-sm mr-1.5 sm:text-xsm float-left capitalize">土曜：</div>
                                    <div className="w-110 sm:w-67.5 pb-3 sm:pb-2 float-left">
                                  <div className="w-full float-left pb-1 leading-18 sm:pb-0">
                                    <span className="text-sm capitalize leading-22 mr-2 sm:block sm:text-xsm sm:mr-0">英文校正・学術翻訳</span>
                                    <span className="w-4 h-3 inline-block bg-no-repeat bg-contain mr-1  ng-lazyloaded"
                                      style={{ backgroundImage: `url('/assets/images/icons/envelope-blue.svg')` }}></span>
                                    <span className="text-sm leading-22 mr-2 sm:text-xsm">12:30～21:30</span>
                                    <span className="w-4 h-3 inline-block bg-no-repeat bg-contain mr-1  ng-lazyloaded"
                                      style={{ backgroundImage: `url('/assets/images/icons/phone-blue.svg')` }}></span>
                                    <span className="text-sm leading-22 mr-2 sm:text-xsm">12:30～21:30</span>
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div className="border-dashed w-full float-left border-b-2 border-ruby-alpha/10 last:border-0">
                            <span className="text-sm normal-case py-2.5 sm:text-xsm sm:py-2 inline-block">
                              <span className="font-sb font-sb text-sm font-black sm:text-xsm">日曜：</span>
                              英文校正に関するお問い合わせには、12:30～21:30までの間メール対応可。その他のサービスに関するお問い合わせには週明け月曜日以降にお応えいたします
                            </span>
                          </div>
                          <div className="border-dashed w-full float-left border-b-2 border-ruby-alpha/10 last:border-0">
                              <span className="text-sm normal-case py-2.5 sm:text-xsm sm:py-2 inline-block">
                                ※請求書やお支払いに関するお問い合わせ先・営業時間は
                                <a data-description="hp-top nav-<contact cs>-null-click-<contact payments>-null" href="https://www.editage.jp/payments">
                                  <span className="leading-22 normal-case sm:leading-18 text-pearl-beta text-sm sm:text-xsm">こちら &gt;</span>
                                </a>
                              </span>
                          </div>
                        </div>
                      </div>
                </div>
              </li>
              <li className="inline-block text-sm relative uppercase">
                <a className="transition-all duration-100 ease-in inline-block hover:bg-pearl-beta/10"
                  href="https://app.editage.jp" target="_self" data-description="hp-top nav-login-null-click-<top-navigation>-null">
                    <span className="py-4.6 px-2 inline-block md:px-1.2"><span className="font-ssb tracking-wider text-sm md:text-13">ログイン</span>
                    </span>
                  </a>
              </li>
              <li className="inline-block text-sm relative uppercase">
                <a className="hidden transition-all duration-100 ease-in inline-block hover:bg-pearl-beta/10"
                  href="javascript:void(0);" data-description="hp-top nav-logout-null-click-<top-navigation>-null">
                    <span className="py-4.6 px-2 inline-block md:px-1.2"><span className="font-ssb tracking-wider text-sm md:text-13">ログアウト</span>
                    </span>
                  </a>
              </li>
              <li className="inline-block text-sm relative uppercase">
                <a className="btn-nav hover:shadow-sm transition-all duration-100 ease-in inline-block ml-2"
                  href="https://app.editage.jp/order/ncf?source=website" target="_self" data-description="hp-top nav-get quote-null-click-null-null">
                  <span>
                    <span className="font-ssb tracking-wider text-sm md:text-13">お見積り・ご注文</span>
                  </span>
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
 );
}

export default Header;
