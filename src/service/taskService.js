import { db } from '../plugins/firebase'
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'

class TaskService { 
    async create(task) {
        await addDoc(collection(db, "tasks"), task)
    }
    
    async getAll() {
        const querySnapshot = await getDocs(collection(db, "tasks"))
        const tasks = []
        querySnapshot.forEach(doc => {
            tasks.push({ id: doc.id, ...doc.data() })
        })
        return tasks
    }
    
    async update(task) {
        const docRef = doc(db, "tasks", task.id)
        await updateDoc(docRef, task)
    }

    async delete(task) {
        const docRef = doc(db, "tasks", task.id)
        await deleteDoc(docRef)
    }
    async done(task){
        const docRef = doc(db, "tasks", task.id)
        await updateDoc(docRef, {done: !task.done})
    }
}
export default new TaskService()