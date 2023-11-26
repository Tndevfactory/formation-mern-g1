const cels = document.querySelector("#cels");
const fahr = document.querySelector("#fahr");
const kelv = document.querySelector("#kelv");

export function temperature() {
  if (cels) {
    cels.addEventListener("input", (e) => {
      e.preventDefault();

      const celsius = parseFloat(e.target.value);

      if (!isNaN(celsius)) {
        const faherneit = (9 / 5) * celsius + 32;
        const Kelvin = celsius + 273.15;
        fahr.value = faherneit.toFixed(2);
        kelv.value = Kelvin.toFixed(2);
      } else {
        fahr.value = "Valeur non valide";
        kelv.value = "Valeur non valide";
      }
    });
  }
}
