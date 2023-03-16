import * as React from 'react';
import '../css/App.scss';
import PrivacyPolicyButton from '../components/Button';

const IndexPage = () => (
  <>
    <main id="home-page" className="">
      <title>Gatsby Site</title>
      <div>
        <h1>Hello World!</h1>
        <PrivacyPolicyButton href="/privacy-policy/" />
      </div>
    </main>
  </>
);
export default IndexPage;
