import * as S from './styles'

export type Props = {
  imageBanner: string
  category: string
  restaurant: string
}

const Banner = ({ imageBanner, category, restaurant }: Props) => (
  <S.Bannerstyle style={{ backgroundImage: `url(${imageBanner})` }}>
    <div className="container">
      <S.BannerContainer>
        <S.Category>{category}</S.Category>
        <S.Restaurant>{restaurant}</S.Restaurant>
      </S.BannerContainer>
    </div>
  </S.Bannerstyle>
)

export default Banner
