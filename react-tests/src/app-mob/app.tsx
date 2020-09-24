import { observable, computed, autorun, reaction, action } from 'mobx'
import { observer } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Todo {
    constructor(title: string){
        this.title = title        
    }

    id = Math.random();
    @observable title = "";
    @observable finished = false;    
}

class TodoList {
    @observable newTitle: string = "enter message"

    @observable todos: Todo[] = []
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action.bound edit(value:string){
        this.newTitle = value
    }

    @action.bound add(){
      
        this.todos.push(new Todo(this.newTitle))
    }
}

interface TodoListViewProps{
    todoList: TodoList
}

@observer
class TodoListView extends React.Component<TodoListViewProps,{}>{
    render(){
        const { todoList } = this.props
        return <div>        
            <input type="text" value={todoList.newTitle} onChange={e=>todoList.edit(e.target.value)} />
            <input type="button" onClick={() => todoList.add()} value="add" />
            <br/>
            <ul>
                {todoList.todos.map((todo:Todo) => <TodoView todo={todo} key={todo.id} />)}
            </ul>
            Tasks left: {todoList.unfinishedTodoCount}          
        </div>
    }    
}

const TodoView = observer(({todo}) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished} onChange={()=>{}}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)

function init(container: string) {
    const store = new TodoList()

    ReactDOM.render(<TodoListView todoList={store} />, document.getElementById(container))

    store.todos.push(
        new Todo("Get Coffee"),
        new Todo("Write simpler code")
    );
    store.todos[0].finished = true;
}

(window as any).global = (window as any).global || {};
(window as any).global.init = (window as any).global.init || {};
(window as any).global.init["appmob"] = (container:string)=>init(container)
