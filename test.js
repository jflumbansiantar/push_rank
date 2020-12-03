// // A C++ dynamic programming 
// // solution for longest palindrome 

// #include <bits/stdc++.h> 
// using namespace std; 

// // Function to print a substring 
// // str[low..high] 
// void printSubStr( 
// 	string str, int low, int high) 
// { 
// 	for (int i = low; i <= high; ++i) 
// 		cout << str[i]; 
// } 

// // This function prints the 
// // longest palindrome substring 
// // It also returns the length of 
// // the longest palindrome 
// int longestPalSubstr(string str) 
// { 
// 	// get length of input string 
// 	int n = str.size(); 

// 	// table[i][j] will be false if substring 
// 	// str[i..j] is not palindrome. 
// 	// Else table[i][j] will be true 
// 	bool table[n][n]; 

// 	memset(table, 0, sizeof(table)); 

// 	// All substrings of length 1 
// 	// are palindromes 
// 	int maxLength = 1; 

// 	for (int i = 0; i < n; ++i) 
// 		table[i][i] = true; 

// 	// check for sub-string of length 2. 
// 	int start = 0; 
// 	for (int i = 0; i < n - 1; ++i) { 
// 		if (str[i] == str[i + 1]) { 
// 			table[i][i + 1] = true; 
// 			start = i; 
// 			maxLength = 2; 
// 		} 
// 	} 

// 	// Check for lengths greater than 2. 
// 	// k is length of substring 
// 	for (int k = 3; k <= n; ++k) { 
// 		// Fix the starting index 
// 		for (int i = 0; i < n - k + 1; ++i) { 
// 			// Get the ending index of substring from 
// 			// starting index i and length k 
// 			int j = i + k - 1; 

// 			// checking for sub-string from ith index to 
// 			// jth index iff str[i+1] to str[j-1] is a 
// 			// palindrome 
// 			if (table[i + 1][j - 1] && str[i] == str[j]) { 
// 				table[i][j] = true; 

// 				if (k > maxLength) { 
// 					start = i; 
// 					maxLength = k; 
// 				} 
// 			} 
// 		} 
// 	} 

// 	cout << "Longest palindrome substring is: "; 
// 	printSubStr(str, start, start + maxLength - 1); 

// 	// return length of LPS 
// 	return maxLength; 
// } 

// // Driver Code 
// int main() 
// { 
// 	string str = "forgeeksskeegfor"; 
// 	cout << "\nLength is: "
// 		<< longestPalSubstr(str); 
// 	return 0; 
// } 



// # Python program 

// import sys 

// # A utility function to print a 
// # substring str[low..high] 
// def printSubStr(st, low, high) : 
// 	sys.stdout.write(st[low : high + 1]) 
// 	sys.stdout.flush() 
// 	return '' 

// # This function prints the longest palindrome 
// # substring of st[]. It also returns the length 
// # of the longest palindrome 
// def longestPalSubstr(st) : 
// 	n = len(st) # get length of input string 

// 	# table[i][j] will be false if substring 
// 	# str[i..j] is not palindrome. Else 
// 	# table[i][j] will be true 
// 	table = [[0 for x in range(n)] for y 
// 						in range(n)] 
	
// 	# All substrings of length 1 are 
// 	# palindromes 
// 	maxLength = 1
// 	i = 0
// 	while (i < n) : 
// 		table[i][i] = True
// 		i = i + 1
	
// 	# check for sub-string of length 2. 
// 	start = 0
// 	i = 0
// 	while i < n - 1 : 
// 		if (st[i] == st[i + 1]) : 
// 			table[i][i + 1] = True
// 			start = i 
// 			maxLength = 2
// 		i = i + 1
	
// 	# Check for lengths greater than 2. 
// 	# k is length of substring 
// 	k = 3
// 	while k <= n : 
// 		# Fix the starting index 
// 		i = 0
// 		while i < (n - k + 1) : 
			
// 			# Get the ending index of 
// 			# substring from starting 
// 			# index i and length k 
// 			j = i + k - 1
	
// 			# checking for sub-string from 
// 			# ith index to jth index iff 
// 			# st[i + 1] to st[(j-1)] is a 
// 			# palindrome 
// 			if (table[i + 1][j - 1] and
// 					st[i] == st[j]) : 
// 				table[i][j] = True
	
// 				if (k > maxLength) : 
// 					start = i 
// 					maxLength = k 
// 			i = i + 1
// 		k = k + 1
// 	print "Longest palindrome substring is: ", printSubStr(st, start, 
// 											start + maxLength - 1) 

// 	return maxLength # return length of LPS 


// # Driver program to test above functions 
// st = "forgeeksskeegfor"
// l = longestPalSubstr(st) 
// print "Length is:", l 

// # This code is contributed by Nikita Tiwari. 
