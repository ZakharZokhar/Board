import axios from 'axios';
import authHeader from "./auth-header";

export const deleteUsers = (id) => {
const apiUrl = `http://173.212.214.70:3004/users/delete/${id}`;
axios.delete(apiUrl, authHeader()).then((resp) => {
    alert('Пользователь удалён!')
    window.location.reload();
})
};
