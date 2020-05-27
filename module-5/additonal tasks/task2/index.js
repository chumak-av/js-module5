const arr = ['h2@Hello, World!', 'span@Kyky', 'p@Lorem ipsum dolor.', 'a@Href'];
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('');
    arr[i].unshift('/');
    arr[i].unshift('<');
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == "@") {
            arr[i].splice(j, 1, ">");
            arr2[i] = arr[i].slice(0, j + 1);
            arr[i].splice(1, 1);
            arr[i] = arr[i].concat(arr2[i]);
            console.log(arr[i])
        }

    }
}