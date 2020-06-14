import React from 'react';

class FollowerModal extends React.Component {
	render() {
		// const { currentUser, closeX } = this.props;

		const currentUser = this.props.currentUser;
		const closeX = this.props.closeX;

		return (
			<div className="followers-modal">
				<div className="followers-heading">
					<strong>Followers</strong>
					<span onClick={closeX}>X</span>
				</div>
				<div className="followers-container">
					{currentUser.followers.map((eachUser) => {
						return <p>{eachUser.username}</p>;
					})}
				</div>
			</div>
		);
	}
}

export default FollowerModal;
