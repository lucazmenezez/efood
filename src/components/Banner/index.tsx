import { BannerContainer, Bannerstyle, Category, Restaurant } from './styles'

export type Props = {
  imageBanner: string
  category: string
  restaurant: string
}

const Banner = ({ imageBanner, category, restaurant }: Props) => (
  <Bannerstyle style={{ backgroundImage: `url(${imageBanner})` }}>
    <div className="container">
      <BannerContainer>
        <Category>{category}</Category>
        <Restaurant>{restaurant}</Restaurant>
      </BannerContainer>
    </div>
  </Bannerstyle>
)

export default Banner
