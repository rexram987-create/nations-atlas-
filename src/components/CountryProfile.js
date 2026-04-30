function getLocalizedText(value, lang = "he") {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.he || value.en || "";
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
        ${renderSection("גאוגרפיה", getLocalizedText(sections.geography, lang))}
        ${renderSection("דמוגרפיה", getLocalizedText(sections.demographics, lang))}
        ${renderSection("היסטוריה", getLocalizedText(sections.history, lang))}
        ${renderSection("אטימולוגיה", getLocalizedText(sections.etymology, lang))}
        ${sections.symbols ? renderSection("סמלים ודגל", getLocalizedText(sections.symbols.flagMeaning || sections.symbols, lang)) : ""}
        ${sections.leader ? renderSection("דמות מכוננת", getLocalizedText(sections.leader.achievements || sections.leader, lang)) : ""}
        ${sections.cartography?.map ? `
          <section class="rounded-2xl border border-gray-800 bg-gray-900/80 p-6 shadow-lg">
            <h3 class="mb-3 text-2xl font-bold text-white">${getLocalizedText(sections.cartography.title, lang)}</h3>
            <img class="mt-4 w-full rounded-2xl border border-gray-700" src="${sections.cartography.map}" alt="${getLocalizedText(sections.cartography.title, lang)}">
            <p class="mt-4 text-lg leading-relaxed text-gray-300">${getLocalizedText(sections.cartography.description, lang)}</p>
          </section>
        ` : ""}
      </div>
    </article>
  `;
}

export default renderCountryProfile;
