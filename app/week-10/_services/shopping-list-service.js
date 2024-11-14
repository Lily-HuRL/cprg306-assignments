import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, deleteDoc, doc } from "firebase/firestore";

export async function getItems(userId) {
    const itemsCollection = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(itemsCollection);
    const items = itemsSnapshot.docs.map(doc => ({docId: doc.id, ...doc.data()}));
    console.log('Retrieved items:', items);
    return items;
}

export async function addItem(userId, item) {
    const itemsCollection = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
}

export async function deleteItem(userId, itemId) {
    const itemsCollection = collection(db, "users", userId, "items");
    const docRef = doc(itemsCollection, itemId);
    await deleteDoc(docRef);
}