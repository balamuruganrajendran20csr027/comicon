const express = require("express")
const router = express.Router()

//login
const userLogin = require("../components/userlogin")
router.post("/login",userLogin)

//signup
const userSignup = require("../components/userSignup")
router.post("/signup",userSignup)

//comics
const comics = require("../components/getComics")
router.get("/comics",comics)

const eachComics = require("../components/eachComics")
router.get("/comics/:id",eachComics)

const readComics = require("../components/downloadComic")
router.get("/comics/:id/download",readComics)

//movies
const movies = require("../components/getMovies")
router.get("/movies", movies)

const eachMovie = require("../components/eachMovie")
router.get("/movies/:id",eachMovie)

//series
const series = require("../components/getSeries")
router.get("/series",series)

const eachSeries = require("../components/eachSeries")
router.get("/series/:id",eachSeries)

module.exports=router