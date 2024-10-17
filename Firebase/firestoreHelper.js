import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
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