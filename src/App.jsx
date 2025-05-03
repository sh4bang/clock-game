import { useState, useEffect, useContext } from 'react'
import OptionMenu from './components/OptionMenu'
import Clock from './components/Clock'
import QuestionForm from './components/QuestionForm'
import Header from './components/Header'
import { generateRandomTime } from './services/clock'
import { GameContext } from './contexts/GameContext'

function App() {
  const { mode, setMode, difficulty, setDifficulty, format, setFormat } = useContext(GameContext);
  const [date, setDate] = useState(new Date());
  const [refreshKey, setRefreshKey] = useState(0);
  
  useEffect(() => {
    let intervalId = null;

    if (mode === 'live') {
      intervalId = setInterval(() => {
        setDate(new Date());
      }, 1000);
    }

    if (mode === 'read-time') {
      const { hour, minute } = generateRandomTime(difficulty, format);
      const timeToRead = new Date();
      timeToRead.setHours(hour);
      timeToRead.setMinutes(minute);
      console.log(`Heure à lire : ${timeToRead}`);
      setDate(timeToRead);
    }

    return () => clearInterval(intervalId);
  }, [mode, difficulty, format, refreshKey]);

  const onChangeMode = (newMode) => {
    setMode(newMode.target.value);
  }

  const onChangeDifficulty = (newDifficulty) => {
    console.log('New diff : ', newDifficulty.target.value);
    setDifficulty(newDifficulty.target.value);
  }

  const onCorrectAnswer = () => {
    setRefreshKey(k => k + 1);
  }

  const onSubmitHandle = (responseHour, responseMinute) => {
    if (responseHour == date.getHours() && responseMinute == date.getMinutes()) {
      alert("Bravo ! Vous avez trouvé l'heure !");
      onCorrectAnswer();
    } else {
      alert("Désolé, ce n'est pas l'heure actuelle.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation bar */}
      <Header />

      {/* Main panel */}
      <div className="flex flex-1">
        {/* Side menu */}
        <OptionMenu mode={mode} onChangeMode={onChangeMode} onChangeDifficulty={onChangeDifficulty} />

        {/* Contenu principal */}
        <main className="bg-neutral-200 flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-100 h-100 mb-8">
            <Clock date={date} />
          </div>

          {/* Formulaire de réponse */}
          <QuestionForm onSubmit={onSubmitHandle} />
        </main>
      </div>
    </div>
  )
}

export default App
