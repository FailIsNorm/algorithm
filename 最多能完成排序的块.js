var maxChunksToSorted = function(arr) {
    // 单调栈
    // 1. 后一个块里的最小值 大于 前一个块的最大值
    // 2. 循环遍历数组，先假设每一个元素都能作为一个独立的块，push 到栈里
    // 3. 整个过程记录下 栈顶的最大值
    // 4. 当遇到小于栈顶的值时，就需要先 pop 出栈，直到找到大于它的值，而过程中 pop 出去的元素也是可以丢弃的，
    // 因为它们都在这两个值范围内，且一定是属于一个块的
    const stack = [];
    let max = -1;
    for (const num of arr) {
        if (num > max) {
            max = num;
            stack.push(num);
        } else {
            while (stack.length && num < stack[stack.length - 1]) {
                stack.pop();
            }
            stack.push(max);
        }
    }
    return stack.length;
};