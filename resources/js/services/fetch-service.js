import { isObject } from "./check-types";

export default class FetchService {
    constructor() {
        this._api = `${location.origin}/api`;
        this.csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    }

    getData = async (url) => {
        try {
            const res = await fetch(`${this._api}${url}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "X-CSRF-TOKEN": this.csrfToken,
                    "Authorization": `Bearer ${Cookie.getToken()}`,
                }
            });
        
            if (!res.ok) {
              throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
            }
            return (await res).json();
        } catch (error) {
            console.warn(error);
        }
    };

    postData = async (url, data, auth = true) => {
        try {
            const response = fetch(`${this._api}${url}`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "X-CSRF-TOKEN": this.csrfToken,
                    "Authorization": '',
                },
                body: this.toFormData(data),
            })
            return (await response).json();
        } catch (error) {
            console.warn(error);
        }
    };

    toFormData = (data = {}) => {
        if (!isObject(data)) {
            return console.error('В качестве данных принимается только объект!');
        }
        
        const formData = new FormData();
        
        for (const key in data) {
            formData.append(key, data[key]);
        };

        return formData;
    };
};