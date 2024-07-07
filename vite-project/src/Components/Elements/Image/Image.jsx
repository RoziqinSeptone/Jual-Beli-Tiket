const Poster = (propsType)=>{
  const {path1,path2,path3, id1,id2,id3} = propsType 
  return(
      <div>
      <img src={`${path1}`} alt="Jakarta.jpg" className={`outline outline-8 outline-blue-500/50 mr-4 w-60 rounded-full float-end end-0  mt-64`} id={`${id1}`}/>
      <img src={`${path2}`} alt="Jakarta.jpg" className={`outline outline-8 outline-blue-500/50 mr-4 w-60 rounded-full float-end end-0  mt-42`} id={`${id2}`}/>
      <img src={`${path3}`} alt="Jakarta.jpg" className={`outline outline-8 outline-blue-500/50 mr-4 w-60 rounded-full float-end end-0  mt-64`} id={`${id3}`}/>
      </div>
    )
  }

  export default Poster