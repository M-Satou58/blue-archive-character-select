const Student = ({
  studentKey,
  setSelectedStudent,
  setTogglePortrait,
  setToggleAppearance,
  setToggleHalo,
  setToggleFirearm,
  setToggleL2D,
}) => {

  const student = studentKey 

  const clickHandler = () => {
    setSelectedStudent(student)
    setTogglePortrait(true)
    setToggleAppearance(false)
    setToggleHalo(false)
    setToggleFirearm(false)
    setToggleL2D(false)
   }



  return (
    <div className="flex flex-col justify-center items-center gap-1"
        onClick={clickHandler}
    >
      <img className="drop-shadow-md" src={student.icon} alt ="" />
      <span className="font-semibold">{student.fName}</span>
    </div>
  )
}

export default Student
