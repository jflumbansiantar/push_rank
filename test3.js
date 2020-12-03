function testPalindrome(str, low, high) {

}

const palindrome = (str) => {
    let n = str.length;
    let table = new Array(n);

    for (var x = 0; x < table.length; x++) {
        table[x] = new Array(n);
    }

    let maxLength = 1;
    let i = 0;
    let start = 0;

    while (i < n) {
        table[i][i] = true;
        i = i + 1;
    }
    // console.log(table, '-table 1')

    i = 0;
    while (i < (n - 1)) {
        if (str[i] === str[i + 1]) {
            table[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
        i = i + 1;
    }
    // console.log(table, '-table 2')
    let k = 3;
    while (k <= n) {
        i = 0;
        while (i < (n - k + 1)) {
            j = i + k - 1;
            // console.log(str[i], str[j])
            // console.log(table[i + 1][j - 1], '-ini apa?')
            // console.log(str[i] == str[j]);
            // console.log(table[i + 1][j - 1] && str[i] == str[j], '-ini apa?')
            if (table[i + 1][j - 1] && str[i] == str[j]) {
                table[i][j] = true;

                if (k > maxLength) {
                    start = i;
                    maxLength = k;
                }
            }
            i = i + 1;
        }
        k = k + 1;
    }
    function testPalindrome(str, low, high) {
        let newStr = "";
        for (let i = low; i <= high; i++) {
            newStr += str.charAt(i);
        }
        console.log(newStr);
    }
    testPalindrome(str, start, start + maxLength - 1);

}
palindrome('forgeeksskeegfor')