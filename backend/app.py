from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)

app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "insightboard_user"
app.config["MYSQL_PASSWORD"] = "insight123"      # use the password you chose
app.config["MYSQL_DB"] = "insightboard"

mysql = MySQL(app)

@app.route("/")
def home():
    return "InsightBoard Backend Running!"

@app.route("/api/projects")
def get_projects():
    cursor = mysql.connection.cursor()

    cursor.execute("""
        SELECT id, title, status, due_date
        FROM projects
        ORDER BY id DESC;
    """)

    rows = cursor.fetchall()

    projects = []

    for row in rows:
        projects.append({
            "id": row[0],
            "title": row[1],
            "status": row[2],
            "due_date": str(row[3])
        })

    cursor.close()

    return jsonify(projects)

@app.route("/api/projects", methods=["POST"])
def add_project():
    data = request.get_json()

    title = data["title"]
    status = data["status"]
    due_date = data["dueDate"]

    cursor = mysql.connection.cursor()

    cursor.execute(
        """
        INSERT INTO projects (title, status, due_date)
        VALUES (%s, %s, %s)
        """,
        (title, status, due_date),
    )

    mysql.connection.commit()
    cursor.close()

    return jsonify({"message": "Project added successfully!"}), 201

@app.route("/api/projects/<int:project_id>", methods=["PUT"])
def update_project(project_id):
    data = request.get_json()

    title = data["title"]
    status = data["status"]
    due_date = data["dueDate"]

    cursor = mysql.connection.cursor()

    cursor.execute(
        """
        UPDATE projects
        SET title = %s, status = %s, due_date = %s
        WHERE id = %s
        """,
        (title, status, due_date, project_id),
    )

    mysql.connection.commit()
    cursor.close()

    return jsonify({"message": "Project updated successfully!"}), 200


@app.route("/api/projects/<int:project_id>", methods=["DELETE"])
def delete_project(project_id):
    cursor = mysql.connection.cursor()

    cursor.execute(
        "DELETE FROM projects WHERE id = %s",
        (project_id,),
    )

    mysql.connection.commit()
    cursor.close()

    return jsonify({"message": "Project deleted successfully!"}), 200

if __name__ == "__main__":
    app.run(debug=True)