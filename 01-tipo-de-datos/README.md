### Tipos de datos - MODULO 1

# Un dato es la modelizacion de algo que existe en la vida real, pueden ser cosas concretas hasta cosas no materiales.

# En javascript existen los tipos de datos primitivos y no primitivos:

## Tipos de datos primitivos

# - Son inmutables

# - Al asignarlos a una variable se crea una copia

# NUMBER: almacena valores numericos; enteros y puntos flotantes (float)

# STRING: son cadenas de texto que pueden almacenar caracteres alfanumericos desde letras hasta numeros y simbolos especiales.

# BOOLEAN: representan la validez de una condicion a traves de dos valores: Verdadero (true) o falso (false).

# UNDEFINED: representa la ausencia de valor en una variable, con la distincion de que quiere decir que si una variable no ha sigo asignada AUN, es undefined.

# NULL: es la ausencia de valor en una variable.

# SYMBOL: es un identificador unico, garantiza propiedades no duplicables y es inmutable.

# BIGINT: representan aquellos valores numericos que el tipo de datos number no puede representar.

# - se utiliza "n" al ginal para indicar que un numero es propio de este tipo de dato

# let numeroGrande = 93482842894823489328438972437943827894327423989342879342879n;

## TIPOS DE DATOS NO PRIMITIVOS:

# OBJETOS (Object): son una coleccion de propiedades representadas a traves de una relacion de clave y valor.

# let miObjeto = {

# key1 : value1,

# key2 : value2,

# key3 : velue3

# }

# ARREGLOS (Array): son una lista de elementos que pueden contener tipos de datos mixtos.

# let miArreglo = [true, "hola", 4, 3.43, 19432320842809348994009342n]

# FUNCIONES (function): las funciones representan un bloque de codigo la cual tiene el objetivo de cumplir una determinada tarea, tienen un scope propio.

# function saludar() { console.log("hola"); }

# MANEJO DE MEMORIA: reasignar el valor de un dato primitivo implica cambiar el espacio de memoria, pero sin embargo, cambiar el de uno no primitivo, va a dar como resultado cambiar el espacio compartido de memoria de la estructura completa.

# INTENCION DE AUSENCIA: Undefined representa que una variable no ha sido definida todavia, null, que una variable carece de valor.

# TIPADO DINAMICO: es propio de javascript que sus variables puedan ser reasignadas a un nuevo tipo de dato a lo largo del programa.
