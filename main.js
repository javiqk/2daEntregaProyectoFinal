/*Productos*/
const products = [
	{
		name: "Space",
		category: "Remera",
		price: 1200,
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

/*Constantes jquery*/
const gridContainer = $("#js-gridContainer");
const searchInput = $("#js-searchInput");
const searchButton = $("#js-searchButton");

/*Constante para añadir los productos al html*/
const htmlTemplate = (product) => {
	return `<div class="card">
                <p class="card__name">${product.name}</p>
                <p class="card__category">${product.category}</p>
                <p class="card__price">$${product.price}</p>
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


