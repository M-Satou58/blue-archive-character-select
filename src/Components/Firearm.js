const Firearm = ({selectedStudent}) => {

  return (
    <div className="bg-white flex flex-col h-full w-full rounded-md shadow-blue shadow-sm">
       <div className="flex justify-center items-center mb-2" style={{height:'190px'}}>
         <img className="mx-auto" src={selectedStudent.firearm} alt="" />
       </div>

        <h1 className="px-4 text-xl font-medium">Firearm</h1> 

        <div className="mt-2 overflow-auto scrollbar-hide bg-blue rounded-b-md" style={{height:"190px"}}>
         <h1 className="px-4 pt-1 text-center text-white text-xl font-medium">{selectedStudent.firearmName}</h1>  
         <p className="px-4 py-1 text-white text-justify ">{selectedStudent.firearmInfo}</p>
        </div>
    </div>

  )
}

export default Firearm 
