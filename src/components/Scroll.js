import React from 'react';

const Scroll = (props) => {

    const styles = {
        overflowY: 'scroll', 
        border: '1px solid #0ccac4', 
        height: '620px', 
        borderRadius: '5px',
        position: 'absolute',
        bottom: '0',
        width: '100%'
    }

    return (
      <div style={styles}>
          {props.children}
      </div>  
    );
}

export default Scroll;