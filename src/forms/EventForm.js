import React from "react";
import { Form, Input, DatePicker, Card, Col, Row } from "antd";

const inputParsers = {
	date(input) {
		const [month, day, year] = input.split("/");
		return `${year}-${month}-${day}`;
	},
	uppercase(input) {
		return input.toUpperCase();
	},
	number(input) {
		return parseFloat(input);
	}
};

class EventForm extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const data = new FormData(form);

		for (let name of data.keys()) {
			const input = form.elements[name];
			const parserName = input.dataset.parse;

			if (parserName) {
				const parser = inputParsers[parserName];
				const parsedValue = parser(data.get(name));
				data.set(name, parsedValue);
			}
		}

		fetch("/api/form-submit-url", {
			method: "POST",
			body: data
		});
	}

	render() {
		return (
			<div>
				<Row gutter={16}>
					<Col>
						<Card title="Event">
							<Card
								type="inner"
								title="Vendors">

							</Card>

							<Card
								type="inner"
								title="Vendors">
								<Form onSubmit={this.handleSubmit}>
									<Form.Item label="Event ID">
										<Input name="eventID" onChange={this.onChange} />
									</Form.Item>
									<Form.Item
										label="Event Name"
										validateStatus="error"
										help="Oh no! Did you forget to include a title?">
										<Input name="eventName" onChange={this.onChange} />
									</Form.Item>
									<Form.Item
										label="Event Type"
										validateStatus="error"
										help="Oh no! Did you forget to include a title?">
										<Input name="eventType" onChange={this.onChange} />
									</Form.Item>
									<Form.Item label="Event Date">
										<DatePicker name="eventDate" onChange={this.onChange} />
									</Form.Item>
									<Form.Item label="Reception Date">
										<DatePicker name="receptionDate" onChange={this.onChange} />
									</Form.Item>
									<Form.Item label="Rehearsal Dinner Date">
										<DatePicker
											name="rehearsalDinnerDate"
											onChange={this.onChange}
										/>
									</Form.Item>
									<Form.Item label="Caterer">
										<Input name="eventCaterer" onChange={this.onChange} />
									</Form.Item>
									<Form.Item label="Sales Price">
										<Input name="salesPrice" onChange={this.onChange} />
									</Form.Item>
								</Form>
							</Card>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default EventForm;
