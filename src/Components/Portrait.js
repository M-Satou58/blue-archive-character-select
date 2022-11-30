import "./cardFlip.css"
const Portrait = ({selectedStudent}) => {
  return (
    <div className="card rounded-md" style={{height: '355px'}}>
      <div className="content shadow-blue rounded-md shadow-sm">
        <div className="front flex w-full h-full justify-center p-4">
          <img className=""src={selectedStudent.portrait} alt="" />
      </div>
     <div className="back p-4 rounded-md overflow-auto scrollbar-hide">
        <h1 className="text-2xl px-2 bg-black">Introduction</h1>
          {selectedStudent.introduction.map((text, i) => {
            return <p key={i} className="mx-2 my-4" style={{letterSpacing: '2px'}}>{text}</p>
          })}
        <h1 className="text-2xl px-2 mt-2 bg-black">Personality</h1>
          {selectedStudent.personality.map((text, i) => {
            return <p key={i} className="mx-2 my-4" style={{letterSpacing: '2px'}}>{text}</p>
          })}
     </div>
    </div>
  </div>
  )
}

export default Portrait 
