import axios from 'axios';

const baseUrl = process.env["NX_HOST"]
const token = process.env["NX_TOKEN"] ? process.env["NX_TOKEN"] : ''

const subjectAPIService = {
    getSubjectsList: function (input: string, page: number, pageCount: number,machineType:string) {
        const config = {
            method: 'get',
            url: baseUrl + '/subject-areas?&filters[type][$eq]=SA2.0&pagination[pageSize]=' + pageCount + '&pagination[page]=' + page + (input ? '&filters['+machineType+'][machine_name][$eq]=' + input : ''),
            headers: { Authorization: token },
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
            url: baseUrl + '/subject-areas' + populate + filter,
            headers: { Authorization:token },
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
