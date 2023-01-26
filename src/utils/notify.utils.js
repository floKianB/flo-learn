import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notify = (type, message) => {
    switch(type){
        case 'success':
            return toast.success(message, {
                    position: toast.POSITION.TOP_RIGHT,
                    marginTop: '140px',
            });
        case 'error':
            return toast.error(message, {
                position: toast.POSITION.TOP_RIGHT
            });
    }
}