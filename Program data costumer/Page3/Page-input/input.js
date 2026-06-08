const nama = document.getElementById("nama");
const alamat = document.getElementById("alamat");
const nomer = document.getElementById("nomer");
const jumlahUnit = document.getElementById("jumlah-unit");
const kincirApa = document.getElementById("kincir-apa");
const tanggal = document.getElementById("tanggal");
const buttonSimpan = document.getElementById("simpan");
const popup = document.getElementById("popup")

buttonSimpan.addEventListener("click", function(){

   const dataCustomer = {
    nama: nama.value,
    alamat: alamat.value,
    nomer: nomer.value,
    jumlahUnit: jumlahUnit.value,
    kincirApa: kincirApa.value,
    tanggal: tanggal.value
   };

   let semuaData = JSON.parse(localStorage.getItem("customer")) || [];
   semuaData.push(dataCustomer);
   localStorage.setItem("customer", JSON.stringify(semuaData))

    popup.classList.add("muncul");
    setTimeout(function(){
        popup.classList.remove("muncul")
    }, 3000);

});