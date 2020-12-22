export function setStore(name, content) {
    if (!name) {
        return;
    }
    /*  if (typeof content !== "string") {
                          content = JSON.stringify(content);
                      } */
    // console.log("utils", JSON.stringify(content));
    localStorage.setItem(name, JSON.stringify(content));
}

export function getStore(name) {
    return JSON.parse(localStorage.getItem(name));
}