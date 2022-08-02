function checkNumbers() {
  let a = this.value.slice(4);
  this.nextElementSibling.classList.remove("invisible");
  if (a.length > 13) {
    a = a.slice(0, 13);
    this.nextElementSibling.classList.add("invisible");
    this.classList.remove("eror-blur");
  }
  if (a != a.replace(/[^\d]/g, "")) {
    a = a.replace(/[^\d]/g, "");
  }

  this.value = "+38 " + a;
}
