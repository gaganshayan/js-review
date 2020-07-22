//function three

function luckySeven(max)
{
    let sevens = [];
    for (let i - 7; i <= max; i+=7)
    {
        sevens.push(i);
    }
    return sevens;
}

//tests
console.log(luckySevens(25));
console.log([ 7, 14, 21]);
console.log(luckySevens(42));
console.log([ 7, 14, 21, 28, 35, 42 ]);

//function four

const copyMachine = (element, num) => {
    //set empy array
    let result = [];
    //for loop
    for(let i = 0; i < num; i++){
        result.push(element);
    }
    return result;
}
//console.log or callback function

console.log(copyMachine('Mingo', 3));



//function four

function everyOtherWord(sentence) {
    // let sentenceArray = [];
    let result = [];

    let splitSentence = sentence.split(' ');
    console.log(splitSentence);

    for (let i = 0; i < splitSentence.length; i++) {
        console.log(splitSentence[i]);

        //push 0 index and even indexes to result
        if (i % 2 === 0){
            result.push(splitSentence[i]);
        }
    }
    return result;
};

console.log(everyOtherWord('hello how are you today sir?'));


//function five

//wordYeller
//takes in a sentence string as input
//every word has an exclamation point, unless they already have punctuation

function wordYeller(sentence){
    let words = sentence.split(" ");
    
    for (let i = 0; i < words.length; i++){

        if (punctuationCheck(words[i])){
        words[i] += '!';
        }
    }
    return sentence = words.join(" ");

}

function punctuationCheck(word){
    let punctuation = ['!', '?', ':', ';', '.', ','];
    for (let m = 0; m < punctuation.length; m++){
        if )word[word.length-1] === punction[m]) {
            
        }
    }
}