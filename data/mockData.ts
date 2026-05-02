export const chartData = [
  { year: '2024', price: 620, predicted: false },
  { year: 'Prédit →', price: 628, predicted: false },
  { year: '2027', price: 648, predicted: true },
];

export const webChartData = [
  { month: 'Jan 24', price: 610 },
  { month: 'Fév 24', price: 615 },
  { month: 'Mar 24', price: 620 },
  { month: 'Avr 24', price: 625 },
  { month: 'Mai 24', price: 630 },
  { month: 'Jun 24', price: 628 },
  { month: 'Jul 24', price: 620 },
  { month: 'Aoû 24', price: 622 },
  { month: 'Sep 24', price: 618 },
  { month: 'Oct 24', price: 620 },
  { month: 'Nov 24', price: 625 },
  { month: 'Déc 24', price: 628 },
  { month: 'Jan 27', price: 648, predicted: true },
  { month: 'Fév 27', price: 655, predicted: true },
  { month: 'Mar 27', price: 660, predicted: true },
];

export const productsMock = [
  { name: 'Maïs jaune', category: 'Céréales', price: 285, variation: '+4.2%', trend: 'up' },
  { name: 'Riz importé', category: 'Céréales', price: 620, variation: '-1.1%', trend: 'down' },
  { name: 'Manioc frais', category: 'Tubercules', price: 175, variation: '-0.8%', trend: 'down' },
  { name: 'Huile de palme', category: 'Huiles', price: 1100, variation: '+2.5%', trend: 'up' },
  { name: 'Tomates', category: 'Légumes', price: 450, variation: '+1.3%', trend: 'up' },
  { name: 'Poulet', category: 'Viandes', price: 2200, variation: '-0.5%', trend: 'down' },
];

export const performanceData = [
  { product: 'Riz importé', mae: 12.3, rmse: 18.5, mape: 2.1, quality: 'Excellent' },
  { product: 'Maïs jaune', mae: 8.7, rmse: 14.2, mape: 3.5, quality: 'Excellent' },
  { product: 'Huile de palme', mae: 45.2, rmse: 67.8, mape: 4.8, quality: 'Acceptable' },
  { product: 'Manioc frais', mae: 15.1, rmse: 22.3, mape: 8.2, quality: 'Acceptable' },
  { product: 'Tomates', mae: 78.5, rmse: 112.4, mape: 15.7, quality: 'Mauvais' },
];
