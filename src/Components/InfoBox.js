const InfoBox = ({image}) => {
  return (
    <div className="w-20 h-20 rounded-md shadow-blue shadow-sm bg-white">

    <img className="h-full w-full object-cover" src={image} alt="" />
    </div>
  )
}

export default InfoBox
