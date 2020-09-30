import PropTypes from 'prop-types';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { isEqual, pick } from 'lodash';

const DraggableItem = ({
  id,
  index,
  item,
  renderFunc,
  useCustomDragHandle,
}) => {
  return (
    <Draggable key={ item.id } draggableId={ id.toString() } index={ index }>
      {(provided, snapshot) => (
        <li
          className="oui-sortable__item flex"
          ref={ provided.innerRef }
          { ...provided.draggableProps }
          { ...(useCustomDragHandle ? {} : provided.dragHandleProps) }>
          {renderFunc({ item, index, snapshot, dragHandleProps: provided.dragHandleProps })}
        </li>
      )}
    </Draggable>
  );
};

DraggableItem.propTypes = {
  /**
   * Id for this particular Draggable Item
   */
  id: PropTypes.number.isRequired,
  /**
   * Current index for this particular Draggable Item
   */
  index: PropTypes.number.isRequired,
  /**
   * Item to render using render function pass as prop
   */
  item: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  /**
   * Function used to render the contents of this Draggable Item
   */
  renderFunc: PropTypes.func.isRequired,
  /**
   * Whether or not the item itself will make use of the drag handle
   */
  useCustomDragHandle: PropTypes.bool,
};


export default React.memo(DraggableItem, (prevProps, nextProps) => {
  const deps = ['id', 'index', 'item', 'useCustomDragHandle'];
  return isEqual(pick(prevProps, deps), pick(nextProps, deps));
});
