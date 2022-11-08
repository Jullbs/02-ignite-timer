import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'

import { Play } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I`ll work with</label>
          <input id="task" />

          <label htmlFor="minutesAmount">during</label>
          <input type="number" id="minutesAmount" />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Start
        </button>
      </form>
    </HomeContainer>
  )
}
