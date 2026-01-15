import { Router } from 'express';

const router = Router();

const campuses = [
            {id: 1, code: "AUB", name: "Auburn Campus", city: "Auburn", open: true, programs: ["CS", "IT", "Nursing"]},
            {id: 2, code: "KCC", name: "Kent Campus", city: "Kent", open: true, programs: ["CS", "Business"]}
        ]

router.get("/", (req, res) => {
    res.status(200).json(campuses);
})

router.get(["/about", "/info"], (req, res) => {
    res.status(200).json({
        message: "Campus directory routes",
        routes: ["GET /", "GET /about|/info", "GET /:id", "GET /search?city=&open=&program="]
    })
})

router.get("/:id", (req, res) => {
    const {id} = req.params;
    let chosenCampus;
    for (let campus of campuses){
        if (campus.id == id){
            chosenCampus = campus;
        }
    }

    chosenCampus = chosenCampus != null ? chosenCampus : {error: "Campus not found."};
    res.status(200).json(chosenCampus);
})



export default router;