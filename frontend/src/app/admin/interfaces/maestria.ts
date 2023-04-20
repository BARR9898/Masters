export interface Maestria {
  nombre: string,
  abreviatura: string,
  general: {

      GTramites: any[],
      GFechas: any[],
      GObjetivoGeneral: string,
      GObjetivosEspecificos: any[],
      GMetas: any[],
      GPerfil_ingreso: {
          GPI_start: string,
          GPI_conocimientos_basicos: any[],
          GPI_conocimientos_habilidades: any[],
          //GPI_conocimientos_aptitudes_valores: any[],
      },
      GPerfil_egreso: {
          GPE_start: string,
          GPE_capacidades: any[],
          GPE_competencias: any[],
          GPE_conocimientos: any[],
          GPE_habiliades: any[],
          GPE_aptitudes: any[]
      },
      GPlanesEstudio: {
          GPES_objetivo_general: string,
          GPES_objetivos_especificos: any[],
          GPES_metas: {
              GPES_star: string,
              GPES_metas: any[],
              GPES_mision: string,
              GPES_vision: string
          },
          GPES_asignaturas_basicas: {
              GPESAB_datos: any[]
          },
          GPES_asignaturas_optativas: {
              GPESAO_datos: any[]
          },
          GPES_seminario_tesis: any[]
      },
      GLGAC: string,
      GProceso_seleccion_aspirantes: {
              GPSA_start: string,
              GPSA_requisitos: any[]
      },
      GCaracteristicas_tesis: {
          GCT_start: string,
          GCT_requisitos: any[]

      },
  },
  procesos_administrativos: {
      PARequisitos_ingreso: {
          PARI_start: string,
          PARI_requisitos: any[],
          PARI_documentacion_start: string,
          PARI_documentos: any[]

      },
      PARequisitos_permanencia: {
          PARP_start: string,
          PARP_requisitos: any[],
      },
      PARequisitos_egreso: {
          PARE_start: string,
          PARE_requisitos: any[],
          PARE_obtencion_grado_start: string,
          PARE_obtencion_grado_requisitos: any[]
      },
      PABecas: {
          PAB_start: string,
          PAB_requisitos: any[]
      },
      PADescargas: any[]

  },

  docentes: {
      NADocentes: any[],
      NARepositorio_tesis: any[]
  }

  ,
  Estudiantes: {
      generacion: any[]
      Estudiante: any[]
  },
  vinculacion: {
      VInformacion: string,
      VConvenios: any[]
  },
  contacto: {
      CTelefonos: any[],
      CRedes: any[],
      CDireccion: any[],
      CCorreo: any[]
  },
  normas_estatutos: {
      NEInformacion: any[]


  }
}
