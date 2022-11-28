const Appearance = ({selectedStudent}) => {

  return (
    <div className="bg-white flex-grow rounded-md shadow-blue shadow-sm">
       <div className="flex justify-center items-center h-48 mb-2">
         <img className="mx-auto" src={selectedStudent.sprite} alt="" />
       </div>

       <h1 className="px-4 text-xl font-medium">Appearance</h1> 
       <p className="px-4 py-2 text-white h-56 text-justify rounded-b-md bg-blue overflow-auto scrollbar-hide">{selectedStudent.appearance}</p>
    </div>

  )
}

export default Appearance 


