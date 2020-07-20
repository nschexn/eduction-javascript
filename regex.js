// basic search for string using .test()
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);

//search for multiple patterns using the OR operator: |
// /yes|no|maybe/
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// use flags to expand matching patters
// ex  ignores case - the i flag
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

//You can extract the actual matches you found with the .match() method.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

//To search or extract a pattern more than once, you can use the g flag.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig;
let result = twinkleStar.match(starRegex);

// The wildcard character . will match any one character
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true

/* 
CHARACTER SETS
You can search for a literal pattern with some flexibility with character classes. 
Character classes allow you to define a group of characters you wish to match 
by placing them inside square ([ and ]) brackets.

For example, you want to match "bag", "big", and "bug" but not "bog". 
You can create the regex /b[aiu]g/ to do this. 
The [aiu] is the character class that will only match the characters "a", "i", or "u".
*/
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

// Inside a character set, you can define a range of characters to match 
// using a hyphen character: -.
// For example, to match lowercase letters a through e you would use [a-e].
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

// also used for numbers [0-9]
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);

/* 
Create a set of characters that you do not want to match called negated character sets.
To create a negated character set, you place a caret character (^) 
after the opening bracket and before the characters you do not want to match.
/[^aeiou]/gi 
*/
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; //regex that matches all characters that are not a number or a vowel.
let result = quoteSample.match(myRegex);

/* 
Use + character to match a character (or group of characters) that appears 
one or more times in a row
*/
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; //find matches when the letter s occurs one or more times 
let result = difficultSpelling.match(myRegex);

// * matches characters that occur zero or more times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

//use the ? character to change to lazy matching. 
//"titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].


// ^ Outside of a character set, the caret is used to search for patterns 
// at the beginning of strings.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

/* 
$ You can search the end of strings using the dollar sign character $ 
at the end of the regex.
*/
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);

/* 
\w. This shortcut is equal to [A-Za-z0-9_]. 
This character class matches upper and lowercase letters plus numbers. 
*/
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

/*
\W to find the opposite of alphanumerics.
*/

/*
\d
The shortcut to look for digit characters is \d, with a lowercase d. 
This is equal to the character class [0-9], which looks for 
a single character of any number between zero and nine.
 */
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;

/*
The shortcut to look for non-digit characters is \D. 
This is equal to the character class [^0-9], 
which looks for a single character that is not a number between zero and nine.
 */

 /*
 You can search for whitespace using \s, which is a lowercase s. 
 This pattern not only matches whitespace, but also 
 carriage return, tab, form feed, and new line characters. 
 You can think of it as similar to the character class [ \r\t\f\n\v].
 */

 //Search for non-whitespace using \S

 /*
  You can specify the lower and upper number of patterns with quantity specifiers. 
  Quantity specifiers are used with curly brackets ({ and }). 
  You put two numbers between the curly brackets - 
    for the lower and upper number of patterns.
  For example, to match only the letter a appearing between 3 and 5 times 
  in the string "ah", your regex would be /a{3,5}h/.
  */