const InfoBox = ({image}) => {
  return (
    <div className="flex justify-center items-center w-10 h-10 rounded-md shadow-blue shadow-sm bg-white">
    <img className="h-7 w-7" src={image} alt="" />
    </div>
  )
}

export default InfoBox
