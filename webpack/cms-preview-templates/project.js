import React from "react";

export default class ProjectPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    let thumbnail = entry.getIn(["data", "thumbnail"]);

    return <section id="body">
      <div class="container">
      
        {(entry.getIn(["data", "sections"]) || []).map((section, i) => 
        <div>
          <div className="project-images" key={i}>

            {(section.get("images") || []).map((images, i) => 
              <div className="image-wrapper" key={i} style={{flex: 1}}>
                        {console.log(getAsset(images.get("image")))}
                <img src={getAsset(images.get("image"))} alt="" className="" />
              </div>)}
              
          </div>

          <p>{ section.get("text") }</p>
                  

        </div>)}

      </div>
    </section>;
  }
}