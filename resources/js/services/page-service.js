import { isString } from "./check-types";

export default class PageService {
    static setTitle = (newTitle) => {
        if (!isString(newTitle)) {
            return console.error('В качестве заголовка страницы принимается только строка!');
        }

        document.title = newTitle;
    }
}