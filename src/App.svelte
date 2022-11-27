<script>
	import { Router, Route, Link } from "svelte-routing";
	import Landing from './Landing.svelte';
	import Snowflakes from './Snowflakes.svelte';

	export let url = "";
</script>

<Router url="{url}">
	<nav>
		<Link to="/">Home</Link>
		<Link to="/snowflakes">Snowflakes</Link>
	</nav>
	<div>
		<Route path="/"><Landing/></Route>
		<Route path="/snowflakes"><Snowflakes/></Route>
	</div>
</Router>

<style>

</style>