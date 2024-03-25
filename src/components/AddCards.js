import React,{useEffect} from 'react';
import {useState} from 'react';
import Axios from 'axios';


function AddCards() {

const[travel,settravel]=useState([])

useEffect(()=>{
//   Axios.get('http://localhost:5000/get-blog').then(res=>{
//     settravel(res.data.data.travel)
//   })
},[])

const [title,settitle] = useState('')
const[description,setdescription] = useState('')
const[coverImg,setcoverImg] = useState('')
const[googleMapLink,setgoogleMapLink] = useState('')


const addNewblog=()=>{
  Axios.get('http://localhost:5000/add-blog',{title,description,coverImg,googleMapLink})
}

  return (
    <>
    <div class="container">
        <h2> Add travel</h2>
  <form>
    <label > title</label>
    <input type="text" id="title" title="title" placeholder="Enter title.."onChange={(e)=>
    {settitle(e.target.value)}}/>

    <label > description</label>
    <input type="text" id="description" descritption="descritpion" placeholder="Enter description.."onChange={(e)=>
    {setdescription(e.target.value)}}/>

     <label > coverImg</label>
    <input type="text" id="coverImg" coverImg="coverImg" placeholder="Add coverImg.."onChange={(e)=>
    {setcoverImg(e.target.value)}}/>

    <label >googleMapLink</label>
    <input type="text" id="googleMapLink" googleMapLink="googleMapLink" placeholder="Paste googleMapLink.."onChange={(e)=>
    {setgoogleMapLink(e.target.value)}}/>

   
    <input type="submit" onClick={addNewblog} value="Submit"/>
  </form>
</div>
</>
  );
}

export default AddCards;
