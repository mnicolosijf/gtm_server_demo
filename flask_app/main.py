import os
import requests 

from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def main():

    return render_template('index.html')

if __name__ == "__main__":
    PORT = int(os.getenv("PORT")) if os.getenv("PORT") else 8080
    app.run(host="127.0.0.1", port=PORT, debug=True)
