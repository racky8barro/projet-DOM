// contenu du tableau 
const livres =[
   { id : "","titre" : "sous l orage " , "auteur" : "seydou badiane" ,  } ,
   { id : "","titre" : " testaman" , "auteur" : "Aminata sow fall" ,  }, 
   { id : "","titre" : "l amour" , "auteur" : "Fatou ndiaye" ,  }, 
]
const table = document.querySelector(".table");
const tblBody = document.createElement("tbody");
const countElement = document.querySelector(".count");


function setCount(count){
    countElement.innerHTML = count ;
}

 function createtable(){
    const id = new Date().getTime();
   
     for ( let index = 0 ; index < 3 ; index++){
        let row = document.createElement("tr")
        // creation des bouttons suppression
        let buttonCell= document.createElement("td")
        let deleteButton = document.createElement("button")
        let buttonText = document.createTextNode("supprimer")
        deleteButton.setAttribute("class","delete-btn")
        deleteButton.appendChild(buttonText)
  for (let element = 0; element < livres.length; element ++){
    const cell = document.createElement("td") 
   const cellText =document.createTextNode(Object.values (livres[index])[element ])
   buttonCell.appendChild(deleteButton)
     cell.appendChild(cellText)
     row.appendChild(cell)
     row.appendChild(buttonCell)
      }
      tblBody.appendChild(row)
     }
     table.appendChild(tblBody)
     document.body.appendChild(table)
 }
 createtable() 
setCount(0)


/* modal*/
const open = document.getElementById('open')
const container = document.getElementById('container')
const close = document.getElementById('close')

open.addEventListener('click',()=>{
    container.style.visibility="visible"
})
close.addEventListener('click',()=>{
    container.style.visibility="hidden"
})






















/*var alire = document.getElementById("alire")
var lu = document.getElementById("lu")
document.getElementById('add').addEventListener('click',function(){

var value = document.getElementById("item").value;


alire.insertAdjacentHTML("afterbegin",` <li>${value}<i class="far fa-check-square" id=${value} onClick=marquerLu(this.id)></i><i class="fas fa-trash" id=${value} onClick=supprimer(this.id)></i></li>`);



})

function supprimer(id){
  
 document.getElementById(id).parentElement.outerHTML = "";

}

function marquerLu(id){
    supprimer(id)
    lu.insertAdjacentHTML("afterbegin",` <li>${id}</i><i class="fas fa-trash" id=${id} onClick=supprimer(this.id)></i></li>`);

    console.log(id)
}
var alire = document.getElementById("alire")
var lu = document.getElementById("lu")
document.getElementById('add').addEventListener('click',function(){

var value = document.getElementById("item").value;


alire.insertAdjacentHTML("afterbegin",` <li>${value}<i class="far fa-check-square" id=${value} onClick=marquerLu(this.id)></i><i class="fas fa-trash" id=${value} onClick=supprimer(this.id)></i></li>`);



})

function supprimer(id){
  
 document.getElementById(id).parentElement.outerHTML = "";

}

function marquerLu(id){
    supprimer(id)
    lu.insertAdjacentHTML("afterbegin",` <li>${id}</i><i class="fas fa-trash" id=${id} onClick=supprimer(this.id)></i></li>`);

    console.log(id)
}*/