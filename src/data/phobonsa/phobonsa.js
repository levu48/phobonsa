export const loginUrl = 'https://banmua-com.auth.us-east-1.amazoncognito.com/login?client_id=3fauulqpdub96p33o46pjffpi6&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://phobalo.banmua.com'

export const contact = {
    name: 'Pho Bonsa',
    street: '221 Normal Ave. #B',
    city: 'Chico',
    state: 'CA',
    zipcode: '92928',
    phone: '(530) 965-5129',
    email: 'phobonsa@gmail.com',
    web: 'phobonsa.com',
    hours: '11am - 8pm',
    tagline: 'Authentic Vietnamese Noodle Soups and Banh Mi'
}

const phoExtra = [
    {id: 'PE1', name: 'size', type: 'choice', default: 'regular', list: ['regular', 'large'], extra: {price: {'regular': 0, 'large': 1.00}}},
    {id: 'PE2', name: 'extra noodle', type: 'boolean', default: false, extra: {price: 1.00}},
    {id: 'PE3', name: 'extra meat', type: 'boolean', default: false, extra: {price: 1.00}},
]

const riceExtra = [
    {id: 'ER0', name: 'extra rice', type: 'boolean', default: false, extra: {price: 0.50}},
    {id: 'ER1', name: 'extra meat', type: 'boolean', default: false, extra: {price: 1.00}},
]

const bunExtra = [
    {id: 'EN0', name: 'extra noodle', type: 'boolean', default: false, extra: {price: 1.00}},
    {id: 'EN1', name: 'extra meat', type: 'boolean', default: false, extra: {price: 1.00}},
    {id: 'EN2', name: 'extra eggroll', type: 'boolean', default: false, extra: {price: 1.00}},
]
const banhMiExtra = [
    {id: 'B0', name: 'add green pepper', type: 'boolean', default: false},
]



export const products = {
    P1: {
        id: "P1",
        name: 'Pho Dac Biet',
        price: 12,
        image: '/images/products/phoBo.jpeg',
        description: 'Pho Dac Biet is prepared with Rice Noodles Medium Rare Eye Round Beef, Brisket, and Meatballs for a succulently delicious soup prepared with fresh ingredients.',
        options: [...phoExtra],
    },
    P2: {
        id: "P2",
        name: 'Pho Bo Vien',
        price: 12,
        image: '/images/products/phoBoVien.jpeg',
        description: 'A simple bowl of Phở Bò Viên is just Bò Viên and noodle. It\'s simple but flavorful. You can also enjoy Bò Viên with chicken broth, sprinkled with chopped scallions and white pepper and served as a soup.',
        options: [...phoExtra],
    },
    P3: {
        id: "P3",
        name: 'Pho Tai',
        price: 12,
        image: '/images/products/phoTai.jpeg',
        options: [...phoExtra],
    },

    P4: {
        id: "P4",
        name: 'Pho Tai Chin',
        price: 12,
        image: '/images/products/phoTaiChin.png',
        options: [...phoExtra],
    },
    P5: {
        id: "P5",
        name: 'Pho Tai Nam Gau',
        price: 12,
        image: '/images/products/phoTaiNamGau.jpeg',
        options: [...phoExtra],
    },
    P6: {
        id: "P6",
        name: 'Pho Tai Nam Gan',
        price: 12,
        image: '/images/products/phoTaiNamGan.jpeg',
        options: [...phoExtra],
    },
    P7: {
        id: "P7",
        name: 'Pho Tai Gan',
        price: 12,
        options: [...phoExtra],
    },
    P8: {
        id: "P8",
        name: 'Pho Tai Bo Vien',
        price: 12,
        options: [...phoExtra],
    },
    P9: {
        id: "P9",
        name: 'Pho Ga',
        price: 12,
        image: '/images/products/phoGa.png',
        options: [...phoExtra],
    },
    R1: {
        id: "R1",
        name: 'Com Bo Luc Lac',
        price: 11,
        image: '/images/products/comBoLucLac.jpeg',
        options: [...riceExtra],
    },
    R2: {
        id: "R2",
        name: 'Com Chien',
        price: 10,
        image: '/images/products/comChien.jpeg',
        options: [...riceExtra],
    },
    R3: {
        id: "R3",
        name: 'Com Ga Nuong',
        price: 10,
        image: '/images/products/comGaNuong.jpeg',
        options: [...riceExtra],
    },
    B1: {
        id: "B1",
        name: 'Bun Thit Nuong',
        price: 11,
        image: '/images/products/bunThitNuong.jpeg',
        options: [...bunExtra],
    },
    B2: {
        id: "B2",
        name: 'Bun Ga Nuong',
        price: 11,
        image: '/images/products/bunGaNuong.jpeg',
        options: [...bunExtra],
    },
    B3: {
        id: "B3",
        name: 'Bun Tom Nuong',
        price: 11,
        image: '/images/products/bunTomNuong.jpeg',
        options: [...bunExtra],
    },
    L1: {
        id: "L1",
        name: 'Egg Roll (2)',
        price: 2,
        image: '/images/products/chaGio.jpeg',
        options: [],
    },
    L2: {
        id: "L2",
        name: 'Spring Roll (2)',
        price: 4,
        image: '/images/products/goiCuon.jpeg',
        options: [],
    },
    M1: {
        id: "M1",
        name: 'Banh Mi Thit Nuong',
        price: 6,
        image: '/images/products/banhMiThitNuong.png',
        options: [...banhMiExtra],
    },
    M2: {
        id: "M2",
        name: 'Banh Mi Xa Xiu',
        price: 6,
        image: '/images/products/banhMiXaXiu.jpeg',
        options: [...banhMiExtra],
        description: 'One of the delicious layers of the flavorful, simple, and classic Banh Mi, Xa Xiu the sweet, pinkish colored pork. The cuts of pork can usually be pork shoulder, pork belly, pork chops, and pork butt. '
    }
}

export function getMenu() {
    const {P1, P2, P3, P4, P5, P6, P7, P8, P9, R1, R2, R3, B1, B2, B3, L1, L2, M1, M3} = products;
    return [
        {
            name: 'Phở',
            displayQty: 4,
            items: [P1, P2, P3, P4, P5, P6, P7, P8, P9]
        }, {
            name: 'Rice',
            displayQty: 3,
            items: [R1, R2, R3]
        }, {
            name: 'Bún',
            displayQty: 2,
            items: [B1, B2, B3]
        }, {
            name: 'Rolls',
            displayQty: 2,
            items: [L1, L2]
        }, {
            name: 'Bánh Mì',
            displayQty: 2,
            items: [M1, M3]
        }

    ]
}

