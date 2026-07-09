import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("")
	const [modo, setModo] = useState("manual")
	const [mostrarPurpura, setMostrarPurpura] = useState(false)
	const coloresBoton = ["red", "yellow", "green"]

	function modoAutomatico() {
		let index = 0
		function cambiarColor() {
			if (index <= coloresBoton.length - 1) {
				setColor(coloresBoton[index])
				let segundos = 0;

				if (index === 0) segundos = 7000;
				if (index === 1) segundos = 3000;
				if (index === 2) segundos = 7000;



				setTimeout(cambiarColor, segundos);
				index++

			}

			else {
				index = 0
				cambiarColor()

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
				<div id="yellow" className={`bg-warning cirsemaforo ${color === "yellow" ? "estadoSemaforo parpadeo" : ""}`} onClick={() =>
					setColor("yellow")}></div>
				<div id="green" className={`bg-success cirsemaforo ${color === "green" ? "estadoSemaforo" : ""}`} onClick={() =>
					setColor("green")}></div>
				<div id="purple" className={mostrarPurpura ? "cirsemaforo purplelight" : ""}></div>
			</div>
			<div className="container d-flex justify-content-between align-items-center">

				<select className="boton botonElegir m-4" aria-label="Default select example"
					onChange={(e) => setColor(e.target.value)}>
					<option selected>Elige un color</option>
					<option value="red">Rojo</option>
					<option value="yellow">Amarillo</option>
					<option value="green">Verde</option>
				</select>

				<button className="boton m-4 botonAutomatico" onClick={() => {
					setModo("automatico")
					modoAutomatico()
				}}>
					Modo Automático
				</button>

			    <button className="boton botonPurpura" onClick={()=>{
					setMostrarPurpura(true)

				}}>Añadir color púrpura</button>

			</div>



		
		</div >
	);
};

export default Home;