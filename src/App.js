import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import Comments from './components/comments/Comments';
import { CountDown, NewCountDown } from './components/comments/Countdown';
import DetailBlog from './components/comments/DetailBlogs';
import AddNewBlog from './components/comments/AddNewBlog';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Form from './components/comments/Form';
import Blog from './components/comments/Blog';
import NotFound from './components/comments/NotFound';
import YoutubeSearch from './components/comments/YoutubeSearch';

function App() {
  const [name, setName] = useState('Bin');
  const [nickName, setNickName] = useState('');
  const [todos, setTodos] = useState([
    { id: '1', title: 'watching coding', type: 'YES' },
    { id: '2', title: 'watching house', type: 'NO' },
    { id: '3', title: 'watching game', type: 'YES' },
    { id: '4', title: 'reading book', type: 'YES' },
  ]);

  // useEffect(() => {
  //   console.log("run use Effect");

  // }, [nickName]);

  // useEffect(() => {
  //   console.log("run use Effect todos");

  // }, [todos]);

  const handleOnChangeInPut = (event) => {
    let valueName = event.target.value
    setNickName(valueName)
  }

  const handleOnClick = (event) => {
    if (!nickName) {
      alert('Please enter a nickname')
      return;
    }
    let newToDos = {
      id: Math.floor(Math.random() * 100),
      title: nickName,
      type: "NULL"
    }
    let newList = todos;
    setTodos([...newList, newToDos])

    return setNickName('')
  }

  const onTimesUp = () => {
    alert('Time up');
  }

  const deleteData = (id) => {
    let newTodos = todos
    newTodos = newTodos.filter((item, index) => {
      return item.id !== id;
    })
    setTodos(newTodos)
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path='/' element={<Comments />} />
            <Route path="/timer" element={<>
              <CountDown onTimesUp={onTimesUp}></CountDown>
              <span>-------</span>
              <NewCountDown />
            </>} />
            <Route path="/todo" element={
              <>
                <input type="text" value={nickName} onChange={(events) => { handleOnChangeInPut(events) }} />
                <button type='button' onClick={(events) => { handleOnClick(events) }}>Click me!</button>
                <Todo
                  todos={todos}
                  title={'All todo'}
                  deleteData={deleteData}
                />
                <Todo
                  todos={todos.filter(item => item.id === '1')}
                  title={`YES todo`}
                  deleteData={deleteData}
                />
              </>
            }>
            </Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/blog/:id' element={<DetailBlog />}></Route>
            <Route path='/add-new-blog' element={<AddNewBlog />}></Route>
            <Route path='/form' element={<Form />}></Route>
            <Route path='/search' element={<YoutubeSearch />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>

        </header>

      </div>
    </Router>

  );
}

export default App;
