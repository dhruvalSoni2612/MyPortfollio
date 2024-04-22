document.getElementById("menu-toggle").addEventListener("change", function () {
  var navList = document.querySelector(".nav_list");
  navList.style.display = this.checked ? "flex" : "none";
  document.body.addEventListener("click", function () {
    navList.style.display = "none";
  });
});

const titles = [
  { title: "Web Developer", role: "Web Developer" },
  { title: "Frontend Developer", role: "Frontend Developer" },
];

let currentIndex = 0;

function updateTitle() {
  const titleSpan = document.getElementById("titleText");
  const roleSpan = document.getElementById("roleText");
  titleSpan.innerText = `I'm `;
  roleSpan.innerText = titles[currentIndex].title;
  currentIndex = (currentIndex + 1) % titles.length;
  setTimeout(updateTitle, 2000);
}

updateTitle();
