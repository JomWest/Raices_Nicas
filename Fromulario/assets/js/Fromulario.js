document.addEventListener('DOMContentLoaded', function() {
    // Aplicar máscaras de entrada usando IMask
    var numberMaskOptions = {
      mask: Number,
      scale: 2,
      signed: false,
      thousandsSeparator: ',',
      padFractionalZeros: false,
      normalizeZeros: true,
      radix: '.',
      mapToRadix: ['.']
    };
  
    var precioVenta = document.getElementById('precio-venta');
    var precioAlquiler = document.getElementById('precio-alquiler');
    var areaTerreno = document.getElementById('area-terreno');
    var areaConstruccion = document.getElementById('area-construccion');
    var celularVendedor = document.getElementById('celular-vendedor');
  
    IMask(precioVenta, numberMaskOptions);
    IMask(precioAlquiler, numberMaskOptions);
    IMask(areaTerreno, numberMaskOptions);
    IMask(areaConstruccion, numberMaskOptions);
  
    IMask(celularVendedor, {
      mask: '(505) 0000-0000'
    });
  });
  