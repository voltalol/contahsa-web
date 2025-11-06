// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "firebase/auth";

// --- VARIABLES GLOBALES REQUERIDAS DEL ENTORNO ---
// 1. Configuración de Firebase
const firebaseConfig = typeof __firebase_config !== 'undefined' 
    ? JSON.parse(__firebase_config) 
    : {}; // Fallback por si la variable no existe

// 2. ID de la Aplicación (necesario para la ruta de la colección)
export const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// 3. Token de autenticación inicial
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
// ====================================================

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios que vas a usar
export const db = getFirestore(app);
export const auth = getAuth(app);

// Variable para rastrear el estado de autenticación
let isAuthReady = false;

// === Lógica de Autenticación para el Entorno Canvas (CRUCIAL) ===
const initializeAuth = async () => {
    try {
        if (initialAuthToken) {
            // Usa el token personalizado si está disponible (para el dueño/editor de la app)
            await signInWithCustomToken(auth, initialAuthToken);
            console.log("Firebase: Autenticación con token personalizado exitosa.");
        } else {
            // Si no hay token personalizado, usa el inicio de sesión anónimo (para visitantes)
            await signInAnonymously(auth);
            console.log("Firebase: Autenticación anónima exitosa.");
        }
    } catch (error) {
        console.error("Error en la inicialización de la autenticación de Firebase:", error);
    } finally {
        isAuthReady = true;
    }
};

initializeAuth();

// Escucha los cambios de estado de autenticación (opcional, pero buena práctica)
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Usuario autenticado. UID:", user.uid);
    } else {
        console.log("Usuario no autenticado.");
    }
});

// Exporta el estado de autenticación (aunque el componente lo verificará internamente)
export const getIsAuthReady = () => isAuthReady;

// Exporta la app y los servicios
export default app;