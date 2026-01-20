import { Router } from 'express';
import * as ctl from './../controllers/campus.controller.js';

const router = Router();

router.get("/", ctl.home);
router.get(["/info", "/about"], ctl.info);
router.get("/search", ctl.search);
router.get("/id/:id", ctl.campusById);


// router.get("/", (req, res) => {
//     res.status(200).json(campuses);
// })

// router.get(["/about", "/info"], (req, res) => {
//     res.status(200).json({
//         message: "Campus directory routes",
//         routes: ["GET /", "GET /about|/info", "GET /:id", "GET /search?city=&open=&program="]
//     })
// })

// router.get("/search", (req, res) => {
//     const { city, open, program } = req.query;
//     console.log(req.query);
//     let result;
//     if (!city && !open && !program){
//         res.status(200).json(campuses);
//     } else {
//         result = campuses.filter(campus => {
//             return campus.city === city || campus.programs.includes(program);
//         })
//         res.status(200).json(result);
//     }
// })

// router.get("/:id", (req, res) => {
//     const {id} = req.params;
//     console.log(req.params);
//     let chosenCampus = null;
    
//     if (id.length > 0){
//         for (let campus of campuses){
//             if (parseInt(campus.id) === parseInt(id)){
//                 chosenCampus = campus;
//             }
//         }
//     }

//     if (chosenCampus === null){
//         res.status(200).json({error: "Campus not found."});
//     } else {
//         res.status(200).json(chosenCampus);
//     }
// })


export default router;