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
    whiteSpace: 'nowrap',
    display: 'grid',
    gridTemplateColumns: '100%',
    justifyItems: 'center',
    fontWeight: 'bold',
    width: '450px',
    lineHeight: '100%',
    textAlign: 'center',
  },
  oneline: {
    whiteSpace: 'nowrap',
  },
  address: {
    whiteSpace: 'nowrap',
    width: '450px',
    padding: '10px 10px 20px 10px',
    display: 'grid',
    gridTemplateColumns: '100%',
    justifyItems: 'center',
    fontStyle: 'italic',
    fontSize: '12px',
    lineHeight: '80%',
    //border: '1px solid gray',
  },
  noticeHeader: {
    marginTop: '20px',
    color: 'red',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  notice: {
    marginTop: '13px',
    color: 'red',
    fontSize: '16px',
  }
}

const App = props => {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}><img style={styles.logo} src='/images/PhoBonsa_Logo.svg' /></div>
      <div style={styles.address}><span style={styles.tagLine}>"An Authentic Vietnamese Noodle Soup Restaurant"</span><br/>
      <div style={styles.oneline}><a href='https://goo.gl/maps/gkDqJ9L5cTNWCEcf9' target='_blank'>221 Normal Ave #B, Chico, CA 95928</a></div><br/>
      <div style={styles.oneline}><span>Hours: 11 am - 2:30 pm and 4:30 pm - 8 pm, close on Tuesdays</span></div><br/>
      <div style={styles.oneline}><a href="https://phobonsa.com">phobonsa.com</a>, (530) 965-5129, <a href='mailto:phobonsa@gmail.com'>phobonsa@gmail.com</a></div><br/>
      <div style={styles.oneline}>Reviews: <a href='https://goo.gl/maps/gkDqJ9L5cTNWCEcf9' target='_blank'>Google</a>, <a href='https://www.yelp.com/biz/pho-bonsa-chico?osq=Pho+Bonsa' target='_blank'>Yelp</a>, Local news: <a href='https://krcrtv.com/news/local/new-pho-restaurant-a-hit-for-chico-state-students' target='_blank'>ABC7 KRCR TV</a></div>
      <div style={styles.noticeHeader}><span></span></div>
          <div style={styles.notice}>
              <span style={styles.tagLine}><br/>
              Summer Break!<br/>
              We will reopen on <br/>
              Wed July 9th, 2025.</span><br/>
            <span style={styles.tagLine}></span><br/>
          </div> 
      </div>

      <Menu />
    </div>
  )
}

export default App;
