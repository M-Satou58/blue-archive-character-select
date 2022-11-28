const UniqueItem = ({selectedStudent}) => {
  return (
    <div className="bg-white flex-grow rounded-md shadow-blue shadow-sm">
        <div className="flex justify-center items-center h-48 mb-2">
       <img className="mx-auto" src={selectedStudent.uniqueItem} alt="" />
        </div>
       <h1 className="px-4 text-xl font-medium">Unique Item</h1> 
       <p className="px-4 py-2 text-white text-md text-justify h-56 rounded-b-md bg-blue overflow-auto scrollbar-hide">{selectedStudent.uniqueItemInfo}</p>
    </div>

  )
}

export default UniqueItem 
