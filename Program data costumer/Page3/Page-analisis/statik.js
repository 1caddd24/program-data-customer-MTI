const viewMinggu =
document.getElementById("view-minggu");

const viewBulan =
document.getElementById("view-bulan")

const viewTahun =
document.getElementById("view-tahun")

const wadahDetail =
document.getElementById("wadah-detail");

viewMinggu.addEventListener(
    "click",
    function(){

        wadahDetail.innerHTML = `
        <div class="detail-box">
            <h3>Data Minggu Ini</h3>
            <p>Menampilkan data customer minggu ini</p>
        </div>
           ` ;
    }
);

viewBulan.addEventListener(
    "click",
    function(){

        wadahDetail.innerHTML = `
        <div class="detail-box">
            <h3>Data Bulan Ini</h3>
            <p>Menampilkan data customer Bulan ini</p>
        </div>
        `;
    }
)

viewTahun.addEventListener(
    "click",
    function(){

        wadahDetail.innerHTML = `
        <div class="detail-box">
            <h3>Data Tahun Ini</h3>
            <p>Menampilkan data customer Tahun ini</p>
        </div>
        `;

    }
)

const dataCustomer =[
    { nama:"icad", tanggal:"2026-06-01" },
    { nama:"ganu", tanggal:"2026-06-02" },
    { nama:"Ko yonf", tanggal:"2026-06-03" },
]

function toDate(str){
    return new Date(str);
}

function getMingguIni(){
    const now = new Date();
    const start = new Date();
    start.setDate(now.getDate() - 7);

    return dataCustomer.filter(data => {
        const tgl = toDate(data.tanggal);
        return tgl >= start && tgl <= now;
    });
}


function getBulanIni(){
    const now = new Date();

    return dataCustomer.filter(data => {
        const tgl = toDate(data.tanggal);
        return (
            tgl.getMonth() === now.getMonth() &&
            tgl.getFullYear() === now.getFullYear()
        );
    });
}

function getTahunIni(){
    const now = new Date();

    return dataCustomer.filter(data => {
        const tgl = toDate(data.tanggal);
        return tgl.getFullYear() === now.getFullYear();
    });
}

function renderData(judul, data){
    wadahDetail.innerHTML = `
        <div class="detail-box">
            <h3>${judul}</h3>
            <p>Total Customer: ${data.length}</p>
        </div>
    `;
}

viewMinggu.addEventListener("click", function(){
    const data = getMingguIni();
    renderData("Data Minggu Ini", data);
});

viewBulan.addEventListener("click", function(){
    const data = getBulanIni();
    renderData("Data Bulan Ini", data);
});
viewTahun.addEventListener("click", function(){
    const data = getTahunIni();
    renderData("Data Tahun Ini", data);
});