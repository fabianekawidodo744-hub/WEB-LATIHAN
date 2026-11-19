const tombol = document.querySelector("#tombol-ubah");
const judul = document.querySelector("#judul");
const deskripsi = document.querySelector("#deskripsi");

let sudahdiklik = false;

tombol.addEventListener("click", () => {
    sudahdiklik = !sudahdiklik;

    if(sudahdiklik){
        judul.textContent = "I LOVE YOU <3!";
        deskripsi.textcontent = "javascript baru saja mengubah isi halaman ini secara langsung.";
        document.body.style.backgroundColor = "#dbeafe";
    }else{
        judul.textcontent = "Halo, Adella!";
        deskripsi.textcontent = "ini adalah web latihan dari pabian buat adella.";
        document.body.style.backgroundcolor = "#f1f5f9";
    }
});