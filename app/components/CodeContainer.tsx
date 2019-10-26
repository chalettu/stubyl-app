import * as React from 'react';
import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';
type Props = {
  code: string;
};
export default class CodeContainer extends Component<Props> {
  props: Props;

  render() {
    const { code } = this.props;

    return (
      <div style={{ width: '800px' }}>
        <SyntaxHighlighter
          language="javascript"
          style={style}
          lineProps={lineNumber => ({
            style: { display: 'block', cursor: 'pointer', textAlign: 'left' },
            onClick() {
              alert(`Line Number Clicked: ${lineNumber}`);
            }
          })}
          wrapLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
  }
}
