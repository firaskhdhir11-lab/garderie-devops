const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const garderie = {
  nom: "Ma Garderie",
  description: "Un espace chaleureux pour apprendre, jouer et grandir.",
  adresse: "Tunisie",
  horaires: "Du lundi au vendredi, de 7h30 à 17h30"
};

const services = [
  { id: 1, nom: "Éveil et créativité", description: "Des ateliers créatifs." },
  { id: 2, nom: "Apprentissage", description: "Apprendre en jouant." },
  { id: 3, nom: "Repas équilibrés", description: "Des repas variés." },
  { id: 4, nom: "Jeux et activités", description: "Jouer et partager." }
];

const activites = [
  { id: 1, nom: "Dessin et peinture", categorie: "Créativité" },
  { id: 2, nom: "Lecture de contes", categorie: "Apprentissage" },
  { id: 3, nom: "Jeux en plein air", categorie: "Sport" },
  { id: 4, nom: "Musique et chansons", categorie: "Éveil" }
];

app.get("/api/garderie", (req, res) => res.json(garderie));
app.get("/api/services", (req, res) => res.json(services));
app.get("/api/activites", (req, res) => res.json(activites));

app.get("/", (req, res) => {
  res.json({
    message: "API Ma Garderie opérationnelle",
    endpoints: [
      "/api/garderie",
      "/api/services",
      "/api/activites"
    ]
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend Ma Garderie démarré sur le port ${PORT}`);
});
