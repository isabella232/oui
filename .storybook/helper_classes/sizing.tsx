import React from 'react';
import classNames from 'classnames';

import "./index.scss";

import TabNav from "../../src/components/TabNav/index";
import Table from "../../src/components/Table/index";
import Link from '../../src/components/Link/index';

interface SizingState {
    stylingTab: string,
    minWidthExample: string,
    minHeightExample: string,
}

export class Sizing extends React.Component<{}, SizingState> {
    private aboutRef;
    private percentageRef;
    private twoColRef;
    private threeColRef;
    private fourColRef;
    private fiveColRef;
    private sixColRef;
    private eightColRef;
    private tenColRef;
    private twelveColRef;
    private pixelRef;
    private widthRef;
    private minwidthRef;
    private maxwidthRef;
    private heightRef;
    private minheightRef;
    private pixelHeightRef;

    constructor(props) {
        super(props);
        this.state = {
            stylingTab: 'width',
            minWidthExample: '300',
            minHeightExample: '300',
            sizingIncrements: ['50', '75', '100', '150', '200', '250', '300']
        };

        this.aboutRef = React.createRef<HTMLDivElement>();
        this.percentageRef = React.createRef<HTMLDivElement>();
        this.twoColRef = React.createRef<HTMLDivElement>();
        this.threeColRef = React.createRef<HTMLDivElement>();
        this.fourColRef = React.createRef<HTMLDivElement>();
        this.fiveColRef = React.createRef<HTMLDivElement>();
        this.sixColRef = React.createRef<HTMLDivElement>();
        this.eightColRef = React.createRef<HTMLDivElement>();
        this.tenColRef = React.createRef<HTMLDivElement>();
        this.twelveColRef = React.createRef<HTMLDivElement>();
        this.pixelRef = React.createRef<HTMLDivElement>();
        this.widthRef = React.createRef<HTMLDivElement>();
        this.minwidthRef = React.createRef<HTMLDivElement>();
        this.maxwidthRef = React.createRef<HTMLDivElement>();
        this.heightRef = React.createRef<HTMLDivElement>();
        this.minheightRef = React.createRef<HTMLDivElement>();
        this.pixelHeightRef = React.createRef<HTMLDivElement>();
        this.handleSizingSectionClick = this.handleSizingSectionClick.bind(this);
    }

    handleSizingSectionClick = location => {
        switch (location) {
            case 'about':
                this.aboutRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                break;
            case 'percentage':
                this.percentageRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'two':
                this.twoColRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'three':
                this.threeColRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'four':
                this.fourColRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'five':
                this.fiveColRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'six':
                this.sixColRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'eight':
                this.eightColRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'ten':
                this.tenColRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'twelve':
                this.twelveColRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'pixel':
                this.pixelRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'width':
                this.widthRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'minwidth':
                this.minwidthRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'maxwidth':
                this.maxwidthRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'height':
                this.heightRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'pixelheight':
                this.pixelHeightRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
            case 'minheight':
                this.minheightRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    });
                break;
        }
    }
    
    switchTab = tab => {
        this.setState({stylingTab: tab, 
            minHeightExample: '300',
            minWidthExample: '300'});
    }

    changeContainerWidthSize = newSize => {
        this.setState({minWidthExample: newSize})
    }

    changeContainerHeightSize = newSize => {
        this.setState({minHeightExample: newSize})
    }

    renderHeightTabs = size => {
        return (
            <TabNav.Tab onClick={() => this.changeContainerHeightSize(size) } tabId={size}>
                {size}px
            </TabNav.Tab>
        )
    }

    renderWidthTabs = size => {
        return (
            <TabNav.Tab onClick={() => this.changeContainerWidthSize(size) } tabId={size}>
                {size}px
            </TabNav.Tab>
        )
    }

    render() {
        const {stylingTab, minWidthExample, minHeightExample, sizingIncrements} = this.state;

        let tabContent;
        const exampleContainerClasses = classNames(
            "push",
            "soft",
            'border--all',
            "border-radius",
            "text--center",
            "demo-only-light-background",
            "reverse",
        )
        switch (stylingTab) {
            case 'height' :
                tabContent = 
                    <div className='flex flex-align--start'>
                        <div className='demo-only-floating-container flex flex--column width--150 push-double--left'>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('height') }>
                                <Link><span className='weight--bold'>Height classes</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('pixelheight') }>
                                <Link><span className="push-double--left">Pixel Height</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('minheight') }>
                                <Link><span className="push-double--left">Min Height</span></Link>
                            </div>
                        </div>
                        <div className="push--left demo-only-width-700">
                            <div ref={this.heightRef} className='soft-double--top'>
                                <h3>Height classes</h3>
                                <p>OUI has two sets of height classes: regular height and min height.</p>
                            </div>
                            <div ref={this.pixelHeightRef}>
                                <h4>Pixel height</h4>
                                <p>Along with specific pixel heights, there are two additional height classes:
                                    <ol className="list--bullet">
                                        <li><code>height--1-1</code> - height: 100%</li>
                                        <li><code>height--auto</code> - height: auto</li>
                                    </ol>
                                </p>
                                <div className={exampleContainerClasses + " flex"}>
                                    <div className="height--50 border-radius soft-half demo-only-dark-background"><code>height--50</code></div>
                                    <div className="height--75 border-radius soft-half demo-only-dark-background push--left"><code>height--75</code></div>
                                    <div className="height--100 border-radius soft-half demo-only-dark-background push--left"><code>height--100</code></div>
                                    <div className="height--150 border-radius soft-half demo-only-dark-background push--left"><code>height--150</code></div>
                                    <div className="height--200 border-radius soft-half demo-only-dark-background push--left"><code>height--200</code></div>
                                    <div className="height--250 border-radius soft-half demo-only-dark-background push--left"><code>height--250</code></div>
                                    <div className="height--300 border-radius soft-half demo-only-dark-background push--left"><code>height--300</code></div>
                                </div>
                            </div>
                            <div ref={this.minheightRef}>
                                <h4>Min Pixel height</h4>
                                <p>Min height will prevent a div to be any smaller than what you've set it to. This is especially useful when creating a responsive design
                                    as you can set the absolute smallest div width you want when the screen shrinks.</p>
                                <p>Use the tabs below to change the size of the container (light purple) and see how the different boxes respond given their min-width settings.</p>
                                <TabNav activeTab={minHeightExample} style={ ['small', 'sub'] }>
                                    {sizingIncrements.map((increment) => {
                                        return (
                                            <TabNav.Tab onClick={() => this.changeContainerHeightSize(increment) } tabId={increment}>
                                                {increment}px
                                            </TabNav.Tab>
                                        )
                                    })}
                                </TabNav>
                                <div className={exampleContainerClasses + ` flex demo-only-special-height-${minHeightExample}`}>
                                    <div className="min-height--50 height--auto border-radius soft-half demo-only-dark-background"><code>min-height--50</code></div>
                                    <div className="min-height--75 height--auto border-radius soft-half demo-only-dark-background push--left"><code>min-height--75</code></div>
                                    <div className="min-height--100 height--auto border-radius soft-half demo-only-dark-background push--left"><code>min-height--100</code></div>
                                    <div className="min-height--150 height--auto border-radius soft-half demo-only-dark-background push--left"><code>min-height--150</code></div>
                                    <div className="min-height--200 height--auto border-radius soft-half demo-only-dark-background push--left"><code>min-height--200</code></div>
                                    <div className="min-height--250 height--auto border-radius soft-half demo-only-dark-background push--left"><code>min-height--250</code></div>
                                    <div className="min-height--300 height--auto border-radius soft-half demo-only-dark-background push--left"><code>min-height--300</code></div>
                                </div>
                            </div>
                        </div>
                    </div>
                break;
            case 'width': 
                tabContent = 
                    <div className='flex flex-align--start'>
                        <div className='demo-only-floating-container flex flex--column width--150 push-double--left'>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('percentage') }>
                                <Link><span className='weight--bold'>Percentage Width</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('two') }>
                                <Link><span className="push-double--left">2 Column Span</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('three') }>
                                <Link><span className="push-double--left">3 Column Span</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('four') }>
                                <Link><span className="push-double--left">4 Column Span</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('five') }>
                                <Link><span className="push-double--left">5 Column Span</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('six') }>
                                <Link><span className="push-double--left">6 Column Span</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('eight') }>
                                <Link><span className="push-double--left">8 Column Span</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('ten') }>
                                <Link><span className="push-double--left">10 Column Span</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('twelve') }>
                                <Link><span className="push-double--left">12 Column Span</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('pixel') }>
                                <Link><span className='weight--bold'>Pixel Width</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('width') }>
                                <Link><span className="push-double--left">Width</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('maxwidth') }>
                                <Link><span className="push-double--left">Max Width</span></Link>
                            </div>
                            <div
                                className="background--white no-border text--left soft-half--bottom"
                                onClick={ () => this.handleSizingSectionClick('minwidth') }>
                                <Link><span className="push-double--left">Min Width</span></Link>
                            </div>
                        </div>
                        <div className="push--left demo-only-width-700">
                            <div ref={this.percentageRef} className='soft-double--top'>
                                <h3>Percentage Width</h3>
                                <p>OUI organizes its percentage width helper classes by categorizing them into column spans. For example,
                                    the two column span has one class that specifies a width of size 50%. The three column span has two classes:
                                    one of size 33% and the other of 66%. The column spans available are: 1, 2, 3, 4, 5, 6, 8, 10, 12.
                                </p>
                                <p>
                                    The model for the percentage width helper classes is as follows: <code>width--</code>[numerator]-[denominator].
                                    For example, if you wanted a column that took up 3/8th of the screen, you'd use <code>width--3-8</code>.
                                </p>
                            </div>
                            <div ref={this.twoColRef}>
                                <h4>2 Column Span</h4>
                                <div className={exampleContainerClasses}>
                                    <div className="flex">
                                        <div className="width--1-2 border-radius soft-half demo-only-dark-background"><code>width--1-2</code></div>
                                        <div className="width--1-2 border-radius soft-half push--left demo-only-dark-background"><code>width--1-2</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--1-1 border-radius soft-half demo-only-dark-background"><code>width--1-1</code></div>
                                    </div>
                                </div>
                            </div>
                            <div ref={this.threeColRef} className='soft-double--top'>
                                <h4>3 Column Span</h4>
                                <div className={exampleContainerClasses}>
                                    <div className="flex">
                                        <div className="width--1-3 border-radius soft-half demo-only-dark-background"><code>width--1-3</code></div>
                                        <div className="width--1-3 border-radius soft-half push--left demo-only-dark-background"><code>width--1-3</code></div>
                                        <div className="width--1-3 border-radius soft-half push--left demo-only-dark-background"><code>width--1-3</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--2-3 border-radius soft-half demo-only-dark-background"><code>width--2-3</code></div>
                                        <div className="width--1-3 border-radius soft-half push--left demo-only-dark-background"><code>width--1-3</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--1-1 border-radius soft-half demo-only-dark-background"><code>width--1-1</code></div>
                                    </div>
                                </div>
                            </div>
                            <div ref={this.fourColRef} className='soft-double--top'>
                                <h4>4 Column Span</h4>
                                <div className={exampleContainerClasses}>
                                    <div className="flex">
                                        <div className="width--1-4 border-radius soft-half demo-only-dark-background"><code>width--1-4</code></div>
                                        <div className="width--1-4 border-radius soft-half push--left demo-only-dark-background"><code>width--1-4</code></div>
                                        <div className="width--1-4 border-radius soft-half push--left demo-only-dark-background"><code>width--1-4</code></div>
                                        <div className="width--1-4 border-radius soft-half push--left demo-only-dark-background"><code>width--1-4</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--2-4 border-radius soft-half demo-only-dark-background"><code>width--2-4</code></div>
                                        <div className="width--2-4 border-radius soft-half push--left demo-only-dark-background"><code>width--2-4</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--3-4 border-radius soft-half demo-only-dark-background"><code>width--3-4</code></div>
                                        <div className="width--1-4 border-radius soft-half push--left demo-only-dark-background"><code>width--1-4</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--1-1 border-radius soft-half demo-only-dark-background"><code>width--1-1</code></div>
                                    </div>
                                </div>
                            </div>
                            <div ref={this.fiveColRef} className='soft-double--top'>
                                <h4>5 Column Span</h4>
                                <div className={exampleContainerClasses}>
                                    <div className="flex">
                                        <div className="width--1-5 border-radius soft-half demo-only-dark-background"><code>width--1-5</code></div>
                                        <div className="width--1-5 border-radius soft-half push--left demo-only-dark-background"><code>width--1-5</code></div>
                                        <div className="width--1-5 border-radius soft-half push--left demo-only-dark-background"><code>width--1-5</code></div>
                                        <div className="width--1-5 border-radius soft-half push--left demo-only-dark-background"><code>width--1-5</code></div>
                                        <div className="width--1-5 border-radius soft-half push--left demo-only-dark-background"><code>width--1-5</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--1-5 border-radius soft-half demo-only-dark-background"><code>width--1-5</code></div>
                                        <div className="width--4-5 border-radius soft-half push--left demo-only-dark-background"><code>width--4-5</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--2-5 border-radius soft-half demo-only-dark-background"><code>width--2-5</code></div>
                                        <div className="width--3-5 border-radius soft-half push--left demo-only-dark-background"><code>width--3-5</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--1-1 border-radius soft-half demo-only-dark-background"><code>width--1-1</code></div>
                                    </div>
                                </div>
                            </div>
                            <div ref={this.sixColRef} className='soft-double--top'>
                                <h4>6 Column Span</h4>
                                <div className={exampleContainerClasses}>
                                    <div className="flex">
                                        <div className="width--1-6 border-radius soft-half demo-only-dark-background"><code>width--1-6</code></div>
                                        <div className="width--1-6 border-radius soft-half push--left demo-only-dark-background"><code>width--1-6</code></div>
                                        <div className="width--1-6 border-radius soft-half push--left demo-only-dark-background"><code>width--1-6</code></div>
                                        <div className="width--1-6 border-radius soft-half push--left demo-only-dark-background"><code>width--1-6</code></div>
                                        <div className="width--1-6 border-radius soft-half push--left demo-only-dark-background"><code>width--1-6</code></div>
                                        <div className="width--1-6 border-radius soft-half push--left demo-only-dark-background"><code>width--1-6</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--2-6 border-radius soft-half demo-only-dark-background"><code>width--2-6</code></div>
                                        <div className="width--4-6 border-radius soft-half push--left demo-only-dark-background"><code>width--4-6</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--3-6 border-radius soft-half demo-only-dark-background"><code>width--3-6</code></div>
                                        <div className="width--3-6 border-radius soft-half push--left demo-only-dark-background"><code>width--3-6</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--1-1 border-radius soft-half demo-only-dark-background"><code>width--1-1</code></div>
                                    </div>
                                </div>
                            </div>
                            <div ref={this.eightColRef} className='soft-double--top'>
                                <h4>8 Column Span</h4>
                                <div className={exampleContainerClasses}>
                                    <div className="flex">
                                        <div className="width--1-8 border-radius soft-half demo-only-dark-background"><code>width--1-8</code></div>
                                        <div className="width--7-8 border-radius soft-half push--left demo-only-dark-background"><code>width--7-8</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--2-8 border-radius soft-half demo-only-dark-background"><code>width--2-8</code></div>
                                        <div className="width--6-8 border-radius soft-half push--left demo-only-dark-background"><code>width--6-8</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--3-8 border-radius soft-half demo-only-dark-background"><code>width--3-8</code></div>
                                        <div className="width--5-8 border-radius soft-half push--left demo-only-dark-background"><code>width--5-8</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--4-8 border-radius soft-half demo-only-dark-background"><code>width--4-8</code></div>
                                        <div className="width--4-8 border-radius soft-half push--left demo-only-dark-background"><code>width--4-8</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--1-1 border-radius soft-half demo-only-dark-background"><code>width--1-1</code></div>
                                    </div>
                                </div>
                            </div>
                            <div ref={this.tenColRef} className='soft-double--top'>
                                <h4>10 Column Span</h4>
                                <div className={exampleContainerClasses}>
                                    <div className="flex">
                                        <div className="width--1-10 border-radius soft-half demo-only-dark-background"><code>width--1-10</code></div>
                                        <div className="width--9-10 border-radius soft-half push--left demo-only-dark-background"><code>width--9-10</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--2-10 border-radius soft-half demo-only-dark-background"><code>width--2-10</code></div>
                                        <div className="width--8-10 border-radius soft-half push--left demo-only-dark-background"><code>width--8-10</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--3-10 border-radius soft-half demo-only-dark-background"><code>width--3-10</code></div>
                                        <div className="width--7-10 border-radius soft-half push--left demo-only-dark-background"><code>width--7-10</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--4-10 border-radius soft-half demo-only-dark-background"><code>width--4-10</code></div>
                                        <div className="width--6-10 border-radius soft-half push--left demo-only-dark-background"><code>width--6-10</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--5-10 border-radius soft-half demo-only-dark-background"><code>width--5-10</code></div>
                                        <div className="width--5-10 border-radius soft-half push--left demo-only-dark-background"><code>width--5-10</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--1-1 border-radius soft-half demo-only-dark-background"><code>width--1-1</code></div>
                                    </div>
                                </div>
                            </div>
                            <div ref={this.twelveColRef} className='soft-double--top'>
                                <h4>12 Column Span</h4>
                                <div className={exampleContainerClasses}>
                                    <div className='flex'>
                                        <div className="width--1-12 border-radius soft-half demo-only-dark-background"><code>width--1-12</code></div>
                                        <div className="width--11-12 border-radius soft-half push--left demo-only-dark-background"><code>width--11-12</code></div>
                                    </div>
                                    <div className='flex push--top'>
                                        <div className="width--2-12 border-radius soft-half demo-only-dark-background"><code>width--2-12</code></div>
                                        <div className="width--10-12 border-radius soft-half push--left demo-only-dark-background"><code>width--10-12</code></div>
                                    </div>
                                    <div className='flex push--top'>
                                        <div className="width--3-12 border-radius soft-half demo-only-dark-background"><code>width--3-12</code></div>
                                        <div className="width--9-12 border-radius soft-half push--left demo-only-dark-background"><code>width--9-12</code></div>
                                    </div> 
                                    <div className='flex push--top'>
                                        <div className="width--4-12 border-radius soft-half demo-only-dark-background"><code>width--4-12</code></div>
                                        <div className="width--8-12 border-radius soft-half push--left demo-only-dark-background"><code>width--8-12</code></div>
                                    </div>
                                    <div className='flex push--top'>
                                        <div className="width--5-12 border-radius soft-half demo-only-dark-background"><code>width--5-12</code></div>
                                        <div className="width--7-12 border-radius soft-half push--left demo-only-dark-background"><code>width--7-12</code></div>
                                    </div>
                                    <div className='flex push--top'>
                                        <div className="width--6-12 border-radius soft-half demo-only-dark-background"><code>width--6-12</code></div>
                                        <div className="width--6-12 border-radius soft-half push--left demo-only-dark-background"><code>width--6-12</code></div>
                                    </div>
                                    <div className="flex push--top">
                                        <div className="width--1-1 border-radius soft-half demo-only-dark-background"><code>width--1-1</code></div>
                                    </div>
                                </div>
                            </div>
                            <div ref={this.pixelRef} className='soft-double--top'>
                                <h3>Pixel Width</h3>
                                <p>OUI has a series of helper classes defined for sizing divs from 50px wide to 300px wide.</p>
                                <p>
                                    It has also defined two series of classes, one for min widths and another for max widths.
                                </p>
                            </div>
                            <div ref={this.widthRef}>
                                <h4>Pixel width</h4>
                                <div className={exampleContainerClasses + " demo-only-width-320"}>
                                    <div className="width--50 border-radius soft-half demo-only-dark-background"><code>width--50</code></div>
                                    <div className="width--75 border-radius soft-half demo-only-dark-background push--top"><code>width--75</code></div>
                                    <div className="width--100 border-radius soft-half demo-only-dark-background push--top"><code>width--100</code></div>
                                    <div className="width--150 border-radius soft-half demo-only-dark-background push--top"><code>width--150</code></div>
                                    <div className="width--200 border-radius soft-half demo-only-dark-background push--top"><code>width--200</code></div>
                                    <div className="width--250 border-radius soft-half demo-only-dark-background push--top"><code>width--250</code></div>
                                    <div className="width--300 border-radius soft-half demo-only-dark-background push--top"><code>width--300</code></div>
                                </div>
                            </div>
                            <div ref={this.maxwidthRef}>
                                <h4>Max Pixel width</h4>
                                <p>Max width will prevent a div to be any bigger than what you've set it to.</p>
                                <p>Each dark purple box has a <code>width: 100%</code> setting along with their max width setting.</p>
                                <div className={exampleContainerClasses + " demo-only-width-320"}>
                                    <div className="max-width--50 width--1-1 border-radius soft-half demo-only-dark-background"><code>max-width--50</code></div>
                                    <div className="max-width--75 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>max-width--75</code></div>
                                    <div className="max-width--100 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>max-width--100</code></div>
                                    <div className="max-width--150 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>max-width--150</code></div>
                                    <div className="max-width--200 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>max-width--200</code></div>
                                    <div className="max-width--250 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>max-width--250</code></div>
                                    <div className="max-width--300 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>max-width--300</code></div>
                                </div>
                            </div>
                            <div ref={this.minwidthRef}>
                                <h4>Min Pixel width</h4>
                                <p>Min width will prevent a div to be any smaller than what you've set it to. This is especially useful when creating a responsive design
                                    as you can set the absolute smallest div width you want when the screen shrinks.</p>
                                <p>Use the tabs below to change the size of the container (light purple) and see how the different boxes respond given their min-width settings.</p>
                                <TabNav activeTab={minWidthExample} style={ ['small', 'sub'] }>
                                    {sizingIncrements.map((increment) => {
                                        return (
                                            <TabNav.Tab onClick={() => this.changeContainerWidthSize(increment) } tabId={increment}>
                                                {increment}px
                                            </TabNav.Tab>
                                        )
                                    })}
                                </TabNav>
                                <div className={exampleContainerClasses + ` demo-only-special-width-${minWidthExample}`}>
                                    <div className="min-width--50 width--1-1 border-radius soft-half demo-only-dark-background"><code>min-width--50</code></div>
                                    <div className="min-width--75 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>min-width--75</code></div>
                                    <div className="min-width--100 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>min-width--100</code></div>
                                    <div className="min-width--150 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>min-width--150</code></div>
                                    <div className="min-width--200 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>min-width--200</code></div>
                                    <div className="min-width--250 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>min-width--250</code></div>
                                    <div className="min-width--300 width--1-1 border-radius soft-half demo-only-dark-background push--top"><code>min-width--300</code></div>
                                </div>
                            </div>
                        </div>
                    </div>
                break;
        }
        return (
            <section className="demo-only-section hard--top flex flex--column">
                <h1>Styling divs</h1>
                <p>The following examples illustrate the various helper classes to style divs that are available through OUI's CSS.</p>
                <h3>About sizing</h3>
                <p className="demo-only-width-700">
                    There are two ways to specify the width of a div: with percentages or with pixels. 
                    Specifying the width of a div via percentage means that the div's size will change as 
                    the width of the screen changes. There are classes for specifying min and max widths as well.
                </p>
                <p className="demo-only-width-700">
                    For specifying height, there are only classes using pixels for now. There are classes to specify min height as well. 
                </p>
                <div className="push--bottom">
                    <TabNav activeTab={stylingTab} style={['sub']}>
                        <TabNav.Tab onClick={() => this.switchTab('width')} tabId="width">
                            Width
                        </TabNav.Tab>
                        <TabNav.Tab onClick={() => this.switchTab('height')} tabId="height">
                            Height
                        </TabNav.Tab>
                    </TabNav>
                </div>
                {tabContent}
            </section>
        );
    }
}
