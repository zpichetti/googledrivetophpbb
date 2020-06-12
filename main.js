const element = document.getElementById("clickme");
const rep = document.getElementById("return")
element.addEventListener("click", (event) => {
  const googlesheet = document.getElementById("url").value.split("/");
  const res = "https://drive.google.com/uc?id=" + googlesheet[5]
  event.preventDefault();
  rep.innerText = res;
});


