'use strict';

const characterCardData = [
    {

    }
]

function characterCards(props) {
    return (
        <div className="card">
            <h2>Name: {props.name}</h2>
            <img src={props.imgUrl} alt="profile" />
            <h2>Favorite Item: {props.favitem}</h2>
        </div>
    );

}

console.log(characterCardData);
ReactDOM.render(
    <characterCards name="Abigail" favitem="" imgUrl="" />,
    document.querySelector('#Abigail'),
)