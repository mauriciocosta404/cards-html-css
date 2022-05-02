const colors=[
    {
        color:"red",
        key:"rgb(197, 0, 0)"
    },
    {
        color:"green",
        key:"rgb(6, 160, 6)"
    },
    {
        color:"blue",
        key:"rgb(0, 0, 175)"
    }
];

const body=document.querySelector("body");
const button=document.querySelector(".button")
button.addEventListener("click",(event)=>{
    const cor=document.querySelector('#input').value;

    const set=colors.filter((item,index)=>item.color===cor)
    console.log(set)
    change(set[0].key)
   

})


function change(set){
    body.style.background=set;
    console.log(set)
}
