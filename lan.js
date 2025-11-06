const langs = document.querySelectorAll('.lan');
    langs.forEach(lang => {
      const name = lang.getAttribute('data-lang');
      const img = document.createElement('img');
      img.src = `https://source.unsplash.com/100x100/?${name},programming`;
      img.alt = name;
      lang.prepend(img);
    });