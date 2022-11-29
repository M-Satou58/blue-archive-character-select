const Halo = ({selectedStudent}) => {

  return (
    <div className="bg-white flex flex-col h-full w-full rounded-md shadow-blue shadow-sm">
       <div className="flex justify-center items-center mb-2" style={{height:'190px'}}>
         <img className="mx-auto h-full" src={selectedStudent.halo} alt="" />
       </div>

        <h1 className="px-4 text-xl font-medium">Halo</h1> 

        <div className="mt-2 overflow-auto scrollbar-hide bg-blue rounded-b-md" style={{height:"190px"}}>
         <p className="px-4 py-2 text-white text-justify ">{selectedStudent.haloInfo}</p>
        </div>
    </div>

  )
}

export default Halo 
