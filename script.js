let i1 = 0;
let i2 = 0;
let i3 = 0;
let i4 = 0;
let i5 = 0;

let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;
//warning();

function plus1(){
    if( document.getElementById("value1").value >= 99){
            i1 == 99;
    }else{
        document.getElementById("value1").value = ++i1;
    }
    total1 = total1 + 498;
    plustotal();
    //console.log(i1);
    //console.log(total1);
}

function minus1(){
    if ( document.getElementById("value1").value == 0 ){
        total1 = 0;
        document.getElementById("value1").value = total1;
    } 
    else {
        document.getElementById("value1").value = --i1;
        total1 = total1 -498;
        minustotal();
        console.log(total1);
    }
     

}

function plus2(){
    if( document.getElementById("value2").value >= 99){
        i2 == 99;
    }else{
    document.getElementById("value2").value = ++i2;
}
    total2 = total2 + 299;
    plustotal();
}

function minus2(){
    if ( document.getElementById("value2").value == 0 ){
        total2 = 0;
        document.getElementById("value2").value = total2;
    } else {
        document.getElementById("value2").value = --i2;
        total2 = total2 - 299;
        minustotal();
    }
    
}

function plus3(){
    if( document.getElementById("value3").value >= 99){
        i3 == 99;
    }else{
    document.getElementById("value3").value = ++i3;
}
    total3 = total3 + 599;
    plustotal();
}

function minus3(){
    if ( document.getElementById("value3").value == 0){
        total3 = 0;
        document.getElementById("value3").value = total3;
    } else {
        document.getElementById("value3").value = --i3;
        total3 = total3 - 599;
            minustotal();
    }
    }
    


function plus4(){
    if( document.getElementById("value4").value >= 99){
        i4 == 99;
    }else{
    document.getElementById("value4").value = ++i4;
}
    total4 = total4 + 299;
    plustotal();
}

function minus4(){
    if ( document.getElementById("value4").value == 0){
        total4 = 0;
        document.getElementById("value4").value = total4;
    } else {
        document.getElementById("value4").value = --i4;
        total4 = total4 - 299;
        minustotal();
    }
    
}

function plus5(){
    if( document.getElementById("value5").value >= 99){
        i5 == 99;
    }else{
    document.getElementById("value5").value = ++i5;
}
    total5 = total5 + 499;
    plustotal();
}

function minus5(){
    if ( document.getElementById("value5").value == 0){
        total5 = 0;
        document.getElementById("value5").value = total5;
    } else {
        document.getElementById("value5").value = --i5;
        total5 = total5 - 299;
        minustotal();
    }
    
}

// function reset(){
//     total1 = 0;
//     document.getElementById("value1").value = 0;
//     // document.getElementById("value3").value = 0;
//     // document.getElementById("value4").value = 0;
//     // document.getElementById("value5").value = 0;
// }


//total value
 function plustotal(){
    document.getElementById("total").innerHTML = total1 + total2 + total3 + total4 + total5;

}

function minustotal(){
    if (document.getElementById("total").innerHTML == 0 ){
        document.getElementById("total").innerHTML == 0;
    } else {
        document.getElementById("total").innerHTML = total1 + total2 + total3 + total4 + total5;
    };

}

