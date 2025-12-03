import {URLTMDB, headersTMDB} from 'configs.js'

async function getMovies () {
    try{
        const req = await fetch(URLTMDB,{
            method:"GET",
            headers:headersTMDB
        })
        await console.log(req.json())
    } catch{
        console.log("Some error")
    }
}