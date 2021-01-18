const reverseWord = (str) => {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')

}
// console.log(reverseWord('main main ke kapal'))

function filter_list(l) {
    return l.filter(e => Number.isInteger(e))
}
let b = [1, 3, 'a', 'h', 5, 'e', 'y']
// console.log(filter_list(b))

function censorWords(infected, discovered) {
    //algoritma
    /**
     * jika tidak ada discovered, return infected
     * jika ada discovered, map semua elemen dan bandingkan dengan elemen discovered
     * jika ketemu, ganti elemen tersebut menjadi apapun
     */

    // if (infected.length === 0 || !infected.includes('*')) return infected;
    for (let i of discovered) {
        infected = infected.replace('*', i);
    }
    return infected;
}


let a = 'The queen is tired'
let x = 'e';
console.log(censorWords(a, x));