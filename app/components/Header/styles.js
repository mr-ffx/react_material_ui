const styles = {
  root: {
    width: '100%',
    height: '4.5em',
    zIndex: '1000',
    boxSizing: 'border-box', // Prevent padding issue with the Modal and fixed positioned AppBar.
  },
  appBar: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsla(0, 0%, 100%, .98)',
    transition: 'all 500ms ease',
    boxShadow: 'none',
  },
  toolBar: {
    display: 'flex',
    width: '100%',
    height: '100%',
    paddingRight: '1em',
    paddingLeft: '1em',
    maxWidth: '1232px',
    justifyContent: 'space-between',
  },
};

export default styles;
