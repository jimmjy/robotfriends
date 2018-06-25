import React from 'react';

const Scroll = (props) => {

    const styles = {
        overflowY: 'scroll', 
        borderTop: '1px solid #0ccac4',
        position: 'relative',
        height: '700px', 
        width: '90%',
        margin: '0 auto',
    }

    return (
      <div style={styles}>
          {props.children}
      </div>  
    );
}

export default Scroll;