import React, { useState } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LoginComponent from './Components/Loginpage';
import ScoreSummary from './Components/Scoresummary';
import { ThemeProvider } from './Components/Themecontext';
import Typingpage from './Components/TypingPage';
const App=()=>{
    const [testCompleted, setTestCompleted] = useState(false);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    return(
        <ThemeProvider>
        <div >
            <Header/>
            {testCompleted 
    ? <ScoreSummary wpm={wpm} accuracy={accuracy}/> 
    : <Typingpage onTestEnd={(calculatedWpm, calculatedAccuracy) => {
        setWpm(calculatedWpm);
        setAccuracy(calculatedAccuracy);
        setTestCompleted(true);
    }} />
}
           <Footer/>
           <LoginComponent/>
           
           
        </div>
        </ThemeProvider>
        
    )
}

export default App;