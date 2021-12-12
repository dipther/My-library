let nuevoLibro=document.querySelector(".nuevoLibro")
let printear=document.querySelector(".printear")
let libroParaBorrar=document.querySelector(".libroNuevo")
let myLibrary=[]
function books(title,autor,pages,read){
    this.title= title
    this.autor=autor
    this.pages=pages
    this.read=read
    this.info= function(){
        return(title+" by "+autor+", "+pages+" paginas")
    }
}
let titulo=document.querySelector("#title")
let autorNuevo=document.querySelector("#autor")
let paginas=document.querySelector("#pages")
let read=document.querySelector("#read")
let noRead=document.querySelector("#noRead")
let posicionActual=0
books.prototype = Object.create(newBook.prototype)
function newBook(){
myLibrary[posicionActual]=new books(titulo.value,autorNuevo.value,paginas.value)
posicionActual+=1
if(titulo.value!="" || autorNuevo.value!="" || paginas.value!=""){
let nuevoDiv=printear.appendChild(document.createElement("div"))
nuevoDiv.className="libroNuevo"
let nuevoBoton=printear.appendChild(document.createElement("button"))
nuevoDiv.textContent=myLibrary[posicionActual-1].info()
nuevoBoton.textContent="Borrar"
nuevoBoton.className="borrar"
titulo.value=""
autorNuevo.value=""
paginas.value=""
nuevoBoton.addEventListener("click",()=>{
    myLibrary[posicionActual-1]=""
    nuevoDiv.textContent=""
    nuevoBoton.remove()
    
})
if(read.checked){
    nuevoDiv.style.backgroundColor="#E0FFFF"
    
    leidoONO=nuevoDiv.appendChild(document.createElement("label"))
    leidoONO.textContent=" LEIDO"
    checkBoxLeido=leidoONO.appendChild(document.createElement("INPUT"))
    checkBoxLeido.setAttribute("type","checkbox")
    checkBoxLeido.className="siONo"
    checkBoxLeido.checked=true
   
}
if(noRead.checked){
    nuevoDiv.style.backgroundColor="#ff3f3f"
    
    leidoONO=nuevoDiv.appendChild(document.createElement("label"))
    leidoONO.textContent=" NO LEIDO"
    checkBoxLeido=leidoONO.appendChild(document.createElement("INPUT"))
    checkBoxLeido.setAttribute("type","checkbox")
    checkBoxLeido.className="siONo"
}
checkBoxLeido.addEventListener("click",()=>{
    if(checkBoxLeido.checked){
        nuevoDiv.style.backgroundColor="#E0FFFF"
        
    }
    if(!checkBoxLeido.checked){
        nuevoDiv.style.backgroundColor="#ff3f3f"
    }

})
}
}
nuevoLibro.addEventListener("click",newBook)
