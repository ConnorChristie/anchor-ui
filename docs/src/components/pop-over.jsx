import React from 'react';
import find from 'lodash/find';
import noop from 'lodash/noop';
import IconMenu from '../anchor-ui/icon-menu';
import MenuItem from '../anchor-ui/menu-item';
import IconLanguage from '../anchor-ui/icons/icon-language';
import Props from './props';
import components from '../components.json';
import Paper from '../anchor-ui/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import PopOver from 'anchor-ui/pop-over';
  \`\`\`
`;

const componentData = find(components, { displayName: 'PopOver' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  iconMenu: {
    width: '40px',
    margin: '10px'
  },
  headerStyle: { textTransform: 'capitalize' }
};

const PopOverDoc = () => (
  <article className="page">
    <h1>PopOver</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <Markdown markdown={usage} title="Code example" />
    <section>
      <h1>Examples</h1>
      <Paper style={style.paper}>
        <IconMenu
          style={style.iconMenu}
          icon={<IconLanguage />}
          header="Language"
          headerStyle={style.headerStyle}
          secondaryMenuItems={[
            <MenuItem text="An item" onClick={noop} />,
            <MenuItem text="Another item" onClick={noop} />
          ]}
          dividerText="More items"
        >
          <MenuItem text="Active item" onClick={noop} active />
          <MenuItem text="Inactive item" onClick={noop} />
        </IconMenu>
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default PopOverDoc;
