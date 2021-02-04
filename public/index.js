// const fs = require("fs");

// const defs = fs.readFileSync("../definitions.json");

const defP = document.getElementById("toDefine");
const textArea = document.getElementById("definition");
const submit = document.getElementById("sub");
const c = document.getElementById("count");

let count = 0;

const definitions = [
  {
    name: "Coup d'Etat",
    def: "renversement illégal du pouvoir, le plus souvent par la force",
  },
  {
    name: "Atelier national",
    def:
      "chantiers d'intérêts public déstinés à donner du travail aux ouvriers chômeurs",
  },
  {
    name: "Républicain du 'lendemain'",
    def:
      "Monarchistes qui ce sont ralliés après la Révolution de février à la République, certains sincèrement, d'autres par intérêts, contrairement aux républicains de la veille, qui eux étaient républicains avant 1848",
  },
];

function chooseDef(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function initDef() {
  const currentDef = chooseDef(definitions);

  defP.innerText = currentDef.name;

  return currentDef;
}

let currentDef = initDef();

submit.onclick = () => {
  if (
    textArea.value.toLowerCase().trim().replace(/\s+/g, "") ===
    currentDef.def.toLowerCase().trim().replace(/\s+/g, "")
  ) {
    count++;
    currentDef = initDef();
    c.innerText = count;
    textArea.value = "";
  } else
    console.log(
      textArea.value.toLowerCase().trim().replace(/\s+/g, ""),
      currentDef.def.trim().replace(/\s+/g, "")
    );
};
