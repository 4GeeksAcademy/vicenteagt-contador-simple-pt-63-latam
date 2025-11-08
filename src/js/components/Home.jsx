import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="container-fluid fs-4 ">
			<div className="row m-auto mt-4">
				<div className="col-2 d-flex flex-row-reverse bg-black justify-content-center ">
            <p className="me-2 text-white">{props.digitOne}</p>
			<p className="me-2 text-white">{props.digitTwo}</p>
			<p className="me-2 text-white">{props.digitThree}</p>
			<p className="me-2 text-white">{props.digitFour}</p>
			<p className="me-2 text-white">{props.digitFive}</p>
			<p className="me-2 text-white">{props.digitSix}</p>
			</div>
			</div>
		</div>
	);
};

export default Home;