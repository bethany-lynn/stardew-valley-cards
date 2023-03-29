'use strict';

function Homepage() {
    return (<React.Fragment>
        <p>character cards are cool</p>
        <a href='/cards'>click here to see character cards</a>
        <img src='/static/img/balloonicorn.jpg' />

    </React.Fragment>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));