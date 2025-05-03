const InputNumberControl = ({ value, onChange, min, max, step, placeholder }) => {
    const handleIncrement = () => {
        if (isNaN(value)) {
            onChange(min);
            return
        }

        if (value < min) {
            onChange(min);
        } else if (value < max) {
            let newValue = Math.min(Number(value) + Number(step), max);
            if (newValue % step !== 0) {
                newValue = Math.floor(Number(newValue) / Number(step)) * Number(step);
            }
            onChange(newValue);
        } else {
            let newValue = max;
            if (newValue % step !== 0) {
                newValue = Math.floor(Number(newValue) / Number(step)) * Number(step);
            }
            onChange(newValue);
        }

        if (value % step !== 0) {
            onChange(Math.floor(Number(value) / Number(step)) * Number(step));
        }
    };

    const handleDecrement = () => {
        if (isNaN(value)) {
            onChange(max);
            return
        }

        if (value > max) {
            onChange(max);
        } else if (value > min) {
            onChange(Math.max(Number(value) - Number(step), min));
        } else if (value <= min){
            onChange(min);
        }
    };

    return (
        <div className="flex items-center max-w-[9rem]">
            <button
                type="button"
                onClick={handleDecrement}
                className="text-3xl after:content-['\002D'] px-3 pb-1 h-11 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 hover:border-gray-300 hover:cursor-pointer"
                tabIndex="-1"
            />
            <input
                type="text"
                value={value}
                className="font-bold text-l border-y-1 bg-gray-50 border-gray-300 h-11 text-center text-gray-900 focus:ring-blue-500 focus:border-4 focus:outline-blue-500 focus:border-blue-500 block w-full py-2.5"
                onChange={(e) => onChange(Number(e.target.value))}
                min={min}
                max={max}
                required="required"
                placeholder={placeholder}
                tabIndex="1"
            />
            <button
                type="button"
                onClick={handleIncrement}
                className="text-3xl after:content-['\002B'] px-2 pb-1 h-11 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 hover:border-gray-300 hover:cursor-pointer"
                tabIndex="-1"
            />
        </div>
    );
}
export default InputNumberControl;