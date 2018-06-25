import React from 'react';

const Scroll = (props) => {

    const styles = {
        overflowY: 'scroll', 
        borderTop: '1px solid #0ccac4', 
        height: '620px', 
        width: '100%'
    }

    return (
      <div style={styles}>
          {props.children}
      </div>  
    );
}

export default Scroll;