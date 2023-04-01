import { collection } from "firebase/firestore";
import db from "./db.js";
// async function getUser() {
//     let userRef = doc(db, "functions", "user");
//     const username = await userRef.get()
//     .then(doc => {
//         return doc.data().username;
//     })
//     .catch(err => {
//         console.log('Error', err);
//     })
// }



async function readDocs() {
    const snapshot = await firebase.firestore().collection('events').get()
    return snapshot.docs.map(doc => <Text>doc.data()</Text>);
}


export default readDocs;