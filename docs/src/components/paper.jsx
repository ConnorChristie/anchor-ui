import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Paper from \'anchor-ui/paper\';';

function PaperDoc() {
  const componentData = _.find(components, component => component.displayName === 'Paper');

  return (
    <article className="doc">
      <h1>Button</h1>
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
        <Paper style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: 0 }}>
          <Paper>
            Depth: 1
          </Paper>
          <Paper depth={2}>
            Depth: 2
          </Paper>
          <Paper depth={3}>
            Depth: 3
          </Paper>
          <Paper depth={4}>
            Depth: 4
          </Paper>
          <Paper depth={5}>
            Depth: 5
          </Paper>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default PaperDoc;