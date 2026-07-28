from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "InsightBoard Backend Running!"

@app.route("/api/projects")
def get_projects():
    projects = [
        {
            "name": "Portfolio Website",
            "client": "John Smith",
            "status": "Completed",
        },
        {
            "name": "E-commerce Store",
            "client": "ABC Fashion",
            "status": "In Progress",
        },
        {
            "name": "CRM Dashboard",
            "client": "Tech Solutions",
            "status": "Pending",
        },
    ]

    return jsonify(projects)

if __name__ == "__main__":
    app.run(debug=True)