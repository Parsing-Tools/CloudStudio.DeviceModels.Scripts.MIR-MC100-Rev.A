function getConfiguration(config) {
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.

  // En este caso, no se necesita configurar nada a nivel general.
}

function getEndpoints(deviceAddress, endpoints) {
  // Esta función permite indicar la configuración inicial de los endpoints
  // cuando se crea un dispositivo de este modelo.

  var e = endpoints.addEndpoint("1", "Batería", endpointType.genericSensor);
  e.variableTypeId = 1401;

  var e = endpoints.addEndpoint("2", "Estado de apertura/cierre (Sin uso)", endpointType.genericSensor);
  e.variableTypeId = 1409;

  var e = endpoints.addEndpoint("3", "Apertura/Cierre", endpointType.genericSensor);
  e.variableTypeId = 1409;
}

function validateDeviceAddress(address, result) {
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.

  // En este caso, no se necesita validar la dirección.
}

function updateDeviceUIRules(device, rules) {
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En este caso, no se necesita configurar nada a nivel de interfaz de usuario.
}

function updateEndpointUIRules(endpoint, rules) {
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En este caso, no se necesita configurar nada a nivel de interfaz de usuario.
}