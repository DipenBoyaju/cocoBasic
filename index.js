
import { Datepicker, Input, initTE } from "tw-elements";
initTE({ Datepicker, Input }, { allowReinits: true });


document.querySelector('.navicon').addEventListener('click', function () {
  let dropdown = document.getElementById("mydropdown");
  // Corrected comparison using '==' and fixed the 'none' value to be a string
  if (dropdown.style.display == "block") {
    dropdown.style.display = "none";
    dropdown.style.transform = "translateX(-100%)";
    this.classList.remove('open'); // Remove the 'open' class when hiding the dropdown
  } else {
    dropdown.style.display = "block";
    dropdown.style.transform = "translateX(0%)";
    this.classList.add('open'); // Add the 'open' class when showing the dropdown
  }
});
