import React from 'react';
import {connect} from 'react-redux';

import constants from './../../constants';
const {levels} = constants;

import Line from './Line';

function CodeEditor(props) {
  return (
    <div>
    {levels[props.level].editorText.map(function(lineText, index) {
      return <Line text={lineText} key={index}/>
    })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  level: state.userLevel
})

export default connect(mapStateToProps)(CodeEditor);
