// Pilih semua elemen dengan kelas "scroll-link"
const scrollLinks = document.querySelectorAll('.scroll-link');

// Tambahkan event listener ke setiap link
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah aksi default dari link

        // Ambil id target dari href link
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Animasi scroll menggunakan scrollIntoView dengan opsi smooth
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});