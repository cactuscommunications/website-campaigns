export function ThankYouRuby() {

  return (
  <>
    <section className="w-full">
      <div className="justify-center items-center flex flex-col px-4 pb-20 sm:pb-10 sm:border bg-pearl-alpha pt-10 sm:pt-6">
        <h1 className="font-sb text-4.5xl sm:text-23 leading-normal text-center text-white"> エディテージへのお問い合わせ </h1>
        {/* <p className="text-sm sm:text-10 leading-normal text-center text-white"> お問い合わせには営業時間1時間以内に回答いたします </p> */}
      </div>
    </section>
    <div className="clearfix"></div>
    <section className="py-15 sm:py-10">
      <div className="container">
        <div className="text-center">
          <span className="w-17.5 h-17.5 bg-cover bg-no-repeat mb-4 block mx-auto  ng-lazyloaded" 
            style={{ backgroundImage: `url('/assets/images/icons/check-round-grey-bg.svg')` }}></span>
          <h2 className="text-4xl font-sb text-ruby-alpha leading-48 mb-5">お問い合わせの完了</h2>
          <p className="text-ruby-alpha leading-7 mb-8">送信が完了しました。</p>
          <p className="text-ruby-alpha leading-7 mb-8">エディテージのカスタマーサポートから
            <br/>ご回答させていただきます。
          </p>
        </div>
      </div>
    </section>
    <div className="clearfix"></div>
  </>
 );
}

export default ThankYouRuby;
