import { Schema, model } from "mongoose";

const quadirnhoSchemaTipo = new Schema({
    resourceURI: String,
    name: String,
    type: String});

const quadrinhoSchema = new Schema({
    resourceURI: String,
    name: String,});

const quadrinhoDadosSchema = new Schema({
    available: Number,
    collectionURI: String,
    items: [quadrinhoSchema], });


const UrlSchema = new Schema({
    type: String,
    url: String});

const StorySchema = new Schema({
    available: Number,
    collectionURI: String,
    items: [quadirnhoSchemaTipo],});


const SerieSchema = new Schema({
    available: Number,
    collectionURI: String,
    items: [quadrinhoSchema],});


const ThumbnailSchema = new Schema({
    path: String,
    extension: String,});


const EventoSchema = new Schema({
    available: Number,
    collectionURI: String,
    items: [quadrinhoSchema],});


const personagemSchema = new Schema({
    id: String, 
    name: String,
    description: String,
    thumbnail: ThumbnailSchema,
    resourceURI: String, 
    comics: quadrinhoDadosSchema,
    series: [SerieSchema],
    stories: [StorySchema],
    events: [EventoSchema],
}, { timestamps: true});

export default model("Character", personagemSchema);
