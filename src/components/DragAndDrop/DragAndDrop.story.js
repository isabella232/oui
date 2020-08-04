/* eslint-disable react/prop-types */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DragAndDropStateless from './index';
import Token from '../Token';
import Tile from '../Tile';
import Col from '../Layout/Col';

const itemsWithoutGroups = [
  { id: 1, type: 'item', text: 'Item A', description: 'ID: 0123' },
  { id: 2, type: 'item', text: 'Item B', description: 'ID: 4567' },
  { id: 3, type: 'item', text: 'Item C', description: 'ID: 8910' },
  { id: 4, type: 'item', text: 'Item D', description: 'ID: 1112' },
  { id: 5, type: 'item', text: 'Item E', description: 'ID: 1314' },
];

const renderTokenItem = ({ item, index, snapshot }) => (
  <div>
    <Token
      isDraggable={ true }
      name={ item['text'] + '- isDragging? ' + snapshot.isDragging }
      order={ index + 1 }
      showWell={ false }
    />
  </div>
);

const renderTokenItemWithAdjustedDragging = ({ item, index, snapshot, dragHandleProps }) => (
  <div>
    <Token
      isDraggable={ true }
      name={ item['text'] + '- isDragging? ' + snapshot.isDragging }
      showWell={ false }
      usesDragHandle={ true }
      dragHandleProps={ dragHandleProps }
    />
  </div>
);

const renderTileItem = ({ item, index, snapshot, dragHandleProps }) => (
  <Col small="6">
    <Tile
      name={ item['text'] }
      description={ item['description'] }
      onPillClick={ action('onPillClick') }
      isDraggable={ true }
      testSection="with-warning"
      dragHandleProps={ dragHandleProps }
      onDismiss={ action('on Dismiss Click') }
    />
  </Col>
);

// Helper wrapper class to store the state so the stories are usable/interactive
class DragAndDrop extends React.Component {
  state = {
    items: this.props.items,
  };

  updateItemOrder = (items) => {
    this.setState({ items });
    this.props.onDragEnd(items);
  };

  render() {
    const { renderItem, idForDroppableRegion, onBeforeCapture, useCustomDragHandle } = this.props;
    return (
      <DragAndDropStateless
        idForDroppableRegion={ idForDroppableRegion }
        items={ this.state.items }
        onBeforeCapture={ onBeforeCapture }
        onDragEnd={ this.updateItemOrder }
        renderItem={ renderItem }
        useCustomDragHandle={ useCustomDragHandle }
      />
    );
  }
}

DragAndDrop.propTypes = DragAndDropStateless.propTypes;
DragAndDrop.defaultProps = DragAndDropStateless.defaultProps;

const stories = storiesOf('Sorting and Ordering|DragAndDrop', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => <div id="root-preview">{story()}</div>);

stories
  .add('Reordering flat list', () => {
    return (
      <DragAndDrop
        idForDroppableRegion={ 'droppable-story-demo' }
        items={ itemsWithoutGroups }
        onBeforeCapture={ action('do something before dragging begins') }
        onDragEnd={ action('get new order of items') }
        renderItem={ renderTokenItem }
      />
    );
  })
  .add('With custom drag handle', () => {
    return (
      <DragAndDrop
        idForDroppableRegion={ 'droppable-story-demo' }
        items={ itemsWithoutGroups }
        onBeforeCapture={ action('do something before dragging begins') }
        onDragEnd={ action('get new order of items') }
        useCustomDragHandle={ true }
        renderItem={ renderTokenItemWithAdjustedDragging }
      />
    );
  })
  .add('Using Tile', () => {
    return (
      <DragAndDrop
        idForDroppableRegion={ 'droppable-story-demo' }
        items={ itemsWithoutGroups }
        onBeforeCapture={ action('do something before dragging begins') }
        onDragEnd={ action('get new order of items') }
        renderItem={ renderTileItem }
      />
    );
  });
