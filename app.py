from flask import Flask, jsonify
from flask.helpers import send_from_directory

app = Flask(__name__, static_folder="frontend/build", static_url_path="")

@app.route('/<string:firstName>', methods=['GET'])
def find_name(firstName: str):
    print(firstName)
    if firstName == "Jeesoo":
        output = "Min"
    else:
        output = "User Not Found"
    return jsonify(lastName=output)


@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


if __name__ == '__main__':
    app.run(host="0.0.0.0")