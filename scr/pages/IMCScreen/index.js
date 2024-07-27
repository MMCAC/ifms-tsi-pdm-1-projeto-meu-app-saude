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

export default function IMCScreen() {

  // hooks para armazenar os valores calculados
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('')

  // função para calcular o ICQ
  function calcularIcq() {
    let p = Number(peso);
    let a = Number(altura);

    let imc = p / (a * a);

    setImc(imc.toFixed(2));
  }

  return (
    <Container>
      <Title>ICQ</Title>

      <TextInput>Informe seu peso em kg</TextInput>
      <Input onChangeText={(v) => setPeso(v)} inputMode="numeric" />

      <TextInput>Informe sua altura em metros</TextInput>
      <Input onChangeText={(v) => setAltura(v)} inputMode="numeric" />

      <Button onPress={calcularIcq}>
        <TextButton>Calcular</TextButton>
      </Button>

      <TextResult>IMC: {imc}</TextResult>
    </Container>
  )
}