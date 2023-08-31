
const Todo = (props) => {
    const { todos, title,deleteData } = props

    const handleOnDelete = (id) => {
        deleteData(id)
        console.log('check',id);
    }

    return (
        <div className='todo-list'>
            <div className="title">
                {title}
            </div>
            {todos && todos.length > 0 && todos.map((item, index) => {
                return (
                    <div key={item.id}>
                        <li className="list-child">{item.title}
                            <button onClick={() => { handleOnDelete(item.id) }}>X</button>
                        </li>

                    </div>
                )
            })}
            <hr />

        </div>)
}

export default Todo;