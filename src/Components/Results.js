import React from 'react';

const Results = (props) => {
    const convertToPercentage = (likelihood) => {
      return Math.floor(likelihood * 100) + 1 + '%'
    }

    const sortResult = (resultList) => {

        const sortedList = resultList.sort((a,b) => {
          return +b.likelihood > +a.likelihood
        });

        return sortedList;
    }

    const showResult = (resultList) =>  {

        const sortedResultList = sortResult(resultList);

        const convertedResultList = sortedResultList.map((x,i) => {
        return <li className="list-group-item" key={i}>{x.name} - {convertToPercentage(x.likelihood)}</li>
      });

      return convertedResultList;
    }

    return(
      <ul className="list-group list-group-flush">
        {showResult(props.resultList)}
      </ul>
    );
  }

  export default Results;
