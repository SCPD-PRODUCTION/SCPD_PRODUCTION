import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const form = document.getElementById('product-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    try {
        await addDoc(collection(db, "products"), { name, description, image });
        alert('Produk berhasil ditambahkan!');
        form.reset();
    } catch (err) {
        console.error(err);
        alert('Gagal menambahkan produk.');
    }
});
