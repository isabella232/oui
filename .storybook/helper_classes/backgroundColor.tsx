import React from 'react';
import classNames from 'classnames';

import "./index.scss";

import Table from "../../src/components/Table/index";

import backgroundColorInformation from "./data.json";

interface BackgroundColorState {
    stylingColorRow: string,
    colorList: string[],
}

export class BackgroundColor extends React.Component<{}, BackgroundColorState> {
    constructor(props) {
        super(props);
        this.state = {
            stylingColorRow: 'white',
            colorList: ['white', 'faint', 'light', 'muted', 'medium', 'charcoal', 'brand', 'brand-dark', 'warning', 'bad-news', 'good-news', 'live', 'draft', 'current-color', 'none']
        }
    }

    switchColorRow = row => {
        this.setState({stylingColorRow: row});
    }

    render() {
        const {colorList, stylingColorRow} = this.state;
        const currentColor = backgroundColorInformation[stylingColorRow];
                    
        return (
            <section className="demo-only-section hard--top flex flex--column">
                <h1>Background color</h1>
                <p>The following examples illustrate the background color helper classes to style divs that are available through OUI's CSS.</p>
                <div className="flex flex-align--start push-double--sides"> 
                <div className="flex--1">
                    <Table style="rule">
                        <Table.THead>
                            <Table.TR>
                                <Table.TH>
                                    Helper Class
                                </Table.TH>
                                <Table.TH>
                                    Example
                                </Table.TH>
                            </Table.TR>
                        </Table.THead>
                        <Table.TBody>
                            {colorList.map((color) => {
                                return (
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow(color)} isSelected={stylingColorRow === color} helperClass={`background--${color}`}/>
                                )
                            })}
                        </Table.TBody>
                    </Table>
                    </div>
                <div className="demo-only-typography-container demo-only-typography-container--width-350 demo-only-typography-container--floating-top color--base soft-double--ends soft-double--sides push-double--top push-double--left">
                    {currentColor.source &&<div className="flex">
                        <div className="weight--bold push-double--right">Source</div>
                        <div className="anchor--right">{currentColor.source}</div>
                    </div>}
                    {currentColor.color &&<div className="flex">
                        <div className="weight--bold push-double--right">Referencing</div>
                        <div className="anchor--right">{currentColor.color}</div>
                    </div>}
                    {currentColor.root && 
                        <div className="flex push--bottom">
                            <div className="weight--bold push-double--right">Root color</div>
                            <div className="anchor--right">{currentColor.root}</div>
                        </div>}
                    {currentColor.note && 
                        <div>{currentColor.note}</div>}
                </div>
            </div>
        </section>
        );
    }
}

interface BackgroundColorRowProps {
    onRowClick: () => void,
    isSelected: boolean,
    helperClass: string,
    darkBackground?: boolean,
}
  
class BackgroundColorRow extends React.Component<BackgroundColorRowProps> {
    constructor(props: BackgroundColorRowProps) {
        super(props)
    }
  
    render() {
      const {onRowClick, isSelected, helperClass, darkBackground} = this.props;
      let typographyDemonstrationClasses = classNames(
          helperClass,
          'soft',
          {
              'reverse': darkBackground,
          }
      )
      let classes = classNames(
        {'oui-table-row--highlighted': isSelected,},
        'no-border',
      );
      return (
        <tr
            className={ classes }
            onClick={onRowClick}>
            <Table.TD verticalAlign="middle"><code className="push--left">{helperClass}</code></Table.TD>
            <Table.TD verticalAlign="middle"><div className={typographyDemonstrationClasses}><code>{helperClass}</code></div></Table.TD>
        </tr>
                      
      );
    }
}
