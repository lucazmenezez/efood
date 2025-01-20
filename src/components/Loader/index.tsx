import { PulseLoader } from 'react-spinners'

import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PulseLoader color={colors.pink} />
  </Container>
)

export default Loader
