import React, { Component } from "react";
import axios from "axios";
import logoG from "../google.png";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }
  componentWillMount() {
    axios
      .get("http://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }
  /*

   <h2 key={album.title}>
        {album.title}
        <br />
      </h2>
*/
  renderAlbums() {
    return (
      <div className="row">
        {this.state.albums.map((album, i) => (
          <div className=" col-md-4" key={i}>
            <div className=" mango">
              <img src={album.image} alt="Avatar" style={{ width: "100%" }} />
              <div className="containere">
                <h4>
                  <b> {album.title}</b>
                </h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    console.log("dashboard component will mount", this.state.albums);

    return (
      <div>
        <h2> Jobs kai zaal? </h2>
        <div>{this.renderAlbums()}</div>
      </div>
    );
  }
}
export default Dashboard;
