import React, { Component } from "react";
import { Calendar, Badge } from "antd";
import "antd/dist/antd.css";

class EventCalendar2 extends Component {
	constructor() {
		super();
	}

	onPanelChange(value, mode) {
	  console.log(value, mode);
	}


	render() {
		return (
			<div>
			 <Calendar onPanelChange={this.onPanelChange} />
			</div>
		);
	}
}

export default EventCalendar2;
