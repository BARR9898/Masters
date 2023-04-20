import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, Form } from '@angular/forms';
import { forEach, remove } from 'lodash';
import Swal from 'sweetalert2'
import { DomSanitizer } from '@angular/platform-browser';
import { UploadImageService } from 'src/app/admin/services/upload-image.service';
import { Maestria } from 'src/app/admin/interfaces/maestria';
import { MaestriasService } from 'src/app/admin/services/maestrias.service';
import { Router,ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{





  myForm = this.fb.group({
    nombre: this.fb.control('', [Validators.required, Validators.maxLength(60)]),
    abreviatura: this.fb.control('', [Validators.required, Validators.maxLength(6)]),
    //Tramits
    auxGTramite: this.fb.control('', [Validators.maxLength(50)]),
    auxGTramiteCosto: this.fb.control('', [Validators.maxLength(4)]),
    GTramites: this.fb.array([]),
    //Dates
    auxGDate: this.fb.control(''),
    auxGDate_NameTramit: this.fb.control('', [Validators.maxLength(50)]),
    GDates: this.fb.array([]),
    //General Objetives
    GGObjetives: this.fb.control('', [Validators.maxLength(500)]),
    //Objetivos especificos
    GObjetivosEspecificos_aux: this.fb.control('', [Validators.maxLength(50)]),
    GObjetivosEspecificos: this.fb.array([]),
    //Metas
    GMetas_aux: this.fb.control('', [Validators.maxLength(50)]),
    GMetas: this.fb.array([]),
    // *** GENERL PERFIL DE INGRESO ***
    GPI_start: this.fb.control('', [Validators.maxLength(600)]),
    GPI_conocimientos_basicos_aux: this.fb.control('', [Validators.maxLength(50)]),
    GPI_conocimientos_basicos: this.fb.array([]),
    //CONOCIMEINTOS Y HABILIDADES
    GPI_conocimientos_habilidades_aux: this.fb.control('', [Validators.maxLength(50)]),
    GPI_conocimientos_habilidades: this.fb.array([]),
    // *** GENERAL PERFIL DE EGRESO ***
    GPE_start: this.fb.control('', Validators.maxLength(600)),
    GPE_capacidades: this.fb.array([]),
    GPE_capacidades_aux: this.fb.control('', Validators.maxLength(60)),
    GPE_competencias: this.fb.array([]),
    GPE_competencias_aux: this.fb.control('', [Validators.maxLength(100)]),
    GPE_conocimientos: this.fb.array([]),
    GPE_conocimientos_aux: this.fb.control('', [Validators.maxLength(100)]),
    GPE_habilidades: this.fb.array([]),
    GPE_habilidades_aux: this.fb.control('', [Validators.maxLength(100)]),
    GPE_aptitudes: this.fb.array([]),
    GPE_aptitudes_aux: this.fb.control('', [Validators.maxLength(100)]),
    // *** GENERAL PLANES DE ESTUIO ***
    GPES_objetivo_general: this.fb.control('', [Validators.maxLength(600)]),

    GPES_metas_mision: this.fb.control('', [Validators.maxLength(600)]),
    GPES_metas_vision: this.fb.control('', [Validators.maxLength(600)]),
    GPES_metas_start: this.fb.control('', [Validators.maxLength(600)]),

    GPES_objetivos_especificos: this.fb.array([]),
    GPES_objetivos_especificos_aux: this.fb.control('', [Validators.maxLength(100)]),
    GPES_metas: this.fb.array([]),
    GPES_metas_aux: this.fb.control('', [Validators.maxLength(100)]),
    GPES_asignaturas_basicas_aux: this.fb.control('', [Validators.maxLength(100)]),
    GPES_asignaturas_basicas: this.fb.array([]),
    GPES_asignaturas_optativas: this.fb.array([]),
    GPES_asignaturas_optativas_aux: this.fb.control('', [Validators.maxLength(100)]),
    GPES_seminario_tesis_aux: this.fb.control('', [Validators.maxLength(100)]),
    GPES_seminario_tesis: this.fb.array([]),
    GLGAC: this.fb.control('', [Validators.maxLength(1000)]),
    GPSA_start: this.fb.control('', [Validators.required]),
    GPSA_requisitos: this.fb.array([]),
    GPSA_requisitos_aux: this.fb.control('', [Validators.maxLength(100)]),
    GCT_start: this.fb.control('', [Validators.maxLength(1000)]),
    GCT_requisitos: this.fb.array([]),
    GCT_requisitos_aux: this.fb.control('', [Validators.maxLength(100)]),
    // *** PROCESOS ADMINISTRATIVOS ***
    PARI_start: this.fb.control('', [Validators.maxLength(1000)]),
    PARI_requisitos: this.fb.array([]),
    PARI_requisitos_aux: this.fb.control('', [Validators.maxLength(100)]),
    PARI_documentacion_start: this.fb.control('', [Validators.maxLength(1000)]),
    PARI_documentos: this.fb.array([]),
    PARI_documentos_aux: this.fb.control('', [Validators.maxLength(100)]),
    PARP_start: this.fb.control('', [Validators.maxLength(1000)]),
    PARP_requisitos_aux: this.fb.control('', [Validators.maxLength(100)]),
    PARP_requisitos: this.fb.array([]),
    PARE_start: this.fb.control('', [Validators.maxLength(100)]),
    PARE_requisitos: this.fb.array([]),
    PARE_requisitos_aux: this.fb.control('', [Validators.maxLength(100)]),
    PARE_obtencion_grado_start: this.fb.control('', [Validators.maxLength(1000)]),
    PARE_obtencion_grado_requisitos: this.fb.array([]),
    PARE_obtencion_grado_requisitos_aux: this.fb.control('', [Validators.maxLength(100)]),
    PAB_start: this.fb.control('', [Validators.maxLength(1000)]),
    PAB_requisitos: this.fb.array([]),
    PAB_requisitos_aux: this.fb.control('', [Validators.maxLength(100)]),
    PADescargas: this.fb.array([]),
    PADescargas_nombre: this.fb.control('', [Validators.maxLength(100)]),
    PADescargas_enlace: this.fb.control('', [Validators.maxLength(100)]),
    // *** DOCENTES ***
    NADocentes: this.fb.array([]),
    NADocentes_nombre: this.fb.control('', [Validators.maxLength(50)]),
    NADocentes_grado_academico: this.fb.control('', [Validators.maxLength(50)]),
    NADocentes_tiempo_empartimiento: this.fb.control('Completo', [Validators.maxLength(50)]),
    NADocentes_especialidad: this.fb.control('', [Validators.maxLength(50)]),
    NADocentes_curriculum: this.fb.control('', [Validators.maxLength(1000)]),
    NARepositorio_tesis_nombre: this.fb.control('', [Validators.maxLength(100)]),
    NARepositorio_tesis_tipo: this.fb.control('', [Validators.maxLength(100)]),
    NARepositorio_tesis_autores_aux: this.fb.control('', [Validators.maxLength(60)]),
    NARepositorio_tesis_autores: this.fb.array([]),
    NARepositorio_tesis_fecha_aux: this.fb.control('', [Validators.maxLength(10)]),
    NARepositorio_tesis_fecha: this.fb.control('', [Validators.maxLength(10)]),
    NARepositorio_tesis_resumen: this.fb.control('', [Validators.maxLength(1000)]),
    NARepositorio_tesis_enlace: this.fb.control('', [Validators.maxLength(50)]),
    NARepositorio_tesis: this.fb.array([]),
    docenteImagen: this.fb.array([]),
    // *** ESTUDIANTES ***
    generacion: this.fb.array([]),

    Estudiantes: this.fb.array([]),
    Estudiantes_nombre: this.fb.control('',[Validators.maxLength(50)]),
    Estudiantes_tema_tesis: this.fb.control('',[Validators.maxLength(100)]),
    Estudiantes_tutor:  this.fb.control('',[Validators.maxLength(50)]),
    Estudiantes_director_tesis:  this.fb.control('',[Validators.maxLength(50)]),
    Estudiantes_generacion:  this.fb.control('',[Validators.maxLength(30)]),
    // *** VINCULACION ***
    Vinculacion_convenios: this.fb.array([]),
    Vinculacion_informacion: this.fb.control('',[Validators.maxLength(1000)]),
    Vinculacion_convenios_nombre: this.fb.control('',[Validators.maxLength(50)]),
    Vinculacion_convenios_enlace: this.fb.control('',[Validators.maxLength(30)]),
    // *** CONTACTOS ***
    CTelefonos_aux: this.fb.control('',[Validators.maxLength(10)]),
    CTelefonos: this.fb.array([]),
    CCorreos_aux: this.fb.control('',[Validators.maxLength(40)]),
    CCorreos: this.fb.array([]),
    CRedes_aux: this.fb.control('',[Validators.maxLength(40)]),
    CRedes: this.fb.array([]),
    CDirecciones_aux: this.fb.control('',[Validators.maxLength(60)]),
    CDirecciones: this.fb.array([]),
    CRedes_red_social: this.fb.control('Facebook',[Validators.maxLength(40)]),
    // *** NORMAS Y ESTATUTOS
    NormasEstatutos_nombre: this.fb.control('',[Validators.maxLength(50)]),
    NormasEstatutos_enlace: this.fb.control('',[Validators.maxLength(50)]),
    NormasEstatutos: this.fb.array([]),

















  });

  imageForm = this.fb.group({
    nombre: this.fb.control('',[Validators.maxLength(50)]),
    descripcion: this.fb.control('',[Validators.maxLength(50)])
  })


  master_id:any
  master!:Maestria

  constructor(private fb: FormBuilder, private sanitizer:DomSanitizer,private uploadService:UploadImageService,private maestriaService:MaestriasService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getExpedienteData()
  }


  saveMaster() {

    let masterReadyToSend = this.prepareDataToSend()
    console.log('Data enviada',masterReadyToSend);
    this.maestriaService.updateMaster(this.master_id,masterReadyToSend)
    .subscribe((res:any) => {
      console.log(res);

      if (res.result) {
        Swal.fire({
          icon: 'success',
          title: 'Maestria actualizada',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          this.router.navigate(['/admin/maestrias/detalle',this.master_id])

        })
      }else{
        this.showDialog('Algo salió mal!','error')

      }
    })






  }

  getExpedienteData(){
    this.activatedRoute.paramMap.subscribe((param:ParamMap )=> {
      this.master_id =  param.get('id')
      this.maestriaService.getMaster(this.master_id)
        .subscribe((res:any) => {
          if(res.result){
            this.master = res.data
            console.log(this.master);

            this.asignMasterDataToForm()
          }
        })
    })
  }

  //GTramites
  showGTramits = false;

  //GDatess
  showGDates = false;

  //showGObjetivosEspecificos
  showGObjetivosEspecificos = false

  //showGMetas
  showGMetas = false;

  //showGPI_conocimientos_basicos
  showGPI_conocimientos_basicos_aux = false;

  //showGPI_conocimientos_habilidades
  showGPI_conocimientos_habilidades = false;

  //showGPE_capacidades
  showGPE_capacidades = false

  //showGPE_competencias
  showGPE_competencias = false

  //showGPE_conocimientos
  showGPE_conocimientos = false

  //showGPE_habiliades
  showGPE_habilidades = false

  //showGPE_aptitudes
  showGPE_aptitudes = false

  //showGPES_objetivos_especificos
  showGPES_objetivos_especificos = false

  //showGPES_metas
  showGPES_metas = false

  //showGPES_asignaturas_basicas
  showGPES_asignaturas_basicas = false

  //showGPES_asignaturas_optativas
  showGPES_asignaturas_optativas = false

  //showGPES_seminario_tesis
  showGPES_seminario_tesis = false

  //showGPSA_requisitos
  showGPSA_requisitos = false

  //showGCT_requisitos
  showGCT_requisitos = false

  //showPARI_requisitos
  showPARI_requisitos = false

  //showPARI_documentos
  showPARI_documentos = false

  //showPARP_requisitos_aux
  showPARP_requisitos = false

  //showPARE_requisitos
  showPARE_requisitos = false

  //showPARE_obtencion_grado_requisitos
  showPARE_obtencion_grado_requisitos = false

  //showPAB_requisitos
  showPAB_requisitos = false

  //showPADescargas
  showPADescargas = false

  //Tiempo de impartimiento docentes
  tiempos_impartimiento = [
    { descripcion: 'Completo', value: 'c' },
    { descripcion: 'Parcial', value: 'p' }
  ]

  //showNADocentes
  showNADocentes = false

  //showNARepositorio_tesis_autores
  showNARepositorio_tesis_autores = false

  //showNARepositorio_tesis
  showNARepositorio_tesis = false

  //ShowEstudiantes
  showEstudiantes = false

  //showVinculacion_convenios
  showVinculacion_convenios = false;

  //showCTelefonos
  showCTelefonos = false

  //showCCorreos
  showCCorreos = false
  isInvalyd(index: number, controlFormName: string, controlName: string) {
    return (<FormArray>this.myForm.get(controlFormName)).controls[index].get(controlName)?.errors && (<FormArray>this.myForm.get(controlFormName)).controls[index].get(controlName)?.touched;

  }

  //showCRedes
  showCRedes = false

  //REDES SOCIALES
  redes_sociales = [
    { descripcion: 'Facebook' },
    { descripcion: 'TikTok' },
    { descripcion: 'Instagram' },
    { descripcion: 'Linkedin' },


  ]

  //showNormasEstatutos
  showNormasEstatutos = false


  //preview image1
  public previsualizacion:string =''
  public loading:boolean = false

  //docentImageSaved
  docentImageSaved = false

  //showCDirecciones
  showCDirecciones = false


  addItem(auxControlNames: Array<string>, formControlName: string, keys: Array<string>) {


    const newData: Array<string> = [];
    auxControlNames.forEach(data => {
      let auxData;

      switch (data) {
        case 'auxGDate':
          auxData = this.formatDate(data);
          break;
        default:
          auxData = (<FormArray>this.myForm.get(data)).value;
          break;
      }
      newData.push(auxData)
    })

    const controlFormAsArray = this.myForm.get(formControlName) as FormArray

    let auxFormGroup = this.fb.group({

    });


    keys.forEach((key, index) => {
        auxFormGroup.addControl(key, this.fb.control(newData[index]))
    })

    controlFormAsArray.push(auxFormGroup);


    //Clean the formControls
    auxControlNames.forEach((control) => {
      switch (control) {
        case 'NARepositorio_tesis_autores':
          this.myForm.controls.NARepositorio_tesis_autores.clear()
          break;
        case 'NARepositorio_tesis_fecha_aux':
         this.myForm.get(control)?.setValue(new Date().toISOString())
          break;
        default:
          this.myForm.get(control)?.setValue('')
          break;
      }

    })

  }

  deleteItem(index: number, formControl: string) {
    //Show confirm dialog for delete an item
    Swal.fire({
      title: '¿Desea eliminar el item?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const formControlAsArray = this.myForm.get(formControl) as FormArray
        formControlAsArray.removeAt(index)
        Swal.fire('Eliminado!', '', 'success')
      } else if (result.isDenied) {
      }
    })

  }

  formatDate(data: string) {
    let auxData = (<FormArray>this.myForm.get(data)).value;
    let formatedData = new Date(auxData).toLocaleDateString('es-MX')
    return formatedData

  }

  desabledButton(constrols: Array<string>) {
    let status = false;
    constrols.forEach(control => {
      this.myForm.get(control)?.value != "" ? status = false : status = true
    })
    return status
  }

  getWroteLength_Array(controlFormName: string, index: number, controlName: string) {
    const length = (<FormArray>this.myForm.get(controlFormName)).controls[index].get(controlName)?.value.length
    return length;
  }

  getWroteLength(controlFormName: string) {

    const length = (<FormArray>this.myForm.get(controlFormName)).value.length
    return length;
  }

  hasErrorControl(formControlName: string, typeError: string) {
    return this.myForm.get(formControlName)?.hasError(typeError) && this.myForm.get(formControlName)?.touched
  }

  getLenghtFormArray(formControlName: string) {
    return this.myForm.get(formControlName)?.value.length
  }

  setDate() {
    let date = this.myForm.controls.NARepositorio_tesis_fecha_aux.value
    let date_formated = new Date(date!).toLocaleDateString('es-MX')
    this.myForm.controls.NARepositorio_tesis_fecha.setValue(date_formated)
    console.log(this.myForm.controls.NARepositorio_tesis_fecha.value);

  }


  //CARGA DE IMAGENES

  public archivos:any = []

  captureFile(event: any){
    console.log(event.target.files[0]);
    const archivo = event.target.files[0]
    this.extraerBase64(archivo).then((imagen:any) => {
      this.previsualizacion = imagen.base


    })
    this.archivos.push(archivo)

  }

  extraerBase64 = async ($event:any) => new Promise((resolve,reject)=> {
    try {
      const unsageImage = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsageImage)
      const reader = new FileReader()
      reader.readAsDataURL($event)
      reader.onload = ($event) => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        })
      }
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base:null

        })
      }
    } catch (error) {

    }
  })

  subirArchivo(): any{
    try {
      console.log('HOLA');
      this.loading = true;
      const imageForm = new FormData()
      let imageFormValues = this.prepareImageFormData()

      this.archivos.forEach( (archivo:any) => {
        imageForm.append('title',imageFormValues.nombre)
        imageForm.append('description',imageFormValues.descripcion)
        imageForm.append('image',archivo)
      })


      this.uploadService.upladImage(imageForm)
      .subscribe((res:any) => {
        this.loading = false
        console.log(res);
        imageFormValues.imagePath = res.imagen.imagePath
        this.addImageDocenteToNADocentes(imageFormValues)
        this.docentImageSaved = true


      })



    } catch (e) {
      console.log('ERROR',e);

    }
  }

  prepareImageFormData(){
    let estructure:any = {
    }
    estructure.nombre =  this.imageForm.controls.nombre.value
    estructure.descripcion = this.imageForm.controls.descripcion.value
    return estructure
  }

  addImageDocenteToNADocentes(data:any){
    let formControlNADocentes = this.myForm.controls.docenteImagen as FormArray
    let newFormGroup = this.fb.group({
      nombre: this.fb.control(data.nombre),
      descripcion: this.fb.control(data.descripcion),
      path: this.fb.control(data.imagePath)
    })
    formControlNADocentes.push(newFormGroup)
    console.log(this.myForm.controls.docenteImagen);

    this.previsualizacion = ''
    this.imageForm.controls.nombre.setValue('')
    this.imageForm.controls.descripcion.setValue('')





  }

  prepareDataToSend():Maestria{

    let masterForm =  this.myForm
    let maestria:Maestria = {
      nombre: masterForm.controls.nombre.value!,
      abreviatura: masterForm.controls.abreviatura.value!,
      general: {
          GTramites: masterForm.controls.GTramites.value! ,
          GFechas: masterForm.controls.GDates.value!,
          GObjetivoGeneral: masterForm.controls.GGObjetives.value!,
          GObjetivosEspecificos:masterForm.controls.GObjetivosEspecificos.value!,
          GMetas: masterForm.controls.GMetas.value!,
          GPerfil_ingreso: {
              GPI_start: masterForm.controls.GPI_start.value!,
              GPI_conocimientos_basicos: masterForm.controls.GPI_conocimientos_basicos.value!,
              GPI_conocimientos_habilidades: masterForm.controls.GPI_conocimientos_habilidades.value!,
          },
          GPerfil_egreso: {
              GPE_start: masterForm.controls.GPE_start.value!,
              GPE_capacidades: masterForm.controls.GPE_capacidades.value!,
              GPE_competencias: masterForm.controls.GPE_competencias.value!,
              GPE_conocimientos: masterForm.controls.GPE_conocimientos.value!,
              GPE_habiliades: masterForm.controls.GPE_habilidades.value!,
              GPE_aptitudes: masterForm.controls.GPE_aptitudes.value!
          },
          GPlanesEstudio: {
              GPES_objetivo_general: masterForm.controls.GPES_objetivo_general.value!,
              GPES_objetivos_especificos: masterForm.controls.GPES_objetivos_especificos.value!,
              GPES_metas: {
                  GPES_star: masterForm.controls.GPES_metas_start.value!,
                  GPES_metas: masterForm.controls.GPES_metas.value!,
                  GPES_mision: masterForm.controls.GPES_metas_mision.value!,
                  GPES_vision:  masterForm.controls.GPES_metas_vision.value!
              },
              GPES_asignaturas_basicas: {
                  GPESAB_datos: masterForm.controls.GPES_asignaturas_basicas.value!
              },
              GPES_asignaturas_optativas: {
                  GPESAO_datos: masterForm.controls.GPES_asignaturas_optativas.value!
              },
              GPES_seminario_tesis: masterForm.controls.GPES_seminario_tesis.value!
          },
          GLGAC: masterForm.controls.GLGAC.value!,
          GProceso_seleccion_aspirantes: {
                  GPSA_start: masterForm.controls.GPSA_start.value!,
                  GPSA_requisitos: masterForm.controls.GPSA_requisitos.value!
          },
          GCaracteristicas_tesis: {
              GCT_start: masterForm.controls.GCT_start.value!,
              GCT_requisitos: masterForm.controls.GCT_requisitos.value!

          },
      },
      procesos_administrativos: {
          PARequisitos_ingreso: {
              PARI_start: masterForm.controls.PARI_start.value!,
              PARI_requisitos: masterForm.controls.PARI_requisitos.value!,
              PARI_documentacion_start: masterForm.controls.PARI_documentacion_start.value!,
              PARI_documentos: masterForm.controls.PARI_documentos.value!

          },
          PARequisitos_permanencia: {
              PARP_start: masterForm.controls.PARP_start.value!,
              PARP_requisitos: masterForm.controls.PARP_requisitos.value!,
          },
          PARequisitos_egreso: {
              PARE_start: masterForm.controls.PARE_start.value!,
              PARE_requisitos: masterForm.controls.PARE_requisitos.value!,
              PARE_obtencion_grado_start: masterForm.controls.PARE_obtencion_grado_start.value!,
              PARE_obtencion_grado_requisitos: masterForm.controls.PARE_obtencion_grado_requisitos.value!
          },
          PABecas: {
              PAB_start: masterForm.controls.PAB_start.value!,
              PAB_requisitos: masterForm.controls.PAB_requisitos.value!,
          },
          PADescargas: masterForm.controls.PADescargas.value!,

      },

      docentes: {
          NADocentes: masterForm.controls.NADocentes.value!,
          NARepositorio_tesis: masterForm.controls.NARepositorio_tesis.value!,
      }

      ,
      Estudiantes: {
          generacion: masterForm.controls.generacion.value!,
          Estudiante: masterForm.controls.Estudiantes.value!,
      },
      vinculacion: {
          VInformacion: masterForm.controls.Vinculacion_informacion.value!,
          VConvenios: masterForm.controls.Vinculacion_convenios.value!,
      },
      contacto: {
          CTelefonos: masterForm.controls.CTelefonos.value!,
          CRedes: masterForm.controls.CRedes.value!,
          CDireccion: masterForm.controls.CDirecciones.value!,
          CCorreo:  masterForm.controls.CCorreos.value!,
      },
      normas_estatutos: {
          NEInformacion:  masterForm.controls.NormasEstatutos.value!,


      }
    }
    return maestria




  }

  showDialog(title:any,icon:any){
    Swal.fire({
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2000
    })
  }


  //ASIGNAR VALORES DE LA MAESTRIA A EDITAR A LOS FORM CONTROL CORRESPONDIENTES DEL FORMULARIO
  asignMasterDataToForm(){
    this.setDataForm([this.master.nombre],'nombre',false)
    this.setDataForm([this.master.abreviatura],'abreviatura',false)
    this.setDataForm(this.master.general.GTramites,'GTramites',true)
    this.setDataForm(this.master.general.GFechas,'GDates',true)
    this.setDataForm([this.master.general.GObjetivoGeneral],'GGObjetives',false)
    this.setDataForm(this.master.general.GObjetivosEspecificos,'GObjetivosEspecificos',true)
    this.setDataForm(this.master.general.GMetas,'GMetas',true)


    this.setDataForm([this.master.general.GPerfil_ingreso.GPI_start],'GPI_start',false)
    this.setDataForm(this.master.general.GPerfil_ingreso.GPI_conocimientos_basicos,'GPI_conocimientos_basicos',true)
    this.setDataForm(this.master.general.GPerfil_ingreso.GPI_conocimientos_habilidades,'GPI_conocimientos_habilidades',true)
    this.setDataForm([this.master.general.GPerfil_egreso.GPE_start],'GPE_start',false)

    this.setDataForm(this.master.general.GPerfil_egreso.GPE_capacidades,'GPE_capacidades',true)
    this.setDataForm(this.master.general.GPerfil_egreso.GPE_competencias,'GPE_competencias',true)
    this.setDataForm(this.master.general.GPerfil_egreso.GPE_conocimientos,'GPE_conocimientos',true)
    this.setDataForm(this.master.general.GPerfil_egreso.GPE_habiliades,'GPE_habilidades',true)
    this.setDataForm(this.master.general.GPerfil_egreso.GPE_aptitudes,'GPE_aptitudes',true)

    this.setDataForm([this.master.general.GPlanesEstudio.GPES_objetivo_general],'GPES_objetivo_general',false)
    this.setDataForm([this.master.general.GPlanesEstudio.GPES_metas.GPES_mision],'GPES_metas_mision',false)
    this.setDataForm([this.master.general.GPlanesEstudio.GPES_metas.GPES_vision],'GPES_metas_vision',false)
    this.setDataForm([this.master.general.GPlanesEstudio.GPES_metas.GPES_star],'GPES_metas_start',false)
    this.setDataForm(this.master.general.GPlanesEstudio.GPES_objetivos_especificos,'GPES_objetivos_especificos',true)
    this.setDataForm(this.master.general.GPlanesEstudio.GPES_metas.GPES_metas,'GPES_metas',true)
    this.setDataForm(this.master.general.GPlanesEstudio.GPES_asignaturas_basicas.GPESAB_datos,'GPES_asignaturas_basicas',true)
    this.setDataForm(this.master.general.GPlanesEstudio.GPES_asignaturas_optativas.GPESAO_datos,'GPES_asignaturas_optativas',true)
    this.setDataForm(this.master.general.GPlanesEstudio.GPES_seminario_tesis,'GPES_seminario_tesis',true)
    this.setDataForm([this.master.general.GLGAC],'GLGAC',false)

    //this.setDataForm([this.master.general.GProceso_seleccion_aspirantes.GPSA_requisitos.GPSA_start],'GPSA_start',false)
    this.setDataForm(this.master.general.GProceso_seleccion_aspirantes.GPSA_requisitos,'GPSA_requisitos',true)
/*
    this.setDataForm([this.master.general.GCaracteristicas_tesis.GCT_start],'GCT_start',false)
    this.setDataForm(this.master.general.GCaracteristicas_tesis.GCT_requisitos,'GCT_requisitos',true)

    //PROCESO ADMINISTRATVIOS
    //Ingreso
    this.setDataForm([this.master.procesos_administrativos.PARequisitos_ingreso.PARI_start],'PARI_start',false)
    this.setDataForm(this.master.procesos_administrativos.PARequisitos_ingreso.PARI_requisitos,'PARI_requisitos',true)
    this.setDataForm([this.master.procesos_administrativos.PARequisitos_ingreso.PARI_documentacion_start],'PARI_documentacion_start',false)
    this.setDataForm(this.master.procesos_administrativos.PARequisitos_ingreso.PARI_documentos,'PARI_documentos',true)
    //Permancia
    this.setDataForm([this.master.procesos_administrativos.PARequisitos_permanencia.PARP_start],'PARP_start',false)
    this.setDataForm(this.master.procesos_administrativos.PARequisitos_permanencia.PARP_requisitos,'PARP_requisitos',true)
    //Egreso
    this.setDataForm([this.master.procesos_administrativos.PARequisitos_egreso.PARE_start],'PARE_start',false)
    this.setDataForm(this.master.procesos_administrativos.PARequisitos_egreso.PARE_requisitos,'PARE_requisitos',true)
    this.setDataForm([this.master.procesos_administrativos.PARequisitos_egreso.PARE_obtencion_grado_start],'PARE_obtencion_grado_start',false)
    this.setDataForm(this.master.procesos_administrativos.PARequisitos_egreso.PARE_obtencion_grado_requisitos,'PARE_obtencion_grado_requisitos',true)
    //Becas
    this.setDataForm([this.master.procesos_administrativos.PABecas.PAB_start],'PAB_start',false)
    this.setDataForm(this.master.procesos_administrativos.PABecas.PAB_requisitos,'PAB_requisitos',true)
    //Descargas
    this.setDataForm(this.master.procesos_administrativos.PADescargas,'PADescargas',true)
    //NUCLEO ACADEMICO
    //Docentes
    this.setDataForm(this.master.docentes.NADocentes,'NADocentes',true)
    //Repositorio de tesis
    this.setDataForm(this.master.docentes.NARepositorio_tesis,'NARepositorio_tesis',true)
    //ESTUDIANTES
    this.setDataForm(this.master.Estudiantes.Estudiante,'Estudiantes',true)
    //VINCULACION
    this.setDataForm(this.master.vinculacion.VConvenios,'Vinculacion_convenios',true)
    this.setDataForm([this.master.vinculacion.VInformacion],'Vinculacion_informacion',false)
    //CONTACTOS
    this.setDataForm(this.master.contacto.CCorreo,'CCorreos',true)
    this.setDataForm(this.master.contacto.CRedes,'CRedes',true)
    this.setDataForm(this.master.contacto.CTelefonos,'CTelefonos',true)
    this.setDataForm(this.master.contacto.CDireccion,'CDirecciones',true)
    //NORMAS Y ESTATUTOS
    this.setDataForm(this.master.normas_estatutos.NEInformacion,'NormasEstatutos',true)

*/









































  }

  setDataForm(values:any[],formArrayName?:string,isArray?:boolean){
    if (isArray) {
      let formArray = this.myForm.get(formArrayName!) as FormArray
      let keys = Object.keys(values[0])
      values.forEach(value => {

        let newFormGroup = this.fb.group({
        })

        keys.forEach((key:any) => {
          newFormGroup.addControl(key,this.fb.control(value[key]))
        })

        formArray.push(newFormGroup);

      })
    }else{
      console.log(values);

      this.myForm.get(formArrayName!)?.setValue(values[0])
    }

  }

}
