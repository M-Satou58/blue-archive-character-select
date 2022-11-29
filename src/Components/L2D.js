const L2D = ({selectedStudent}) => {
  return (
    <div className="bg-white flex-grow rounded-md shadow-blue shadow-sm">
        <div className="flex flex-col justify-center items-center p-4 mb-2">
          <h1 className="text-2xl">Live 2D</h1>
          <img className="w-full h-full rounded-md shadow-blue shadow-sm" alt="" 
          src={selectedStudent.l2d} />
        </div>

    
    </div>

  )
}

export default L2D 
