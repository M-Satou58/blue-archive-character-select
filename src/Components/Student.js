const Student = ({studentKey,  setSelectedStudent}) => {

  const student = studentKey 

  const clickHandler = () => {
    setSelectedStudent(student)
  }


  return (
    <div className="flex flex-col justify-center items-center gap-1"
        onClick={clickHandler}
    >
      <img className="shadow-blue shadow-sm" src={student.icon} alt ="" />
      <span className="font-semibold">{student.fName}</span>
    </div>
  )
}

export default Student
