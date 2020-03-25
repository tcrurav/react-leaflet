import React from 'react';
import MyParagraph from './components/my-paragraph/my-paragraph';
import MyLeaflet from './components/my-leaflet/my-leaflet';

class App extends React.Component {
  render() {
    return (
      <>
        <MyParagraph text="pepillo"/>
        <MyParagraph text="juanillo"/>
        <MyLeaflet />
      </>
    );
  }

}

export default App;
