
let productNameInput = document.getElementById("productName")
let productCategoryInput = document.getElementById("productCategory")
let productPriceInput = document.getElementById("producrPrice")
let productDescriptionInput = document.getElementById("productDescription")
let productImgInput= document.getElementById("ProductImg")

let productsContainer =[]


if (localStorage.getItem('allProducts')!= null) {
  productsContainer= JSON.parse(localStorage.getItem('allProducts'))
  displyProduct()

}


function addProduct (){
 let product={
    name:productNameInput.value,
    category:productCategoryInput.value,
    price:productPriceInput.value,
    description:productDescriptionInput.value,
    img:productImgInput.files[0]?.name
 }

 productsContainer.push(product)

 displyProduct()
 
 localStorage.setItem("allProducts", JSON.stringify(productsContainer))
 clearProducts ()
 
}

function displyProduct(){

    let cartona = ""

    for (let i = 0; i < productsContainer.length; i++) {
   cartona+= `<div class="col-md-3">
         <div class="product-img">
           <img  class="w-100" src="images/${productsContainer[i].img}" alt="">
         </div>
         <div class="content">
           <h6>${productsContainer[i].name}</h6>
           <h6>${productsContainer[i].category}</h6>
           <h6> <p> Price:${productsContainer[i].price} </p></h6>
           <h6>${productsContainer[i].description}</h6>
         </div>
         <button onclick="deletProduct (${i})" class= "btn btn-danger w-100"> Delete</button>
         <button onclick="setValues(${i})" class= "btn btn-warning w-100 my-2"> Update</button>         
       </div>`
       
    }
    document.getElementById("demo").innerHTML  = cartona
}

function clearProducts (){
    productNameInput.value = ""
    productCategoryInput.value=""
    productPriceInput.value=""
    productDescriptionInput.value= ""
    productImgInput.value=""
}

function deletProduct (index){
  productsContainer.splice(index, 1)
  localStorage.setItem("allProducts", JSON.stringify(productsContainer))
  displyProduct()

}

let superIndex;

function setValues(index){
  superIndex=index
document.getElementById("addBtn").style.display="none"
document.getElementById("upateBtn").style.display="block"


  productNameInput.value = productsContainer[index].name
  productCategoryInput.value=productsContainer[index].category
  productPriceInput.value=productsContainer[index].price
  productDescriptionInput.value= productsContainer[index].description



}

function updateProudct(){

  document.getElementById("addBtn").style.display="block"
document.getElementById("upateBtn").style.display="none"

productsContainer[superIndex].name=productNameInput.value
productsContainer[superIndex].category=productCategoryInput.value
productsContainer[superIndex].price=productPriceInput.value
productsContainer[superIndex].description=productDescriptionInput.value

displyProduct()
localStorage.setItem("allProducts", JSON.stringify(productsContainer))
clearProducts()
}


function search(inputValue){
  //  searchInputValue= document.getElementById("search").value
  let cartona = ""
  for (let i = 0; i < productsContainer.length; i++) {
    if (productsContainer[i].name.toLowerCase().includes(inputValue.toLowerCase()) ) {
      cartona+= `<div class="col-md-3">
      <div class="product-img">
        <img  class="w-100" src="images/${productsContainer[i].img}" alt="">
      </div>
      <div class="content">
        <h6>${productsContainer[i].name.replace(inputValue,`<span> ${inputValue} </span>`)}</h6>
        <h6>${productsContainer[i].category}</h6>
        <h6> <p>Price:${productsContainer[i].price}<p></h6>
        <h6>${productsContainer[i].description}</h6>
      </div>
      <button onclick="deletProduct (${i})" class= "btn btn-danger w-100"> Delete</button>
      <button onclick="setValues(${i})" class= "btn btn-warning w-100 my-2"> Update</button>         
    </div>`
  
    }
    document.getElementById("demo").innerHTML= cartona
  }
}

