// Tipos del proyecto (contratos de datos de cada API)

export type Seccion = 'Personal' | 'Inventario' | 'Incidencias'

// API: https://jsonplaceholder.typicode.com/users
export interface Empleado {
  id: number
  name: string
  email: string
  address: {
    city: string
  }
}

// API: https://fakestoreapi.com/products?limit=6
export interface Activo {
  id: number
  title: string
  price: number
  category: string
  image: string
}

// API: https://jsonplaceholder.typicode.com/todos?_limit=8
export interface Incidencia {
  id: number
  userId: number
  title: string
  completed: boolean
}
