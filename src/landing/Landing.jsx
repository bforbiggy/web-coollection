import './Landing.scss';
import { NavLink } from "react-router-dom";

const Landing = () => {
	return <div className="landing">
		Table of Contents
		<NavLink to="snowflakes/">Snowflakes</NavLink>
	</div>;
};
export default Landing;