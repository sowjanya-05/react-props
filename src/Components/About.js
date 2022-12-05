import {useState} from 'react'

function About(){
	const [village,setVillage]=useState("vijayawada");
	const [country,setCountry]=useState("India")
	const [password,setPassword]=useState("12345")

	return(
		<div className="text">
			<h1>{country}</h1>
			{/*<p>{village}</p>
			<p>{password}</p>*/}
			<input onChange={(e)=>setVillage(e.target.value)}/><br/>
			<input onChange={(e)=>setPassword(e.target.value)}/><br/>
			<button onClick={()=>console.log(village,password)}>Submit</button>
		</div>
		)
}

export default About;