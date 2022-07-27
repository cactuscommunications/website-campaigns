export function SampleRuby() {
  interface ISampleRubyParams {
    backgroundColor: string;
    heading: string;
    subHeading: string;
    samples: ISamples[];
  }

  interface ISamples {
    title: string;
    image: string;
    link: {
      route?: string;
      content?: string;
      tracking: {};
    };
  }

  const params: ISampleRubyParams = {
    backgroundColor: 'bg-primary',
    heading: '校正サンプル：Medicine and Clinical Researcher 分野',
    subHeading: 'クリックすると各サービスの校正サンプルがダウンロードされます。',
    samples: [
      {
        title: 'スタンダード英文校正',
        image: '/assets/images/samples-ruby.svg',
        link: {
          content: 'スタンダード英文校正',
          route: 'https://cactuscommunications.formstack.com/forms/editor_in_your_subject_area',
          tracking: {
            event: 'click',
            custom: {
              ga_label: '',
              ga_action: '',
              ga_category: '',
            },
            description: '',
          },
        },
      },
      {
        title: 'スタンダード英文校正',
        image: '/assets/images/samples-ruby.svg',
        link: {
          content: 'スタンダード英文校正',
          route: 'https://cactuscommunications.formstack.com/forms/editor_in_your_subject_area',
          tracking: {
            event: 'click',
            custom: {
              ga_label: '',
              ga_action: '',
              ga_category: '',
            },
            description: '',
          },
        },
      },
      {
        title: 'スタンダード英文校正',
        image: '/assets/images/samples-ruby.svg',
        link: {
          content: 'スタンダード英文校正',
          route: 'https://cactuscommunications.formstack.com/forms/editor_in_your_subject_area',
          tracking: {
            event: 'click',
            custom: {
              ga_label: '',
              ga_action: '',
              ga_category: '',
            },
            description: '',
          },
        },
      },
    ],
  };

  return (
    <>
      <div className="clearfix"></div>
      <section className={'my-12 sm:my-6 bg-primary py-10 ' + params?.backgroundColor}>
        <div className="wrapper">
          {params.heading && (
            <h2 className="text-center font-pb text-3xl leading-44 text-ruby-alpha mb-6 sm:leading-30 sm:mb-5 sm:text-20 sm:px-5">
              {params.heading}
            </h2>
          )}
          <span className="block mb-6 sm:px-5">
            <span className="text-base text-ruby-alpha font-pr text-center">{params.subHeading}</span>
          </span>
          <div className="max-w-1060 flex-wrap flex justify-center mx-auto md:max-w-240">
            {params.samples.map((sample) => (
              <div className="w-80 px-5 box-border sm:mb-7.5 sm:px-2 md:w-1/3 xxl:px-3">
                <div className="border border-ruby-upsilon rounded pt-6 px-3 pb-4 bg-white w-full xxl:px-2.5">
                  {sample.title && (
                    <h3 className="font-sb text-lg leading-21 text-ruby-alpha text-center mb-4">{sample.title}</h3>
                  )}
                  <div
                    className="w-64 h-64 bg-no-repeat bg-contain mx-auto md:w-full sm:w-full sm:max-w-full sm:bg-center"
                    style={{
                      backgroundImage: `url(${sample.image})`,
                    }}
                  ></div>
                  <div className="px-2 text-center mt-5">
                    <a className="btn btn-primary" href={sample?.link.route}>
                      <span className="w-full py-3 text-center font-pb">{sample?.link.content}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}

export default SampleRuby;
