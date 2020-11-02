export const setLocal = (name, value) => {
    localStorage.setItem(name, value);
    console.log("utils page:-----", name, value);
};
export const getLocal = (name) => {
    return localStorage.getItem(name);
};