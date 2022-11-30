const Firearm = ({selectedStudent}) => {

  return (
    <div className="card rounded-md" style={{height: '355px'}}>
      <div className="content shadow-blue rounded-md shadow-sm">
        <div className="front flex flex-col w-full h-full justify-center p-4">
            <h1 className="text-center text-2xl text-black">Firearm</h1>

            <div className="flex h-full justify-center items-center mb-2">
              <img className="" src={selectedStudent.firearm} alt="" />
           </div>    
        </div>
        <div class="back p-4 rounded-md overflow-auto scrollbar-hide">
          <h1 className="px-2 text-2xl bg-black font-medium">Firearm</h1>
          <div className="mt-2 overflow-auto scrollbar-hide bg-blue rounded-b-md" style={{height:"300px"}}>
            <h1 className="p-2 text-white text-center text-2xl">{selectedStudent.firearmName}</h1>
            <p className="p-2 text-white" style={{letterSpacing:'2px'}}>{selectedStudent.firearmInfo}</p>
          </div>
        </div>
    </div>
  </div>
  )

}

export default Firearm 
