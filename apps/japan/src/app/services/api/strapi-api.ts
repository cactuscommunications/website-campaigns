import axios from 'axios';

const baseUrl = process.env["NX_HOST"]
const token = process.env["NX_TOKEN"] ? process.env["NX_TOKEN"] : ''
 
interface IPageParams {
    route: string;
    partner:string;
    country?: string;
  }
const strapiAPIService = {
    getPage: function (params:IPageParams) {
        const config = {
            method: 'get',
            url: baseUrl + '/pages',
            headers: { Authorization: token },
            params : params
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

export default strapiAPIService;
