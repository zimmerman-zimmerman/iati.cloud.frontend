/* core */
/* layout */
import { QueryBuilderLayout } from 'app/modules/QueryBuilder/layout';
import React from 'react';
/* third-party */
import useTitle from 'react-use/lib/useTitle';
import { ModuleStore } from './state/store';

function QueryBuilderModule() {
  /* set the window title */
  useTitle('OIPA - Query Builder');

  /* instantiate the layout*/
  return (
    /* the layout is wrapped in the the module store provider */
    <ModuleStore.Container>
      <QueryBuilderLayout />
    </ModuleStore.Container>
  );
}

export default QueryBuilderModule;
