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
        <div className="border-5 border-gray-500 bg-white rounded-4xl p-5 mt-10">
            <form onSubmit={handleSubmit}>
                <p className="font-display text-4xl text-gray-700 pb-3">Quelle heure est-il ?</p>
                <div className="flex items-center gap-5">
                    <InputNumberControl value={responseHour} onChange={handleChangeHour} min="0" max="23" step="1" placeholder="Heure" />
                    <InputNumberControl value={responseMinute} onChange={handleChangeMinute} min="0" max="59" step="15" placeholder="Minute" />
                    <ButtonValidate onSubmit={handleSubmit}>Valider</ButtonValidate>
                </div>
            </form>
        </div>
    );
}

export default QuestionForm;