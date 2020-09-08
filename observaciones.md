### Comentarios Generales

Ceci, quiero dejarte mis felicitaciones por tu hermoso portfolio. Me encanta como quedó. Los colores, los efectos en el hover, las sombras, la tipografía, todo es muy original y muy hermoso. Me encanta ver como cumpliste las consignas y el diseño propuesto, y a la vez le diste tu propia personalidad para que la web te refleje. 

Tu responsive funciona muy bien, y salvo algunos problemas en la resolucion mas baja (320px suele ser la medida de los celulares más pequeños) no logro encontrar ningún problema. Se nota que lo hiciste con mucho cuidado. En esa resolucion, por lo que veo, el problema es el texto de .boton-proyectos es muy grande, por lo que fuerza un scroll horizontal (por eso se ve una barra blanca al costado). Ademas, el padding de .tercer-seccion es tan grande que vuelve dificultoso leer el texto. Yo lo reduciria. Salvo eso, que son realmnte detalles, todo esta perfecto en el responsive.  

Tu repositorio de github está muy prolijo, la estructura de carpetas es correcta, tenés un README completo y amigable, y muchos commits con mensajes adecuados. Felicitaciones!

Dejo algunos comentarios generales sobre tu trabajo: 

- Tengo que comentar y felicitarte por la prolijidad del código HTML. El CSS está bastante más desprolijo, y por momentos se dificulta su lectura. La manera habitual de escribir css es: 

```
.nombre-clase {
  estilo: 20px;
  estilo-siguiente: 20px;
}
```

En tu css son habituales cosas como esta:

```
.nombre{
    display: flex;
    margin-bottom:20px;
    

}
```

Que si bien no afectan tu código, sí afectan la legibilidad y prolijidad del mismo. Tomá en cuenta que podés bajarte linters a VSCode para formatear el CSS con un clic: "CSS Formatter" es el que yo uso y recomiendo, pero hay muchísimos.

- Tenes algunos detalles en los hover que empeoran la experiencia de usuario. En general lo que ocurre es que las cosas crecen en el hover, pero lo hacen "corriendo" a los demás elementos. Ocurre en "contacto" en la barra de navegación, en el boton "lo que hago", en el boton "todos" de mis proyectos y en los links del footer. Esto se arregla dandoles mas tamaño a los elementos cuando no estan en hover, de manera que cuando se pasa el mouse tienen espacio para agrandarse sin mover a los demas. Si necesitas ayuda con esto no dejes de escribirme. 

- Tus nombres de clases no son descriptivos. "Contenedor-img" o "contenedor-img-proyectos" no dicen realmente qué elemento son, ya que son propiamente tarjetas de producto. "tarjeta-proyectos" seria mucho mejor en ese sentido. A veces son un poco breves de mas - "parrafo" es descriptivo de su funcion, pero parrafo de qué? En general, queremos que nuestro HTML pueda leerse y entenderse aun sin ver la pagina - que el nombre de la clase nos diga qué es el elemento al que está asociado. 

- Hay veces en que no usas las etiquetas semánticas correspondientes. Tenés muchos div que deberian ser o section, o article. Te los fui comentando a lo largo del HTML. Tambien muchos divs innecesarios. 

Dejo algunos comentarios específicos a lo largo de tu código. 

Ya me conocés corrigiendo, y sabés como soy: necesito comentarlo todo. La idea, como siempre, es que puedas usar esos comentarios para que tu trabajo quede lo mejor posible. Pero vuelvo a repetirlo: tu trabajo, asi como está, es excelente. 


### Nota final: 9

Nota desagregada: 
✅ Estructura correcta de documento HTML.
✅ Respeta la consigna
✅ Respeta el diseño dado 
✔️ Responsive funciona correctamente --> con observaciones 
✔️ Código bien indentado. --> con observaciones
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases 
✔️ Reutilización de estilos ---> con observaciones
✔️ Código CSS ordenado ---> con observaciones
✅ Commits con mensajes adecuados.
