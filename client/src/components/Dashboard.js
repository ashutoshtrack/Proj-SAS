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
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }
  /*

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
                    <img src={album.image} alt="Avatar" class="prfIMG" />
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
                  <img src={album.image} alt="Avatar" class="prfIMG" />
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
        <h1> JOBs for you </h1>
        <div>{this.renderAlbums()}</div>
      </div>
    );
  }
}
export default Dashboard;
