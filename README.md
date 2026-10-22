# Ma Garderie — Projet DevOps & Cloud

## Présentation
Application web pour une garderie d'enfants, réalisée dans le cadre du Master DevOps & Cloud.

## Technologies
- Frontend : Next.js et React
- Backend : Node.js et Express
- API REST : JSON
- Conteneurisation : Docker et Docker Compose
- Versionnement : Git et GitHub
- CI/CD : Jenkins
- Infrastructure : Vagrant et Ansible

## Fonctionnalités réalisées
- [x] Page d'accueil responsive Ma Garderie
- [x] Backend Express
- [x] API GET /api/garderie
- [x] API GET /api/services
- [x] API GET /api/activites
- [x] Dockerfile frontend et backend
- [x] Docker Compose
- [x] Test automatique réussi : 1 test, 0 échec
- [x] Premier commit Git local

## Lancer l'application
Depuis la racine du projet :

    docker compose up --build -d

Vérifier les conteneurs :

    docker compose ps

## Accès pendant le développement
Frontend : http://192.168.10.129:3006

Backend : http://192.168.10.129:4002

## Travail restant
- [ ] Publier le code sur GitHub
- [ ] Créer le pipeline Jenkins
- [ ] Publier les images sur Docker Hub
- [ ] Créer et démarrer la VM Vagrant
- [ ] Configurer le provisioning avec Ansible
- [ ] Déployer l'application dans la VM
- [ ] Ajouter les captures d'écran demandées

## Captures d'écran
Les captures seront ajoutées dans le dossier screenshots/.

## Conclusion
Le frontend, le backend, les trois API REST, Docker Compose et le test automatique sont réalisés. Les étapes Jenkins, Docker Hub, Vagrant, Ansible et le déploiement final restent à terminer.
