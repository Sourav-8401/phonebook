export function filter(data_arr, target_str, key) {
    let filter_arr = [];

    for (let i = 0; i < data_arr.length; i++) { 
        if (data_arr[i][key] == target_str) { 
            filter_arr.push(data_arr[i]);
        }
    }
    return filter_arr;
}
