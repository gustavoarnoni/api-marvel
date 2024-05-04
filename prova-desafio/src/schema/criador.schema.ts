import { Schema, model } from "mongoose";

export const quadrinhoSchema = new Schema({
    resourceURI: String,
    name: String,});

export const quadirnhoSchemaTipo = new Schema({
    resourceURI: String,
    name: String,
    type: String});


export const quadrinhoDadosSchema = new Schema({
    available: Number,
    collectionURI: String,
    items: [quadrinhoSchema], });


export const urlSchema = new Schema({
    type: String,
    url: String});



export const EventoSchema = new Schema({
    available: Number,
    collectionURI: String,
    items: [quadrinhoSchema],});


export const ThumbnailSchema = new Schema({
    path: String,
    extension: String,});

export const StorySchema = new Schema({
    available: Number,
    collectionURI: String,
    items: [quadirnhoSchemaTipo],});


export const SerieSchema = new Schema({
    available: Number,
    collectionURI: String,
    items: [quadrinhoSchema],});


const criadorSchema = new Schema ({
    id: Number,
    firstName: String,
    lastName: String,
    fullName: String,
    comics: quadrinhoDadosSchema,
    series: [SerieSchema],
    stories: [StorySchema],
    events: [EventoSchema],
}, { timestamps: true});

export default model("Criador", criadorSchema);
