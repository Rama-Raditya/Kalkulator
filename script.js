function hitung(operator) {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  const hasilDiv = document.getElementById("hasil");
  let hasil;

  if (isNaN(angka1) || isNaN(angka2)) {
    hasil = "Masukkan kedua angka!";
    hasilDiv.classList.add("error");
  } else {
    switch (operator) {
      case "+":
        hasil = angka1 + angka2;
        break;
      case "-":
        hasil = angka1 - angka2;
        break;
      case "*":
        hasil = angka1 * angka2;
        break;
      case "/":
        hasil = angka2 !== 0 ? (angka1 / angka2) : "Tidak bisa dibagi 0";
        break;
      default:
        hasil = "Operator tidak valid";
    }

    // jika hasil bukan angka (error string)
    if (typeof hasil === "string") {
      hasilDiv.classList.add("error");
    } else {
      hasilDiv.classList.remove("error");
    }
  }

  hasilDiv.textContent = hasil;
}
