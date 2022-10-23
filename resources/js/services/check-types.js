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

const isMin = (string, char) => {
    return string.length >= +char ? true : false; 
};

const isMax = (string, char) => {
    return string.length <= +char ? true : false;
};

export {
    isEmpty,
    isEmail,
    isObject,
    isMin,
    isMax,
};