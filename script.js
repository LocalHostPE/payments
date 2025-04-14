// --- Configuración ---
const AUTH_URL = 'https://votrox.vercel app/auth.html'; // URL de la página de autenticación
const SYSTEM_ID = '2yc2mNVsnt2v0OA6TWjaueem11PdcSqJ'; // Reemplaza con el System ID específico de la empresa
const ENTERPRISE_NAME = 'VxGroup-SolucionesTecnologicas'; // Reemplaza con el nombre de la empresa

function generarTokenUnico(length = 100) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

function construirURLAutenticacion(redirectURL, systemID, oneTimeToken, enterpriseName) {
    const encodedRedirectURL = encodeURIComponent(redirectURL);
    const encodedEnterpriseName = encodeURIComponent(enterpriseName);
    return `${AUTH_URL}?redirecturl=${encodedRedirectURL}&systemID=${systemID}&verify=${oneTimeToken}&enterprice=${encodedEnterpriseName}`;
}

// --- Generación del Token y Construcción de la URL ---
const redirectURL = 'https://tu_aplicacion.netlify.app/panel'; // URL a la que se redirigirá después del login
const oneTimeToken = generarTokenUnico(); // Genera un token de 100 caracteres
const urlDeAutenticacion = construirURLAutenticacion(redirectURL, SYSTEM_ID, oneTimeToken, ENTERPRISE_NAME);

console.log('URL de Autenticación Generada:');
console.log(urlDeAutenticacion);

// --- Opcional: Redireccionar automáticamente al usuario ---
// window.location.href = urlDeAutenticacion;
