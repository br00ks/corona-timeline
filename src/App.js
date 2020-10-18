import React from 'react';
import './App.css';
import {Timeline, TimelineEvent} from 'react-event-timeline'
import Button from 'react-bootstrap/Button';
function App() {
  return (
    <>
      <div className="jumbotron text-center">
        <h1 className="display-4">Covid-19 in Deutschland</h1>
        <div>
        <p>Scrolle runter um mehr zu sehen</p>
<Button>Test </Button>
        </div>
      </div>
      <div className="container">
        <Timeline>

                <TimelineEvent title="Erster Coronafall"
                               createdAt="27.01.2020"
                               >
                    Erster Coronafall in Deutschland (Bayern, Starnberg).
                </TimelineEvent>

                <TimelineEvent
                    title="Corona Rückkehrer aus Wuhan"
                    createdAt="01.02.2020"
                    >
                 Eine Reisegruppe kehr aus Wuhan zurück und muss sich umgehend in Quarantäne begeben.
                </TimelineEvent>
        </Timeline>
      </div>
    </>
  );
}

export default App;
