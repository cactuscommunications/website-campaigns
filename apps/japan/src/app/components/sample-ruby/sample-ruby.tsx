import { useEffect, useState } from "react";
import subjectAPIService from "../../services/api/subject-api";
interface ISampleRubyParams {
  backgroundColor: string;
  heading: string;
  image: string;
  subHeading: string;
  title1: string;
  title2: string;
  title3: string;
  searchText : string;
  buttonText : string;
}
interface Isamples {
  title: string,
  data: string[]
}
const SampleRuby = ({ params }: { params: ISampleRubyParams }) => {

  let [title, setTitle] = useState('');
  let [samples, setSamples] = useState(['']);
  const url = new URL(location.href);
  var saParam = url.searchParams.get("sa");

  useEffect(() => {
    if (saParam) {
      params.searchText = saParam;
    }
    const editorsData = async () => {
      let machineName = '';
      machineName = await getMachineName(params.searchText);
      let resp = await getSampleData(params.searchText);
      setSamples(resp.data);
      setTitle(resp.title);
    };
    editorsData();
  }, [params.searchText]);

  return (
    <>
      <div className="clearfix"></div>
      <section className={' bg-primary py-10 ' + params?.backgroundColor}>
        <div className="wrapper">
          <div className="text-center mb-6 sm:px-5">
            {params.heading && (
              <h2 className="font-pb text-3xl leading-44 text-ruby-alpha mb-5 sm:leading-30 sm:text-20">
                {params.heading}<span className="sm:hidden"> : {title}</span>
              </h2>
            )}
            <span className="text-base text-ruby-alpha font-pr">{params.subHeading}</span>
          </div>
          {samples && samples.length > 0 &&
            <div className="max-w-[60.625rem] flex-wrap flex justify-center mx-auto md:max-w-240">
              {samples.map((sample, index) => (
                <div
                  key={index}
                  className="w-80 px-5 box-border sm:mb-7.5 sm:px-2 md:w-1/3 xxl:px-3">
                  <div className="border border-ruby-upsilon rounded pt-6 px-3 pb-4 bg-white w-full xxl:px-2.5">
                    {params.title1 && (
                      <h3 className="font-sb text-lg leading-21 text-ruby-alpha text-center mb-4">
                        {index === 0 ? params.title1 : index === 1 ? params.title2 : params.title3}
                      </h3>
                    )}
                    <div
                      className="w-64 h-64 bg-no-repeat bg-contain mx-auto md:w-full sm:w-full sm:max-w-full sm:bg-center"
                      style={{
                        backgroundImage: `url(${params.image})`,
                      }}
                    ></div>
                    <div className="px-2 text-center mt-5">
                      <a className="btn btn-primary" href={sample}>
                        <span className="w-full py-3 text-center font-pb">{params.buttonText}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
          {samples && samples.length == 0 && <div className="text-center w-full mt-7">No Data Available</div>}

        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
}
function getMachineName(input: string) {
  const query = '[$eq]=' + input;
  return subjectAPIService.getWholeData(input, 'sa_one,sa_one_five').then(function (response: any) {
    return response.data.data[0]?.attributes.sa_one_five.data[0].attributes.machine_name ? response.data.data[0].attributes.sa_one_five.data[0].attributes.machine_name : '';
  })
}
function getSampleData(input: string) {
  let returnData: Isamples = { data: [], title: '' }

  return subjectAPIService.getWholeData(input, 'sa_one_five.samples,sa_one_five.social_attributes').then(function (response: any) {
    if (response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes?.samples) {
      returnData = {
        data: [
          response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.samples.ses_path,
          response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.samples.pes_path,
          response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.samples.tje_path
        ],
        title: response.data.data[0]?.attributes.sa_one_five.data[0]?.attributes.social_attributes.title ?? ''
      }
    }
    return returnData

  });
}
export default SampleRuby;
