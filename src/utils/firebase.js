import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA120NV7h5UuE_Lwp3l-VIeWt4cnaF8Nfc",
  authDomain: "slothbrite-faustinavidal.firebaseapp.com",
  projectId: "slothbrite-faustinavidal",
  storageBucket: "slothbrite-faustinavidal.appspot.com",
  messagingSenderId: "981880470059",
  appId: "1:981880470059:web:c0c39f8e9d991388f9c86e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
      await addDoc(collection(db, "productos"), {
        categoria: prod.categoria,
        nombre: prod.nombre,
        modelo: prod.modelo,
        precio: prod.precio,
        stock: prod.stock,
        imgDelante: prod.imgDelante,
        imgDetras: prod.imgDetras
      })
  })
}

export const getProductos = async () => {
  const productos = await getDocs(collection(db,"productos"))
  const items = productos.docs.map(prod => {
    return {...prod.data(),id: prod.id}
  })
  return items
}

export const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const item = {...producto.data(), id: producto.id}
  return item
}