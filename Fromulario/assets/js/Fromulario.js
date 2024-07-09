document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const form = document.getElementById('property-form');
    console.log('Form element:', form);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');

        if (validateForm()) {
            console.log('Form validation passed');
            sendEmail();
        } else {
            console.log('Form validation failed');
            alert('Por favor, completa todos los campos requeridos correctamente.');
        }
    });

    function validateForm() {
        let isValid = true;
        // Agrega más campos según necesites
        ['tipo-propiedad', 'ubicacion', 'direccion', 'descripcion', 'precio-venta', 'precio-alquiler', 'nombre-vendedor', 'celular-vendedor', 'correo-vendedor'].forEach(fieldId => {
            const value = document.getElementById(fieldId).value;
            if (!value) {
                console.log('Invalid or empty field:', fieldId);
                isValid = false;
            }
        });

        const terminos = document.querySelector('input[name="terminos"]').checked;
        if (!terminos) {
            console.log('Terms not accepted');
            isValid = false;
        }

        console.log('Validation result:', isValid);
        return isValid;
    }

    function sendEmail() {
        const serviceID = 'service_bmba2dk'; 
        const templateID = 'template_1nthfq7';

        const templateParams = {
            to_name: 'Raíces Nicas Team',
            from_name: document.getElementById('nombre-vendedor').value,
            tipo_propiedad: document.getElementById('tipo-propiedad').value,
            ubicacion: document.getElementById('ubicacion').value,
            direccion: document.getElementById('direccion').value,
            descripcion: document.getElementById('descripcion').value,
            precio_venta: document.getElementById('precio-venta').value,
            precio_alquiler: document.getElementById('precio-alquiler').value,
            area_terreno: document.getElementById('area-terreno').value,
            area_construccion: document.getElementById('area-construccion').value,
            nombre_vendedor: document.getElementById('nombre-vendedor').value,
            celular_vendedor: document.getElementById('celular-vendedor').value,
            correo_vendedor: document.getElementById('correo-vendedor').value,
            solicitar_rotulo: document.getElementById('rotulo').checked ? 'Sí' : 'No'
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Formulario enviado exitosamente.');
                form.reset(); // Reiniciar el formulario después de enviar.
            }, function(error) {
                console.log('FAILED...', error);
                alert('Error al enviar el formulario: ' + error.text);
            });
    }
});
