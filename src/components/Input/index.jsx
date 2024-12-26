import { Container } from './styles'

// estou recebendo icon minúsculo e convertendo pra maiúsculo
export function Input({ icon: Icon, ...rest }){
  return(
    <Container>
      {/* && verifica se icone existe, se existir ele exibe */}
      {Icon && <Icon size={20}/>}
      <input {...rest} />
    </Container>
  )
}