import { translateGameMode, secondsToHms, date } from '../redux/extraMatchData';

it('shows the correct game mode name', () => {
  expect(translateGameMode(6)).toBe('INTRO');
});

it('correctly converts seconds to minutes and seconds', () => {
  expect(secondsToHms(2601)).toBe('43:21');
});

it('shows the correct game mode name', () => {
  const myBday = `17/
    06/
    1999, 
    11:
    11 AM`;
  expect(date(929635871)).toBe(myBday);
});
