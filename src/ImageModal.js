import React from 'react';

class ImageModal extends React.Component {
	render() {
		const { imagePost, closeModal } = this.props;
		return (
			<div className="popup" onClick={closeModal}>
				<img src={imagePost.imgUrl} />
				<div className="comments-container">
					{imagePost.comments.map(function (eachComment) {
						return <p>{eachComment}</p>;
					})}
					{imagePost.likes} likes
				</div>
			</div>
		);
	}
}

export default ImageModal;
