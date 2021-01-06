import dataSource from './data.json'

/* export function target() {
  let res = [];

  for (let i = 0; i < dataSource.length; i++) {
    let firstItem = {};
    let tempItem = dataSource[i];
    firstItem["label"] = tempItem["title"];
    firstItem["value"] = tempItem["code"];
    firstItem["childrens"] = tempItem["nodes"];
    res.push(firstItem);
  }

  console.log(res);
} */
export function target() {
  let res = [];

  for (let i = 0; i < dataSource.length; i++) {
    let firstItem = {}
    let tempItem = dataSource[i];
    firstItem["label"] = tempItem["title"];
    firstItem["value"] = tempItem["code"];
    firstItem["childrens"] = tempItem["nodes"];
    if (JSON.stringify(firstItem["childrens"] !== "{}")) {
      let secondRes = [];
      for (let j = 0; j < firstItem.length; j++) {
        let secondItem = {};
        let secondTemp = firstItem[j];
        secondItem["label"] = secondTemp["title"];
        secondItem["value"] = secondTemp["code"];
        secondItem["childrens"] = secondTemp["nodes"];
        if (JSON.stringify(secondItem["childrens"] !== "{}")) {

          let thirdRes = [];
          for (let k = 0; k < secondItem.length; k++) {
            let thirdItem = {};
            let thirdTemp = secondItem[k];
            thirdItem["label"] = thirdTemp["title"];
            thirdItem["value"] = thirdTemp["code"];
            thirdItem["childrens"] = thirdTemp["nodes"];
          }
          thirdRes.push(thirdItem)
        }
      }
      secondRes.push(secondItem)
    }
    res.push(firstItem);
  }
  console.log(res);
}

//dataSource原数据
//完善函数， 将目标数据转换成如下格式
// [{
//         "label": "湖南",
//         "value": "43232332",
//         "childrens": [{
//                 "label": "益阳",
//                 "value": "432423"
//             }
//             ...
//         ]
//     },
//     ...
//