import {products} from '../data/phobonsa/data';

const formatPrice = (num) => {
    let formatting_options = {
       style: 'currency',
       currency: 'USD',
       minimumFractionDigits: 2,
    }
    // users can see how locale passed as a parameter.
    let dollarStr = new Intl.NumberFormat("en-US", formatting_options);
    let finalStr = dollarStr.format(num);
    return finalStr;
 }

const styles = {
    container: {
    },
    header: {
        width: '450px',
        display: 'grid',
        gridTemplateColumns: '100%',
        justifyItems: 'center',
        fontFace: 'Helvetica',
        fontWeight: 'bold',
        fontSize: '30px',
        padding: '0 0 20px 0',
    },
    row: {
        display: 'grid',
        gridTemplateColumns: '250px 100px 100px',
        //border: '1px solid gray',
        margin: '5px',
        paddingTop: '3px',
        borderTop: '1px solid lightGray',
        width: '450px',
    }, 
    heading: {
        fontFace: 'Helvetica',
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'lightGray',
        backgroundColor: '#555555',
        padding: '5px',
    },
    name: {
        fontFace: 'Helvetica',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    description: {
        fontStyle: 'italic',
    },
    price: {
        paddingTop: '3px',
    }

}
const Menu = props => {
    return ( 
        <div style={styles.container}>
            <div><span style={styles.header}>Menu</span></div>
            <div style={{...styles.row, fontWeight: 'bold', borderTop: '0 solid white', paddingBottom: '5px'}}>
                <span></span>
                <span>regular</span>
                <span>small</span>
            </div>
            {products.map((obj, i) => {
                let arr = [];
                // if (i === 0) {
                //     const comp = (
                //         <div style={styles.row}>
                //             <span style={styles.heading}>Pho</span>
                //         </div>
                //     )
                //     arr.push(comp);
                // } else 
                if (i === 13) {
                    const comp = (
                        <div style={styles.row}>
                            <span style={styles.heading}>Banh Mi</span>
                        </div>
                    )
                    arr.push(comp);
                } if (obj.id === '14') {
                    const comp = (
                        <div style={styles.row}>
                            <span style={styles.heading}>Bao Buns</span>
                        </div>
                    )
                    arr.push(comp);
                } else if (i === 15) {
                    const comp = (
                        <div style={styles.row}>
                            <span style={styles.heading}>Sides</span>
                        </div>
                    )
                    arr.push(comp);
                } else if (i === 18) {
                    const comp = (
                        <div style={styles.row}>
                            <span style={styles.heading}>Drinks</span>
                        </div>
                    )
                    arr.push(comp);
                }


                const comp2 = (
                        <div style={styles.row}>
                            <div>
                                <span style={styles.name}>{`${obj.id}. ${obj.name}`}</span><br/>
                                {obj.description && <span style={styles.description}>{`${obj.description}`}</span>}
                            </div>
                            <div style={styles.price}><span>{`${formatPrice(obj.prices.regular)}`}</span></div>
                            <div style={styles.price}><span>{obj.prices.small ? `${formatPrice(obj.prices.small)}` : ''}</span></div>
                        </div>
                    )

                arr.push(comp2);
                return <div>{arr}</div>
                })}
        </div>
    )
}

export default Menu