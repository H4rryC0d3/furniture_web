
//import images

import sofa_1 from './assets/sofa 1.jpg'
import sofa_2 from './assets/sofa 2.jpg'
import sofa_3 from './assets/sofa 3.jpg'
import sofa_4 from './assets/sofa 4.jpg'
import sofa_5 from './assets/sofa 5.jpg'
import sofa_6 from './assets/sofa 6.jpg'
import table_6 from './assets/table 6.jpg'
import table_1 from './assets/table 1.jpg'
import table_2 from './assets/table 2.jpg'
import table_3 from './assets/table 3.jpg'
import table_4 from './assets/table 4.jpg'
import table_5 from './assets/table 5.jpg'
import bed_1 from './assets/bed 1.jpg'
import bed_2 from './assets/bed 2.jpg'
import bed_3 from './assets/bed 3.jpg'
import bed_4 from './assets/bed 4.jpg'
import bed_5 from './assets/bed 5.jpg'
import bed_6 from './assets/bed 6.jpg'
import office_chair_1 from './assets/office-chair-1.jpg'
import office_chair_2 from './assets/office-chair-2.jpg'
import office_chair_3 from './assets/office-chair-3.jpg'
import office_chair_4 from './assets/office-chair-4.jpg'
import office_chair_5 from './assets/office-chair-5.jpg'
import office_chair_6 from './assets/office-chair-6.jpg'
import chandalier_1 from './assets/chandalier 1.jpg'
import chandalier_2 from './assets/chandalier 2.jpg'
import chandalier_3 from './assets/chandalier 3.jpg'
import chandalier_4 from './assets/chandalier 4.jpg'
import chandalier_5 from './assets/chandalier 5.jpg'
import chandalier_6 from './assets/chandalier 6.jpg'
import chair_1 from './assets/chair 1.jpg'
import chair_2 from './assets/chair 2.jpg'
import chair_3 from './assets/chair 3.jpg'
import chair_4 from './assets/chair 4.jpg'
import chair_6 from './assets/chair 6.jpg'


//import react icons
import { MdChair, MdTableBar } from 'react-icons/md'
import { GiFlexibleLamp, GiOfficeChair, GiSofa } from 'react-icons/gi'
import { IoBedOutline } from 'react-icons/io5'


export const product_category_list = [
    {
        product_name: "Chair",
        product_icon : <MdChair />
    },
    {
        product_name: "Table",
        product_icon : <MdTableBar />
    },
    {
        product_name: "Bed",
        product_icon : <IoBedOutline />
    },
    {
        product_name: "Office Chair",
        product_icon : <GiOfficeChair />
    },
    {
        product_name: "Lightning",
        product_icon : <GiFlexibleLamp />
    },
    {
        product_name: "Sofa",
        product_icon : <GiSofa />
    },
]


export const product_list = [
    {
        id: 1,
        name: "High Quality Fabric Sofa",
        image: sofa_1,
        price: 3250,
        category: "Sofa",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
        },
    },
    {
        id: 2,
        name: "Imported Side Console Table",
        image: table_1,
        price: 265,
        category: "Table",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 3,
        name: "Luxury Minimal Quality Bed",
        image: bed_1,
        price: 325,
        category: "Bed",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 4,
        name: "High Quality Office Chair",
        image: office_chair_1,
        price: 265,
        category: "Office Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 5,
        name: "Costume made Light",
        image: chandalier_1,
        price: 325,
        category: "Lightning",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
           shipping: 'On Orders above $100'
          },
    },
    {
        id: 6,
        name: "Luxury Made Chair",
        image: chair_1,
        price: 265,
        category: "Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 7,
        name: "Imported Sofa",
        image: sofa_2,
        price: 325,
        category: "Sofa",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
        },
    },
    {
        id: 8,
        name: "Luxury made center Table",
        image: table_2,
        price: 265,
        category: "Table",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 9,
        name: "Bed MCQ30-40",
        image: bed_2,
        price: 325,
        category: "Bed",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 10,
        name: "Office Chair",
        image: office_chair_2,
        price: 265,
        category: "Office Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 11,
        name: "Exquisite Chandalier",
        image: chandalier_2,
        price: 325,
        category: "Lightning",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
           shipping: 'On Orders above $100'
          },
    },
    {
        id: 12,
        name: "Side Piece Chair",
        image: chair_2,
        price: 265,
        category: "Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 13,
        name: "Quality Sofa",
        image: sofa_3,
        price: 325,
        category: "Sofa",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
        },
    },
    {
        id: 14,
        name: "Table c204",
        image: table_3,
        price: 265,
        category: "Table",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 15,
        name: "Bed 1250",
        image: bed_3,
        price: 325,
        category: "Bed",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 16,
        name: "Office Chair 1014",
        image: office_chair_3,
        price: 265,
        category: "Office Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 17,
        name: "Light 765",
        image: chandalier_3,
        price: 325,
        category: "Lightning",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
           shipping: 'On Orders above $100'
          },
    },
    {
        id: 18,
        name: "Chair",
        image: chair_3,
        price: 265,
        category: "Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 19,
        name: "Sofa",
        image: sofa_4,
        price: 325,
        category: "Sofa",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
        },
    },
    {
        id: 20,
        name: "Rable",
        image: table_4,
        price: 265,
        category: "Table",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 21,
        name: "Bed",
        image: bed_4,
        price: 325,
        category: "Bed",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 22,
        name: "Office Chair",
        image: office_chair_4,
        price: 265,
        category: "Office Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 23,
        name: "Light",
        image: chandalier_4,
        price: 325,
        category: "Lightning",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
           shipping: 'On Orders above $100'
          },
    },
    {
        id: 24,
        name: "Chair",
        image: chair_4,
        price: 265,
        category: "Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 25,
        name: "Sofa",
        image: sofa_5,
        price: 325,
        category: "Sofa",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
        },
    },
    {
        id: 26,
        name: "Rable",
        image: table_5,
        price: 265,
        category: "Table",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 27,
        name: "Bed",
        image: bed_5,
        price: 325,
        category: "Bed",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 28,
        name: "Office Chair",
        image: office_chair_5,
        price: 265,
        category: "Office Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 29,
        name: "Light",
        image: chandalier_5,
        price: 325,
        category: "Lightning",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
           shipping: 'On Orders above $100'
          },
    },
    {
        id: 30,
        name: "Chair",
        image: chair_6,
        price: 265,
        category: "Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 31,
        name: "Sofa",
        image: sofa_6,
        price: 325,
        category: "Sofa",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
        },
    },
    {
        id: 32,
        name: "Rable",
        image: table_6,
        price: 265,
        category: "Table",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 33,
        name: "Bed",
        image: bed_6,
        price: 325,
        category: "Bed",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 34,
        name: "Office Chair",
        image: office_chair_6,
        price: 265,
        category: "Office Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },
    {
        id: 35,
        name: "Light",
        image: chandalier_6,
        price: 325,
        category: "Lightning",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
           shipping: 'On Orders above $100'
          },
    },
    {
        id: 36,
        name: "Chair",
        image: chair_6,
        price: 265,
        category: "Chair",
        productDetail :{
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
            delivery: '5-7 Days from order date.',
            shipping: 'On Orders above $100'
          },
    },

    
]