from flask import Flask

app = Flask(__name__)

@app.route('/<string:name>',methods=['GET'])
def hello_world(name):  # put application's code here
    if name=='Ammar' or name=='ammar':
        return 'Fatehi'
    else:
        return 'No user found'

@app.route("/john")
def output():
    return {"john": "wright"}

if __name__ == "__main__":
    app.run()