# PredictPriceAI (PrixMarché) 🇨🇲

**PredictPriceAI** est une plateforme moderne d'analyse et de prédiction des prix des denrées alimentaires sur les marchés camerounais. Elle combine une interface utilisateur haut de gamme avec des outils d'intelligence artificielle pour aider les consommateurs et les commerçants à anticiper les fluctuations du marché.

## 🚀 Fonctionnalités

- **Catalogue en Temps Réel** : Suivez le prix des produits (Maïs, Riz, Manioc, etc.) sur différents marchés (Yaoundé, Douala, Garoua...).
*   **Analyse Prédictive** : Utilisez nos modèles IA (Prophet) pour estimer les prix futurs avec un haut degré de fiabilité (94%+).
*   **Console Admin** : Espace sécurisé pour la gestion des données, le réentraînement des modèles et le suivi des performances (MAE, RMSE).
*   **Design Responsive** : Expérience fluide sur mobile (Application style) et desktop (Dashboard style).

## 🛠️ Stack Technique

- **Framework** : [Next.js 15](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Visualisation** : [Recharts](https://recharts.org/)
- **Iconographie** : [Lucide React](https://lucide.dev/)
- **Composants** : [Radix UI](https://www.radix-ui.com/)

## 📁 Structure du Projet

```bash
├── app/                  # Routes et Pages (Next.js App Router)
│   ├── admin/            # Routes d'administration (Login, Dashboard)
│   ├── prediction/       # Route de l'outil de prédiction
│   └── layout.tsx        # Layout global avec Navbar responsive
├── components/           # Composants UI partagés
│   ├── common/           # Navbar, Footer
│   └── ui/               # Primitives (PriceCard, etc.)
├── features/             # Logique métier par domaine
│   ├── market/           # Catalogue et prix
│   ├── prediction/       # Outil de prédiction
│   └── admin/            # Console d'administration
├── data/                 # Données mockées et constantes
└── public/               # Assets statiques (SVG, images)
```

## 🏁 Démarrage Rapide

1.  **Installer les dépendances** :
    ```bash
    npm install
    ```

2.  **Lancer le serveur de développement** :
    ```bash
    npm run dev -p 3011
    ```

3.  **Accéder à l'application** :
    Ouvrez [http://localhost:3011](http://localhost:3011) dans votre navigateur.

## 📈 Roadmap

- [ ] Connexion au backend réel (API FastAPI/Node.js).
- [ ] Exportation des rapports de prix en PDF/CSV.
- [ ] Notifications push pour les alertes de prix.
- [ ] Intégration de modèles de prédiction plus complexes (LSTM/XGBoost).

---

## 🌐 Guide des Pages et URLs

Voici les différentes pages accessibles dans l'application :

| Page | URL (Local) | Description |
| :--- | :--- | :--- |
| **Accueil / Catalogue** | [http://localhost:3011/](http://localhost:3011/) | Liste des prix et catégories. |
| **Outil de Prédiction** | [http://localhost:3011/prediction](http://localhost:3011/prediction) | Interface d'analyse IA. |
| **Connexion Admin** | [http://localhost:3011/admin/login](http://localhost:3011/admin/login) | Authentification sécurisée. |
| **Mot de passe oublié** | [http://localhost:3011/admin/forgot-password](http://localhost:3011/admin/forgot-password) | Récupération de compte. |
| **Dashboard Admin** | [http://localhost:3011/admin/dashboard](http://localhost:3011/admin/dashboard) | Console de gestion des données. |

## 🔑 Accès Test (Admin)

Pour tester la console d'administration, utilise les identifiants par défaut suivants :

- **Identifiant** : `admin@predictprice.ai`
- **Mot de passe** : `admin123`

---
Développé avec ❤️ par l'equipe Free team
 
