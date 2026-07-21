var form =document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4=document.querySelector("h4");

// form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     if(inp1.value==='' || inp2.value===''){
//         // console.log("Please fill both the fields");
//         h4.textContent = "error,one of the field are blank";
//         h4.style.color="red";
//     }
//     else{
//         h4.textContent=""
//         h4.style.color="black";
//     }
// })
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    // inps.forEach(function(inp){
    //     if(inp.value=== ''){
    //         h4.textContent='error';
    //         h4.style,color="red";
    //     }
    //     else{
    //         h4.textContent='';
    //         h4.style.color="black";
    //     }
    // })
    for(var i=0;i<inps.length;i++){
        if(inps[i].value.trim===''){
            h4.textContent="error,some field are blank";
            h4.style.color="red";
            break;
        }
    }
})