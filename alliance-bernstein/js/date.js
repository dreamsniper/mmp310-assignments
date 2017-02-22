function write_year() {
   var y = new Date();
   document.getElementsByTagName("span")[0].textContent = y.getFullYear();
}
