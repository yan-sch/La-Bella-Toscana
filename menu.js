// menu.js - Menu loading functionality for La Bella Toscana

function loadMenu() {
    try {
        if (typeof speisekartenDaten === 'undefined') {
            throw new Error("speisekartenDaten fehlt.");
        }

        const rows = speisekartenDaten.split('\n');
        const menuContainer = document.getElementById('menu-container');
        menuContainer.innerHTML = '';

        let gerichteHinzugefuegt = 0;
        const menuKategorien = {};

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].trim();
            if (!row) continue;

            let cols = row.split('\t');
            if (cols.length < 4) {
                cols = row.split(',');
            }

            if (cols.length >= 4) {
                const kategorie = cols[0].trim();
                const titel = cols[1].trim();
                const beschreibung = cols[2].trim();
                const preis = cols[3].trim();

                if (!menuKategorien[kategorie]) {
                    menuKategorien[kategorie] = [];
                }

                menuKategorien[kategorie].push({ titel, beschreibung, preis });
                gerichteHinzugefuegt++;
            }
        }

        // Render menu categories and items
        for (const kategorie in menuKategorien) {
            menuContainer.innerHTML += `<h3 class="menu-category-title">${kategorie}</h3>`;

            menuKategorien[kategorie].forEach(gericht => {
                const menuItemHTML = `
                    <div class="menu-item">
                        <div class="menu-item-details">
                            <div class="menu-item-title">${gericht.titel}</div>
                            <div class="menu-item-desc">${gericht.beschreibung}</div>
                        </div>
                        <div class="menu-item-price">${gericht.preis}</div>
                    </div>
                `;
                menuContainer.innerHTML += menuItemHTML;
            });
        }

        if (gerichteHinzugefuegt === 0) {
            menuContainer.innerHTML = '<p>Keine Gerichte gefunden.</p>';
        }

    } catch (error) {
        console.error("Fehler beim Laden der Speisekarte:", error);
        document.getElementById('menu-container').innerHTML = '<p>Die Speisekarte konnte nicht geladen werden.</p>';
    }
}