/**
 * Calcula el volumen diario en base al peso.
 * @param {number} peso - El peso en kilogramos.
 * @returns {number} El volumen diario calculado.
 */
function calcVolumenDiario(peso) {
  let volumen = 0;
  let aCalcular = 0;
  let resto = peso;
  if (resto > 20) {
    aCalcular = peso - 20;
    volumen += aCalcular * 20;
    resto = peso - aCalcular;
  }
  if (resto > 10) {
    aCalcular = resto - 10;
    volumen += aCalcular * 50;
    resto = resto - aCalcular;
  }
  volumen += resto * 100;
  return volumen;
}

/**
 * Calcula el valor basal en base al peso ingresado en un campo de entrada.
 */
function calcBasal() {
  let peso = parseInt(document.getElementById("mass").value);
  const volumenDiaro = calcVolumenDiario(peso);
  // Math.round() sirve para redondear al entero mas cercano
  const flujo = Math.round(volumenDiaro / 24); // tambien es mantenimiento
  const mPlusM2 = Math.round(flujo * 1.5);

  console.log("volumen diario", volumenDiaro);
  console.log("mantenimiento", flujo);
  console.log("m+m/2", mPlusM2);
}
