
//recuperer depuis le local storage 
function getlivres (){
  return  JSON.parse(localStorage.getItem('livres'))
}




// contenu du tableau 
const initialesLivres = getlivres () || [
   { id : "122244" , "titre" : "sous l orage " , "auteur" : "seydou badiane"} ,
   {  id : "1358699" ,"titre" : " testaman" , "auteur" : "Aminata sow fall"}, 
   {  id : "1258888" ,"titre" : "l amour" , "auteur" : "Fatou ndiaye"}, 
]
const table = document.querySelector(".table");
const tblBody = document.createElement("tbody");
const countElement = document.querySelector(".count");


function setCount(count){
    countElement.innerHTML = count ;
}
//ajouter dans localstorage
function setlivres (livres){
  localStorage.setItem('livres' ,JSON.stringify(livres))
}

setlivres(initialesLivres)
let livres = getlivres ()
function generer () {
const id = new Date().getTime()
idArray.push(nouvelID)
}

 function createtable(){
    for ( let index = 0 ; index < livres.length ; index++){
      
        let row = document.createElement("tr")
        
         
        //creation button lu
        //
       
        // creation des bouttons suppression
        let buttonCell= document.createElement("td")
        let buttonlu=document.createElement("td")
        let luButton=document.createElement("button")
        let buttontext = document.createTextNode("lu")
        luButton.setAttribute("class","lu")
        luButton.appendChild(buttontext)
        let deleteButton = document.createElement("button")
        let buttonText = document.createTextNode("supprimer")
       deleteButton.setAttribute("class","delete")
        deleteButton.appendChild(buttonText)

         
 
        
        
     
  for (let element = 0; element < Object.keys(livres[0]).length; element ++){
    const cell = document.createElement("td") 
   const cellText =document.createTextNode(Object.values (livres[index])[element])
   deleteButton.setAttribute("titre" , (livres[index]).titre)
   buttonCell.appendChild(deleteButton)
   buttonlu.appendChild(luButton)
     cell.appendChild(cellText)
     row.appendChild(cell)
     row.appendChild(buttonCell)
     row.appendChild(buttonlu)
     row.setAttribute('id' , (livres[index]).titre)
     row.setAttribute('id' , (livres[index]).titre)
    
      }
      tblBody.appendChild(row)
     }
     table.appendChild(tblBody)
     document.body.appendChild(table)
 }
 createtable() 


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


   //suppression


  
// ajouter un livre
let addButton = document.querySelector(".addButton")
addButton.onclick = function (){
  event.preventDefault()
  //const time = document.getElementById("time").value
 const text = document.getElementById("text").value
 const auteur = document.getElementById("auteur").value
if(  !text|| ! auteur  ){
  alert("merci de tout remplir")
  return
}
const newlivre = {text, auteur}
livres.push(newlivre)
//console.log('livres' , livres)
setlivres(livres)

// ajouter un tr
let row = document.createElement("tr")
let cell0 = row.insertCell(0)
//const cell0Text = document.createTextNode(time)
//cell0.appendChild(cell0Text)
//row.appendChild(cell0)
let cell1 = row.insertCell(1)
const cell1Text = document.createTextNode(text)
cell1.appendChild(cell1Text)
row.appendChild(cell1)
let cell2 = row.insertCell(2)
const cell2Text = document.createTextNode(auteur)
cell2.appendChild(cell2Text)
row.appendChild(cell2)
// creation des buttons 
let buttonCell= document.createElement("td")
let deleteButton = document.createElement("button")
let buttonText = document.createTextNode("supprimer")
deleteButton.setAttribute("class","delete")

deleteButton.appendChild(buttonText)
buttonCell.appendChild(deleteButton)
row.appendChild(buttonCell)
let buttonlu=document.createElement("td")
let luButton=document.createElement("button")
let buttontext = document.createTextNode("lu")
luButton.setAttribute("class","lu")
luButton.appendChild(buttontext)
buttonlu.appendChild(luButton)
row.appendChild(buttonlu)

//ajouter un evenement
deleteButton.addEventListener('click' , function (){
  const titre = this.getAttribute('titre')
  let row = document.getElementById(titre)
     row.parentNode.removeChild(row)
    // enlever l element supprimer
let  filteredLivres = livres.filter(
  (livre) => livre.titre!==titre
)
  livres = filteredLivres
//setCount(livres.length)

})

row.setAttribute('id' , text )
tblBody.appendChild(row)
table.appendChild(tblBody)
document.body.appendChild(table)
// vider les inputs 
document.getElementById('text').value=''
document.getElementById('auteur').value=''
}
window.onload = function() {
  let deleteButton = document.querySelectorAll('.delete')
 //console.log("deleteButton" , deleteButton )
   deleteButton.forEach(function (button){ 
      button.addEventListener('click', function(){
      const titre = this.getAttribute("titre")
     let row = document.getElementById(titre)
      //console.log("row",row )
    row.parentNode.removeChild(row)
    // enlever l element supprimer
let  filteredLivres = livres.filter((livre)=>livre.titre!==titre)
     livres = filteredLivres
setCount(livres.length)


    
  })
   })
   
};

  const lu = document.querySelectorAll('.lu')
  const row = document.querySelectorAll('.titre')
  lu.forEach(function (button){
    button.addEventListener('click',function(){
      //const titre = this.setAttribute ('titre')
      //let row = document.getElementById(titre)
    row.style.textDecoration="line-through"
      
  })
  
})

setCount(3)























