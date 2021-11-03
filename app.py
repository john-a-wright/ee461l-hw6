from flask import Flask, jsonify
from flask.helpers import send_from_directory
#from flask_cors import CORS

app = Flask(__name__)

#CORS(app)

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route('/<string:name>',methods=['GET'])
def hello_world(name):  # put application's code here
    if name=='Ammar' or name=='ammar':
        return jsonify(
            status=200,
            message="Fatehi"
        )
    else:
        return jsonify(
            status=404,
            message="User Not Found"
        )


if __name__ == '__main__':
    app.run()