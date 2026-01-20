const campuses = [
    { id: 1, code: "AUB", name: "Auburn Campus", city: "Auburn", open: true, programs: ["CS", "IT", "Nursing"] },
    { id: 2, code: "KCC", name: "Kent Campus", city: "Kent", open: true, programs: ["CS", "Business"] },
    { id: 3, code: "SEA", name: "Seattle Center", city: "Seattle", open: false, programs: ["Continuing Ed"] },
    { id: 4, code: "TAC", name: "Tacoma Site", city: "Tacoma", open: true, programs: ["Trades", "IT"] },
    { id: 5, code: "REN", name: "Renton Annex", city: "Renton", open: false, programs: ["ESL", "GED"] }
];

export const home = (req, res) => {
    res.json(campuses);
}

export const info = (req, res) => {
    res.status(200).json({
        message: "Server routes",
        routes: ["GET /", "GET /about|/info", "GET /:id", "GET /search?city=&open=&program="]
    });
}

export const campusById = (req, res) => {
    const { id } = req.params; //read in the path variable
    console.log(id);

    const campus = campuses.find(el => {
        console.log(`Compare: ${el.id} to ${id}`);
        console.log(typeof el.id);
        console.log(typeof id);

        return el.id === Number(id);
    });

    console.log(campus);

    if (campus) {
        res.status(200).json(campus);
    } else {
        res.status(404).json({ message: "Campus not found."})
    }
}

export const search = (req, res) => {
    const { city, open, program } = req.query;

    let results = campuses;

    if (program){
        results = campuses.filter(el => el.programs.includes(program));
    }

    if (open){
        results = results.filter(el => el.open == open);
    }

    if (city){
        results = results.filter(el => el.city === city);
    }

    res.status(200).json(results.length > 0 ? results : {message: "No campuses available."});
}