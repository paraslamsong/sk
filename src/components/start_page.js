
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function StartPage() {

    const [wishBoxStyle, setStyle] = useState("glass animate__animated animate__zoomIn animate__faster");
    const history = useNavigate();
    return (
        <div id="wish_box" className={wishBoxStyle}>
            <div className='glass-padding'>
                <div className="wish_text animate__animated  animate__fadeInUp animate__bounceOutUp animate__delay-1s animate__faster">
                    <span style={{ color: "#FF0000" }}>M</span>
                    <span style={{ color: "#FF7F00" }}>a</span>
                    <span style={{ color: "#FFFF00" }}>k</span>
                    <span style={{ color: "#00FF00" }}>e</span>
                    <span style={{ color: "#FF0000" }}> </span>
                    <span style={{ color: "#0000FF" }}>a</span>
                    <span style={{ color: "#FF0000" }}> </span>
                    <span style={{ color: "#4B0082" }}>W</span>
                    <span style={{ color: "#9400D3" }}>i</span>
                    <span style={{ color: "#00FF00" }}>s</span>
                    <span style={{ color: "#FFFF00" }}>h</span>
                    <span style={{ color: "#FF0000" }}>!</span>
                </div>
                <div className="number_text animate__animated animate__jackInTheBox ">
                    25
                </div>
                <button
                    class="btn btn-warning align-middle start_button animate__animated animate__zoomIn animate__delay-2s btn-round"
                    onClick={() => {
                        setStyle("glass animate__animated animate__zoomOutUp animate__faster");
                        setTimeout(function () {
                            history('/wish')
                        }, 200);
                    }} >
                    Go!
                </button>
            </div>
        </div>
    );
}