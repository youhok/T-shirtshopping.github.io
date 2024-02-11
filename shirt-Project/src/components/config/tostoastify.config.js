import { toast } from 'vue3-toastify'
import "vue3-toastify/dist/index.css";
export const ToasityConfig = {
    autoClose: 3000,
    transition: toast.TRANSITIONS.ZOOM,
    position: toast.POSITION.BOTTOM_RIGHT,
    clearOnUrlChange: false
}