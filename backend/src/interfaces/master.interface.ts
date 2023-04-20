export interface Master{
    nombre: string,
    abreviatura: string,
    general: {
        
        GTramites: JSON[],
        GFechas: JSON[],
        GObjetivoGeneral: string,
        GObjetivosEspecificos: JSON[],
        GMetas: JSON[],
        GPerfil_ingreso: {
            GPI_start: string,
            GPI_conocimientos_basicos: JSON[],
            GPI_conocimientos_habilidades: JSON[],
            GPI_conocimientos_aptitudes_valores: JSON[],
        },
        GPerfil_egreso: {
            GPE_start: string,
            GPE_capacidades: JSON[],
            GPE_competencias: JSON[],
            GPE_conocimientos: JSON[],
            GPE_habiliades: JSON[],
            GPE_aptitudes: JSON[]
        },
        GPlanesEstudio: {
            GPES_objetivo_general: string,
            GPES_objetivos_especificos: JSON[],
            GPES_metas: {
                GPES_star: string,
                GPES_metas: JSON[],
                GPES_mision: string,
                GPES_vision: string
            },
            GPES_asignaturas_basicas: {
                GPESAB_datos: JSON[]
            },
            GPES_asignaturas_optativas: {
                GPESAO_datos: JSON[]
            },
            GPES_seminario_tesis: JSON[]
        },
        GLGAC: string,
        GProceso_seleccion_aspirantes: {
                GPSA_start: string,
                GPSA_requisitos: JSON[]
        },
        GCaracteristicas_tesis: {
            GCT_start: string,
            GCT_requisitos: JSON[]

        },
    },
    procesos_administrativos: {
        PARequisitos_ingreso: {
            PARI_start: string,
            PARI_requisitos: JSON[],
            PARI_documentacion_start: string,
            PARI_documentos: JSON[]

        },
        PARequisitos_permanencia: {
            PARP_start: string,
            PARP_requisitos: JSON[],
        },
        PARequisitos_egreso: {
            PARE_start: string,
            PARE_requisitos: JSON[],
            PARE_obtencion_grado_start: string,
            PARE_obtencion_grado_requisitos: JSON[]
        },
        PABecas: {
            PAB_start: string,
            PAB_requisitos: JSON[]
        },
        PADescargas: JSON[]

    },

    docentes: {
        NADocentes: JSON[],
        NARepositorio_tesis: JSON[]
    }

    ,
    Estudiantes: {
        generacion: JSON[]
        Estudiante: JSON[]
    },
    vinculacion: {
        VInformacion: string,
        VConvenios: JSON[]
    },
    contacto: {
        CTelefonos: JSON[],
        CRedes: JSON[],
        CDireccion: JSON[],
        CCorreo: JSON[]
    },
    normas_estatutos: {
        NEInformacion: JSON[]


    }
}