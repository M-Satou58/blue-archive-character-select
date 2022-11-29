import "./cardFlip.css"
const Portrait = ({selectedStudent}) => {
  return (
    <div class="card rounded-md" style={{height: '355px'}}>
      <div class="content shadow-blue rounded-md shadow-sm">
        <div class="front flex w-full h-full justify-center p-4">
          <img className=""src={selectedStudent.portrait} alt="" />
      </div>
     <div class="back p-4 rounded-md overflow-auto scrollbar-hide">
        <h1 className="text-2xl px-2 bg-black">Introduction</h1>
        <p className="mt-2" style={{letterSpacing: '2px'}}>{selectedStudent.introduction}</p>
        <h1 className="text-2xl px-2 mt-2 bg-black">Personality</h1>
        <p className="mt-2" style={{letterSpacing: '2px'}}>{selectedStudent.personality}</p>
     </div>
    </div>
  </div>
  )
}

export default Portrait 
