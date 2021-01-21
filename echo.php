<?php
    
    function FizzBuzz($number){
        for($l = 1; $l <= $number ; $l ++) {
            // if ($l % 3 == 0 && $l % 5 == 0) {
            //     echo "FizzBuzz\n";
            // } elseif ($l % 3 == 0) {
            //     echo "Fizz\n";
            // } elseif ($l % 5 == 0) {
            //     echo "Buzz\n";
            // } else {
            //     echo $l . "\n";
            // }

            echo ($l % 3 == 0 && $l % 5 == 0) ? ($l % 3 == 0) ? "FizzBuzz\n" : "Fizz\n" : ($l % 5 == 0) ? "Buzz\n" : $l . "\n" ;
        }
    }
    // FizzBuzz(105);

    function Fibonachi($number) {
        if ($number == 1) {
            echo 0, 1;
        } else {
            
        }
    }

    Fibonachi(7)

?>