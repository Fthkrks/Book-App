
import { useEffect, useState } from "react"
import Button from "./Button"
import DeleteDataModal from "./Modal/DeleteDataModal"
import EditModal from "./Modal/EditModal";

const Table = ({English, tableData, settableData, filteredData}) => {
  const [selectedID, setselectedID] = useState(null);
  const [formData, setformData] = useState({}); 




  //! Modals 

  const [modals, setmodals] = useState({
    deleteDate: false,
    editDate: false
  })


  const {deleteDate, editDate} = modals



  //! Delete Functions 

  const deleteDateFunc = (id)=>{
    setmodals(prevmodals =>({
      ...prevmodals,
      deleteDate: !deleteDate,
    }));
    setselectedID(id)
  }

  const deletedate = ()=>{
    settableData(tableData.filter((item) => item.id !== selectedID))
    setmodals(prevmodals =>({
      ...prevmodals,
      deleteDate: !deleteDate,
    }));


}

  //! Edit functions 

  const editDateFunc = (id)=>{
    setmodals(prevmodals =>({
      ...prevmodals,
      editDate: !editDate
    }))
    setselectedID(id);
    selectedformID(id)

  }


  const selectedformID = (id) =>{
    const selectedData = tableData.find(item => item.id === id);

    if (selectedData){
      setformData({
        bookName: selectedData.bookName,
        authorName: selectedData.authorName,
        bookType: selectedData.bookType,
        bookNumber: selectedData.bookNumber,
        purchaseDate: selectedData.purchaseDate,
        deliveryDate: selectedData.deliveryDate
  
      })
    }
  }



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  


  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    
    updateData();
  };
  

  const updateData = () => {
  
    settableData(tableData.map(item => {
      if (item.id === selectedID) {
        return {
          ...item,
          bookName: formData.bookName,
          authorName: formData.authorName,
          bookType: formData.bookType,
          bookNumber: formData.bookNumber,
          purchaseDate: formData.purchaseDate,
          deliveryDate: formData.deliveryDate
        };
      }
      return item;
    }));
  
    setmodals(prevmodals =>({
      ...prevmodals,
      editDate: !editDate
    }))
  };
  


  



  return (
    <div>
      {deleteDate && <DeleteDataModal English={English} deleteDateFunc={deleteDateFunc} deletedate={deletedate} />}
      {editDate && <EditModal English={English} editDateFunc={editDateFunc} formData={formData} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit}  />}

<table className="border border-green-950 bg-gray-200  text-black w-screen m-auto mt-2 text-center dark:bg-[#202020] dark:text-white" >
      <thead>
        
      <tr className="border border-green-800">
            <th className="border border-blue-900">{English ? <span>Book Name</span> : <span>Kitap Adı</span>}</th>
            <th className="border border-blue-900">{English ? <span>Author Name</span> : <span>Yazar Adı</span>}</th>
            <th className="border border-blue-900">{English ? <span>Book Type</span> : <span>Kitap Türü</span>}</th>
            <th className="border border-blue-900">{English ? <span>Book Number</span> : <span>Kitap No</span>}</th>
            <th className="border border-blue-900">{English ? <span>Purchase Date</span> : <span>Alış Tarihi</span>}</th>
            <th className="border border-blue-900">{English ? <span>Delivery Date</span> : <span>Teslim Tarihi</span>}</th>
            <th className="border border-blue-900">{English ? <span>Transactions</span> : <span>İşlemler</span>}</th>
        </tr>
      </thead>
        <tbody>
          {filteredData.map(data =>(
                      <tr className="border border-blue-900" key={data.id}>
                      <td className="border border-blue-900">{data.bookName}</td>
                      <td className="border border-blue-900">{data.authorName}</td>
                      <td className="border border-blue-900">{data.bookType}</td>
                      <td className="border border-blue-900">{data.bookNumber}</td>
                      <td className="border border-blue-900">{data.purchaseDate}</td>
                      <td className="border border-blue-900">{data.deliveryDate}</td>
                      <td className="border border-blue-900 p-2">
                          <button className="bg-yellow-500 p-2 rounded-md text-sm" onClick={() =>{editDateFunc(data.id)}}><i className="fa-solid fa-pen-to-square text-white"></i></button>
                          <Button className="ml-3" onClick = {()=>{deleteDateFunc(data.id)}} ><i className="fa-solid fa-trash"></i></Button>
                      </td>
          
                  </tr>
          ))}

      </tbody>
    </table>

    </div>

  )
}

export default Table