let inp = document.querySelector("input");
let btn = document.querySelector("button");
let tds = document.querySelectorAll("td");

tds.forEach((btn) => {
  btn.addEventListener("click", () => {
    inp.value = inp.value + btn.innerText;
  });
});

let res = document.querySelector("#result");

res.onclick = function () {
  let ans = inp.value;
  try {
    inp.value = eval(ans);
  } catch (error) {
    alert(error);
  }
};

btn.onclick = function () {
  inp.value = "";
};
