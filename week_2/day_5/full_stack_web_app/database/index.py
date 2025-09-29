import psycopg2

def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",
        database="librarydb",
        user="postgres",
        password="root",
        port=5433
    )
    return conn

def test_connection():
    """Tester la connexion à la base de données"""
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("SELECT 1")
        print("Connexion OK !")
        cur.close()
        conn.close()
        return True
    except Exception as e:
        print(f"Erreur: {e}")
        return False

def init_db():
    """Créer les tables à partir du fichier SQL"""
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        # Lire le fichier SQL
        with open('database/seed/index.sql', 'r', encoding='utf-8') as f:
            sql_content = f.read()

        # Séparer les commandes par ; et exécuter une par une
        sql_commands = sql_content.split(";")
        for command in sql_commands:
            command = command.strip()
            if command:  # ignorer les lignes vides
                cur.execute(command)

        conn.commit()
        cur.close()
        conn.close()
        print("Tables créées avec succès pour PostgreSQL !")
        return True
    except Exception as e:
        print(f"Erreur création tables: {e}")
        return False

def voir_tables():
    """Lister les tables dans la base"""
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        cur.execute("""
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        """)

        tables = cur.fetchall()
        print("Tables dans ta base:")
        for table in tables:
            print(f"  - {table[0]}")

        cur.close()
        conn.close()
    except Exception as e:
        print(f"Erreur: {e}")


# Pour tester
if __name__ == "__main__":
    print("=== TEST CONNEXION ===")
    if test_connection():
        print("\n=== CRÉATION DES TABLES ===")
        init_db()
        print("\n=== TABLES CRÉÉES ===")
        voir_tables()
        print("\n=== MISE À JOUR DE LA TABLE LIVRES ===")
        update_livres_table()
