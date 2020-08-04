import React from 'react';

import { storiesOf } from '@storybook/react';

import Fieldset from './index';
import Form from '../Form';
import Input from '../Input';
import DatePicker from '../DatePicker/DatePicker.js';
import Col from '../Layout/Col';

const stories = storiesOf('Forms|Fieldset', module);
stories
  .addDecorator(story => <div className="soft-quad--sides">{story()}</div>);

stories
  .add(
    'In a form', (() => (
      <div className="push-double--top">
        <Col small={8} large={5}>
          <Form>
            <Fieldset isRequired={true} title="Location"
              description="The title of the fieldset will be considered the legend of the fieldset. The default of a Fieldset (titleSize='large') is visually comparable to a Form.Section. Fieldset should only be used if there are multiple inputs in the section that are linked (think address or credit card fields). If they are not closely linked, Form.Section is more appropriate.">
              <Fieldset.Row isFullWidth={true}>
                <Fieldset.Item>
                  <Input
                    label="Longitude"
                    note="A short description or note about this field."
                    placeholder="Just a placeholder"
                    type="text"
                    id='input-01'
                  />
                </Fieldset.Item>
                <Fieldset.Item>
                  <Input
                    label="Latitude"
                    note="A short description or note about this field."
                    placeholder="Just a placeholder"
                    type="text"
                    id='input-02'
                  />
                </Fieldset.Item>
              </Fieldset.Row>
            </Fieldset>
            <Form.Section title="Form section" description="All of the options to customize a Form.Section are also available on Fieldset.">
              <Form.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                  id='input-03'
                />
              </Form.Item>
              <Fieldset
                titleSize='small'
                title="Location"
                bottomSpacing={false}
                description="We're using a small title because this fieldset belongs in this section.">
                <Fieldset.Item>
                  <Input
                    label="Latitude"
                    note="A short description or note about this field."
                    placeholder="Just a placeholder"
                    type="text"
                    id='input-04'
                  />
                </Fieldset.Item>
                <Fieldset.Item>
                  <Input
                    label="Longitude"
                    note="A short description or note about this field."
                    placeholder="Just a placeholder"
                    type="text"
                    id='input-05'
                  />
                </Fieldset.Item>
              </Fieldset>
            </Form.Section>
          </Form>
        </Col>
      </div>
    ))
  )
  .add(
    'Standalone', (() => (
      <div className="push-double--top">
        <Col small={8} large={5}>
          <Fieldset isRequired={true} title="Fieldset section"
            description="Fieldsets can also be used separately from Forms. However do consider using them in Forms for good practice.">
            <Fieldset.Item>
              <Input
                label="Input label"
                note="A short description or note about this field."
                placeholder="Just a placeholder"
                type="text"
                id='input-01'
              />
            </Fieldset.Item>
            <Fieldset.Row isFullWidth={true}>
              <Fieldset.Item>
                <DatePicker
                  inputId="date-picker-id"
                  initialDate={ null }
                  isFocused={ false }
                  isAbsolutelyPositioned={true}
                />
              </Fieldset.Item>
              <Fieldset.Item>
                <DatePicker
                  inputId="date-picker-id"
                  initialDate={ null }
                  isFocused={ false }
                  isAbsolutelyPositioned={true}
                />
              </Fieldset.Item>
            </Fieldset.Row>
            <Fieldset.Row isFullWidth={true}>
              <Fieldset.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                  id='input-02'
                />
              </Fieldset.Item>
              <Fieldset.Item>
                <Input
                  label="Input label"
                  note="A short description or note about this field."
                  placeholder="Just a placeholder"
                  type="text"
                  id='input-03'
                />
              </Fieldset.Item>
            </Fieldset.Row>
          </Fieldset>
        </Col>
      </div>
    ))
  );
