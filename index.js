// chrome://extensions/
let lead=[]


const inputEl=document.getElementById("input-el")
const inputbtn=document.getElementById("input-btn")
const ulel=document.getElementById("ulEL")



inputbtn.addEventListener("click",function(){
    lead.push(inputEl.value)
    inputEl.value=""
    render()
})
function render(){
let listitems=""
for(let i=0;i<lead.length;i++){
    let b=lead[i]

        listitems+=`<li>
                         <a href='${(lead[i])}' target='_blank'>${lead[i]}</a>
        
        
                  </li>`
}
ulel.innerHTML=listitems
}

