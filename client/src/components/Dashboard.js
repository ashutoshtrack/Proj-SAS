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

  renderAlbums() {
    let content = [];
    let linkBTN = "./jobProfile";
    this.state.albums.forEach((album, i) => {
      if ((i + 1) % 4 === 0) {
        content.push(
          <div className="row" key={i}>
            <div className=" col-md-3" key={i}>
              <Link to={"/jobdesc"} class="linkBTN">
                <div className=" mango">
                  <div className="row" class="imgFrm">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/2000px-Facebook_New_Logo_%282015%29.svg.png"
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
                      Location: Mumbai
                      <br />
                      Exp.: 6 mon to 1 yr.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      } else {
        content.push(
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
                    Exp.: 6 mon to 1 yr.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
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
