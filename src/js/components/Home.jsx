import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("")
	const [modo, setModo] = useState("manual")
	const coloresBoton = ["red", "yellow", "green"]
	let intervaloColores = null
	function modoAutomatico() {
		let index=0
		function cambiarColor() {
			if (index <= coloresBoton.length-1){
				setColor(coloresBoton[index])
				let segundos = 0;
	
				if (index === 0) segundos = 7000;
				if (index === 1) segundos = 3000;
				if (index === 2) segundos = 7000;
	
	
	
				setTimeout(cambiarColor, segundos);
				index ++
	
			}
	
			else{
				index=0
	
			}

		}
		cambiarColor()

	}


	return (
		<div className="padre">
			<div className="palito"></div>
			<div className="container semaforo-palo">
				<div id="red" className={`bg-danger cirsemaforo ${color === "red" ? "estadoSemaforo" : ""}`} onClick={() =>
					setColor("red")}></div>
				<div id="yellow" className={`bg-warning cirsemaforo ${color === "yellow" ? "estadoSemaforo" : ""}`} onClick={() =>
					setColor("yellow")}></div>
				<div id="green" className={`bg-success cirsemaforo ${color === "green" ? "estadoSemaforo" : ""}`} onClick={() =>
					setColor("green")}></div>
			</div>
			<div className="d-flex">
				<button className="boton mt-4" onClick={() => {
					setModo("automatico")
					modoAutomatico()

				}}>Modo Automático</button>


			</div>
		</div>
	);
};

export default Home;