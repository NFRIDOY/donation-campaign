import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
export default function MainLayout() {
  return (
    <div className='max-w-7xl mx-auto py-9'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}
