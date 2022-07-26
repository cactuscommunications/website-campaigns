import { useEffect, useState } from 'react';
import subjectAPIService from '../../services/api/subject-api';
import pageService from '../../services/renderer/page-service';
const partner = pageService.getPartner();
interface IJournalRubyParams {
  backgroundColor: string;
  heading: string;
  mobileHeading: string;
  subHeading: string;
  mobileSubHeading: string;
  journalLabel: string;
  searchText : string
}

interface IJournals {
  createdAt: string
  image: string
  impact_factor: number
  name: string
  publishedAt: string
  updatedAt: string

}
export function JournalRuby({ params }: { params: IJournalRubyParams }) {
 
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
      params.searchText = saParam;
    }
    const getJournalsData = async () => {
      let machineName = '';
      machineName = await getMachineName(params.searchText);
      let resp = await getData(params.searchText);
      setJournals(resp.data);
      setTitle(resp.title)
    };
    getJournalsData();
  }, [params.searchText]);
  return (
    <>
      <div className="clearfix"></div>
      <section className={'pb-10 pt-7.5 ' + params?.backgroundColor}>
        <div className="container px-5">
          <h2 className="text-center font-pb text-5xl text-ruby-alpha leading-30 sm:text-20">
            <span className="sm:hidden">{params.heading}{partner == "JPN" ? title : ''}</span>
            <span className="hidden sm:block">{params.mobileHeading}</span>
          </h2>
          <p className="text-center text-base leading-6 font-pr text-ruby-alpha mt-4 mb-7 sm:mt-5">
            <span className="sm:hidden">{params.subHeading}</span>
            <span className="hidden sm:block">{params.mobileSubHeading}</span>
          </p>
          <div className="w-full flex justify-center mt-5 flex-wrap max-w-[1300px] mx-auto gap-y-5 sm:flex-nowrap sm:justify-start sm:overflow-x-auto sm:pb-4">
            {journals
              .sort((first, second) => {
                return first.impact_factor < second.impact_factor ? 1 : -1;
              })
              .map((journal) => (
                <div key={journal.name} className="rounded-lg border border-pearl-beta pb-1.5 w-55 mx-2.5 sm:shrink-0">
                  <div
                    className="flex items-end min-h-[18rem] bg-no-repeat bg-contain w-full rounded-t-lg"
                    style={{
                      backgroundImage: `url(${journal.image})`,
                    }}
                  ></div>
                    <div className="px-2.5 pt-3 bg-white w-full -mt-10">
                      <h2 className="font-sb text-ruby-alpha text-base min-h-[3rem]">{journal.name}</h2>
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
      return response.data.data[0]?.attributes.sa_one_five.data[0].attributes.machine_name ? response.data.data[0].attributes.sa_one_five.data[0].attributes.machine_name : '';
    })
  }
  function getData(input: string) {
    return subjectAPIService.getWholeData(input, 'sa_one_five.journals,sa_one_five.social_attributes').then(function (response: any) {

      let journalData: IJournals[] = [];
      response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.journals?.data.map((journal: any) => {
        journalData.push(journal.attributes)

      })

      let title = response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.title ?? ''
      if(partner == "KOR")
        title = title.replace(/エディテージ/g, "").replace(/分野/g, "분야");
      return { data: journalData, title: title };
    });
  }
}



export default JournalRuby;
