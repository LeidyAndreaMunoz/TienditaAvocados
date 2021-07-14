
const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('div#app')

const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "USD",
    }).format(price)
    return newPrice
};

window
.fetch(`${baseUrl}/api/avo`)
.then((respuesta) => respuesta.json())
.then((responseJson) => {
    const todosLosItems = [];
    responseJson.data.forEach((item) => {
    
    const imagen = document.createElement("img");
    imagen.src =`${baseUrl}${item.image}`

    const title = document.createElement("h2");
    title.textContent = item.name;
    title.className = "group-hover:text-black leading-6 font-medium text-3xl text-black"

    const price = document.createElement("div");
    price.textContent = formatPrice(item.price);

    const about = document.createElement("div");
    about.textContent = item.attributes.shape;
    about.className = "text-xl"
    
    const container = document.createElement("div");
    container.append(imagen, title, price, about);
    container.className = "flex flex-col bg-white hover:bg-light-blue-500 hover:border-light-blue-500 hover:shadow-2xl group block rounded-lg p-4 border border-gray-200 items-center"

    appNode.className = "flow-root xl:grid gap-4 grid-cols-3 justify-items-center mt-8"

    todosLosItems.push(container)
});

appNode.append(...todosLosItems)
});
