function calculate() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const d = parseFloat(document.getElementById("d").value);

  const inputs = [a, b, c, d];
  const filledInputs = inputs.filter(input => !isNaN(input)).length;

  if (filledInputs === 3) {
      if (isNaN(a)) {
          document.getElementById("a").value = (c + d - b).toFixed(2);
      } else if (isNaN(b)) {
          document.getElementById("b").value = (c + d - a).toFixed(2);
      } else if (isNaN(c)) {
          document.getElementById("c").value = (a + b - d).toFixed(2);
      } else if (isNaN(d)) {
          document.getElementById("d").value = (a + b - c).toFixed(2);
      }
  }
}

function clearInputs() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("d").value = "";
}
