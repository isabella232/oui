import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs';

import { JSON_DIFF, STRING_DIFF } from './data.json';

import CodeDiff from './';
import { StoryStateWrapper } from '../../utils/storybook-utils';

const stories = storiesOf('Informational|CodeDiff', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

const OLDSTRING = STRING_DIFF.before;
const NEWSTRING = STRING_DIFF.after;

const OLDJSON = JSON_DIFF.before;
const NEWJSON = JSON_DIFF.after;

stories
  .add('No differences', (() => {
    return (
      <div>
        <h2>CodeDiff</h2>
        <p>Get info on the core component (ReactDiffViewer) props at <a href="https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props" rel="noopener noreferrer" target="_blank">https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props</a>.</p>
        <CodeDiff
          header={ text('header', 'my_awesome_file.py') }
          oldValue={ OLDSTRING }
          newValue={ OLDSTRING }
          hideLineNumbers={ boolean('hideLineNumbers', false) }
          showDiffOnly={ boolean('showDiffOnly', true) }
          splitView={ boolean('splitView', true) }
        />
      </div>
    );
  }))
  .add('Minimal differences', (() => {
    return (
      <div>
        <h2>CodeDiff</h2>
        <p>Get info on the core component (ReactDiffViewer) props at <a href="https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props" rel="noopener noreferrer" target="_blank">https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props</a>.</p>
        <CodeDiff
          header={ text('fileName', 'fileName.md') }
          hideLineNumbers={ boolean('hideLineNumbers', false) }
          oldValue={ 'A test with old things' }
          newValue={ 'A test with new things' }
        />
      </div>
    );
  }))
  .add('Long contiguous string', (() => {
    return (
      <div>
        <h2>CodeDiff</h2>
        <p>Get info on the core component (ReactDiffViewer) props at <a href="https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props" rel="noopener noreferrer" target="_blank">https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props</a>.</p>
        <CodeDiff
          header={ text('fileName', 'fileName.md') }
          hideLineNumbers={ boolean('hideLineNumbers', false) }
          oldValue={ 'AveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryAveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryverylongstring' } // eslint-disable max-len
          newValue={ 'AveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryAveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryverylongstring' } // eslint-disable max-len
        />
      </div>
    );
  }))
  .add('Differences with collapsed sections', (() => {
    return (
      <div>
        <h2>CodeDiff</h2>
        <p>Get info on the core component (ReactDiffViewer) props at <a href="https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props" rel="noopener noreferrer" target="_blank">https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props</a>.</p>
        <CodeDiff
          extraLinesSurroundingDiff={ number('extraLinesSurroundingDiff', 3) }
          header={ text('header', 'my_awesome_file.py') }
          oldValue={ OLDJSON }
          newValue={ NEWJSON }
          hideLineNumbers={ boolean('hideLineNumbers', false) }
          showDiffOnly={ boolean('showDiffOnly', true) }
          splitView={ boolean('splitView', true) }
        />
      </div>
    );
  }))
  .add('Unified vs. Side by Side', (() => {
    return (
      <div>
        <h2>CodeDiff</h2>
        <p>Get info on the core component (ReactDiffViewer) props at <a href="https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props" rel="noopener noreferrer" target="_blank">https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props</a>.</p>
        <CodeDiff
          header={ text('Unified View > header', 'This is a Unified Diff') }
          oldValue={ OLDSTRING }
          newValue={ NEWSTRING }
          hideLineNumbers={ boolean('Unified View > hideLineNumbers', true) }
          splitView={ false }
        />
        <br />
        <br />
        <CodeDiff
          header={ text('Split View > header', 'This is a Split Diff') }
          oldValue={ OLDSTRING }
          newValue={ NEWSTRING }
          hideLineNumbers={ boolean('Split View > hideLineNumbers', true) }
          splitView={ true }
        />
      </div>
    );
  }))
  .add('Line Selection', (() => {
    return (
      <div>
        <h2>CodeDiff</h2>
        <p>
          This story implement an example method of highliting lines that are clicked.{' '}
          This example demostrates being able to add consecutive lines via the shift{' '}
          key or arbitrary lines via the alt key.
        </p>
        <p>
          Get info on the core component (ReactDiffViewer) props at{' '}
          <a
            href="https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props"
            rel="noopener noreferrer"
            target="_blank">
            https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props
          </a>.
        </p>
        <StoryStateWrapper initialValue={ [] }>
          {(selectedLines, setSelectedLineNumbers) => {
            const handleLineClick = (lineId, { altKey, shiftKey }) => {
              let highlightedLines = [lineId];
              if (shiftKey && selectedLines.length === 1) {
                const [dir, oldId] = selectedLines[0].split('-');
                const [newDir, newId] = lineId.split('-');
                if (dir === newDir) {
                  highlightedLines = [];
                  const lowEnd = Math.min(Number(oldId), Number(newId));
                  const highEnd = Math.max(Number(oldId), Number(newId));
                  for (let i = lowEnd; i <= highEnd; i++) {
                    highlightedLines.push(`${dir}-${i}`);
                  }
                }
              }

              setSelectedLineNumbers(altKey ? selectedLines.concat(highlightedLines) : highlightedLines);
            };

            return (
              <CodeDiff
                oldValue={ OLDJSON }
                newValue={ NEWJSON }
                highlightLines={ selectedLines }
                onLineNumberClick={ handleLineClick } // eslint-disable-line react/jsx-no-bind
              />
            );
          }}
        </StoryStateWrapper>
      </div>
    );
  }))
  .add('Knobs Playground', (() => {
    return (
      <div>
        <h2>CodeDiff</h2>
        <p>
          This story adds knobs for OUI-only props as well as underlying ReactDiffViewer props.
        </p>
        <p>
          Get info on the core component (ReactDiffViewer) props at{' '}
          <a
            href="https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props"
            rel="noopener noreferrer"
            target="_blank">
            https://github.com/praneshr/react-diff-viewer/tree/v3.0.0#props
          </a>.
        </p>
        <CodeDiff
          oldValue={ OLDJSON }
          newValue={ NEWJSON }
          compareMethod={ select('compareMethod', [
            'diffChars',
            'diffWords',
            'diffWordsWithSpace',
            'diffLines',
            'diffTrimmedLines',
            'diffSentences',
            'diffCss',
          ], 'diffWords') }
          disableWordDiff={ boolean('disableWordDiff', false) }
          extraLinesSurroundingDiff={ number('extraLinesSurroundingDiff', 3) }
          header={ text('header', '') }
          leftTitle={ text('leftTitle', 'v3.60.5') }
          rightTitle={ text('rightTitle', 'v3.61.0') }
          showDiffOnly={ boolean('showDiffOnly', true) }
          splitView={ boolean('splitView', true) }
          useDarkTheme={ boolean('useDarkTheme', false) }
        />
      </div>
    );
  }));
