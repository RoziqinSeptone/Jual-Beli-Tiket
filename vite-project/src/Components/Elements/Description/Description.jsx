const Description = (propsType)=>{
  const {path1} = propsType
    return(
      <div className='absolute w-1/2' id={`${path1}`}>
        <div className=" ml-5 text-white">
        <h1 className='absolute top-40 font-medium text-8xl'>LokalOka</h1>
        <p className='absolute top-80'>
        Selamat datang di LokalOka, platform terdepan untuk pembelian tiket webinar dan bootcamp. Kami menyediakan berbagai webinar dan bootcamp berkualitas dari para ahli di berbagai bidang, siap membantu Anda mengembangkan keterampilan dan pengetahuan baru.</p>
         </div>
    </div>
    
    )
}

export default Description
