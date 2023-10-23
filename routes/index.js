import { Router } from "express"

const router = Router()

router.get("/", (req, res) => res.render("index", { title: "Primer sitio con node"}))

router.get("/about", (req, res) => res.render("about", { title: "Página de about"}))

router.get("/contact", (req, res) => res.render("contact", { title: "Página de contact"}))

export default router