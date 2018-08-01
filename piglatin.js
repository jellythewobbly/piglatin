let input = process.argv[2];
let vowels = ['a', 'e', 'i', 'o', 'u'];
let res = (input) => {
    if (input.slice(0, 2) == 'qu' || input.slice(0,3) == 'squ') {
        let part = input.slice(0, input.indexOf('qu') + 2);
        return input.slice(input.indexOf('u') + 1) + part + 'ay';
    } else if (vowels.indexOf(input[0]) != -1) {
        return input + 'way';
    } else if (vowels.indexOf(input[1]) != -1) {
        return input.slice(1) + input[0] + 'ay';
    } else {
        return input.slice(2) + input.slice(0,2) + 'ay';
    }
}

console.log(res(input));