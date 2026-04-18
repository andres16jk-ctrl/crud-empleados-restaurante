Contexto del sistema
El presente proyecto consiste en el desarrollo de un sistema de gestión de empleados para una cadena de restaurantes, mediante la implementación de una aplicación web basada en un CRUD (Create, Read, Update, Delete).
El objetivo principal del sistema es facilitar la administración del personal que trabaja en las diferentes áreas operativas del restaurante, permitiendo registrar, consultar, actualizar y eliminar información relacionada con los empleados.
________________________________________
Estructura de la empresa
La cadena de restaurantes "Sabor Urbano" está organizada en diversas áreas funcionales que permiten su correcto funcionamiento. Estas áreas son:
•	Cocina 
•	Caja 
•	Atención al cliente 
•	Administración 
•	Limpieza 
•	Domicilios 
Cada empleado pertenece a una de estas áreas, lo cual permite distribuir las responsabilidades y optimizar la operación dentro de cada sucursal.
________________________________________
Gestión de empleados
El sistema permite gestionar la información básica de cada empleado, incluyendo los siguientes datos:
•	Nombre del empleado 
•	Área o departamento 
•	Salario 
•	Fecha de inicio de contrato 
•	Fecha de finalización de contrato 
Esta información es fundamental para llevar un control adecuado del personal y su vinculación laboral.
________________________________________
Lógica del sistema
El sistema implementa las operaciones básicas de un CRUD, permitiendo:
•	Registrar nuevos empleados 
•	Visualizar la lista de empleados registrados 
•	Actualizar la información de empleados existentes 
•	Eliminar empleados del sistema 
Adicionalmente, la aplicación cuenta con persistencia de datos mediante el uso de localStorage, lo cual permite conservar la información incluso después de recargar la página.
________________________________________
Particularidades del negocio
En el contexto de una cadena de restaurantes, la gestión de empleados presenta ciertas características específicas:
•	Los empleados se encuentran distribuidos en diferentes áreas operativas 
•	Existen contratos temporales o por temporadas 
•	Es necesario controlar las fechas de inicio y finalización de contrato 
•	La rotación de personal puede ser frecuente 
Por esta razón, el sistema permite identificar de manera visual los empleados cuyos contratos han finalizado, facilitando la toma de decisiones administrativas.
________________________________________
Tecnologías utilizadas
Para el desarrollo del sistema se utilizaron las siguientes tecnologías:
•	Vite como herramienta de desarrollo 
•	React para la construcción de la interfaz de usuario 
•	TypeScript para el tipado estático de los datos 
•	localStorage para la persistencia de la información 
________________________________________
Funcionalidades adicionales
Además de las funcionalidades básicas del CRUD, se implementaron mejoras que optimizan la experiencia de usuario:
•	Validaciones en el formulario para evitar datos incorrectos 
•	Búsqueda en tiempo real por nombre o área 
•	Filtro por área para segmentar la información 
•	Resaltado visual de empleados con contratos vencidos 
•	Opción para eliminar todos los registros 
Estas funcionalidades permiten un manejo más eficiente y organizado de la información.

