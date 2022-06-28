var maxArea = function(height) {
    let sum = 0;
    let left = 0;right = height.length - 1;
    while(right > left) {
        if(height[left] >= height[right]) {
            let value = Math.min(height[left], height[right]) * (right - left)
            sum = Math.max(value, sum)
            right--
        }else{
            let value = Math.min(height[left], height[right]) * (right - left)
            sum = Math.max(value, sum)
            left++
        }
    }
    return sum;
};