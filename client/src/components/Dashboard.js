import React, { Component } from "react";
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
              <a href={linkBTN} class="linkBTN">
                <div className=" mango">
                  <div className="row" class="imgFrm">
                    <img
                      src="data:image/png;base64,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"
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
              </a>
            </div>
          </div>
        );
      } else {
        content.push(
          <div className=" col-md-3" key={i}>
            <a href={linkBTN} class="linkBTN">
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
                    Location: Mumbai
                    <br />
                    Exp.: 6 mon to 1 yr.
                  </p>
                </div>
              </div>
            </a>
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
