
export type PersonalData = {
    email: string | null,
    name: string | null,
    address: string | null,
    phone: string | null,
}

export type CompanyData = {
    companyName?: string | null,
    position?: string | null,
    companyDescription?: string | null,
    services: Array<string | null>
}

export type MiscData = {
    competitors: Array<string | null>,
    target: string | null,
    geography: string | null
}

export type socialMedia = {
    facebook: string | null,
    instagram: string | null,
    linkedin: string | null,
    others: string | null,
}