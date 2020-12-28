import placeholder from './sunset.jpg';

function Post(path, title, date, image, blurb, notionId) {
  this.path = path;
  this.title = title;
  this.date = date;
  this.image = image;
  this.blurb = blurb;
  this.notionId = notionId;
}

const firstPost = new Post("first-post", "Starting a personal website...", "12/28/2020", 
  placeholder, "Welcome to my personal website!", "15a308fb9bf64345b05e1ec1a7dce6ae");

export const posts = [firstPost]
