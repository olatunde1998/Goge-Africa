import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import AboutUsComponent from './AboutUsComponent';


// test('should display AboutUsComponent', () => {
//     render(<AboutUsComponent />);
//     const inputElement = screen.getByTitle("We're Goge Africa An E-Learning Platform From West Africa");
//     expect(inputElement).toBeInTheDocument();
// });
  

  test('it works', () => {
    const tree = renderer.create(<AboutUsComponent />).toJSON()
    expect(tree).toBeInTheDocument(<NavigationComponent/>)
    
  })