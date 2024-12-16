import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import prato1 from '../../assets/images/imagem.png'
import prato2 from '../../assets/images/image1.png'
import Foods from '../../models/Foods'

const foods: Foods[] = [
  {
    id: 7,
    image: prato1,
    title: 'Hioki Sushi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 8,
    image: prato2,
    title: 'La Dolce Vita Trattoria',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 9,
    image: prato1,
    title: 'Hioki Sushi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 10,
    image: prato2,
    title: 'La Dolce Vita Trattoria',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 11,
    image: prato1,
    title: 'Hioki Sushi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 12,
    image: prato1,
    title: 'Hioki Sushi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  }
]

const Perfil = () => (
  <>
    <Header page="perfil" />
    <ProductsList food={foods} page="perfil" />
  </>
)

export default Perfil
