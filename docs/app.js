const product = [
    {
        id: 1,
        image: '/img/img1.png',
        title: 'iphone',
        price: 45000,
    },
    {
        id: 2,
        image: '/img/img2.png',
        title: 'ipad',
        price: 35000,
    },
    {
        id: 3,
        image: '/img/img3.jpg',
        title: 'Airpods',
        price: 5000,
    },
    {
        id: 4,
        image: '/img/img4.png',
        title: 'Apple watch',
        price: 10000,
    }
];


const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    const { image, title, price } = item;
    return (
        `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>

                <div class='bottom'>
                    <p>${title}</p>
                    <h2>฿${price.toLocaleString()}.00</h2> ` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" + `
                </div>
        </div>`
    )
}).join('')

const cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0, total = 0;

    document.getElementById("count").innerHTML = cart.length;

    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is emty";
        document.getElementById("total").innerHTML = "฿ " + 0 + " .00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            total = total + price;
            document.getElementById("total").innerHTML = "฿ " + total.toLocaleString() + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px'>${title}</p>
                    <h2 style='font-size:15px'>${price.toLocaleString()}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div >"
            );
        }).join('')
    }
}