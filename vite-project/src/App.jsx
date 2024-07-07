import './App.css'
import Button from './Components/Elements/Button/button'
import Description from './Components/Elements/Description/Description'
import Poster from './Components/Elements/Image/Image'

function App() {
  return (
  <>
  <div className='box-border shadow-2xl fixed w-full z-10'>
   <div className='flex flex-row-reverse bg-slate-900 p-4 top-0'> 
    <Button variant = "bg-blue-950">Login</Button>
    <Button variant = "bg-blue-950">Sign up</Button>
   </div>
  </div>

<Description path1="link"></Description>

<div className='absolute top-40 right-0 float-end mr-10'>
    <Poster id1="gambar1" id2="gambar2" id3="gambar3" path1="../public/Batik.jpg" path2="../public/Jakarta.jpg" path3="../public/CekerBabatMedet.jpg"></Poster>
    
    </div>
<div className='absolute inset-y-2/3 w-96 ml-5 mt-12'>
<Button variant="bg-sky-500" id="test">Selengkap nya</Button>
</div>
   
   </>
  )
}

export default App
