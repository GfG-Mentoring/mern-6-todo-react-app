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
    <div className='flex flex-col w-screen h-screen overflow-y-auto'>
      <Navbar />
      <TodoList />
    </div>
  );
}

const TodoList = () => {
  const { data: todos, loading, error } = useGetTodos();

  const [filters, setFilters] = useState({
    filterType: 'all',
    search: '',
  });

  const filteredTodos = todos.filter((todo: any) => {
    let shouldShow = true;

    if (filters.filterType !== 'all') {
      if (filters.filterType === 'completed') {
        shouldShow = todo.isCompleted;
      } else if (filters.filterType === 'incomplete') {
        shouldShow = !todo.isCompleted
      }
    }

    if (filters.search) {
      shouldShow = todo.title.toLowerCase().includes(filters.search.toLowerCase())
    }

    return shouldShow;
  })

  if (loading) {
    return <h1>Fetching todos...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return <div className='flex flex-col p-2 gap-4'>
    <div className='flex gap-4 flex-wrap'>
      <input className='border-2 px-1 max-w-sm rounded-md border-slate-300 focus-visible:outline-none focus-visible:border-blue-500'
        type="search"
        placeholder='🔎 Search todos'
        value={filters.search}
        onChange={(e) => setFilters(prev => ({
          ...prev,
          search: e.target.value
        }))}
      />
      <div className='inline-flex'>
        <button className={`bg-blue-500 text-white first:rounded-l-md px-4 text-xs
          ${filters.filterType === 'all' ? 'bg-blue-400' : ''}
          `}
          onClick={() => {
            setFilters(prev => ({
              ...prev,
              filterType: "all"
            }))
          }}

        >all</button>
        <button className={`bg-blue-500 text-white  px-4 text-xs
                  ${filters.filterType === 'incomplete' ? 'bg-blue-400' : ''}
        `}
          onClick={() => {
            setFilters(prev => ({
              ...prev,
              filterType: "incomplete"
            }))
          }}
        >Incomplete</button>
        <button className={`bg-blue-500 text-white last:rounded-r-md  px-4 text-xs
                  ${filters.filterType === 'completed' ? 'bg-blue-400' : ''}
        `}
          onClick={() => {
            setFilters(prev => ({
              ...prev,
              filterType: "completed"
            }))
          }}
        >
          Complete
        </button>
      </div>
    </div>
    <div className='flex gap-4 flex-wrap'>
      {filteredTodos.map((todo: { _id: string, title: string, isCompleted: boolean, createdAt: string, description: string }) =>
        <Todo
          key={todo._id}
          todo={todo.title}
          description={todo.description}
          completed={todo.isCompleted}
          createdAt={todo.createdAt}
        />
      )}
      <div className='hidden only:flex w-screen text-center justify-center items-center h-[40dvh] '>
        no todos found.
      </div>
    </div>
  </div>
}



const Todo = ({ todo, description, completed, createdAt }: { todo: string, description: string, completed: boolean, createdAt: string }) => {

  return <div className="max-w-max p-6 bg-white border border-gray-200 rounded-lg shadow ">

    <a href="#">
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 ">
        {todo}
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-500 text-sm">
      {description}
    </p>
    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
      {new Date(createdAt).toDateString()}

    </a>
  </div>
}



// const Card = ({ title = 'Unknown', designation = 'Unknown', children, className }: any) => {



export default App
