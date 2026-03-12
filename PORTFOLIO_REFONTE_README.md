# PORTFOLIO REFONTE — Instructions complètes pour LLM

## Contexte

Tu travailles sur le portfolio Next.js d'**Aristide Gaël Kouandja Kenfack**, développeur Full Stack & DevOps, 19 ans, basé à Douala, Cameroun.

Le portfolio est déployé sur : https://porfolio-pdkp.vercel.app/
Stack : Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion

---

## Objectif

Refonte complète du portfolio pour le rendre **sobre, professionnel et orienté recruteur/université**. Aristide postule dans des universités en France (candidatures en cours, accusés de réception reçus). Le design doit refléter un profil d'ingénieur sérieux.

---

## Design System — À respecter sur TOUTES les pages

```
Polices (Google Fonts) :
  - Titres    : Syne (700, 800)
  - Corps     : DM Sans (300, 400, 500, 600)
  - Code/tags : DM Mono (400, 500)

Palette de couleurs :
  --bg       : #06080f     (fond principal)
  --surface  : #0c1018     (cartes)
  --border   : #151c28     (bordures subtiles)
  --border2  : #1e2a38     (bordures hover)
  --amber    : #f59e0b     (accent principal)
  --text     : #f1f5f9     (titres)
  --muted    : #94a3b8     (corps)
  --dim      : #475569     (texte secondaire)
  --faint    : #64748b     (labels)
  --mono     : #334155     (séparateurs)

Couleurs tech (pills/badges uniquement) :
  React/Next.js  : #38bdf8  bg #061624  border #0c2d3e
  React Native   : #a78bfa  bg #120a22  border #2d1b4e
  Laravel/PHP    : #f87171  bg #180808  border #3d1515
  TypeScript     : #60a5fa  bg #06101e  border #1a2f4e
  Docker/DevOps  : #2dd4bf  bg #041814  border #0d3530
  Spring Boot    : #86efac  bg #04180a  border #0d3018
  Amber/Typesense: #f59e0b  bg rgba(245,158,11,.08)  border rgba(245,158,11,.25)
  Neutre         : #64748b  bg #0a1020  border #1e2a38

Radius : 14px pour les cartes, 10px pour éléments internes, 20px pour les pills
Import fonts :
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600&family=DM+Mono:wght@400;500&display=swap');
```

---

## Page 1 — Hero / Accueil (`app/(with-navbar)/page.tsx`)

### Éléments obligatoires

- **Fond** : `#06080f` avec grille CSS subtile (lignes à 1px, opacité 0.02) + orbe ambiant amber flou en haut à droite
- **Tag d'intro** (DM Mono, amber, uppercase, letter-spacing) : `Ouvert aux opportunités · Douala, Cameroun`
- **Nom** (Syne 800, clamp 2.8rem–6.5rem) : `Aristide` retour ligne `Kenfack` (Kenfack en amber)
- **Typewriter animé** sur ces rôles (dans l'ordre) :
  - Développeur Full Stack
  - Ingénieur DevOps
  - Architecte React / Next.js
  - Développeur React Native
- **Description** : 19 ans, applications web et mobiles performantes, rigueur DevOps. Actuellement Frontend Dev & DevOps chez **Iziway Cameroun** + étudiant en Licence Technologique IUT Douala
- **CTAs** :
  - Bouton primaire amber → `/myProjets`
  - Bouton secondaire outline → lien PDF du CV
- **Liens sociaux** : GitHub (`https://github.com/ARISTIDE-CMD`), LinkedIn (`https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/`), Email (`aristidegaelkouandjakenfack@gmail.com`)
- **Pills tech** flottants à droite (desktop) : React/Next.js, React Native, Laravel/PHP, TypeScript, Docker · CI/CD, Spring Boot, Node.js
- **Barre de stats** en bas (border-top sombre, backdrop-blur) :
  - `2+` ans d'expérience
  - `5+` projets livrés
  - `−30%` latence Typesense
  - `DevOps` CI/CD · Docker

---

## Page 2 — À propos (`app/(with-navbar)/about/page.tsx`)

### Infos personnelles header
- Nom complet, Douala Cameroun, né le 02/08/2006, lien portfolio
- Citation/bio (border-left amber) : profil orienté architecture logicielle et DevOps

### Expériences (cartes avec couleur d'accent)

**Expérience 1 — Iziway Cameroun** (amber, border `rgba(245,158,11,.2)`)
- Poste : Développeur Frontend & DevOps
- Période : Novembre 2025 → Présent | Type : CDI
- Lieu : Akwa, Douala
- Bullets :
  - Optimisation du moteur de recherche Typesense — latence réduite de 30 %
  - Mise en place d'un système de monitoring pour la détection d'incidents en temps réel
  - Automatisation des pipelines de déploiement (CI/CD) via GitLab
  - Collaboration transverse avec l'équipe produit pour intégrer de nouvelles fonctionnalités
- Stack pills : Next.js, Tailwind, Typesense, Docker, GitLab CI

**Expérience 2 — Resa and Pay** (sky, border `rgba(56,189,248,.15)`)
- Poste : Développeur Full Stack
- Période : Juin 2025 → Septembre 2025 | Type : Stage
- Lieu : Ndokoti, Douala
- Bullets :
  - Conception et développement d'une app de livraison complète (commandes, suivi temps réel, livreurs)
  - API REST sécurisée avec Laravel pour la gestion centralisée des données
  - Interfaces React Native avec gestion d'états, filtres dynamiques et upload de fichiers
- Stack pills : React Native, Laravel, MySQL, REST API

### Formation (timeline verticale, border-left sombre, dots amber)

1. **Licence Technologique** | Oct 2025 → En cours | IUT Douala | Douala, Cameroun
2. **DTS Génie Logiciel** | Oct 2023 → Juin 2025 | IAI Cameroun | Yaoundé, Cameroun
3. **Baccalauréat C** | 2022 → 2023 | Lycée de Maképé | Douala, Cameroun

---

## Page 3 — Compétences (`app/(with-navbar)/competences/page.tsx`)

### 4 cartes en grille 2×2

**Carte 1 — Langages**
| Skill | Niveau | % |
|-------|--------|---|
| TypeScript | Expert | 90 |
| JavaScript | Expert | 90 |
| PHP | Avancé | 80 |
| Java | Avancé | 72 |
| HTML / CSS | Expert | 95 |

**Carte 2 — Frameworks & Librairies**
| Skill | Niveau | % |
|-------|--------|---|
| React / Next.js | Expert | 92 |
| React Native | Avancé | 82 |
| Laravel | Avancé | 80 |
| Spring Boot | Avancé | 70 |
| Tailwind CSS | Expert | 90 |
| Node.js | Avancé | 72 |

**Carte 3 — DevOps & Outils**
| Skill | Niveau | % |
|-------|--------|---|
| Docker | Avancé | 78 |
| CI/CD (GitLab · Jenkins) | Avancé | 75 |
| GitHub / GitLab / Azure DevOps | Avancé | 85 |
| SonarQube | Intermédiaire | 65 |
| Postman | Avancé | 85 |

**Carte 4 — Bases de données & Moteurs de recherche**
| Skill | Niveau | % |
|-------|--------|---|
| MySQL / PostgreSQL | Avancé | 80 |
| MongoDB | Avancé | 68 |
| Supabase / Firebase | Avancé | 72 |
| Typesense / Algolia | Avancé | 75 |

### Section transverses (pills en bas)
Architecture logicielle (Merise · UML), API REST & GraphQL, Sécurité & Auth (JWT · Spring Security), Leadership & travail en équipe, Veille technologique

### Couleurs des niveaux
- Expert : amber (`#f59e0b`) — barre amber
- Avancé : sky (`#38bdf8`) — barre sky
- Intermédiaire : slate (`#64748b`) — barre slate

### Animation
Barres animées au chargement : `@keyframes bar-grow { from { width: 0 } }` avec `animation-delay` croissant

---

## Page 4 — Projets (`app/myProjets/page.tsx`)

### Structure : 2 projets Featured (grille 2 col desktop) + 2 projets standards

---

### PROJET FEATURED 1 — Application de Livraison Full Stack

- **Badge** : Featured (amber)
- **Description** : Plateforme complète de livraison avec suivi en temps réel. Mobile React Native côté client & livreur, API Laravel sécurisée en backend.
- **Impact badge** (emerald) : ✦ Déployée en production chez Resa and Pay
- **Stack** : React Native, Laravel, MySQL, API REST, JWT
- **Liens** :
  - GitHub Front : https://github.com/KM-Solutions-SARL/livraison-mobile
  - GitHub Back : https://github.com/KM-Solutions-SARL/livraison

---

### PROJET FEATURED 2 — Optimisation Moteur de Recherche — Iziway

- **Badge** : Featured (amber)
- **Description** : Audit et refonte de l'intégration Typesense sur la plateforme Iziway Cameroun. CI/CD automatisé, monitoring temps réel.
- **Impact badge** (emerald) : ✦ −30 % de latence, incidents résolus en temps réel
- **Stack** : Typesense, Next.js, Docker, GitLab CI, Monitoring
- **Pas de lien GitHub** (projet privé)

---

### PROJET LIVE 3 — SirTech (Plateforme de gestion)

- **Badge** : Live ↗ (sky/teal)
- **Titre** : SirTech — Plateforme de gestion
- **Description** : Application web complète de gestion d'entreprise. Authentification sécurisée, tableau de bord, modules métiers. Déployée et accessible en ligne.
- **Impact badge** (sky) : ✦ Hébergé en production sur Netlify
- **Stack** : React/Next.js, API REST, Auth JWT
- **Lien démo en ligne** : https://sirtech.netlify.app/
  - *(Credentials de démo : email `admin@sirtech.com` — password `Admin@123`)*
- **Bouton** : "Voir le projet ↗" → ouvre https://sirtech.netlify.app/ dans un nouvel onglet

---

### PROJET LIVE 4 — GesticomERP (ERP complet)

- **Badge** : Live ↗ (violet)
- **Titre** : GesticomERP — Système ERP
- **Description** : Système ERP complet pour la gestion commerciale et opérationnelle d'entreprise. Modules : stocks, commandes, facturation, reporting. Interface intuitive et responsive.
- **Impact badge** (violet) : ✦ ERP multi-modules en production
- **Stack** : React/Next.js, API REST, MySQL, Auth
- **Lien démo en ligne** : https://gesticomerp.netlify.app/
  - *(Credentials de démo : email `admin@moligeerp.com` — password `Admin@123`)*
- **Bouton** : "Voir le projet ↗" → ouvre https://gesticomerp.netlify.app/ dans un nouvel onglet

---

### PROJET STANDARD 5 — Plateforme de Vote en Ligne

- **Description** : Application web sécurisée pour le vote électronique. Gestion complète du processus électoral.
- **Stack** : React / Next.js, PHP, JavaScript
- **GitHub** : https://github.com/KM-Solutions-SARL/vote-en-ligne

---

### PROJET STANDARD 6 — Outil de Travail Collaboratif

- **Description** : App web d'équipe : partage de fichiers, messagerie interne, collaboration en ligne. UX/UI Figma.
- **Stack** : React, Backend Custom, UI/UX, Figma
- **GitHub Front** : https://github.com/ARISTIDE-CMD/Club-infos-frontend
- **GitHub Back** : https://github.com/ARISTIDE-CMD/Club-infos-backend
- **Démo** : https://drive.google.com/file/d/1oC6NsyEMfauJqJcGxRScjh1Cr6VMaw6J/view

---

## Composant Card Projet — Spec technique

```tsx
interface Project {
  title: string;
  description: string;
  impact?: string;            // texte dans badge emerald/sky/violet
  impactColor?: string;       // 'emerald' | 'sky' | 'violet'
  tags: string[];
  featured?: boolean;
  live?: boolean;             // true si hébergé en prod avec URL
  liveUrl?: string;
  liveCredentials?: { email: string; password: string };
  githubFront?: string;
  githubBack?: string;
  demo?: string;
}
```

### Règle d'affichage des boutons
1. Si `liveUrl` → bouton primaire "Voir le projet ↗" (target _blank)
2. Si `githubFront` → icône Github + "Front" ou "GitHub"
3. Si `githubBack` → icône Github + "Back"
4. Si `demo` → icône Play + "Démo"

### Pour les projets Live, ajouter un badge "Live" dans le coin supérieur droit
```tsx
<span className="... bg-teal-950/40 text-teal-400 border-teal-900">
  Live ↗
</span>
```

---

## Navbar (`components/navbar.tsx`)

Conserver la navbar existante MAIS :
- Remplacer `font-family` par `Syne` pour le brand
- S'assurer que le lien `/myProjets` est présent dans les links (label : "Projets")
- Lien `/competences` présent (label : "Compétences")
- Supprimer ou garder désactivé le bouton Login

Links à avoir : Accueil `/` · Services `/services` · Compétences `/competences` · Projets `/myProjets` · Contact `/contact`

---

## Informations de contact (pour la page Contact)

```
Email    : aristidegaelkouandjakenfack@gmail.com
Téléphone: +237 680 585 671
Lieu     : Douala, Cameroun
WhatsApp : https://wa.me/237680585671
GitHub   : https://github.com/ARISTIDE-CMD
LinkedIn : https://www.linkedin.com/in/aristide-gael-kouandja-kenfack-571693287/
Facebook : https://www.facebook.com/share/1AitQnWX1n/
```

---

## Règles générales de code

1. **Toujours** inclure l'import des fonts Google en haut du `<style jsx global>`
2. Utiliser `className` Tailwind quand disponible, sinon `style` inline
3. Pas de `localStorage` ni APIs browser dans les composants serveur
4. Toutes les pages sont `"use client"` à cause des animations
5. Animations : `@keyframes` dans `<style jsx>`, pas de librairie externe sauf Framer Motion si déjà installé
6. Les boutons qui ouvrent des URLs externes : `target="_blank" rel="noopener noreferrer"`
7. Les credentials de démo dans les projets sont affichés discrètement (petite note en gris sous le bouton, ou dans un tooltip), pas en gros

---

## Ordre d'implémentation recommandé

1. `app/(with-navbar)/page.tsx` — Hero
2. `app/myProjets/page.tsx` — Projets (avec SirTech + GesticomERP)
3. `app/(with-navbar)/competences/page.tsx` — Skills
4. `app/(with-navbar)/about/page.tsx` — À propos
5. `components/navbar.tsx` — Mettre à jour les liens si nécessaire

---

## Checklist finale avant déploiement

- [ ] Toutes les URLs de projets testées (sirtech.netlify.app + gesticomerp.netlify.app)
- [ ] Typewriter animé fonctionnel sur la Hero
- [ ] Barres de progression animées sur la page Compétences
- [ ] Liens GitHub ouvrent dans un nouvel onglet
- [ ] Design cohérent sur mobile (grille 2 col → 1 col sur mobile)
- [ ] Pas d'erreur TypeScript
- [ ] `next build` sans erreurs
