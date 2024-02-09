
const jump = (arr) => {
    //  store jump length
    // loop to jump length
    
    let jump_length = 0;
    let index = 0;
    let prev_index = 0;
    while (index < arr.length) {
        if (index !==0 && index === prev_index) {
            return false;
        } 
        if (index === arr.length - 1) {
            return true;
        }
        jump_length = arr[index];
        prev_index = index;
        index += jump_length;
    }
    return false;
}

const nums = [2,3,0,1,4]
console.log(jump(nums));