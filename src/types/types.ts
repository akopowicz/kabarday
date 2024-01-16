export type poductTypeType = {
    id: string,
    type_name: string,
}

export type photoType = {
    id: string,
    photo_link: string,
    product_id: string,
}

export type measurementsType = {
    product_id: string;
    length: number | null;
    width: number | null;
    sleeve_length: number | null;
}

export type productType = {
    composition: string | null;
    description: string | null;
    id: string;
    name: string;
    price: number | null;
    sex: string | null;
    stock: number | null;
    time: string | null;
    type_id: string | null;
    product_type: poductTypeType | null;
    photos: photoType[];
    measurements: measurementsType[] | null;
}