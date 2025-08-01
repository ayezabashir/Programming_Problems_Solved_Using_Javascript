// Find the factorial of any number

const fact_num = prompt("Enter your number");
let result = 1
if(fact_num<0){
    alert("factorial does not exist")
}
else if(fact_num===0){
    alert(`factorial of 0 is ${result}`)
}
else{
    for(i=1; i<=fact_num;i++){
        result *=i;
    }
    alert(`factorial of ${fact_num} is ${result}`)
}
