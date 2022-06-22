// 动态规划类
// 动态规划类
function ways (n) {
    if(n == 0) return 1;
    const arr = [null, 1, 2]
    // for(let i = 3; n >=i ;n--) {
    for(let i = 3; i <= n; i++) {
        arr[i] = arr[i- 1] + arr[i - 2]
    }
    return arr[n]
}

// 递归类
function ways(n) {
    if(n == 0) return 1
    if(n == 1) return 1
    return ways(n - 1) + ways(n - 2)
}

// 优化递归缓存类
const res = [1,1]
function ways(n) {
  if(res[n] !== undefined) return res[n]
  res[n] = ways(n - 2) + ways(n - 1)
  return res[n]
}    

console.log(ways(10))