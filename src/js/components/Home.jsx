import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="container-fluid fs-4 p-0">
			<div className="row">
				<div className="col-11 col-sm-11 col-md-11 col-lg-12 col-xl-12 col-xxl-12">
					<div className="m-auto mt-4 d-flex flex-row-reverse bg-black justify-content-center text-white "
						style={{ width: "85%", height: "148px" }}>
						<div className="align-self-center ms-3 containNumberColor"
							style={{ fontSize: "70px", width: "8%", height: "120px" }}>
							<span className="alignNumber"> {props.digitOne}</span>
						</div>
						<div className="align-self-center ms-3 containNumberColor"
							style={{ fontSize: "70px", width: "8%", height: "120px" }}>
							<span className="alignNumber">{props.digitTwo}</span>
						</div>
						<div className="align-self-center ms-3 containNumberColor"
							style={{ fontSize: "70px", width: "8%", height: "120px" }}>
							<span className="alignNumber">{props.digitThree}</span>
						</div>
						<div className="align-self-center ms-3 containNumberColor"
							style={{ fontSize: "70px", width: "8%", height: "120px" }}>
							<span className="alignNumber">{props.digitFour}</span>
						</div>
						<div className="align-self-center ms-3 containNumberColor"
							style={{ fontSize: "70px", width: "8%", height: "120px" }}>
							<span className="alignNumber">{props.digitFive}</span>
						</div>
						<div className="align-self-center ms-3 containNumberColor"
							style={{ fontSize: "70px", width: "8%", height: "120px" }}>
							<span className="alignNumber">{props.digitSix}</span>
						</div>
						<div className="align-self-center containNumberColor"
							style={{ fontSize: "50px", width: "8%", height: "120px" }}>
							<i class="fa-regular fa-clock alignIconClock"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;