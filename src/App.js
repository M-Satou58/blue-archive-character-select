import { useState } from 'react'
import Student from './Components/Student.js'
import InfoBox from './Components/InfoBox.js'
import Portrait from './Components/Personality.js'
import Appearance from './Components/Appearance.js'
import Halo from './Components/Halo.js'
import Firearm from './Components/Firearm.js'
import UniqueItem from './Components/UniqueItem.js'
import L2D from './Components/L2D.js'
import StudentInfo from './StudentInfo.js'
function App() {
  const [selectedStudent, setSelectedStudent] = useState(StudentInfo['aru'])
  const [togglePortrait, setTogglePortrait] = useState(true)
  const [toggleAppearance, setToggleAppearance] = useState(false)
  const [toggleHalo, setToggleHalo] = useState(false)
  const [toggleFirearm, setToggleFirearm] = useState(false)
  const [toggleUniqueItem, setToggleUniqueItem] = useState(false)
  const [toggleL2D, setToggleL2D] = useState(false)
  const StudentInfoKeys = Object.keys(StudentInfo)


  const toggleHandler = (toggle) => {
    switch(toggle) {
      case 'portrait':
        setTogglePortrait(true)
        setToggleAppearance(false)
        setToggleHalo(false)
        setToggleFirearm(false)
        setToggleUniqueItem(false)
        setToggleL2D(false)
        break

      case 'appearance':
        setTogglePortrait(false)
        setToggleAppearance(true)
        setToggleHalo(false)
        setToggleFirearm(false)
        setToggleUniqueItem(false)
        setToggleL2D(false)

        break
      case 'halo':
        setTogglePortrait(false)
        setToggleAppearance(false)
        setToggleHalo(true)
        setToggleFirearm(false)
        setToggleUniqueItem(false)
        setToggleL2D(false)

        break

      case 'firearm':
        setTogglePortrait(false)
        setToggleAppearance(false)
        setToggleHalo(false)
        setToggleFirearm(true)
        setToggleUniqueItem(false)
        setToggleL2D(false)

        break

      case 'uniqueItem':
        setTogglePortrait(false)
        setToggleAppearance(false)
        setToggleHalo(false)
        setToggleFirearm(false)
        setToggleUniqueItem(true)
        setToggleL2D(false)
        break

      case 'l2d':
        setTogglePortrait(false)
        setToggleAppearance(false)
        setToggleHalo(false)
        setToggleFirearm(false)
        setToggleUniqueItem(false)
        setToggleL2D(true)
        break
      default:
        break
    }
  }



  return (
    <div className="flex justify-center gap-4 py-10 text-black w-full h-full">

      <div className="flex flex-col justify-center items-center" style={{maxWidth: '450px', maxHeight: '560px'}}>
        <h1 className="text-2xl text-center font-bold" style={{letterSpacing:'1rem'}}>SELECT A <br />STUDENT</h1>
        <div className="grid grid-cols-4 gap-y-2 gap-x-4 mt-2 p-4 
          bg-white shadow-blue shadow-sm overflow-scroll rounded-lg scrollbar-hide"
          >
          {StudentInfoKeys.map((key, i) => {
            return <Student 
                      key={i} 
                      studentKey={StudentInfo[key]}
                      setSelectedStudent={setSelectedStudent}
                      />
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 " style={{maxWidth: '400px', maxHeight: '550px'}}>
        <div className="flex justify-between gap-3" style={{minWidth: '400px'}}>
          <div className="flex flex-grow justify-center relative"> 
          {togglePortrait && <Portrait selectedStudent={selectedStudent}/>}
          {toggleAppearance && <Appearance selectedStudent={selectedStudent}/>}
          {toggleHalo && <Halo selectedStudent={selectedStudent}/>}
          {toggleFirearm && <Firearm selectedStudent={selectedStudent}/>}
          {toggleUniqueItem && <UniqueItem selectedStudent={selectedStudent}/>}
          {toggleL2D && <L2D selectedStudent={selectedStudent}/>}
 
          </div>
          <div className="flex flex-col gap-2">
            <div className={`${togglePortrait ? 'animate-pulse' : ''}`} onClick={() => toggleHandler('portrait')}>

                 <InfoBox image={selectedStudent.icon1}/>
            </div>
            <div className={`${toggleAppearance ? 'animate-pulse' : ''}`} onClick={() => toggleHandler('appearance')}>
                <InfoBox image={selectedStudent.sprite}/>
            </div>
            <div className={`${toggleHalo ? 'animate-pulse' : ''}`} onClick={() => toggleHandler('halo')}>
                <InfoBox image={selectedStudent.halo}/>
            </div>
            <div className={`${toggleFirearm ? 'animate-pulse' : ''}`} onClick={() => toggleHandler('firearm')}>
                <InfoBox image={selectedStudent.firearm}/>
            </div>
            <div className={`${toggleUniqueItem ? 'animate-pulse' : ''}`} onClick={() => toggleHandler('uniqueItem')}>
                <InfoBox image={selectedStudent.uniqueItem}/>
            </div>
            <div className={`${toggleL2D ? 'animate-pulse' : ''}`} onClick={() => toggleHandler('l2d')}>
                <InfoBox image={selectedStudent.l2dIcon}/>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md text-center shadow-blue shadow-sm" >
          <div className="bg-blue font-semibold text-white text-2xl rounded-t-md p-2">
            <h1>{selectedStudent.fName+" "+selectedStudent.lName}</h1>
        </div>
          <p className="px-4 py-2 text-xl">{`“ ${selectedStudent.quote} ”`}</p>
        </div>

      </div>
    </div>

  )
}

export default App;
