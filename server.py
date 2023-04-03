from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

CARD_DATA = [
    {
        "name": "Abigail",
        "birthday": "Fall 13",
        "imgUrl": "/static/img/Abigail.png",
        "cardId": 1,
    },
    {
        "name": "Alex",
        "birthday": "Spring 20",
        "imgUrl": "/static/img/Alex.png",
        "cardId": 2,
    },
    {
        "name": "Elliot",
        "birthday": "Fall 05",
        "imgUrl": "/static/img/Elliot.png",
        "cardId": 3,
    },
    {
        "name": "Emily",
        "birthday": "Spring 27",
        "imgUrl": "/static/img/Emily.png",
        "cardId": 4,
    },
    {
        "name": "Haley",
        "birthday": "Spring 14",
        "imgUrl": "/static/img/Haley.png",
        "cardId": 5,
    },
    {
        "name": "Harvey",
        "birthday": "Winter 14",
        "imgUrl": "/static/img/Harvey.png",
        "cardId": 6,
    },
    {
        "name": "Leah",
        "birthday": "Winter 23",
        "imgUrl": "/static/img/Leah.png",
        "cardId": 7,
    },
    {
        "name": "Maru",
        "birthday": "Summer 10",
        "imgUrl": "/static/img/Maru.png",
       "cardId": 8,
    },
    {
        "name": "Penny",
        "birthday": "Fall 02",
        "imgUrl": "/static/img/Penny.png",
        "cardId": 9,
    },
    {
        "name": "Sam",
        "birthday": "Summer 17",
        "imgUrl": "/static/img/Sam.png",
        "cardId": 10,
    },
    {
        "name": "Sebastian",
        "birthday": "Winter 10",
        "imgUrl": "/static/img/Sebastian.png",
        "cardId": 11,
    },
    {
        "name": "Shane",
        "birthday": "Spring 20",
        "imgUrl": "/static/img/Shane.png",
        "cardId": 12,
    },

]


@app.route('/')
def show_homepage():
    """Show app's homepage"""

    return render_template('homepage.html')


@app.route('/cards')
def show_cards():
    """Show all players cards"""

    return render_template('cards.html')


@app.route("/cards.json")
def get_cards_json():
    """Return JSON response with cards"""

    return jsonify({"cards": CARD_DATA})


@app.route("/add-card", methods=["POST"])
def add_card():
    """Add new card to DB"""
    name = request.get_json().get("name")
    birthday = request.get_json().get("birthday")

    new_card = {
        "name": name,
        "birthday": birthday,
        "imgUrl": "/static/img/placeholder.png",
        "cardId": len(CARD_DATA) + 1,
    }
    CARD_DATA.append(new_card)
    return jsonify({"success": True, "cardAdded": new_card})


@app.route("/cards-no-react")
def show_cards_no_react():
    return render_template("cards-no-react.html")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')