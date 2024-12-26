import { Container } from './styles'

export function ButtonText({ title, isActive = false, ...rest }){
  return(
    <Container
      type="button"
      // ver se está clicado/selecionado
      $isactive={isActive.toString()}
      {...rest}
    >
      {title}
    </Container>
  )
}