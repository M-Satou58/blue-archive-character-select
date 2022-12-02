const Halo = ({selectedStudent}) => {

  return (
    <div className="card rounded-md" style={{height: '355px'}}>
      <div className="content shadow-blue rounded-md shadow-sm">
        <div className="front flex flex-col w-full h-full justify-center p-4">
            <h1 className="text-center text-2xl text-black">Halo</h1>
            <div className="flex h-full justify-center items-center mb-2">
              <img className="" src={selectedStudent.halo} alt="" />
           </div>    
        </div>
        <div class="back p-4 rounded-md overflow-auto scrollbar-hide">
          <h1 className="px-2 text-2xl rounded-sm bg-black font-medium">Halo</h1>
          <div className="mt-2 overflow-auto scrollbar-hide bg-blue rounded-b-md" style={{height:"300px"}}>
            {selectedStudent.haloInfo.map((text, i) => {
              return <p key={i} className="p-2 mt-2 text-white" style={{letterSpacing:'2px'}}>{text}</p>
            })}
          </div>
        </div>
    </div>
  </div>
  )

}

export default Halo 
