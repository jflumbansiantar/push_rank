var foo = 45 
var bar = '' + foo;
// console.log(typeof bar);

let ribu = ['', 'ribu', 'juta', 'milyar']

let satuan = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
let belasan = ['sepuluh', 'sebelas', 'belas']
var sekala = [
    { name: "triliun", size: 12 },
    { name: "milyar", size: 9 },
    { name: "juta", size: 6 },
    { name: "ribu", size: 3 },
    { name: "ratus", size: 2 },
    { name: "puluh", size: 1 }
    
];

function numberToString(l) {
    if (l != parseFloat(l)) return NaN;

    let x = l.toString(), y = [], minNum = "";

    for (let i = 0; i < sekala.length; i++) {
        
        if (x.length > sekala[i].size) { 
        
            var mag = x.length - sekala[i].size; 
        
            y.push(numberToString(x.substring(0, mag)) + " " + sekala[i].name); 
            // console.log(numberToString(x.substring(0, mag)))
        
            x = x.substring(mag).replace(/^[0]+/, ' '); 
        
        } 
	}

    l = parseInt(x, 10);
    
    if (l >= 20) {
        let bP = satuan[Math.floor(l/10)] + ' ' + puluhan[0]
        if (l % 10 !== 0) {
            bP += ' ' + satuan[l % 10]
        }
        y.push(bP)
        
    } else if (l >= 10) {
        if (l % 10 === 0) {
            y.push(belasan[0])
            
        } else if (l % 10 === 1) {
            y.push(belasan[1])
            
        } else {
            let bilanganBelasan = satuan[l % 10] + ' ' + belasan[2]
            y.push(bilanganBelasan)
            
        }

    } else if (l >= 0) {
        y.push(satuan[l])
    }

    let lastPart = y.pop()

    return minNum + (y.length > 0 ? y.join(',') + ' ' : '') + lastPart;
    
}

console.log(numberToString('34'))

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
// console.log(sorting(letter))