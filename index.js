
let count=0;
// let svarr=new Array();
let prevalue=document.getElementById("previous-score");
let value=document.getElementById("counter");
function increment(){
   count+=1;
   console.log(count);
   value.textContent=count;
}
function save(){
    let savedvalue=count+" - ";
    // svarr.push(savedvalue);
    console.log('savedvalue: '+savedvalue);
    prevalue.textContent+=savedvalue;
    count=0
    value.textContent=count;
     // prevalue.innerText="Previous entries-->"
    // for(let i=0;i<Math.min(3,svarr.length);i++){
    //     prevalue.innerText+=`${svarr[i]}`;            
    //     if(i<svarr.length-1){
    //         prevalue.innerText+=","
    //     }
    // }
}
