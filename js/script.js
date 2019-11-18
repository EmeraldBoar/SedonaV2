var button = document.querySelector(".search__btn");
var form = document.querySelector(".search-form");

var datefrom = form.querySelector("[name=date-from]");
var dateto = form.querySelector("[name=date-to]");
var age = form.querySelector("[name=age]");
var child = form.querySelector("[name=child]");



button.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("form-show");
  form.classList.remove("form-error");
})

form.addEventListener("submit", function(evt) {
  if (!datefrom.value || !dateto.value || !age.value || !child.value) {
    evt.preventDefault();
    form.classList.add("form-error");
  }
})
