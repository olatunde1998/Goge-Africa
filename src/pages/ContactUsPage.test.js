import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ContactUsPage from './ContactUsPage';

const MockContactPage =()=>{
    return(
        <BrowserRouter>
            <ContactUsPage/>
        </BrowserRouter>
    )
}

test('contactUsPage', () => {
  render(<MockContactPage />);
  const linkElement = screen.getByPlaceholderText("FullName");
  expect(linkElement).toBeInTheDocument();
});
