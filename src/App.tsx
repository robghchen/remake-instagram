import React from 'react';
import './App.css';
import ImageModal from './ImageModal.js';
import FollowerModal from './FollowerModal.js'

class App extends React.Component {
	state = {
		currentUser: {
			username: "black_to_planet_meow",
			nickname: "Winter Meow",
			description: "I was sent here to conquer Earth, but have been captured at the hands of two Earthlings 🙀 I must escape 🐾 and report my findings back to Planet Meow",
			profileImg: "https://instagram.fnyc1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/37061606_188572642014405_9127037075751698432_n.jpg?_nc_ht=instagram.fnyc1-1.fna.fbcdn.net&_nc_ohc=Sxd5volgUjIAX8rAlxY&oh=3a607b2f586ea24261f61cbc6d5e7a79&oe=5F10CDFE",
			followers: [{ username: "user1" }, { username: "user2" }, { username: "user3" }, { username: "user4" }, { username: "user5" }]
		},

		imgArray: [
			{
				id: 1,
				imgUrl: "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
				comments: ["This is a comment", "This is my second comment"],
				likes: 3
			},
			{
				id: 2,
				imgUrl: "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
				comments: ["This is a comment", "This is my second comment"],
				likes: 3
			},
			{
				id: 3,
				imgUrl: "https://cdn.britannica.com/67/197567-050-DA8E36D5/Scottish-fold-cat-feline.jpg",
				comments: ["This is a comment", "This is my second comment"],
				likes: 3
			},
			{
				id: 4,
				imgUrl: "https://cdn.mos.cms.futurecdn.net/vChK6pTy3vN3KbYZ7UU7k3-1200-80.jpg",
				comments: ["This is a comment", "This is my second comment"],
				likes: 3
			}
		],
		imageClicked: null, // --> imagePost object that was clicked
		showFollowerModal: false
	}

	handleImageClicked = (imagePost: any) => {
		this.setState({
			imageClicked: imagePost
		})
	}

	renderImgClick = () => {
		const { imageClicked } = this.state

		if (imageClicked !== null) {
			return <ImageModal imagePost={imageClicked} closeModal={this.closeModal} />

		}
	}

	closeModal = () => {
		this.setState({
			imageClicked: null
		})
	}

	followersClicked = () => {
		this.setState({
			showFollowerModal: true
		})
	}

	renderFollowerModal = () => {
		const { showFollowerModal, currentUser } = this.state
		if (showFollowerModal !== false) {
			return <FollowerModal currentUser={currentUser} closeX={this.closeX} />
		}
	}

	closeX = () => {
		this.setState({
			showFollowerModal: false
		})
	}

	render() {
		const { currentUser, imgArray, imageClicked } = this.state;

		return (
			<div className="App">
				<div className="profile-header">
					<img src={currentUser["profileImg"]} />
					<span>
						<h3>{currentUser["username"]}</h3>
						<p onClick={this.followersClicked}>{currentUser["followers"].length} Followers</p>
						<strong>{currentUser["nickname"]}</strong>
						<p>{currentUser["description"]}</p>
					</span>

				</div>

				<div className="image-container">
					{imgArray.map((imagePost) => {
						return <img src={imagePost.imgUrl} onClick={() => this.handleImageClicked(imagePost)} className="cat-pics" />
					})}
				</div>

				{this.renderImgClick()}


				{this.renderFollowerModal()}

			</div>
		);
	}


	// STATE
	// all of our information sits within state which is an object
	// when we want to extract information
	// const { thingIWant } = this.state
	// when we want to reassign a variable that we previously made with a new value
	// 		this.setState({ key: value })
	// causes a re-render any time we setState

	// PROPS
	// it could be an object or function or anything
	// link to other files
	// if we want to use it, we have to define it on both sides. an example of passing props:
	// 		App.tsx will have to define it like so:
	// 		<FollowerModal currentUser={this.state.currentUser} />
	// 		FollowerModal.js will have to destructure it like so:
	// 		const { currentUser } = this.props
}

export default App;
