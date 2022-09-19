import placeholder from './images/sunset.jpg';

function Post(path, title, date, image, blurb, notionId) {
  this.path = path;
  this.title = title;
  this.date = date;
  this.image = image;
  this.blurb = blurb;
  this.notionId = notionId;
}

const firstPost = new Post("first-post", "Starting a personal website...", "12/28/2020", 
  placeholder, "Welcome to my personal website!", "fd0fa58588e04c1cbb30a45917bc6712");

export const posts = [firstPost]
