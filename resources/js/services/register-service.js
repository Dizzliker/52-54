import FetchService from "./fetch-service";

export default class RegisterService extends FetchService {
    fetchRegister = async (formData) => {
        return await this.postData('/register', formData);
    }
};