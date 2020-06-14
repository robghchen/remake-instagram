import React from 'react';

class FollowerModal extends React.Component {
	render() {
		const { closeX, people } = this.props;

		return (
			<div className="followers-modal">
				<div className="followers-heading">
					<strong>Followers</strong>
					<span onClick={closeX}>X</span>
				</div>
				<div className="followers-container">
					{people.map((eachUser) => {
						return <p>{eachUser.username}</p>;
					})}
				</div>
			</div>
		);
	}
}

export default FollowerModal;
