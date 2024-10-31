import { collection, addDoc, doc, deleteDoc, getDocs, updateDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";
import { auth } from '../Firebase/firebaseSetup'

export async function writeToDB(data, collectionName) {
    // console.log(database);

	const goal = {...goal, owner:auth.currentUser.uid}
    
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
		deleteAllFromDB(`Goals/${deletedId}/users`)
	} catch (err) {
		console.log("delete from database", err)
	}
}

export async function deleteAllFromDB(collectionName) {
	try {
		const querySnapshot = await getDocs(collection(database, collectionName));
		querySnapshot.forEach((docSnapshot) => {
			deleteFromDB(docSnapshot.id, collectionName)
		})
		// delete all users from the sub-collection
		deleteAllFromDB(`Goals/${collectionName}/users`)
	} catch (err) {
		console.log("delete all from database", err)
	}
}

export async function updateGoalWarning(goalId, collectionName) {
	try {
		const goalDocRef = doc(database, collectionName, goalId)
		await updateDoc(goalDocRef,{ warning: true })
	} catch (err) {
		console.log("updating goal doc", err)
	}
}

export async function readAllDocs(collectionName) {
	try {
	  const querySnapshot = await getDocs(collection(database, collectionName));
	  const userList = [];
	  querySnapshot.forEach((docSnapShot) => {
		userList.push(docSnapShot.data());
	  });
	  return userList; // Return the userList
	} catch (err) {
	  console.log("Error reading all docs: ", err);
	  throw err;
	}
}