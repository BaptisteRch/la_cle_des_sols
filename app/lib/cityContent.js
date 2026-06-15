// app/lib/cityContent.js
// Contenu des pages villes : variation déterministe (anti-duplicate) +
// surcharge sur-mesure pour les villes prioritaires (SEO local fort).
import { FEATURED_CITY_SLUGS } from "./cities";

export function isFeatured(slug) {
  return FEATURED_CITY_SLUGS.includes(slug);
}

// Hash déterministe (même ville => même variante à chaque build)
function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function pick(list, slug, salt = 0) {
  return list[(hash(slug) + salt) % list.length];
}

// ───────────────────────────────────────────────────────────
// Surcharge manuelle pour les villes prioritaires.
// Remplis `intro` (string) et/ou `reasons` (array de {title, text}).
// Tout champ absent retombe sur la variation automatique.
// ───────────────────────────────────────────────────────────
export const CITY_CONTENT = {
  "saint-etienne": {
    intro:
      "Basée à Saint-Étienne, La Clé des Sols est votre entreprise de propreté de proximité. Nous accompagnons depuis plus de 20 ans les entreprises, commerces, copropriétés et particuliers stéphanois pour l'entretien régulier de leurs locaux, le nettoyage de vitres, la remise en état des sols et le nettoyage de fin de chantier.",
  },
  roanne: {
    intro:
      "La Clé des Sols intervient à Roanne et dans le Roannais pour tous vos besoins de nettoyage professionnel : bureaux, commerces, locaux industriels, copropriétés et habitations. Une équipe réactive, du matériel professionnel et un travail soigné, au service des entreprises et particuliers du nord de la Loire.",
  },
  montbrison: {
    intro:
      "Entreprise de nettoyage active à Montbrison et dans la plaine du Forez, La Clé des Sols assure l'entretien de vos locaux professionnels et de vos espaces de vie : nettoyage régulier, vitres, sols et remise en état après travaux, avec une intervention rapide dans tout le secteur.",
  },
  lyon: {
    intro:
      "La Clé des Sols étend ses prestations de nettoyage professionnel à Lyon et son agglomération. Bureaux, commerces, bases de vie de chantier, fin de chantier ou entretien régulier : nous mettons à votre service des équipes formées et un suivi rigoureux pour des locaux toujours impeccables.",
  },
  "saint-chamond": {
    intro:
      "À Saint-Chamond et dans la vallée du Gier, La Clé des Sols prend en charge le nettoyage de vos locaux professionnels, commerces et habitations. Entretien régulier, vitrerie, remise en état des sols et nettoyage de fin de chantier : une prestation claire, fiable et adaptée à vos besoins.",
  },
};

const BASE = "Saint-Étienne";

// ── Variantes automatiques d'intro (pour la longue traîne) ──
const INTRO_VARIANTS = [
  (c) =>
    `La Clé des Sols, entreprise de propreté basée à ${BASE}, intervient à ${c.name} et dans le secteur ${c.area} pour le nettoyage de vos locaux professionnels, commerces et habitations. Entretien régulier, vitres, sols et fin de chantier : une prestation soignée et adaptée à chaque besoin.`,
  (c) =>
    `Vous cherchez une entreprise de nettoyage à ${c.name} ? La Clé des Sols accompagne entreprises, copropriétés et particuliers du ${c.area} avec des prestations fiables : nettoyage régulier, vitrerie, remise en état des sols et nettoyage de fin de chantier.`,
  (c) =>
    `Depuis Saint-Étienne, La Clé des Sols rayonne dans tout le ${c.area} et intervient à ${c.name} pour l'entretien de vos espaces. Bureaux, commerces, chantiers ou domicile : des équipes formées, du matériel professionnel et un travail méticuleux.`,
  (c) =>
    `À ${c.name} (${c.area}), confiez l'entretien de vos locaux à La Clé des Sols. Notre entreprise familiale assure le nettoyage régulier, le lavage de vitres, la remise en état des sols et le nettoyage après travaux, avec réactivité et sérieux.`,
];

const REASONS_VARIANTS = [
  [
    { title: "Proximité", text: "Une équipe locale qui intervient rapidement." },
    { title: "20 ans d'expérience", text: "Professionnels et particuliers." },
    { title: "Devis gratuit", text: "Réponse rapide, sans engagement." },
    { title: "Travail soigné", text: "Matériel et produits professionnels." },
  ],
  [
    { title: "Réactivité", text: "Intervention possible sous 48h." },
    { title: "Sur-mesure", text: "Une prestation adaptée à vos locaux." },
    { title: "Fiabilité", text: "Un suivi régulier et constant." },
    { title: "Polyvalence", text: "Du bureau au chantier, tous types de sites." },
  ],
  [
    { title: "Équipe formée", text: "Des agents qualifiés et encadrés." },
    { title: "Tarifs clairs", text: "Un devis détaillé et transparent." },
    { title: "Hygiène", text: "Des espaces sains au quotidien." },
    { title: "Engagement local", text: "Au service du secteur depuis 20 ans." },
  ],
];

export function getIntro(city) {
  const custom = CITY_CONTENT[city.slug]?.intro;
  if (custom) return custom;
  return pick(INTRO_VARIANTS, city.slug)(city);
}

export function getReasons(city) {
  const custom = CITY_CONTENT[city.slug]?.reasons;
  if (custom) return custom;
  return pick(REASONS_VARIANTS, city.slug);
}
