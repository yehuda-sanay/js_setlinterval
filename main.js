//שאלה1
// function printTime(){
//     setInterval(()=>{

//         document.body.innerHTML+="<h1>"+"time"+"</h1>";
//     },4000)
// }
// printTime()

//שאלה 2
// function printCounter(){
//     setInterval(()=>{

//         document.body.innerHTML+="<h1>"+"counter"+"</h1>";
//     },6000)
// }
// printCounter()

//שאלה3

// var ilovet;
// function printIlovetimers(){
//    ilovet= setInterval(()=>{
//         document.body.innerHTML+="<h1>"+"i love timers"+"</h1>";

//     },5000)
// }
// printIlovetimers()


// function stopIlovet(){
//     clearInterval(ilovet)
// }

//שאלה4
//     var printName;
// function printNameClass(){
//     var i=0;
//     var classArray=["yehuda","lior","aviel"];
//     printName=setInterval(()=>{
//         document.body.innerHTML+="<h1>"+classArray[i]+"<h1>";
//         i++
//     },4000)
// }
// printNameClass()

// function stopPrintNameClass(){
//     clearInterval(printName)
// }

//שאלה 5

// var printClock;
// function printTime(){
//     printClock= setInterval(()=>{
//         var daten=new Date();
//         var hours=daten.getHours();
//         var mini=daten.getMinutes();
//         document.body.innerHTML+="<h1>"+hours+":"+mini;
//     },1000)
// }
// printTime()

// function stopPrintTime(){
//     clearInterval(printClock)
// }

//שאלה 5

// var inputmin = document.getElementById("input_hour")
// var h1_print=document.getElementById("h1_hour")
// var i=59;
// var j=59;
// function sumfunc(){
//     setInterval(()=>{
    
//     while(i>0){
//         h1_print.innerHTML=inputmin.value+":"+j;
//         i--
//         j--
//         if(j=0){
//             j=59;
//         }
//     }

//     },1000)
// }
var inputfor=document.getElementById("input_minit");
var secend=59;
function printHour(){
    document.getElementById("h1_minit").innerHTML=inputfor.value+":";
    setInterval(()=>{
        document.getElementById("h1_minit").innerHTML=inputfor.value-1 +":";
        input_minit.value=input_minit.value--;

    },60000)

}

var secendset;
function printSecend(){
    if(inputfor.value!=null){
    secendset= setInterval(()=>{
    document.getElementById("h1_secend").innerHTML=secend;
    
    secend=secend-1;
    if(secend==0){
        secend=59;
    }
        
},1000)
}}


function stopTimer(){
    clearInterval(printHour)
}