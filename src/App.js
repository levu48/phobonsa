import Menu from './menu';

const styles = {
  container: {
      margin: '10px 0 40px 40px',
  },
  logoContainer: {
    display: 'grid',
    gridTemplateColumns: '100%',
    justifyItems: 'center',
    width: '450px',
  }, logo: {
      width: '400px',
  },
  tagLine: {
    fontWeight: 'bold'
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
      <div style={styles.address}><span style={styles.tagLine}>"An Authentic Vietnamese Noodle Soup Restaurant"</span><br/>
      <span><a href='https://goo.gl/maps/gkDqJ9L5cTNWCEcf9'>221 Normal Ave #B, Chico, CA 92928</a>, 11am - 8pm</span><br/>
      <span><a href="https://phobonsa.com">phobonsa.com</a>, (530) 965-5129, <a href='mailto:phobonsa@gmail.com'>phobonsa@gmail.com</a></span>
      </div>

      <Menu />
    </div>
  )
}

export default App;
