var foo = 45 
var bar = '' + foo;
// console.log(typeof bar);

let ribu = ['', 'ribu', 'juta', 'milyar']

let satuan = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let belas = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let puluhan = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function numberToString(l) {
    // let nts = '' + l
    // console.log(nts);
    // console.log(typeof nts);
    
    l = l.toString();
    l = l.replace(/[\, ]/g, '');
    if (l != parseFloat(l)) {return 'not a number'};

    let x_val = l.indexOf('.');
    if (x_val == -1) {
        x_val = l.length //panjang angka
    } else if (x_val > 15) {
        return 'terlalu besar'
    }

    let n_val = l.split('');
    var str_val = ''; //penampung bilangan 
    var sk_val = 0;

    for (let i = 0; i < x_val; i++) { //loop semua huruf dalam angka
        if ((x_val - i) % 3 == 2) {
            if (n_val[i] == '1') {
                str_val += belas[Number(n_val[i + 1])] + ' ';
                i++;
                sk_val = 1;
            } else if (n_val[i] != 0) {
                str_val += puluhan[n_val[i] - 2] + ' ';
                sk_val = 1;
            } else if (n_val[i] != 0) {
                str_val += dg_val[n_val[i]] + ' ';
                if ((x_val - i) % 3 == 00) {
                    str_val += 'ratus'
                }
                sk_val = 1;
            }
            if ((x_val - i) % 3 == 1) {
                if (sk_val) {
                    str_val += th_val[(x_val - i - 1) / 3] + ' ';
                }
                sk_val = 0;
            }
        }
        if (x_val != l.length) {
            let y_val = l.length;
            str_val += 'point';
            for (let i = x_val + 1; i < y_val; i++) {
                str_val += satuan[n_val[i]] + ' ';
            }
        }
    }
    return str_val.replace(/\l+/g, ' ');

}

// console.log(numberToString('900'))

function sorting(array) {
    if (array.length <= 1) return array
    if (array != Number) return Error
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            
            if (array[j - 1] > array[j]) {
                [array[j - 1], array[j]] = [array[j], array[j - 1]];
            }
        }
    }
    return array
}
let number = [90, 5, 64, 32, 1, 78, 29]
let letter = ['f', 'a', 'e', 'b', 'd', 'z', 'h']
let mix = [1, 'f', 9, 'a', 52, 'l', 8, 'k', 'l']
console.log(sorting(mix))