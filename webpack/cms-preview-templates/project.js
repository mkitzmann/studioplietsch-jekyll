import React from "react";

export default class ProjectPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dimensions: {}};
    this.onImgLoad = this.onImgLoad.bind(this);
    }

  onImgLoad({target:img}) {
      this.setState({
          aspect:img.offsetWidth/img.offsetHeight
      });
  }

  render() {
    const {widgetsFor , getAsset} = this.props;
    const aspect = this.state.aspect;
    
    return <section id="body">
      <div class="container">

      {widgetsFor('sections').map((section, i) =>
        <div key={i}>
          <div className="project-images">
          {section.getIn(['data','images']).map((image, x) =>
            <div className="image-wrapper"key={x}>
              <div>
                {console.log(aspect)}
                {console.log(image.get('image'))}
              </div>
              <img onLoad={this.onImgLoad} style={{flex: aspect}} src={getAsset(image.get('image'))} />
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