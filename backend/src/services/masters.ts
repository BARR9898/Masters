import { Master } from "../interfaces/master.interface"
import MasterModel from "../models/master"
import {pool} from "../config/mysql";
import { query } from "express";


const insertMaster = async (item:Master) => {
    const responseInsert = await MasterModel.create(item);
    return responseInsert;

}

const getMasters = async () => {
    const responseItem = await MasterModel.find({});
    return responseItem;
}

const getMaster = async (id:string) => {
    const responseItem = await MasterModel.findOne({_id: id});
    return responseItem;
}

const updateMaster = async (id:string,data:Master) => {
    const responseItem = await MasterModel.findOneAndUpdate({_id: id},data,{new:true});
    return responseItem;
}

const deleteMaster = async (id:string) => {
    const responseItem = await MasterModel.deleteOne({_id: id});
    return responseItem;
}

const create = async(data:any) => {
    console.log(data);
    const {nombre,abreviatura} = data
    const {metas,GObjetivoGeneral,GObjetivosEspecificos,GPI_start,GPIConocimientosBasicos,GPIHabilidades} = data
    let master_id = await crearMaestria(nombre,abreviatura);
    crearData(master_id,metas,['general_metas','maestrias_general_metas'],true)
    crearData(master_id,[GObjetivoGeneral],['general_objetivos_generales','maestrias_general_objetivos_generales'],false)
    crearData(master_id,GObjetivosEspecificos,['general_objetivos_especificos','maestrias_general_objetivos_especificos'],true)
    crearData(master_id,[GPI_start],['gpi_textos_introductoreos','maestrias_gpi_textos_introductoreos'],false)
    crearData(master_id,GPIConocimientosBasicos,['gpi_conocimientos_basicos','maestrias_gpi_conocimeintos_basicos'],true)
    crearData(master_id,GPIHabilidades,['gpi_habilidades','maestrias_gpi_habilidades'],true)

    //crearGMetas(master_id,metas)
    //crearObjetivoGeneral(master_id,GObjetivoGeneral)
    //crearGObjetivosEspecificos(master_id,GObjetivosEspecificos)
    //const query =  await pool.query('select * from maestrias;')
    //return query[0]
}


async function crearData(id_maestria:string,data:any[],tables:string[],insertarVariosDatos:boolean){

    
    if (insertarVariosDatos) {
        data.forEach( async data => {
            const [row]:any = await pool.query(`INSERT INTO ${tables[0]} VALUES (null,?)`,[data])
            let las_insert_id = row.insertId
            await pool.query(`INSERT INTO ${tables[1]} VALUES (null,?,?)`,[id_maestria,las_insert_id])
    
    
        })
    }else{
        let value = data[0];
        let [rows]:any = await pool.query(`INSERT INTO ${tables[0]} VALUES (null,?)`,[value])
        let last_inserted_id_objetivo = rows.insertId
        await pool.query(`INSERT INTO ${tables[1]} VALUES (null,?,?)`,[id_maestria,last_inserted_id_objetivo])  
    }
  
    
}
async function crearMaestria(nombre:string,abreviatura:string){
    const [rows]:any = await pool.query('INSERT INTO maestrias VALUES (null,?,?)',[nombre,abreviatura])
    if(rows.affectedRows){
        const las_insert_id = rows.insertId
        return las_insert_id
    }
    return false


    
}

async function crearGMetas(id_maestria:any,metas:string[]){

    metas.forEach( async meta => {
        let [rows]:any = await pool.query('INSERT INTO general_metas VALUES (null,?)',[meta])
        let last_inserted_id_meta = rows.insertId
        await pool.query('INSERT INTO maestrias_general_metas VALUES (null,?,?)',[id_maestria,last_inserted_id_meta])
    })


    
}

async function crearGObjetivosEspecificos(id_maestria:any,objetivos:string[]){

    objetivos.forEach( async objetivo => {
        let [rows]:any = await pool.query('INSERT INTO general_objetivos_especificos VALUES (null,?)',[objetivo])
        let last_inserted_id = rows.insertId
        await pool.query('INSERT INTO maestrias_general_objetivos_especificos VALUES (null,?,?)',[id_maestria,last_inserted_id])
    })


    
}

async function crearObjetivoGeneral(id_maestria:any,objetivo:string){

        let [rows]:any = await pool.query('INSERT INTO general_objetivos_generales VALUES (null,?)',[objetivo])
        let last_inserted_id_objetivo = rows.insertId
        await pool.query('INSERT INTO maestrias_general_objetivos_generales VALUES (null,?,?)',[id_maestria,last_inserted_id_objetivo])    
}




export {insertMaster,getMaster,getMasters,updateMaster,deleteMaster,create}