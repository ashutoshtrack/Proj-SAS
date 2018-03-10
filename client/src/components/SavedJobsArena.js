import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import axios from "axios";

class SavedJobsArena extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedJobs: []
    };
  }
  componentWillMount() {
    axios
      .get("/api/savedjob")
      .then(response => this.setState({ savedJobs: response.data }));
  }

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
              <img src={album.image} alt="Avatar" class="prfIMG" />
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
    this.state.savedJobs.forEach((album, i) => {
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

    return (
      <div>
        <Animated
          animationIn="fadeInUpBig"
          animationOut="fadeOut"
          isVisible={true}
        >
          {content}
        </Animated>
      </div>
    );
  }

  render() {
    console.log("dashboard component will mount", this.state.albums);

    return (
      <div>
        <h1> Your saved Jobs</h1>
        <div>{this.renderAlbums()}</div>
      </div>
    );
  }
}

export default SavedJobsArena;
