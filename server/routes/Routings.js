const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    let query = req.query;
    let routings;
    if (Object.keys(query).length === 0)
        routings = await db.query('select * from routings');
    else {
        let queryParams = [];
        let queryText = 'select * from routings where ';
        let i = 1;
        for (let key in query) {
            queryText += `${key} = $${i} and `;
            queryParams.push(query[key]);
            i++;
        }
        queryText = queryText.slice(0, -5);

        routings = await db.query(queryText, queryParams);
    }
    res.json(routings.rows);
});

router.get("/bycar", async (req, res) => {
    const routings = await db.query(`
    select "carId",count(*) as "routesCount",sum(length) as "totalLength" 
    from routings
    group by "carId";
    `);
    res.json(routings.rows);
});

router.get("/bycar/:id", async (req, res) => {
    const { id } = req.params;
    const routings = await db.query(`
    select "carId",count(*) as "routesCount",sum(length) as "totalLength" 
    from routings where "carId"=${id}
    group by "carId";
    `);
    res.json(routings.rows);
});


router.get("/byroute", async (req, res) => {
    const routings = await db.query(`
    select "routeId",string_agg(cast("carId" as text), ',') as cars,route,length,weight,duration
    from routings
    group by "routeId",route,length,weight,duration;
    `);
    res.json(routings.rows);
});

router.get("/lastRouteByCar/:id", async (req, res) => {
    const { id } = req.params;
    const routings = await db.query(`
    select max(id) as maxi from routings
    where "carId"=${id};
    `);
    res.json(routings.rows[0].maxi);
});

router.get("/codes", async (req, res) => {
    const result = await db.query(`
    select "routeId" from routings group by "routeId";
    `);
    res.json(result.rows);
});

router.post('/', async (req, res) => {
    const {routeId, carId, route, length, duration, userId, weight} = req.body;
    let moment = require('moment');
    const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    const createdRoute = await db.query(`insert into routings ("routeId", "carId", route, length, duration, "createdAt","userId",weight) 
    values ('${routeId}',${carId},'${route}',${length},'${duration}','${createdAt}',${userId}, ${weight})`);
    res.json(createdRoute.rows[0]);
})

module.exports = router;