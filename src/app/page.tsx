"use client"
import { Provider } from 'react-redux'
import store from '@/store'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Info from '@/components/Info'
import RoadMap from '@/components/RoadMap'
import Article from '@/components/Article'
import ShareCode from '@/components/Code'
import Send_feedback from '@/components/Send_feeadback'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';


export default function Home() {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <main className='bg-[#FAF0E6] dark:bg-[#352F44] text-[#352F44] dark:text-[#FAF0E6]'>
        <Header/>
        <Info/>
        <RoadMap/>
        <Article/>
        <ShareCode/>
        <Send_feedback/>
        <Footer/>
      </main>
    </Provider>
  )
}
