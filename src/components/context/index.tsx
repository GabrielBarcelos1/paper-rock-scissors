import React, { createContext, useState} from 'react'


export const DadosContext = createContext<IDadosContext>({} as IDadosContext);


interface IDadosContext {
  dados: Dados
  setDados(data: Dados): void
}

interface Dados{
  choose: string
  color: string
  points: number
}


interface IProps {
    children: React.ReactNode;
}
export default function Provider({ children} : IProps ) {
  const [dados, setDados] = useState<Dados>({
    choose: '',
    color: '',
    points: 0
  })

  return (
    <DadosContext.Provider value={{ dados, setDados }}>
      {children}
    </DadosContext.Provider>
  )
}