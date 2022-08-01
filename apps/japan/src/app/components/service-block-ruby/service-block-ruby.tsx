import { useEffect, useState } from "react";
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
    let [searchText, setSearchText] = useState('')
    const params: IserviceBlockRubyParams = {
        desktopOnly: true,
        heading: "その他の専門分野をお探しですか？",
        "menuItem": [
            {
                "name": "all",
                "machineName": ""
            },
            {
                "name": "MEDICINE",
                "machineName": "medicine"
            },
            {
                "name": "LIFE SCIENCES",
                "machineName": "life-sciences"
            },
            {
                "name": "PHYSICAL SCIENCES AND ENGINEERINGine",
                "machineName": "physical-sciences-and-engineering"
            },
            {
                "name": "HUMANITIES AND SOCIAL SCIENCES",
                "machineName": "humanities-and-social-sciences"
            },
            {
                "name": "BUSINESS AND ECONOMICS",
                "machineName": "business-and-economics"
            },

        ]
    };
    useEffect(() => {
        setSearchText( params.menuItem[activeTab].machineName)
    }, [searchText]);
    const tabChanged = (index: number) => {
        setActiveTab(index)
        const selectedMachineName: string = params.menuItem[index].machineName;
        setSearchText(selectedMachineName);
    }
    return (
        <>
            <div className={params?.desktopOnly ? 'md:hidden sm:hidden ' : ' '} >
                <div className="w-full mx-auto mt-20 sm:w-full md:w-full md:px-7">
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
                            <ListingRuby hideHeading={true} searchText={searchText} ignoreUrlParams={true} pageRows={5} limit={25}/>
                        </div>
                    </div>

                </div>


            </div>

        </>
    );
}

export default ServiceBlockRuby;
