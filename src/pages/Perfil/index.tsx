import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'

import prato3 from '../../assets/images/image3.png'
import Foods from '../../models/Foods'
import Banner from '../../components/Banner'
import Modal from '../../components/Modal'

const foods: Foods[] = [
  {
    id: 7,
    image: prato3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 8,
    image: prato3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 9,
    image: prato3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 10,
    image: prato3,
    title: 'La Dolce Vita Trattoria',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 11,
    image: prato3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 12,
    image: prato3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => (
  <>
    <Header page="perfil" />
    <Banner />
    <ProductsList food={foods} page="perfil" />
    <Modal />
  </>
)

export default Perfil
