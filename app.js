const allCategory = async () => {
  const sidebar = document.getElementById("sidebar");
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories"
  );
  const data = await res.json();
  data.categories.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <li>
                  <button
                    class="flex items-center cursor-pointer w-full p-2 py-2 text-black text-left rounded-lg hover:bg-green-600 group"
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
  const res = await fetch("https://openapi.programming-hero.com/api/plants");
  const data = await res.json();

  const card = document.getElementById("card");

  data.plants.forEach((product) => {
    console.log(product)
    const div = document.createElement("div");
    div.innerHTML = `<div
        class="w-[250px] h-[350px] flex flex-col items-center justify-start rounded-lg bg-white p-3 shadow-md"
      >
        <div class="h-[180px] w-full overflow-hidden rounded-lg">
          <img 
            class="w-full h-full object-cover" 
            src=${product.image} 
            alt="${product.name}" 
          />
        </div>
        <div class="flex flex-col gap-2 mt-2 w-full">
          <h2 class="font-semibold text-lg">${product.name}</h2>
          <p class="text-xs line-clamp-2">${product.description}</p>
          <div class="flex items-center justify-between">
            <button
              class="font-normal bg-[#DCFCE7] text-[#15803D] px-2 rounded-lg"
            >
              ${product.category}
            </button>
            <div class="font-bold">৳${product.price}</div>
          </div>
          <button
            class="bg-[#15803D] py-1 rounded-full text-white font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
  `;
    card.appendChild(div);
  });
};
allPlantHandler();
