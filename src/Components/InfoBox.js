const InfoBox = ({image}) => {
  return (
    <div className="w-16 h-16 rounded-md shadow-blue shadow-md bg-white">

    <img className="h-full w-full object-cover" src={image} alt="" />
    </div>
  )
}

export default InfoBox
