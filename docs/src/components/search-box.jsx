import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import SearchBox from '../../../dist/search-box';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import SearchBox from \'anchor-ui/search-box\';';

function SearchBoxDoc() {
  const componentData = _.find(components, component => component.displayName === 'SearchBox');

  return (
    <article className="doc">
      <h1>Search Box</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <Paper style={{ margin: 0, padding: '20px' }}>
          <SearchBox onChange={() => {}} changeSearchQuery={() => {}} handleSearch={() => {}} placeholder="Search" value={''} />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default SearchBoxDoc;
