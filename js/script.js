function getName(){
    let username = prompt ("Hallo, siapa namamu?");
    while(!username){
        alert("Mohon isi namamu");
        username=prompt("Hallo siapa namamu?")
    }
    document.getElementById("username").textContent=username;
}
window.onload = getName;
document.getElementById()
 replaceName();

function validateForm() {
    let nama = document.getElementById("nama").value;
    let tgl = document.getElementById("tgl").value;
    let jk = document.querySelector('input[name="jk"]:checked');
    let pesan = document.getElementById("pesan").value;

    if (nama === '' || tgl === '' || jk === null || pesan === '') {
        alert("Mohon lengkapi semua form yang telah kami sediakan");
        return false;
    }

    let jkValue = jk.value;
    setSenderUI(nama, tgl, jkValue, pesan);
    return false;
}

function setSenderUI(nama, tgl, jk, pesan) {
    let resultDiv = document.getElementById("result");
    let currentTime = new Date().toLocaleString(); // Mendapatkan waktu saat ini
    resultDiv.innerHTML = `
        <p>Nama: ${nama}</p>
        <p>Tanggal Lahir: ${tgl}</p>
        <p>Jenis Kelamin: ${jk}</p>
        <p>Pesan: ${pesan}</p>
        <p>Waktu : ${currentTime}</p>
    `;
}