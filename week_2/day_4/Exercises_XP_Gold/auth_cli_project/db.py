import psycopg2

def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="auth_db",
        user="postgres",
        password="root",
        port=5433
    )

def user_exists(username):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE username = %s", (username,))
    result = cur.fetchone()
    cur.close()
    conn.close()
    return result is not None

def add_user(username, password_hash):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)",
                (username, password_hash))
    conn.commit()
    cur.close()
    conn.close()

def get_password(username):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT password FROM users WHERE username = %s", (username,))
    row = cur.fetchone()
    cur.close()
    conn.close()
    return row[0] if row else None
