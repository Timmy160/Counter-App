let count = 0;
const valueEl = document.querySelector("#value");
const btnEl = document.querySelectorAll(".btn");

btnEl.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    valueEl.textContent = count;
    color();
  });
});
//change valueEl color
function color() {
  if (count > 0) {
    valueEl.style.color = "green";
  } else if (count < 0) {
    valueEl.style.color = "red";
  } else {
    valueEl.style.color = "#000";
  }
}
