export const setLocal = (name, value) => {
    localStorage.setItem(name, value);
};
export const getLocal = (name) => {
    return localStorage.getItem(name);
};

// arr--原始数组； param--对比的具体key
// 返回的isDuplicate即是否有重复；
// 返回的newArr即过掉过后的新数组，感觉大部分时候我们想要的只是一个不重复的数组而已；
export function ArrayDuplicate(arr, param) {
    if (Array.isArray(arr)) {
        let temp = [];
        let newArr = arr.reduce((acc, cur) => {
            if (temp.indexOf(cur[param]) === -1) {
                temp.push(cur[param]);
                acc.push(cur);
                return acc;
            } else {
                console.log(acc);
                return acc;
            }
        }, []);

        // 可以用别的方法判断是否有重复，毕竟已经把重复的项过滤掉了
        let isDuplicate = newArr.length === arr.length;

        return { newArr, isDuplicate };
    }
    //  ArrayDuplicate(state.storeList, "shopId"); // 验证是否有相同shopId
}