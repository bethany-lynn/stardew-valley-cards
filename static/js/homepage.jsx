// 'use strict';

function Homepage() {
    return (
      <React.Fragment>

        <p>character cards are cool</p>

        <a href="/cards-no-react">
          click here to see character cards with plain JS
        </a>

        <br />

        <a href="/cards">
            click here to view cards in React
        </a>

      </React.Fragment>
    );
}

ReactDOM.render(<Homepage />, document.getElementById('app'));