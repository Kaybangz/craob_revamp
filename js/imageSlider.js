let sliderCounter = 1;

setInterval(() => {
  document.getElementById("radio" + sliderCounter).checked = true;
  sliderCounter++;

  sliderCounter > 4 ? (sliderCounter = 1) : null;
}, 5000);
