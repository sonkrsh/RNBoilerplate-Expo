// This should NEVER appear in bundle without barrel exports
export function UnusedTestComponent() {
  console.log('NO BARREL EXPORTS - THIS SHOULD NOT APPEAR IN BUNDLE');
  return null;
}