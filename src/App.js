import Menu from './menu';

const styles = {
  container: {
      marginLeft: '40px',
  },
  logoContainer: {
    display: 'grid',
    gridTemplateColumns: '100%',
    justifyItems: 'center',
    width: '450px',
  }, logo: {
      width: '400px',
  },
  address: {
    width: '450px',
    padding: '10px 10px 20px 10px',
    display: 'grid',
    gridTemplateColumns: '100%',
    justifyItems: 'center',
    fontStyle: 'italic',
    fontSize: '12px',
    lineHeight: '80%'

  }
}

const App = props => {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}><img style={styles.logo} src='/images/PhoBonsa_Logo.svg' /></div>
      <div style={styles.address}><span>"An Authentic Vietnamese Noodle Soup Restaurant"</span><br/>
      <span>221 Normal Ave #B, Chico, CA, (530) 965-5129, 11am-8pm</span></div>
      <Menu />
    </div>
  )
}

export default App;
