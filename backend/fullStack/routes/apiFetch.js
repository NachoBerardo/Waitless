import useQuery  from '@tanstack/react-query'
//const myModule = require( '@tanstack/react-query').useQuery;
//import { getFood, getAllFood, createFood, updateFood, deleteFood} from './database.js'
const getFood = require('../index.js').getFoodWithPrisma;
const getAllFood = require('../index.js').getAllFoodWithPrisma;
const createFood = require('../index.js').createFoodWithPrisma;
const updateFood = require('../index.js').updateFoodWithPrisma;
const deleteFood = require('../index.js').deleteFoodWithPrisma;


export function llamarTodoMenu() {
// Access the client
//Main poner un <QueryClientProvider client={queryClient}>
    const queryClient = useQueryClient()
  // Queries
    const allMenu = useQuery({ queryKey: ['todoMenu'], queryFn: getAllFood })
}
export function llamarComida() {
    // Access the client
        const queryClient = useQueryClient()
      // Queries
        const menuFood = useQuery({ queryKey: ['menuComida'], queryFn: getFood })
    }
export function crearComida() {
    // Access the client
        const queryClient = useQueryClient()
        // Queries
        const nuevoPedido = useQuery({ queryKey: ['creadoComida'], queryFn: createFood })
    }
export function borrarComida() {
    // Access the client
        const queryClient = useQueryClient()
        // Queries
        const noPedido = useQuery({ queryKey: ['borradoComida'], queryFn: deleteFood })
    }
export function actualizarComida() {
    // Access the client
        const queryClient = useQueryClient()
        // Queries
        const cambioComida = useQuery({ queryKey: ['actualizadoComida'], queryFn: updateFood })
    }
/*
    return(
      <div>
        <ul>
          {allMenu.data?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
          {menuFood.data?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
          {nuevoPedido.data?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
          {noPedido.data?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
          {cambioComida.data?.map((todo) => ( 
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
        </div>
  )
  */
 