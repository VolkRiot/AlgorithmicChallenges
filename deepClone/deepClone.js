function deepClone(value) {
  const copy = {};

  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((each) => deepClone(each));
  }

  for (const key in value) {
    copy[key] = deepClone(value[key]);
  }

  return copy;
}

const result = deepClone({
  one: ['1', 12, { name: 'Misha', last: ['Metrikin', null] }],
  two: undefined,
  three: {
    extra: undefined,
    more: {
      evenMore: null,
      xx: [2.3, 12, '', [null, null]],
    },
  },
});
