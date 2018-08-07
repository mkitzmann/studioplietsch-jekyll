import React from "react";

export default class StudioPreview extends React.Component {

  render() {
    const {entry, widgetFor, widgetsFor , getAsset} = this.props;
    let image = entry.getIn(['data','image']);
    
    return <section id="body">
      <div class="container">
      <div class="contact-container">
        <div class="left">
          <img src={getAsset(image)} />
        </div>
        <div class="right">
        {widgetFor('contact')}
        </div>
      </div>


        <p>
        {widgetFor('body')}
        </p>

      </div>
    </section>;
  }
}
