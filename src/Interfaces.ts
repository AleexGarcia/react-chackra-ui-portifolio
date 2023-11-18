export interface IProjeto {
    id: number
    imgSrc: string
    name: string
    content: string
    skills: Array<string>
    deploy: string | null
   repository: string,

}

interface ICompetencia {
    title: string
    content: Array<string>
}

export interface ICompetencias {
    skills: ICompetencia
    idiomas: ICompetencia
    certificacoes: ICompetencia
    educacao: ICompetencia
    [key: string]: ICompetencia | null
}
