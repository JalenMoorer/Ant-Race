import React, {Component} from 'react';
import AntContainer from './AntContainer';
import Results from '../Components/Results';

class AntList extends Component {
  constructor(props) {
    super(props);

    const { ants } = this.props;

    this.state = {
      antList: ants,
      resultList: [],
      race: 0
    }

    this.storeResults = [];

    this.generateAnts = this.generateAnts.bind(this);
    this.updateAnts = this.updateAnts.bind(this);
    this.startRace = this.startRace.bind(this);
  }


  startRace(){
    this.storeResults = [];
    this.setState({ race: 1, resultList: [] });
  }

  updateAnts(name, likelihood){
    this.storeResults.push({ name, likelihood });

    if(this.storeResults.length === this.state.antList.length) {
      this.setState({
        resultList: this.storeResults,
        race: 0
      });
    }
  }


  generateAnts(){
    const {antList} = this.state;

    const ants = antList.map((ant,i) => {
      const {
        name,
        length,
        weight,
        color,
      } = ant;

      const { race } = this.state;
      return (
        <AntContainer
          key={i}
          number={i+1}
          name={name}
          length={length}
          weight={weight}
          color={color}
          race={race}
          result={this.updateAnts}/>
      )
    })
    return ants;
  }

  render(){
    return (
      <div>
        <div className="card-group">
          {this.generateAnts()}
        </div>
        <button
          type="button"
          onClick={this.startRace}
          className="btn btn-primary btn-block"
          disabled={this.state.race ? true : false}>
          Start Race
        </button>
        <div className="row row align-items-end justify-content-center">
          <div className="">
            {this.state.resultList.length ? <Results resultList={this.state.resultList} /> : ""}
          </div>
        </div>
      </div>
    )
  }
}

export default AntList;
