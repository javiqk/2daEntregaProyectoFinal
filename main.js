/*Productos*/
const products = [
	{
		name: "Space",
		category: "Buzo",
		price: 2500,
		image : "buzoEspacial"
	},
	{
		name: "Bart",
		category: "Remera",
		price: 1200,
		image : "remeraBart"
	},
	{
		name: "Abeja",
		category: "Remera",
		price: 1200,
		image : "remeraAbeja"
	},
	{
		name: "Arcoiris",
		category: "Remera",
		price: 1200,
		image : "remeraArcoiris"
	},
	{
		name: "Donut",
		category: "Remera",
		price: 1200,
		image : "remeraDonut"
	},
	{
		name: "Dinosuario",
		category: "Remera",
		price: 1200,
		image : "remeraDinosaurio"
	},
	{
		name: "Simpsons",
		category: "Buzo",
		price: 2000,
		image : "buzoSimpsons"
	},
	{
		name: "Bugs",
		category: "Remera",
		price: 1200,
		image : "remeraBugs",
	},
	{
		name: "Flama",
		category: "Buzo",
		price: 2500,
		image : "remeraFlama",
	},
	{
		name: "Armadura",
		category: "Pantalon",
		price: 3000,
		image : "buzoEspacial",
	},
    {
		name: "Fantasma",
		category: "Remera",
		price: 1200,
		image : "remeraFantasma",	},
	{
		name: "Gatito",
		category: "Remera",
		price: 1200,
		image : "remeraGatito",
	},
	{
		name: "Ovni",
		category: "Remera",
		price: 1200,
		image : "remeraOvni",
	},
	{
		name: "Cupcake",
		category: "Remera",
		price: 1200,
		image : "remeraCupcake",
	},
	{
		name: "Papas Fritas",
		category: "Buzo",
		price: 1200,
		image : "buzoPapas",
	},
	{
		name: "Dibujos",
		category: "Buzo",
		price: 2000,
		image : "buzoDibujos",
	},
	{
		name: "Cargo",
		category: "Pantalon",
		price: 3000,
		image : "pantalonCargo",
	},
	{
		name: "Militar",
		category: "Pantalon",
		price: 3000,
		image : "pantalonMilitar",
	},
	{
		name: "Harry Potter",
		category: "Buzo",
		price: 2500,
		image : "buzoHarryPotter",
	},
	{
		name: "Plumas",
		category: "Pantalon",
		price: 3000,
		image : "pantalonCapri",
	},
];

/*Constantes getElement*/
const gridContainer = document.getElementById("js-gridContainer");
const searchInput = document.getElementById("js-searchInput");
const searchButton = document.getElementById("js-searchButton");

/*Constante para añadir los productos al html*/
const htmlTemplate = (product) => {
	return `<div class="card" >
                <p class="card__name">${product.name}</p>
				<img src="Imagenes/${product.image}.jpg" class="card__image" alt="Imagen producto">
                <p class="card__category">${product.category}</p>
                <p class="card__price">$${product.price}</p>
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

let miFormulario = document.getElementById("formulario");

miFormulario = addEventListener("submit", validarFormulario);

function validarFormulario(e){
e.preventDefault();
$("body").append("Formulario Enviado");    
}

