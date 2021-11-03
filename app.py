from flask import Flask

app = Flask(__name__)

@app.route("/john")
def output():
    return {"john": "wright"}

if __name__ == "__main__":
    app.run(debug=True)