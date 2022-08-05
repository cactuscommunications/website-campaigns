import axios from 'axios';
import { API } from '../../config/constants'

const subjectAPIService = {
    getSubjectsList: function (input: string, page: number, pageCount: number,machineType:string) {
        const config = {
            method: 'get',
            url: API.baseUrl + '/subject-areas?&filters[type][$eq]=SA2.0&pagination[pageSize]=' + pageCount + '&pagination[page]=' + page + (input ? '&filters['+machineType+'][machine_name][$eq]=' + input : ''),
            headers: { Authorization: API.token },
        };
        return axios(config)
            .then(function (response: any) {
                return response;

            })
            .catch(function (error: any) {
                console.log(error);
            });
    },

    getWholeData: function (input: string, key: string, filterType?: string) {
        let filter = '&filters[machine_name][$eq]=default';
        if (filterType == 'contains') {
            filter = input ? ('&filters[machine_name][$containsi]=' + input) : '';
        }
        else {
            filter = input ? ('&filters[machine_name][$eq]=' + input) : '';

        }
        const populate = '?populate[2]=' + key;
        const config = {
            method: 'get',
            url: API.baseUrl + '/subject-areas' + populate + filter,
            headers: { Authorization: API.token },
        };
        return axios(config)
            .then(function (response: any) {
                return response;
            })
            .catch(function (error: any) {
                console.log(error);
            });
    },
}

export default subjectAPIService;



