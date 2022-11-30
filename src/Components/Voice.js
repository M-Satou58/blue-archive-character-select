const Voice = ({voice}) => {
 
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
        src="https://img.icons8.com/ios-glyphs/30/ffffff/medium-volume.png" alt=""
      />
    </div>
  )
}

export default Voice
