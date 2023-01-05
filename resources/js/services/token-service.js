import FetchService from "./fetch-service";

export default class TokenService extends FetchService {
    fetchToken = async () => {
        return await this.getData('/sanctum/csrf-cookie');
    }
};