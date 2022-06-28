import  axios  from 'axios';
import React, { Component } from 'react'
import "./App.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";




class App extends Component {
  
  state = { advice: " " };

  componentDidMount() {
    this.fetchQuotes();

  }



  fetchQuotes = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice} = res.data.slip
        console.log(advice);
        this.setState({advice})
      })
      .catch((err) => {console.log(err)})
  }
  

  render() {
    const {advice} = this.state
    console.log(advice)

    return (
      <div className= "app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchQuotes}>
            <span>
              GET A ADVICE !!
            </span>
          </button>
          <div className="share">
            <FacebookShareButton
            url={`Visit For more ${"https://silver-sable-e2cbe8.netlify.app/"}`}

            quote= {`quote of the day ${advice} `}
            hashtag={advice}
            >
              <FacebookIcon size={32} round={true}/>

            </FacebookShareButton>
            <TwitterShareButton
            url={`Visit For more ${"https://silver-sable-e2cbe8.netlify.app/"}`}

            title={advice} 
            via = "NilamadhabSenap"
            hashtags={["quotes",]}
            related={["@NilamadhabSenap"]}

            >
              <TwitterIcon size={32} round={true} />

            </TwitterShareButton>
            <PinterestShareButton
            url={`Visit For more ${"https://silver-sable-e2cbe8.netlify.app/"}`}
            media={advice}
            
            >
              <PinterestIcon size={32} round={true} />

            </PinterestShareButton>
            <LinkedinShareButton
            url={`Visit For more ${"https://silver-sable-e2cbe8.netlify.app/"}`}
            title='quotes for the day'
            summary={advice}
            source={`Visit For more ${"https://silver-sable-e2cbe8.netlify.app/"}`}
            >
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <RedditShareButton
            url={`Visit For more ${"https://silver-sable-e2cbe8.netlify.app/"}`}
            title={advice}
            >
              <RedditIcon size={32} round={true} />

            </RedditShareButton>
            <TelegramShareButton
            url={`Visit For more ${"https://silver-sable-e2cbe8.netlify.app/"}`}
            title={advice}
            >
              <TelegramIcon size={32} round={true} />

            </TelegramShareButton>


          </div>

        </div>
      </div>
    )
  }
}

export default App
