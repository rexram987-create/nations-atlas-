function getLocalizedText(value, lang = "he") {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.he || value.en || "";
}

function sectionTitle(section, fallbackTitle, lang = "he") {
  return getLocalizedText(section?.title, lang) || fallbackTitle;
}

function renderSection(title, content) {
  if (!content) return "";

  return `
    <section class="rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-lg">
      <h3 class="mb-3 text-2xl font-bold text-white">${title}</h3>
      <p class="text-lg leading-relaxed text-gray-300">${content}</p>
    </section>
  `;
}

function renderSmallBlock(title, content) {
  if (!content) return "";
  return `
    <div class="rounded-xl border border-gray-800 bg-gray-950/70 p-4">
      <h4 class="mb-2 text-lg font-bold text-white">${title}</h4>
      <p class="leading-relaxed text-gray-300">${content}</p>
    </div>
  `;
}

function renderCapital(country, lang = "he") {
  const capital = country.capital || {};
  const capitalName = getLocalizedText(capital.name, lang);
  const foundingYear = getLocalizedText(capital.foundingYear, lang);
  const etymology = getLocalizedText(capital.etymology, lang);
  const selectionReason = getLocalizedText(capital.selectionReason, lang);

  if (!capitalName && !foundingYear && !etymology && !selectionReason) return "";

  return `
    <section class="rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-lg">
      <h3 class="mb-4 text-2xl font-bold text-white">עיר הבירה</h3>
      <div class="grid gap-4 md:grid-cols-2">
        ${renderSmallBlock("שם הבירה", capitalName)}
        ${renderSmallBlock("שנת ייסוד / אזכור מרכזי", foundingYear)}
        ${renderSmallBlock("אטימולוגיה", etymology)}
        ${renderSmallBlock("סיבת הבחירה", selectionReason)}
      </div>
    </section>
  `;
}

function renderSymbols(symbols, lang = "he") {
  if (!symbols) return "";
  const flagMeaning = getLocalizedText(symbols.flagMeaning || symbols, lang);
  const animalName = getLocalizedText(symbols.nationalAnimal?.name, lang);
  const animalText = getLocalizedText(symbols.nationalAnimal, lang);

  return `
    <section class="rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-lg">
      <h3 class="mb-4 text-2xl font-bold text-white">${sectionTitle(symbols, "סמלים וזהות לאומית", lang)}</h3>
      <div class="grid gap-4 md:grid-cols-2">
        ${renderSmallBlock("משמעות הדגל", flagMeaning)}
        ${renderSmallBlock(animalName ? `חיה לאומית: ${animalName}` : "חיה לאומית", animalText)}
      </div>
    </section>
  `;
}

function renderLeader(leader, lang = "he") {
  if (!leader) return "";
  const name = getLocalizedText(leader.name, lang);
  const years = leader.years || "";
  const childhood = getLocalizedText(leader.childhood, lang);
  const ideology = getLocalizedText(leader.ideology, lang);
  const achievements = getLocalizedText(leader.achievements || leader, lang);

  return `
    <section class="rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-lg">
      <h3 class="mb-4 text-2xl font-bold text-white">דמות מכוננת</h3>
      <div class="mb-4 rounded-xl border border-gray-800 bg-gray-950/70 p-4">
        <h4 class="text-xl font-black text-white">${name}</h4>
        <p class="text-gray-400">${years}</p>
      </div>
      <div class="grid gap-4 md:grid-cols-3">
        ${renderSmallBlock("ילדות ורקע", childhood)}
        ${renderSmallBlock("אידאולוגיה", ideology)}
        ${renderSmallBlock("הישגים מרכזיים", achievements)}
      </div>
    </section>
  `;
}

function renderCartography(cartography, lang = "he") {
  if (!cartography) return "";
  const title = getLocalizedText(cartography.title, lang) || "קרטוגרפיה";
  const description = getLocalizedText(cartography.description, lang);
  const map = cartography.map;

  return `
    <section class="rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-lg">
      <h3 class="mb-3 text-2xl font-bold text-white">${title}</h3>
      ${map ? `
        <img
          class="mt-4 w-full rounded-2xl border border-gray-700"
          src="${map}"
          alt="${title}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
        >
        <p class="mt-4 hidden rounded-xl border border-amber-600/40 bg-amber-950/30 p-4 text-amber-200">
          המפה עדיין לא נמצאה במאגר בשם הקובץ הנוכחי. צריך לעדכן את נתיב התמונה המדויק.
        </p>
      ` : ""}
      <p class="mt-4 text-lg leading-relaxed text-gray-300">${description}</p>
    </section>
  `;
}

export function renderCountryProfile(country, lang = "he") {
  const name = getLocalizedText(country.name, lang);
  const officialName = getLocalizedText(country.officialName, lang);
  const capitalName = getLocalizedText(country.capital?.name, lang);
  const area = getLocalizedText(country.area, lang);
  const currency = getLocalizedText(country.currency, lang);
  const sections = country.sections || {};

  return `
    <article class="overflow-hidden rounded-3xl border border-gray-800 bg-gray-950 shadow-2xl">
      <header class="border-b border-gray-800 bg-gray-900 p-6 md:p-8">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="text-4xl font-black text-white">${name}</h2>
            <p class="mt-2 text-xl text-gray-400">${officialName}</p>
          </div>
          ${country.flag ? `<img class="w-36 rounded-xl border border-gray-700 shadow-lg" src="${country.flag}" alt="${name} flag">` : ""}
        </div>
      </header>

      <div class="grid gap-4 border-b border-gray-800 bg-gray-900/50 p-6 text-gray-300 md:grid-cols-4">
        <div><strong class="text-white">בירה:</strong> ${capitalName}</div>
        <div><strong class="text-white">אוכלוסייה:</strong> ${country.population || ""}</div>
        <div><strong class="text-white">שטח:</strong> ${area}</div>
        <div><strong class="text-white">מטבע:</strong> ${currency}</div>
      </div>

      <div class="grid gap-6 p-6 md:p-8">
        ${renderCapital(country, lang)}
        ${renderSection(sectionTitle(sections.geography, "גאוגרפיה", lang), getLocalizedText(sections.geography, lang))}
        ${renderSection(sectionTitle(sections.demographics, "דמוגרפיה", lang), getLocalizedText(sections.demographics, lang))}
        ${renderSection(sectionTitle(sections.history, "היסטוריה", lang), getLocalizedText(sections.history, lang))}
        ${renderSection(sectionTitle(sections.etymology, "אטימולוגיה", lang), getLocalizedText(sections.etymology, lang))}
        ${renderSymbols(sections.symbols, lang)}
        ${renderLeader(sections.leader, lang)}
        ${renderCartography(sections.cartography, lang)}
      </div>
    </article>
  `;
}

export function renderCountryCard(country, lang = "he") {
  const name = getLocalizedText(country.name, lang);
  const officialName = getLocalizedText(country.officialName, lang);
  const capitalName = getLocalizedText(country.capital?.name, lang);

  return `
    <a href="${country.id}.html" class="group block rounded-3xl border border-gray-800 bg-gray-900 p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-blue-950/40">
      <div class="flex items-center justify-between gap-4">
        <div>
          <h2 class="text-3xl font-black text-white group-hover:text-blue-300">${name}</h2>
          <p class="mt-1 text-gray-400">${officialName}</p>
          <p class="mt-3 text-gray-300"><strong class="text-white">בירה:</strong> ${capitalName}</p>
        </div>
        ${country.flag ? `<img class="w-28 rounded-xl border border-gray-700" src="${country.flag}" alt="${name} flag">` : ""}
      </div>
      <div class="mt-5 font-bold text-blue-300">כניסה לדף המדינה ←</div>
    </a>
  `;
}

export default renderCountryProfile;
