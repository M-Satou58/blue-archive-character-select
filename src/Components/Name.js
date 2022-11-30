const Name = ({selectedStudent}) => {
  return (
        <div className="bg-white rounded-md text-center shadow-blue shadow-sm" >
          <div className="bg-blue font-semibold text-white text-2xl rounded-t-md p-2">
            <h1>{selectedStudent.fName+" "+selectedStudent.lName}</h1>
        </div>
          <p className="px-4  py-2 text-xl overflow-auto scrollbar-hide" style={{height: '70px'}}>{`“ ${selectedStudent.quote} ”`}</p>
        </div>

  )
}

export default Name
