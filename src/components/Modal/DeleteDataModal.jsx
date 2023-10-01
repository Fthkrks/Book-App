import React from 'react'
import Card from '../Card'



const DeleteDataModal = ({ English, deleteDateFunc, deletedate}) => {


    return (
      <div className='z-20'>
        <Card className="w-1/3  rounded-lg shadow-2xl mt-36 ">
          <header className='bg-red-600'>
            {English ? <h2 className='text-center p-2 text-2xl text-white '>Are you sure ?</h2> : <h2 className='text-center p-2 text-2xl text-white '>Emin Misin ?</h2>}
          </header>
          <section className='p-5 text-center text-lg '>
            {English ? <p>Are you sure you want to delete the selected book? ?</p> : <p>Seçili kitabı silmek istediğinizden emin misin ?</p>}
          </section>
          <footer className=' p-3 flex justify-between'>
            {English ? <button className='bg-red-600 p-2 rounded-md text-white' onClick={deletedate}  >Delete Book</button> : <button onClick={deletedate} className='bg-red-600 p-2 rounded-md text-white' >Kitabı Sil</button>}
            {English ? <button className='bg-blue-600 p-2 rounded-md text-white' onClick={deleteDateFunc} >Cancel</button> : <button onClick={deleteDateFunc} className='bg-blue-600 p-2 rounded-md text-white' >Vazgeç</button>}
  
          </footer>
  
  
        </Card>
        <div onClick={deleteDateFunc}  className='fixed top:0 h-screen w-screen inset-0 z-0 bg-white/20 backdrop-blur-sm '></div>
      </div>
    )
  }

export default DeleteDataModal