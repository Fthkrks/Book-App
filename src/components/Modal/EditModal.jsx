import React from 'react'
import Card from '../Card'
import Button from '../Button'

const EditModal = ({English, editDateFunc, formData, handleInputChange, handleFormSubmit}) => {


      
    
      
  return (
    <div className='z-20  '>
    <Card className="w-1/3 rounded-lg shadow-2xl ">
    {English ? <h2 className='text-center mt-5 font-bold text-2xl'>Edit Book</h2> : <h2 className='text-center mt-5 font-bold text-2xl'>Düzenle</h2>}
    <form className='flex flex-col p-4 gap-6 z-50 ' onSubmit={handleFormSubmit} >
      <div className='flex flex-col gap-2'>
      {English ? <label className='font-medium text-base' htmlFor="book-name">Book Name:</label>: <label className='font-medium text-base' htmlFor="book-name">Kitap Adı:</label>}
      {English ? <input name="bookName" defaultValue={formData.bookName} onChange={handleInputChange} className='border dark:border-black rounded-md  bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='Enter the book name...'/> : <input name="bookName" onChange={handleInputChange} defaultValue={formData.bookName}  className='border dark:border-black rounded-md  bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='kitap adını giriniz...'/>}
      </div>
      <div className='flex flex-col gap-2'>
      {English ? <label className='font-medium text-base' htmlFor="author-name">Author Name:</label> : <label className='font-medium text-base' htmlFor="author-name">Yazar Adı:</label>}
      {English ? <input name="authorName" defaultValue={formData.authorName} onChange={handleInputChange} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800  p-1' type="text" placeholder='Enter the author name...' /> : <input name="authorName" onChange={handleInputChange} defaultValue={formData.authorName} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800  p-1' type="text" placeholder='yazar adını giriniz...' />}
      </div>
      <div className='flex flex-col gap-2'>
      {English ? <label className='font-medium text-base' htmlFor="book-type">Book Type:</label> : <label className='font-medium text-base' htmlFor="book-type">Kitap Türü:</label>}
      <select name="bookType" defaultValue={formData.bookType} onChange={handleInputChange} className='dark:bg-gray-800  bg-gray-50 rounded-md shadow-sm'>
      <option></option>
        {English ? <option value="novel">Novel</option> : <option value="Roman">Roman</option>}
        {English ? <option value="story">Story</option> : <option value="Hikaye">Hikaye</option>}
        {English ? <option value="fairytale">Fairtyle</option> : <option value="Masal">Masal</option>}
      </select>
      </div>
      <div className='flex flex-col gap-2'>
      {English ? <label className='font-medium' htmlFor="book-number">Book Number:</label> : <label className='font-medium' htmlFor="book-number">Kitap Numarası:</label>}
      {English ? <input name="bookNumber" defaultValue={formData.bookNumber} onChange={handleInputChange} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="number" placeholder='Enter the book number...' /> : <input name="bookNumber" onChange={handleInputChange} defaultValue={formData.bookNumber}  className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="number" placeholder='kitap numarasını giriniz...' />}
      </div>
      <div className='flex flex-col gap-2'>
      {English ? <label className='font-medium' htmlFor="purchase-date">Purchase Date:</label> : <label className='font-medium' htmlFor="purchase-date">Alış Tarihi:</label>}
      {English ? <input name="purchaseDate" defaultValue={formData.purchaseDate} onChange={handleInputChange} className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='Enter the purchase date...' />: <input name="purchaseDate" onChange={handleInputChange} defaultValue={formData.purchaseDate}  className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='alış tarihini giriniz...' />}
      </div>
      <div className='flex flex-col gap-2'>
        {English ?  <label className='font-medium' htmlFor="delivery-date">Delivery Date:</label>:  <label className='font-medium' htmlFor="delivery-date">Teslim tarihi:</label>}
        {English ? <input name="deliveryDate" defaultValue={formData.deliveryDate} onChange={handleInputChange}  className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='Enter the delivery date...' />: <input name="deliveryDate" onChange={handleInputChange} defaultValue={formData.deliveryDate}  className='border dark:border-black rounded-md bg-gray-50 dark:bg-gray-800 p-1' type="text" placeholder='teslim tarihini giriniz...' />}
      </div>
        <div className="buttons flex justify-between">
          {English ? <button className='bg-yellow-500 text-white p-2 rounded-md text-sm w-15' type='submit'>Edit</button>: <button className='bg-yellow-500 text-white p-2 rounded-md text-sm w-15' type='submit'>Düzenle</button>}
          {English ? <Button onClick = {editDateFunc}  type="button" >Cancel</Button> : <Button onClick = {editDateFunc} type="button" >Vazgeç</Button>}
        </div>
        
    </form>
      </Card>
      <div onClick = {editDateFunc} className='fixed top:0 h-screen w-screen inset-0 z-0 bg-white/20 backdrop-blur-sm '></div>
  </div>
  )
}

export default EditModal