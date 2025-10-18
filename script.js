import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const productList = document.getElementById('product-list');

async function loadProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${data.image}" alt="${data.name}">
            <h3>${data.name}</h3>
            <p>${data.description}</p>
        `;
        productList.appendChild(card);
    });
}

loadProducts();
