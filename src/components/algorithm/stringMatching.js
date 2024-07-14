
export function sorted_matching(data_arr, target_str, key) {
    let filter_arr = [];
    let target_size = target_str.length;
    let normalizedTarget = target_str.toLowerCase()

    function binarySearch(arr, target, key) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let mid_str = arr[mid][key].substring(0, target_size).toLowerCase();

            if (mid_str < target) {
                left = mid + 1;
            } else if (mid_str > target) {
                right = mid - 1;
            } else {
                while (mid > 0 && arr[mid - 1][key].substring(0, target_size).toLowerCase() === target) {
                    mid--;
                }
                return mid;
            }
        }
        return -1;
    }

    let startIndex = binarySearch(data_arr, normalizedTarget, key);

    if (startIndex !== -1) {
        for (let i = startIndex; i < data_arr.length; i++) {
            if (data_arr[i][key].substring(0, target_size).toLowerCase() === normalizedTarget) {
                filter_arr.push(data_arr[i][key]);
            } else {
                break;
            }
        }
    }

    return filter_arr;
}


export function unsorted_matching(data_arr, target_str, key) {
    let filter_arr = [];
    let target_size = target_str.length;
    
    let substringMap = new Map();
    
    for (let i = 0; i < data_arr.length; i++) {
        let user_match_str = data_arr[i][key].substring(0, target_size);
        if (!substringMap.has(user_match_str)) {
            substringMap.set(user_match_str, []);
        }
        substringMap.get(user_match_str).push(data_arr[i][key]);
    }
    
    if (substringMap.has(target_str)) {
        filter_arr = substringMap.get(target_str);
    }

    return filter_arr;
}
