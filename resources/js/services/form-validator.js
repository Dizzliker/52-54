export default class FormValidator {
    constructor() {
        this.postfix = {
            error: 'Error',
            confirm: 'Confirm',
        };
        this.emailRegex = /^\S+@\S+\.\S+$/;
    }

    validate(data = {}) {
        if (typeof data !== 'object') {
            return console.error('В качестве данных для валидации принимается только объект!');
        }

        const validationErors = {};

        for (const key in data) {
            if (!this.isObject(data[key])) {
                return console.error('В качестве свойств валидации принимается только объект!');
            }

            const {value, types} = data[key];

            types.some(currentType => {
                const errorKey = `${key}${this.postfix.error}`;
                const validationRule = currentType.split(':');
                const type = validationRule[0];
                const ruleValue = validationRule[1];

                if (type === 'required') {
                    if (this.isEmpty(value)) {
                        validationErors[errorKey] = 'Поле обязательно для заполнения';
                        return true;
                    }
                }
                if (type === 'email') {
                    if (!this.isEmail(value)) {
                        validationErors[errorKey] = 'Неверный формат почты';
                        return true;
                    }
                }
                if (type === 'min') {
                    if (!this.isMin(value, ruleValue)) {
                        validationErors[errorKey] = `Минимальная длина поля ${ruleValue} символов`;
                        return true;
                    }
                }
                if (type === 'confirmed') {
                    const {value: valueConfirm} = data[`${key}${this.postfix.confirm}`];
                    if (value !== valueConfirm) {
                        validationErors[`${key}${this.postfix.error}`] = 'Значение полей не совпадает';
                        validationErors[`${key}${this.postfix.confirm}${this.postfix.error}`] = 'Значение полей не совпадает';
                        return true;
                    }
                }
            });
        }

        return validationErors;
    }

    isEmpty(value) {
        return value ? false : true;
    }

    isEmail(value) {
        return value.match(this.emailRegex) === null ? false : true;
    }

    isObject(value) {
        return typeof value === 'object' && !Array.isArray(value);
    }

    isMin(string, char) {
        return string.length >= +char ? true : false; 
    }
};