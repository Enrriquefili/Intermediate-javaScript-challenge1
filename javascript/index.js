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
console.log(countrue(arr));    // deberia arrojarte 6

// PAra el mismo iterable arr=[true,false,true,true,true,true,false,true,false,false];como te habia mencionado la vez pasada te paso por aqi la solucion a este mismo ejercicio utilizando el "for" loop



function countrue(iterable){
    let count =0;
    for (i=0;i<iterable.length;i++){
        if(iterable[i]==true){
            count ++;
        }
    }
    return count;
}

console.log(countrue(arr));    // deberia arrojarte 6


// Aqui te paso enseguida la solucion al mismo ejercicio utilizando el metodo "forEach".
function counter(iterable){
    let count = 0;
    iterable.forEach((e)=>{
        if(iterable==true){count++;}
    });

    return count;

}
console.log(countrue(arr));   // deberia arrojarte 6




// Aqui te anexo la solucion utilizando el metodo "filter".


function countfilter(iterable){
    let count = 0;
    iterable.filter(e=>{if(e==true){
      count++;
    }}

    );
    return count;
}

console.log(countfilter(arr));  // deberia arrojarte 6


// Resolviendo el mismo ejercicio por el metodo "map" se tiene la siguiente solucion
function countmap(iterable){
    let count = 0;
    iterable.map(e=>{if(e==true){
      count++;
    }}

    );
    return count;
}

console.log(countmap(arr));  // deberia arrojarte 6





// QUedo pendiente de mandarte la solucion por el metodo filter y arrow fuction que me parece mas intereesante 😁.