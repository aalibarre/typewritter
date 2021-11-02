//Add a string to play with...
//Add the following code to our file and ensure that it runs as expected.

const sentence = "hello there from lighthouse labs \n";
let delay = 50;
for(const char of sentence) {
   setTimeout(() => {
    process.stdout.write(char) // makes the senetence stay on the same line when printed to the console
   }, delay)
    delay += 50;
}


//with a delay of 50 
// setTimeout(() => {
    
// }, 50); 