
import { useMemo, useState } from "react";
import "./App.css";
import PLACES from "./places_original.js";
import OsakaMap from "./OsakaMap";


const translations = {
  es: {
    home: "Inicio",
    explore: "Explorar",
    favorites: "Favoritos",
    welcome: "関西へようこそ · BIENVENIDO A KANSAI",
    heroTitle: "Descubre el alma",
    heroAccent: "de Osaka.",
    heroDescription:
      "Historia milenaria, calles llenas de vida y sabores que recordarás para siempre.",
    exploreCity: "Explorar la ciudad",
    adventure: "TU PRÓXIMA AVENTURA",
    introTitle: "Una ciudad.",
    introAccent: "Mil historias.",
    introDescription:
      "Desde castillos históricos hasta callejones gastronómicos, encuentra esos rincones que hacen de Osaka un lugar único.",
    featured: "LUGARES DESTACADOS",
    exploreOsaka: "Explora Osaka",
    search: "Busca un lugar por nombre...",
    discover: "Descubrir lugar",
    personal: "TU VIAJE, A TU MANERA",
    personalTitle: "Tu Osaka personal.",
    saved: "Has guardado",
    place: "lugar",
    places: "lugares",
    empty: "No encontramos lugares. Prueba con otra búsqueda.",
    all: "Todos",
    categories: {
      historic: "Historia",
      park: "Parques",
      food: "Gastronomía",
      shopping: "Compras",
      hotel: "Hoteles",
      night: "Vida nocturna",
      otaku: "Anime y videojuegos",
    },
    footer: "大阪から、心に残る旅を。 · Un viaje para recordar.",
  },
  en: {
    home: "Home",
    explore: "Explore",
    favorites: "Favorites",
    welcome: "関西へようこそ · WELCOME TO KANSAI",
    heroTitle: "Discover the soul",
    heroAccent: "of Osaka.",
    heroDescription:
      "Ancient history, lively streets, and flavors you'll remember forever.",
    exploreCity: "Explore the city",
    adventure: "YOUR NEXT ADVENTURE",
    introTitle: "One city.",
    introAccent: "A thousand stories.",
    introDescription:
      "From historic castles to food-filled alleyways, discover what makes Osaka unique.",
    featured: "FEATURED PLACES",
    exploreOsaka: "Explore Osaka",
    search: "Search places by name...",
    discover: "Discover place",
    personal: "YOUR TRIP, YOUR WAY",
    personalTitle: "Your personal Osaka.",
    saved: "You've saved",
    place: "place",
    places: "places",
    empty: "No places found. Try another search.",
    all: "All",
    categories: {
      historic: "History",
      park: "Parks",
      food: "Food",
      shopping: "Shopping",
      hotel: "Hotels",
      night: "Nightlife",
      otaku: "Anime & Gaming",
    },
    footer: "大阪から、心に残る旅を。 · A trip to remember.",
  },
  zh: {
    home: "首页",
    explore: "探索",
    favorites: "收藏",
    welcome: "関西へようこそ · 欢迎来到关西",
    heroTitle: "探索大阪的灵魂",
    heroAccent: "感受大阪。",
    heroDescription: "悠久的历史、热闹的街道，以及令人难忘的美食。",
    exploreCity: "探索城市",
    adventure: "你的下一场冒险",
    introTitle: "一座城市。",
    introAccent: "万千故事。",
    introDescription: "从历史城堡到美食小巷，发现大阪独特的魅力。",
    featured: "精选景点",
    exploreOsaka: "探索大阪",
    search: "搜索景点名称...",
    discover: "探索景点",
    personal: "打造你的旅程",
    personalTitle: "专属你的大阪。",
    saved: "你已收藏",
    place: "个景点",
    places: "个景点",
    empty: "没有找到景点，请尝试其他搜索。",
    all: "全部",
    categories: {
      historic: "历史",
      park: "公园",
      food: "美食",
      shopping: "购物",
      hotel: "酒店",
      night: "夜生活",
      otaku: "动漫与游戏",
    },
    footer: "大阪から、心に残る旅を。 · 一段难忘的旅程。",
  },
};

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [language, setLanguage] = useState("es");

  const t = translations[language];

  const categories = [
    "all",
    "historic",
    "park",
    "food",
    "shopping",
    "hotel",
    "night",
    "otaku",
  ];

  const filteredPlaces = useMemo(() => {
    return PLACES.filter((place) => {
      const localized = place[language] || place.es;

      const searchableText = [
        localized.name,
        localized.cat,
        localized.desc,
        place.en?.name,
        place.es?.name,
        place.zh?.name,
        place.id,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(
        search.trim().toLowerCase(),
      );

      const matchesCategory =
        category === "all" || place.cat === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category, language]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favorite) => favorite !== id)
        : [...current, id],
    );
  }

  function openPlace(place) {
    const localized = place[language] || place.es;
    const url = localized.mapLink;

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#inicio">
          <span className="brand-mark">大</span>
          <span>
            <strong>OSAKA</strong>
            <small>旅の案内 · TRAVEL GUIDE</small>
          </span>
        </a>

        <nav>
          <a href="#inicio">{t.home}</a>
          <a href="#lugares">{t.explore}</a>
          <a href="#favoritos">
            {t.favorites} ({favorites.length})
          </a>
        </nav>

        <div className="language-switch" aria-label="Language">
          {[
            ["es", "ES"],
            ["en", "EN"],
            ["zh", "中文"],
          ].map(([code, label]) => (
            <button
              key={code}
              type="button"
              className={language === code ? "active" : ""}
              onClick={() => setLanguage(code)}
              aria-pressed={language === code}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="eyebrow">{t.welcome}</span>
            <h1>
              {t.heroTitle}
              <br />
              <span>{t.heroAccent}</span>
            </h1>
            <p>{t.heroDescription}</p>
            <a className="hero-button" href="#lugares">
              {t.exploreCity} <span>↗</span>
            </a>
          </div>

          <div className="hero-bottom">
            <span>34° 41′ N — 135° 30′ E</span>
            <span>大阪府 · JAPAN</span>
          </div>
        </section>

        <section className="intro" id="lugares">
          <div>
            <span className="section-kicker">{t.adventure}</span>
            <h2>
              {t.introTitle}
              <br />
              {t.introAccent}
            </h2>
          </div>
          <p>{t.introDescription}</p>
        </section>

        <section className="explore">
 <OsakaMap
  places={filteredPlaces}
  language={language}
/>
          <div className="explore-heading">
            <div>
              <span className="section-kicker">{t.featured}</span>
              <h2>{t.exploreOsaka}</h2>
            </div>
            <span className="place-count">
              {String(filteredPlaces.length).padStart(2, "0")}{" "}
              {language === "zh" ? "个景点" : "PLACES"}
            </span>
          </div>

          <input
            className="search-input"
            type="search"
            placeholder={t.search}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label={t.search}
          />

          <div className="filters">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={`filter ${category === item ? "active" : ""}`}
                onClick={() => setCategory(item)}
              >
                {item === "all" ? t.all : t.categories[item]}
              </button>
            ))}
          </div>

          <div className="places-grid">
            {filteredPlaces.map((place) => {
              const localized = place[language] || place.es;
              const english = place.en || localized;
              const isFavorite = favorites.includes(place.id);

              return (
                <article
  className="place-card"
  id={`place-${place.id}`}
  key={place.id}
>


                  <div className="place-image">
                    <img
                      src={place.photoUrl?.trim()}
                      alt={localized.name}
                      loading="lazy"
                    />

                    <span className="place-category">
                      {t.categories[place.cat] || localized.cat}
                    </span>

                    <button
                      type="button"
                      className={`favorite-button ${
                        isFavorite ? "selected" : ""
                      }`}
                      onClick={() => toggleFavorite(place.id)}
                      aria-label={
                        isFavorite
                          ? "Quitar de favoritos"
                          : "Añadir a favoritos"
                      }
                      aria-pressed={isFavorite}
                    >
                      {isFavorite ? "♥" : "♡"}
                    </button>
                  </div>

                  <div className="place-info">
                    <span className="place-japanese">
                      {language === "en"
                        ? place.ja?.name || localized.name
                        : localized.name}
                    </span>

                    <h3>{english.name}</h3>
                    <p>{localized.desc}</p>

                    <button
                      type="button"
                      className="details-button"
                      onClick={() => openPlace(place)}
                    >
                      {t.discover} <span>↗</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredPlaces.length === 0 && (
            <p className="empty-state">{t.empty}</p>
          )}
        </section>

        <section className="favorites-section" id="favoritos">
          <span className="section-kicker">{t.personal}</span>
          <h2>{t.personalTitle}</h2>
          <p>
            {t.saved} {favorites.length}{" "}
            {favorites.length === 1 ? t.place : t.places}.
          </p>

          {favorites.length > 0 && (
            <div className="favorite-list">
              {PLACES.filter((place) =>
                favorites.includes(place.id),
              ).map((place) => (
                <button
                  type="button"
                  key={place.id}
                  onClick={() => openPlace(place)}
                >
                  ♥ {place[language]?.name || place.es.name}
                </button>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer>
        <a className="footer-brand" href="#inicio">
          OSAKA 旅の案内
        </a>
        <span>{t.footer}</span>
        <span>© 2026 Osaka Tourism</span>
      </footer>
    </div>
  );
}

export default App;
