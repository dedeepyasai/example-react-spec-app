try {
  require('@testing-library/jest-dom');
  console.log('jest-dom ok');
} catch (e) {
  console.error('failed to require @testing-library/jest-dom');
  console.error(e && e.stack ? e.stack : e);
  process.exit(1);
}
