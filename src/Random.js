import './Random.css';
import NavBar from './NavBar';
import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Random() {
  return (
    <div className="Random">
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
      <Grid container xs={12} spacing={2} className="Random-content">
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          <p id="centered">you clicked on the cat!</p>
          <h3 id="centered">here are some random things to know about me</h3>
          <p>i am currently...</p>
          <ul>
            <li>reading: <i>Girl, Woman, Other</i> by Bernardine Evaristo</li>
            <li>listening to: "Go On Then, Love" by Said The Sky, The Maine <a href="https://open.spotify.com/track/0Ux2vG5O8Odi5WCiPARWw8?si=69afc58e1b8a4355" target="_blank" rel="noreferrer">(on Spotify)</a></li>
            <li>learning choreo from: "Pirate" by Everglow <a href="https://www.youtube.com/watch?v=v20KGhMMa6s" target="_blank" rel="noreferrer">(on YouTube)</a></li>
            <li>watching: <i>Peaky Blinders</i> <a href="https://www.netflix.com/title/80002479" target="_blank" rel="noreferrer">(on Netflix)</a></li>
            <li>working on: building a healthier lifestyle (eating healthier, sleeping regularly, exercising)</li>
            <li>thinking about: investing in the stock market, the future of web3</li>
          </ul>
          <br></br>
          <p>my all time recs...</p>
          <ul>
            <li>read: <i>Kafka On the Shore</i> by Haruki Murakami</li>
            <li>listen (a song): "Fear" by MINO <a href="https://open.spotify.com/track/14k6gKt31iYXzUrsF8fyXH?si=Eelc3QI7Rn2jahVOs866FA">(listen here)</a></li>
            <li>listen (an album): <i>I Am The Elephante</i> by Elephante <a href="https://open.spotify.com/album/5a0tfBvMpXErrPwGqtT1QD?si=ZN09y946RI-4Q-TOKzZHhg">(listen here)</a></li>
            <li>listen (an artist): WOODZ <a href="https://open.spotify.com/artist/6y9nlaoynxSvoTGY09Vdcy?si=sReSySpWRuSXVm6I4H5zeg">(listen here)</a></li>
            <li>watch: <i>New Journey to the West</i>, a South Korean reality show</li>
          </ul>
        </Grid>
        <Grid item xs={3}>

        </Grid>
      </Grid>

      
    </div>
  );
}

export default Random;
