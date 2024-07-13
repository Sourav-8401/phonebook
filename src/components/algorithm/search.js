let sortedData = [{
    "sn_no": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "mobile_number": "+1234567890"
  },
  {
    "sn_no": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "mobile_number": "+1234567891"
  },
  {
    "sn_no": 3,
    "name": "Robert Brown",
    "email": "robertbrown@example.com",
    "mobile_number": "+1234567892"
  }];


export function binarySearch(users, targetName) {
    const normalizedTarget = targetName.toLowerCase().replace(/\s/g, '');

    let left = 0;
    let right = users.length - 1;
    console.log(left + right);
    console.log(normalizedTarget)
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midName = users[mid].name.toLowerCase().replace(/\s/g, '');
        console.log("midname is: "+midName);
        if (midName === normalizedTarget) {
            return users[mid];
        } else if (midName < normalizedTarget) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null; 
}
const result = binarySearch(sortedData,"jane smith");
console.log("result is  : "+result.email);