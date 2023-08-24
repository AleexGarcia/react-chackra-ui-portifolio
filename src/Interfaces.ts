export interface IProjeto {
    id: number
    imgSrc: string
    name: string
    content: string
    skills: Array<string>
    deploy: string
    repository: string
}

export interface ICompetencia {
    skills: Array<string>
    Idiomas: Array<string>
    certificacoes: Array<string>
    educacao: Array<string>
}