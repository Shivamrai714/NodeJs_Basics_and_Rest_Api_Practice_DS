// Module / Package containing vairous function 

const findAvg =  (a,b,c) =>{
    console.log("Finding average using module function ")
    return (a+b+c)/3;
};

const checkPrime = (a) =>{

    for(i=2;i< a/2 ; i++)
    {
        if(a % i == 0 ) return false;
    }
return true;
} 

//STEP: 1   exporting the module so can be used in other state 
module.exports = findAvg; 
module.exports=checkPrime;