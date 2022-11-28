import { useState } from 'react'
import Student from './Components/Student.js'
import InfoBox from './Components/InfoBox.js'
import Portrait from './Components/Portrait.js'
import Appearance from './Components/Appearance.js'
import Halo from './Components/Halo.js'
import Firearm from './Components/Firearm.js'
import UniqueItem from './Components/UniqueItem.js'
import StudentInfo from './StudentInfo.js'
function App() {
  const [selectedStudent, setSelectedStudent] = useState(StudentInfo['aru'])
  const [togglePortrait, setTogglePortrait] = useState(true)
  const [toggleAppearance, setToggleAppearance] = useState(false)
  const [toggleHalo, setToggleHalo] = useState(false)
  const [toggleFirearm, setToggleFirearm] = useState(false)
  const [toggleUniqueItem, setToggleUniqueItem] = useState(false)
  const StudentInfoKeys = Object.keys(StudentInfo)


  const toggleHandler = (toggle) => {
    switch(toggle) {
      case 'portrait':
        setTogglePortrait(true)
        setToggleAppearance(false)
        setToggleHalo(false)
        setToggleFirearm(false)
        setToggleUniqueItem(false)
        break

      case 'appearance':
        setTogglePortrait(false)
        setToggleAppearance(true)
        setToggleHalo(false)
        setToggleFirearm(false)
        setToggleUniqueItem(false)
        break
      case 'halo':
        setTogglePortrait(false)
        setToggleAppearance(false)
        setToggleHalo(true)
        setToggleFirearm(false)
        setToggleUniqueItem(false)
        break

      case 'firearm':
        setTogglePortrait(false)
        setToggleAppearance(false)
        setToggleHalo(false)
        setToggleFirearm(true)
        setToggleUniqueItem(false)
        break

      case 'uniqueItem':
        setTogglePortrait(false)
        setToggleAppearance(false)
        setToggleHalo(false)
        setToggleFirearm(false)
        setToggleUniqueItem(true)
        break
      default:
        break
    }
  }



  return (
    <div className="flex justify-center gap-4 py-4 text-black">

      <div className="flex flex-col justify-center">
        <h1 className="text-2xl text-center font-bold" style={{letterSpacing:'1rem'}}>SELECT A <br />STUDENT</h1>
        <div className="grid grid-cols-4 gap-y-2 gap-x-4 p-4 
          bg-white shadow-blue shadow-sm overflow-scroll rounded-lg scrollbar-hide"
          style={{width: '35vw', height: '85vh'}}>
          {StudentInfoKeys.map((key, i) => {
            return <Student 
                      key={i} 
                      studentKey={StudentInfo[key]}
                      setSelectedStudent={setSelectedStudent}
                      />
          })}
        </div>
      </div>
      <div className="flex flex-col justify-end gap-4" style={{width: '30vw'}}>
        <div className="flex justify-between gap-3">
          <div className="flex justify-center flex-grow relative">
          {togglePortrait && <Portrait selectedStudent={selectedStudent}/>}
          {toggleAppearance && <Appearance selectedStudent={selectedStudent}/>}
          {toggleHalo && <Halo selectedStudent={selectedStudent}/>}
          {toggleFirearm && <Firearm selectedStudent={selectedStudent}/>}
          {toggleUniqueItem && <UniqueItem selectedStudent={selectedStudent}/>}
        
          </div>
          <div className="flex flex-col gap-3">
            <div className="hover:animate-bounce" onClick={() => toggleHandler('portrait')}>

                 <InfoBox image={selectedStudent.icon1}/>
            </div>
            <div className="hover:animate-bounce" onClick={() => toggleHandler('appearance')}>
                <InfoBox image={selectedStudent.sprite}/>
            </div>
            <div className="hover:animate-bounce" onClick={() => toggleHandler('halo')}>
                <InfoBox image={selectedStudent.halo}/>
            </div>
            <div className="hover:animate-bounce" onClick={() => toggleHandler('firearm')}>
                <InfoBox image={selectedStudent.firearm}/>
            </div>
            <div className="hover:animate-bounce" onClick={() => toggleHandler('uniqueItem')}>
                <InfoBox image={selectedStudent.uniqueItem}/>
            </div>
          </div>
        </div>
        <div className="h-36 bg-white rounded-md text-center shadow-blue shadow-sm">
          <div className="bg-blue font-semibold text-white text-2xl rounded-t-md p-2">
            <h1>{selectedStudent.fName+" "+selectedStudent.lName}</h1>
        </div>
          <p className="px-4 py-2 text-lg">{`“ ${selectedStudent.quote} ”`}</p>
        </div>

      </div>
    </div>

  )
}

export default App;
