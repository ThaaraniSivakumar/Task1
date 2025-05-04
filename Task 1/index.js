const products=[
    {
        productId : 1,
        name : "HP",
        description : "Its a kind of laptop",
        price : 123456,
        stock : 14,
        category : 'laptop',
        tags : ["model","display","colour"],
        discount : {type : 'fixed' , value : 456}
    },
    {
        productId : 2,
        name : "Lenovo",
        description : "Its a kind of laptop",
        price : 45634,
        stock : 65,
        category : 'laptop',
        tags : ["model","display","colour"],
        discount :{type : 'percentage', value: 55}
    },
    {
        productId : 3,
        name : "samsung",
        description : "its a mobile",
        price : 54345,
        stock : 54,
        category : 'mobile',
        tags : ["size","weight"],
        discount : {type : 'fixed', value: 545}
    },
    {
        productId : 4,
        name : "vivo",
        description : "its a mobile",
        price : 985763,
        stock :34,
        category : 'mobile',
        tags : ['size','weight'],
        discount : null
    }
 ]

 //Display Products

 const displayProductDtails =()=>{
    for(const product of products){
        console.log(
            `productId: ${product.productId}`,
            `id: ${product.name}`,
            `description:${product.description}`,
            `price:${product.price}`,
            `stock:${product.stock}`,
            `category:${product.category}`,
            `tags:${product.tags.join(',')}`,
        )
for(const key in product.discount){
   console.log( `discount:${product.discount[key]}`)
}
}       
}

//Filter Product

let filteredProducts= products.filter((pro)=>{
     return pro.category==="mobile"
 }) 

 //Find Product

let findProducts= products.find((fin)=>{
    return fin.name==='samsung'
})

//Discount

const discountModule =(()=>{
    const applyDiscount=((product)=>{
        console.log(product)
        const price = product.price
        if(product.discount.type==='fixed'){
            return price - product.discount.value
        }
        else{
            return price - ((product.discount.value / 100)*price)
        }
        
    })
    return{applyDiscount: applyDiscount}
})();


const generateBill = (productId)=>{
    const product = products.find((product)=>{
        return product.productId===productId
    })
    const bill = discountModule.applyDiscount(product)
    console.log(productId)
    console.log(product)
    return `Final Price : ${bill}`
    
}

const findProductById =(productId)=>{
    return products.find((product)=>product.productId===productId)}
    

// Update Stock

const updateStock = ((productId,stock)=>{
    const product=findProductById(productId)
    if(product!=null){
       return `Final stock :${product.stock += stock}`
    }
} )

//Add a tag to a product

const addTagToProduct=(productId,tag)=>{
    const product=findProductById(productId)
    if(product){
        if(!product.tags.includes(tag)){
            product.tags.push(tag);
            console.log(`Tag ${tag} added to productId ${productId}`);
            
        }
        else{
            console.log(`already "${tag}" exists`)
        }
    }
    else{
        console.log("NOt found")
    }
}


//Remove Product 

const removeProduct=(productId)=>{
    const index = products.findIndex((p)=>p.productId==productId)
    if(index !== -1){
      return  products.splice(index,1)
    }
    else{
      console.log("Product not found")
    }
}

// Calculate Total Value

const calculateTotalValue = ()=>{
    let totalValue = 0
    for(const product of products){
        totalValue += product.price * product.stock
    }
    console.log(`Total vaLue ${totalValue}`)
}

//Console Logging

console.log("--Display Products--")
displayProductDtails()
console.log("--Filtered Products--")
console.log(filteredProducts)
console.log("--Find Product--")
console.log(findProducts)
console.log("--Discount--")
console.log(generateBill(1))
console.log("--Update Stock--")
console.log(updateStock(1,15))
console.log("--Add Tag To Product--")
addTagToProduct(4,"crop")
displayProductDtails(findProductById(4))
console.log("--Remove Product--")
console.log(removeProduct(3))
displayProductDtails(findProductById(1))
console.log("--Calculate Total Value--")
calculateTotalValue()