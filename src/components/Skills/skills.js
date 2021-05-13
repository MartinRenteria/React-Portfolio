import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/font-awesome';
import Layout from '../../components/layout/layout'

const Contact = () => (
  <Layout>
    <h1>Contact Information</h1>

    <a className='icons' href='https://github.com/timcombs'>
      <FontAwesomeIcon icon={['fab', 'github-square']} />
    </a>

    <a className='icons' href='https://twitter.com/deSolidState'>
      <FontAwesomeIcon icon={['fab', 'twitter-square']} />
    </a>

    <a className='icons' href='https://www.linkedin.com/in/timothycombs/'>
      <FontAwesomeIcon icon={['fab', 'linkedin']} />
    </a>

    <a className='icons' href='https://github.com/desolidstate'>
      <FontAwesomeIcon icon={['fab', 'github-square']} />
    </a>
  </Layout>
);

export default Contact;