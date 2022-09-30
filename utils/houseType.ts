export type H = {
    description: {
        baths: number | string | null
        beds: number | string | null
        garage: number | string | null
        lot_sqft: number | string | null
        sqft: number | string | null
        type: string | null | null
        year_built: number | string | null
    }
    listDate: string
    listPrice: number
    listId: string
    location: {
        address: {
            line: string
            city: string
            postal_code: string
            state_code: string
        }
        county: {
            name: string
        }
    }
    permLink: string
    photos: [{
        href: string    
    }]
    
}

