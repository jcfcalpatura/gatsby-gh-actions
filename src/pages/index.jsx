import * as React from 'react';
import '../css/App.scss';
import { Button } from 'react-bootstrap';

const IndexPage = () => (
  <main id="home-page" className="">
    <title>Gatsby Site</title>
    <div>
      <h1>Hello World!</h1>
      <Button href="demo-page/">
        Demo Page
      </Button>
    </div>
  </main>
);

export default IndexPage;
