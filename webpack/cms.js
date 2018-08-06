import React from "react";
import CMS from "netlify-cms";

import ProjectPreview from "./cms-preview-templates/project";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/assets/main.css");
CMS.registerPreviewTemplate("project", ProjectPreview);