import React from 'react'
import Card from '../Card'

const DeleteModal = ({DeleteModalFunc, English, deleteData}) => {
  return (
    <div className='z-20'>
      <Card className="w-1/3  rounded-lg shadow-2xl mt-36 ">
        <header className='bg-red-600'>
          {English ? <h2 className='text-center p-2 text-2xl text-white '>Are you sure ?</h2> : <h2 className='text-center p-2 text-2xl text-white '>Emin Misin ?</h2>}
        </header>
        <section className='p-5 text-center text-lg '>
          {English ? <p>are you sure do you wanna delete table ?</p> : <p>Tabloyu silmek istediğinizden emin misiniz ?</p>}
        </section>
        <footer className=' p-3 flex justify-between'>
          {English ? <button className='bg-red-600 p-2 rounded-md text-white' onClick={deleteData} >Delete Table</button> : <button onClick={deleteData} className='bg-red-600 p-2 rounded-md text-white' >Tabloyu Sil</button>}
          {English ? <button className='bg-blue-600 p-2 rounded-md text-white' onClick={DeleteModalFunc}>Cancel</button> : <button className='bg-blue-600 p-2 rounded-md text-white' onClick={DeleteModalFunc}>Vazgeç</button>}

        </footer>


      </Card>
      <div onClick = {DeleteModalFunc} className='fixed top:0 h-screen w-screen inset-0 z-0 bg-white/20 backdrop-blur-sm '></div>
    </div>
  )
}

export default DeleteModal