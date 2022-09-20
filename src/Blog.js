import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './Blog.css';
import BlogCard from './BlogCard';
import NavBar from './NavBar';
import ErrorPage from './ErrorPage';
import { theme } from './theme';
import { posts } from './Post';
import { ThemeProvider, Typography } from '@material-ui/core';

const piecePathToPost = new Map([
  // ["first-post", posts[0]],
  // ["2020-recap", "Looking Back on 2020"], 
  // ["dream-internship", "The Dream Internship: A Summer at Google"]
]);

function getNotionDoc(notionDocId) {
  fetch("https://potion-api.now.sh/html?id=" + notionDocId)
    .then(res => res.text())
    .then(text => {
      document.getElementById("postContainer").innerHTML = text
    })
}

const makeBlogCards = () => {
  let cards = [];
  piecePathToPost.forEach((value, key) =>
    cards.push(<BlogCard post={value} path={key} />)
  );
  return cards;
}

function BlogMain() {
  return (
    <div className="BlogMain">
      <Typography gutterBottom variant="h2">hello stranger!</Typography>
      {makeBlogCards()}
      {/* map piecetitles to Blog Cards = previews of articles */}
    </div>
  );
}

function BlogPiece() {
  let { piecePath } = useParams();

  useEffect(() => {
    if (piecePathToPost.has(piecePath)) {
      getNotionDoc(piecePathToPost.get(piecePath).notionId)
    }
  })

  if (!piecePathToPost.has(piecePath)) {
    return (
      <ErrorPage />
    )
  }

  return (
    <div className="BlogPiece">
      {/* <Typography variant="h2">
        {piecePathToPost.get(piecePath).title}
      </Typography> */}
      <div id="postContainer" />
      {/* fetch Notion document based on piece path and display */}
    </div>
  );
}

function Blog() {
  let { path } = useRouteMatch();

  return (
    <div className="Blog" style={{paddingTop: "140px",}}>
      <ThemeProvider theme={theme}>
        <NavBar />
      

        <Switch>
          <Route exact path={path} component={BlogMain} />
          <Route path={`${path}/:piecePath`} children={<BlogPiece />} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default Blog;
