import "./cardFlip.css"
import SmallInfoBox from './SmallInfoBox.js'

const searchIcon = "https://img.icons8.com/ios-glyphs/30/null/search--v1.png"
const heartIcon = "https://img.icons8.com/ios-glyphs/30/null/filled-like.png"
const pictureIcon = "https://img.icons8.com/ios-glyphs/30/null/picture.png"
const volumeIcon = "https://img.icons8.com/ios-glyphs/30/null/medium-volume.png"


const Personality = ({selectedStudent}) => {
  return (
    <div class="card rounded-md">
      <div class="content shadow-blue rounded-md shadow-sm">
        <div class="front flex w-full h-full justify-center p-4">
          <img className=""src={selectedStudent.portrait} alt="" />
      <div className="w-full absolute bottom-0 flex justify-between p-2">
          <div className="flex gap-2">
            <SmallInfoBox image={searchIcon} />
            <SmallInfoBox image={heartIcon} />
          </div>
              <div className="flex gap-2">
                <SmallInfoBox image={pictureIcon} />
                <SmallInfoBox image={volumeIcon} />
              </div>
          </div>
      </div>
     <div class="back p-4 rounded-md overflow-auto scrollbar-hide">
        <h1 className="text-2xl text-center bg-white text-black">Introduction</h1>
        <p className="text-justify mt-2">{selectedStudent.introduction}</p>
        <h1 className="text-2xl text-center mt-2 bg-white text-black">Personality</h1>
        <p className="text-justify mt-2">{selectedStudent.personality}</p>
     </div>
    </div>
  </div>
  )
}

export default Personality
