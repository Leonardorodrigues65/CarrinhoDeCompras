const productsCart = [
    {
        id: 1,
        name: "Uva Crismon",
        price: 44.99,
    },


    {

        id : 2,
        name: "Vinho Canção",
        price: 17.98,
    },


    {

        id : 3,
        name : "Agua de coco",
        price : 8.99,
    },

    {
        id : 4,
        name : "Mamão",
        price : 9.98,
    },

    {

        id : 5,
        name: "Água tonica ",
        price : 17.98,
    },
]

function soma (productsCart){

    let somar = 0 

    for(let i = 0 ; i < productsCart.length ; i++){


        let product = productsCart[i]

        somar += product.price

    }

    return somar 

}


let body = document.querySelector("body")


let main = document.createElement("main")
let tagH1 = document.createElement("h1")
let productInfo = document.createElement("span")
let item = document.createElement("h3")
let valor = document.createElement("h3")
let ProductList = document.createElement("ul")
let tagSection = document.createElement("section")
let h3Total = document.createElement("h3")
let valorTotal = document.createElement("p")
let buttonEnd = document.createElement("button")
let tagDiv = document.createElement("div")
let h2 = document.createElement("h2")




tagH1.classList.add("logo")

productInfo.classList.add("productInfo")

ProductList.classList.add("ul")

tagSection.classList.add("section")

valorTotal.classList.add("valorTotal")

tagDiv.classList.add("button")



tagH1.innerText = "Virtual Market "

item.innerText = "Item"

valor.innerText = "valor"

h2.innerText = "Finalizar Compra"


main.append(tagH1 , productInfo , ProductList , tagSection , tagDiv)

productInfo.append(item , valor)

tagDiv.append(buttonEnd)

buttonEnd.appendChild(h2)


h3Total.innerText = "Total"

valorTotal.innerText = `R$ ${soma(productsCart).toFixed(2)}`




function criarTemplate(item){

 let ProductDetails = document.createElement("li")
 let nameProduct = document.createElement("h4")
 let priceProduct = document.createElement("p")
 let productName = item.name
 let productPrice = item.price



 nameProduct.classList.add("nomeProduto")
 priceProduct.classList.add("valorProduto")


 nameProduct.innerText = productName
 priceProduct.innerText = ` R$ ${productPrice}`


 ProductList.appendChild(ProductDetails)
 ProductDetails.append(nameProduct , priceProduct  )
 tagSection.append(h3Total , valorTotal)
 


 return main

}


function listar(productsCart , body){


    for(let i = 0 ; i <productsCart.length ; i++){

        let percorrer = productsCart[i];
        let finish = criarTemplate(percorrer);-

        
        body.appendChild(finish)
    }
}

listar(productsCart , body)







