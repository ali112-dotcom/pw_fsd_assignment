const items = document.querySelectorAll('#fruitList li');

    items.forEach(item => {
      const fruit = item.getAttribute('data-fruit');
      const img = document.createElement('img');
      img.src = `https://source.unsplash.com/300x200/?${fruit},fruit`;
      img.alt = fruit;
      item.prepend(img);
    });