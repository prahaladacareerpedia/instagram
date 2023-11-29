const productsContainer=document.querySelector('.products');
const showMoreContainer= document.querySelector('#showMore');



let total=5

function displayProducts(){
let url = "https://fakestoreapi.com/products";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    productsContainer.innerHTML=""
    for(let i=0;i<total && i<data.length;i++){
      const product=data[i];
      const productCard=document.createElement("div");
      productCard.classList.add('product_card');
  
      const productImage=document.createElement("img");
      productImage.src=product.image;
      productImage.alt=product.title;

      const productTitle=document.createElement("h3");
      productTitle.textContent=product.title;

      const productPrice=document.createElement("p");
      productPrice.textContent=`$${product.price}`;
  
       productCard.appendChild(productTitle);
       productCard.appendChild(productImage);
       productCard.appendChild(productPrice);
      productsContainer.appendChild(productCard);
    }
  });
  
}



displayProducts()

// 
showMoreContainer.addEventListener("click",()=>{
  total=total+5
  displayProducts()
})

