import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import S3FileUpload from 'react-s3';
import ReactS3 from 'react-s3';
 
const config = {
  bucketName: 'imageupload23',

  region: 'us-east-1',
  accessKeyId: 'AKIAIS7CFAA7EYZF5FIA',
  secretAccessKey: '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',
}

class App extends Component {
  upload(e){
    console.log(e.target.files[0]);
    ReactS3
  .uploadFile(e.target.files[0], config)
  .then(data => console.log(data))
  .catch(err => console.error(err))
  }
  
render () {

  return (
      <div> 
        <h3>
          upload Image
        </h3>
        <input type= "file"
          onChange = {this.upload}/>
        confirmed working
      </div>
  );

}
}

export default App;
