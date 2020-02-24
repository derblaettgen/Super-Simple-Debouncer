import "./styles.css";

const input = document.querySelector("input");
const paragraph = document.querySelector("p");

input.addEventListener("keyup", e => {
  debounce(() => (paragraph.textContent = e.target.value), 1000);
});

const debounce = new function() {
  let timer = null;
  return function(fun, time) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fun, time);
  };
}();
