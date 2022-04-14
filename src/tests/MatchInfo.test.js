import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import MatchInfo from '../components/MatchInfo';

it('is rendering succesfully', () => {
  render(<BrowserRouter><Provider store={store}><MatchInfo /></Provider></BrowserRouter>);
  expect(screen.getByText('Retrieving match data...')).toBeInTheDocument();
});

it('is equal to the snapshot', () => {
  const tree = renderer.create(
    <BrowserRouter><Provider store={store}><MatchInfo /></Provider></BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
