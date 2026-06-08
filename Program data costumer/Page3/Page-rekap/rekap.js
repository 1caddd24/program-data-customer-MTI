console.log("REKAP JS BERJALAN");

const wadahData = document.getElementById("wadah-data");

const inputCari =
document.getElementById("input-cari");

const jenisFilter = 
document.getElementById("jenis-filter")


const semuaData = JSON.parse(localStorage.getItem("customer")) || [];
function tampilkanData(dataArray){

    wadahData.innerHTML = "";
    dataArray.forEach(function(data, index){

        wadahData.innerHTML += `
        <div class="baris-data">
            <div>${index + 1}</div>
            <div>${data.nama}</div>
            <div>${data.alamat}</div>
            <div>${data.nomer}</div>
            <div>${data.jumlahUnit}</div>
            <div>${data.kincirApa}</div>
            <div>${data.tanggal}</div>
            <div>
                <button class="btn-edit" data-index="${index}">
                    Edit
                </button>

                <button class="btn-hapus" data-index="${index}">
                    Hapus
                </button>
            </div>
        </div>
        `;
    });
}

tampilkanData(semuaData);

function filterData(){


    const keyword =
    inputCari.value.toLowerCase();

    const filter =
    jenisFilter.value;

    console.log(filter);
    console.log(keyword);

    const hasil =
    semuaData.filter(function(data){

        if(filter === "nama"){

            return data.nama
            .toLowerCase()
            .includes(keyword);

        }

        if(filter === "kincir"){

            return data.kincirApa
            .toLowerCase()
            .includes(keyword);

        }

        if(filter === "tanggal"){

            return data.tanggal
            .includes(keyword);

        }

        if(filter === "unit"){

            return data.jumlahUnit
            .includes(keyword);

        }

        return true;

    });

    tampilkanData(hasil);

}

inputCari.addEventListener(
    "input",
    filterData
);

jenisFilter.addEventListener(
    "change",
    filterData
);



const semuaTombolHapus=
document.querySelectorAll(".btn-hapus");
console.log(semuaTombolHapus);
semuaTombolHapus.forEach(function(tombol){
    tombol.addEventListener("click", function(){

        const index = tombol.dataset.index;

        const konfirmasi = confirm(
            "Yakin ingin menghapus data ini? Data tidak dapat dikembalikan"
        );

        if(konfirmasi){
        semuaData.splice(index, 1);
        localStorage.setItem(
            "customer",
            JSON.stringify(semuaData)
        );
            location.reload();

        }
    });

});

const semuaTombolEdit =
document.querySelectorAll(".btn-edit");
console.log(semuaTombolEdit);

semuaTombolEdit.forEach(function (tombol) {
    tombol.addEventListener("click", function () {
        const index = tombol.dataset.index;
        localStorage.setItem(
            "indexEdit",
            index
        );
       window.location.href = "../Page-edit/edit.html";
    });
    
});


