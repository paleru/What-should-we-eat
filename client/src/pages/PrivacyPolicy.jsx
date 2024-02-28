import Wrapper from '../assets/wrappers/PrivacyPolicy';
import { Link } from 'react-router-dom';
import main from '../assets/images/privacy-policy.svg';
import HomeIcon from '@mui/icons-material/Home';

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='/' className='back-button'>
          <HomeIcon />
        </Link>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h3>
            Cookie policy. Last Updated: <span>28/02/2024</span>
          </h3>
          <ul>
            <li>
              <h5>Introduction</h5>{' '}
              <p>
                This Cookie Policy explains how we use cookies and similar
                tracking technologies on our website. By using our website, you
                consent to the use of cookies as described in this policy.
              </p>
            </li>
            <li>
              <h5>What are Cookies?</h5>{' '}
              <p>
                Cookies are small text files that are stored on your device
                (computer, smartphone, tablet) when you visit a website. They
                are widely used to make websites work or work more efficiently,
                as well as to provide information to the website owners.
              </p>
            </li>
            <li>
              <h5>Types of Cookies this website utilizes?</h5>
              <p>
                Essential Cookies: These cookies are necessary for the operation
                of our website. They enable you to navigate our website and use
                its features, such as accessing secure areas.
                <br></br>- Name: token
                <br></br>- Purpose: Used for user authentication and session
                management.
              </p>
            </li>
            <li>
              <h5>Managing Cookies</h5>
              <p>
                You can control and manage cookies in various ways. Most web
                browsers allow you to refuse to accept cookies and to delete
                cookies. Please refer to your browser's settings or help
                documentation for more information on how to manage cookies.
              </p>
            </li>
            <li>
              <h5>Updates to this policy</h5>{' '}
              <p>
                We may update this Cookie Policy from time to time. Any changes
                will be posted on this page with an updated effective date. We
                encourage you to review this policy periodically for any
                updates.
              </p>
            </li>
          </ul>
        </div>
        <img src={main} alt='cooking together' className='img privacy-img' />
      </div>
    </Wrapper>
  );
};

export default PrivacyPolicy;
