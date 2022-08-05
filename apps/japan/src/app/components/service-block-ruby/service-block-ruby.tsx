import { useEffect, useState } from "react";
import subjectAPIService from "../../services/api/subject-api";
import ListingRuby from "../listing-ruby/listing-ruby";

export function ServiceBlockRuby() {
    interface IserviceBlockRubyParams {
        desktopOnly: boolean,
        heading?: string,
        menuItem: ImenuItem[]
    }
    interface ImenuItem {
        name: string,
        machineName: string
    }
    let [activeTab, setActiveTab] = useState(0);
    let [searchText, setSearchText] = useState('');
    const url = new URL(location.href);
    const saParam = url.searchParams.get("sa");
    const [loadCounter, setloadCounter] = useState(true);

    const params: IserviceBlockRubyParams = {
        desktopOnly: true,
        heading: "その他の専門分野をお探しですか？",
        "menuItem": [
            {
                "name": "すべての分野",
                "machineName": ""
            },
            {
                "name": "医学・医療",
                "machineName": "medicine"
            },
            {
                "name": "生命科学",
                "machineName": "life-sciences"
            },
            {
                "name": "物理化学・工学",
                "machineName": "physical-sciences-and-engineering"
            },
            {
                "name": "人文社会学",
                "machineName": "humanities-and-social-sciences"
            },
            {
                "name": "ビジネス・経済学",
                "machineName": "business-and-economics"
            },

        ]
    };
    useEffect(() => {
        if (saParam && loadCounter) {
            setSearchText(saParam);
            setloadCounter(false);
        }
        const getTabsData = async () => {
            let machineName = '';
            if (searchText) {
                machineName = await getMachineName(searchText);
                setSearchText(machineName);
                setActiveTab(params.menuItem.findIndex(p => p.machineName == machineName))
            }
        };
        getTabsData();
    }, [searchText]);
    const tabChanged = (index: number) => {
        setActiveTab(index)
        const selectedMachineName: string = params.menuItem[index].machineName;
        setSearchText(selectedMachineName);
    }
    return (
        <>
            <div className={params?.desktopOnly ? 'md:hidden sm:hidden ' : ' '} >
                <div className="w-full max-w-[1200px] mx-auto mt-20 sm:w-full md:w-full md:px-7">
                    <div className="clearfix"></div>
                    {params?.heading &&
                        <h2 className="pt-8 pb-8 text-center sm:text-xxl sm:leading-8 sm:font-black">{params?.heading}</h2>}

                    <div className="container">
                        <ul className="flex items-end sm:flex-nowrap sm:overflow-auto">
                            {params.menuItem.map((menu: ImenuItem, tabIndex: number) => (
                                <li
                                    key={tabIndex}
                                    className="flex-auto relative text-center text-sm font-semibold items-center">
                                    <span
                                        onClick={(e) => tabChanged(tabIndex)}
                                        className={(activeTab == tabIndex ? 'bg-pearl-zeta rounded-t-lg text-base  cursor-text md:text-x-base ' : 'rounded-t text-sm  md:text-13') + ' uppercase text-ruby-alpha leading-5 px-4 py-4 block text-center sm:px-3 sm:text-10 sm:leading-15 cursor-pointer'}
                                    >
                                        {menu?.name}
                                    </span>
                                    {tabIndex != params.menuItem.length - 1 && activeTab !== tabIndex && tabIndex + 1 !== activeTab && <span className="w-px h-5 inline-block top-0 absolute right-0 bottom-0 bg-ruby-beta/50 my-auto"></span>}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="clearfix"></div>
                    <div className="sm:px-6 md:px-6">
                        <div className="clearfix"></div>
                        <div className="mx-auto  sm:w-300px md:w-200">
                            <ListingRuby hideHeading={true} key={activeTab} searchText={searchText} ignoreUrlParams={true} pageRows={5} pageColumns={5} />
                        </div>
                    </div>

                </div>


            </div>

        </>
    );
    function getMachineName(input: string) {
        const query = '[$eq]=' + input;
        return subjectAPIService.getWholeData(input, 'sa_one,sa_one_five').then(function (response: any) {
            return response.data.data[0]?.attributes.sa_one.data[0].attributes.machine_name ? response.data.data[0].attributes.sa_one.data[0].attributes.machine_name : '';
        })
    }
}

export default ServiceBlockRuby;
