import Menu from './menu';

const styles = {
  container: {
      marginLeft: '40px',
  },
  logo: {
      width: '400px',
  },
}

const App = props => {
  return (
    <div style={styles.container}>
      <img style={styles.logo} src='/images/PhoBonsa_logo.svg' />
      <Menu />
    </div>
  )
}

export default App;
