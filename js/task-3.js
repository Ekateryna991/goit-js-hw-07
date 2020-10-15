const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const style = "gallery";
const navEl = document.querySelector(`#${style}`);
navEl.insertAdjacentHTML(
  "afterbegin",
  images.reduce((acc, { url, alt }) => {
    acc += `<li class="${style}__li"><img src="${url}" alt=$alt width=640 height=320}/></li>`;
    return acc;
    
  }, "")
  
);

// const classList = document.gallery.classList;
navEl.classList.add('ul-style');
// li.classList.add('li-style');
