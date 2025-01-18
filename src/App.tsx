import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import { getTodosApi } from './apis/todo';


const useGetTodos = () => {

  const [data, setData] = useState([]);
  const [todoApiStatus, setTodoApiStatus] = useState({
    loading: true,
    error: ''
  });

  const getTodos = async () => {
    const [todos, error] = await getTodosApi() as any;
    setData(todos);
    setTodoApiStatus({
      error,
      loading: false,
    });
  }


  useEffect(() => {
    getTodos();
  }, [])

  return { data, ...todoApiStatus };

}

function App() {

  return (
    <div>
      <Navbar />
      <TodoList />
    </div>
  );
}

const TodoList = () => {
  const { data: todos, loading, error } = useGetTodos();

  console.log(todos)

  if (loading) {
    return <h1>Fetching todos...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return <>
    {todos.map((todo: { _id: string, title: string, isCompleted: boolean, createdAt: string }) =>
      <Todo
        key={todo._id}
        todo={todo.title}
        completed={todo.isCompleted}
        createdAt={todo.createdAt}
      />
    )}
  </>
}



const Todo = ({ todo, completed, createdAt }: { todo: string, completed: boolean, createdAt: string }) => {


  return <div>
    <span>{new Date(createdAt).toDateString()}</span>
    <h2>{todo}</h2>
    <p>{completed}</p>
  </div>
}



// const Card = ({ title = 'Unknown', designation = 'Unknown', children, className }: any) => {



export default App
