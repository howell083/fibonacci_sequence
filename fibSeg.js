//form a sequence, called the Fibonacci sequence. 
//such that each number is the sum of the two preceding ones, starting from 0 and 1. 
//That is, and for n > 1

let fibs = [];

function sequence (num_sequences) {
    let timesAround = num_sequences;
    fibs = [];
    let fib =  0 ;
    let fibPlus =  fib + 1 ;
    
    for( i = 0; i < timesAround; i++) {

        let sum = fib + fibPlus;
        fibs.push(fib);
        fib = fibPlus;
        fibPlus = sum;


    };


    return fib;
};


// non-functioning..needs debug
function readFibs (anArrayOfLies) {

    let writ = anArrayOfLies;
    console.log(writ);

};

//readFibs(fibs);
console.log(fibs);
console.log(sequence(6));
readFibs(fibs);
console.log(sequence(10));
console.log('New fibs ' + fibs);
sequence(20);
console.log('more fibs ' + fibs);