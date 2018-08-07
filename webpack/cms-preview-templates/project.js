import React from "react";

export default class ProjectPreview extends React.Component {

  constructor(props) {
    super(props);
    }

  render() {
    const {widgetsFor , getAsset} = this.props;
    
    return <section id="body">
      <div class="container">

      {widgetsFor('sections').map((section, i) =>
        <div key={i}>
          <div className="project-images">

          {section.getIn(['data','images']).map((image, x) =>
            <div className="image-wrapper" style={{flex: 1}}  key={x}>
              <div>
                {console.log(image)}
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

      </div>
    </section>;
  }
}
