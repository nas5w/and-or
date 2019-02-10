function and(...tests) {
  for (let i = 0; i < tests.length; i++) {
    if (!tests[i]) return false;
  }
  return true;
}

function or(...tests) {
  for (let i = 0; i < tests.length; i++) {
    if (tests[i]) return true;
  }
  return false;
}

module.exports = { and, or };
