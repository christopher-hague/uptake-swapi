import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

class CrawlStats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      films: this.props.films
    }
  }

  render() {
    const crawlParagraphs = this.state.films.map(film => ({episode: film.episode_id, paragraphs: film.opening_crawl.split("\r\n\r")}))
    const crawlData = this.state.films.map(film => ({episode: film.episode_id, words: film.opening_crawl.split("\n").join(" ").split(" ")}))
    const crawlWords = crawlData.map(film => ({episode: film.episode, words: film.words.filter(word => word !== "\r").length} ))

    return (
      <div>
        <h1>Opening Scrawl Word Lengths</h1>
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickValues={["I", "II", "III", "IV", "V", "VI", "VII"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => x}
          />
          <VictoryStack>
            <VictoryBar
              data={crawlWords}
              x={"episode"}
              y={"words"}
            />
          </VictoryStack>
        </VictoryChart>
      </div>
    )
  }
}

export default CrawlStats
