import React from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Table from './index.js';
import Button from '../Button';

// Helper wrapper class to store the state so the stories are usable/interactive
class SortedTable extends React.Component {
  state = {
    tableContents: this.props.tableContents,
    currentOrder: this.props.currentOrder,
    currentSortedColumn: this.props.currentSortedColumn,
  };

  handleSorting = columnName => {
    // If the user isn't switching sort columns, toggle the sort direction
    const sortToggleMap = {
      ['asc']: 'desc',
      ['desc']: 'asc',
    };
    let newOrder = 'asc';
    if (this.state.currentSortedColumn === columnName) {
      newOrder = sortToggleMap[this.state.currentOrder];
    }
    this.setState({currentOrder: newOrder, currentSortedColumn: columnName});
    if (newOrder === 'asc') {
      this.state.tableContents.sort((a, b) => (a[columnName] > b[columnName]) ? 1 : -1);
    } else {
      this.state.tableContents.sort((b, a) => (a[columnName] > b[columnName]) ? 1 : -1);
    }
  };

  render() {
    const { currentOrder, tableContents } = this.state;
    return (
      <Table>
        <Table.THead>
          <Table.TR>
            <Table.TH
              sorting={{
                canSort: true,
                handleSort: () => this.handleSorting('Experiment'),
                order: currentOrder}}>
              Experiment
            </Table.TH>
            <Table.TH
              sorting={{
                canSort: true,
                handleSort: () => this.handleSorting('Conversion Rate'),
                order: currentOrder}}>
              Conversion Rate
            </Table.TH>
            <Table.TH
              sorting={{
                canSort: true,
                handleSort: () => this.handleSorting('Status'),
                order: currentOrder}}>
              Status
            </Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          {tableContents.map((row, idx) => {
            return (
              <Table.TR key={ idx }>
                <Table.TD>{row.Experiment}</Table.TD>
                <Table.TD width="20%">{row['Conversion Rate']} </Table.TD>
                <Table.TD> {row.Status} </Table.TD>
              </Table.TR>
            );
          })}
        </Table.TBody>
      </Table>
    );
  }
}

SortedTable.propTypes = {
  currentOrder: PropTypes.string,
  currentSortedColumn: PropTypes.string,
  tableContents: PropTypes.arrayOf(PropTypes.shape({
    Experiment: PropTypes.string,
    'Conversion Rate': PropTypes.string,
    Status: PropTypes.string,
  })),
};

const stories = storiesOf('Data Organization|Table', module);
stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div id="root-preview">{story()}</div>);

stories
  .add('Default', () => (
    <div>
      <Table
        density={ select(
          'density',
          {
            loose: 'loose',
            tight: 'tight',
          },
          'tight'
        ) }
        tableLayoutAlgorithm="fixed">
        <Table.THead>
          <Table.TR>
            <Table.TH> Experiment </Table.TH>
            <Table.TH> Conversion Rate </Table.TH>
            <Table.TH> Status </Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <Table.TR>
            <Table.TD> Header CTA </Table.TD>
            <Table.TD width="20%"> 12% </Table.TD>
            <Table.TD> Paused </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD> Shorter Contact Form </Table.TD>
            <Table.TD> 4% </Table.TD>
            <Table.TD> Draft </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD> Larger search bar </Table.TD>
            <Table.TD> 6.7% </Table.TD>
            <Table.TD> Paused </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD> Center aligned headline </Table.TD>
            <Table.TD> 9.3% </Table.TD>
            <Table.TD> Running </Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    </div>
  ))
  .add('Custom tr borders', () => (
    <div>
      <Table>
        <Table.THead>
          <Table.TR>
            <Table.TH> Experiment </Table.TH>
            <Table.TH> Conversion Rate </Table.TH>
            <Table.TH> Status </Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <Table.TR borderStyle="ends" backgroundColor="faint">
            <Table.TD> Header CTA </Table.TD>
            <Table.TD> 12% </Table.TD>
            <Table.TD> Paused </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD> Shorter Contact Form </Table.TD>
            <Table.TD> 4% </Table.TD>
            <Table.TD> Draft </Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    </div>
  ))
  .add('Loose & rule style', () => (
    <div>
      <Table density="loose" style="rule" tableLayoutAlgorithm="fixed">
        <Table.THead>
          <Table.TR>
            <Table.TH> Experiment </Table.TH>
            <Table.TH isNumerical={ true }> Conversion Rate </Table.TH>
            <Table.TH> Status </Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <Table.TR>
            <Table.TD> Header CTA </Table.TD>
            <Table.TD isNumerical={ true }> 12% </Table.TD>
            <Table.TD> Paused </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD> Shorter Contact Form </Table.TD>
            <Table.TD isNumerical={ true }> 4% </Table.TD>
            <Table.TD> Draft </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD> Larger search bar </Table.TD>
            <Table.TD isNumerical={ true }> 6.7% </Table.TD>
            <Table.TD> Paused </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD> Center aligned headline </Table.TD>
            <Table.TD isNumerical={ true }> 9.3% </Table.TD>
            <Table.TD> Running </Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    </div>
  ))
  .add('Tight & no bottom border', () => (
    <div>
      <Table
        density="tight"
        style="rule-no-bottom-border"
        tableLayoutAlgorithm="fixed">
        <Table.THead>
          <Table.TR>
            <Table.TH>Experiment </Table.TH>
            <Table.TH isNumerical={ true }> Conversion Rate </Table.TH>
            <Table.TH> Status </Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <Table.TR>
            <Table.TD> Header CTA </Table.TD>
            <Table.TD isNumerical={ true }> 12% </Table.TD>
            <Table.TD> Paused </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD> Shorter Contact Form </Table.TD>
            <Table.TD isNumerical={ true }> 4% </Table.TD>
            <Table.TD> Draft </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD> Larger search bar </Table.TD>
            <Table.TD isNumerical={ true }> 6.7% </Table.TD>
            <Table.TD> Paused </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD> Center aligned headline </Table.TD>
            <Table.TD isNumerical={ true }> 9.3% </Table.TD>
            <Table.TD> Running </Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    </div>
  ))
  .add('Dome', () => (
    <div>
      <Table density="tight" style="wall" tableLayoutAlgorithm="auto">
        <Table.THead>
          <Table.TR>
            <Table.TH> Experiment </Table.TH>
            <Table.TH isNumerical={ true } width="20%">
              Conversion Rate{' '}
            </Table.TH>
            <Table.TH isCollapsed={ true }> Status </Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <Table.TR>
            <Table.TD verticalAlign="middle"> Header CTA </Table.TD>
            <Table.TD isNumerical={ true } verticalAlign="middle">
              {' '}
              12%{' '}
            </Table.TD>
            <Table.TD verticalAlign="middle">
              <Button size="small" width="default">
                {' '}
                Start{' '}
              </Button>
            </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD verticalAlign="middle"> Shorter Contact Form </Table.TD>
            <Table.TD isNumerical={ true } verticalAlign="middle">
              {' '}
              4%{' '}
            </Table.TD>
            <Table.TD verticalAlign="middle">
              <Button size="small" width="default">
                {' '}
                Start{' '}
              </Button>
            </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD verticalAlign="middle"> Larger search bar </Table.TD>
            <Table.TD isNumerical={ true } verticalAlign="middle">
              {' '}
              6.7%{' '}
            </Table.TD>
            <Table.TD verticalAlign="middle">
              <Button size="small" width="default">
                {' '}
                Start{' '}
              </Button>
            </Table.TD>
          </Table.TR>
          <Table.TR>
            <Table.TD verticalAlign="middle">
              {' '}
              Center aligned headline{' '}
            </Table.TD>
            <Table.TD isNumerical={ true } verticalAlign="middle">
              {' '}
              9.3%{' '}
            </Table.TD>
            <Table.TD verticalAlign="middle">
              <Button size="small" width="default">
                {' '}
                Start{' '}
              </Button>
            </Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    </div>
  ))
  .add('Highlighted row w/ no border (loose style)', () => (
    <div>
      <Table density="loose" style="rule" tableLayoutAlgorithm="fixed">
        <Table.THead>
          <Table.TR>
            <Table.TH> Experiment </Table.TH>
            <Table.TH> Conversion Rate </Table.TH>
            <Table.TH> Status </Table.TH>
          </Table.TR>
        </Table.THead>
        <Table.TBody>
          <Table.TR noBorder={ true } >
            <Table.TD> Header CTA </Table.TD>
            <Table.TD width="20%"> 12% </Table.TD>
            <Table.TD> Paused </Table.TD>
          </Table.TR>
          <Table.TR noBorder={ true } isHighlighted={ true }>
            <Table.TD> Shorter Contact Form </Table.TD>
            <Table.TD> 4% </Table.TD>
            <Table.TD> Draft </Table.TD>
          </Table.TR>
          <Table.TR noBorder={ true }>
            <Table.TD> Larger search bar </Table.TD>
            <Table.TD> 6.7% </Table.TD>
            <Table.TD> Paused </Table.TD>
          </Table.TR>
          <Table.TR noBorder={ true }>
            <Table.TD> Center aligned headline </Table.TD>
            <Table.TD> 9.3% </Table.TD>
            <Table.TD> Running </Table.TD>
          </Table.TR>
        </Table.TBody>
      </Table>
    </div>
  ))
  .add('Sortable table', () => {
    let currentOrder = 'asc';
    let currentSortedColumn = 'Experiment';
    const tableContents = [
      {
        'Experiment': 'Header CTA',
        'Conversion Rate': '12%',
        'Status': 'Paused',
      },
      {
        'Experiment': 'Shorter Contact Form',
        'Conversion Rate': '4%',
        'Status': 'Draft',
      },
      {
        'Experiment': 'Larger Search Bar',
        'Conversion Rate': '6.7%',
        'Status': 'Paused',
      },
      {
        'Experiment': 'Center aligned headline',
        'Conversion Rate': '9.3%',
        'Status': 'Running',
      },
    ];
    // See top of file for implementation of a sortable table
    return (
      <div>
        <SortedTable tableContents={ tableContents } currentOrder={ currentOrder } currentSortedColumn={ currentSortedColumn }/>
      </div>
    );
  })
  .add('Text Alignment', () => {
    const textAlignment = select('textAlign', { center: 'center', right: 'right', left: 'left'}, 'left');

    return (
      <div>
        <Table>
          <Table.THead>
            <Table.TR>
              <Table.TH textAlign={ textAlignment }> Experiment </Table.TH>
              <Table.TH textAlign={ textAlignment }> Conversion Rate </Table.TH>
              <Table.TH textAlign={ textAlignment }> Status </Table.TH>
            </Table.TR>
          </Table.THead>
          <Table.TBody>
            <Table.TR>
              <Table.TD textAlign={ textAlignment }> Header CTA </Table.TD>
              <Table.TD textAlign={ textAlignment }> 12% </Table.TD>
              <Table.TD textAlign={ textAlignment }> Paused </Table.TD>
            </Table.TR>
            <Table.TR>
              <Table.TD textAlign={ textAlignment }> Shorter Contact Form </Table.TD>
              <Table.TD textAlign={ textAlignment }> 4% </Table.TD>
              <Table.TD textAlign={ textAlignment }> Draft </Table.TD>
            </Table.TR>
            <Table.TR>
              <Table.TD textAlign={ textAlignment }> Larger search bar </Table.TD>
              <Table.TD textAlign={ textAlignment }> 6.7% </Table.TD>
              <Table.TD textAlign={ textAlignment }> Paused </Table.TD>
            </Table.TR>
            <Table.TR>
              <Table.TD textAlign={ textAlignment }> Center aligned headline </Table.TD>
              <Table.TD textAlign={ textAlignment }> 9.3% </Table.TD>
              <Table.TD textAlign={ textAlignment }> Running </Table.TD>
            </Table.TR>
          </Table.TBody>
        </Table>
      </div>
    );
  });
