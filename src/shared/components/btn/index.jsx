import { useNavigate } from "react-router";
import './style.css';

export function Btn({btnName,route,onClick,classNameBtn }) {
    const navigate = useNavigate();

    if(route){    return (
        <button className='btn' onClick={() => navigate(route)}>{btnName}</button>
    )}
return (
    <button className={classNameBtn} onClick={onClick}>{btnName}</button>
);

}
