// let modebtn= document.querySelector("#mode");
// let currmode="light";
// modebtn.addEventListener("click",()=>{

//     // if(currmode =="light"){
//     //     currmode="dark";
//     // }
//     // else{
//     //     currmode="light";
//     // }
//     console.log(currmode);
// } );
let modebtn = document.querySelector("#mode");
let currmode = "light";

modebtn.addEventListener("click", () => {
    if (currmode == "light") {
        currmode = "dark";
        document.querySelector("body").style.backgroundColor="black";
    } else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode);
});
