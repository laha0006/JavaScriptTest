const base_url = "https://countries.plaul.dk/api/countries/"
const defaultFill = "#2f2f2f"
const selectColor = "#092ee3"
let lastTarget;
let highlightedTarget;

function deHighlightLastCountry() {
    highlightedTarget = "";
    if(lastTarget !== undefined) {
        lastTarget.style.fill = defaultFill;
    }
}

function highlightCountry(target) {
    highlightedTarget = target;
    console.log("COLOR");
    console.log(target.style.fill)
    target.style.fill = selectColor
}

async function fetchCountryData(id) {
    let url = base_url + id;
    return (await fetch(url)).json()
}

function displayCountryData(countryData) {
    let countryInfoElem = document.getElementById("countryInfo");
    console.log(Object.keys(countryData.currencies)
        .map(k => k + ", name: " + countryData.currencies[k].name + ", symbol: " + countryData.currencies[k].symbol ).join(","));


    let infoTemp = `<img alt="country flag" src="${countryData.flag}"> <br>
        Country: ${countryData.name.common} <br>
        Member of UN: ${countryData.unMember ? 'Yes' : 'No'} <br>
        Currencies: ${Object.keys(countryData.currencies)
        .map(k => 
            k + ", name:" + countryData.currencies[k].name + ", symbol: " + countryData.currencies[k].symbol
        ).join(',')} <br>
        Capital: ${countryData.name.common}`;
    countryInfoElem.innerHTML = infoTemp;
}

async function mapClick(e) {
    deHighlightLastCountry();
    let target = e.target;
    if(target.id === "svg2") {
        return
    }
    lastTarget = target

    let map = document.getElementById("svg2");
    map.style.pointerEvents = "none";

    highlightCountry(target);

    let id = target.id
    let countryData = await fetchCountryData(id)

    displayCountryData(countryData);
    map.style.pointerEvents = "auto";
}

let map = document.getElementById("svg2");

map.addEventListener("click", mapClick);

map.addEventListener("mouseover", (e) => {
    let target = e.target
    if (target === highlightedTarget) {
        return
    }
    target.style.fill ="#79ea07"
})

map.addEventListener("mouseout", (e) => {
    let target = e.target
    if (target === highlightedTarget) {
        return
    }
    target.style.fill = defaultFill
})
