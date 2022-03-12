const {AverageAge, MaxAge,MinAge} = require('../util/util')
const { validationResult } = require('express-validator')
const csv = require('csv-parser');
const getStream = require('get-stream');
const fs = require('fs');

exports.select = async (req, res) => {
    //console.log(req.files)
    //revisar si hay errores

    const error = validationResult(req)

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }

    try {
        res.json({ file: 'OK' })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }

}

exports.findAll = async (req, res) => {
    try {

        let hundredMarried = { count: 0, list: [] }
        let racingFans = { avg: 0, list: [] }
        const data = await getStream.array(fs.createReadStream('./uploads/socios.csv')
            .pipe(csv({ headers: ['name', 'age', 'team', 'status', 'study'], separator: ';', encoding: 'ISO-8859-3' }))
            .on('data', (partner) => {
                //console.log(row);
                if (partner.status === 'Casado' && partner.study === 'Universitario' && hundredMarried.count < 100) {
                    hundredMarried.list.push(partner)
                    hundredMarried.count++
                    //console.log('hundredMarried.count ',hundredMarried.count )
                }
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            }))
        //Short by age
        hundredMarried.list = hundredMarried.list.sort(function (a, b) {
            return a.age - b.age;
        });
        await res.json({
            hundredMarried,
            racingFans
        })

    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}
//P1
exports.totalPeople = async (req, res) => {
    try {
        const data = await getStream.array(fs.createReadStream('./uploads/socios.csv')
            .pipe(csv({ headers: ['name', 'age', 'team', 'status', 'study'], separator: ';', encoding: 'ISO-8859-3' }))
            .on('end', () => {
                console.log('CSV file successfully processed - promedio edad racing');
            }))


        await res.json(data.length)

    } catch (error) {
        res.status(500).send('Hubo un error intentando sacar el promedio de edades')
    }
}

//P2
exports.avgRacingFanAge = async (req, res) => {
    try {
        let index = 0
        let racingFans = []
        const data = await getStream.array(fs.createReadStream('./uploads/socios.csv')
            .pipe(csv({ headers: ['name', 'age', 'team', 'status', 'study'], separator: ';', encoding: 'ISO-8859-3' }))
            .on('data', (partner) => {
                if (partner.team === 'Racing') {
                    racingFans.push(partner)
                }
            })
            .on('end', () => {
                console.log('CSV file successfully processed - promedio edad racing');
            }))

       
        await res.json(AverageAge(racingFans).toFixed(2))

    } catch (error) {
        res.status(500).send('Hubo un error intentando sacar el promedio de edades')
    }
}
//P3
exports.findTop100 = async (req, res) => {
    try {

        let hundredMarried = { count: 0, list: [] }
        let racingFans = { avg: 0, list: [] }
        const data = await getStream.array(fs.createReadStream('./uploads/socios.csv')
            .pipe(csv({ headers: ['name', 'age', 'team', 'status', 'study'], separator: ';', encoding: 'ISO-8859-3' }))
            .on('data', (partner) => {
                //console.log(row);
                if (partner.status === 'Casado' && partner.study === 'Universitario' && hundredMarried.count < 100) {
                    hundredMarried.list.push(partner)
                    hundredMarried.count++
                    //console.log('hundredMarried.count ',hundredMarried.count )
                }
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            }))
        //Short by age
        hundredMarried.list = hundredMarried.list.sort(function (a, b) {
            return a.age - b.age;
        });
        await res.json({
            hundredMarried,
            racingFans
        })

    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

//P4
exports.findRiverNames = async (req, res) => {
    try {

        let index = 0
        let response = { names: [], times: [], resObj: [] }
        //let response =[]
        let riverFans = []
        const data = await getStream.array(fs.createReadStream('./uploads/socios.csv')
            .pipe(csv({ headers: ['name', 'age', 'team', 'status', 'study'], separator: ';', encoding: 'ISO-8859-3' }))
            .on('data', (partner) => {
                if (partner.team.toLowerCase() === 'river') {
                    riverFans.push(partner.name)
                }
            })
            .on('end', () => {
                console.log('CSV file successfully processed - river fan name');
            }))

        riverFans.forEach(partner => {
            let i = response.names.indexOf(partner)
            if (i < 0) {
                response.names.push(partner)
                response.times.push(1)
                response.resObj.push({ name: partner, times: 1 })
            } else {
                response.times[i] += 1
                response.resObj[i].times += 1
            }
        });

        //Short by times
        response.resObj = response.resObj.sort(function (a, b) {
            return a.times + b.times;
        }).slice(0, 5);//top 5

        await res.json(response.resObj)

    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

//P5
exports.resumeTeams = async (req, res) => {
    try {

        let index = 0
        let resumeTeamsList = []

        const data = await getStream.array(fs.createReadStream('./uploads/socios.csv')
            .pipe(csv({ headers: ['name', 'age', 'team', 'status', 'study'], separator: ';', encoding: 'ISO-8859-3' }))
            .on('end', () => {
                console.log('CSV file successfully processed - resume team');
            }))


        const groupBy = key => array =>
            array.reduce((objectsByKeyValue, obj) => {
                const value = obj[key];
                objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
                return objectsByKeyValue;
            }, {});

        const groupByTeam = groupBy('team');

        let teams = groupByTeam(data)

    
        let claves = Object.keys(teams);
        for (let i = 0; i < claves.length; i++) {
            let clave = claves[i];
            resumeTeamsList.push({
                team : clave,
                partners : teams[clave].length,
                avgAge: AverageAge(teams[clave]).toFixed(2),
                maxAge: MaxAge(teams[clave]),
                minAge: MinAge(teams[clave]),
            })
            //console.log([clave] + '-' + teams[clave].length + '- avg ' + AverageAge(teams[clave]).toFixed(2) +' - max ' + MaxAge(teams[clave])+' - min ' + MinAge(teams[clave]));
        }

        resumeTeamsList = resumeTeamsList.sort(function (a, b) {
            return a.partners + b.partners;
        });

        await res.json(resumeTeamsList)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}