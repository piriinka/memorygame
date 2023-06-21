import React, { useState } from 'react'


export const Board = ({emojis, setEmojis, gamesState, setGamesState}) => {
  const [prev, setPrev] = useState (null) 
  console.log(emojis)
  const containerStyle = {
    gridTemplateColumns: `repeat(${gamesState.size}, auto)`

  }

  const showHide = (domObj) =>{
    console.log(domObj.children[0],domObj.children[1]);
    [domObj.children[0],domObj.children[1]].forEach(dObj=>{
        dObj.classList.toggle("hidden");
        dObj.classList.toggle("flex");
    })}

    const handleClick = (event, emojiObj) => {
      const id = emojiObj.id
      if(gamesState.running) return
      setGamesState({...gamesState, score: gamesState.score+1})
      console.log(emojiObj)
      console.log(id, event.target.parentNode)
      const parent = event.target.parentNode
     showHide(event.target.parentNode)

     if(prev) {
      console.log('masodik kattintas',emojiObj.emoji,prev.children[0].innerHTML)
      if(emojiObj.emoji == prev.children[0].innerHTML){
        setEmojis(emojis.map(obj => obj.id == id ? {...obj, disabled: true} : obj))
        setGamesState({...gamesState, remaining: gamesState.remaining-1})

        setPrev(null)
      }
      else {
        /*ha nem talalt*/ 
      setGamesState({...gamesState, running: true})
      setTimeout(() => {
      setGamesState({...gamesState, running: false})
    showHide(parent)
    showHide(prev)
    setEmojis(emojis.map(obj => obj.id == id || obj.id == prev.id ? {...obj, disabled: false} : obj))
    setPrev(null)

      },500)
      }
     }
     else {
      setPrev(parent)
      setEmojis(emojis.map(obj => obj.id == id ? {...obj, disabled: true} : obj))
     }

    }

  return (
    <div className='grid justify-center gap-2 ' style={containerStyle}>
      {emojis.map((e) =>

      <div key={e.id} id={e.id} onClick={event=> e.disabled ? null : handleClick(event,e)}>
      <div className={gamesState.size <= 4 ? "s4 hidden" : "s8 hidden"} >
        {e.emoji}</div>

         <div className={gamesState.size <= 4 ? "s4 flex" : "s8 flex"} >?</div>
      </div>)}

    </div>
    )}
  
      
