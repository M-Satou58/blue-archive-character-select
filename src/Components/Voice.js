const noAudioIcon = "https://img.icons8.com/ios-glyphs/30/ffffff/no-audio--v1.png"
const audioIcon = "https://img.icons8.com/ios-glyphs/30/ffffff/medium-volume.png"
const Voice = ({selectedStudent, voice}) => {
 
  const playVoice = () => {
    if (voice.paused) {
         voice.play();
     } else {
         voice.pause();
         voice.currentTime = 0
         voice.play()
     }
  }

  return (
    <div className="w-full bg-blue p-3 rounded-md"
      onClick={playVoice}

    >
      <img 
        className="m-auto"
        src={selectedStudent.voice ? audioIcon : noAudioIcon} alt=""
      />
    </div>
  )
}

export default Voice
