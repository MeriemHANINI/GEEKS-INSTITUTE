import psycopg2

# Connexion à PostgreSQL
def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="restaurant_menu",
        user="postgres",
        password="root",
        port=5433
    )

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s) RETURNING item_id",
            (self.name, self.price)
        )
        conn.commit()
        cur.close()
        conn.close()
        print(f"{self.name} a été ajouté avec succès.")

    def delete(self):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
        if cur.rowcount == 0:
            print("Erreur : l’item n’existe pas.")
        else:
            print(f"{self.name} a été supprimé avec succès.")
        conn.commit()
        cur.close()
        conn.close()

    def update(self, new_name, new_price):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            "UPDATE Menu_Items SET item_name=%s, item_price=%s WHERE item_name=%s",
            (new_name, new_price, self.name)
        )
        if cur.rowcount == 0:
            print("Erreur : l’item n’existe pas.")
        else:
            print(f"{self.name} a été mis à jour en {new_name} avec le prix {new_price}.")
        conn.commit()
        cur.close()
        conn.close()
        self.name = new_name
        self.price = new_price
