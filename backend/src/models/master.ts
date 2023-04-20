import { Schema, Types, model, Models } from "mongoose"
import { Master } from "../interfaces/master.interface";

const MasterSchema = new Schema<Master>(
    {
        nombre: {
            type: String,
            requires: true
        },
        abreviatura: {
            type: String,
            requires: true
        },
        general: {

            GTramites: {

                type: [JSON],
                required: false

            },
            GFechas: {

                type: [JSON],
                required: false

            },
            GObjetivoGeneral: {

                type: String,
                required: false

            },
            GObjetivosEspecificos: {
                type: [JSON],
                required: false
            },
            GMetas: {
                type: [JSON],
                required: false
            },
            GPerfil_ingreso: {
                GPI_start: {
                    type: String,
                    required: false
                },
                GPI_conocimientos_basicos: {
                    type: [JSON],
                    required: false
                },
                GPI_conocimientos_habilidades: {
                    type: [JSON],
                    required: false
                },
                GPI_conocimientos_aptitudes_valores: {
                    type: [JSON],
                    required: false
                },
            },
            GPerfil_egreso: {
                GPE_start: {
                    type: String,
                    required: false
                },
                GPE_capacidades: {
                    type: [JSON],
                    required: false
                },
                GPE_competencias: {
                    type: [JSON],
                    required: false
                },
                GPE_conocimientos: {
                    type: [JSON],
                    required: false
                },
                GPE_habiliades: {
                    type: [JSON],
                    required: false
                },
                GPE_aptitudes: {
                    type: [JSON],
                    required: false
                }
            },
            GPlanesEstudio: {
                GPES_objetivo_general: {
                    type: String,
                    required: false
                },
                GPES_objetivos_especificos: {
                    type: [JSON],
                    required: false
                },
                GPES_metas: {
                    GPES_star: {
                        type: String,
                        required: false
                    },
                    GPES_metas: {
                        type: [JSON],
                        required: false
                    },
                    GPES_mision: {
                        type: String,
                        required: false
                    },
                    GPES_vision: {
                        type: String,
                        required: false
                    }
                },
                GPES_asignaturas_basicas: {
                    GPESAB_datos: {
                        type: [JSON],
                        required: false
                    }
                },
                GPES_asignaturas_optativas: {
                    GPESAO_datos: {
                        type: [JSON],
                        required: false
                    }
                },
                GPES_seminario_tesis: {
                    type: [JSON],
                    required: false
                }
            },
            GLGAC: {
                type: String,
                required: false
            },
            GProceso_seleccion_aspirantes: {
                    GPSA_start: {
                        type: String,
                        required: false
                    },
                    GPSA_requisitos: {
                        type: [JSON],
                        required: false
                    }

            },
            GCaracteristicas_tesis: {
                GCT_start: {
                    type: String,
                    required: false
                },
                GCT_requisitos: {
                    type: [JSON],
                    required: false
                }

            },
        },
        procesos_administrativos: {
            PARequisitos_ingreso: {
                PARI_start: {
                    type: String,
                    required: false
                },
                PARI_requisitos: {
                    type: [JSON],
                    required: false
                },
                PARI_documentacion_start: {
                    type: String,
                    required: false
                },
                PARI_documentos: {
                    type: [JSON],
                    required: false
                }

            },
            PARequisitos_permanencia: {
                PARP_start: {
                    type: String,
                    required: false
                },
                PARP_requisitos: {
                    type: [JSON],
                    required: false
                },
            },
            PARequisitos_egreso: {
                PARE_start: {
                    type: String,
                    required: false
                },
                PARE_requisitos: {
                    type: [JSON],
                    required: false
                },
                PARE_obtencion_grado_start: {
                    type: String,
                    required: false
                },
                PARE_obtencion_grado_requisitos: {
                    type: [JSON],
                    required: false
                }
            },
            PABecas: {
                PAB_start: {
                    type: String,
                    required: false
                },
                PAB_requisitos: {
                    type: [JSON],
                    required: false
                }
            },
            PADescargas: {
                type: [JSON],
                required: false
            }

        },

        docentes: {
            NADocentes: {
                type: [JSON],
                required: false
            },
            NARepositorio_tesis: {
                type: [JSON],
                required: false
            }
        }

        ,
        Estudiantes: {
            generacion: {
                type: [JSON],
                required: false
            },
            Estudiante: {
                type: [JSON],
                required: false
            }
        },
        vinculacion: {
            VInformacion: {
                type: String,
                required: false
            },
            VConvenios: {
                type: [JSON],
                required: false
            }
        },
        contacto: {
            CTelefonos: {
                type: [JSON],
                required: false
            },
            CRedes: {
                type: [JSON],
                required: false
            },
            CDireccion: {
                type: [JSON],
                required: false
            },
            CCorreo: {
                type: [JSON],
                required: false
            }
        },
        normas_estatutos: {
            NEInformacion: {
                type: [JSON],
                required: false
            }


        }


    },
    {
        timestamps: true,
        versionKey: false

    }
);

const MasterModel = model("masters", MasterSchema);
export default MasterModel;