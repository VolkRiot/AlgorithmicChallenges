const graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    fin: 1,
  },
  b: {
    a: 3,
    fin: 5,
  },
  fin: {},
};

const costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};

const parents = {
  a: 'start',
  b: 'start',
  fin: null,
};

const processed = [];

function djisktra() {
  let node = findLowestCost(costs);

  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];

    for (n in neighbors) {
      const newCost = cost + neighbors[n];

      if (newCost < costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }

    processed.push(node);
    node = findLowestCost(costs);
    console.log('node', node);
  }
}

function findLowestCost(costs) {
  let lowest = Infinity;

  return Object.entries(costs).reduce((acc, [key, value]) => {
    if (value <= lowest && !processed.includes(key)) {
      lowest = value;
      acc = key;
    }

    return acc;
  }, null);
}

djisktra();
// console.log(costs);
// console.log(parents);
