'use strict';

const characterCardData = [
    {
        name: "Abigail",
        birthday: "Fall 13",
        imgUrl: "/static/img/Abigail.png",
        cardId: 1,
    },
    {
        name: "Alex",
        birthday: "Spring 20",
        imgUrl: "/static/img/Alex.png",
        cardId: 2,
    },
    {
        name: "Elliot",
        birthday: "Fall 05",
        imgUrl: "/static/img/Elliot.png",
        cardId: 3,
    },
    {
        name: "Emily",
        birthday: "Spring 27",
        imgUrl: "/static/img/Emily.png",
        cardId: 4,
    },
    {
        name: "Haley",
        birthday: "Spring 14",
        imgUrl: "/static/img/Haley.png",
        cardId: 5,
    },
    {
        name: "Harvey",
        birthday: "Winter 14",
        imgUrl: "/static/img/Harvey.png",
        cardId: 6,
    },
    {
        name: "Leah",
        birthday: "Winter 23",
        imgUrl: "/static/img/Leah.png",
        cardId: 7,
    },
    {
        name: "Maru",
        birthday: "Summer 10",
        imgUrl: "/static/img/Maru.png",
        cardId: 8,
    },
    {
        name: "Penny",
        birthday: "Fall 02",
        imgUrl: "/static/img/Penny.png",
        cardId: 8,
    },
    {
        name: "Sam",
        birthday: "Summer 17",
        imgUrl: "/static/img/Sam.png",
        cardId: 9,
    },
    {
        name: "Sebastian",
        birthday: "Winter 10",
        imgUrl: "/static/img/Sebastian.png",
        cardId: 10,
    },
    {
        name: "Shane",
        birthday: "Spring 20",
        imgUrl: "/static/img/Shane.png",
        cardId: 11,
    },

];

function CharacterCard(props) {
    return (
        <div className="card">
            <h2>Name: {props.name} </h2>
            <img src={props.imgUrl} alt="profile" />
            <h2>Birthday: {props.birthday} </h2>
        </div>
    );

}

console.log(characterCardData);
ReactDOM.render(
    <CharacterCard name="Abigail" birthday="Fall 13"  imgUrl="/static/img/Abigail.png"/>,
    document.querySelector('#Abigail'),
);
ReactDOM.render(
    <CharacterCard name="Alex" birthday="Spring 20"  imgUrl="/static/img/Alex.png"/>,
    document.querySelector('#Alex'),
);