let container=document.getElementById("container")
let filterCategory=document.getElementById("filterCategory")
    filterCategory.addEventListener("change",filterByCategory)
let sortPrice=document.getElementById("sortPrice")
    sortPrice.addEventListener("change",sortByPrice)


let prodForm=document.getElementById("prodForm")
    prodForm.addEventListener("submit",function(){
        addData()
        prodForm.reset()
    })

let productArr = JSON.parse(localStorage.getItem("productData")) || []

let productArr2 = JSON.parse(localStorage.getItem("productData")) || []

mapData(productArr)

function addData()
{
    event.preventDefault()

    let title=prodForm.ptitle.value
    let price=prodForm.pprice.value
    let image=prodForm.pimage.value
    let description=prodForm.pdescription.value
    let category=prodForm.pcategory.value
    
    let obj={
        title,
        price,
        image,
        description,
        category
    }

    productArr.push(obj)

    localStorage.setItem("productData",JSON.stringify(productArr))

    // console.log(products)
    mapData(productArr)
}

function mapData(arr)
{
    container.innerHTML=""

    arr.forEach(function(el,i,arr)
    {
        let card=document.createElement("div")
        card.setAttribute("class","card")

        let topDiv=document.createElement("div")
        topDiv.setAttribute("class","topDiv")

        let image=document.createElement("img")
        image.src=el.image

        let btmDiv=document.createElement("div")
        btmDiv.setAttribute("class","btmDiv")

        let title=document.createElement("h3")
        title.setAttribute("class","title")
        title.innerText=el.title

        let category=document.createElement("h4")
        category.setAttribute("class","category")
        category.innerText=`Category - ${el.category}`

        let price=document.createElement("h3")
        price.setAttribute("class","price")
        price.innerText=`Price - ${el.price}`

        let description=document.createElement("p")
        description.setAttribute("class","description")
        description.innerText=el.description

        topDiv.append(image)
        btmDiv.append(title,category,price,description)
        card.append(topDiv,btmDiv)
        container.append(card)
    })
}

function filterByCategory()
{
    let catVal=filterCategory.value
    console.log(catVal)

    if(catVal=="men")
    {
        let abc = productArr.filter(function(el,i,arr){
            return el.category == "men's clothing"
        })
        mapData(abc)
    }
    else if(catVal=="women")
    {
        let abc = productArr.filter(function(el,i,arr){
            return el.category == "women's clothing"
        })
        mapData(abc)
    }
    else if(catVal=="jwl")
    {
        let abc = productArr.filter(function(el,i,arr){
            return el.category == "jewelery"
        })
        mapData(abc)
    }
    else if(catVal=="elc")
    {
        let abc = productArr.filter(function(el,i,arr){
            return el.category == "electronics"
        })
        mapData(abc)
    }
    else if(catVal=="none")
    {
        mapData(productArr)
    }
    
}

function sortByPrice()
{
    let priceVal = sortPrice.value

    if(priceVal=="lth")
    {
        productArr.sort(function(a,b)
        {
            return a.price - b.price
        })
        mapData(productArr)
    }
    else if(priceVal=="htl")
    {
        productArr.sort(function(a,b)
        {
            return b.price - a.price
        })
        mapData(productArr)
    }
    else if(priceVal=="none"){
        mapData(productArr2)
    }
}


