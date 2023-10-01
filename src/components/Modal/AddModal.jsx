import React from 'react'
import Card from '../Card'
import Button from '../Button'

const AddModal = ({AddModalFunc, English, setdate, addData}) => {
  
  


  return (
    <div className='z-20  '>
      <Card className="w-1/3 rounded-lg shadow-2xl ">
      {English ? <h2 className='text-center mt-5 font-bold text-2xl'>Add Book</h2> : <h2 className='text-center mt-5 font-bold text-2xl'>Kitap Ekle</h2>}
      <form className='flex flex-col p-4 gap-6 z-50 '>
        <div className='flex flex-col gap-2'>
        {English ? <label className='font-medium text-base' htmlFor="book-name">Book Name:</label>: <label className='font-medium text-base' htmlFor="book-name">Kitap Adı:</label>}
        {English ? <input onChange={(e) =>{setdate(prevdate =>({...prevdate, bookName: e.target.value}))}} className='border dark:border-black rounded-md  bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='Enter the book name...'/> : <input onChange={(e) =>{setdate(prevdate =>({...prevdate, bookName: e.target.value}))}} className='border dark:border-black rounded-md  bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='kitap adını giriniz...'/>}
        </div>
        <div className='flex flex-col gap-2'>
        {English ? <label className='font-medium text-base' htmlFor="author-name">Author Name:</label> : <label className='font-medium text-base' htmlFor="author-name">Yazar Adı:</label>}
        {English ? <input onChange={(e) =>{setdate(prevdate =>({...prevdate, authorName: e.target.value}))}} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800  p-1' type="text" placeholder='Enter the author name...' /> : <input onChange={(e) =>{setdate(prevdate =>({...prevdate, authorName: e.target.value}))}} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800  p-1' type="text" placeholder='yazar adını giriniz...' />}
        </div>
        <div className='flex flex-col gap-2'>
        {English ? <label className='font-medium text-base' htmlFor="book-type">Book Type:</label> : <label className='font-medium text-base' htmlFor="book-type">Kitap Türü:</label>}
        <select onChange={(e) =>{setdate(prevdate =>({...prevdate, bookType: e.target.value}))}} className='dark:bg-gray-800  bg-gray-50 rounded-md shadow-sm'>
        <option></option>
        {English ? <option value="novel">Novel</option> : <option value="Roman">Roman</option>}
        {English ? <option value="story">Story</option> : <option value="Hikaye">Hikaye</option>}
        {English ? <option value="fairytale">Fairtyle</option> : <option value="Masal">Masal</option>}
        </select>
        </div>
        <div className='flex flex-col gap-2'>
        {English ? <label className='font-medium' htmlFor="book-number">Book Number:</label> : <label className='font-medium' htmlFor="book-number">Kitap Numarası:</label>}
        {English ? <input onChange={(e) =>{setdate(prevdate =>({...prevdate, bookNumber: e.target.value}))}} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="number" placeholder='Enter the book number...' /> : <input onChange={(e) =>{setdate(prevdate =>({...prevdate, bookNumber: e.target.value}))}} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="number" placeholder='kitap numarasını giriniz...' />}
        </div>
        <div className='flex flex-col gap-2'>
        {English ? <label className='font-medium' htmlFor="purchase-date">Purchase Date:</label> : <label className='font-medium' htmlFor="purchase-date">Alış Tarihi:</label>}
        {English ? <input onChange={(e) =>{setdate(prevdate =>({...prevdate, purchaseDate: e.target.value}))}} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='Enter the purchase date...' />: <input onChange={(e) =>{setdate(prevdate =>({...prevdate, purchaseDate: e.target.value}))}} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='alış tarihini giriniz...' />}
        </div>
        <div className='flex flex-col gap-2'>
          {English ?  <label className='font-medium' htmlFor="delivery-date">Delivery Date:</label>:  <label className='font-medium' htmlFor="delivery-date">Teslim tarihi:</label>}
          {English ? <input onChange={(e) =>{setdate(prevdate =>({...prevdate, deliveryDate: e.target.value}))}} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='Enter the delivery date...' />: <input onChange={(e) =>{setdate(prevdate =>({...prevdate, deliveryDate: e.target.value}))}} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='teslim tarihini giriniz...' />}
        </div>
          <div className="buttons flex justify-between">
            {English ? <button onClick={addData}  className='bg-green-700 text-white p-2 rounded-md text-sm w-15' type='button'>Add</button>: <button onClick={addData}  className='bg-green-700 text-white p-2 rounded-md text-sm w-15' type='button'>Ekle</button>}
            {English ? <Button onClick = {AddModalFunc}>Cancel</Button> : <Button onClick = {AddModalFunc}>Vazgeç</Button>}
          </div>
          
      </form>
        </Card>
        <div onClick = {AddModalFunc} className='fixed top:0 h-screen w-screen inset-0 z-0 bg-white/20 backdrop-blur-sm '></div>
    </div>
    
  )
}

export default AddModal