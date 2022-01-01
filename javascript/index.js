let arr=[true,false,true,true,true,true,false,true,false,false];


function countrue(iterable){
     let count=0;
     for(let value of iterable){
         if(value==true){
             count++;
         }
     }

     return count;

}
console.log(countrue(arr));// deberia arrojarte 6