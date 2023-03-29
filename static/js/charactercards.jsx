'use strict';

const characterCardData = [
    {
        name: "Abigail",
        birthday: "Fall 13",
        imgUrl: "/static/img/Abigail.png",
        cardId: 1,
    }
]

function characterCards(props) {
    return (
        <div className="card">
            <h2>Name: {props.name}</h2>
            <img src={props.imgUrl} alt="profile" />
            <h2>Birthday: {props.birthday}</h2>
        </div>
    );

}

console.log(characterCardData);
ReactDOM.render(
    <characterCards name="Abigail" birthday="" imgUrl="" />,
    document.querySelector('#Abigail'),
)