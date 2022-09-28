import { setFlagsFromString } from "v8";
import { PARTNER } from "../../config/constants";
const url = new URL(location.href);

const pageService = {
    getPartner: function () {
        let tld: string = url.hostname.replace(/^(local|(development)(\d?)|staging|www)\./, '')
        // @ts-ignore  
        return PARTNER[tld]?.code ? PARTNER[tld].code : 'JPN';
    },
    getRoute : function () {
        return url.pathname ? url.pathname : '/';
    },
    getCountry : function () { //TODO
        return 'all';
    }
}

export default pageService;
