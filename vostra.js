/**
 * Soal 3
 * 1. In = 4
 * output = 1223334444333221
 * 
 * 2. 23 => duapuluh tiga
 * 342 => ribuan 
 * rp. 15000 = lima belas ribu rupiah
 * 
 * 3. duapuluh tiga => 23
 * 
 */



 function fence(l) {
     let temp = []
     
     for (let a = 0; a <= l; a++) {
        //  let temp = ''
         for (let k = 1; k < l; k++) {
             for (let y = k; y > 1; y--) {
                    //  temp += '@';
             }
             for (let z = 1; z <= k; z++) {
                     temp += k;
             }
             
         }
          for (let m = l; m > 0; m--) {
             for (let n = 1; n < m; n++) {
                    //  temp += '#';
             }
             for (let o = m; o >= 1; o--) {
                 temp += m;
             }
            
            }
            // console.log(tmp1);
        temp += '\n'
    }
     console.log(temp)
     
}

fence(4);


//Soal 2.
// let satuan = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
// let belasan = ['sepuluh', 'sebelas', 'belas']
// var sekala = [
//     { name: "triliun", size: 12 },
//     { name: "milyar", size: 9 },
//     { name: "juta", size: 6 },
//     { name: "ribu", size: 3 },
//     { name: "ratus", size: 2 },
//     { name: "puluh", size: 1 }
    
// ];

// function numberToString(l) {
//     let x = l.toString(), y = [], minNum = "";

//     for (let i = 0; i < sekala.length; i++) {
//         if (x.length > sekala[i].size) { 
//             var mag = x.length - sekala[i].size; 
//             y.push(numberToString(x.substring(0, mag)) + " " + sekala[i].name); 
//             x = x.substring(mag).replace(/^[0]+/, ' '); 
//         } 
// 	}

//     l = parseInt(x, 10);
    
//     if (l >= 20) {
//         let bP = satuan[Math.floor(l/10)] + ' ' + puluhan[0]
//         if (l % 10 !== 0) {
//             bP += ' ' + satuan[l % 10]
//         }
//         y.push(bP)
        
//     } else if (l >= 10) {
//         if (l % 10 === 0) {
//             y.push(belasan[0])
            
//         } else if (l % 10 === 1) {
//             y.push(belasan[1])
            
//         } else {
//             let bilanganBelasan = satuan[l % 10] + ' ' + belasan[2]
//             y.push(bilanganBelasan)
            
//         }

//     } else if (l >= 0) {
//         y.push(satuan[l])
//     }

//     let lastPart = y.pop()

//     return minNum + (y.length > 0 ? y.join(',') + ' ' : '') + lastPart;
    
// }

// let l

