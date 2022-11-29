const L2D = ({selectedStudent}) => {

  return (
    <div class="card rounded-md" style={{height: '355px'}}>
      <div class="content shadow-blue rounded-md shadow-sm">
        <div class="front flex flex-col w-full h-full justify-center p-4">
            <h1 className="text-center text-2xl text-black">Live 2D</h1>
            <div className="flex h-full w-full justify-center items-center mb-2">
              <img className="w-full rounded-md" src={selectedStudent.l2d} alt="" />
           </div>    
        </div>
        <div class="back p-4 rounded-md overflow-auto scrollbar-hide">
          <h1 className="px-2 text-2xl bg-black font-medium">Trivia</h1>
          <div className="mt-2 overflow-auto scrollbar-hide bg-blue rounded-b-md" style={{height:"300px"}}>
            <p className="px-2 py-2 text-white" style={{letterSpacing:'2px'}}>{selectedStudent.trivia}</p>
          </div>
        </div>
    </div>
  </div>
  )

}

export default L2D 
