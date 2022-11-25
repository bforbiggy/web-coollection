import './Landing.scss';
import { NavLink } from "react-router-dom";

const Landing = () => {
	return <div className="landing">
		Table of Contents
		<NavLink to="snowflakes/">Snowflakes</NavLink>
		<NavLink to="carvendepict/">Carve n' Depict</NavLink>
		<NavLink to="liquidfollow/">Following Liquid</NavLink>
	</div>;
};
export default Landing;