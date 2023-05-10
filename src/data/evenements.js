import Zig1 from '../images/zig/zig1.JPG';
import Zig4 from '../images/zig/zig4.JPG';
import Ataya1 from '../images/atayaTech/ataya1.jpg';
import Saax1 from '../images/saaxCat/saax1.jpg';
import Ndogou1 from '../images/ndogouCoding/ndg4.JPG';
import Kenedy1 from '../images/kennedy/kennedy1.jpg';

export const evenements = [
  {
    title: 'Ziguinchor',
    desc: "Invité à ziguinchor au salon de casamance innovation Tech organisé par Erastus Group , Daara IT a eu le plaisir de répondre présent à cet appel qui consiste à discuter sur le thème suivant: investir dans le numérique pour mieux booster l'économie locale",
    createdAt: '10-10-2021',
    image: Zig1,
    views: 16,
  },
  {
    title: 'Supdeco thies',
    desc: 'Dans le but de promouvoir la technologie au niveau national , Daara IT a organisé ce samedi 11 mars à SUPDECO CAMPUS THIÈS un Workshop sur la manipulation des données, un phénomène qui est devenu très fréquent et qui peut affecter la façon dont les gens prennent des décisions, leur compréhension des événements actuels, leur confiance dans les institutions et même leur capacité à exercer leurs droits démocratiques.Ce fut des moments de partage et d’échange enrichissants avec les étudiants de SUPDECO qui n’ont pas manqué a répondu présent à cet atelier.',
    createdAt: '10-10-2021',
    image: Zig4,
    views: 16,
  },
  {
    title: 'Formation IOT',
    desc: 'En 5 jours, les étudiants se sont formés sur la prise en main du module Wifi d’espressif. Ce fut une formation très enrichissante, qui a débuté le lundi 24 Octobre et se termine le vendredi 28 Octobre 2022. Cela a permis aux participants d’avoir des notions de base en IOT, mais également sur la connectivité de ses différents composants.',
    createdAt: '10-10-2021',
    image: Kenedy1,
    views: 16,
  },
  {
    title: 'Ndogou coding 2022',
    desc: 'à la célébration de la 4ème édition du NDOGOU CODING, La communauté Daara IT a organisé  le 23 Avril 2022 un événement  riche en enseignement la programmation orientée objet au rendez-vous avec les formateurs de qualité. Ce fut des moments riches en acquisition de connaissances, d’ échanges entre passionnés IT avec ses différents ateliers notamment la programmation orientée objet animé par Ousseynou Diop de Xarala , l’atelier devops animé par Abdou Karim Diop de @karimux et l’atelier Sur la VoIP et le mobile pentest.',
    createdAt: '10-10-2021',
    image: Ndogou1,
    views: 16,
  },
  {
    title: 'Ataya tech',
    desc: 'Ce fut un après midi très enthousiaste, toujours dans le concept de l’octobre Cyber ,  Daara-IT a organisé un ATAYA-TECH , qui fut un débat très riche entre experts du domaine et discuter sur Comment s’entretenir face aux piratages sur les réseaux. Nous remercions vivement l’Orange Digital Center Sénégal pour cette belle collaboration , Abdoul Aziz Diallo pour l’intervention, de même que pour les scouts qui ont partagé cette audience avec nous avec une belle animation.',
    createdAt: '10-10-2021',
    image: Ataya1,
    views: 16,
  },
  {
    title: 'Atelier avec saxx',
    desc: 'Daara IT , en partenariat avec Colombe Academy of Technology, première académie supérieure de cyberdéfense au Sénégal a proposé 2h de formation / découverte / méthodologie et discussion ouverte autour de la cybersécurité animé par le célèbre Hacker franco-sénégalis Clément Domingo ( SaxX ) accueilli par Colombe Academy of Technologie dans ses locaux',
    createdAt: '10-10-2021',
    image: Saax1,
    views: 16,
  },
];

export const sortedEvents = evenements.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
