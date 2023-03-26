import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import previewImage from '../../assets/preview.png'
import { ClaimUserNameForm } from './components'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUserNameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          alt="Calendário simbolizando a aplicação em funcionamento"
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
