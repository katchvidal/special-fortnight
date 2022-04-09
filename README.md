#   Aprendiendo Angular 

    -   Instalar Angular CLI -> npm install -g @angular/cli
    -   Crear un nuevo Proyecto de Angular -> ng new "nombre del proyecto"
        Configuraciones basicas(favoritas del curso):
            * strict -> Yes
            * Angular Routing -> Yes ( or not if you want to create manually )
            * Angular Style ( css, sass, less, stylus ) ->  css ( the favorite of course is sass )
    -   Ningun archivo de la aplicacion de Angular va a ir a produccion ( podiamos creer por el gran tamaño ) pero no generaremos un bundle ( como React )
    -   Angular por defecto usa TypeScript como lenguaje de desarrollo 
    -   Comando inicial para levantar el servidor de desarrollo de Angular -> ng serve ( levanta la aplicacion -> Transpila el codigo con webpacket ) -o "levanta la aplicacion
        tan rapido como pueda ( open )"

##  Explicando cada uno de los archivos y sus directorios

    -   tslint.json -> ( deprecatted ) was a linter -> rule to programming with certain rules.
    -   tsconfig.spec.json -> tests in Angular / Unit Test
    -   tsconfi.json -> File config of typescript the funcionality of typescript in the project
    -   tsconfi.app.json -> File config of the project
    -   package.json -> Cant modify manually -> Add or delete things you may do with a command in cli -> dependecy and dev dependecy 
    -   package-lock.json -> 
    -   Angular.json -> file importan are the config of the app, eg. assets / styles / scripts 
    -   editorconfig -> rule for the typescript & markdown 
    -   node_modules -> contain a big quantity of modules, package what you need in your app in dev, not necessary in prod
    -   e2e  ( deprecatted ) ->
    -   src -> The most important folder:
        -   folder app -> app.component.html ( html ), app.component.css ( style file for the html ), app.component.spect.ts ( the unit test for angular ), 
            app.componnet.ts ( the space in your componnet to programming your loggic ), app.module.ts ( your modules contain your app in this level )
        -   assets -> resources static not necessary compile in your app
        -   enviroments -> enviroment in your app 
        -   fav icon
        -   index.html -> macro level the page contain the framework  Angular
        -   main.ts -> show the Angular the target angular
        -   polifillis.ts   -> current setup to the web browser
        -   styles.css      -> Global Stylish
        -   test.ts         -> config of test 


##  Talking about app.component.ts

decorator @component({
    selector : 'app-root' -> Componente selector en HTML ( index.html )
    template : ( Codigo HTML eg. <h1> Aqui podemos colocar etiquetas HTML </h1>) or -> Cuestion de Gustos cual es el que mas nos guste
    templateUrl : ( Aqui especificamos el directorio donde se encuentra el HTML) 
})


##  Propiedades de botones en Angular
    -   Evento Click del boton
        -   eg. (click)="contador = contador + 1 " -> Angular es inteligente para poder inferir que esperamos que dentro de esa expresion suceda una accion pero no es aconseja que mucha logica este de lado del template ( HTML )
        -   eg2.   //  Podemos crear un metodo para sumar ( type class en app.component.ts )
        math( value : number  ){
            this.contador += value ;
        }
        en html ((click)='math(-1)') or (click)="math( base )" (click)="math( -base )"

##  Crear un Componente de manera manual

A menos de que la aplicacion sea muy sencilla solo trabajaremos en el app component pero por lo general trabajaremos dentro de 1 o mas componentes extras, para usar y reutilizar los componente
dentro de otras instacias.

    - podemos crear un nuevo archivo -> contador(name).component(tipo).ts(lenguaje) 
    import {component} from '@angular/core'

    @component({
        selector : 'app-contador'
        template: `
            <codigo de html>
                <h2> Pagina Principal de App Component </h2>
                <h3> {{ title }} </h3>

                <span> Acumulador de 5 en 5 empezando en: <strong> {{ contador }} </strong> </span>
                <br/>
                <button (click)="math( base )" > Acumular + {{ base }} </button>
                <br/>
                <br/>
                <button (click)="math( -base )" > Sustraer - {{ base }} </button>
        `
    })
    -> export class ContadorComponent {
        public title : string = 'Contador App'; //  Podemos insertar una variable ( espacio de memoria en el HTML usando doble llave {{' nombre de la variable '}} )
        public base     : number = 5
        public contador : number = 0

        //  Podemos crear un metodo para sumar ( type class )
        math( value : number  ){
            this.contador += value ;
        }
    }

    -> Verificar que ese componente este disponible cdentro del modulo de la aplicacion "app.module.ts"
        @NgModule({
        declarations: [
            AppComponent,
            ContadorComponent // Nombre de la clase del componente
        ],
        imports: [
            BrowserModule
        ],
        providers: [],
        bootstrap: [AppComponent]
        })
        export class AppModule { }


##  Arbol de directorios

- Directorio Principal el SRC ->
    - app ( folder de aplicaciones )
        - Contador ( Todo lo que tenga que ver con codigo de la aplicacion de contador )

Angular no va redibujar los componentes si no es necesario, angular maneja
two way data bined


##  Creacion de componentes mediante CLI
    - ng g(generate) c(component) (path automatic src/app/*) heroes/listado
        CREATE src/app/heroes/listado/listado.component.html (22 bytes)
        CREATE src/app/heroes/listado/listado.component.spec.ts (633 bytes)
        CREATE src/app/heroes/listado/listado.component.ts (279 bytes)
        CREATE src/app/heroes/listado/listado.component.css (0 bytes)
        UPDATE src/app/app.module.ts (600 bytes)


##  Directivas  NgOninit



##  Configurar Tailwind para Angular

Install Tailwind CSS

Install tailwindcss via npm, and then run the init command to generate a tailwind.config.js file.
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init

##  Modulos
siempre es bueno empaquetar los modulos para entrar en la carga perezosa ( lazy loading ) -> Estructura del directorio
    -   Src
        - heroes
        - listado
        heroes.module.ts ( aqui van todos los componentes que trabajen en el modulo )
        eg.
            import { CommonModule } from "@angular/common";
            import { NgModule } from "@angular/core";
            import { HeroesComponent } from "./heroe/heroe.component";
            import { ListadoComponent } from "./listado/listado.component";

            @NgModule({
                declarations : [
                    //  Componentes que interactuan en este Modulo( podria
                    //  ser paqueteria de Bootstrap, Modulos que intereactuan.)
                    ListadoComponent,
                    HeroesComponent
                ],
                exports : [
                    //  Modulos que podemos exportar
                    ListadoComponent
                ],
                imports : [
                    CommonModule    //  Habilita las directivas Ngif, Ngfor, eventos Click ...
                ]
            })
            export class HeroesModule{}


##  Mandar informacion de componentes Padres a Hijos
    - Forms Module
        Trabajando con formularios evitando full refresh ( ya no es recomendable debido a que podemos extraer la data con JavaScript [ TypeScript ])
    -   Angular dispone de un Modulo para trabar con formularios y Formularios reactivos
        * FormsModule -> NgSumit
        ->  [value]="nuevo.lastname"
        ->  name="lastname"
        ->  [(ngModel)] = "nuevo.lastname"

    -   Modularizar componentes padres e hijos
    ( cortar todo un contenido / una especie de pequeñas funciones )
    pasarle informacion de componentes padres a hijos ->
    Enviar informacion al hijo (HTML) =>  [personajes]="personajes" pasar informacion de componente padre a componente hijo
    Recibir informacion ( hijo ) => @Input() personajes : IPersonaje[]  = []  //  Propiedad que se recibe de un componente




##  Servicios en Angular
Servicios en agunlar maneja muy eficiente de manera global informaciones
hace que no se maneje como en React un Redux
    -   Crear el Servicio de Manera Manual
    src-> app -> ( folder with module ) -> Services -> "Name Service".services.ts
    eg. 
        @injectable (@angular*core)
        export class NameServices {
            constructor(){
                console.log('servicio inicializado')
            }
        }

    2. dentro del modulo
        * providers : [
            'name_services'.services.ts
        ]
    
    3. Dentro de el componente en su constructor ->
        - constructor( private simpsonservice : SimpsonServices){}

    // Con los servicios es mas sencillo distrubuir la data dentro de los componentes
    pasandolo a quien lo necesite


##  Despliegues de un build de produccion en Netlify *Inicialmente*
*   Tener este codigo limpio
*   Codigo Ordenado
*   Debuggear el codigo ( componentes / modulos / servicios y paqueteria )
*   Controlar las versiones con Git y servicio de controlado de versiones en la nube ( Github )
*   Generar build de produccion ( bundle ( static (css, javascript)))
*comando*

-> ng build ( generame la version de produccion )
