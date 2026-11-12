const CONFIG = {
  names: {
    you: "Thabo",
    her: "Naledi",
  },
  heroPhoto: "photos/hero.jpg",
  heroKicker: "A little life, on the way",
  dueDate: "2027-05-20",
  reveal: { enabled: true, answer: "surprise", caption: "..." },
  story: [{ date: "2019", title: "", text: "", photo: "" }],
  gallery: ["photos/1.jpg"],
  letter: { greeting: "", body: "", signoff: "" },
  footerNote: "",
};
const card = document.querySelector('.reveal-card');
card.addEventListener('click', ...) 

const storyEl = document.getElementById('story');
CONFIG.story.forEach((item, i) => {
  const el = document.createElement('article');
  el.className = 'story__item reveal-on-scroll';
  el.innerHTML = `
    <div class="story__dot" aria-hidden="true"></div>
    <div class="story__body">
      <p class="story__date">${item.date}</p>
      <h3 class="story__title">${item.title}</h3>
      <p class="story__text">${item.text}</p>
      ${item.photo ? `<figure class="story__photo"><img src="${item.photo}" alt="${item.title}" loading="lazy" onerror="this.parentElement.remove()"></figure>` : ''}
    </div>`;
  storyEl.appendChild(el);
});
