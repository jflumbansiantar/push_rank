/**
 * TASK 1
 * Please make a function to calculate how many prime number in a 1 to n?
 * e.g
 * input n = 10;
 * output = 4;
 *
 * input n = 1000;
 * output = 168;
 */

const prime = (n) => {
    //Make a temporary variable to count primes
    let temp = 0;
    //Loop the n number
    for (let i = 1; i <= n; i++) {
        //Declare another temporary variable
        let number = 0;
        //Loop the i to compare with j
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                number = 1;
                break
            }
        }
        //Check if i is a prime or not 
        if (i > 1 && number === 0) {
            temp++;
        }
    }
    console.log(temp)
}

// prime(10)
// prime(1000)


/**
 * TASK 2
 * Given a string S, find the longest palindromic substring in S. Substring of string S: s[ i......j ] where 0 <= i <= j < len(S).
 * Palindrome string: A string which reads the same backwards. More formally, S is palindrome if reverse(S) = S.
 * Incase of conflict, return the substring which occurs first (with the least starting index).
 *
 * Note: Required Time Complexity O(n2)
 * Input: The first line of input consists number of the test cases. The following T lines consist of a string each.
 * Output: In each separate line print the longest palindrome of the string given in the respective test case.
 *
 * Constraints:
 * 1<= T <= 100;
 * 1<= String length <= 104;
 *
 * e.g:
 * Input : 
 * 1
 * aaaabbaa
 * 
 * Output : Aabbaa
 */

// let S = 'eye'
// Substring of S = 'e', 'y', 'e'

//Take input from the user 
const palindrome = (str) => {
    //A temporary array to put letters from strings
    let tempString = new Array(str.length);
    for (let x = 0; x < tempString.length; x++) {
        tempString[x] = new Array(str.length);
    }

    //Letters in the String
    let maxLength = 1;
    let i = 0;
    let start = 0;

    //check if letter is 1
    while (i < str.length) {
        tempString[i][i] = true;
        i = i + 1;
    }

    //Check if letters of the string are 2
    i = 0; //re-assign the i
    while (i < (str.length - 1)) {
        if (str[i] === str[i + 1]) {
            tempString[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
        i = i + 1;
    }

    //Check if the letters of the string are greater than 2
    let k = 3;
    while (k <= str.length) {
        i = 0;
        while (i < (str.length - k + 1)) {
            j = i + k - 1;

            if (tempString[i + 1][j - 1] && str[i] == str[j]) {
                tempString[i][j] = true;

                if (k > maxLength) {
                    start = i;
                    maxLength = k;
                }
            }
            i = i + 1;
        }
        k = k + 1;
    }
    //Print the palindrome letters in strings
    function testPalindrome(str, low, high) {
        let newStr = "";
        for (let i = low; i <= high; i++) {
            newStr += str.charAt(i);
        }
        console.log(newStr);
    }
    testPalindrome(str, start, start + maxLength - 1);

}

// palindrome('forgeeksskeegfor')


/**
* TASK 3
* Given a set of characters and a positive integer k, print all possible strings of length k that can be formed from the give set.
*
* e.g:
* Input :
* set[] = {'a', 'b'}
* k= 3
* 
* Output :
* aaa
* aab
* aba
* abb
* baa
* bab
* bba
* bbb
*/

const shuffle = (str, l) => {
    //Declare the array length
    let len = str.length;
    //Declare function for all the probability that can make from the array  with 'l' characters
    function probability(str, shuffler, len, l) {
        //check the l
        if (l === 0) {
            //Print the shuffle of the array
            console.log(shuffler);
            return
        }
        // Loop all the characters in the array to add them
        for (let i = 0; i < len; i++) {
            let newShuffler = shuffler + str[i];
            probability(str, newShuffler, len, l - 1);
        }
    }
    //call the probability function
    (probability(str, "", len, l));
}


let str1 = ['a', 'b', 'c'], l = 3

shuffle(str1, l)