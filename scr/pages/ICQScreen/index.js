import { useState } from "react";
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

  // hooks para armazenar os valores calculados
  const [cintura, setCintura] = useState('');
  const [quadril, setQuadril] = useState('');
  const [icq, setIcq] = useState('')

  // função para calcular o ICQ
  function calcularIcq() {
    let c = Number(cintura);
    let q = Number(quadril);

    let icq = c / q;

    setIcq(icq.toFixed(2));
  }

  return (
    <Container>
      <Title>ICQ</Title>

      <TextInput>Informe a cintura em cm</TextInput>
      <Input onChangeText={(v) => setCintura(v)} />

      <TextInput>Informe o quadril em cm</TextInput>
      <Input onChangeText={(v) => setQuadril(v)} />

      <Button onPress={calcularIcq}>
        <TextButton>Calcular</TextButton>
      </Button>

      <TextResult>ICQ: {icq}</TextResult>
    </Container>
  )
}