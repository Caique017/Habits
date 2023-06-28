import './styles/global.css';
import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';
import './lib/dayjs';

// import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'> 
      <div className='w-full max-w-7xl px-2 flex flex-col gap-16'>
      <Header />
      <SummaryTable />
  </div>
    </div>
  )
}