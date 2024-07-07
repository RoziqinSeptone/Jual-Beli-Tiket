
const Button = (propsType)=>{
    const {variant , children, id} = propsType
  return(
  <button className={`border border-8
   border-blue-600 p-2 
   ${variant} font-bold text-white rounded-full
  hover:cursor-pointer hover:p-2 hover:opacity-50:
  hover:shadow-2xl
  active:p-1 mr-4
   `} id={`${id}`}>
  {children}
  </button>
  )
  }

export default Button