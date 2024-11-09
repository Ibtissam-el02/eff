const expertsData = [
  {
    id: 1,
    nom_complet: 'Dupont Jean',
    événements: [
      {
        thème: 'Développement Web',
        date_debut: '2024-03-02',
        date_fin: '2024-03-15',
        description: 'Introduction au développement web moderne',
        cout_journalier: 500,
        durée: 13
      },
      {
        thème: 'Applications Mobiles',
        date_debut: '2024-04-01',
        date_fin: '2024-04-15',
        description: 'Conception et développement des applications mobiles',
        cout_journalier: 700,
        durée: 14
      }
    ]
  },
  {
    id: 2,
    nom_complet: 'Martin Claire',
    événements: [
      {
        thème: 'Intelligence Artificielle',
        date_debut: '2024-05-10',
        date_fin: '2024-05-20',
        description: 'Introduction aux réseaux de neurones',
        cout_journalier: 900,
        durée: 10
      },
      {
        thème: 'Machine Learning Avancé',
        date_debut: '2024-06-05',
        date_fin: '2024-06-25',
        description: 'Techniques avancées de machine learning',
        cout_journalier: 1000,
        durée: 20
      }
    ]
  },
  {
    id: 3,
    nom_complet: 'Bernard Paul',
    événements: [
      {
        thème: 'Cyber Sécurité',
        date_debut: '2024-07-01',
        date_fin: '2024-07-10',
        description: 'Introduction à la sécurité informatique',
        cout_journalier: 750,
        durée: 9
      },
      {
        thème: 'Sécurité Réseau',
        date_debut: '2024-08-15',
        date_fin: '2024-08-25',
        description: 'Protection des infrastructures réseau',
        cout_journalier: 800,
        durée: 10
      }
    ]
  },
  {
    id: 4,
    nom_complet: 'Leroy Sophie',
    événements: [
      {
        thème: 'Développement Full Stack',
        date_debut: '2024-09-01',
        date_fin: '2024-09-30',
        description: 'Formation complète sur le développement Full Stack',
        cout_journalier: 600,
        durée: 30
      },
      {
        thème: 'Bases de données NoSQL',
        date_debut: '2024-10-05',
        date_fin: '2024-10-20',
        description: 'Initiation aux bases de données NoSQL',
        cout_journalier: 550,
        durée: 15
      }
    ]
  },
  {
    id: 5,
    nom_complet: 'Dubois Lucas',
    événements: [
      {
        thème: 'Programmation en Python',
        date_debut: '2024-02-01',
        date_fin: '2024-02-10',
        description: 'Cours de base en programmation Python',
        cout_journalier: 400,
        durée: 9
      },
      {
        thème: 'Data Science',
        date_debut: '2024-11-01',
        date_fin: '2024-11-15',
        description: 'Analyse de données et visualisation avec Python',
        cout_journalier: 650,
        durée: 14
      }
    ]
  },
  {
    id: 6,
    nom_complet: 'Garcia Anaïs',
    événements: [
      {
        thème: 'Conception UI/UX',
        date_debut: '2024-03-20',
        date_fin: '2024-03-30',
        description: 'Principes de base de la conception UI/UX',
        cout_journalier: 600,
        durée: 10
      },
      {
        thème: 'Prototypage avec Figma',
        date_debut: '2024-04-20',
        date_fin: '2024-04-25',
        description: 'Utilisation avancée de Figma pour le prototypage',
        cout_journalier: 500,
        durée: 5
      }
    ]
  },
  {
    id: 7,
    nom_complet: 'Rousseau Marc',
    événements: [
      {
        thème: 'Gestion de Projet Agile',
        date_debut: '2024-05-15',
        date_fin: '2024-05-25',
        description: 'Principes de gestion de projet Agile et Scrum',
        cout_journalier: 700,
        durée: 10
      },
      {
        thème: 'Kanban Avancé',
        date_debut: '2024-06-15',
        date_fin: '2024-06-22',
        description: 'Utilisation avancée de Kanban dans la gestion de projet',
        cout_journalier: 650,
        durée: 7
      }
    ]
  },
  {
    id: 8,
    nom_complet: 'Durand Pierre',
    événements: [
      {
        thème: 'Blockchain et Cryptomonnaies',
        date_debut: '2024-07-15',
        date_fin: '2024-07-25',
        description: 'Comprendre la blockchain et ses applications',
        cout_journalier: 1000,
        durée: 10
      },
      {
        thème: 'Smart Contracts',
        date_debut: '2024-08-01',
        date_fin: '2024-08-10',
        description: 'Création de contrats intelligents avec Solidity',
        cout_journalier: 1100,
        durée: 9
      }
    ]
  },
  {
    id: 9,
    nom_complet: 'Petit Emma',
    événements: [
      {
        thème: 'SEO et Marketing Digital',
        date_debut: '2024-02-15',
        date_fin: '2024-02-25',
        description: 'Optimisation pour les moteurs de recherche',
        cout_journalier: 500,
        durée: 10
      },
      {
        thème: 'Publicité en Ligne',
        date_debut: '2024-03-10',
        date_fin: '2024-03-20',
        description: 'Techniques de publicité en ligne efficaces',
        cout_journalier: 600,
        durée: 10
      }
    ]
  },
  {
    id: 10,
    nom_complet: 'Lemoine Jacques',
    événements: [
      {
        thème: 'DevOps et CI/CD',
        date_debut: '2024-04-15',
        date_fin: '2024-04-25',
        description: 'Introduction aux pratiques DevOps',
        cout_journalier: 800,
        durée: 10
      },
      {
        thème: 'Conteneurisation avec Docker',
        date_debut: '2024-05-01',
        date_fin: '2024-05-08',
        description: 'Utilisation avancée de Docker et orchestration',
        cout_journalier: 850,
        durée: 7
      }
    ]
  }
];

export default expertsData;
