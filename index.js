// Toggle navigation menu on hamburger icon click
document.getElementById("menu-toggle").addEventListener("change", function() {
  var navList = document.querySelector('.nav_list');
  navList.style.display = this.checked ? 'flex' : 'none';
});
