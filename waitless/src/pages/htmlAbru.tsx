import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { llamarTodoMenu, llamarComida, crearComida, actualizarComida, borrarComida} from '../../../backend/fullStack/routes/apiFetch'
import { useQuery } from '@tanstack/react-query'
import { getFoodWithPrisma, getAllFoodWithPrisma, createFoodWithPrisma, updateFoodWithPrisma, deleteFoodWithPrisma} from '../../../backend/fullStack/index.js'

const queryClient = new QueryClient();
<QueryClientProvider client={queryClient}></QueryClientProvider>

const allMenu = useQuery({ queryKey: ['todoMenu'], queryFn: getAllFoodWithPrisma })
const menuFood = useQuery({ queryKey: ['menuComida'], queryFn: getFoodWithPrisma })
const nuevoPedido = useQuery({ queryKey: ['creadoComida'], queryFn: createFoodWithPrisma })
const noPedido = useQuery({ queryKey: ['borradoComida'], queryFn: deleteFoodWithPrisma })
const cambioComida = useQuery({ queryKey: ['actualizadoComida'], queryFn: updateFoodWithPrisma })

export default function Abru() {
  return (
    
        <div>
          <ul>
            {allMenu.data?.map((todo) => (
              <li key={todo.idFood}>{todo.name}</li>
            ))}
            
          </ul>
          </div>
    
  );
}
