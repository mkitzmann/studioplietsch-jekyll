import React from "react";

export default class ContactPreview extends React.Component {

  render() {
    const {entry, widgetFor, widgetsFor , getAsset} = this.props;
    let image = entry.getIn(['data','image']);
    
    return <section id="body">
      <div class="container">
        <img src={getAsset(image)} />

        <p>
        {widgetFor('body')}
        </p>

      </div>
    </section>;
  }
}
