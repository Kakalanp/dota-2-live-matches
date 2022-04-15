import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import MatchList from '../components/MatchList';

it('is rendering succesfully', () => {
  render(<BrowserRouter><Provider store={store}><MatchList /></Provider></BrowserRouter>);
  expect(screen.getByText('Top Dota 2 live Matches')).toBeInTheDocument();
});

it('is equal to the snapshot', () => {
  const tree = renderer.create(
    <BrowserRouter><Provider store={store}><MatchList /></Provider></BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
