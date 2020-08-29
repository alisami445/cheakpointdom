let plus = document.getElementsByClassName("fas fa-plus-circle");
let minus = document.getElementsByClassName("fas fa-minus-circle");
let qte = document.getElementsByClassName("num");
let tott = document.getElementsByClassName("total");
let aprice = document.getElementsByClassName("prix");
let heart = document.getElementsByClassName("fas fa-heart");
var trash = document.querySelectorAll(".fa-trash");
//plus
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    total();
  });
}
//minus
for (let i = 0; i < plus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (qte[i].innerHTML > 0) {
      qte[i].innerHTML--;
      total();
    }
  });
}
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    if (heart[i].classList.contains("fas")) {
      heart[i].classList.remove("fas");
      heart[i].classList.add("far");
    } else {
      heart[i].classList.remove("far");
      heart[i].classList.add("fas");
    }
    total();
  });
}
// remouve

for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function () {
    trash[
      i
    ].parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    total();
  });
}
function total() {
  let som = 0;
  let p = document.getElementsByClassName("prix");
  let q = document.getElementsByClassName("num");

  for (let i = 0; i < plus.length; i++) {
    //som = som + (q[i].innerHTML) * parseInt(p[i].innerHTML);
    console.log(p[i]);
  }
  console.log(document.querySelector(".total"));
  //document.querySelector(".total").innerHTML = som;
}
