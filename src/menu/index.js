import {products} from './data';

const formatPrice = (num) => {
    let formatting_options = {
       style: 'currency',
       currency: 'USD',
       minimumFractionDigits: 3,
    }
    // users can see how locale passed as a parameter.
    let dollarStr = new Intl.NumberFormat("en-US", formatting_options);
    let finalStr = dollarStr.format(num);
    return finalStr;
 }

const styles = {
    container: {
    },
    logo: {
        width: '400px',
    },
    row: {
        display: 'grid',
        gridTemplateColumns: '250px 100px 100px',
        //border: '1px solid gray',
        margin: '10px',
    }, 
    name: {
        fontFace: 'Helvetica',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    description: {
        fontStyle: 'italic',
    }

}
const Menu = props => {
    return ( 
        <div style={styles.container}>
            {products.map(obj => (
                <div style={styles.row}>
                    <div>
                        <span style={styles.name}>{`${obj.id}. ${obj.name}`}</span><br/>
                        {obj.description && <span style={styles.description}>{`${obj.description}`}</span>}
                    </div>
                    <div><span>{`${formatPrice(obj.prices.regular)}`}</span></div>
                    <div><span>{obj.prices.small ? `${formatPrice(obj.prices.small)}` : ''}</span></div>
                </div>
            ))}
        </div>
    )
}

export default Menu