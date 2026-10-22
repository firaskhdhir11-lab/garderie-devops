import Image from "next/image";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

const API_URL = process.env.API_URL || "http://127.0.0.1:4000";

async function getApi(path, fallback) {
  try {
    const response = await fetch(`${API_URL}${path}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Impossible de charger ${path}:`, error.message);
    return fallback;
  }
}

function Navbar({ nom }) {
  return (
    <nav className={styles.navbar}>
      <a href="#accueil" className={styles.brand}>
        <span className={styles.logo}>MG</span>
        <span>
          <strong>{nom}</strong>
          <small>Grandir avec le sourire</small>
        </span>
      </a>

      <div className={styles.links}>
        <a href="#accueil">Accueil</a>
        <a href="#services">Nos services</a>
        <a href="#activites">Activités</a>
      </div>

      <a href="#contact" className={styles.contactButton}>
        Nous contacter
      </a>
    </nav>
  );
}

function Hero({ garderie }) {
  return (
    <section className={styles.hero} id="accueil">
      <div>
        <p className={styles.label}>BIENVENUE CHEZ {garderie.nom.toUpperCase()}</p>

        <h1>
          Chaque jour, une <span>nouvelle aventure.</span>
        </h1>

        <p className={styles.description}>{garderie.description}</p>

        <p className={styles.description}>
          Horaires : {garderie.horaires}
        </p>

        <a href="#services" className={styles.primaryButton}>
          Découvrir nos services →
        </a>
      </div>

      <div className={styles.heroImage}>
        <Image
          src="/garderie.svg"
          alt="Illustration d'une garderie pour enfants"
          width={600}
          height={450}
          priority
        />
      </div>
    </section>
  );
}

function Services({ services }) {
  return (
    <section className={styles.services} id="services">
      <p className={styles.label}>NOS SERVICES</p>
      <h2>Tout pour bien <span>grandir</span></h2>

      <div className={styles.grid}>
        {services.map((service) => (
          <article className={styles.card} key={service.id}>
            <h3>{service.nom}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Activites({ activites }) {
  return (
    <section className={styles.services} id="activites">
      <p className={styles.label}>NOS ACTIVITÉS</p>
      <h2>Apprendre en <span>s&apos;amusant</span></h2>

      <div className={styles.grid}>
        {activites.map((activite) => (
          <article className={styles.card} key={activite.id}>
            <h3>{activite.nom}</h3>
            <p>Catégorie : {activite.categorie}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default async function Home() {
  const [garderie, services, activites] = await Promise.all([
    getApi("/api/garderie", {
      nom: "Ma Garderie",
      description: "Un espace chaleureux pour apprendre, jouer et grandir.",
      horaires: "Du lundi au vendredi, de 7h30 à 17h30",
    }),
    getApi("/api/services", []),
    getApi("/api/activites", []),
  ]);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Navbar nom={garderie.nom} />
        <Hero garderie={garderie} />
        <Services services={services} />
        <Activites activites={activites} />

        <footer className={styles.footer} id="contact">
          <strong>{garderie.nom}</strong>
          <span>© {new Date().getFullYear()} {garderie.nom}</span>
          <a href="mailto:contact@magarderie.tn">Nous contacter</a>
        </footer>
      </div>
    </main>
  );
}
