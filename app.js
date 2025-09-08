const api = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const calculate = (input)=>{
const cartOriginalPrice = document.querySelectorAll(input);
  const total = document.getElementById("total");

  let final = 0;

  for (const val of cartOriginalPrice) {
    let price = parseInt(val.innerHTML);
    final += price;
  }
  total.innerHTML = final;
}

const allCategory = async () => {
  const sidebar = document.getElementById("sidebar");

  const data = await api("https://openapi.programming-hero.com/api/categories");

  data.categories.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <li>
                  <button onclick="clickCategory(${item.id})" id=btn-${item.id}
                    class="btns flex items-center cursor-pointer w-full p-2 py-2 text-black text-left rounded-lg hover:bg-green-600 group"
                  >
                    ${item.category_name}
                  </button>
                </li>
      `;
    sidebar.appendChild(li);
  });
};
allCategory();

const allPlantHandler = async () => {
  const data = await api("https://openapi.programming-hero.com/api/plants");

  createCard(data.plants);
};
allPlantHandler();

const createCard = (data) => {
  const card = document.getElementById("card");
  card.innerHTML = "";
  data.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `<div id="plant-${product.id}" 
        class="popa w-[250px] h-[350px] flex flex-col items-center justify-start rounded-lg bg-white p-3 shadow-md"
      >
        <div onclick="openModal(${product.id})" class="h-[180px] w-full cursor-pointer overflow-hidden rounded-lg">
          <img 
            class="w-full h-full object-cover" 
            src=''
            // product.image
            alt="${product.name}" 
          />
        </div>
        <div class="flex flex-col gap-2 mt-2 w-full">
          <h2 id="product-title" class="font-semibold text-lg">${product.name}</h2>
          <p class="text-xs line-clamp-2">${product.description}</p>
          <div class="flex items-center justify-between">
            <button
              class="font-normal bg-[#DCFCE7] text-[#15803D] px-2 rounded-lg"
            >
              ${product.category}
            </button>
            <div class="flex">
            <span>৳</span>
            <div id="product-price" class="font-bold">${product.price}</div>
            </div>
          </div>
          <button onclick="cartHandler(${product.id})"
            class="bg-[#15803D] py-1 cursor-pointer rounded-full text-white font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
  `;
    card.appendChild(div);
  });
};

const cartHandler = async (id) => {

  const data = await api(`https://openapi.programming-hero.com/api/plant/${id}`)

  const cartContainer = document.getElementById("cartContainer");
  const li = document.createElement("li");
  li.innerHTML = `
  <li id=cart-${data.plants.id}
            class="carts flex items-center justify-between rounded-lg p-2 bg-[#F0FDF4]"
          >
            <div class="space-y-2">
              <div class="font-semibold">${data.plants.name}</div>
              <div class="flex">
                <p>৳<span class="originalPrice">${data.plants.price}</span></p>
                <p class="flex gap-2 pl-2">x<span class="qty">1</span></p>
              </div>
            </div>
            <button onclick="closeCart(${data.plants.id})" class="cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
          </li>
  `;
  cartContainer.appendChild(li);

calculate('.originalPrice')
};

const closeCart = (id)=>{
  const cart = document.getElementById(`cart-${id}`)
  cart.remove()

calculate('.originalPrice')
}

const openModal = async (id) => {
  const pop = document.getElementById("pop");
  pop.showModal();
  const res = await fetch(
    `https://openapi.programming-hero.com/api/plant/${id}`
  );
  const data = await res.json();

  const popa = document.querySelector(".modal-box");
  popa.innerHTML = `
  <div id=${data.plants.id} onclick="openModal(${data.plants.id})" 
        class="popa  flex flex-col items-center justify-center rounded-lg bg-white p-3 shadow-md"
      >
        <div  class="h-[180px] w-full cursor-pointer overflow-hidden rounded-lg">
          <img 
            class="w-full h-full object-cover" 
            src=${data.plants.image} 
            alt="${data.plants.name}" 
          />
        </div>
        <div class="flex flex-col gap-2 mt-2 w-full">
        <div class="flex items-baseline justify-start gap-2">
        <div class="font-semibold text-lg">Category: </div>
        <h2 class="">${data.plants.category}</h2>
        </div>
        
        <div class="flex items-baseline justify-start gap-2">
        <div class="font-semibold text-lg">Price: </div>
        <h2 class="">$${data.plants.price}</h2>
        </div>

        <div class="flex items-baseline justify-start gap-2">
        <div class="font-semibold text-lg">Description: </div>
        <h2 class="">${data.plants.description}</h2>
        </div>
        </div>
        </div>
        <form class="flex items-center justify-end mt-5" method="dialog">
              <button class="btn btn-danger">close</button>
            </form>
  `;
};

const clickCategory = async (id) => {
  const data = await api(
    `https://openapi.programming-hero.com/api/category/${id}`
  );
  createCard(data.plants);

  const btns = document.querySelectorAll(".btns");
  btns.forEach((btn) => {
    btn.classList.remove("bg-green-600");
  });
  const btnId = document.getElementById(`btn-${id}`);
  btnId.classList.add("bg-green-600");
};

