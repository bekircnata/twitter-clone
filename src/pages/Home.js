import React from 'react'
import Menu from '../components/menu/Menu'

export default function Home() {
  return (
    <div className='home-page'>
      <div className='grid'>
        <div className='lg:col-4'>
          <Menu />
        </div>
        <div className='lg:col-5' style={{color: "#fff"}}>Content</div>
        <div className='lg:col-3' style={{color: "#fff"}}>Right Sidebar</div>
      </div>
    </div>
  )
}
