import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
});


module.exports = {
  get: jest.fn((url) => {
      if (url === 'https://gentle-pear-houndstooth.cyclic.app') {
          return Promise.resolve({
              data: 'data'
          });
      }
  }),
  post: jest.fn((url) => {
      if (url === 'https://gentle-pear-houndstooth.cyclic.app') {
          return Promise.resolve({
              data: 'data'
          });
      }
      if (url === 'https://gentle-pear-houndstooth.cyclic.app') {
          return Promise.resolve({
              data: 'data2'
          });
      }
  }),
  create: jest.fn(function () {
      return this;
  })
};


