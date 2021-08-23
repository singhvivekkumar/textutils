import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpclick = () => {
		// console.log('Upercase was clicked' + text);
		let newText = text.toUpperCase();
		setText(newText);
	};

	const handleLoclick = () => {
		// console.log('Upercase was clicked' + text);
		let newText = text.toLowerCase();
		setText(newText);
	};

	const handleClearclick = () => {
		// console.log('Upercase was clicked' + text);
		let newText = "";
		setText(newText);
	};

	const handleOnChange = (event) => {
		// console.log('On change was clicked');
		setText(event.target.value);
	};

	const handleCopy = () => {
		var text = document.getElementById("myBox");
		text.select();
		navigator.clipboard.writeText(text.value);
	};

	const handleExtraSpace = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
	}

	const [text, setText] = useState("");
	// text = "newtext here" wrong way to assign new text
	// setText("newtext here") correct way to assign new text
	return (
		<>
			<div className="container" style={{color : props.mode==="dark" ? "white" : "#273340"}}>
				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea
						className="form-control"
            style={{backgroundColor : props.mode==="dark" ? "#273340" : "white", color: props.mode==="dark" ? "white" : "#273340"}}
						value={text}
						onChange={handleOnChange}
						id="myBox"
						rows="8"
					></textarea>
					<button className="btn btn-primary m-2" onClick={handleUpclick}> Convert to uppercase </button>
					<button className="btn btn-primary m-2" onClick={handleLoclick}> Convert to lowercase </button>
					<button className="btn btn-success m-2" onClick={handleCopy}> Copy Text </button>
					<button className="btn btn-warning m-2" onClick={handleExtraSpace}> Remove Extra space </button>
					<button className="btn btn-danger m-2" onClick={handleClearclick}> Clear Text Area </button>
				</div>
			</div>
			<div className="container mx-4" style={{color : props.mode === "dark" ? "white" : "#273340",}}>
				<h1>This is your summary</h1>
				<b> {text.split(" ").length} word and {text.length} Characters </b>
				<p> {0.008 * text.split(" ").length * 60} second to read</p>
				<h3><hr/> Preveiw </h3>
				<p>{text.length>0?text:"Enter something to preview it here"}</p>
			</div>
		</>
	);
}
