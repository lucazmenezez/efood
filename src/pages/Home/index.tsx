import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import prato1 from '../../assets/images/imagem.png'
import prato2 from '../../assets/images/image1.png'
import Foods from '../../models/Foods'

const restaurants: Foods[] = [
  {
    id: 1,
    image: prato1,
    tags: ['Destaque da Semana', 'Japonesa'],
    title: 'Hioki Sushi',
    reviews: 4.9,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 2,
    image: prato2,
    tags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    reviews: 4.7,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 3,
    image: prato1,
    tags: ['Japonesa'],
    title: 'Hioki Sushi',
    reviews: 4.6,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 4,
    image: prato2,
    tags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    reviews: 4.8,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 5,
    image: prato1,
    tags: ['Japonesa'],
    title: 'Hioki Sushi',
    reviews: 4.5,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  },
  {
    id: 6,
    image: prato2,
    tags: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    reviews: 4.9,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita deleniti. Optio quisquam vero voluptatibus, mollitia et unde sunt illum, ducimus delectus cumque perspiciatis corporis quo minus consequatur suscipit incidunt!'
  }
]

const Home = () => (
  <>
    <Header page="home" />
    <ProductsList food={restaurants} page="home" />
  </>
)

export default Home
