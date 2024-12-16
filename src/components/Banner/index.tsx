import { Bannerstyle, Category, Restaurant } from './styles'

import bannerImg from '../../assets/images/apresentacao.png'

const Banner = () => (
  <Bannerstyle style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Category>Italiana</Category>
      <Restaurant>La Dolce Vita Trattoria</Restaurant>
    </div>
  </Bannerstyle>
)

export default Banner
