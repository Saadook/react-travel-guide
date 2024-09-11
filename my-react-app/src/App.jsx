import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import aaa from './travel agency 2.jfif'
function App() {
  const [count, setCount] = useState(0)
  const [load,setLoad]=useState(true)
  return (
    <>
    {load?
      <>
    <h1>Welcome to our travel agency</h1>
    <img src={aaa}></img>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, odio.</p>
    <button className='button'onClick={()=>setLoad(!load)}>Read More</button>
    </>

    :<>
    <h1>Welcome to our traveel agency</h1>
    <img src={aaa} alt="" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate mollitia itaque deleniti tenetur iste doloribus asperiores maxime ducimus quasi enim nobis, explicabo at quo harum. Optio, in alias. A harum, vel recusandae aliquid, fugiat odit repellendus nemo nostrum corporis iure consectetur pariatur perspiciatis quam ea natus laborum. Culpa quos tempore labore id aliquid, debitis vero hic? Facere, commodi sunt quod, earum libero, iusto neque ab minima rerum sapiente possimus! Hic dignissimos quidem consequuntur vero saepe. Laboriosam, reiciendis delectus distinctio nisi corrupti quas, rerum officia possimus voluptatem atque voluptatibus totam voluptas, id veritatis in. Dicta, culpa distinctio. Ratione laudantium aliquam harum.</p>
    <del>100$</del>
    (99.99$)
    <button className='button'onClick={()=>setLoad(!load)}>Read less</button>
    
    
    </>
  
  
  }
    </>
  )
}

export default App
