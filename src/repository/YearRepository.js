import axios from "../custom-axios/axios";

const YearService = {

    getAllYears: () => {
        return axios.get(`/year/all`)
    },

    getYear: (index) => {
        return axios.get(`/year/${index}`)
    },

}

export default YearService
