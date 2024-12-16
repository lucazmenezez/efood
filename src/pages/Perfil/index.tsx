import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import prato3 from '../../assets/images/image3.png'
import Foods from '../../models/Foods'
import Banner from '../../components/Banner'

const foods: Foods[] = [
  {
    id: 7,
    image: prato3,
    title: 'Pizza Marguerita',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 8,
    image: prato3,
    title: 'La Dolce Vita Trattoria',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 9,
    image: prato3,
    title: 'Pizza Marguerita',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 10,
    image: prato3,
    title: 'La Dolce Vita Trattoria',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 11,
    image: prato3,
    title: 'Pizza Marguerita',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 12,
    image: prato3,
    title: 'Pizza Marguerita',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  }
]

const Perfil = () => (
  <>
    <Header page="perfil" />
    <Banner />
    <ProductsList food={foods} page="perfil" />
  </>
)

export default Perfil
