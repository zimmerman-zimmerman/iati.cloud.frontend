/* core */
import React from 'react';
/* third-party */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Download from '@material-ui/icons/GetApp';
/* project component */
import { URLField } from 'app/components/inputs/textdisplay/URLField';
import { IconButton } from 'app/components/inputs/buttons/IconButton';
/* config & mock */
import { downloadFile } from 'app/modules/QueryBuilder/fragments/results/util';
import { fragmentConfig } from 'app/modules/QueryBuilder/fragments/results/model';
import { useStoreState } from 'app/state/store';
import { ModuleStore } from 'app/modules/QueryBuilder/state/store';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { QbStepNavigatorButton } from 'app/modules/QueryBuilder/common/QbStepNavigatorButton';
import { QbStepNavigator } from 'app/modules/QueryBuilder/common/QbStepNavigator';

export const DownloadFragment = () => {
  /* get query url from app store */
  const store = ModuleStore.useStore();

  const queryURL = useStoreState(state => state.query.url);
  const rowFormat = store.get('rowFormat');
  let stringToBeReplaced = 'csv';

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  // const md = useMediaQuery('(min-width:768px)');

  //this is how we do to remove (not remove but leave them blank) JSON strings in CSV output.
  //this operation is needed only when there is no field specification in the query.
  if (rowFormat === 'activity' && !queryURL.includes('fl')) {
    stringToBeReplaced =
      'csv&fl=*,reporting_org:[value v=""],title:[value v=""],description:[value v=""],description_narrative:[value v=""],participating_org:[value v=""],other_identifier:[value v=""],' +
      'activity_date:[value v=""],contact_info:[value v=""],recipient_country:[value v=""],recipient_region:[value v=""],location:[value v=""],sector:[value v=""],' +
      'tag:[value v=""],country_budget_items:[value v=""],humanitarian_scope:[value v=""],policy_marker:[value v=""],default_aid_type:[value v=""],budget:[value v=""],' +
      'planned_disbursement:[value v=""],transaction:[value v=""],document_link:[value v=""],related_activity:[value v=""],legacy_data:[value v=""],conditions:[value v=""],' +
      'result_document_link:[value v=""],result_reference:[value v=""],result_indicator:[value v=""],result_indicator_reference:[value v=""],result_indicator_baseline_document_link_title:[value v=""],' +
      'result_indicator_baseline_document_link_description:[value v=""],fss:[value v=""],crs_add:[value v=""]';
  }

  if (rowFormat === 'transaction' && !queryURL.includes('fl')) {
    stringToBeReplaced =
      'csv&fl=*,reporting_org_narrative:[value v=""],sector:[value v=""]';
  }

  return (
    <Grid
      container
      spacing={4}
      css={`
        min-height: 1000px;
      `}
      direction="column"
    >
      <Grid item xs={12} sm={12} lg={12}>
        <Typography variant="subtitle1">{fragmentConfig.name}</Typography>
      </Grid>
      {/* todo: make re-usable component */}
      <Grid item md={12} lg={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10} lg={9}>
            <URLField text={queryURL.replace('json', stringToBeReplaced)} />
          </Grid>
          <Grid item xs={4} md={2} lg={3} justify="flex-end">
            <IconButton
              icon={<Download />}
              label={md ? 'CSV' : 'Download CSV'}
              onClick={() =>
                downloadFile(
                  queryURL.replace('json', stringToBeReplaced),
                  'download.csv'
                )
              }
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={12} lg={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10} lg={9}>
            <URLField text={queryURL} />
          </Grid>
          <Grid item xs={4} md={2} lg={3}>
            <IconButton
              icon={<Download />}
              label={md ? 'JSON' : 'Download JSON'}
              onClick={() => downloadFile(queryURL, 'download.json')}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={12} lg={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={10} lg={9}>
            <URLField text={queryURL.replace('json', 'xml')} />
          </Grid>
          <Grid item xs={4} md={2} lg={3}>
            <IconButton
              icon={<Download />}
              label={md ? 'XML' : 'Download XML'}
              onClick={() =>
                downloadFile(queryURL.replace('json', 'xml'), 'download.xml')
              }
            />
          </Grid>
        </Grid>
      </Grid>

      {/* ---------------------------------------------------------------------------------------------------------- */}
      {/* DEBUG */}

      {/* ---------------------------------------------------------------------------------------------------------- */}

      <QbStepNavigator>
        <QbStepNavigatorButton
          label="Previous"
          path="/querybuilder/output-format"
        />
        <QbStepNavigatorButton
          label="Beginning"
          path="/querybuilder/core-filters"
        />
      </QbStepNavigator>
    </Grid>
  );
};