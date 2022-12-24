import { render, screen } from '@testing-library/react';
import ContactUsComponent from 'components/contactUsComponent/ContactUsComponent';
import { BrowserRouter } from 'react-router-dom';

const MockContactUsComponent =()=>{
    return(
        <BrowserRouter>
            <ContactUsComponent/>
        </BrowserRouter>
    )
}


test('renders learn react link', () => {
  render(<MockContactUsComponent />);
  const inputElement = screen.getByPlaceholderText("FullName");
  expect(inputElement).toBeInTheDocument();
});
