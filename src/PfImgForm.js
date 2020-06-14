import React from 'react';

class PfImgForm extends React.Component {
	state = {
		pfImgUrl: '',
	};

	componentDidMount() {
		const { currentUser } = this.props;
		this.setState({ pfImgUrl: currentUser.profileImg });
	}

	inputUrl = (event) => {
		const typed = event.target.value;
		this.setState({
			pfImgUrl: typed,
		});
	};

	render() {
		const { closeUrlModal, submitUrl } = this.props;
		const { pfImgUrl } = this.state;

		return (
			<div className="profileImg-modal">
				<form onSubmit={(event) => submitUrl(event, pfImgUrl)}>
					<input type="text" name="pfUrl" value={pfImgUrl} onChange={(event) => this.inputUrl(event)} />
					<button type="submit">SUBMIT</button>
				</form>
			</div>
		);
	}
}

export default PfImgForm;
