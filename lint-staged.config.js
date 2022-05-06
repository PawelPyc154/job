module.exports = {
  '*.(js|jsx)': ['prettier --write', 'eslint --fix'],
  '*.(ts|tsx)': [() => 'tsc --noEmit --skipLibCheck', 'prettier --write', 'eslint --fix'],
  '*.json': ['prettier --write'],
}
