import React from 'react';
import classNames from 'classnames';

import "./index.scss";

import TabNav from "../../src/components/TabNav/index";
import Table from "../../src/components/Table/index";
import Link from '../../src/components/Link/index';

interface BorderState {
    borderAddition: string,
    borderSide: string,
    borderFeature: string,
}

export class Border extends React.Component<{}, BorderState> {
    constructor(props) {
        super(props);
        this.state = {
            borderAddition: 'add',
            borderSide: 'all',
            borderFeature: 'none',
        }
    }

    switchBorderAddition = option => {
        this.setState({borderAddition: option});
    }

    switchBorderFeature = feature => {
        this.setState({borderFeature: feature});
    }

    switchBorderSide = side => {
        this.setState({borderSide: side});
    }

    render() {
        const {borderAddition, borderFeature, borderSide} = this.state;
        let borderClass = 'border--' + borderSide;
        if (borderAddition === 'remove') {
            borderClass = 'border--all ';
            borderClass += borderSide === 'all'? 'no-border' : 'no-border--' + borderSide;
        } 
        if (borderFeature === 'radius') {
            borderClass += ' border-radius';
        }
        if (borderFeature === 'dashed') {
            borderClass = 'border-dashed--all';
        }
        let externalBoxHelperClasses = classNames(
            'border-radius',
            'min-height--50',
            'demo-only-spacing-push-background',
            'soft',
        )
        let internalBoxHelperClasses = classNames(
            'flex',
            'flex--dead-center',
            'soft',
            'reverse',
            'demo-only-spacing-push-background',
            borderClass,
        )
                    
        return (
            <section className="demo-only-section hard--top flex flex--column">
                <h1>Borders</h1>
                <p>The following examples illustrate the border helper classes to style divs that are available through OUI's CSS.</p>
                <p>Click through the different options in the columns to get your desired effect.</p>
                <div className="flex flex--column flex-align--start push-double--sides">  
                    <div className="flex width--1-1">
                        <div className="width--200 push-quad--left soft--sides border--sides">
                            <Table>
                                <Table.THead>
                                    <Table.TR>
                                        <Table.TH>
                                            Remove or add spacing
                                        </Table.TH>
                                    </Table.TR>
                                </Table.THead>
                                <Table.TBody>
                                    <BorderRow onRowClick={() => this.switchBorderAddition('add')} helperClass='add' isSelected={borderAddition === 'add'} />
                                    <BorderRow onRowClick={() => this.switchBorderAddition('remove')} helperClass='remove' isSelected={borderAddition === 'remove'} />
                                </Table.TBody>
                            </Table>
                        </div>
                        <div className="width--200 soft--sides border--right">
                            <Table>
                                <Table.THead>
                                    <Table.TR>
                                        <Table.TH>
                                            Features
                                        </Table.TH>
                                    </Table.TR>
                                </Table.THead>
                                <Table.TBody>
                                    <BorderRow onRowClick={() => this.switchBorderFeature('none')} helperClass='none' isSelected={borderFeature === 'none'} />
                                    <BorderRow onRowClick={() => this.switchBorderFeature('radius')} helperClass='border radius' isSelected={borderFeature === 'radius'} />
                                    <BorderRow onRowClick={() => this.switchBorderFeature('dashed')} helperClass='dashed line' isSelected={borderFeature === 'dashed'} />
                                </Table.TBody>
                            </Table>
                        </div>
                        <div className="width--100 soft--sides border--right">
                            <Table>
                                <Table.THead>
                                    <Table.TR>
                                        <Table.TH>
                                            Side
                                        </Table.TH>
                                    </Table.TR>
                                </Table.THead>
                                <Table.TBody>
                                    <BorderRow onRowClick={() => this.switchBorderSide('all')} helperClass='all' isSelected={borderSide === 'all'} />
                                    <BorderRow disableClick={borderFeature === 'dashed'} onRowClick={() => this.switchBorderSide('top')} helperClass='top' isSelected={borderSide === 'top'} />
                                    <BorderRow disableClick={borderFeature === 'dashed'} onRowClick={() => this.switchBorderSide('right')} helperClass='right' isSelected={borderSide === 'right'} />
                                    <BorderRow disableClick={borderFeature === 'dashed'} onRowClick={() => this.switchBorderSide('bottom')} helperClass='bottom' isSelected={borderSide === 'bottom'} />
                                    <BorderRow disableClick={borderFeature === 'dashed'} onRowClick={() => this.switchBorderSide('left')} helperClass='left' isSelected={borderSide === 'left'} />
                                    <BorderRow disableClick={borderAddition === 'remove' || borderFeature === 'dashed'} onRowClick={() => this.switchBorderSide('ends')} helperClass='ends' isSelected={borderSide === 'ends'} />
                                    <BorderRow disableClick={borderAddition === 'remove' || borderFeature === 'dashed'} onRowClick={() => this.switchBorderSide('sides')} helperClass='sides' isSelected={borderSide === 'sides'} />
                                </Table.TBody>
                            </Table>
                        </div>
                        <div className='flex flex--1 flex--column push-quad--left'>
                            <p className="max-width--300">Helper class: <code>{borderClass}</code></p>
                            <div className={externalBoxHelperClasses}>
                                <div className={internalBoxHelperClasses}><code>{borderClass}</code></div>
                            </div>
                        </div>
                    </div>
                </div>   
            </section>
        );
    }
}

interface BorderRowProps {
    onRowClick: () => void,
    isSelected: boolean,
    helperClass: string,
    darkBackground?: boolean,
    disableClick?: boolean,
}
  
class BorderRow extends React.Component<BorderRowProps> {
    constructor(props: BorderRowProps) {
        super(props)
    }
  
    render() {
        const {onRowClick, isSelected, helperClass, disableClick} = this.props;
        let classes = classNames(
            {'oui-table-row--highlighted': !disableClick && isSelected,
            'muted': disableClick},
        );
  
        return (
          <tr
              className={ classes }
              onClick={!disableClick && onRowClick}>
              <Table.TD verticalAlign="middle"><code className="push-half--left">{helperClass}</code></Table.TD>
          </tr>
                        
        );
      }
}
