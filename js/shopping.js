const carArray = [];

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
    console.log(carArray);
}