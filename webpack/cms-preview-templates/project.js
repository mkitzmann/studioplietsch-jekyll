import React from "react";

export default class ProjectPreview extends React.Component {
  render() {
    const {entry, widgetFor, widgetsFor , getAsset} = this.props;

    return <section id="body">
      <div class="container">

      {widgetsFor('sections').map((section) =>
        <div>
          <div className="project-images">
          {section.getIn(['data','images']).map((image) =>
            <div className="image-wrapper">
              <div>
                {console.log(getAsset(image.get('image')))}
              </div>
              <img src={getAsset(image.get('image'))} />
            </div>
          )}
          </div>

          <p>
          {section.getIn(['widgets','text'])}
          </p>
        </div>
      )}
{/*       
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
                  

        </div>)} */}

      </div>
    </section>;
  }
}