const carArray = [];

function display(cardProduct)
{
    const tableBody = document.getElementById('cart_product');
    tableBody.innerText = '';
    var totalprice = 0;
   for (let i = 0; i < cardProduct.length; i++) {
    
    const name = carArray[i].productName;
    const price = carArray[i].productPrice;
     totalprice = totalprice + price;

    const tr = document.createElement('tr');

    tr.innerHTML = `
    <th>${i+1}</th>
    <th>${name}</th>
    <th>${price}</th>
    `
    tableBody.appendChild(tr);
    // var total = preprice + price;
    // return total;
   }

   const tr = document.createElement('tr');
   
   tr.innerHTML = `
   <th></th>
   <th>Total Price: </th>
   <th>${totalprice}</th>
   `
tableBody.appendChild(tr);

}

function addToCart(element)
{
    const productName = element.parentNode.parentNode.children[0].innerText;
    // console.log(productName);
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    

    const productobj = {
        productName : productName,
        productPrice : parseFloat(productPrice)
    }
    carArray.push(productobj);
    

    document.getElementById('total_product').innerText = carArray.length;

    display(carArray);
}