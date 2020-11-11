import React, {useState} from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
const [input, setInput] = useState("");

	return(
		<div>
		<p className="f3"> 
	{'this Magic Brain will detect faces in your pictures.'}
	 </p>s
	<div className="center">
	<div className="center form pa4 br3 shadow-5">
	<input id="dep" value={input} className="f4 pa2 w-70 center" type="text" onChange={onInputChange}  />
	<button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" 
	onClick={onButtonSubmit}
	>detect</button>
	
		</div>
		</div>
		</div>

		);
}

export default ImageLinkForm;