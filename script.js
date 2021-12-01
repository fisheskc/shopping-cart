const items = [
    {item: "Milk", cost: 5, id: 0},
    {item: "Apple", cost: 1, id: 1},
    {item: "Bread", cost: 2, id: 2},
    {item: "Butter", cost: 3, id: 3},
    {minus_item: "name", cost: 0, id: 4}
]
const cart = {};
const output = document.createElement('div');
document.body.appendChild(output);

items.forEach((ele) => {
    //console.log(ele);
    let div = document.createElement('div');
    div.innerHTML = `<h3>${ele.item}</h3>$${ele.cost} `;
    div.style.border = "1px solid #ddd";
    // displays side by side
    div.style.display = "inline-block";
    div.style.width = "100px"; 

    function returnPrice() {
        let priceUnit = ele.cost
        let minus_item = ele.item
        if(cart[minus_item] && ele.id === ele.id) {
            let resultMinus = priceUnit - priceUnit
            return cart[minus_item].qty--
        }
    }
    
    div.addEventListener('click', function() {
        // change all items to lowercase
        let namer = ele.item.toLowerCase();
        console.log(namer);
        // items looped from forEach loop
        if(!cart[namer]) {
            cart[namer] = {
                // name of the object
                name: ele.item,
                price: ele.cost,
                qty: 1,
                
                subtotal: function () {
                    return this.price * this.qty
                }
            }
        } else {
            // if cart item exists, update quantity
            cart[namer].qty++;
            }
        relist();
    })

    function relist() {
        output.innerHTML = "";
        console.log(cart);
        let total = 0;
        // loop through object
        for(let pro in cart) {
                console.log(cart[pro]);
                let subTotal = cart[pro].subtotal();
                total += subTotal;
                output.innerHTML += `${cart[pro].name} $${cart[pro].price} x`;
                output.innerHTML += `${cart[pro].qty} $${subTotal} <br>`;
                output.innerHTML += `${cart[minus_item].qty} $${cart[pro].price}-$${cart[pro].price}<br>`;
            }
            output.innerHTML += `<b>Total = $${total}<b>`;
        }
        // appends the childnode to the body html, now outputs to browser
        document.body.appendChild(div);
})
