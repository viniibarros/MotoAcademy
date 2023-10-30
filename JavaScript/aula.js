function fn2(){
    console.log("Olá mundo");
}

function fn1(){
    fn2();
}

function main () {
    fn1();
}

main();
console.log('Tchau mundo')