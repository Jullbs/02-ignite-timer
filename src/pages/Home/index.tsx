import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

import { Play } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I`ll work with</label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Give a name to your project"
          />

          <datalist id="task-suggestion">
            <option value="Option1" />
            <option value="Option2" />
            <option value="Option3" />
          </datalist>

          <label htmlFor="minutesAmount">during</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
