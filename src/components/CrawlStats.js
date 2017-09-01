import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const romanNums = ["I", "II", "III", "IV", "V", "VI", "VII"]

class CrawlStats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      films: this.props.films,
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {

    const eachCrawl = this.state.films.sort((a,b) =>
      a.episode_id - b.episode_id).map(film => (
        <div className="crawl" key={film.title}>
          <h3>Episode {romanNums[film.episode_id - 1]}: {film.title}</h3>
          {film.opening_crawl.split("\r\n\r").map((paragraph, i) =>
            <p key={`paragraph-${i}`}>{paragraph}</p>
          )}
          <br/>
        </div>
      )
    )

    const crawlData = this.state.films.map(film => ({episode: film.episode_id, words: film.opening_crawl.split("\n").join(" ").split(" ")}))
    const crawlWords = crawlData.map(film => ({episode: film.episode, words: film.words.filter(word => word !== "\r").length} ))

    const modal = (
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Crawl"
      >
        <div className="crawl-modal">

          {eachCrawl}
        </div>
      </Modal>
    )

    return (
      <div>
        <h1>Opening Crawl Word Lengths</h1>
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickValues={romanNums}
            label="Episodes"
            style={{axisLabel: { padding: 35} }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => x}
          />
          <VictoryAxis dependentAxis
            label="Word Count"
            style={{axisLabel: { padding: 35 } }}
          />
          <VictoryStack>
            <VictoryBar
              data={crawlWords}
              x={"episode"}
              y={"words"}
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onClick: () => {
                      return [{
                        target: "labels",
                        mutation: (props) => {
                          return this.openModal()
                        }
                      }];
                    }
                  }
                }
              ]}
            />
          </VictoryStack>
        </VictoryChart>

        {modal}
      </div>
    )
  }
}

export default CrawlStats
