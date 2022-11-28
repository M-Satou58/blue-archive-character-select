import SmallInfoBox from './SmallInfoBox.js'

const searchIcon = "https://img.icons8.com/ios-glyphs/30/null/search--v1.png"
const heartIcon = "https://img.icons8.com/ios-glyphs/30/null/filled-like.png"
const pictureIcon = "https://img.icons8.com/ios-glyphs/30/null/picture.png"
const volumeIcon = "https://img.icons8.com/ios-glyphs/30/null/medium-volume.png"


const Portrait = ({selectedStudent}) => {
  return (
    <div className="flex justify-center flex-grow">
      <img src={selectedStudent.portrait} alt="" />
      <div className="w-full absolute bottom-0 flex justify-between">
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
  )
}

export default Portrait
