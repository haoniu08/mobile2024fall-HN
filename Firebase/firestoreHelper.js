import { collection, addDoc, doc, deleteDoc, getDocs } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
    // console.log(database);
    
	try {
	    const docRef = await addDoc(collection(database, collectionName), data);
		// return docRef;
	  }
	catch (err) {
	    console.log("write to database", err)
	  }
	}

export async function deleteFromDB(deletedId, collectionName) {
	try {
		await deleteDoc(doc(database, collectionName, deletedId))
	} catch (err) {
		console.log("delete from database", err)
	}
}

export async function deleteAllFromDB(collectionName) {
	try {
		const querySnapshot = await getDocs(collection(database, collectionName));
		querySnapshot.forEach((docSnapshot) => {deleteFromDB(docSnapshot.id, collectionName)})
	} catch (err) {
		console.log("delete all from database", err)
	}
}