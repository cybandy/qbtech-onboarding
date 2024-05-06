
export type PersonalData = {
    email?: string,
    name?: string,
    address?: string,
    phone?: string,
}

export type CompanyData = {
    companyName?: string,
    position?: string,
    companyDescription?: string,
    services: Array<string | undefined>
}

export type MiscData = {
    competitors?: Array<string | undefined>,
    target?: string,
    geography?: string
}

export type socialMedia = {
    facebook?: string,
    instagram?: string,
    linkedin?: string,
    others?: string,
}