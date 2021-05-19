import axios from 'axios';

const API_URL = 'https://bot.casinoauto.io/api/';

class brandService {
    async checkBrand(subdomain) {
        const result = await axios
            .post(API_URL + 'check/brand', {
                subdomain: subdomain
            })
            .then((response) => {
                return response.data;
            }, (error) => {
                return error;
            })
        return result;
    }
}

export default new brandService();