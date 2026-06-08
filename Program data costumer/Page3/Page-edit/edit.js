const indexEdit = localStorage.getItem("indexEdit");
const semuaData =
JSON.parse(localStorage.getItem("customer")) || [];

const dataYangDiedit =
semuaData[indexEdit];


console.log(dataYangDiedit);

const nama = document.getElementById("nama");
const alamat = document.getElementById("alamat");
const nomer = document.getElementById("nomer");
const jumlahUnit = document.getElementById("jumlah-unit");
const kincirApa = document.getElementById("kincir-apa");
const tanggal = document.getElementById("tanggal");

const tombolSimpan =
document.getElementById("simpan");

nama.value = dataYangDiedit.nama;
alamat.value = dataYangDiedit.alamat;
nomer.value = dataYangDiedit.nomer;
jumlahUnit.value = dataYangDiedit.jumlahUnit;
kincirApa.value = dataYangDiedit.kincirApa;
tanggal.value = dataYangDiedit.tanggal;

tombolSimpan.addEventListener("click", function(){
const dataBaru = {
    nama: nama.value,
    alamat: alamat.value,
    nomer: nomer.value,
    jumlahUnit: jumlahUnit.value,
    kincirApa: kincirApa.value,
    tanggal: tanggal.value
};

semuaData[indexEdit] = dataBaru;
localStorage.setItem(
    "customer",
    JSON.stringify(semuaData)
);

window.location.href = "../Page-rekap/rekap.html";
});

