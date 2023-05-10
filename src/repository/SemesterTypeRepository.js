import axios from "../custom-axios/axios";


const SemesterTypeService = {

    getAllSemesterTypes: () => {
        return axios.get(`/semester/type/all`)
    },

    getSemesterType: (index) => {
        return axios.get(`/semester/type/${index}`)
    },

}

export default SemesterTypeService
