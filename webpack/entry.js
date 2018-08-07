import React from "react";
import CMS from "netlify-cms";

import ProjectPreview from "./cms-preview-templates/project";
import StudioPreview from "./cms-preview-templates/studio";
import ContactPreview from "./cms-preview-templates/contact";

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

CMS.registerPreviewStyle("/css/app.css");
CMS.registerPreviewTemplate("projects", ProjectPreview);
CMS.registerPreviewTemplate("studio", StudioPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);