import { autorun,observable } from "mobx";

class TodoStore {

    @observable todos = ["buasdy milk"]

}


var store = window.store = new TodoStore;

export default store;

autorun(()=>{
    console.log(store.todos[0])
}) 