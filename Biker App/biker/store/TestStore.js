import { observable, autorun,decorate,action  } from "mobx";


class TodoStore {
  @observable counter = 0;
  increment() { this.counter++;
  console.log("increment", this.counter); }
  decrement() { this.counter--;
  console.log("decrement", this.counter); }
}

var store = window.store = new TodoStore

export default store
