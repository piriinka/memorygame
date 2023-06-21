import React, { useRef } from 'react'
import { categegories } from '../utils'
import { selectedEmojis } from '../utils'

export const MyForm = ({setGamesState,setEmojis}) => {
  const sizeRef = useRef (null)
  const categRef = useRef (null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!sizeRef.current.value || categRef.current.value=='0') return
    
   // console.log('submit',sizeRef.current.value, categRef.current.value)

   setGamesState({
    size: sizeRef.current.value,
    categegory: categRef.current.value,
    remaining: sizeRef.current.value**2/2,
    score: 0,
    victory: false,
    running: false, 
   })

  setEmojis(selectedEmojis(categRef.current.value, sizeRef.current.value))
   
  }
  return (
    <div>
      <form className="flex flex-wrap justify-center" onSubmit={handleSubmit}>
        <div className='mr-1 mb-6'>
          <label htmlFor="size" className='block'>Game Size (2/4/6/10)</label>
          <input ref={sizeRef} className='p-3 mr-1 rd-lg ' type="text" id="size" placeholder='grid size' pattern='^(2|4|6|10)$'/>
        </div>
        <div className='mr-1 mb-6'>
          <label htmlFor="category" className='block'>Select Category</label>
          <select ref={categRef} className='p-3 rd-lg' id="category">
            <option value="0">Category...</option>
            {categegories().map((ctg)=>
            <option key={ctg} value={ctg}>{ctg}</option>
            )}
            </select>
        </div>
        <button className='btn'>Start Game</button>
        
      </form>
    </div>
  )
}
