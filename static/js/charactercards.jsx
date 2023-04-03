function PortraitCard(props) {
    return (
        <div className="card">
            <h2>Name: {props.name} </h2>
            <img src={props.imgUrl} alt="profile" />
            <h2>Birthday: {props.birthday} </h2>
        </div>
    );

}

function AddPortraitCard(props) {
    const [name, setName] = React.useState('');
    const [birthday, setBirthday] = React.useState('');
    function addNewCard() {
        fetch("/add-card", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "name": name, "birthday": birthday}),
            })
            .then((response) => response.json())
            .then((jsonResponse) => {
                const cardAdded = jsonResponse.cardAdded;
                props.addCard(cardAdded);
            });
    }
    return (
        <React.Fragment>
            <h2>Add New Portrait</h2>
            <label htmlFor="nameInput">
                Name
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  id="nameInput"
                  style={{ marginLeft: '5px' }}
                />
            </label>
            <label htmlFor="birthdayInput" style={{ marginLeft: '10px', marginRight: '5px' }}>
                Birthday
                <input 
                  value={birthday} 
                  onChange={(event) => setBirthday(event.target.value)} 
                  id="birthdayInput" 
                />
            </label>
            <button type="button" style={{ marginLeft: '10px' }} onClick={addNewCard}>
                Create
            </button>
        </React.Fragment>
        );
    }

function PortraitCardContainer() {
    const [cards, setCards] = React.useState([]);

    function addCard(newCard) {
        const currentCards = [...cards];
        setCards([...currentCards, newCard]);
    }

    React.useEffect(() => {
        fetch("cards.json")
        .then((response) => response.json())
        .then((data) => setCards(data.cards));
    }, []);

    const portraitCards = [];

    console.log(`cards: `, cards);

    for (const currentCard of cards) {
        portraitCards.push(
            <PortraitCard
              key={currentCard.cardId}
              name={currentCard.name}
              birthday={currentCard.birthday}
              imgUrl={currentCard.imgUrl}
            />,
        );
    }

    return (
        <React.Fragment>
          <AddPortraitCard addCard={addCard} />
          <h2>Portrait Cards</h2>
          <div className="grid">{portraitCards}</div>
        </React.Fragment>
    );
}

ReactDOM.render(<PortraitCardContainer />, document.getElementById('container'));













// console.log(characterCardData);
// ReactDOM.render(
//     <CharacterCard name="Abigail" birthday="Fall 13"  imgUrl="/static/img/Abigail.png"/>,
//     document.querySelector('#Abigail'),
// );
// ReactDOM.render(
//     <CharacterCard name="Alex" birthday="Spring 20"  imgUrl="/static/img/Alex.png"/>,
//     document.querySelector('#Alex'),
// );
// ReactDOM.render(
//     <CharacterCard name="Elliot" birthday="Fall 05"  imgUrl="/static/img/Elliot.png"/>,
//     document.querySelector('#Elliot'),
// );
// ReactDOM.render(
//     <CharacterCard name="Emily" birthday="Spring 27"  imgUrl="/static/img/Emily.png"/>,
//     document.querySelector('#Emily'),
// );
// ReactDOM.render(
//     <CharacterCard name="Haley" birthday="Spring 14"  imgUrl="/static/img/Haley.png"/>,
//     document.querySelector('#Haley'),
// );
// ReactDOM.render(
//     <CharacterCard name="Harvey" birthday="Spring 14"  imgUrl="/static/img/Harvey.png"/>,
//     document.querySelector('#Harvey'),
// );
// ReactDOM.render(
//     <CharacterCard name="Leah" birthday="Winter 23"  imgUrl="/static/img/Leah.png"/>,
//     document.querySelector('#Leah'),
// );
// ReactDOM.render(
//     <CharacterCard name="Maru" birthday="Summer 10"  imgUrl="/static/img/Maru.png"/>,
//     document.querySelector('#Maru'),
// );
// ReactDOM.render(
//     <CharacterCard name="Penny" birthday="Fall 02"  imgUrl="/static/img/Penny.png"/>,
//     document.querySelector('#Penny'),
// );
// ReactDOM.render(
//     <CharacterCard name="Sam" birthday="Summer 17"  imgUrl="/static/img/Sam.png"/>,
//     document.querySelector('#Sam'),
// );
// ReactDOM.render(
//     <CharacterCard name="Sebastian" birthday="Winter 10"  imgUrl="/static/img/Sebastian.png"/>,
//     document.querySelector('#Sebastian'),
// );
// ReactDOM.render(
//     <CharacterCard name="Shane" birthday="Spring 20"  imgUrl="/static/img/Shane.png"/>,
//     document.querySelector('#Shane'),
// );