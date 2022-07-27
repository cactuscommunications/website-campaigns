export function JournalRuby() {
  interface IJournalRubyParams {
    backgroundColor: string;
    heading: string;
    mobileHeading: string;
    subHeading: string;
    mobileSubHeading: string;
    journals: IJournals[];
    journalLabel: string;
  }

  interface IJournals {
    name: string;
    image: string;
    impact: string;
  }

  const params: IJournalRubyParams = {
    backgroundColor: 'bg-white',
    heading: '校正サンプル：Medicine and Clinical Researcher 分野',
    mobileHeading: '弊社で実績のあるTOP 5 ジャーナル',
    subHeading: 'ハイインパクトファクターの学術誌にも豊富な経験と実績がございます。',
    mobileSubHeading:
      "We've helped 6,750 papers get published on top medical Journals such as The Lancet, Jama, Nature Medicine and BMJ",
    journals: [
      {
        name: 'Nature Energy',
        image: '/assets/images/journals/nature-energy.png',
        impact: '54',
      },
      {
        name: 'Nature Reviews Immunology',
        image: '/assets/images/journals/nature-reviews-immunology.png',
        impact: '44.019',
      },
      {
        name: 'Nature',
        image: '/assets/images/journals/nature.png',
        impact: '43.07',
      },
      {
        name: 'Chemical Reviews',
        image: '/assets/images/journals/chemical-reviews.png',
        impact: '54.301',
      },
      {
        name: 'New England Journal of Medicine',
        image: '/assets/images/journals/new-england-journal-of-medicine.png',
        impact: '70.67',
      },
    ],
    journalLabel: 'Impact Factor:',
  };

  return (
    <>
      <div className="clearfix"></div>
      <section className={'pb-10 pt-7.5 sm:my-6 ' + params?.backgroundColor}>
        <div className="container px-5">
          <h2 className="text-black text-center font-pb text-5xl text-ruby-alpha leading-30 sm:text-20">
            <span className="sm:hidden">{params.heading}</span>
            <span className="hidden sm:block">{params.mobileHeading}</span>
          </h2>
          <p className="text-center text-base leading-6 font-pr text-ruby-alpha mt-4 mb-7 sm:mt-5">
            <span className="sm:hidden">{params.subHeading}</span>
            <span className="hidden sm:block">{params.mobileSubHeading}</span>
          </p>
          <div className="w-full flex justify-center mt-5 flex-wrap gap-5">
            {params.journals
              .sort((first, second) => {
                return first.impact < second.impact ? 1 : -1;
              })
              .map((journal) => (
                <div className="rounded-lg border border-pearl-beta pb-3 w-56 mx-2.5">
                  <div
                    className="h-74 bg-no-repeat bg-contain w-full rounded-t-lg"
                    style={{
                      backgroundImage: `url(${journal.image})`,
                    }}
                  >
                    &nbsp;
                  </div>
                  <div className="px-2.5 mt-3">
                    <h2 className="font-sb text-ruby-alpha text-base">{journal.name}</h2>
                    <p className="font-sb leading-21 text-sm text-pearl-beta">
                      {params.journalLabel}
                      <span className="font-ssb">{journal.impact}</span>
                    </p>
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

export default JournalRuby;
