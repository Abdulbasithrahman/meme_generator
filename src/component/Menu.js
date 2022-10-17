import React from "react";
import memesData from "./memesData";
export default function Menu(props){
      const[memeImage,setmemeImage]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"./tour2.jpg"
      })
      const[allmemImage,setallmemeImage]=React.useState(memesData)
      function change(){
        const memesArray=memesData
        const random=Math.floor(Math.random()*memesArray.length)
        const image=memesArray[random].randomImage
        setmemeImage(prevmeme=>({
          ...prevmeme,
            randomImage:image
        }))
      }
      function handlechange(e){
        const {name,value}=e.target;
        setmemeImage(prev=>{
          return{
            ...prev,
            [name]:value
          }
        })
      }
    return(
        <main>
            <div className="form">
            <input className="form-input"
            placeholder="top-text"
            name="topText"
            type="text"
            onChange={handlechange}/>
            <input className="form-input"
            placeholder="down-text"
            name="bottomText"
            type="text"
            onChange={handlechange}
            />
            <button className="form-button" onClick={change}
            >Get a new meme image</button>
            </div>
            <div className="meme">
            <img src={memeImage.randomImage} className="meme--image"/>
            <h2 className=" top">{memeImage.topText}</h2>
            <h2 className="bot">{memeImage.bottomText}</h2>
            </div>
           
        </main>
    )
}