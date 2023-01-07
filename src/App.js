import Menu from './menu';

const styles = {
  container: {
      margin: '10px 0 20px 20px',
  },
  logoContainer: {
    display: 'grid',
    gridTemplateColumns: '100%',
    justifyItems: 'center',
    width: '450px',
  }, 
  logo: {
      width: '400px',
  },
  tagLine: {
    display: 'grid',
    gridTemplateColumns: '100%',
    justifyItems: 'center',
    fontWeight: 'bold',
    width: '450px'
  },
  address: {
    width: '450px',
    padding: '10px 10px 20px 10px',
    display: 'grid',
    gridTemplateColumns: '100%',
    justifyItems: 'center',
    fontStyle: 'italic',
    fontSize: '12px',
    lineHeight: '80%',
    border: '1px solid gray',
  }
}

const App = props => {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}><img style={styles.logo} src='/images/PhoBonsa_Logo.svg' /></div>
      <div style={styles.address}><span style={styles.tagLine}>"An Authentic Vietnamese Noodle Soup Restaurant"</span><br/>
      <div><a href='https://goo.gl/maps/gkDqJ9L5cTNWCEcf9' target='_blank'>221 Normal Ave #B, Chico, CA 92928</a>, 11am - 8pm</div><br/>
      <div><a href="https://phobonsa.com">phobonsa.com</a>, (530) 965-5129, <a href='mailto:phobonsa@gmail.com'>phobonsa@gmail.com</a></div><br/>
      <div>Reviews: <a href='https://goo.gl/maps/gkDqJ9L5cTNWCEcf9' target='_blank'>Google</a>, <a href='https://www.yelp.com/biz/pho-bonsa-chico?osq=Pho+Bonsa' target='_blank'>Yelp</a></div>
      </div>

      <Menu />
    </div>
  )
}

export default App;
