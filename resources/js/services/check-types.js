const emailRegex = /^\S+@\S+\.\S+$/;

const isEmpty = (value) => {
    return value ? false : true;
};

const isEmail = (value) => {
    return value.match(emailRegex) === null ? false : true;
};

const isObject = (value) => {
    return typeof value === 'object' && !Array.isArray(value);
};

const isEmptyObject = (value) => {
    if (!isObject(value)) {
        console.error('В качестве проверки на пустое значение принимается только объект!');
    }

    return Object.keys(value).length > 0 ? false : true;
};

const isMin = (string, char) => {
    return string.length >= +char ? true : false; 
};

const isMax = (string, char) => {
    return string.length <= +char ? true : false;
};

const isString = (value) => {
    return typeof value === 'string' ? true : false;
};

export {
    isEmpty,
    isEmail,
    isObject,
    isEmptyObject,
    isMin,
    isMax,
    isString,
};