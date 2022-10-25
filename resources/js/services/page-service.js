import { isString } from "./check-types";

export default class PageService {
    static title = document.querySelector('title');

    static setTitle = (newTitle) => {
        if (!isString(newTitle)) {
            return console.error('В качестве заголовка страницы принимается только строка!');
        }

        this.title.textContent = newTitle;
    }
}