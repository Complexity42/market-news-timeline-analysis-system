
import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import { getData } from "./utils"

import { TypeChooser } from "react-stockcharts/lib/helper";

import {Card, CardContent, Stack, TextField, Typography } from "@mui/material";
import Box from '@material-ui/core/Box'
import { Label } from 'react-bootstrap';

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			// <TypeChooser>
			// 	{type => <Chart type={type} data={this.state.data} />}
			// </TypeChooser>
			<Chart type={'svg'} data={this.state.data} />
		)
	}
}

render(
	<Box sx={{ padding: "3rem" }}>
		<Card elevation="4" sx={{ margin: "1rem", padding: "1rem", borderRadius: "1rem" }}  >
			<CardContent onMouseMove={(event) => {
					var dom = document.querySelector('#root > div > div > div > div.react-stockchart > svg > g > g > g:nth-child(1) > g:nth-child(10) > g > text > tspan:nth-child(2)')
					var date = dom ? dom.textContent : "n/a"
					console.log(date)
				}}>
				<Stack sx={{ mx: "2rem" }} flexDirection="row"  alignItems="center" columnGap=".5rem"  >
					<Typography>
						Symbol:
					</Typography>
					<TextField variant="standard" />
				</Stack>
				<ChartComponent />
			</CardContent>
		</Card>
	</Box>
	,
	document.getElementById("root")
);
