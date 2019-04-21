const url = require('./URL.json');
const validUrl = require('valid-url');
const randomstring = require("randomstring");
const fs =require('fs');

class URLObjects{
  constructor(url, urlShortened,date, numberOfVisits) {
    this.URL = url;
    this.URLShortened =urlShortened;
    this.Date = date;
    this.NumberOfVisits = numberOfVisits;
    }
}

let shortenURL = (URL)=>{
  if(validUrl.isUri(URL)){
    //check to see if URL already exist
    let newurl = "http://"+randomstring.generate(5);
    URLObjects.URLShortened = newurl;

  }else{
    console.log('Not a valid URL');
  }
}

let generateData =()=>{
  let count=0;
  for(let i =0; i<=100;i++){
    let newShortenedURL = shortenURL(url[i]);
    let date = Date();
    let visits = Math.random();
    let URL = new URLObjects(url[i],newShortenedURL,date,visits)
    console.log( URL);
    // Object.create(URLObject,{
    //   url[0]
    // })
  }

}
generateData();