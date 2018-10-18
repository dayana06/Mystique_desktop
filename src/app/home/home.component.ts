import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { UsuariosService } from '../provider/usuarios/usuarios.service';
import { RolesService } from '../provider/roles/roles.service';
import { RolFuncionService } from '../provider/rol-funcion/rol-funcion.service';

interface Lista {
  type: string;
  link?: string;
  label: string;
  icon: boolean;
  iconName?: string;
  group?: Lista[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /*/////////////////================////////////////////
  ///////////////////================//////////////////*/
  id_del_usuario:number;//recibe el id del usuario del localStorage
  rol_del_usuario:any;//para alamacenar el rol del usuario
  funcionesDelRol:any;//almacena las funciones del rol del usuario actual
  rol_actual:{id:number;nombre:string;estatus:string;fecha_creacion:Date};//todos los datos del rol actual
  tipo_dashboard="";//almacena la direccion del dashboard
  //para controlar la visualizacion del menu
  menu:{I:boolean;II:boolean;III:boolean;IV:boolean;V:boolean;VI:boolean;VII:boolean;VIII:boolean;IX:boolean;
    X:boolean;XI:boolean;XII:boolean;XIII:boolean;XIV:boolean;XV:boolean;XVI:boolean;XVII:boolean;XVIII:boolean;
    XIX:boolean;XX:boolean;XXI:boolean;XXII:boolean;XXIII:boolean;XXIV:boolean;XXV:boolean;XXVI:boolean;XXVII:boolean};
  /*/////////////////================////////////////////
  ///////////////////================//////////////////*/


  constructor(private route: ActivatedRoute, private router: Router,
    /*====*/public service_user: UsuariosService,
    public service_rol: RolesService,
    public service_rol_funcion: RolFuncionService/*====*/) {

    router.events.filter(event => event instanceof NavigationStart)
        .map(url => url['url'])
        .subscribe(v => {
           this.showInterfaz = (v === '/' || v === '' ) ? false : true;
        });
  }

  ngOnInit() {
      /*/////////////////================////////////////////
      ///////////////////================//////////////////*/
      this.listas=[];
      this.tipo_dashboard="";
      this.id_del_usuario=parseInt(localStorage.getItem('id_user'));
      this.rol_del_usuario=null;
      this.funcionesDelRol=null;
      this.rol_actual={id:null,nombre:"",estatus:"",fecha_creacion:new Date()};
      this.menu={I:false,II:false,III:false,IV:false,V:false,VI:false,VII:false,VIII:false,IX:false,
        X:false,XI:false,XII:false,XIII:false,XIV:false,XV:false,XVI:false,XVII:false,XVIII:false,
        XIX:false,XX:false,XXI:false,XXII:false,XXIII:false,XXIV:false,XXV:false,XXVI:false,XXVII:false};
      if(this.id_del_usuario>0){
        this.obtenerUseryRolDelUsuarioLogueado();}
      /*/////////////////================////////////////////
      ///////////////////================//////////////////*/
  }

  
  showInterfaz = true;
  width = '255px';
  listas: Lista[] = [];
  
  
  /*/////////////////================////////////////////
  ///////////////////================//////////////////*/
  obtenerUseryRolDelUsuarioLogueado(){
    this.service_user.getUsuario(this.id_del_usuario).subscribe(data=>{
      this.rol_del_usuario=data['data'].id_rol;//se obtiene el rol del usuario
      this.service_rol.getRol(this.rol_del_usuario).subscribe(data2=>{
        this.rol_actual=data2['data'];//se obtienen los datos del rol actual
        //se instancia el dashboard
        this.tipo_dashboard=((this.rol_actual.nombre.toLowerCase()=='administrador' || this.rol_actual.nombre.toLowerCase()=='admin' || this.rol_actual.nombre.toLowerCase()=='gerente' || this.rol_actual.nombre.toLowerCase()=='superusuario' || this.rol_actual.nombre.toLowerCase()=='superuser' || this.rol_actual.nombre.toLowerCase()=='ceo')?"dashboard":"dashboardEmpleado");
        let estainiciandosesion=localStorage.getItem('esta_en_inicio_de_sesion');
        if (estainiciandosesion=='si') {
          localStorage.setItem('esta_en_inicio_de_sesion','no');
          this.router.navigate([this.tipo_dashboard]);//redirecciona al dashboard actual
        }
        this.service_rol_funcion.getRolFuncion().subscribe(data3=>{
          //filtra por las funciones del rol actual
        this.funcionesDelRol=data3['data'].filter((el, i, arr)=>(el.id_rol == this.rol_del_usuario));
        this.llenarMenu();          
        },error=>{console.log(error);});
      },error=>{console.log(error);});
    },error=>{
      console.log(error);
    });
  }

  llenarMenu(){//metodo que dice cuales opciones del menu estan activas
    let termino:boolean;
    this.funcionesDelRol.forEach(rolF => {
      if(rolF.id_funcion==1){this.menu.I=true;}else if(rolF.id_funcion==2){this.menu.II=true;}
      else if(rolF.id_funcion==3){this.menu.III=true;}else if(rolF.id_funcion==4){this.menu.IV=true;}
      else if(rolF.id_funcion==5){this.menu.V=true;}else if(rolF.id_funcion==6){this.menu.VI=true;}
      else if(rolF.id_funcion==7){this.menu.VII=true;}else if(rolF.id_funcion==8){this.menu.VIII=true;}
      else if(rolF.id_funcion==9){this.menu.IX=true;}else if(rolF.id_funcion==10){this.menu.X=true;}
      else if(rolF.id_funcion==11){this.menu.XI=true;}else if(rolF.id_funcion==12){this.menu.XII=true;}
      else if(rolF.id_funcion==13){this.menu.XIII=true;}else if(rolF.id_funcion==14){this.menu.XIV=true;}
      else if(rolF.id_funcion==15){this.menu.XV=true;}else if(rolF.id_funcion==16){this.menu.XVI=true;}
      else if(rolF.id_funcion==17){this.menu.XVII=true;}else if(rolF.id_funcion==18){this.menu.XVIII=true;}
      else if(rolF.id_funcion==19){this.menu.XIX=true;}else if(rolF.id_funcion==20){this.menu.XX=true;}
      else if(rolF.id_funcion==21){this.menu.XXI=true;}else if(rolF.id_funcion==22){this.menu.XXII=true;}
      else if(rolF.id_funcion==23){this.menu.XXIII=true;}else if(rolF.id_funcion==24){this.menu.XXIV=true;}
      else if(rolF.id_funcion==25){this.menu.XXV=true;}else if(rolF.id_funcion==26){this.menu.XXVI=true;}
      else if(rolF.id_funcion==27){this.menu.XXVII=true;}else{termino==true;}
    });
    this.mostrarMenu();
  }


  mostrarMenu(){//metodo que llena el menu de acuerdo a las funciones que esten activas
    if(this.menu.I){
      this.listas.push({
        type: 'alone',
        link: '/'+this.tipo_dashboard,
        label: 'Inicio',
        icon: true,
        iconName: 'home',
      });
    }
    if(this.menu.II){
      this.listas.push({
        type: 'group',
        label: 'Tablas básicas',
        icon: true,
        iconName: 'dns',
        link: '/lista',
        group: []
      });
    }
          if(this.menu.III){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Tablas básicas');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/empresaEditar',
              label: 'Negocio',
              icon: false,
              iconName: 'add_shopping_cart',
            });
          }
          if(this.menu.IV){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Tablas básicas');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/categorias',
              label: 'Categorías',
              icon: false
            });
          }
          if(this.menu.V){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Tablas básicas');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/parametros',
              label: 'Parámetros',
              icon: false
            });
          }
    if(this.menu.VI){
      this.listas.push({
        type: 'group',
        link: '/list3',
        label: 'Administración',
        icon: true,
        iconName: 'settings',
        group: []
      });
    }
          if(this.menu.VII){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Administración');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/sistema',
              label: 'Sistema',
              icon: false,
            });
          }
          if(this.menu.VIII){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Administración');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/seguridadfuncional',
              label: 'Seguridad funcional',
              icon: false,
            });
          }
          if(this.menu.IX){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Administración');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/basedatos',
              label: 'Base de datos',
              icon: false,
            });
          }
    if(this.menu.X){
      this.listas.push({
        type: 'group',
        label: 'Portal Web',
        icon: true,
        iconName: 'web_asset',
        link: '/lista',
        group: []
      });
    }
          if(this.menu.XI){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Portal Web');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/landing',
              label: 'Inicio del portal',
              icon: false,
            });
          }
          if(this.menu.XII){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Portal Web');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/galeria',
              label: 'Galería',
              icon: false,
            });
          }
          if(this.menu.XIII){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Portal Web');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/empresa',
              label: 'Empresa',
              icon: false,
            });
          }
          if(this.menu.XIV){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Portal Web');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/suscripción',
              label: 'Suscripción',
              icon: false,
            });
          }
    if(this.menu.XV){
      this.listas.push({
        type: 'group',
        label: 'Marketing',
        icon: true,
        iconName: 'business_center',
        link: '/lista',
        group: []
      });
    }
          if(this.menu.XVI){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Marketing');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/servicios',
              label: 'Servicios',
              icon: false,
            });
          }
          if(this.menu.XVII){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Marketing');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/promociones',
              label: 'Promociones',
              icon: false,
            });
          }
          if(this.menu.XVIII){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Marketing');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/consejos',
              label: 'Consejos',
              icon: false,
            });
          }
    if(this.menu.XIX){
      this.listas.push({
        type: 'alone',
        label: 'Clientes',
        icon: true,
        iconName: 'group',
        link: '/clientes',
      });
    }
    if(this.menu.XX){
      this.listas.push({
        type: 'group',
        label: 'Órdenes de Servicios',
        icon: true,
        iconName: 'date_range',
        link: '/lista',
        group: []
      });
    }
          if(this.menu.XXI){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Órdenes de Servicios');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/solicitudes',
              label: 'Solicitudes',
              icon: false,
            });
          }
          if(this.menu.XXII){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Órdenes de Servicios');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/citas',
              label: 'Citas',
              icon: false,
            });
          }
          if(this.menu.XXIII){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Órdenes de Servicios');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/reclamosOrdenes',
              label: 'Reclamos',
              icon: false,
            });
          }
    if(this.menu.XXIV){
      this.listas.push({
        type: 'alone',
        label: 'Atención al cliente',
        icon: true,
        iconName: 'call',
        link: '/atencionCliente',
      });
    }
    if(this.menu.XXV){
      this.listas.push({
        type: 'group',
        label: 'Reportes',
        icon: true,
        iconName: 'assessment',
        link: '/lista',
        group: []
      });
    }
          if(this.menu.XXVI){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Reportes');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/reportesEstructurados',
              label: 'Estructurados',
              icon: false,
            });
          }
          if(this.menu.XXVII){
            let indice=this.listas.map(function(e) { return e.label; }).indexOf('Reportes');
            this.listas[indice].group.push({
              type: 'alone',
              link: '/reportesEstadísticos',
              label: 'Estadísticos',
              icon: false,
            });
          }
  }
  /*/////////////////================////////////////////
  ///////////////////================//////////////////*/
  

}
