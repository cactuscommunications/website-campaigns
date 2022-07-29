import { useEffect, useState } from 'react';
import subjectAPIService from '../../services/api/subject-api';
export function JournalRuby({ searchText }: { searchText: string }) {
  interface IJournalRubyParams {
    backgroundColor: string;
    heading: string;
    mobileHeading: string;
    subHeading: string;
    mobileSubHeading: string;
    journalLabel: string;
  }

  interface IJournals {
    createdAt: string
    image: string
    impact_factor: number
    name: string
    publishedAt: string
    updatedAt: string

  }

  const params: IJournalRubyParams = {
    backgroundColor: 'bg-white',
    heading: '校正サンプル：Medicine and Clinical Researcher 分野',
    mobileHeading: '弊社で実績のあるTOP 5 ジャーナル',
    subHeading: 'ハイインパクトファクターの学術誌にも豊富な経験と実績がございます。',
    mobileSubHeading:
      "We've helped 6,750 papers get published on top medical Journals such as The Lancet, Jama, Nature Medicine and BMJ",
   
    journalLabel: 'Impact Factor:',
  };
  const url = new URL(location.href);
  var saParam = url.searchParams.get("sa");
  let [journals, setJournals] = useState([{
    "image": '',
    "impact_factor": 0,
    "name": '',
  }]);

  useEffect(() => {
    if(saParam) { 
      searchText = saParam;
  }
    const getTestimonialsData = async () => {
      let resp: IJournals[] = await getData(searchText);
      setJournals(resp);
    };
    getTestimonialsData();
  }, [searchText]);
  return (
    <>
      <div className="clearfix"></div>
      <section className={'pb-10 pt-7.5 ' + params?.backgroundColor}>
        <div className="container px-5">
          <h2 className="text-center font-pb text-5xl text-ruby-alpha leading-30 sm:text-20">
            <span className="sm:hidden">{params.heading}</span>
            <span className="hidden sm:block">{params.mobileHeading}</span>
          </h2>
          <p className="text-center text-base leading-6 font-pr text-ruby-alpha mt-4 mb-7 sm:mt-5">
            <span className="sm:hidden">{params.subHeading}</span>
            <span className="hidden sm:block">{params.mobileSubHeading}</span>
          </p>
          <div className="w-full flex justify-center mt-5 flex-wrap">
            {journals
              .sort((first, second) => {
                return first.impact_factor < second.impact_factor ? 1 : -1;
              })
              .map((journal) => (
                <div className="rounded-lg border border-pearl-beta pb-3 w-56 mx-2.5">
                  <div
                    className="h-75 bg-no-repeat bg-contain w-full rounded-t-lg"
                    style={{
                      backgroundImage: `url(${'/assets'+journal.image})`,
                    }}
                  >
                    &nbsp;
                  </div>
                  <div className="px-2.5 mt-3">
                    <h2 className="font-sb text-ruby-alpha text-base">{journal.name}</h2>
                    <p className="font-sb leading-21 text-sm text-pearl-beta">
                      {params.journalLabel}
                      <span className="font-ssb">{journal.impact_factor}</span>
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
  function getData(input : string) {
    return subjectAPIService.getServiceFeatures(input).then(function (response: any) {
      
      let returnData : IJournals[] = [];
      response.data.data[0].attributes.sa_one.data[0].attributes.journals.data.map((journal:any) => {
        returnData.push(journal.attributes)  
  
      })
      return returnData;
    });
  }
}



export default JournalRuby;
