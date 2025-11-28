// Importation du module Express
import express from 'express';

// Création d'une application Express
const app = express();

// Port d’écoute
const PORT = 3000;

// Middleware pour lire le JSON dans les requêtes
app.use(express.json());

// Route simple pour tester
app.get('/', (req, res) => {
  res.send('Bienvenue sur le blog API 🚀');
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d’exécution sur http://localhost:${PORT}`);
});
