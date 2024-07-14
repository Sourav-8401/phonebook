export function reverse(user_arr) {
    let reversed_arr = [];
  
    for (let i = user_arr.length - 1; i >= 0; i--) {
      reversed_arr.push(user_arr[i]);
    }
  
    return reversed_arr;
}



