function calculate() {
  const tc = parseFloat(document.getElementById("tc").value);
  const tg = parseFloat(document.getElementById("tg").value);
  const hdlc = parseFloat(document.getElementById("hdlc").value);
  const ldlc = parseFloat(document.getElementById("ldlc").value);

  if (isNaN(tc)) {
      document.getElementById("tc").value = (hdlc + ldlc + tg / 5).toFixed(2);
  } else if (isNaN(tg)) {
      document.getElementById("tg").value = ((tc - hdlc - ldlc) * 5).toFixed(2);
  } else if (isNaN(hdlc)) {
      document.getElementById("hdlc").value = (tc - ldlc - tg / 5).toFixed(2);
  } else if (isNaN(ldlc)) {
      document.getElementById("ldlc").value = (tc - hdlc - tg / 5).toFixed(2);
  }

  document.getElementById("non-hdl").value = (tc - hdlc).toFixed(2);
}

function clearInputs() {
  document.getElementById("tc").value = "";
  document.getElementById("tg").value = "";
  document.getElementById("hdlc").value = "";
  document.getElementById("ldlc").value = "";
}
