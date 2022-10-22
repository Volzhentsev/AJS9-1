import Magician from '../js/classMagician';
import Daemon from '../js/classDaemon';

test('class Magician testing', () => {
  const wizard1 = new Magician('Deniz', 'Magician', false, 2);
  const wizard2 = new Magician('Den', 'Magician', true, 2);
  expect(wizard2.stoned).toBe(true);
  expect(wizard2.attack).toBe(85);
  expect(wizard1.stoned).toBe(false);
  expect(wizard1.attack).toBe(90);
});

test('class Daemon testing', () => {
  const red1 = new Daemon('Devil', 'Deamon', false, 5);
  const red2 = new Daemon('Suqub', 'Deamon', true, 5);
  expect(red1.stoned).toBe(false);
  expect(red1.attack).toBe(60);
  expect(red2.stoned).toBe(true);
  expect(red2.attack).toBe(48);
});
