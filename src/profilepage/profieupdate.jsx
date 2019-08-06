import React from "react";
import { apiProfiles } from "../config.json";
import axios from "axios";

import { apiUrl } from "../config.json";
import auth from "../services/authservice";
import Form from "../common/forms";

class ProfileUpdate extends Form {
  state = {
    selectedFile: null,
    data: { fullname: "", place: "" },
    errors: {},
    profilePicPath: "",
    user: {}
  };

  async componentDidMount() {
    let profilePicPath = "";
    const user = auth.getCurrentUser();
    if (user) {
      //MONGO DB temporory code
      let { data } = await axios.get(
        `http://localhost:3000/api/profiles/${user.profileid}`
      );
      profilePicPath = data.profilePicPath;
      this.setState({ profilePicPath, user });
    }
  }
  fileSelected = e => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  doSubmit = async () => {
    const fd = new FormData();
    fd.append("_id", this.state.user.profileid);
    // fd.append("name", this.state.data.name);
    fd.append("bio", this.state.data.bio);
    fd.append("place", this.state.data.place);

    const selectedFile = this.state.selectedFile;

    if (this.state.selectedFile) {
      try {
        fd.append("profilepic", this.state.selectedFile, selectedFile.name);
        await axios.put(`${apiProfiles}/${this.props.user.profileid}`, fd);
      } catch (ex) {}
    } else {
      try {
        await axios.put(apiProfiles + "/data/" + this.props.user.profileid, {
          place: this.state.data.place,
          bio: this.state.data.bio
          //      name: this.state.data.name
        });
      } catch (ex) {}
    }
    window.location = "/profile/" + this.props.user.profileid;
  };

  render() {
    let { profilePicPath } = this.state;
    profilePicPath = apiUrl + "/" + profilePicPath;
    return (
      <div>
        <div>
          <form className="login" onSubmit={this.handleSubmit}>
            <h2 style={{ textalign: "center" }}>Edit Profile</h2>
            {this.state.profilePicPath && (
              <div className="pd-profile-pic-container ">
                <img src={profilePicPath} alt="Reviewer " id="pd-profile-pic" />
              </div>
            )}

            <div className="fileUpload">
              <input
                type="file"
                onChange={this.fileSelected}
                className="upload"
              />
              <span>Change display pic</span>
            </div>

            {this.renderInput("text", "place", "City or Town")}
            {this.renderInput("text", "bio", "Bio")}
            <input type="submit" value="Save" />
          </form>
        </div>
      </div>
    );
  }
}

export default ProfileUpdate;

/* <div className="pd-update">
<button onClick={this.fileUpload} />
</div> 
       {this.renderInput("text", "name", "Full Name")}*/
