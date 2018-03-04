import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }
  componentWillMount() {
    axios
      .get("/api/jobdesc")
      .then(response => this.setState({ albums: response.data }));
  }
  /*


https://rallycoding.herokuapp.com/api/music_albums
   <h2 key={album.title}>
        {album.title}
        <br />
      </h2>
*/

  renderColumns(album, i) {
    return (
      <div className=" col-md-3" key={i}>
        <Link
          to={"/jobdesc/" + album._id}
          activeClassName="active"
          class="linkBTN"
        >
          <div className=" mango">
            <div className="row" class="imgFrm">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5ZrXkJ9_-saTn1fMl7nllUVCgHuRUeHnH3aArfmln_xoSyHzhg"
                alt="Avatar"
                class="prfIMG"
              />
            </div>
            <div className="containere">
              <h4>
                <b> {album.title}</b>
              </h4>
              <p>
                Job Description
                <br />
                Location: {album.location}
                <br />
                Exp.: {album.experience}.
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  renderAlbums() {
    let content = [];
    let linkBTN = "./jobProfile";
    this.state.albums.forEach((album, i) => {
      if ((i + 1) % 4 === 0) {
        content.push(
          <div className="row" key={i}>
            {this.renderColumns(album, i)}
          </div>
        );
      } else {
        content.push(this.renderColumns(album, i));
      }
    });

    return <div>{content}</div>;
  }

  render() {
    console.log("dashboard component will mount", this.state.albums);

    return (
      <div>
        <h1> Job's for you </h1>
        <div>{this.renderAlbums()}</div>
      </div>
    );
  }
}
export default Dashboard;
