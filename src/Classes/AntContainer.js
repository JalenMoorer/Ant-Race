import React, {Component} from 'react';
import {generateAntWinLikelihoodCalculator} from '../calculator';
import Ant from '../Components/Ant';

class AntContainer extends Component  {
  constructor(props){
    super(props);

    this.state = {
      likelihood: "not yet run"
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.race)
      this.calculate()
  }

  calculate(){
    this.setState({ likelihood: "in progress"});

    generateAntWinLikelihoodCalculator()(data => {
      this.setState({ likelihood: "calculated "});
      this.props.result(this.props.name, data);
    });
  }

  render() {
    if(!this.props)
      return;

    const { number, name, length, weight, color} = this.props;
    const { likelihood } = this.state;


    return (
      <Ant
        number={number}
        name={name}
        length={length}
        weight={weight}
        color={color}
        likelihood={likelihood}
      />
    );
  }
}

export default AntContainer;
