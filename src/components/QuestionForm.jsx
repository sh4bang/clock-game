import { useState } from "react";
import InputNumberControl from "./ui/InputNumberControl";
import ButtonValidate from './ui/ButtonValidate'

const QuestionForm = ({ onSubmit }) => {
    const [responseHour, setResponseHour] = useState('');
    const [responseMinute, setResponseMinute] = useState('');

    const handleChangeHour = (hour) => {
        setResponseHour(hour);
    };

    const handleChangeMinute = (minute) => {
        setResponseMinute(minute);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(responseHour, responseMinute);
        setResponseHour('');
        setResponseMinute('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="text-center font-display text-4xl text-cyan-900 pt-10 pb-3">Quelle heure est-il ?</p>
            <div className="flex items-center gap-5">
                <InputNumberControl value={responseHour} onChange={handleChangeHour} min="1" max="24" step="1" placeholder="Heure" />
                <InputNumberControl value={responseMinute} onChange={handleChangeMinute} min="0" max="59" step="15" placeholder="Minute" />
                <ButtonValidate onSubmit={handleSubmit}>Valider</ButtonValidate>
            </div>
        </form>
    );
}

export default QuestionForm;