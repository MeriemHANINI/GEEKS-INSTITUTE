from flask import Flask, jsonify, request, abort

app = Flask(__name__)

students = [
    {"id": 1, "name": "John Doe", "email": "john.doe@example.com", "age": 20, "gender": "male"},
    {"id": 2, "name": "Jane Doe", "email": "jane.doe@example.com", "age": 21, "gender": "female"},
    {"id": 3, "name": "Jim Doe", "email": "jim.doe@example.com", "age": 22, "gender": "male"},
    {"id": 4, "name": "Jill Doe", "email": "jill.doe@example.com", "age": 23, "gender": "female"},
    {"id": 5, "name": "Jack Doe", "email": "jack.doe@example.com", "age": 24, "gender": "male"}
]

# -----------------------
# Routes API
# -----------------------

# GET /students avec pagination
@app.route("/students", methods=["GET"])
def get_students():
    page = int(request.args.get("page", 1))
    limit = int(request.args.get("limit", 10))
    start = (page - 1) * limit
    end = start + limit
    paginated_students = students[start:end]
    return jsonify({
        "students": paginated_students,
        "page": page,
        "limit": limit
    })

# GET /students/<id>
@app.route("/students/<int:id>", methods=["GET"])
def get_student(id):
    student = next((s for s in students if s["id"] == id), None)
    if not student:
        return jsonify({"error": "Student not found"}), 404
    return jsonify(student)

# POST /students
@app.route("/students", methods=["POST"])
def create_student():
    data = request.get_json()
    if not data or not all(k in data for k in ("name","email","age","gender")):
        return jsonify({"error":"Invalid input"}), 400
    new_id = max(s["id"] for s in students) + 1 if students else 1
    new_student = {"id": new_id, **data}
    students.append(new_student)
    return jsonify(new_student), 201

# PUT /students/<id>
@app.route("/students/<int:id>", methods=["PUT"])
def update_student(id):
    data = request.get_json()
    student = next((s for s in students if s["id"] == id), None)
    if not student:
        return jsonify({"error": "Student not found"}), 404
    student.update(data)
    return jsonify(student)

# DELETE /students/<id>
@app.route("/students/<int:id>", methods=["DELETE"])
def delete_student(id):
    global students
    student = next((s for s in students if s["id"] == id), None)
    if not student:
        return jsonify({"error": "Student not found"}), 404
    students = [s for s in students if s["id"] != id]
    return jsonify(student)

# -----------------------
# Gestion des erreurs
# -----------------------

# 404 Not Found global
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404

# Exception globale
@app.errorhandler(Exception)
def handle_exception(e):
    return jsonify({"error": "An error occurred", "message": str(e)}), 500

# -----------------------
# Lancement serveur
# -----------------------
if __name__ == "__main__":
    app.run(debug=True, port=5001)
