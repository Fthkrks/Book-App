import { useEffect, useState } from "react"
import Table from "./components/Table"
import TableHeader from "./components/TableHeader";


function App() {
  const [DarkMode, setDarkMode] = useState(true);
  const [English, setEnglish] = useState(false);
  const [tableData, settableData] = useState(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []);
  const [selectedOption, setSelectedOption] = useState('all');

  console.log(selectedOption);
  const filteredData = tableData.filter(item => {
    if (selectedOption === 'all') {
      return tableData; // Tüm verileri göster
    }
    else if (selectedOption == "Hepsi"){
      return tableData;
    }
    return item.bookType === selectedOption; // Sadece seçilen türdeki verileri göster
  });

  useEffect(() =>{
    localStorage.setItem("data", JSON.stringify(tableData)); 

  }, [tableData])



  return (
    <div className="mt-10">
    <TableHeader DarkMode={DarkMode} filteredData={filteredData} English={English} setDarkMode ={setDarkMode} setEnglish={setEnglish} settableData ={settableData} tableData={tableData} setSelectedOption={setSelectedOption}/>
    <Table tableData={tableData} filteredData={filteredData} settableData={settableData} English= {English}/>
    </div>

  )
}

export default App
