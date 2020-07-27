import React from 'react';
import classNames from 'classnames';

import "./index.scss";

import TabNav from "../../src/components/TabNav/index";
import Table from "../../src/components/Table/index";
import Button from "../../src/components/Button/index";
import Link from '../../src/components/Link/index';

const backgroundColorInformation = {
    'white' : {
        'source': 'variable',
        'color': '$color > background, white',
        'root': '$base-white',
        'note': 'This class is identical to background--faint',
    },
    'faint' : {
        'source': 'variable',
        'color': '$color > background, faint',
        'root': '$base-white',
        'note': 'This class is identical to background--white',
    },
    'light' : {
        'source': 'variable',
        'color': '$root-color, grey-06',
        'root': '$base-black, 94%',
    },
    'muted' : {
        'source': 'variable',
        'color': '$root-color, grey-35',
        'root': '$base-black, 65%',
    },
    'medium' : {
        'source': 'variable',
        'color': '$root-color, grey-50',
        'root': '$base-black, 50%',
    },
    'charcoal' : {
        'source': 'variable',
        'color': '$root-color, grey-78',
        'root': '$base-black, 22%',
    },
    'brand' : {
        'source': 'variable',
        'color': '$root-color, light-blue-75',
        'root': '#4069FF',
    },
    'brand-dark' : {
        'source': 'variable',
        'color': '$root-color, dark-blue-75',
        'root': '#46456A',
    },
    'warning' : {
        'source': 'variable',
        'color': '$brand-color, gold, 20% white',
        'root': '#FFD233, 20% white',
    },
    'bad-news' : {
        'source': 'variable',
        'color': '$brand-color, red, 20% white',
        'root': '#FF5B5B, 20% white',
    },
    'good-news' : {
        'source': 'variable',
        'color': '$brand-color, green, 20% white',
        'root': '#33CF76, 20% white',
    },
    'live' : {
        'source': 'variable',
        'color': '$brand-color, green',
        'root': '#33CF76',
    },
    'draft' : {
        'source': 'variable',
        'color': '$brand-color, orange',
        'root': '#FF9C33',
    },
    'current-color': {
        'note': 'This class takes on the value of the current font color',
    },
    'none' : {
        'note': 'This class removes all background color',
    }
}

interface DivStylingState {
    stylingTab: string,
    stylingColorRow: string,
    borderAddition: string,
    borderSide: string,
    borderFeature: string,
}

export class DivStyling extends React.Component<{}, DivStylingState> {
    private aboutRef;
    private examplesRef;
    constructor(props) {
        super(props);
        this.state = {
            stylingTab: 'sizing',
            stylingColorRow: 'white',
            borderAddition: 'add',
            borderSide: 'all',
            borderFeature: 'none',
        };

        this.aboutRef = React.createRef<HTMLDivElement>();
        this.examplesRef = React.createRef<HTMLDivElement>();
        this.handleSizingSectionClick = this.handleSizingSectionClick.bind(this);
    }

    handleSizingSectionClick = location => {
        console.log('triggered location', location);
        switch (location) {
            case 'about':
                this.aboutRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                break;
            case 'examples':
                this.examplesRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
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

    switchColorRow = row => {
        this.setState({stylingColorRow: row});
    }
    
    switchTab = tab => {
        this.setState({stylingTab: tab, borderFeature: 'none', borderAddition: 'all', stylingColorRow: 'white', borderSide: 'all'});
    }

    dummyFunction = () => {
        console.log("triggered function")
    }

    render() {
        const {stylingTab, borderAddition, borderFeature, borderSide, stylingColorRow} = this.state;
        const currentColor = backgroundColorInformation[stylingColorRow];

        let tabContent;
        
        switch (stylingTab) {
            case 'sizing': 
                tabContent = 
                    <div className='flex flex-align--start'>
                        <div className='demo-only-floating-container flex flex--column width--150 push-double--left'>
                            <div
                                className="background--white no-border text--left soft--bottom"
                                onClick={ () => this.handleSizingSectionClick('about')  }>
                                <Link><span className='weight--bold'>About sizing</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft--bottom"
                                onClick={ () => this.handleSizingSectionClick('examples') }>
                                <Link><span className='weight--bold'>Examples</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft--bottom"
                                onClick={ () => this.handleSizingSectionClick('two') }>
                                <Link><span className="push-double--left">2 Column Span</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft--bottom"
                                onClick={ () => this.handleSizingSectionClick('three') }>
                                <Link><span className="push-double--left">3 Column Span</span></Link>
                            </div>
                        </div>
                        <div className="push--left">
                            <div ref={this.aboutRef} className='min-height--300'>
                                <h3>About sizing</h3>
                            </div>
                            <div className='min-height--300'>
                                <h3>Test</h3>
                            </div>
                            <div className='min-height--300'>
                                <h3>Test</h3>
                            </div>
                            <div ref={this.examplesRef} className='soft-double--top min-height--300'>
                                <h3>Examples</h3>
                            </div>
                            <div className='min-height--300'>
                                <h3>Test</h3>
                            </div>
                            <div className='min-height--300'>
                                <h3>Test</h3>
                            </div>
                        </div>
                    </div>
                break;
            case 'borders':
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
                tabContent = 
                    <div className="flex flex--column flex-align--start push-double--sides"> 
                        <p>Click through the different options in the columns to get your desired effect.</p>
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
                break;
            case 'color':
                tabContent = 
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
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('white')} isSelected={stylingColorRow === 'white'} helperClass='background--white'/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('faint')} isSelected={stylingColorRow === 'faint'} helperClass='background--faint'/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('light')} isSelected={stylingColorRow === 'light'} helperClass='background--light'/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('muted')} isSelected={stylingColorRow === 'muted'} helperClass='background--muted'/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('medium')} isSelected={stylingColorRow === 'medium'} helperClass='background--medium' darkBackground={true}/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('charcoal')} isSelected={stylingColorRow === 'charcoal'} helperClass='background--charcoal' darkBackground={true}/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('brand')} isSelected={stylingColorRow === 'brand'} helperClass='background--brand' darkBackground={true}/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('brand-dark')} isSelected={stylingColorRow === 'brand-dark'} helperClass='background--brand-dark' darkBackground={true}/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('warning')} isSelected={stylingColorRow === 'warning'} helperClass='background--warning'/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('bad-news')} isSelected={stylingColorRow === 'bad-news'} helperClass='background--bad-news'/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('good-news')} isSelected={stylingColorRow === 'good-news'} helperClass='background--good-news'/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('live')} isSelected={stylingColorRow === 'live'} helperClass='background--live'/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('draft')} isSelected={stylingColorRow === 'draft'} helperClass='background--draft'/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('current-color')} isSelected={stylingColorRow === 'current-color'} helperClass='background--current-color'/>
                                    <BackgroundColorRow onRowClick={() => this.switchColorRow('none')} isSelected={stylingColorRow === 'none'} helperClass='background--none'/>
                                </Table.TBody>
                            </Table>
                            </div>
                        <div className="demo-only-typography-container demo-only-typography-container--width-350 demo-only-typography-container--floating-top color--base soft-double--ends soft-double--sides push-double--top push-double--left border--all border-radius">
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
                break;
        }
        return (
            <section className="demo-only-section hard--top flex flex--column">
                <h1>Styling divs</h1>
                <p>The following examples illustrate the various helper classes to style divs that are available through OUI's CSS.</p>
                <div className="push--bottom">
                    <TabNav activeTab={stylingTab} style={['sub']}>
                        <TabNav.Tab onClick={() => this.switchTab('color')} tabId="color">
                            Background color
                        </TabNav.Tab> 
                        <TabNav.Tab onClick={() => this.switchTab('borders')} tabId="borders">
                            Borders
                        </TabNav.Tab> 
                        <TabNav.Tab onClick={() => this.switchTab('sizing')} tabId="sizing">
                            Sizing
                        </TabNav.Tab>
                    </TabNav>
                </div>
                {tabContent}
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
              onClick={onRowClick}>
              <Table.TD verticalAlign="middle"><code className="push-half--left">{helperClass}</code></Table.TD>
          </tr>
                        
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
