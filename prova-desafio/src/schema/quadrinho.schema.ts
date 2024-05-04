import {Schema, model} from "mongoose"

export const quadirnhoSchemaTipo = new Schema({
    resourceURI: String,
    name: String,
    type: String});


export const quadrinhosSchema = new Schema({
    resourceURI: String,
    name: String,});

export const dataSchema = new Schema({
    type: String,
    date: String});


export const SerieSchema = new Schema({
    resourceURI: String,
    name: String,});

export const storySchema = new Schema({
    available: Number,
    collectionURI: String,
    items: [quadirnhoSchemaTipo],
    returned: Number});

export const eventoSchema = new Schema({
    available: Number,
    collectionURI: String,
    items: [quadrinhosSchema],
    returned: Number});


export const thumbnailSchema = new Schema({
    path: String,
    extension: String,});

export const personagemSchema = new Schema({
    availible: Number,
    collectionURI: String,
    items: [quadirnhoSchemaTipo],
    returned: Number});

export const criadorSchema = new Schema({
    availible: Number,
    collectionURI: String,
    items: [quadirnhoSchemaTipo],
    returned: Number});

export const texto = new Schema({
    tpe: String,
    language: String,
    text: String});

export const urlSchema = new Schema({
    type: String,
    url: String})

export const precoSchema = new Schema({
    type: String,
    price: Number});

export const imagensSchema = new Schema({
    path: String,
    extension: String});


const quadrinhoSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    modified: String,
    texto: [texto],
    resourceURI: String,
    series: [SerieSchema],
    dates: [dataSchema],
    prices: [precoSchema],
    thumbnail: [thumbnailSchema],
    images: [imagensSchema],
    creators: [criadorSchema],
    characters: [personagemSchema],
    stories: [storySchema],
    events: [eventoSchema],
    publitionDate: Date,
}, {timestamps: true});

export default model("Comics", quadrinhoSchema)