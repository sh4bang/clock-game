import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext'

const OptionMenu = ({mode, onChangeMode, onChangeDifficulty}) => {
    const {difficulty} = useContext(GameContext);

    return (
        <aside className="w-64 bg-white p-4 inset-shadow-sm inset-shadow-gray-200">
          <h2 className="text-gray-900 font-bold text-center text-xl pt-2 pb-8">Options de jeu</h2>
          
          <div className="space-y-2">

            <label htmlFor="game-mode" className="block text-sm font-medium text-gray-900">Mode de jeu</label>
            <select id="game-mode" value={mode} onChange={onChangeMode} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="live">Heure courante</option>
              <option value="read-time">Lire l'heure</option>
            </select>

            <label htmlFor="game-difficulty" className="block text-sm font-medium text-gray-900">Difficulté</label>
            <select id="game-difficulty" value={difficulty} onChange={onChangeDifficulty} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="beginner">Débutant</option>
              <option value="normal">Moyen</option>
              <option value="expert">Expert</option>
            </select>

            <label htmlFor="game-clock-format" className="block text-sm font-medium text-gray-900">Format</label>
            <select id="game-clock-format" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option>Format 12h</option>
              <option>Format 24h</option>
            </select>

          </div>
        </aside>
    )
}

export default OptionMenu;