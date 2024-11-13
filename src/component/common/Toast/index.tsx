import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css'
import Logo from "../Logo";

interface ToastNotificationProps {
    message:string;
}

const ToastNotification = ({message}: ToastNotificationProps) => {
    const notify = () => toast(message);

    return (
        <div>
            <button onClick={notify}>Show Toast</button>
            <ToastContainer icon={<Logo variant={'light'}/>}/>
        </div>
    );
};

export default ToastNotification;
