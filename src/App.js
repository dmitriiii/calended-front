import React from 'react';

import './App.css';
import { Button } from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Container fixed>
					<Typography component="h1" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
						fweewffew
					</Typography>
				</Container>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<div className="filters">
								<h3>Filters</h3>
								<input type="text" />
							</div>
							<div className="content">
								<h4>Content</h4>
								<Button color="primary">Hello World</Button>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
			
		);
	}
}


export default App;
