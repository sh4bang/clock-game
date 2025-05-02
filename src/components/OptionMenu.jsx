import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext'

const OptionMenu = ({mode, onChangeMode, onChangeDifficulty}) => {
    const {difficulty} = useContext(GameContext);

    return (
        <aside className="w-64 bg-white p-4 shadow">
          <h2 className="font-semibold mb-2">Options de jeu</h2>
          <div className="space-y-2">
            <p className="font-bold text-blue-700">Mode de jeu :</p>
            <select value={mode} onChange={onChangeMode} className="w-full border rounded p-1">
              <option value="live">Heure courante</option>
              <option value="read-time">Lire l'heure</option>
            </select>
            <p className="font-bold text-blue-700">Difficulté :</p>
            <select value={difficulty} onChange={onChangeDifficulty} className="w-full border rounded p-1">
              <option value="beginner">Débutant</option>
              <option value="normal">Moyen</option>
              <option value="expert">Expert</option>
            </select>
            <p className="font-bold text-blue-700">Format :</p>
            <select className="w-full border rounded p-1">
              <option>Format 12h</option>
              <option>Format 24h</option>
            </select>
          </div>
        </aside>
    )
}

export default OptionMenu;