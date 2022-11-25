const Carvendepict = () => {
	return <iframe
		id="content-iframe"
		title="Carve n' Depict"
		src="./carvendepict/index.html"
		width="100%"
		height="100%"
		style={{
			position: 'fixed',
			top: '0px',
			bottom: '0px',
			width: '100%',
			border: 'none',
			margin: '0',
			padding: '0',
			overflow: 'hidden',
			height: '100%',
		}}>
	</iframe>
};

export default Carvendepict;