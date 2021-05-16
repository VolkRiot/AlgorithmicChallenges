const stations = {
  kone: ['id', 'nv', 'ut'],
  ktwo: ['wa', 'id', 'mt'],
  kthree: ['or', 'nv', 'ca'],
  kfour: ['nv', 'ut'],
  kfive: ['ca', 'az'],
};

let finalStations = [];
let statesCovered = [];

while (Object.keys(stations).length) {
  let bestStation = null;
  let bestNextOption = [];
  for (const entry in stations) {
    const states = stations[entry];

    const potentialStates = states.filter(
      (state) => !statesCovered.includes(state)
    );

    if (potentialStates.length > bestNextOption.length) {
      bestStation = entry;
      bestNextOption = potentialStates;
    }
  }

  if (!bestStation) break;

  statesCovered = [...new Set([...statesCovered, ...stations[bestStation]])];
  finalStations.push(bestStation);
  delete stations[bestStation];
}

console.log(finalStations);
