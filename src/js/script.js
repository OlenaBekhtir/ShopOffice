const products = [
    {
      "title": "Блокнот",
      "price": 100.00,
      "image": "./img/Bloknot1.jpg"
    },
    {
      "title": "Блокнот",
      "price": 120.00,
      "image": "./img/Bloknot2.jpg"
    },
    {
      "title": "Блокнот",
      "price": 150.00,
      "image": "./img/Bloknot3.jpg"
    },
    {
      "title": "Блокнот",
      "price": 180.00,
      "image": "./img/Bloknot5.jpg"
    },
    {
      "title": "Блокнот",
      "price": 200.00,
      "image": "./img/Bloknot5.jpg"
    },
    {
      "title": "Коректор",
      "price": 20.00,
      "image": "./img/Corector11.jpg"
    },
    {
      "title": "Коректор",
      "price": 25.00,
      "image": "img/Corector12.jpg"
    },
    {
      "title": "Коректор",
      "price": 30.00,
      "image": "./img/Corrector21.jpg"
    }
    ,{
      "title": "Коректор",
      "price": 40.00,
      "image": "./img/Corrector21.jpg"
    },
    {
      "title": "Коректор",
      "price": 45.00,
      "image": "./img/Corrector22.jpg"
    },
    {
      "title": "Коректор",
      "price": 47.00,
      "image": "./img/Corrector31.jpg"
    },
    {
      "title": "Коректор",
      "price": 50.00,
      "image": "./img/Corrector32.jpg"
    },
    {
      "title": "Коректор",
      "price": 52.00,
      "image": "./img/Corrector41.jpg"
    },
    {
      "title": "Коректор",
      "price": 55.00,
      "image": "./img/Corrector42.jpg"
    }
  ]

  // Получаем контейнер для товаров
  const productsContainer = document.getElementById("products-container");

  // Проходимся по каждому товару и создаем HTML-элемент для отображения
  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    // Создаем элементы для отображения информации о товаре
    const titleElement = document.createElement("h2");
    titleElement.textContent = product.title;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Цена: $${product.price.toFixed(2)}`;

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.title;

    // Добавляем созданные элементы к элементу товара
    productElement.appendChild(titleElement);
    productElement.appendChild(priceElement);
    productElement.appendChild(imageElement);

    // Добавляем товар к контейнеру на странице
    productsContainer.appendChild(productElement);
  });