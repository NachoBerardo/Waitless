import useQuery from '@tanstack/react-query'
import { getFood, getAllFood, createFood, updateFood, deleteFood} from './database.js'

function llamarTodoMenu() {
// Access the client
    const queryClient = useQueryClient()
  // Queries
    const allMenu = useQuery({ queryKey: ['todoMenu'], queryFn: getAllFood })
}
function llamarComida() {
    // Access the client
        const queryClient = useQueryClient()
      // Queries
        const menuFood = useQuery({ queryKey: ['menuComida'], queryFn: getFood })
    }
function crearComida() {
    // Access the client
        const queryClient = useQueryClient()
        // Queries
        const nuevoPedido = useQuery({ queryKey: ['creadoComida'], queryFn: createFood })
    }
function borrarComida() {
    // Access the client
        const queryClient = useQueryClient()
        // Queries
        const noPedido = useQuery({ queryKey: ['borradoComida'], queryFn: deleteFood })
    }
function actualizarComida() {
    // Access the client
        const queryClient = useQueryClient()
        // Queries
        const cambioComida = useQuery({ queryKey: ['actualizadoComida'], queryFn: updateFood })
    }

    return (
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