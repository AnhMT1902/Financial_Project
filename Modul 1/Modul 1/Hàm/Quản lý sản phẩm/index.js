let products = [
    ["Iphone 14", "50000000"],
    ["Iphone 12", "20000000"],
    ["Iphone 13", "30000000"],
];

function displayListProducts(products) {
    let html = "";
    for (let i = 0; i < products.length; i++) {
        html += "<tr>";
        html += "<td>";
        html += i + 1
        html += "</td>"
        html += "<td>";
        html += products[i][0]
        html += "</td>"
        html += "<td>";
        html += products[i][1]
        html += "</td>";
        html += "<td>";
        html += `<button onclick='deleteProduct(${i})' id='btn-delete'>Delete</button>`
        html += "</td>";
        html += "</tr>"
    }
    document.getElementById('list-product').innerHTML = html;
    document.getElementById('total-product').innerHTML = 'Có ' + products.length + ' sản phẩm'
}

displayListProducts(products)

function addProduct() {
    let name = document.getElementById('name').value;
    let Price = document.getElementById('Price').value;
    let product = [name, Price];

    products.push(product);
    displayListProducts(products)

    document.getElementById('name').value = '';
    document.getElementById('Price').value = '';
}

function deleteProduct(index) {
    if (confirm('R u sure you want to delete ?')) {
        products.splice(index, 1);
        displayListProducts(products)
    }
}