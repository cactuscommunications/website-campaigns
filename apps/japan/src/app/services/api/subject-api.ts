import axios from 'axios';

const subjectAPIService = {
    getSubjectsList: function (input: string,page : number) {
        
        const config = {
            method: 'get',
            url: 'https://test.cms.campaign.cactusops.com/api/subject-areas?&filters[type][$eq]=SA2.0&pagination[page]='+page + (input ? '&filters[sa_one][machine_name][$eq]=' + input : '') ,
            headers: {
                Authorization:
                    'Bearer 4c8a2f6a81e58a10e600657dd6c84caefbf625f332d79e209d453439444eea03e6af68de73ac6efce2f36f72bae705451bbd26c9ce4f31555dace92976c1f50b0f799fd72d1db0151cfa2795b52da596418661930d583b375ee4f021274a0e9ebc0c2719c1323944104eb93a5e9ea09f0e1d282ebab115fdd98ea66177435e66',
            },
        };
        return axios(config)
            .then(function (response: any) {
                return response;

            })
            .catch(function (error: any) {
                console.log(error);
            });
    },
    getSearchList: function (serachText: string) {
        const config = {
            method: 'get',                                                        
            url: 'https://test.cms.campaign.cactusops.com/api/subject-areas?populate[1]=sa_one&filters[machine_name][$containsi]=' + serachText,
            headers: {
                Authorization:
                    'Bearer 4c8a2f6a81e58a10e600657dd6c84caefbf625f332d79e209d453439444eea03e6af68de73ac6efce2f36f72bae705451bbd26c9ce4f31555dace92976c1f50b0f799fd72d1db0151cfa2795b52da596418661930d583b375ee4f021274a0e9ebc0c2719c1323944104eb93a5e9ea09f0e1d282ebab115fdd98ea66177435e66',
            },
        };
        return axios(config)
            .then(function (response: any) {
                return response;
            })
            .catch(function (error: any) {
                console.log(error);
            });
    },
    getServiceFeatures: function (input:string) {
        const config = {
            method: 'get',
            url: 'https://test.cms.campaign.cactusops.com/api/subject-areas?populate[2]=sa_one.sa_testimonials,sa_one_five.social_attributes,sa_one.journals,sa_one_five.editors&filters[machine_name][$eq]=' + input,
            headers: {
                Authorization:
                    'Bearer 4c8a2f6a81e58a10e600657dd6c84caefbf625f332d79e209d453439444eea03e6af68de73ac6efce2f36f72bae705451bbd26c9ce4f31555dace92976c1f50b0f799fd72d1db0151cfa2795b52da596418661930d583b375ee4f021274a0e9ebc0c2719c1323944104eb93a5e9ea09f0e1d282ebab115fdd98ea66177435e66',
            },
        };
        return axios(config)
            .then(function (response: any) {
                return response;
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }
}

export default subjectAPIService;



