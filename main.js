/*Productos*/
const products = [
	{
		name: "Space",
		category: "Remera",
		price: 1200,
		image: "imagenes/buzoEspacial.jpg",
	},
	{
		name: "Bart",
		category: "Remera",
		price: 1200,
	},
	{
		name: "Lisa",
		category: "Remera",
		price: 1200,
	},
	{
		name: "Gato",
		category: "Remera",
		price: 1200,
	},
	{
		name: "Palta",
		category: "Remera",
		price: 1200,
	},
	{
		name: "Papas Fritas",
		category: "Remera",
		price: 1200,
	},
	{
		name: "Gatitos",
		category: "Buzo",
		price: 2000,
	},
	{
		name: "Arcoiris",
		category: "Buzo",
		price: 2000,
	},
	{
		name: "Policía",
		category: "Buzo",
		price: 2500,
	},
	{
		name: "Armadura",
		category: "Pantalon",
		price: 3000,
	},
    {
		name: "Spider",
		category: "Remera",
		price: 1200,
	},
	{
		name: "Harry Potter",
		category: "Remera",
		price: 1200,
	},
	{
		name: "Muñeca",
		category: "Remera",
		price: 1200,
	},
	{
		name: "Olivia",
		category: "Remera",
		price: 1200,
	},
	{
		name: "Rayo",
		category: "Remera",
		price: 1200,
	},
	{
		name: "Glaciar",
		category: "Buzo",
		price: 2000,
	},
	{
		name: "Cargo",
		category: "Pantalon",
		price: 3000,
	},
	{
		name: "Militar",
		category: "Pantalon",
		price: 3000,
	},
	{
		name: "Harry Potter",
		category: "Buzo",
		price: 2500,
	},
	{
		name: "Plumas",
		category: "Pantalon",
		price: 3000,
	},
];

/*Constantes getElement*/
const gridContainer = document.getElementById("js-gridContainer");
const searchInput = document.getElementById("js-searchInput");
const searchButton = document.getElementById("js-searchButton");

/*Constante para añadir los productos al html*/
const htmlTemplate = (product) => {
	return `<div class="card">
                <p class="card__name">${product.name}</p>
                <p class="card__category">${product.category}</p>
                <p class="card__price">$${product.price}</p>
				<img src="" class="card__image">${product.image}</img>
				<button id="btn">Comprar</button>
            </div>`;
			
};

/*Constante para renderizar*/
const renderHTML = (products, container) => {
	container.innerHTML = "";
	if (products.length > 0) {
		for (const product of products) {
			const productInHTML = htmlTemplate(product);

			container.innerHTML += productInHTML;
		}
	} else {
		container.innerHTML = `<p class="container__message">No se encuentran productos</p>`;
	}
};

renderHTML(products, gridContainer);

/*Funcion constante para filtrar los productos del html*/
const filterProducts = () => {
	const searchInputValue = searchInput.value;

	const filteredProducts = products.filter((product) => {
		const productNameLowerCase = product.name.toLowerCase();
		const productCategoryLowerCase = product.category.toLowerCase();

		const isFiltered =
			productNameLowerCase.includes(searchInputValue.toLowerCase()) ||
			productCategoryLowerCase.includes(searchInputValue.toLowerCase());

		return isFiltered;
	});

	renderHTML(filteredProducts, gridContainer);
};

/*Eventos*/
searchButton.addEventListener("click", filterProducts);

searchInput.addEventListener("keyup", filterProducts);


/*Jquery*/
let locales = $("li");
console.log (locales);

let localesCaba = $(".locals");
console.log (localesCaba);

/*Jquery dark mode*/
$(".checkbox").click(function() {
	if ($("input.checkbox").is(":checked")){
		$(".theme").attr("href", "dark.css");
	}
	else {
		$(".theme").attr("href", "light.css");
	}
});



$("body").prepend('<p class="titulo">¡Bienvenido a Monkey®!</p>');
$(".titulo").animate({  left:'200px',
                        opacity:'0.7',
                        height:'150px',
                        width:'200px'   }, 
                        "500",            
                        function(){        
                            $(".titulo").fadeOut(4000);
                        });

$("body").prepend('<p id="p1">Hola</p>');
	$("#p1").css("color", "#333")
        .slideDown(2000)
        .delay(1000)
        .fadeOut(2000);
		
$(document).ready(function () {
	const APIURL = "https://jsonplaceholder.typicode.com/posts";

	const infoPost = {
		nombre: "Javier",
		profesion: "Programador",
	};

	$("body").append(
		'<button id="post" class="btn btn-success m-2">ENVIAR PETICION POST</button>'
	);

	$("#post").click(() => {
		$.ajax({
			method: "POST",
			url: APIURL,
			data: infoPost,
			success: function (res) {
				$(".row").append(
					`<div class="text-success h3">Guardado Exitoso: ${res.nombre}, ${res.profesion}</div>`
				);
			},
		});
	});
});
