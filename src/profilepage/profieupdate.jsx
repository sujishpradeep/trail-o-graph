import React, { Component } from "react";
import { apiProfiles } from "../config.json";
import axios from "axios";

class ProfileUpdate extends Component {
  state = { selectedFile: null };
  fileSelected = e => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  fileUpload = async e => {
    const fd = new FormData();

    fd.append("name", this.props.user.fullname);
    fd.append("_id", this.props.user.profileid);
    fd.append(
      "profilepic",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    try {
      await axios.post(apiProfiles, fd);
    } catch (ex) {}
  };

  render() {
    return (
      <div className="pd-update">
        <input type="file" onChange={this.fileSelected} />
        <button onClick={this.fileUpload} />
      </div>
    );
  }
}

export default ProfileUpdate;
