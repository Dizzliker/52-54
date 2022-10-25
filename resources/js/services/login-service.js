import FetchService from "./fetch-service";

export default class LoginService extends FetchService {
    fetchLogin = async (formData) => {
        return await this.postData('/login', formData);
    }
};