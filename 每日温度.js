var dailyTemperatures = function (temperatures) {
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                stack.push(j - i);
                break;
            }
            if (j == temperatures.length - 1 && temperatures[j] <= temperatures[i]) {
                stack.push(0);
            }
        }
    }
    stack.push(0);
    return stack;
};

var dailyTemperatures = function (tem) {
    const stack = [];
    const res = new Array();
    for (let i = 0; i < tem.length; i++) {
        let topValue = tem[stack[stack.length - 1]];
        if (stack.length == 0 || tem[i] <= topValue) {
            stack.push(i);
        }
        if (tem[i] > topValue) {
            while (tem[i] > topValue) {
                let index = stack.pop();
                res[index] = i - index;
                topValue = tem[stack[stack.length - 1]];
            }
            stack.push(i);
        }
    }
    while (stack.length > 0) {
        let index = stack.pop();
        res[index] = 0;
    }
    return res;
};


// 倒叙单调栈 模板
// https://leetcode-cn.com/problems/daily-temperatures/solution/shou-hui-ti-jie-fang-da-guan-cha-dan-diao-zhan-si-/

var dailyTemperatures = (tem) => {
    const res = new Array(tem.length).fill(0);
    const stack = [];
    for (let i = tem.length - 1; i >= 0; i--) {
        while (stack.length && tem[i] >= tem[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length) {
            res[i] = stack[stack.length - 1] - i;
        }
        stack.push(i);
    }
    return res;
};