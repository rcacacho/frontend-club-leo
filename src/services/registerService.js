import { create } from "apisauce";
import environment from "../environments/environment"

const api = create({
    baseURL: environment.baseApiUrl,
    headers: {
        // "Cache-Control": "no-cache",
        Accept: "/",
        Version:"0.0.1"
        // "Content-Type": "application/json",
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaHIzNDVAaG90bWFpbC5jb20iLCJqdGkiOiIwODNiNzdjMi1kYzBiLTQ5YTgtYWRjMC1jODU0MmU4Yjg5ZTYiLCJlbWFpbCI6ImRocjM0NUBob3RtYWlsLmNvbSIsInVpZCI6ImEzZTkyYmRkLWFiNmMtNGU1Yy05NmM3LTEyZDAzYzYzNzIzMSIsInJvbGVzIjoiQ2xpZW50ZSIsImV4cCI6MTYzODU1MDE4MSwiaXNzIjoiU2VjdXJlQXBpIiwiYXVkIjoiU2VjdXJlQXBpVXNlciJ9.TiBWPy4OvkAO-I-jbaVNyiL1WMUlIXunpn5KN2jVDpw',
        // credentials: 'same-origin'
    },
    timeout: 15000
});

export const getCountries = async() =>{
    try {
        const countries = await api.get('/resources/countries')
        return countries.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}
export const getCities = async(id) =>{
    try {
        const cities = await api.get(`/resources/cities?CountryId=${id}`)
        return cities.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}

export const getPersonType = async () =>{
    try {
        const personType = await api.get(`/resources/personTypes`)
        return personType.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}

export const getAdditionalType = async(id) =>{
    try {
        const additionalType = await api.get(`/resources/additionalTypes?PersonTypeId=${id}`)
        return additionalType.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}

export const getCategories = async()=>{
    try {
        const categories = await api.get(`/resources/categories`)
        return categories.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}

export const getDocumentType = async(country, type) =>{
    try {
        const documentType = await api.get(`/resources/documentTypes?CountryId=${country}&PersonTypeId=${type}`)
        return documentType.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}

export const register = async(input) =>{
    const user = await api.post(`/auth/users`, input)
    try {
        return user.data
    } catch (error) {
        console.log("Algo malo ocurrio");
        console.log(error);
        return [`${error}`]
    }
}