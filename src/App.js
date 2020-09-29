import React from 'react';
import { Provider } from 'react-redux'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import store from './store'


const App = () => {
  return <>
    <Provider store={store}>
      <div style={{ width: "200px", margin: "0 auto" }}>
        <TodoInput /> <br />
        <TodoList />
      </div></Provider>
  </>
}

export default App;