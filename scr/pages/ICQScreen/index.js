import { 
  Container, 
  Title, 
  Input, 
  TextInput,
  Button,
  TextButton,
  TextResult
} from "./style";

export default function ICQScreen() {
  return (
    <Container>
      <Title>ICQ</Title>

      <TextInput>Informe a cintura em cm</TextInput>
      <Input />

      <TextInput>Informe o quadril em cm</TextInput>
      <Input />

      <Button>
        <TextButton>Calcular</TextButton>
      </Button>

      <TextResult>ICQ: </TextResult>
    </Container>
  )
}