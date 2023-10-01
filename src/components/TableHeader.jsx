import React, { useReducer, useState } from 'react'
import Button from './Button';
import AddModal from "./Modal/AddModal"
import DeleteModal from "./Modal/DeleteModal"




const TableHeader = ({DarkMode, setDarkMode, English, setEnglish, settableData, setSelectedOption}) => {
  const [date, setdate] = useState({
    bookName: "",
    authorName: "",
    bookType: "",
    bookNumber: "",
    purchaseDate: "",
    deliveryDate: "",
  })




  const addData = ()=>{
    settableData((prevdata) =>[
      ...prevdata,
      {
        id: Math.floor(Math.random() * 10000),
        bookName: date.bookName,
        authorName: date.authorName,
        bookType: date.bookType,
        bookNumber: date.bookNumber,
        purchaseDate: date.purchaseDate,
        deliveryDate: date.deliveryDate
      }
  
    ])
    setmodals(prevModals =>({
      ...prevModals,
      addModal: !addModal,
    }))
  
  }


  const deleteData = ()=>{
    settableData([]);
    setmodals(prevModals =>({
      ...prevModals,
      deleteModal: !deleteModal,
    }))
  }


const[modals, setmodals] = useState({
  addModal: false,
  deleteModal: false,
});





const {addModal, deleteModal} = modals





const AddModalFunc = ()=>{
  setmodals(prevModals =>({
    ...prevModals,
    addModal: !addModal,
  }))
}





const DeleteModalFunc = ()=>{
  setmodals(prevModals =>({
    ...prevModals,
    deleteModal: !deleteModal,
  }))

} 

const DarkModeFunc = ()=>{
  document.body.classList.toggle('light-mode');
  setDarkMode(!DarkMode);
  document.documentElement.classList.toggle("dark");
      }
    
const SetLangues = ()=>{
  setEnglish(!English);
      }
    
    
    
    
    
    
      const ToggleBall ={
        left: DarkMode ? "49px" : "1px",
        transition: " all 0.7s ease",
        backgroundColor: DarkMode ? "black" : "white",
    
    }
    
    
      const ToggleDiv ={
        backgroundColor: DarkMode ? "rgb(31 41 55)" : "rgb(253 230 138)"
      }


      


      
  return (
    <div className="buttons-wrapper flex justify-between">
      {addModal && <AddModal addData={addData} AddModalFunc={AddModalFunc} English={English} setdate={setdate} /> }
      {deleteModal && <DeleteModal DeleteModalFunc= {DeleteModalFunc} English={English} deleteData={deleteData}/>}
    <div className="buttons flex gap-4">
    <button className="bg-green-700 text-white p-2 rounded-md text-sm ml-2"  onClick={AddModalFunc}>{English ? <span>New product add</span> : <span>Yeni ürün ekle</span>}</button>
    <Button onClick={DeleteModalFunc}>{English ? <span>Delete table</span> : <span>Tabloyu Sil</span>}</Button>
    <select onChange={(e) => setSelectedOption(e.target.value)}  className='dark:bg-[#00ced1]  bg-[#ffffe0] rounded-md shadow-sm'>
    {English ? <option value="all">All</option> : <option value="Hepsi">Hepsi</option>}
    {English ? <option value="novel">Novel</option> : <option value="Roman">Roman</option>}
    {English ? <option value="story">Story</option> : <option value="Hikaye">Hikaye</option>}
    {English ? <option value="fairytale">Fairtyle</option> : <option value="Masal">Masal</option>}
    </select>
    </div>
    <div className="toggles flex gap-6">
    <div className="bg-white flex items-center gap-10 rounded-full right-10 relative" style={ToggleDiv}>
    <i className="fa-solid fa-moon text-lg ml-1" style ={{color: DarkMode ? "#F6F1D5" : "black"}}></i>
    <i className="fa-solid fa-sun text-[#FC9601] text-lg mr-1"></i>
    <div className="toggle-bal absolute   w-7 h-7 rounded-full cursor-pointer "style={ToggleBall} onClick={DarkModeFunc}></div>
    </div>
    <div className="langues mr-5 bg-white flex items-center gap-10 rounded-full font-medium relative dark:bg-[#1F2937] dark:text-white ">
    <span className="ml-1">TR</span>
    <span className="mr-1">EN</span>
    <div className="toggle-bal absolute bg-gray-300  w-7 h-7 rounded-full cursor-pointer dark:bg-black " style={{left: !English ? "58px" : "1px", transition: " all 0.7s ease",}} onClick={SetLangues}></div>
    </div>
    </div>

  </div>
  )
}

export default TableHeader