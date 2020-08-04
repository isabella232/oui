import React from 'react';

import { storiesOf } from '@storybook/react';

import Form from './index';
import Input from '../Input';
import DatePicker from '../DatePicker/DatePicker.js';
import Col from '../Layout/Col';

const stories = storiesOf('Forms|Form Layout', module);
stories
  .addDecorator(story => <div className="soft-quad--sides">{story()}</div>);

stories
  .add(
    'Default', (() => (
      <div className="push-double--top">
        <Col small={ 8 } large={ 5 }>
          <Form title="Form title" description="This is the form description">
            <Form.Section isRequired={true} title="Form section">
              <Form.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                  id="input-01"
                />
              </Form.Item>
              <Form.Row isFullWidth={true}>
                <Form.Item>
                  <DatePicker
                    inputId="date-picker-id-1"
                    initialDate={ null }
                    isFocused={ false }
                    isAbsolutelyPositioned={true}
                  />
                </Form.Item>
                <Form.Item>
                  <DatePicker
                    inputId="date-picker-id-2"
                    initialDate={ null }
                    isFocused={ false }
                    isAbsolutelyPositioned={true}
                  />
                </Form.Item>
              </Form.Row>
              <Form.Row isFullWidth={true}>
                <Form.Item>
                  <Input
                    label="Input label"
                    note="A short description or note about this field."
                    placeholder="Just a placeholder"
                    type="text"
                    id="input-02"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    label="Input label"
                    note="A short description or note about this field."
                    placeholder="Just a placeholder"
                    type="text"
                    id="input-03"
                  />
                </Form.Item>
              </Form.Row>
            </Form.Section>
            <Form.Section isOptional={true} helpIcon={true} popoverText="This is some helpful text" title="Form section" description="This is the section description">
              <Form.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                  id="input-04"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                  id="input-05"
                />
              </Form.Item>
            </Form.Section>
            <Form.Section title="Form section" description="This is the section description">
              <Form.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                  id="input-06"
                />
              </Form.Item>
            </Form.Section>
          </Form>
        </Col>
      </div>
    ))
  )
  .add(
    'Replicated "New A/B Test" form', (() => (
      <div className="push-double--top">
        <Col small={ 8 } large={ 5 }>
          <Form>
            <Form.Section title="Experiment Name">
              <Form.Item>
                <Input
                  label="Add a name for your experiment"
                  type="text"
                  id="input-01"
                />
              </Form.Item>
            </Form.Section>
            <Form.Section title="Experiment Key">
              <Form.Item>
                <Input
                  label="Use this to uniquely identify the experiment"
                  type="text"
                  id="input-02"
                />
              </Form.Item>
            </Form.Section>
            <Form.Section isOptional={true} title="Description">
              <Form.Item>
                <Input
                  label="What is your experiment? State your hypothesis and notes here."
                  type="text"
                  id="input-03"
                />
              </Form.Item>
            </Form.Section>
          </Form>
        </Col>
      </div>
    ))
  );
