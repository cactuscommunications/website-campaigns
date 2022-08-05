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
    heading: '弊社で実績のあるTOP 5 ジャーナル：',
    mobileHeading: '弊社で実績のあるTOP 5 ジャーナル',
    subHeading: 'ハイインパクトファクターの学術誌にも豊富な経験と実績がございます。',
    mobileSubHeading:
      "ハイインパクトファクターの学術誌にも豊富な経験と実績がございます。",
    journalLabel: 'インパクトファクター：',
  };
  const url = new URL(location.href);
  var saParam = url.searchParams.get("sa");
  let [title, setTitle] = useState('');
  let [journals, setJournals] = useState([{
    "image": '',
    "impact_factor": 0,
    "name": '',
  }]);

  useEffect(() => {
    if (saParam) {
      searchText = saParam;
    }
    const getJournalsData = async () => {
      let machineName = '';
      machineName = await getMachineName(searchText);
      let resp = await getData(searchText);
      setJournals(resp.data);
      setTitle(resp.title)
    };
    getJournalsData();
  }, [searchText]);
  return (
    <>
      <div className="clearfix"></div>
      <section className={'pb-10 pt-7.5 ' + params?.backgroundColor}>
        <div className="container px-5">
          <h2 className="text-center font-pb text-5xl text-ruby-alpha leading-30 sm:text-20">
            <span className="sm:hidden">{params.heading}{title}</span>
            <span className="hidden sm:block">{params.mobileHeading}</span>
          </h2>
          <p className="text-center text-base leading-6 font-pr text-ruby-alpha mt-4 mb-7 sm:mt-5">
            <span className="sm:hidden">{params.subHeading}</span>
            <span className="hidden sm:block">{params.mobileSubHeading}</span>
          </p>
          <div className="w-full flex justify-center mt-5 flex-wrap max-w-[1300px] mx-auto sm:flex-nowrap sm:justify-start sm:overflow-x-auto">
            {journals
              .sort((first, second) => {
                return first.impact_factor < second.impact_factor ? 1 : -1;
              })
              .map((journal) => (
                <div key={journal.name} className="rounded-lg border border-pearl-beta pb-1 w-55 mx-2.5 sm:shrink-0">
                  <div
                    className="h-75 bg-no-repeat bg-contain w-full rounded-t-lg"
                    style={{
                      backgroundImage: `url(${journal.image})`,
                    }}
                  >
                    &nbsp;
                  </div>
                  <div className="px-2.5 mt-3">
                    <h2 className="font-sb text-ruby-alpha text-base">{journal.name}</h2>
                    <p className="font-sb text-13 leading-8 text-pearl-beta">
                      {params.journalLabel}
                      <span className="font-ssb">{journal.impact_factor}</span>
                    </p>
                  </div>
                </div>
              ))}
          </div>
          {journals && journals.length == 0 && <div className="text-center w-full mt-7">No Data Available</div>}

        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
  function getMachineName(input: string) {
    const query = '[$eq]=' + input;
    return subjectAPIService.getWholeData(input, 'sa_one,sa_one_five').then(function (response: any) {
      return response.data.data[0].attributes.sa_one_five.data[0].attributes.machine_name ? response.data.data[0].attributes.sa_one_five.data[0].attributes.machine_name : '';
    })
  }
  function getData(input: string) {
    return subjectAPIService.getWholeData(input, 'sa_one_five.journals,sa_one_five.social_attributes').then(function (response: any) {

      let journalData: IJournals[] = [];
      response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.journals?.data.map((journal: any) => {
        journalData.push(journal.attributes)

      })

      let title = response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.title ?? ''

      return { data: journalData, title: title };
    });
  }
}



export default JournalRuby;
