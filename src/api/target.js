import dataSource from "./data.json";

export function target() {
    let res = [];
    for (let i = 0; i < dataSource.length; i++) {
        let first = dataSource[i];
        let firstItem = {};
        firstItem.label = first.title;
        firstItem.value = first.code;
        firstItem.children = [];

        if (first.nodes.length !== 0) {
            for (let j = 0; j < first.nodes.length; j++) {
                let sec = first.nodes[j];
                let secondItem = {};
                secondItem.label = sec.title;
                secondItem.value = sec.code;
                secondItem.children = [];

                if (sec.nodes.length !== 0) {
                    for (let k = 0; k < sec.nodes.length; k++) {
                        let third = sec.nodes[k];
                        let thirdItem = {};
                        thirdItem.label = third.title;
                        thirdItem.value = third.code;
                        thirdItem.children = [];

                        if (third.nodes.length !== 0) {
                            for (let m = 0; m < third.nodes.length; m++) {
                                let fourth = third.nodes[m];
                                let forthItem = {};
                                forthItem.label = fourth.title;
                                forthItem.value = fourth.code;
                                forthItem.children = [];
                                if (fourth.node.length !== 0) {
                                    for (let n = 0; n < fourth.nodes.length; n++) {
                                        let fifth = fourth.node[n];
                                        let fifItem = {};
                                        fifItem.label = fifth.title;
                                        fifItem.value = fifth.code;
                                        fifItem.children = fifth.node;
                                        forthItem.children.push(fifItem);
                                    }
                                }
                                thirdItem.children.push(forthItem);
                            }
                        }
                        secondItem.children.push(thirdItem);
                    }
                }
                firstItem.children.push(secondItem);
            }
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
//         "children": [{
//                 "label": "益阳",
//                 "value": "432423"
//             }
//             ...
//         ]
//     },
//     ...
// ]