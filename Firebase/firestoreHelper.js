import { collection, addDoc } from "firebase/firestore";
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