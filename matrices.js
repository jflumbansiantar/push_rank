// //Learn how to make matrix multiplication

// function matrix(m, n) {
//     let res = [];
//     for (let index = 0; index < m; index++) {
//         const element = m[index];
//         for (let j = 0; j < m; j++) {
//             const element = array[j];

//         }

//  }

//     return res
// }

// console.log(matrix(3, 5));

// var x = 0;
// function getData(){
//     x = x + 1;
//     return x
// } 
// if (getData()> 0 && getData()< 10){
//     console.log(x, '--hasil')
// }

// function find(n, L, start, end) {
//     var length = end - start;
//     var i = start + length / 2;
//     if (start > end) {
//         return -1
//     } else if (start == end) {
//         if (n == L[i]) {
//             return i;
//         } else {
//             return -1;
//         }
//     } else if (n == L[i]) {
//         return i;
//     } else if (n > L[i]) {
//         return find(n, L, i + 1, end);
//     } else {
//         return find(n, L, start, i - 1)
//     }



// var i = start;
// while (i <= end) {
//     if (n == L[i]) {
//         return i
//     }
//     i = i + 1
// }
// return -1
// }

// var L = [1, 2, 2]
// console.log(find(2, L, 0, 2))

// var i = 0;
// while (i < 10) {
//     i = i + 1;
//     console.log(i);
//     if (2 * i == i + i) {
//         break;
//     }
// if(i % 2 == 0){
//     console.log(i + 1)
// }
// }

// let x = 1000;
// while (x > 0) {
//     console.log(x % 10)

//         x = Math.floor(x / 10)


// }

// var s = 'HelloWorld!!!=)'
// var i = 0;
// while (i + 1 < s.length) {
//     if (s.charAt(i) != s.charAt(i + 1)) {
//         console.log(s.charAt(i));
//     }
//     i = i + 1
// }

var n = 5;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        console.log(' ')
    }
    for (let k = 1; k <= i; k++) {
        console.log('X')
    }
    console.log('/n')

}