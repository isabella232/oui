import React from 'react';
import { mount } from 'enzyme';

import CodeDiff from '../CodeDiff';

import { JSON_DIFF } from '../data.json';

describe('components/CodeDiff', function() {
  it('testSection is added', () => {
    const component = mount(
      <CodeDiff
        oldValue={ 'testing' }
        newValue={ 'testing 123' }
        testSection="my-code-diff"
      />
    );
    expect(component.find('[data-test-section="my-code-diff"]').length).toBe(1);
  });

  it('codeFoldMessageRenderer prop for ReactDiffViewer contains OUI Icon when not provided', () => {
    const component = mount(
      <CodeDiff
        oldValue={ JSON_DIFF.before }
        newValue={ JSON_DIFF.after }
        testSection="my-code-diff"
      />
    );
    expect(component.find('[data-test-section="my-code-diff"]').find('Memo(Icon)').length).toBe(2);
  });


  it('codeFoldMessageRenderer prop for ReactDiffViewer contains OUI Icon even provided as prop', () => {
    const component = mount(
      <CodeDiff
        oldValue={ JSON_DIFF.before }
        newValue={ JSON_DIFF.after }
        codeFoldMessageRenderer={ () => <div /> } // eslint-disable-line react/jsx-no-bind
        testSection="my-code-diff"
      />
    );
    expect(component.find('[data-test-section="my-code-diff"]').find('Memo(Icon)').length).toBe(2);
  });

  it('correctly passes props through to ReactDiffViewer', () => {
    const component = mount(
      <CodeDiff
        oldValue={ 'testing' }
        newValue={ 'testing 123' }
        prop1="prop1ShouldBePassed"
        prop2="prop2ShouldBePassed"
        prop3="prop3ShouldBePassed"
        codeFoldMessageRenderer="codeFoldMessageRendererShouldNotBePassed"
        styles="stylesShouldNotBePassed"
      />
    );
    expect(component.find('DiffViewer').props()).toEqual(
      expect.objectContaining({
        oldValue: 'testing',
        newValue: 'testing 123',
        prop1: 'prop1ShouldBePassed',
        prop2: 'prop2ShouldBePassed',
        prop3: 'prop3ShouldBePassed',
        borderLocation: [ 'top', 'right', 'bottom', 'left' ],
        compareMethod: 'diffWords',
        header: '',
        testSection: '',
        splitView: true,
        highlightLines: [],
        disableWordDiff: false,
        extraLinesSurroundingDiff: 3,
        showDiffOnly: true,
        useDarkTheme: false,
      })
    );
    expect(component.find('DiffViewer').props()).toEqual(
      expect.not.objectContaining({
        codeFoldMessageRenderer: 'codeFoldMessageRendererShouldNotBePassed',
        styles: 'stylesShouldNotBePassed',
      })
    );
  });

  it('does not change string props for oldValue and newValue', () => {
    const component = mount(
      <CodeDiff
        oldValue={ 'string1' }
        newValue={ 'string2' }
      />
    );
    expect(component.find('DiffViewer').props()).toEqual(
      expect.objectContaining({
        oldValue: 'string1',
        newValue: 'string2',
      })
    );
  });

  it('does stringify and format array values for oldValue and newValue', () => {
    const component = mount(
      <CodeDiff
        oldValue={ ['and', { audience_id: 123 }, { audience_id: 456 }] }
        newValue={ ['and', { audience_id: 123 }] }
      />
    );
    expect(component.find('DiffViewer').props()).toEqual(
      expect.objectContaining({
        oldValue: '[\n  \"and\",\n  {\n    \"audience_id\": 123\n  },\n  {\n    \"audience_id\": 456\n  }\n]',
        newValue: '[\n  \"and\",\n  {\n    \"audience_id\": 123\n  }\n]',
      })
    );
  });

  it('does stringify and format object values for oldValue and newValue', () => {
    const component = mount(
      <CodeDiff
        oldValue={{ test: 1 }}
        newValue={{ test: 2 }}
      />
    );
    expect(component.find('DiffViewer').props()).toEqual(
      expect.objectContaining({
        oldValue: '{\n  \"test\": 1\n}',
        newValue: '{\n  \"test\": 2\n}',
      })
    );
  });

  it('does stringify number values for oldValue and newValue', () => {
    const component = mount(
      <CodeDiff
        oldValue={ 1 }
        newValue={ 2 }
      />
    );
    expect(component.find('DiffViewer').props()).toEqual(
      expect.objectContaining({
        oldValue: '1',
        newValue: '2',
      })
    );
  });
});
