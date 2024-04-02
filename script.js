//fungsi submit form
function submitForm(event) {
  event.preventDefault();

  const btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
    let height = document.querySelector('#tinggi').value;
    let weight = document.querySelector('#berat').value;

    if (height == '' || weight == '') {
      alert('Sulahkan isikan Tinggi / Berat badan anda');
      return;
    }

    // Hitung BMI
    height = height / 100;
    let BMI = weight / (height * height);
    BMI = BMI.toFixed(2);
    document.querySelector('#output').innerHTML = BMI;

    //Cetak keterangan BMI
    let status = '';

    if (BMI < 18.5) {
      status = 'Kekurangan Berat Badan';
    }
    if (BMI >= 18.5 && BMI < 24.9) {
      status = 'Normal / Ideal';
    }
    if (BMI >= 25 && BMI < 29.9) {
      status = 'Kelebihan Berat Badan';
    }
    if (BMI >= 30) {
      status = 'Kegemukan / Obesitas';
    }
    document.querySelector('#kategori').innerHTML = `<span id="kategori">${status}</span>`;

    //Cetak deskripsi BMI

    if (BMI < 18.5) {
      status =
        'Makan makanan bergizi, konsumsi protein lebih banyak dan olahraga secara teratur agar mencapai berat badan ideal';
    }
    if (BMI >= 18.5 && BMI < 24.9) {
      status =
        'Pertahankan pola makan saat ini dan lakukan aktivitas fisik 3 kali dalam seminggu agar tubuh tetap dalam kondisi optimal';
    }
    if (BMI >= 25) {
      status =
        'Jaga pola makan dengan mengurangi makanan tinggi gula ataupun lemak, serta tingkatan aktivitas dan olahraga secara teratur';
    }
    document.querySelector('#deskripsi').innerHTML = `<span id="kategori">${status}</span>`;
  });
}
